import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "商業検定ラボ | 商業高校生専門のオンライン検定対策塾",
  description:
    "簿記・情報処理・ビジネス系検定に特化したオンライン検定対策塾「商業検定ラボ」。部活や行事と両立しながら、最短ルートで合格を目指せます。無料体験受付中。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00a2e7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout wraps every page, so this is app-wide, not page-scoped */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&display=swap"
        />
      </head>
      <body className="min-h-full bg-brand-100/70">
        <div className="mx-auto min-h-dvh w-full max-w-md bg-canvas shadow-none md:my-6 md:min-h-0 md:rounded-[2rem] md:shadow-2xl md:shadow-black/10">
          <div className="md:overflow-hidden md:rounded-[2rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}
