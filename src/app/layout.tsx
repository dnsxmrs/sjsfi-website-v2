import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Saint Joseph School of Fairview Inc.",
  description: "Saint Joseph School of Fairview Inc. Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col `}>
        <Navbar />
        <main className="flex-1 bg-white w-full">{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}