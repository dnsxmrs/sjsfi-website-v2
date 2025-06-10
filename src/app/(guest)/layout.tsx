import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

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