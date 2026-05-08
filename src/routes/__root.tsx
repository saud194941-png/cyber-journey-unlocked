import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center glass-strong p-10 rounded-2xl">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">الصفحة التي تبحث عنها قد حُذفت أو نُقلت.</p>
        <Link to="/" className="mt-6 inline-flex btn-cyber px-5 py-2.5 rounded-xl text-sm font-bold">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4" dir="rtl">
      <div className="max-w-md text-center glass-strong p-10 rounded-2xl">
        <h1 className="text-xl font-semibold">حدث خطأ غير متوقع</h1>
        <p className="mt-2 text-sm text-muted-foreground">حاول إعادة تحميل الصفحة أو العودة للرئيسية.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-cyber px-5 py-2.5 rounded-xl text-sm font-bold">
            إعادة المحاولة
          </button>
          <a href="/" className="px-5 py-2.5 rounded-xl text-sm font-bold border border-border hover:bg-secondary">الرئيسية</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "سايبر عربي — تعلم الأمن السيبراني والهكر الأخلاقي من الصفر" },
      { name: "description", content: "مدونة عربية احترافية لتعلم الأمن السيبراني والهكر الأخلاقي للمبتدئين عبر دورة منظمة من 5 أيام بمحتوى مجاني عالي الجودة." },
      { name: "author", content: "سعود سعد العتيبي - قسم موهبة بتعليم جدة" },
      { name: "keywords", content: "الأمن السيبراني, الهكر الأخلاقي, تعلم الأمن السيبراني, Cybersecurity Arabic, لينكس, Kali Linux" },
      { property: "og:title", content: "سايبر عربي — تعلم الأمن السيبراني من الصفر" },
      { property: "og:description", content: "دورة عربية مجانية لتعلم الأمن السيبراني للمبتدئين في 5 أيام." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
