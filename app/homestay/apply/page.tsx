"use client";

import { useState, type FormEvent } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwqyifvo2uxN7lHoU93QENqmvB5YrdVAjOfCUY40ZxUkrIu7i7Tl5ChVrUF0ZtaOzM/exec";

interface FormErrors {
  [key: string]: string;
}

export default function ApplyPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [nameBaptismal, setNameBaptismal] = useState("");
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityExact, setCapacityExact] = useState("");
  const [genderPref, setGenderPref] = useState("");
  const [pets, setPets] = useState("");
  const [petDetails, setPetDetails] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [languageOther, setLanguageOther] = useState("");
  const [comments, setComments] = useState("");
  const [privacyCollect, setPrivacyCollect] = useState("");
  const [privacyThirdParty, setPrivacyThirdParty] = useState("");
  const [privacyNotice, setPrivacyNotice] = useState("");

  function toggleLanguage(lang: string) {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  }

  function validate(): boolean {
    const e: FormErrors = {};

    if (!nameBaptismal.trim() || nameBaptismal.trim().length < 2)
      e.nameBaptismal = "이름 세례명을 2자 이상 입력해주세요.";

    const phoneRegex = /^01[0-9]-?\d{3,4}-?\d{4}$/;
    if (!phone.trim()) e.phone = "연락처를 입력해주세요.";
    else if (!phoneRegex.test(phone.trim()))
      e.phone = "올바른 연락처를 입력해주세요. (예: 010-1234-5678)";

    if (!capacity) e.capacity = "수용 가능 인원을 선택해주세요.";
    else if (capacity === "4명 이상" && (!capacityExact || parseInt(capacityExact) < 4))
      e.capacity = "4명 이상의 구체적 인원 수를 입력해주세요.";

    if (!genderPref) e.genderPref = "수용 가능 성별을 선택해주세요.";

    if (!pets) e.pets = "반려동물 여부를 선택해주세요.";
    else if (pets === "있음" && !petDetails.trim())
      e.pets = "반려동물 종류와 수를 입력해주세요.";

    if (languages.length === 0)
      e.language = "언어 소통 방법을 최소 1개 선택해주세요.";
    else if (languages.includes("기타") && !languageOther.trim())
      e.language = "기타 외국어를 입력해주세요.";

    if (!privacyCollect)
      e.privacyCollect = "개인정보 수집/이용 동의를 선택해주세요.";
    else if (privacyCollect === "동의하지 않음")
      e.privacyCollect = "개인정보 수집/이용에 동의하셔야 신청이 가능합니다.";

    if (!privacyThirdParty)
      e.privacyThirdParty = "제3자 제공 동의를 선택해주세요.";
    else if (privacyThirdParty === "동의하지 않음")
      e.privacyThirdParty = "제3자 제공에 동의하셔야 신청이 가능합니다.";

    if (!privacyNotice)
      e.privacyNotice = "거부 안내 확인을 선택해주세요.";
    else if (privacyNotice === "아니오")
      e.privacyNotice = "거부 안내를 확인하셔야 신청이 가능합니다.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const capacityValue =
      capacity === "4명 이상" ? `4명 이상(${capacityExact}명)` : capacity;
    const petsValue =
      pets === "있음" ? `있음(${petDetails.trim()})` : "없음";
    const langParts = languages.map((l) =>
      l === "기타" ? `기타: ${languageOther.trim()}` : l
    );

    const data = {
      timestamp: new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
      }),
      nameBaptismal: nameBaptismal.trim(),
      phone: phone.trim(),
      capacity: capacityValue,
      genderPref,
      pets: petsValue,
      language: langParts.join(", "),
      comments: comments.trim(),
      privacyCollect,
      privacyThirdParty,
      privacyNotice,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } catch {
      alert("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-10">
          <div className="text-5xl mb-4 text-green-500">&#10004;</div>
          <h2 className="text-2xl font-bold text-wyd-blue mb-3">
            신청이 완료되었습니다!
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            WYD 홈스테이 호스트로 신청해주셔서 감사합니다.
            <br />
            추후 별도 교육 및 안내가 있을 예정입니다.
          </p>
          <a
            href="/homestay"
            className="inline-block bg-wyd-blue text-white font-medium px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors"
          >
            홈스테이 안내로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-wyd-blue mb-2">
            2027 WYD 수원교구대회 [동판교성당]
            <br />
            홈스테이 제공 신청서
          </h1>
          <p className="text-gray-600">
            아래 양식을 작성하여 홈스테이 호스트로 신청해주세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* 01. 신청자 정보 */}
          <SectionTitle number="01" title="신청자 정보" />

          <FormField label="이름 세례명" required error={errors.nameBaptismal}>
            <input
              type="text"
              value={nameBaptismal}
              onChange={(e) => setNameBaptismal(e.target.value)}
              placeholder="예) 홍길동 바오로"
              className="form-input"
            />
          </FormField>

          <FormField label="연락처" required error={errors.phone}>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="예) 010-1234-5678"
              className="form-input"
            />
          </FormField>

          {/* 02. 홈스테이 정보 */}
          <SectionTitle number="02" title="홈스테이 정보" />

          <FormField
            label="홈스테이 수용 가능 인원"
            required
            hint="안전상의 이유로 2명 이상"
            error={errors.capacity}
          >
            <RadioGroup
              name="capacity"
              options={["2명", "3명", "4명 이상"]}
              value={capacity}
              onChange={(v) => {
                setCapacity(v);
                if (v !== "4명 이상") setCapacityExact("");
              }}
            />
            {capacity === "4명 이상" && (
              <div className="mt-3">
                <input
                  type="number"
                  min={4}
                  value={capacityExact}
                  onChange={(e) => setCapacityExact(e.target.value)}
                  placeholder="구체적 인원 수"
                  className="form-input w-40"
                />
                <span className="ml-2 text-sm text-gray-500">명</span>
              </div>
            )}
          </FormField>

          <FormField
            label="홈스테이 수용 가능 성별"
            required
            error={errors.genderPref}
          >
            <RadioGroup
              name="genderPref"
              options={["남", "여", "무관"]}
              value={genderPref}
              onChange={setGenderPref}
            />
          </FormField>

          <FormField label="반려동물 여부" required error={errors.pets}>
            <RadioGroup
              name="pets"
              options={["없음", "있음"]}
              value={pets}
              onChange={(v) => {
                setPets(v);
                if (v !== "있음") setPetDetails("");
              }}
            />
            {pets === "있음" && (
              <div className="mt-3">
                <input
                  type="text"
                  value={petDetails}
                  onChange={(e) => setPetDetails(e.target.value)}
                  placeholder="예) 강아지 1마리"
                  className="form-input"
                />
              </div>
            )}
          </FormField>

          {/* 03. 소통 및 기타 */}
          <SectionTitle number="03" title="소통 및 기타" />

          <FormField
            label="언어 소통 방법"
            required
            hint="중복 선택 가능"
            error={errors.language}
          >
            <div className="space-y-2">
              {["영어 가능", "통역 앱 사용", "기타"].map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={languages.includes(opt)}
                    onChange={() => {
                      toggleLanguage(opt);
                      if (opt === "기타" && languages.includes("기타"))
                        setLanguageOther("");
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-wyd-blue focus:ring-wyd-blue"
                  />
                  <span className="text-gray-700">
                    {opt === "기타" ? "기타 가능 외국어" : opt}
                  </span>
                </label>
              ))}
            </div>
            {languages.includes("기타") && (
              <div className="mt-3">
                <input
                  type="text"
                  value={languageOther}
                  onChange={(e) => setLanguageOther(e.target.value)}
                  placeholder="예) 일본어, 스페인어"
                  className="form-input"
                />
              </div>
            )}
          </FormField>

          <FormField label="기타 고려사항, 궁금한 점, 하고 싶은 말 등" hint="자유 기재">
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              placeholder="순례자에게 전하고 싶은 말이나 기타 사항을 자유롭게 적어주세요."
              className="form-input"
            />
          </FormField>

          {/* 04. 개인정보 동의 */}
          <SectionTitle number="04" title="개인정보 수집/이용/제공 동의" />

          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              개인정보를 수집·이용하거나 제3자에게 제공하고자 하는 경우에
              「개인정보보호법」에 따라 본인의 동의를 얻어야 하므로, 천주교는
              아래의 내용과 같이 귀하의 개인정보를 수집·이용 또는 제3자에게
              제공하는 것에 관하여 안내하고 동의 여부를 확인하고자 합니다.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium w-24 align-top">
                      목적
                    </th>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      본인 및 세대 확인, 성사 자료 입력 및 증명을 위한 정보,
                      사목 활동 기록 및 교회 소식 제공을 위한 자료 활용
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium align-top">
                      수집항목
                    </th>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      <strong>필수:</strong> 성명, 세례명, 전화번호, 주소 등
                      개인 식별 정보
                      <br />
                      <strong>선택:</strong> 개인 식별 정보 이외의 정보
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium align-top">
                      보유기간
                    </th>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      내부 규정으로 정한 일정 기간 동안 보관된 후 파기. 삭제
                      요구 가능 (단, 성사 대장 기록 사항은 보존)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium align-top">
                      제3자 제공
                    </th>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      수집이용 목적 범위 내에서 처리하며, 사전 동의 없이 본래
                      목적을 초과하여 제3자에게 제공하지 않음
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-gray-50 px-3 py-2 text-left font-medium align-top">
                      거부 권리
                    </th>
                    <td className="px-3 py-2 text-gray-600 leading-relaxed">
                      정보 제공을 거부할 수 있으나, 필수 정보 미제공 시 사목상
                      불이익 초래 가능
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <FormField
                label="천주교가 위와 같이 본인의 개인정보를 수집이용하는 것에 동의합니다."
                required
                error={errors.privacyCollect}
              >
                <RadioGroup
                  name="privacyCollect"
                  options={["동의함", "동의하지 않음"]}
                  value={privacyCollect}
                  onChange={setPrivacyCollect}
                />
              </FormField>

              <FormField
                label="제3자 제공에 동의합니다."
                required
                error={errors.privacyThirdParty}
              >
                <RadioGroup
                  name="privacyThirdParty"
                  options={["동의함", "동의하지 않음"]}
                  value={privacyThirdParty}
                  onChange={setPrivacyThirdParty}
                />
              </FormField>

              <FormField
                label="동의를 거부할 수 있다는 안내를 받았습니다."
                required
                error={errors.privacyNotice}
              >
                <RadioGroup
                  name="privacyNotice"
                  options={["예", "아니오"]}
                  value={privacyNotice}
                  onChange={setPrivacyNotice}
                />
              </FormField>
            </div>

            <p className="text-sm text-gray-700 font-medium mt-4 pt-4 border-t border-gray-200">
              본인은 본 「개인정보 수집·이용·제공 동의」 내용을 읽고 명확히
              이해하였으며, 이에 동의합니다.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wyd-red text-white font-bold py-4 rounded-xl text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "제출 중..." : "신청서 제출하기"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Helper Components ── */

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-5">
      <span className="bg-wyd-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
        {number}
      </span>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    </div>
  );
}

function FormField({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="block font-medium text-gray-800 mb-1.5">
        {label}
        {required && <span className="text-wyd-red ml-1">*</span>}
      </label>
      {hint && <p className="text-xs text-gray-500 mb-2">{hint}</p>}
      {children}
      {error && <p className="text-sm text-wyd-red mt-1.5">{error}</p>}
    </div>
  );
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
            value === opt
              ? "border-wyd-blue bg-wyd-blue/5 text-wyd-blue"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              value === opt ? "border-wyd-blue" : "border-gray-300"
            }`}
          >
            {value === opt && (
              <span className="w-2 h-2 rounded-full bg-wyd-blue" />
            )}
          </span>
          <span className="text-sm font-medium">{opt}</span>
        </label>
      ))}
    </div>
  );
}
