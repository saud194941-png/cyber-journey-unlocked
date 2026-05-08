import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, AlertTriangle, Lightbulb, BookOpen, Clock, Award, ChevronLeft, ChevronRight, ListOrdered, Sparkles, HelpCircle } from "lucide-react";
import { getDay, days, type DayData } from "@/lib/days-data";
import { ReadingProgress } from "@/components/ReadingProgress";

export const Route = createFileRoute("/days/$dayId")({
  component: DayPage,
  loader: ({ params }) => {
    const day = getDay(params.dayId);
    if (!day) throw notFound();
    return day;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `اليوم ${loaderData.number}: ${loaderData.title} — سايبر عربي` : "الدورة" },
      { name: "description", content: loaderData?.description ?? "دورة الأمن السيبراني" },
      { property: "og:title", content: loaderData ? `${loaderData.title} — اليوم ${loaderData.number}` : "" },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">اليوم غير موجود</h1>
      <Link to="/days" className="mt-6 inline-flex btn-cyber px-6 py-3 rounded-xl font-bold">العودة لقائمة الأيام</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container mx-auto px-4 py-20 text-center">
      <p className="text-destructive">{error.message}</p>
      <button onClick={reset} className="mt-4 btn-cyber px-6 py-3 rounded-xl font-bold">إعادة المحاولة</button>
    </div>
  ),
});

function DayPage() {
  const day = Route.useLoaderData() as DayData;
  const prev = days.find((d) => d.number === day.number - 1);
  const next = days.find((d) => d.number === day.number + 1);

  return (
    <div>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4 lg:px-8 py-16">
          <Link to="/days" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowRight className="w-4 h-4" /> العودة لقائمة الأيام
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-primary" /> اليوم {day.number}</span>
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> {day.duration}</span>
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-primary" /> {day.topics.length} موضوع</span>
            <span className="glass px-3 py-1.5 rounded-full text-xs font-bold">{day.level}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-3">
            <span className="text-gradient">{day.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground">{day.subtitle}</p>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{day.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 grid lg:grid-cols-[260px_1fr] gap-10">
        {/* TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="glass-strong p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold">
              <ListOrdered className="w-4 h-4 text-primary" /> جدول المحتويات
            </div>
            <ol className="space-y-1.5 text-sm">
              {day.topics.map((t, i) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground">
                    <span className="font-mono text-xs text-primary/70 mt-0.5">{(i + 1).toString().padStart(2, "0")}</span>
                    <span className="leading-tight">{t.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Content */}
        <article className="space-y-10">
          {day.topics.map((t, i) => (
            <motion.section
              key={t.id}
              id={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="topic-anchor glass-strong rounded-2xl p-7 md:p-10"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-black text-primary-foreground shadow-[var(--shadow-glow)]">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">{t.title}</h2>
                  <p className="text-muted-foreground mt-2">{t.intro}</p>
                </div>
              </div>

              {t.content.length > 0 && (
                <div className="space-y-3 text-foreground/90 leading-loose mt-6">
                  {t.content.map((p, j) => (
                    <p key={j} className="flex gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-3" />
                      <span>{p}</span>
                    </p>
                  ))}
                </div>
              )}

              {t.example && (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2">
                    <Sparkles className="w-4 h-4" /> مثال عملي
                  </div>
                  <p className="text-sm leading-relaxed">{t.example}</p>
                </div>
              )}

              {t.tip && (
                <div className="mt-4 rounded-xl border border-success/30 bg-[oklch(0.72_0.18_150_/_0.08)] p-5">
                  <div className="flex items-center gap-2 text-success font-bold mb-2" style={{ color: "var(--success)" }}>
                    <Lightbulb className="w-4 h-4" /> نصيحة للمبتدئين
                  </div>
                  <p className="text-sm leading-relaxed">{t.tip}</p>
                </div>
              )}

              {t.warning && (
                <div className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 p-5">
                  <div className="flex items-center gap-2 font-bold mb-2" style={{ color: "var(--destructive)" }}>
                    <AlertTriangle className="w-4 h-4" /> تنبيه أمني
                  </div>
                  <p className="text-sm leading-relaxed">{t.warning}</p>
                </div>
              )}

              {t.faq && (
                <div className="mt-6 space-y-3">
                  {t.faq.map((f, k) => (
                    <details key={k} className="group glass rounded-xl p-4 cursor-pointer">
                      <summary className="flex items-center justify-between font-bold text-foreground list-none">
                        <span className="flex items-center gap-2"><HelpCircle className="w-4 h-4 text-primary" /> {f.q}</span>
                        <ChevronLeft className="w-4 h-4 group-open:-rotate-90 transition-transform" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          {/* Day navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {prev ? (
              <Link to="/days/$dayId" params={{ dayId: prev.id }} className="flex-1 glass-strong p-5 rounded-2xl hover:bg-primary/5 transition-colors group">
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" /> اليوم السابق</div>
                <div className="font-bold">{prev.title}</div>
              </Link>
            ) : <div className="flex-1" />}
            {next ? (
              <Link to="/days/$dayId" params={{ dayId: next.id }} className="flex-1 glass-strong p-5 rounded-2xl hover:bg-primary/5 transition-colors text-left group">
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1 justify-end">اليوم التالي <ChevronLeft className="w-3 h-3" /></div>
                <div className="font-bold">{next.title}</div>
              </Link>
            ) : (
              <Link to="/" className="flex-1 btn-cyber p-5 rounded-2xl text-center font-bold flex items-center justify-center gap-2">
                <Award className="w-5 h-5" /> أكملت الدورة! اضغط للعودة للرئيسية
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
