import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arbab Ali | AI Developer & Full-Stack Developer",
  description: "Portfolio of Arbab Ali, a B.Tech Information Technology student building AI agents, backend systems, cybersecurity tools, and full-stack applications.",
  keywords: ["Arbab Ali", "AI Developer", "Full-Stack Developer", "Next.js", "Python", "FastAPI", "Portfolio", "Cybersecurity"],
  openGraph: {
    title: "Arbab Ali | AI Developer & Full-Stack Developer",
    description: "Portfolio of Arbab Ali, a B.Tech Information Technology student building AI agents, backend systems, cybersecurity tools, and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased bg-[#030712] text-slate-50`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
