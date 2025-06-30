import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';
import type { Metadata } from 'next';

// add metadata for the whole website
export const metadata: Metadata = {
    title: "Saint Joseph School of Fairview Inc.",
    description: "Official website of Saint Joseph School of Fairview Inc.",
    openGraph: {
        title: "SJSFI - Saint Joseph School of Fairview Inc.",
        description: "DepEd Accredited · Government Recognized · Enroll Online Today",
        url: "https://sjsfi.vercel.app", // Use the public website URL
        siteName: "Saint Joseph School of Fairview Inc.",
        images: [
            {
                url: "https://sjsfi.vercel.app/assets/school-logo.webp",
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
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-white w-full">{children}</main>
            <Chatbot />
            <Footer />
        </div>
    );
}