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
  title: "KAITOO Works｜AI・Web制作",
  description:
    "KAITOO Worksは、AIを活用してInstagram投稿制作・48時間ミニLP制作・業務効率化ツール制作を短納期で行う個人の制作サービスです。",
  openGraph: {
    title: "KAITOO Works｜AI・Web制作",
    description: "SNS制作 9,800円〜／48時間ミニLP 29,800円〜／AI業務効率化 19,800円〜",
    locale: "ja_JP",
    type: "website",
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
