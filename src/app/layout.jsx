import localFont from "next/font/local";
import { roboto } from "./ui/fonts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MUSIQA Школа игры на различных музыкальных инструментах",
  description:
    "Школа игры на музыкальных инструментах: уроки для всех уровней, от новичков до продвинутых. Обучение игре на гитаре, фортепиано, барабанах и других инструментах с профессиональными преподавателями. Онлайн и офлайн занятия, индивидуальный подход!",
  openGraph: {
    title: "MUSIQA Школа игры на различных музыкальных инструментах",
    description:
      "Школа игры на музыкальных инструментах: уроки для всех уровней, от новичков до продвинутых. Обучение игре на гитаре, фортепиано, барабанах и других инструментах с профессиональными преподавателями. Онлайн и офлайн занятия, индивидуальный подход!",
    type: "website",
    url: "https://guitar.h1n.ru/",
    image:
      "https://guitar.h1n.ru/nextImageExportOptimizer/violin.0658e41f-opt-1920.WEBP",
    locale: "ru",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${roboto.className} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
