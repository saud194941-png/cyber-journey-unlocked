import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Star, Zap, Target, Award, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "الأدوات التعليمية — سايبر عربي" },
      { name: "description", content: "أهم الأدوات والمنصات في الأمن السيبراني: TryHackMe, Kali Linux, Wireshark, Cisco Packet Tracer, CyberTalents." },
      { property: "og:title", content: "الأدوات التعليمية — سايبر عربي" },
      { property: "og:description", content: "تعرف على أدوات المحترفين في الأمن السيبراني." },
    ],
  }),
  component: ToolsPage,
});

const tools = [
  {
    name: "TryHackMe",
    tagline: "تعلّم الاختراق الأخلاقي بشكل تفاعلي",
    description: "منصة تعليمية تفاعلية تتيح لك تعلّم الأمن السيبراني عبر مختبرات افتراضية حقيقية. مناسبة جدًا للمبتدئين بفضل المسارات التعليمية المنظمة.",
    uses: ["مسارات تعليمية متدرجة", "تحديات CTF واقعية", "غرف افتراضية لكل موضوع", "شهادات إتمام معتمدة"],
    features: ["واجهة سهلة وجذابة", "محتوى متجدد أسبوعيًا", "خطط مجانية ومدفوعة", "مجتمع نشط"],
    steps: ["سجّل حسابًا مجانيًا", "ابدأ بمسار 'Pre Security'", "تنقّل إلى 'Complete Beginner'", "طبّق على الغرف العملية"],
    tip: "خصّص ساعة يوميًا لحل غرفة جديدة — ستلاحظ تطورًا كبيرًا خلال شهر.",
    level: "مبتدئ - متقدم",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Kali Linux",
    tagline: "نظام التشغيل الأشهر لاختبار الاختراق",
    description: "توزيعة لينكس مخصصة لاختبار الاختراق والتحقيقات الجنائية الرقمية. تحتوي على 600+ أداة أمنية مجمعة في مكان واحد.",
    uses: ["اختبار اختراق الشبكات", "اختبار اختراق تطبيقات الويب", "تحليل البرمجيات الخبيثة", "التحقيق الجنائي الرقمي"],
    features: ["مفتوح المصدر ومجاني", "تحديثات مستمرة", "يعمل على Live USB", "دعم متعدد للأجهزة"],
    steps: ["حمّل الإصدار من الموقع الرسمي", "ثبّت على VirtualBox أو VMware", "حدّث النظام: sudo apt update", "ابدأ التعرف على الأدوات"],
    tip: "لا تستخدم Kali كنظام يومي، إنه مصمم لمهام محددة. استخدمه داخل بيئة افتراضية.",
    level: "متوسط - متقدم",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Wireshark",
    tagline: "محلل حركة الشبكات الأقوى",
    description: "أداة مجانية ومفتوحة المصدر لتحليل حزم الشبكة. تستخدم لفهم حركة الشبكة، اكتشاف المشاكل، وتحليل الهجمات.",
    uses: ["مراقبة حركة الشبكة", "تحليل البروتوكولات", "اكتشاف الاختراقات", "تشخيص مشاكل الشبكات"],
    features: ["دعم 2000+ بروتوكول", "واجهة رسومية سهلة", "تصفية متقدمة", "متعدد المنصات"],
    steps: ["حمّل من wireshark.org", "اختر واجهة الشبكة", "ابدأ التقاط الحزم", "استخدم الفلاتر لعزل البيانات"],
    tip: "تعلّم لغة الفلترة (Display Filters) لتحليل ملايين الحزم في ثوانٍ.",
    level: "متوسط",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    name: "Cisco Packet Tracer",
    tagline: "محاكي الشبكات للتعلم العملي",
    description: "برنامج محاكاة من Cisco يتيح لك بناء وتجربة شبكات افتراضية كاملة دون الحاجة لأجهزة فعلية. مثالي لتعلم الشبكات.",
    uses: ["محاكاة الشبكات الكاملة", "تعلم إعدادات Cisco", "اختبار البروتوكولات", "التحضير لشهادات CCNA"],
    features: ["مجاني للطلاب", "بيئة Drag & Drop", "محاكاة دقيقة لأجهزة Cisco", "وضع المحاكاة الزمنية"],
    steps: ["سجّل في Cisco NetAcad", "حمّل البرنامج المجاني", "ابدأ بمشاريع بسيطة", "تدرّج للشبكات المعقدة"],
    tip: "ابنِ شبكة منزلية افتراضية كاملة — أفضل طريقة لفهم تدفق البيانات.",
    level: "مبتدئ - متوسط",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    name: "CyberTalents",
    tagline: "منصة عربية للمواهب الأمنية",
    description: "منصة عربية رائدة تربط محترفي الأمن السيبراني بفرص العمل والتدريب. تقدم تحديات CTF متنوعة المستويات بالعربية والإنجليزية.",
    uses: ["تحديات CTF", "مسابقات أمنية", "فرص عمل للمحترفين", "تقييم مستوى المهارات"],
    features: ["محتوى عربي وإنجليزي", "تصنيف تنافسي عالمي", "مسابقات شهرية", "شراكات مع شركات كبرى"],
    steps: ["أنشئ حسابك على المنصة", "ابدأ بتحديات Easy", "شارك في المسابقات الشهرية", "ابني سمعتك في التصنيف"],
    tip: "تحديات CTF تطور مهاراتك بسرعة كبيرة — حل تحديًا واحدًا على الأقل أسبوعيًا.",
    level: "جميع المستويات",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

function ToolsPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black">
            <span className="text-gradient">الأدوات التعليمية</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            أهم المنصات والأدوات التي يستخدمها محترفو الأمن السيبراني حول العالم — مع شرح مفصل لكل أداة وكيفية البدء بها.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-12 space-y-8">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-strong rounded-3xl overflow-hidden glow-border"
          >
            <div className={`p-8 md:p-10 bg-gradient-to-br ${tool.color}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold glass px-3 py-1 rounded-full">{tool.level}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Star className="w-3 h-3 text-warning" /> أداة احترافية</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black mb-2">{tool.name}</h2>
                  <p className="text-lg text-primary font-medium">{tool.tagline}</p>
                </div>
              </div>
              <p className="mt-6 text-foreground/90 leading-relaxed max-w-3xl">{tool.description}</p>
            </div>

            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> الاستخدامات</h3>
                <ul className="space-y-2">
                  {tool.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-accent" /> المميزات</h3>
                <ul className="space-y-2">
                  {tool.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /> خطوات البداية</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {tool.steps.map((s, idx) => (
                    <div key={idx} className="glass p-4 rounded-xl">
                      <div className="text-xs text-primary font-bold mb-1">الخطوة {idx + 1}</div>
                      <div className="text-sm">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 rounded-xl border border-success/30 p-5" style={{ background: "oklch(0.72 0.18 150 / 0.08)" }}>
                <div className="flex items-center gap-2 font-bold mb-2" style={{ color: "var(--success)" }}>
                  <Lightbulb className="w-4 h-4" /> نصيحة للمبتدئين
                </div>
                <p className="text-sm leading-relaxed">{tool.tip}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
