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
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
