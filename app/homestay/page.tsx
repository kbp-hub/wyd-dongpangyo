import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { homestayFAQ } from "@/data/homestay-faq";

export const metadata: Metadata = {
  title: "홈스테이 안내 | 동판교성당 WYD 2027",
  description: "WYD 2027 수원교구대회 홈스테이 제공 가이드 및 신청 안내",
};

const infoCards = [
  {
    icon: "📅",
    title: "일정",
    content: (
      <>
        <span className="text-wyd-blue font-bold text-lg">2027</span>년{" "}
        <span className="font-bold text-base">7</span>월{" "}
        <span className="font-bold text-base">29</span>일(<span className="font-bold text-base">목</span>) ~{" "}
        <span className="font-bold text-base">8</span>월{" "}
        <span className="font-bold text-base">2</span>일(<span className="font-bold text-base">월</span>)
        <br />
        <strong>4박 5일</strong>
      </>
    ),
  },
  {
    icon: "🏠",
    title: "숙박 / 세탁 / 조식",
    content: (
      <>
        침대 등 준비 불필요
        <br />
        (순례자 개인침구류 지참)
        <br />
        세탁 및 간단한 매일 조식 1끼
      </>
    ),
  },
  {
    icon: "👥",
    title: "같은 성별 2명 이상",
    content: (
      <>
        안전상의 이유로
        <br />
        1명만 수용 불가
      </>
    ),
  },
];

const extraInfo = [
  {
    title: "맞벌이 가정도 가능",
    content:
      "외부 저녁 식사 후 귀가. 최소 의무 통금 00~06시. 귀가 및 통금시간 조율 가능",
  },
  {
    title: "외국어 무방",
    content:
      "외국어 가능 여부 무방. 최소 소통 목적 그림의사소통(AAC) 카드 제공 예정",
  },
];

const checklist = [
  {
    category: "숙소 환경",
    items: [
      "순례자가 머물 수 있는 별도 방 또는 공간",
      "온수 사용 가능한 화장실/샤워시설",
      "Wi-Fi 인터넷 환경 (가능한 경우)",
      "침구류는 순례자가 개인 지참 (별도 준비 불필요)",
    ],
  },
  {
    category: "식사 · 세탁",
    items: [
      "간단한 아침 식사 매일 1끼 제공",
      "점심·저녁은 대회 프로그램에서 해결",
      "세탁 편의 제공",
    ],
  },
  {
    category: "교통",
    items: [
      "가까운 대중교통(지하철/버스) 정보 안내",
      "행사장까지의 이동 경로 안내",
      "교통카드 사용법 안내",
    ],
  },
  {
    category: "소통",
    items: [
      "번역 앱 설치 (파파고, Google 번역 등)",
      "그림의사소통(AAC) 카드 활용 (교구 제공 예정)",
      "긴급 연락처 공유 (본당, 교구 사무국)",
    ],
  },
];

export default function HomestayPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            홈스테이 가정 모집
          </h1>
          <p className="text-gray-600 text-lg">
            해외 청년들을 우리 집에 초대하세요!
          </p>
        </div>

        {/* 홈스테이란? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            홈스테이란?
          </h2>
          <div className="bg-wyd-light rounded-xl p-6 text-gray-700 leading-relaxed space-y-4 text-center">
            <p>
              WYD 기간 동안 해외에서 온 청년 순례자들에게 숙소를 제공하는 프로그램입니다.
              <br />
              가정의 따뜻함을 나누며 세계 가톨릭 청년들과 특별한 만남을 경험하세요.
            </p>
            <div className="text-center">
              <a
                href="https://youtu.be/wxxj-Dob4fI?si=lkmkf30_bKBYHH1E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-wyd-red text-white font-medium px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors"
              >
                &#9654; WYD 홈스테이 영상 보기
              </a>
            </div>
          </div>
        </section>

        {/* 핵심 안내 카드 */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center"
              >
                <span className="text-3xl block mb-2">{card.icon}</span>
                <h3 className="font-bold text-wyd-blue mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 추가 안내 */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-wyd-blue to-blue-800 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold text-wyd-gold text-lg mb-2">
                맞벌이 가정도 가능
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                외부 저녁 식사 후 귀가. 최소의무통금 00~06시
                <br />
                귀가 및 통금시간 조율 가능
              </p>
            </div>
            <div className="bg-gradient-to-br from-wyd-blue to-blue-800 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold text-wyd-gold text-lg mb-2">
                외국어 무방
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                외국어 가능 여부 무방
                <br />
                최소 소통 목적 그림의사소통(AAC)카드 제공 예정
              </p>
            </div>
          </div>
        </section>

        {/* 안내 사항 */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-gray-700 leading-relaxed space-y-3">
            <p>
              아직 본당 배정 인원이 정해지지 않은 상태로, 본 신청으로는 여러분이
              홈스테이 호스트로 참여하실 때 제공 가능한 사항 등을 조사해서 향후
              본당 배정 인원 등이 결정되었을 때에 참고하고자 합니다.
            </p>
            <p className="text-sm text-gray-500">
              * 교구에서도 홈스테이 가정 모집 설문을 진행하고 있으나, 교구
              설문에 참여해 주신 분들도 본당 행사 준비 등을 위해 본 설문에 다시
              응해주시기를 부탁드립니다. 추후 본당 홈스테이 가정은 교구로
              보고되어 합산 집계될 예정이므로, 본 설문에 답해주신 분들은 교구
              설문에 다시 참여하지 않으셔도 괜찮습니다.
            </p>
          </div>
        </section>

        {/* 준비 사항 체크리스트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            준비 사항 체크리스트 (수정중)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklist.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-wyd-blue mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-wyd-gold mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 기본 영어 표현 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            기본 영어 표현 가이드
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-wyd-blue text-white">
                <tr>
                  <th className="px-4 py-3 text-left">상황</th>
                  <th className="px-4 py-3 text-left">영어</th>
                  <th className="px-4 py-3 text-left">한국어</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">환영</td>
                  <td className="px-4 py-3">Welcome to our home!</td>
                  <td className="px-4 py-3">우리 집에 오신 것을 환영합니다!</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">식사</td>
                  <td className="px-4 py-3">
                    Are you hungry? / Breakfast is ready.
                  </td>
                  <td className="px-4 py-3">
                    배고프세요? / 아침 준비됐어요.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">교통</td>
                  <td className="px-4 py-3">
                    The subway station is nearby.
                  </td>
                  <td className="px-4 py-3">지하철역이 가까워요.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">통금</td>
                  <td className="px-4 py-3">
                    Please come back by midnight.
                  </td>
                  <td className="px-4 py-3">
                    자정까지 돌아와 주세요.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">긴급</td>
                  <td className="px-4 py-3">
                    In case of emergency, call 119.
                  </td>
                  <td className="px-4 py-3">
                    긴급 상황 시 119에 전화하세요.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            자주 묻는 질문
          </h2>
          <FAQ items={homestayFAQ} />
        </section>

        {/* 신청 CTA */}
        <section className="bg-gradient-to-br from-wyd-red to-red-700 text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">
            홈스테이 제공 가정을 모집합니다
          </h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            세계 각국의 청년들에게 한국 가정의 따뜻한 환대를 선물해 주세요.
            <br />
            아래 버튼을 클릭하여 신청서를 작성해 주시면 됩니다.
          </p>
          <Link
            href="/homestay/apply"
            className="inline-block bg-white text-wyd-red font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            홈스테이 제공 신청하기
          </Link>
          <p className="text-sm text-white/70 mt-4">
            * 홈스테이 신청가정 대상 별도 교육 및 재안내 예정
          </p>
          <p className="text-sm text-white/80 mt-4 pt-4 border-t border-white/20">
            문의: WYD 동판교성당 조직위원회{" "}
            <a href="tel:010-9397-0296" className="font-bold text-white underline">
              010-9397-0296
            </a>{" "}
            (문자 우선)
          </p>
        </section>

        {/* 경험담 */}
        <section>
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            홈스테이 경험담
          </h2>
          <div className="space-y-4">
            <div className="bg-wyd-light rounded-xl p-6">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;2023년 리스본 WYD에서 포르투갈 가정에 머물렀던 경험은
                평생 잊을 수 없습니다. 말이 잘 통하지 않았지만, 함께 기도하고
                식사하며 진정한 보편 교회의 의미를 느꼈습니다.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-3">
                - 2023 리스본 WYD 참가자 경험담
              </p>
            </div>
            <div className="bg-wyd-light rounded-xl p-6">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;낯선 나라에서 온 청년을 맞이하는 것이 처음에는
                걱정되었지만, 함께 지내면서 오히려 저희 가족이 더 큰 은혜를
                받았습니다. 신앙의 기쁨을 나누는 아름다운 경험이었습니다.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-3">
                - 과거 WYD 홈스테이 제공 가정 후기
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
