import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-16 left-0 right-0 h-[3px] z-40 bg-transparent">
      <div
        className="h-full bg-gradient-to-l from-primary via-accent to-primary transition-[width] duration-150"
        style={{ width: `${p}%`, boxShadow: "0 0 12px var(--cyber)" }}
      />
    </div>
  );
}
