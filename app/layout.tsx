import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}