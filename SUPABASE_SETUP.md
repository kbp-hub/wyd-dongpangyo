# Supabase 자료실 설정 가이드

## 1단계: Supabase 프로젝트 생성

1. https://supabase.com 에 접속하여 회원가입/로그인
2. "New Project" 클릭하여 프로젝트 생성
3. 프로젝트 이름, 데이터베이스 비밀번호, 리전(Northeast Asia - ap-northeast-1) 설정

## 2단계: Storage 버킷 생성

1. 좌측 메뉴에서 **Storage** 클릭
2. **New Bucket** 클릭
3. 버킷 이름: `resources`
4. **Public bucket** 체크 (다운로드를 위해 필요)
5. **Create bucket** 클릭

## 3단계: Storage Policy 설정

버킷 생성 후 Policy를 설정해야 업로드/삭제가 가능합니다.

1. 생성된 `resources` 버킷 클릭
2. **Policies** 탭 클릭
3. **New Policy** → **For full customization** 선택
4. 아래 4개 정책을 각각 추가:

### 읽기 (SELECT) - 모든 사용자
- Policy name: `Public Read`
- Allowed operation: `SELECT`
- Target roles: `anon`
- Policy: `true`

### 업로드 (INSERT) - 모든 사용자
- Policy name: `Public Upload`
- Allowed operation: `INSERT`
- Target roles: `anon`
- Policy: `true`

### 삭제 (DELETE) - 모든 사용자
- Policy name: `Public Delete`
- Allowed operation: `DELETE`
- Target roles: `anon`
- Policy: `true`

> ⚠️ 위 설정은 누구나 업로드/삭제 가능한 상태입니다.
> 추후 관리자 인증을 추가하면 업로드/삭제를 제한할 수 있습니다.

## 4단계: API 키 확인 및 .env.local 설정

1. 좌측 메뉴 **Settings** → **API** 클릭
2. **Project URL**과 **anon public** 키를 복사
3. 프로젝트 루트에 `.env.local` 파일 생성:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...your-anon-key
```

## 5단계: 확인

`npm run dev` 실행 후 http://localhost:3000/resources 에서 자료실 확인
