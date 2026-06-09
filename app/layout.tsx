import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanjid Ibna Akid | Software QA Engineer",
  description:
    "Portfolio of Tanjid Ibna Akid, Software QA Engineer specializing in Automation Testing, Manual Testing, API Testing, Mobile Testing, Performance Testing, Playwright, Selenium, Appium and JMeter.",
  keywords: [
    "Software QA Engineer",
    "Test Automation",
    "Playwright",
    "Selenium",
    "Appium",
    "TestNG",
    "API Testing",
    "Performance Testing",
    "JMeter",
    "QA Portfolio",
    "SDET",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
