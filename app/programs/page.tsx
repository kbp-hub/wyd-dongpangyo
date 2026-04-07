import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "본당 프로그램 | 동판교성당 WYD 2027",
  description: "2027 WYD 동판교성당 자체 프로그램 안내",
};

const programs = [
  {
    category: "영성 프로그램",
    icon: "🙏",
    items: [
      {
        title: "묵주기도 운동",
        description:
          "WYD 서울 대회를 위한 10억 묵주기도 운동에 본당 차원으로 참여합니다.",
      },
      {
        title: '"누군가 널 위해 기도하네" 영성운동',
        description:
          "수원교구 하늘다리와 연계한 기도 운동입니다. 일일 기도지향을 통해 서로를 위해 기도합니다.",
      },
      {
        title: "WYD 기도 모임",
        description:
          "WYD 성공적 개최와 참가자들을 위한 정기 기도 모임을 계획하고 있습니다.",
      },
    ],
  },
  {
    category: "교육 프로그램",
    icon: "📚",
    items: [
      {
        title: "WYD 사전 교육",
        description:
          "WYD의 역사, 의미, 2027 서울 대회 주제에 대한 교육 프로그램입니다.",
      },
      {
        title: "외국어 교실",
        description:
          "해외 참가자들과의 소통을 위한 기본 영어/스페인어 회화 교실을 준비 중입니다.",
      },
    ],
  },
  {
    category: "봉사 프로그램",
    icon: "🤝",
    items: [
      {
        title: "자원봉사자 모집",
        description:
          "통역, 안내, 홈스테이 지원 등 다양한 분야의 자원봉사자를 모집할 예정입니다.",
      },
      {
        title: "환경정화 봉사",
        description:
          "WYD 행사장 주변 환경 정화 및 생명의 숨결 캠페인(나무 심기) 참여를 계획합니다.",
      },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            본당 프로그램
          </h1>
          <p className="text-gray-600 text-lg">
            2027 WYD 동판교성당 자체 프로그램
          </p>
        </div>

        {/* 안내 배너 */}
        <div className="bg-wyd-gold/20 border border-wyd-gold/40 rounded-xl p-6 mb-12 text-center">
          <p className="text-wyd-blue font-medium">
            본당 프로그램은 현재 준비 중이며, 구체적인 일정과 내용은 확정되는 대로 업데이트됩니다.
          </p>
        </div>

      </div>
    </div>
  );
}
