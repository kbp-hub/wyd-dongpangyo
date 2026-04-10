"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // 앵커가 있으면 해당 요소로 스크롤
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 앵커 없으면 최상단
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname]);

  // hash 변경 감지 (같은 페이지 내 앵커 이동)
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
