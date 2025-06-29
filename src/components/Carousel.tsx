import Image from "next/image";
import { getCarouselSlides } from "@/app/_actions/getCarouselSlides";
import ClientCarousel from "@/components/ClientCarousel";

import "../app/globals.css";

export default async function Carousel() {
    const slides = await getCarouselSlides();

    return <ClientCarousel slides={slides} />;
}
