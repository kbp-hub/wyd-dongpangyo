import Link from "next/link";
import Countdown from "@/components/Countdown";
import { newsList } from "@/data/news";

const quickLinks = [
  {
    href: "/about",
    title: "WYD 소개",
    description: "세계청년대회란 무엇인가요?",
    icon: "🌍",
  },
  {
    href: "/homestay",
    title: "홈스테이",
    description: "홈스테이 제공 안내 및 신청",
    icon: "🏠",
  },
  {
    href: "/programs",
    title: "본당 프로그램",
    description: "2027 WYD 동판교성당 자체 프로그램",
    icon: "📖",
  },
  {
    href: "/participate",
    title: "봉사자 모집",
    description: "봉사 분야 안내 및 참여 문의",
    icon: "✋",
  },
  {
    href: "/join",
    title: "영성 참여",
    description: "영성 참여 프로그램",
    icon: "🙏",
  },
  {
    href: "/resources",
    title: "자료실",
    description: "WYD 관련 자료 공유",
    icon: "📁",
  },
  {
    href: "/news",
    title: "소식",
    description: "최신 소식과 공지사항",
    icon: "📢",
  },
];

export default function Home() {
  const latestNews = newsList.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wyd-blue via-wyd-blue to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wyd-gold font-medium mb-2 text-lg">
            천주교 수원교구 동판교성당
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            2027 WYD
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2 text-white/90">
            세계청년대회
          </p>
          <blockquote className="text-lg md:text-xl italic text-wyd-gold mt-6 mb-10">
            &ldquo;용기를 내어라. 내가 세상을 이겼다&rdquo;
            <span className="block text-sm mt-1 text-white/70 not-italic">
              요한 16,33
            </span>
          </blockquote>

          <div className="mb-6">
            <p className="text-sm text-white/70 mb-3">수원교구대회까지</p>
            <Countdown />
          </div>
        </div>
      </section>

      {/* 대회 일정 요약 - 수원교구대회 우선 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-wyd-blue mb-10">
            대회 일정
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 수원교구대회 - 우선 표시 */}
            <div className="bg-gradient-to-br from-wyd-gold/20 to-wyd-gold/5 rounded-xl p-6 border-2 border-wyd-gold relative">
              <span className="absolute -top-3 left-4 bg-wyd-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                우리 교구
              </span>
              <h3 className="text-xl font-bold text-wyd-blue mb-1 mt-1">
                수원교구대회
              </h3>
              <p className="text-2xl font-bold text-wyd-gold mb-3">
                7/29(목) ~ 8/2(월)
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-wyd-gold">&#10003;</span>
                  수원교구 환영 행사 및 개막 프로그램
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-gold">&#10003;</span>
                  문화 체험 및 성지 순례
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-gold">&#10003;</span>
                  교구 청년 교류 및 영성 프로그램
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-gold">&#10003;</span>
                  홈스테이 기간 (해외 참가자 가정 숙박)
                </li>
              </ul>
              <Link
                href="/schedule"
                className="inline-block mt-4 text-sm text-wyd-blue font-medium hover:text-wyd-red transition-colors"
              >
                상세 일정 보기 &rarr;
              </Link>
            </div>

            {/* 서울본대회 */}
            <div className="bg-gradient-to-br from-wyd-red/10 to-wyd-red/5 rounded-xl p-6 border border-wyd-red/30">
              <h3 className="text-xl font-bold text-wyd-blue mb-1 mt-1">
                서울본대회
              </h3>
              <p className="text-2xl font-bold text-wyd-red mb-3">
                8/3(화) ~ 8/8(주일)
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-wyd-red">&#10003;</span>
                  개막미사 · 주교님과의 만남 (교리교육)
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-red">&#10003;</span>
                  젊은이 축제 · 화해공원 · 가톨릭문화박람회
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-red">&#10003;</span>
                  교황 환영 행사 · 십자가의 길 · 밤샘기도
                </li>
                <li className="flex gap-2">
                  <span className="text-wyd-red">&#10003;</span>
                  폐막미사 · 봉사자들과의 만남
                </li>
              </ul>
              <Link
                href="/schedule"
                className="inline-block mt-4 text-sm text-wyd-blue font-medium hover:text-wyd-red transition-colors"
              >
                상세 일정 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-wyd-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-wyd-blue mb-10">
            바로가기
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <span className="text-4xl block mb-3">{link.icon}</span>
                <h3 className="font-bold text-lg text-wyd-blue group-hover:text-wyd-red transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-wyd-blue mb-8">최신 소식</h2>
          <div className="space-y-4">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="border border-gray-200 rounded-lg p-5 hover:border-wyd-blue/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      news.category === "공지"
                        ? "bg-red-100 text-red-700"
                        : news.category === "소식"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{news.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{news.summary}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="text-wyd-blue hover:text-wyd-red font-medium transition-colors"
            >
              소식 더보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wyd-red text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            홈스테이로 세계 청년들을 맞이해 주세요
          </h2>
          <p className="text-white/90 mb-6">
            우리 가정의 따뜻한 환대가 WYD의 시작입니다
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/homestay/apply"
              className="inline-block bg-white text-wyd-red font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              홈스테이 신청하기
            </Link>
            <Link
              href="/homestay"
              className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
