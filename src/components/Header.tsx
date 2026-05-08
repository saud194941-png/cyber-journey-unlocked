import { Link } from "@tanstack/react-router";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/days", label: "الدورة" },
  { to: "/tools", label: "الأدوات" },
  { to: "/articles", label: "المقالات" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg text-gradient">سايبر عربي</span>
            <span className="text-[10px] text-muted-foreground">الأمن السيبراني للمبتدئين</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-lg text-sm font-bold text-primary bg-primary/10" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/days/$dayId" params={{ dayId: "1" }} className="hidden md:inline-flex btn-cyber px-5 py-2.5 rounded-xl text-sm font-bold">
          ابدأ التعلم
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-secondary">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border glass-strong">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/days/$dayId" params={{ dayId: "1" }} onClick={() => setOpen(false)} className="btn-cyber px-5 py-3 rounded-xl text-sm font-bold text-center mt-2">
              ابدأ التعلم
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
