'use server';

import { prisma } from '@/services/prisma';

export interface CarouselSlide {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    altText?: string | null;
    isActive: boolean;
}

export async function getCarouselSlides(): Promise<CarouselSlide[]> {
    try {
        const slides = await prisma.carousel.findMany({
            where: {
                isActive: true,
                deletedAt: null,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return slides.map((slide) => ({
            id: slide.id,
            title: slide.title,
            description: slide.description,
            imageUrl: slide.imageUrl,
            altText: slide.altText,
            isActive: slide.isActive,
        }));
    } catch (error) {
        console.error('Error fetching carousel slides:', error);
        // Return fallback static slides if database fetch fails
        return [
            {
                id: 'static-1',
                title: "Saint Joseph School of Fairview Honored at Gawad ISAAL 2025",
                description: "Saint Joseph School of Fairview was recognized at the Gawad ISAAL 2025 held last night, March 23, 2025.",
                imageUrl: "/assets/award-ceremony.png",
                altText: "Award ceremony",
                isActive: true,
            },
            {
                id: 'static-2',
                title: "Celebrating 29 Years of Excellence and Legacy",
                description: "Saint Joseph School of Fairview, Inc. proudly commemorates its 29th Founding Anniversary.",
                imageUrl: "/assets/celebrating-29.png",
                altText: "Celebrating 29 years",
                isActive: true,
            },
            {
                id: 'static-3',
                title: "Intramurals 2024: Grand Finale and Closing Day",
                description: "Celebrate our athletes, witness the awarding of champions, and enjoy exciting performances!",
                imageUrl: "/assets/intramurals.png",
                altText: "Intramurals",
                isActive: true,
            },
        ];
    }
}
