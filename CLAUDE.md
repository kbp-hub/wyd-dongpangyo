@AGENTS.md

# 2027 WYD 동판교성당 준비 홈페이지

## 프로젝트 개요
- 천주교 수원교구 동판교성당의 2027 WYD(세계청년대회) 준비 홈페이지
- 수원교구대회(DID) 중심, 서울본대회 병행 안내
- 대회 주제 성구: "용기를 내어라. 내가 세상을 이겼다" (요한 16,33)

## 기술 스택
- Next.js (App Router) + Tailwind CSS + TypeScript
- Google Apps Script: 홈스테이 신청서 연동
- Supabase Storage + DB: 자료실 파일 업로드/다운로드 (한글 파일명은 DB 메타데이터로 관리)
- 배포: Vercel (GitHub 푸시 시 자동 배포)
- 저장소: https://github.com/kbp-hub/wyd-dongpangyo

## 페이지 구성 (헤더 메뉴 순서)
1. `/` - 메인 (카운트다운, 대회일정 요약, 바로가기 6개, 최신소식, 홈스테이 CTA)
2. `/about` - WYD 소개 (WYD 개념, 대회 안내+일정 2컬럼 통합, 주제 성구, WYD 상징물, 한국가톨릭)
3. `/homestay` - 홈스테이 안내 (가정 모집, FAQ 11개, 신청 CTA)
4. `/homestay/apply` - 홈스테이 신청서 (Google Apps Script 연동)
5. `/programs` - 본당 프로그램 (준비 중 안내)
6. `/participate` - 봉사자 모집 (9개 분야 예시)
7. `/join` - 영성 참여 (십자가·성모성화 순례+사진, 묵주기도, 영성운동)
8. `/resources` - 자료실 (Supabase Storage, FormData 업로드)
9. `/news` - 소식/공지
10. `/schedule` - 일정/장소 (헤더 제거됨, URL 직접 접근 가능)

## 주요 용어 규칙
- "교구의 날" 사용 금지 → "수원교구대회" 사용
- "WYD 2027" → "2027 WYD" 순서
- 수원교구대회 요일: 7/29(목)~8/2(월)
- 서울본대회 요일: 8/3(화)~8/8(주일)

## 외부 연동
- 홈스테이 신청 Google Apps Script URL: script.google.com/macros/s/AKfycbwqyifvo2uxN7lHoU93QENqmvB5YrdVAjOfCUY40ZxUkrIu7i7Tl5ChVrUF0ZtaOzM/exec
- Supabase: .env.local에 NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY 필요
- Supabase DB 테이블: file_metadata (storage_name, original_name, size)
- 수원교구 하늘다리: heavenbridge.net/swdid (교구대회), heavenbridge.net/seabout (영성운동)
- 동판교성당 조직위: 010-9397-0296 (문자 우선)

## 배포 방법
- 로컬에서 코드 수정 → git add → git commit → git push → Vercel 자동 배포 (1~2분)
- Vercel 환경변수에 Supabase URL/Key 설정 필요 (붙여넣기 시 공백/줄바꿈 주의)
