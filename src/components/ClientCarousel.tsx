"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { CarouselSlide } from "@/app/_actions/getCarouselSlides";

import "../app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

interface ClientCarouselProps {
    slides: CarouselSlide[];
}

export default function ClientCarousel({ slides }: ClientCarouselProps) {

    useEffect(() => {
        fetch('/api/page-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pageName: 'home' }),
        });
    }, []);

    return (
        <div className="w-full h-[calc(100vh-90px)]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <Image
                            src={slide.imageUrl}
                            alt={slide.altText || slide.title}
                            fill
                            className="object-cover"
                            priority={index < 2}
                        />
                        {/* Optional overlay for better content visibility */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="absolute bottom-50 left-50 flex flex-col text-left z-10 max-w-4xl">
                            <h1 className="text-3xl md:text-5xl font-semibold mb-2 drop-shadow-lg text-[#FFD700]">
                                {slide.title}
                            </h1>
                            <p className="text-base md:text-lg font-normal drop-shadow-md text-white">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
