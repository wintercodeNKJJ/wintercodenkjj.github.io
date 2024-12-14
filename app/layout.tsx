import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import PortfolioTour from "@/components/PortfolioTour";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguezet Kenfack Jordan Junior - Full Stack Developer",
  description:
    "Portfolio of Nguezet Kenfack Jordan Junior, a passionate Full Stack Software Developer specializing in scalable and efficient digital solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-white flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ThemeSwitcher />
          <PortfolioTour />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-TKEVJM8JKC" />
    </html>
  );
}
