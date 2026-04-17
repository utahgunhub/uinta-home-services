import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));

      if (element) {
        requestAnimationFrame(() => {
          const nav = document.querySelector("nav");
          const navBottom = nav?.getBoundingClientRect().bottom ?? 0;
          const extraOffset = 12;
          const targetTop =
            element.getBoundingClientRect().top +
            window.scrollY -
            navBottom -
            extraOffset;

          window.scrollTo({
            top: Math.max(0, targetTop),
            left: 0,
            behavior: "smooth",
          });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key]);

  return null;
}
