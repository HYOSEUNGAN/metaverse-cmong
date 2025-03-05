import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TextAnimation from "../components/TextAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MetaVerse - 미래의 가상세계",
  description: "현실과 가상의 경계를 허무는 메타버스 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TextAnimation texts={["텍스트1", "텍스트2", "텍스트3"]} />
        <TextAnimation
          texts={["텍스트1", "텍스트2"]}
          className="font-bold text-2xl"
          textClassName="text-blue-500"
          interval={4000}
        />
        <div className="flex items-center">
          <span>나의</span>
          <TextAnimation texts={["취미", "특기", "관심사"]} className="mx-2" />
          <span>입니다</span>
        </div>
      </body>
    </html>
  );
}
