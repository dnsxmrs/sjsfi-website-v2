import Link from "next/link";

export default function Announcements() {
    const announcements = [
        {
            id: 1,
            title: "Enrollment for SY 2025-2026 Now Open",
            date: "January 15, 2026"
        },
        {
            id: 2,
            title: "Mid-Year Recognition Day",
            date: "January 20, 2026"
        },
        {
            id: 3,
            title: "Parent-Teacher Conference Schedule",
            date: "January 25, 2026"
        },
        {
            id: 4,
            title: "School Maintenance Advisory",
            date: "January 10, 2026"
        },
        {
            id: 5,
            title: "Student Achievement Awards Ceremony",
            date: "January 28, 2026"
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6 h-full">
            <h2 className="text-[#800000] font-medium text-xl md:text-2xl mb-6">
                Announcements and Advisories
            </h2>

            <div className="space-y-4 mb-6">
                {announcements.map((announcement) => (
                    <Link
                        key={announcement.id}
                        href="#"
                        className="block border-b border-gray-200 pb-4 last:border-b-0 hover:bg-gray-50 transition-colors rounded px-2 -mx-2"
                    >
                        <h3 className="text-[#800000] font-medium text-sm md:text-base mb-2 hover:underline">
                            {announcement.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                            Posted: {announcement.date}
                        </p>
                    </Link>
                ))}
            </div>

            <Link
                href="/announcements"
                className="inline-flex items-center text-[#800000] font-medium text-sm hover:underline"
            >
                View All Announcements →
            </Link>
        </div>
    );
}
