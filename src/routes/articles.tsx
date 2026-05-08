import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, TrendingUp, Eye } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "المقالات التقنية — سايبر عربي" },
      { name: "description", content: "مقالات تقنية متخصصة في الأمن السيبراني والهكر الأخلاقي بالعربية." },
    ],
  }),
  component: ArticlesPage,
});

const articles = [
  { id: 1, title: "كيف تكتشف رسائل التصيد الاحتيالي في 30 ثانية", category: "حماية", date: "2026-04-12", read: "5 دقائق", views: 4521, desc: "دليل عملي لتمييز الرسائل الاحتيالية عن الرسائل الحقيقية بأبسط الطرق.", featured: true },
  { id: 2, title: "أفضل 10 أوامر Linux يجب أن يعرفها كل مختبر اختراق", category: "لينكس", date: "2026-04-08", read: "8 دقائق", views: 3287, desc: "مجموعة الأوامر الأساسية التي تستخدمها يوميًا في عملك كمحترف أمن سيبراني." },
  { id: 3, title: "شرح ثغرات SQL Injection بأمثلة عملية", category: "اختراق ويب", date: "2026-04-02", read: "12 دقيقة", views: 5891, desc: "كل ما تحتاج معرفته عن إحدى أخطر ثغرات تطبيقات الويب وكيفية الحماية منها.", featured: true },
  { id: 4, title: "كيف تبني Home Lab احترافي بميزانية محدودة", category: "تدريب", date: "2026-03-28", read: "10 دقائق", views: 2654, desc: "خطوات بناء مختبر منزلي للتدرب على الاختراق الأخلاقي بأقل التكاليف." },
  { id: 5, title: "الفرق بين Red Team و Blue Team و Purple Team", category: "مهن", date: "2026-03-22", read: "6 دقائق", views: 3102, desc: "تعرّف على الفرق الأمنية الثلاثة وأي منها يناسبك في مسيرتك المهنية." },
  { id: 6, title: "VPN: كيف يعمل ولماذا تحتاجه؟", category: "حماية", date: "2026-03-15", read: "7 دقائق", views: 4210, desc: "شرح مبسط لتقنية الشبكات الافتراضية الخاصة وكيف تحمي خصوصيتك على الإنترنت." },
  { id: 7, title: "أهم شهادات الأمن السيبراني للمبتدئين 2026", category: "شهادات", date: "2026-03-08", read: "9 دقائق", views: 6783, desc: "مقارنة بين أبرز الشهادات المعتمدة وأيها يستحق وقتك ومالك.", featured: true },
  { id: 8, title: "تأمين شبكة Wi-Fi المنزلية: دليل شامل", category: "شبكات", date: "2026-03-01", read: "8 دقائق", views: 3567, desc: "خطوات عملية لجعل شبكتك المنزلية حصنًا منيعًا ضد المخترقين." },
  { id: 9, title: "Python للأمن السيبراني: من أين تبدأ؟", category: "برمجة", date: "2026-02-25", read: "11 دقيقة", views: 4892, desc: "دليلك الشامل لتعلم Python وتطبيقها في مهام الأمن السيبراني." },
];

const categories = ["الكل", "حماية", "لينكس", "اختراق ويب", "تدريب", "مهن", "شهادات", "شبكات", "برمجة"];

function ArticlesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("الكل");

  const filtered = useMemo(() => {
    return articles.filter(
      (a) => (cat === "الكل" || a.category === cat) && (q === "" || a.title.includes(q) || a.desc.includes(q))
    );
  }, [q, cat]);

  const popular = [...articles].sort((a, b) => b.views - a.views).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black">
            <span className="text-gradient">المقالات التقنية</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            مقالات احترافية في الأمن السيبراني والهكر الأخلاقي، تحديث مستمر بأحدث المواضيع.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 grid lg:grid-cols-[1fr_300px] gap-10">
        <div>
          {/* Search & filters */}
          <div className="glass-strong rounded-2xl p-5 mb-8">
            <div className="relative mb-4">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="ابحث في المقالات..."
                className="w-full bg-background/60 border border-border rounded-xl py-3 pr-12 pl-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "glass hover:bg-primary/10"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Articles grid */}
          {filtered.length === 0 ? (
            <div className="glass-strong rounded-2xl p-12 text-center text-muted-foreground">لا توجد نتائج مطابقة.</div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {filtered.map((a, i) => (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group glass-strong rounded-2xl overflow-hidden hover:-translate-y-1 transition-all hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className={`h-40 relative overflow-hidden ${a.featured ? "bg-gradient-to-br from-primary/30 to-accent/30" : "bg-gradient-to-br from-secondary to-muted"}`}>
                    <div className="absolute inset-0 cyber-grid opacity-50" />
                    <div className="absolute top-3 right-3">
                      <span className="glass-strong px-3 py-1 rounded-full text-xs font-bold">{a.category}</span>
                    </div>
                    {a.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> مميز
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{a.desc}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.read}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {a.views.toLocaleString("ar-SA")}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> الأكثر قراءة
            </h3>
            <ul className="space-y-4">
              {popular.map((a, i) => (
                <li key={a.id} className="flex gap-3 group cursor-pointer">
                  <span className="text-2xl font-display font-black text-primary/30 leading-none">{(i + 1).toString().padStart(2, "0")}</span>
                  <div>
                    <h4 className="text-sm font-bold leading-tight mb-1 group-hover:text-primary transition-colors">{a.title}</h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {a.views.toLocaleString("ar-SA")} قراءة
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h3 className="font-display font-bold mb-4">التصنيفات</h3>
            <div className="flex flex-wrap gap-2">
              {categories.slice(1).map((c) => (
                <button key={c} onClick={() => setCat(c)} className="px-3 py-1.5 glass rounded-full text-xs hover:bg-primary/10 transition-colors">
                  {c}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
