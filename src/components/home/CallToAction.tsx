import Link from "next/link";
import { FileEdit, Star, BookOpen, Briefcase } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="bg-white px-4 py-12 md:py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20">
                    <Link
                        href="/be-a-josephian"
                        className="flex flex-col items-center group"
                    >
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-4 border-[#800000] hover:bg-[#800000] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                            <FileEdit className="w-8 h-8 md:w-12 md:h-12 text-[#800000] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="mt-3 text-black group-hover:text-[#800000] font-semibold text-xs md:text-base text-center transition-colors max-w-[80px] md:max-w-none tracking-wide">
                            Apply Now
                        </h3>
                    </Link>

                    <Link
                        href="/about"
                        className="flex flex-col items-center group"
                    >
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-4 border-[#800000] hover:bg-[#800000] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                            <Star className="w-8 h-8 md:w-12 md:h-12 text-[#800000] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="mt-3 text-black group-hover:text-[#800000] font-semibold text-xs md:text-base text-center transition-colors max-w-[80px] md:max-w-none tracking-wide">
                            About SJSFI
                        </h3>
                    </Link>

                    <Link
                        href="/what-we-offer"
                        className="flex flex-col items-center group"
                    >
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-4 border-[#800000] hover:bg-[#800000] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                            <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-[#800000] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="mt-3 text-black group-hover:text-[#800000] font-semibold text-xs md:text-base text-center transition-colors max-w-[80px] md:max-w-none tracking-wide">
                            Programs
                        </h3>
                    </Link>

                    <Link
                        href="/careers"
                        className="flex flex-col items-center group"
                    >
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-4 border-[#800000] hover:bg-[#800000] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                            <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-[#800000] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="mt-3 text-black group-hover:text-[#800000] font-semibold text-xs md:text-base text-center transition-colors max-w-[80px] md:max-w-none tracking-wide">
                            Careers
                        </h3>
                    </Link>
                </div>
            </div>
        </section>
    );
}
