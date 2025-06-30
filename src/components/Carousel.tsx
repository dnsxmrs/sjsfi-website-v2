import { getCarouselSlides } from "@/app/_actions/getCarouselSlides";
import ClientCarousel from "@/components/ClientCarousel";
import "../app/globals.css";
import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export default async function Carousel() {
    const slides = await getCarouselSlides();
    // Track page visit when the page loads
    await trackPageVisit('home');

    return <ClientCarousel slides={slides} />;
}
