import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Network, Terminal, Brain, Lock, Clock, BookOpen, ChevronLeft } from "lucide-react";
import { days } from "@/lib/days-data";

export const Route = createFileRoute("/days/")({
  head: () => ({
    meta: [
      { title: "خطة الدورة في 5 أيام — سايبر عربي" },
      { name: "description", content: "خطة منظمة لتعلم الأمن السيبراني في 5 أيام، كل يوم بصفحة مستقلة ومواضيع مفصلة." },
    ],
  }),
  component: DaysIndex,
});

const icons = [Shield, Network, Terminal, Brain, Lock];

function DaysIndex() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black">
            خطة <span className="text-gradient">الدورة الكاملة</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            5 أيام، 45+ موضوعًا، محتوى عربي احترافي مجاني. اختر يومك وابدأ.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-12 space-y-5">
        {days.map((d, i) => {
          const Icon = icons[i] ?? Shield;
          return (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to="/days/$dayId" params={{ dayId: d.id }} className="block group glass-strong rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all hover:shadow-[var(--shadow-elevated)]">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-5 flex-1">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-black text-primary-foreground">
                        {d.number}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-primary font-bold mb-1">اليوم {d.number} — {d.subtitle}</div>
                      <h2 className="text-xl md:text-2xl font-display font-bold mb-1">{d.title}</h2>
                      <p className="text-sm text-muted-foreground line-clamp-2">{d.description}</p>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {d.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {d.topics.length} موضوع</span>
                    <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      ابدأ <ChevronLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
