import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Terminal, Lock, Network, Brain, Wifi, ArrowLeft, BookOpen, Users, Award, Zap, ChevronLeft, Sparkles } from "lucide-react";
import { days } from "@/lib/days-data";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سايبر عربي — تعلم الأمن السيبراني والهكر الأخلاقي من الصفر" },
      { name: "description", content: "دورة عربية احترافية ومجانية في الأمن السيبراني للمبتدئين عبر 5 أيام منظمة." },
    ],
  }),
  component: HomePage,
});

const dayIcons = [Shield, Network, Terminal, Brain, Lock];

function Counter({ to, label, suffix = "+" }: { to: number; label: string; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-black text-gradient">{n.toLocaleString("ar-SA")}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4 lg:px-8 pt-20 pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>محتوى عربي مجاني واحترافي</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight max-w-5xl mx-auto"
          >
            تعلم <span className="text-gradient">الأمن السيبراني</span>
            <br />
            والهكر الأخلاقي من الصفر
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            دورة عربية شاملة في 5 أيام، مصممة بعناية لتأخذك من الصفر إلى مستوى احترافي في عالم الحماية الرقمية والاختراق الأخلاقي.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/days/$dayId" params={{ dayId: "1" }} className="btn-cyber px-8 py-4 rounded-2xl font-bold flex items-center gap-2 animate-pulse-glow">
              ابدأ التعلم الآن <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/tools" className="glass px-8 py-4 rounded-2xl font-bold hover:bg-secondary/60 transition-colors">
              استكشف الأدوات
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <Counter to={5} label="أيام تعليمية" suffix="" />
            <Counter to={45} label="موضوع مفصّل" />
            <Counter to={100} label="نسبة المحتوى المجاني" suffix="%" />
            <Counter to={2024} label="مواكب لأحدث 2024" suffix="" />
          </motion.div>
        </div>
      </section>

      {/* Days */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold">خطة التعلم في <span className="text-gradient">5 أيام</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">كل يوم صفحة مستقلة تحتوي على مواضيع منظمة، أمثلة عملية، تنبيهات، وأسئلة شائعة.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((d, i) => {
            const Icon = dayIcons[i] ?? Shield;
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/days/$dayId"
                  params={{ dayId: d.id }}
                  className="block group glass-strong rounded-2xl p-7 hover:-translate-y-1 transition-all hover:shadow-[var(--shadow-elevated)] glow-border h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-display font-black text-primary/20">{d.number.toLocaleString("ar-SA")}</span>
                  </div>
                  <div className="text-xs font-bold text-primary mb-2">اليوم {d.number}</div>
                  <h3 className="text-xl font-display font-bold mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{d.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span>⏱ {d.duration}</span>
                    <span>📚 {d.topics.length} موضوع</span>
                    <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      ابدأ <ChevronLeft className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tools section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs mb-4">
                <Terminal className="w-3.5 h-3.5 text-primary" /> الأدوات الاحترافية
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                أدوات يستخدمها <span className="text-gradient">المحترفون</span> حول العالم
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                تعرّف على أهم المنصات والأدوات في عالم الأمن السيبراني، من Kali Linux إلى TryHackMe وWireshark، مع شرح مفصل لكل أداة وكيفية البدء بها.
              </p>
              <Link to="/tools" className="inline-flex btn-cyber px-6 py-3 rounded-xl font-bold items-center gap-2">
                استكشف الأدوات <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Kali Linux", "TryHackMe", "Wireshark", "Cisco PT", "CyberTalents", "Nmap"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass p-4 rounded-xl text-center font-mono text-sm font-bold hover:bg-primary/10 transition-colors"
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold">نصائح <span className="text-gradient">يومية</span></h2>
          <p className="mt-4 text-muted-foreground">ابدأ بتطبيق هذه النصائح اليوم لحماية حياتك الرقمية</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: "كلمات مرور قوية", desc: "استخدم 12 حرفًا متنوعة، ولا تكرر كلمة المرور بين الحسابات." },
            { icon: Shield, title: "التحقق بخطوتين", desc: "فعّل 2FA في كل حساب يدعمها — طبقة حماية إضافية تنقذك." },
            { icon: Wifi, title: "احذر شبكات Wi-Fi العامة", desc: "استخدم VPN عند الاتصال بأي شبكة عامة لحماية بياناتك." },
          ].map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong p-7 rounded-2xl hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="relative glass-strong rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <Award className="w-6 h-6 text-accent" />
              <BookOpen className="w-6 h-6 text-primary" />
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              ابدأ <span className="text-gradient">رحلتك التقنية</span> الآن
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              لا تحتاج خبرة سابقة، فقط شغف بالتعلم. ابدأ من اليوم الأول وستفاجأ بما يمكنك إنجازه خلال أسبوع واحد.
            </p>
            <Link to="/days/$dayId" params={{ dayId: "1" }} className="inline-flex btn-cyber px-10 py-4 rounded-2xl text-lg font-bold items-center gap-2">
              ادخل لليوم الأول <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
