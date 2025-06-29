import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Saint Joseph School of Fairview Inc. - North Fairview",
  description: "Saint Joseph School of Fairview honored at Gawad ISAAL 2025 · 29 Years of Excellence · PEAC Certified · Enroll Now!",
  verification: {
    google: 'qA2IY2_tl-OPqrXz_Zhfelo8kH0cN9oyTNz-2GHWzUk',
  },
  openGraph: {
    title: "Saint Joseph School of Fairview Inc. - North Fairview",
    description: "DepEd Accredited · Government Recognized · Enroll Online Today",
    url: "https://sjsfi.vercel.app",
    siteName: "Saint Joseph School of Fairview Inc.",
    images: [
      {
        url: "https://sjsfi.vercel.app/assets/school-logo.webp", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "SJSFI Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col `}>
        {children}
        <Toaster position="top-right" />
        <SpeedInsights />
      </body>
    </html>
  );
}