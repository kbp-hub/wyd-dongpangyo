export interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  category: "공지" | "소식" | "활동";
}

export const newsList: NewsItem[] = [
  {
    id: 4,
    date: "2026-03-21 ~ 2026-04-26",
    title: "동판교성당 홈스테이 가정 모집",
    summary:
      "2027 WYD 수원교구대회 기간 중 해외청년들의 숙박을 제공하는 홈스테이 가정을 모집합니다.",
    category: "공지",
  },
{
    id: 2,
    date: "2026-03-31",
    title: "수원교구 WYD 십자가 순례 (동판교성당)",
    summary:
      "WYD 십자가가 동판교성당에 방문했습니다. 2026-03-25 ~ 2026-04-22 수원교구 내 본당을 순례합니다.",
    category: "소식",
  },
  {
    id: 3,
    date: "2026-03-15",
    title: "10억 묵주기도 운동 참여 안내",
    summary:
      "WYD 서울 대회를 위한 10억 묵주기도 운동에 본당 차원으로 참여합니다. 매일 묵주기도에 동참해 주세요.",
    category: "활동",
  },
];
