// template for announcments page
// import Announcements from '@/components/announcements/Announcements';
import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export const metadata = {
    title: "News | SJSFI",
    description: "Stay updated with the latest announcements and advisories from Saint Joseph School of Fairview Inc. Important news and updates for students, parents, and staff."
};

export default async function NewsPage() {
    // Track page visit when the page loads
    await trackPageVisit('news');

    return (
        <div className="w-full bg-white px-6 py-12 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl mb-8">
                    News
                </h1>
                <p className="text-gray-600">
                    News page content coming soon.
                </p>
            </div>
        </div>
    );
}