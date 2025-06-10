"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "../app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
    const slides = [
        {
            image: "/assets/award-ceremony.png",
            title: "Saint Joseph School of Fairview Honored at Gawad ISAAL 2025",
            subtitle:
                "Saint Joseph School of Fairview was recognized at the Gawad ISAAL 2025 held last night, March 23, 2025.",
        },
        {
            image: "/assets/celebrating-29.png",
            title: "Celebrating 29 Years of Excellence and Legacy",
            subtitle:
                "Saint Joseph School of Fairview, Inc. proudly commemorates its 29th Founding Anniversary.",
        },
        {
            image: "/assets/intramurals.png",
            title: "Intramurals 2024: Grand Finale and Closing Day",
            subtitle:
                "Celebrate our athletes, witness the awarding of champions, and enjoy exciting performances!",
        },
    ];

    return (
        <div className="w-full h-[calc(100vh-90px)] ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map((slide, index) => (
                    // make the image fill the container and maintain aspect ratio
                    // use key as index for simplicity, but ideally use a unique identifier
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index < 2}
                        />
                        {/* Optional overlay for better content visibility */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="absolute bottom-50 left-50 flex flex-col text-left  z-10 max-w-4xl">
                            <h1 className="text-3xl md:text-5xl font-semibold mb-2 drop-shadow-lg text-[#FFD700]">
                                {slide.title}
                            </h1>
                            <p className="text-base md:text-lg font-normal drop-shadow-md text-white">
                                {slide.subtitle}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
