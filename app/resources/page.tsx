"use client";

import { useEffect, useState, useRef } from "react";
import { supabase, BUCKET_NAME } from "@/lib/supabase";

interface FileItem {
  name: string;
  displayName: string;
  size: number;
  created_at: string;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default function ResourcesPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function fetchFiles() {
    setLoading(true);
    const { data: storageData, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list("", { sortBy: { column: "created_at", order: "desc" } });

    if (error) {
      setMessage({ type: "error", text: "파일 목록을 불러오지 못했습니다." });
    } else {
      const filtered = (storageData || []).filter(
        (f) => f.name !== ".emptyFolderPlaceholder"
      );

      // DB에서 원본 파일명 매핑 가져오기
      const { data: metaData } = await supabase
        .from("file_metadata")
        .select("storage_name, original_name");

      const nameMap = new Map(
        (metaData || []).map((m) => [m.storage_name, m.original_name])
      );

      setFiles(
        filtered.map((f) => ({
          name: f.name,
          displayName: nameMap.get(f.name) ?? f.name,
          size: f.metadata?.size ?? 0,
          created_at: f.created_at ?? "",
        }))
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    // 한글/특수문자 파일명 처리: 안전한 이름으로 저장, 원본명은 DB에 보관
    const ext = file.name.split(".").pop() || "";
    const safeName = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;

    // Supabase 클라이언트 대신 fetch API로 직접 업로드 (한글 헤더 문제 회피)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const uploadUrl = `${supabaseUrl}/storage/v1/object/${BUCKET_NAME}/${safeName}`;

    try {
      if (!supabaseUrl || !supabaseKey) {
        setMessage({ type: "error", text: "Supabase 설정이 누락되었습니다. 환경변수를 확인하세요." });
        setUploading(false);
        return;
      }

      const buffer = await file.arrayBuffer();
      const contentType = file.type || "application/octet-stream";

      const res = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
          "Content-Type": contentType,
          "x-upsert": "true",
        },
        body: buffer,
      });

      if (!res.ok) {
        const text = await res.text();
        setMessage({ type: "error", text: `업로드 실패: ${text}` });
      } else {
        // DB에 원본 파일명 저장
        try {
          await supabase.from("file_metadata").insert({
            storage_name: safeName,
            original_name: file.name,
            size: file.size,
          });
        } catch {
          // 메타데이터 저장 실패해도 파일 업로드는 성공
        }
        setMessage({ type: "success", text: `"${file.name}" 업로드 완료` });
        fetchFiles();
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: `업로드 실패: ${err instanceof Error ? err.message : String(err)}`,
      });
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleDownload(fileName: string) {
    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);
    window.open(data.publicUrl, "_blank");
  }

  async function handleDelete(fileName: string) {
    if (!confirm(`"${fileName}" 파일을 삭제하시겠습니까?`)) return;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) {
      setMessage({ type: "error", text: `삭제 실패: ${error.message}` });
    } else {
      await supabase
        .from("file_metadata")
        .delete()
        .eq("storage_name", fileName);
      setMessage({ type: "success", text: "삭제 완료" });
      fetchFiles();
    }
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            자료실
          </h1>
          <p className="text-gray-600 text-lg">
            2027 WYD 관련 자료를 공유합니다
          </p>
        </div>

        {/* 업로드 */}
        <section className="mb-8">
          <div className="bg-wyd-light rounded-xl p-6">
            <h2 className="font-bold text-wyd-blue mb-3">파일 업로드</h2>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleUpload}
                disabled={uploading}
                className="text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-wyd-blue file:text-white hover:file:bg-blue-800 file:cursor-pointer file:transition-colors disabled:opacity-50"
              />
              {uploading && (
                <span className="text-sm text-gray-500">업로드 중...</span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * 최대 50MB까지 업로드 가능합니다
            </p>
          </div>
        </section>

        {/* 메시지 */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* 파일 목록 */}
        <section>
          <h2 className="text-xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            자료 목록
          </h2>

          {loading ? (
            <div className="text-center py-12 text-gray-500">
              불러오는 중...
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              등록된 자료가 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">
                      {file.displayName}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {formatSize(file.size)}
                      {file.created_at && ` · ${formatDate(file.created_at)}`}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => handleDownload(file.name)}
                      className="bg-wyd-blue text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
                    >
                      다운로드
                    </button>
                    <button
                      onClick={() => handleDelete(file.name)}
                      className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
