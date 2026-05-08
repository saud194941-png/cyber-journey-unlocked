import { Shield } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border glass">
      <div className="container mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-gradient">سايبر عربي</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            مدونة عربية احترافية متخصصة في تعليم الأمن السيبراني والهكر الأخلاقي للمبتدئين بمحتوى مجاني عالي الجودة.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-foreground">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/days" className="hover:text-primary transition-colors">دورة الأيام الخمسة</Link></li>
            <li><Link to="/tools" className="hover:text-primary transition-colors">الأدوات التعليمية</Link></li>
            <li><Link to="/articles" className="hover:text-primary transition-colors">المقالات التقنية</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-foreground">الجهة المنفذة</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            قسم موهبة بتعليم جدة
            <br />
            <span className="text-primary font-semibold">تصميم وبرمجة:</span> سعود سعد العتيبي
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        جميع الحقوق محفوظة © {new Date().getFullYear()} قسم موهبة بتعليم جدة
      </div>
    </footer>
  );
}
