import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "영성 참여 | 동판교성당 WYD 2027",
  description: "2027 WYD 성공적 개최를 위한 영성 참여 프로그램",
};

const programs: {
  category: string;
  icon: string;
  items: { title: string; description: string; link?: string; linkLabel?: string }[];
}[] = [
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
        link: "https://heavenbridge.net/seabout",
        linkLabel: "하늘다리 바로가기",
      },
    ],
  },
];

export default function JoinPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            영성 참여
          </h1>
          <p className="text-gray-600 text-lg">
            2027 WYD 성공적 개최를 위한 영성 참여 프로그램
          </p>
        </div>

        {/* WYD 십자가·성모성화 순례 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-6 border-l-4 border-wyd-red pl-4">
            <span className="mr-2">✝️</span>
            WYD 십자가·성모성화 순례
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-wyd-blue mb-3">
                40년간 전 세계를 순례한 &lsquo;WYD 십자가&rsquo;
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  &ldquo;인류를 향한 그리스도의 사랑의 상징인 십자가를 온 세상
                  방방곡곡으로 나르십시오.&rdquo;라는 성 요한 바오로 2세 교황의
                  권고에 응답하여 젊은이들은 지난 40여년간 WYD 십자가와 함께 온
                  세상을 순례하였습니다.
                </p>
                <p>
                  1996년부터 세계청년대회 개최국 청년들에게 십자가가 전달되는
                  전통이 시작되었습니다. 필리핀 청년들이 프랑스 청년들에게
                  &lsquo;WYD 십자가&rsquo;를 전달하였고 지금까지 이 전통은
                  지속되고 있습니다.
                </p>
                <p>
                  젊은이들은 WYD 십자가를 도보 뿐만 아니라 보트, 썰매, 크레인,
                  트랙터와 같은 다양한 운송 수단을 이용하여 이동시켰고 울창한
                  숲을 통과하고 교회, 교도소, 학교, 대학, 병원, 쇼핑센터 등
                  다양한 장소를 방문하였습니다. 세계의 젊은이들과 함께하는 이
                  십자가는 세계 약 90개국을 순례하였으며 특별히 내전을 앓고
                  있거나, 긴장이 심한 지역에서 화해를 가져오는 데 도움을 주었고
                  희망의 상징으로 자리매김하게 되었습니다.
                </p>
                <p>
                  2003년, 성 요한 바오로 2세 교황은 &lsquo;WYD
                  십자가&rsquo;의 순례 여정에 &lsquo;로마 백성의
                  구원자&rsquo; 성모 성화를 함께하도록 하셨습니다.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-wyd-gold/20 to-wyd-gold/5 border-2 border-wyd-gold rounded-xl p-6">
              <h3 className="font-bold text-lg text-wyd-blue mb-3">
                지금 십자가는
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  2024년 11월 24일에 한국 젊은이들이 이전 대회 개최지였던
                  포르투갈 젊은이들로부터 십자가를 인수했습니다. 이후
                  서울대교구, 대구대교구, 수원교구 등을 거쳐 2025년 2월 10일
                  인천교구를 마지막으로 방글라데시로 십자가가 넘어갔습니다.
                </p>
                <p>
                  십자가와 성모성화는 2025년 4월 7일부터 16일까지 다시
                  서울대교구로 왔다가 이후 일본, 필리핀, 대만, 로마, 동티모르,
                  태국, 인도네시아, 호주 등으로 순례했습니다.
                </p>
                <p>
                  2025년 12월 8일 다시 한국으로 온 십자가와 성모성화는
                  원주교구, 춘천교구 등을 거쳐 2026년 3월 25일부터 4월
                  22일까지 수원교구를 순례했습니다.
                </p>
                <p className="font-medium text-wyd-blue">
                  우리 동판교성당은 2026년 3월 31일에 순례를 맞아 십자가,
                  성모성화와 함께하는 미사를 봉헌했습니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/wyd-cross-1.jpg"
                  alt="WYD 십자가성화순례 동판교성당 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/wyd-cross-2.jpg"
                  alt="WYD 십자가성화순례 동판교성당 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 프로그램 목록 */}
        {programs.map((program) => (
          <section key={program.category} className="mb-12">
            <h2 className="text-2xl font-bold text-wyd-blue mb-6 border-l-4 border-wyd-red pl-4">
              <span className="mr-2">{program.icon}</span>
              {program.category}
            </h2>
            <div className="space-y-4">
              {program.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-wyd-blue/30 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 bg-wyd-blue text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-800 transition-colors"
                    >
                      {item.linkLabel}
                    </a>
                  ) : (
                    <span className="inline-block mt-3 text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full">
                      일정 확정 예정
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
