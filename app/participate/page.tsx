import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "참여 안내 | 동판교성당 WYD 2027",
  description: "동판교성당 WYD 2027 준비 및 본당 행사 봉사 참여 안내",
};

const volunteerRoles = [
  {
    icon: "🌐",
    title: "외국어 통역/안내",
    description: "외국어 통역/안내, 외국어 정보 제공, 동행 등",
  },
  {
    icon: "🏠",
    title: "숙박관리 (홈스테이/본당)",
    description: "홈스테이/본당 숙박 인원 체크, 일정/동선 관리 등",
  },
  {
    icon: "🍽️",
    title: "급식",
    description: "본당 숙박 순례자 식사 준비 및 배식 등",
  },
  {
    icon: "📋",
    title: "현장지원",
    description: "각종 행사시 현장 안내/통제/동행 등 지원",
  },
  {
    icon: "🚗",
    title: "차량/주차",
    description: "이동 지원, 본당 행사시 본당 주차 지원 등",
  },
  {
    icon: "🏥",
    title: "의료",
    description: "의약품 관리, 응급조치 등",
  },
  {
    icon: "💻",
    title: "IT지원",
    description:
      "동판교성당 WYD 준비 홈페이지 운영 및 관리, AI활용 통역 등 IT활용 제반 지원",
  },
  {
    icon: "🎬",
    title: "영상/홍보",
    description: "영상 촬영 및 제작, 홍보부스 운영, 기타 홍보 지원 등",
  },
  {
    icon: "🙏",
    title: "기타",
    description: "기도/영성프로그램 지원 등 기타 지원",
  },
];

export default function ParticipatePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            봉사자 모집
          </h1>
          <p className="text-gray-600 text-lg">
            동판교성당 WYD 준비 및 본당 행사를 함께 도와주세요
          </p>
        </div>

        {/* 안내 */}
        <section className="mb-12">
          <div className="bg-wyd-light rounded-xl p-6 text-center text-gray-700 leading-relaxed">
            <p>
              2027 WYD 수원교구대회를 준비하고 본당 행사를 성공적으로 운영하기 위해
              <br />
              다양한 분야의 봉사자를 모집합니다.
            </p>
          </div>
        </section>

        {/* 봉사 분야 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-6 border-l-4 border-wyd-red pl-4">
            봉사 분야 (예시)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-wyd-blue/30 transition-colors"
              >
                <span className="text-3xl block mb-3">{role.icon}</span>
                <h3 className="font-bold text-wyd-blue mb-2">{role.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 문의 */}
        <section>
          <div className="bg-gradient-to-br from-wyd-blue to-blue-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              봉사에 참여하고 싶으신가요?
            </h2>
            <p className="text-white/90 mb-4">
              봉사 참여에 관심이 있으신 분은 아래로 문의해 주세요.
            </p>
            <p className="text-white/80">
              WYD 동판교성당 조직위원회{" "}
              <a
                href="tel:010-9397-0296"
                className="font-bold text-wyd-gold underline"
              >
                010-9397-0296
              </a>{" "}
              (문자 우선)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
