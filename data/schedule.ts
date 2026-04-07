export interface ScheduleEvent {
  date: string;
  title: string;
  description: string;
  type: "diocese" | "main";
}

export const dioceseDays: ScheduleEvent[] = [
  {
    date: "7월 29일 (목)",
    title: "수원교구대회 시작",
    description: "세계 청년들 입국, 수원교구청 집결 및 본당 이동. 환영 행사",
    type: "diocese",
  },
  {
    date: "7월 30일 (금)",
    title: "본당(또는 교구) 프로그램",
    description: "수원교구 각 지역 문화 체험 및 성지 순례",
    type: "diocese",
  },
  {
    date: "7월 31일 (토)",
    title: "본당(또는 교구) 프로그램",
    description: "청년 교류 및 영성 프로그램",
    type: "diocese",
  },
  {
    date: "8월 1일 (주일)",
    title: "본당(또는 교구) 프로그램",
    description: "찬양과 축제, 파견 미사",
    type: "diocese",
  },
  {
    date: "8월 2일 (월)",
    title: "파견(환송)",
    description: "수원교구대회 마무리, 서울 본대회 파견",
    type: "diocese",
  },
];

export const mainEvents: ScheduleEvent[] = [
  {
    date: "8월 3일 (화)",
    title: "개막미사 · 젊은이 축제",
    description:
      "대회 개최 교구 교구장 주교가 주례하는 개막 미사로 시작,\n개최지 곳곳에서 다양한 이벤트 진행",
    type: "main",
  },
  {
    date: "8월 4일 (수)",
    title: "주교님과의 만남 · 젊은이 축제",
    description:
      "순례자들은 주교들의 교리교육에 참여,\n화해공원과 가톨릭문화박람회에서 고해성사와 성소 탐색",
    type: "main",
  },
  {
    date: "8월 5일 (목)",
    title: "주교님과의 만남 · 교황 환영 행사",
    description:
      "교리교육 계속,\n오후에 교황 환영 공식행사로 대회의 열기가 더욱 고조",
    type: "main",
  },
  {
    date: "8월 6일 (금)",
    title: "주교님과의 만남 · 십자가의 길",
    description:
      "교리교육 마지막 날,\n오후에 순례자들은 교황과 함께 젊은이들이 준비한 십자가의 길 묵상",
    type: "main",
  },
  {
    date: "8월 7일 (토)",
    title: "밤샘기도",
    description:
      "파견미사 장소로 순례,\n교황과 함께 저녁 기도 및 성체 조배, 그 자리에서 함께 밤을 지냄",
    type: "main",
  },
  {
    date: "8월 8일 (주일)",
    title: "폐막미사 · 봉사자들과의 만남",
    description:
      "교황과 함께 미사 봉헌, 폐막미사 끝에 다음 세계청년대회 장소 발표.\n오후에 교황과 봉사자들의 만남",
    type: "main",
  },
];
