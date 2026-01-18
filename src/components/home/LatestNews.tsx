"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LatestNews() {
    const newsItems = [
        {
            id: 1,
            title: "SJSFI Students Excel in Regional Science Competition",
            date: "January 14, 2026",
            image: "/assets/school-logo.webp"
        },
        {
            id: 2,
            title: "New Computer Laboratory Now Operational",
            date: "January 12, 2026",
            image: "/assets/school-logo.webp"
        },
        {
            id: 3,
            title: "Community Outreach Program Success",
            date: "January 10, 2026",
            image: "/assets/school-logo.webp"
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6 h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#800000] font-medium text-xl md:text-2xl">
                    Latest News from the School
                </h2>
                <div className="flex gap-2">
                    <button className="news-prev-btn p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-[#800000]" />
                    </button>
                    <button className="news-next-btn p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <ChevronRight className="w-5 h-5 text-[#800000]" />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.news-prev-btn',
                    nextEl: '.news-next-btn',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                }}
                className="news-carousel !pb-12"
                style={{
                    paddingBottom: '3rem'
                }}
            >
                {newsItems.map((news) => (
                    <SwiperSlide key={news.id}>
                        <Link href="#" className="block group pb-8">
                            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-[#800000] font-semibold text-lg md:text-xl mb-2 group-hover:underline">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                {news.date}
                            </p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
