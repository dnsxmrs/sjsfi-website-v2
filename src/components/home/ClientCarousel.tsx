"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { CarouselSlide } from "@/app/_actions/home";

import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ClientCarouselProps {
    slides: CarouselSlide[];
}

export default function ClientCarousel({ slides }: ClientCarouselProps) {

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
                        <div className="absolute inset-x-0 bottom-15 flex flex-col text-left z-10 px-4 py-8 md:px-12 md:py-16 lg:px-20">
                            <div className="max-w-4xl">
                                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 md:mb-4 drop-shadow-lg text-[#FFD700]">
                                    {slide.title}
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg font-normal drop-shadow-md text-white">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
