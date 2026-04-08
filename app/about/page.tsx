import type { Metadata } from "next";
import Image from "next/image";
import { dioceseDays, mainEvents } from "@/data/schedule";

export const metadata: Metadata = {
  title: "WYD 소개 | 동판교성당 WYD 2027",
  description: "세계청년대회(WYD)란 무엇인가? 2027 서울 대회 소개 및 일정",
};

function TimelineItem({
  date,
  title,
  description,
  type,
}: {
  date: string;
  title: string;
  description: string;
  type: "diocese" | "main";
}) {
  const color = type === "diocese" ? "bg-wyd-gold" : "bg-wyd-red";
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${color} shrink-0 mt-1`} />
        <div className="w-0.5 bg-gray-200 flex-1" />
      </div>
      <div className="pb-8">
        <span className="text-sm font-medium text-gray-500">{date}</span>
        <h3 className="font-bold text-gray-900 mt-0.5">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{description}</p>}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            WYD 소개
          </h1>
          <p className="text-gray-600 text-lg">세계청년대회를 알아봅시다</p>
        </div>

        {/* WYD란? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            WYD란?
          </h2>
          <div className="bg-wyd-light rounded-xl p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>세계청년대회(World Youth Day, WYD)</strong>는 가톨릭
              교회가 1986년부터 거행하는{" "}
              <strong>&lsquo;세계 젊은이의 날&rsquo;</strong>입니다. 매년
              교구 차원에서 지역 교회 행사로 거행하나, 2~4년 간격으로 교황이
              지정한 교구에서 대규모의 국제 대회로 개최됩니다.
            </p>
            <p>
              국제대회에서는 개폐막 미사, 주교들의 교리교육, 참회예절과
              고해성사, 십자가의 길, 밤샘기도 등 전 세계 청년들의 순례와
              친교를 위한 다양한 행사가 진행됩니다. 전통적으로 교황이 주요
              일정을 함께하며 강론과 연설을 진행합니다.
            </p>
            <p>
              본대회 전에는 1주일가량{" "}
              <strong>&lsquo;교구대회(DID: Days in Dioceses)&rsquo;</strong>
              가 열려, 참가자들이 개최 교구와 인근 지역 교구들에
              머물며(홈스테이) 현지 신자들과 교류합니다.
            </p>
          </div>
        </section>

        {/* 2027 수원교구대회 & 서울 세계청년대회 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            2027 대회 안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 수원교구대회 + 일정 */}
            <div>
              <div className="bg-gradient-to-br from-wyd-gold/20 to-wyd-gold/5 rounded-xl p-6 border-2 border-wyd-gold relative mb-6">
                <span className="absolute -top-3 left-4 bg-wyd-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  우리 교구
                </span>
                <h3 className="font-bold text-lg text-wyd-blue mb-3 mt-1">
                  2027 수원교구대회 (DID)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-wyd-gold font-bold shrink-0">장소</span>
                    <span>수원교구</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-gold font-bold shrink-0">기간</span>
                    <span>2027년 7월 29일(목) ~ 8월 2일(월), 4박 5일</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-gold font-bold shrink-0">대상</span>
                    <span>해외 참가 청년 순례자</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-gold font-bold shrink-0">규모</span>
                    <span>예상 참가자 1만~3만명</span>
                  </li>
                </ul>
              </div>
              <h3 id="suwon-schedule" className="text-lg font-bold text-wyd-blue mb-4 border-l-4 border-wyd-gold pl-3">
                수원교구대회 일정 (예상, 미정)
              </h3>
              <div className="ml-2">
                {dioceseDays.map((event, i) => (
                  <TimelineItem key={i} {...event} />
                ))}
              </div>
            </div>

            {/* 서울 세계청년대회 + 일정 */}
            <div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-wyd-blue mb-3">
                  2027 서울 세계청년대회
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-wyd-red font-bold shrink-0">장소</span>
                    <span>대한민국 서울</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-red font-bold shrink-0">기간</span>
                    <span>2027년 8월 3일(화) ~ 8일(주일), 5박 6일</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-red font-bold shrink-0">대상</span>
                    <span>14~30세 (모든 종교/배경 환영)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-wyd-red font-bold shrink-0">규모</span>
                    <span>예상 참가자 50~70만명</span>
                  </li>
                </ul>
              </div>
              <h3 id="seoul-schedule" className="text-lg font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-3">
                서울 본대회 일정
              </h3>
              <div className="ml-2">
                {mainEvents.map((event, i) => (
                  <TimelineItem key={i} {...event} />
                ))}
              </div>
            </div>
          </div>

          {/* 대회 주제 */}
          <div className="mt-6 bg-wyd-blue rounded-xl p-8 text-center text-white">
            <p className="text-sm text-white/70 mb-2">2027 WYD 대회 주제 성구</p>
            <blockquote className="text-2xl md:text-3xl italic font-semibold text-wyd-gold mb-3">
              &ldquo;용기를 내어라. 내가 세상을 이겼다&rdquo;
            </blockquote>
            <p className="text-white/80 mb-3">요한 16,33</p>
            <p className="text-sm text-white/70">
              이 주제는 어려움과 도전 속에서도 희망과 용기를 잃지 않는 그리스도의 메시지를 담고 있습니다.
            </p>
          </div>
        </section>

        {/* WYD 상징물 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            WYD 상징물
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 십자가 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-wyd-blue mb-3">십자가</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                교황 요한 바오로 2세는 1984년 &lsquo;구원의 특별성년&rsquo;을
                기념하여 제작된 나무 십자가를 젊은이들에게 맡겼습니다. 교황은
                젊은이들이야말로 십자가의 사랑을 전할 수 있는 복음 선포의
                주역이라 여기며, 젊은이들이 세계 곳곳에 이 십자가를 들고 다니며
                그리스도의 사랑을 전해주길 요청하였습니다.
              </p>
            </div>

            {/* 성화 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-wyd-blue mb-3">
                성화 &lsquo;Salus Populi Romani&rsquo;{" "}
                <span className="text-sm font-normal text-gray-500">
                  (로마 백성의 구원)
                </span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                교황 요한 바오로 2세는 &lsquo;Salus Populi Romani&rsquo; 성화를
                2003년 젊은이들에게 선물하여, 십자가와 함께 순례할 수 있게
                하였습니다. 여기에는 성모님께서 젊은이들 안에 늘 함께 계시며,
                성모님을 통해 그리스도께 더욱 가까워질 수 있다는 메시지가 담겨
                있습니다. 전통적으로 이 성화에는 전염병 등 각종
                &lsquo;위험에서의 보호&rsquo;의 의미가 담겨 있습니다.
              </p>
            </div>
          </div>

        </section>

        {/* 한국 가톨릭 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-red pl-4">
            한국 가톨릭의 특수성
          </h2>
          <div className="bg-wyd-light rounded-xl p-6 text-gray-700 leading-relaxed">
            <p>
              한국 천주교회는 세계에서{" "}
              <strong>외국 선교사 없이 자국민이 스스로 신앙을 받아들여 세운
              유일한 교회</strong>입니다. 1784년 이승훈이 북경에서 세례를 받고
              돌아와 신앙 공동체를 형성한 것이 시작이었습니다. 이러한 자발적 신앙
              수용의 역사는 전 세계 가톨릭 교회에서도 유례가 없는 특별한
              사례입니다.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
