import type { Metadata } from "next";
import { newsList } from "@/data/news";

export const metadata: Metadata = {
  title: "소식 | 동판교성당 WYD 2027",
  description: "동판교성당 WYD 2027 관련 공지사항 및 소식",
};

export default function NewsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            소식 / 공지
          </h1>
          <p className="text-gray-600 text-lg">
            2027 WYD 관련 최신 소식과 공지사항
          </p>
        </div>

        {/* 소식 목록 */}
        <div className="space-y-4">
          {newsList.map((news) => (
            <article
              key={news.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-wyd-blue/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    news.category === "공지"
                      ? "bg-red-100 text-red-700"
                      : news.category === "소식"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {news.category}
                </span>
                <time className="text-sm text-gray-500">{news.date}</time>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {news.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{news.summary}</p>
            </article>
          ))}
        </div>

        {newsList.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">아직 등록된 소식이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
