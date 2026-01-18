import { getCarouselSlides } from "@/app/_actions/home";
import ClientCarousel from "@/components/home/ClientCarousel";
import "@/app/globals.css";

export default async function Carousel() {
    const slides = await getCarouselSlides();

    return <ClientCarousel slides={slides} />;
}
