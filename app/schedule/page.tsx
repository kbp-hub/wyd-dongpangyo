import type { Metadata } from "next";
import { dioceseDays, mainEvents } from "@/data/schedule";

export const metadata: Metadata = {
  title: "일정/장소 | 동판교성당 WYD 2027",
  description: "WYD 2027 수원교구대회 및 본행사 일정 안내",
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
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-wyd-blue mb-3">
            일정 / 장소
          </h1>
          <p className="text-gray-600 text-lg">
            2027년 7월 29일 ~ 8월 2일 (수원)
            <br />
            8월 3일 ~ 8월 8일 (서울)
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-wyd-gold/20 to-wyd-gold/5 rounded-xl p-6 border border-wyd-gold/30">
            <h2 className="text-xl font-bold text-wyd-blue mb-2">수원교구대회</h2>
            <p className="text-2xl font-bold text-wyd-gold">
              7/29(목) ~ 8/2(월)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              본당(또는 교구) 프로그램 · 문화 체험 · 성지 순례
            </p>
          </div>
          <div className="bg-gradient-to-br from-wyd-red/20 to-wyd-red/5 rounded-xl p-6 border border-wyd-red/30">
            <h2 className="text-xl font-bold text-wyd-blue mb-2">서울 본대회</h2>
            <p className="text-2xl font-bold text-wyd-red">
              8/3(화) ~ 8/8(주일)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              개막미사 · 주교님과의 만남 · 젊은이 축제 · 교황 환영 행사 · 십자가의 길 · 밤샘기도 · 폐막미사
            </p>
          </div>
        </div>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-6 border-l-4 border-wyd-gold pl-4">
            수원교구대회 일정 (예상, 미정)
          </h2>
          <div className="ml-2">
            {dioceseDays.map((event, i) => (
              <TimelineItem key={i} {...event} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-wyd-blue mb-6 border-l-4 border-wyd-red pl-4">
            서울 본대회 일정
          </h2>
          <div className="ml-2">
            {mainEvents.map((event, i) => (
              <TimelineItem key={i} {...event} />
            ))}
          </div>
        </section>

        {/* 장소 */}
        <section>
          <h2 className="text-2xl font-bold text-wyd-blue mb-4 border-l-4 border-wyd-blue pl-4">
            장소 (미정)
          </h2>
          <div className="bg-wyd-light rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              구체적인 행사장은 바티칸과 한국 정부 간 협의를 통해 확정될
              예정입니다. 확정되는 대로 이 페이지를 통해 안내드리겠습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
