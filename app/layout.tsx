import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 共有用画像（app/opengraph-image.png）の URL を本番ドメインで出すため
  metadataBase: new URL("https://kaitoo-works.vercel.app"),
  title: "KAITOO Works｜業務効率化・Web開発",
  description:
    "KAITOO Worksは、GAS・スプレッドシート・Python・Next.jsで、転記や集計などの定型業務の自動化から小さなWebツールの開発・修正まで行う個人の開発サービスです。LP・SNS制作にも対応します。",
  openGraph: {
    title: "KAITOO Works｜業務効率化・Web開発",
    description: "AI業務効率化 19,800円〜／小規模Web・アプリ開発／48時間ミニLP 29,800円〜／SNS制作 9,800円〜",
    locale: "ja_JP",
    type: "website",
  },
  // X でリンクを送ったときに大きい画像で出す
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
