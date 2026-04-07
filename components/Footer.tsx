import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wyd-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 본당 정보 */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-wyd-gold">동판교성당</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              천주교 수원교구 동판교성당
              <br />
              2027 WYD 동판교성당 준비 홈페이지
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-wyd-gold">바로가기</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  WYD 소개
                </Link>
              </li>
              <li>
                <Link href="/homestay" className="hover:text-white transition-colors">
                  홈스테이 안내
                </Link>
              </li>
              <li>
                <Link href="/participate" className="hover:text-white transition-colors">
                  봉사자 모집
                </Link>
              </li>
            </ul>
          </div>

          {/* 관련 사이트 */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-wyd-gold">관련 사이트</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="https://wydseoul.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WYD 서울 공식 사이트
                </a>
              </li>
              <li>
                <a
                  href="https://heavenbridge.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  하늘다리 (수원교구 WYD)
                </a>
              </li>
              <li>
                <span>수원교구 WYD 사무국: 031-458-4442</span>
              </li>
              <li>
                <span>동판교성당 조직위: 010-9397-0296</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
          <p>&copy; 2027 WYD 동판교성당 조직위원회</p>
        </div>
      </div>
    </footer>
  );
}
