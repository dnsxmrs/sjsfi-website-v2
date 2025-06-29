'use server';

import { prisma } from '@/services/prisma';

export async function trackPageVisit(pageName: string): Promise<void> {
    try {
        console.log('🔍 trackPageVisit called with pageName:', pageName);

        // Get current UTC time
        const now = new Date();
        // Calculate PH time
        const nowPH = new Date(now.getTime() + 8 * 60 * 60 * 1000);
        // Calculate PH midnight in PH time
        const startPH = new Date(Date.UTC(nowPH.getUTCFullYear(), nowPH.getUTCMonth(), nowPH.getUTCDate()));
        // Convert PH midnight to UTC
        const startUTC = new Date(startPH.getTime() - 8 * 60 * 60 * 1000);
        const endUTC = new Date(startUTC.getTime() + 24 * 60 * 60 * 1000);

        // Try to find existing page visit record for today (PH time)
        const existingVisit = await prisma.pageVisit.findFirst({
            where: {
                pageName: pageName,
                visitDate: {
                    gte: startUTC,
                    lt: endUTC,
                },
            },
        });

        console.log('📊 Existing visit found:', existingVisit);

        if (existingVisit) {
            // Increment the count if record exists
            console.log('⬆️ Updating existing record, current count:', existingVisit.count);

            const updatedVisit = await prisma.pageVisit.update({
                where: {
                    id: existingVisit.id,
                },
                data: {
                    count: existingVisit.count + 1,
                    updatedAt: now,
                },
            });

            console.log('✅ Record updated successfully, new count:', updatedVisit.count);
        } else {
            // Create new record if it doesn't exist
            console.log('🆕 Creating new record for page:', pageName);

            const newVisit = await prisma.pageVisit.create({
                data: {
                    pageName: pageName,
                    count: 1,
                    visitDate: now,
                    updatedAt: now,
                },
            });

            console.log('✅ New record created successfully:', newVisit);
        }
    } catch (error) {
        console.error('❌ Error tracking page visit:', error);
        console.error('Error details:', {
            pageName,
            error: error instanceof Error ? error.message : error
        });
        // Don't throw error to avoid breaking the page load
    }
}

export async function getPageVisitCount(pageName: string): Promise<number> {
    try {
        const now = new Date();
        const nowPH = new Date(now.getTime() + 8 * 60 * 60 * 1000);
        const startPH = new Date(Date.UTC(nowPH.getUTCFullYear(), nowPH.getUTCMonth(), nowPH.getUTCDate()));
        const startUTC = new Date(startPH.getTime() - 8 * 60 * 60 * 1000);
        const endUTC = new Date(startUTC.getTime() + 24 * 60 * 60 * 1000);

        const pageVisit = await prisma.pageVisit.findFirst({
            where: {
                pageName: pageName,
                visitDate: {
                    gte: startUTC,
                    lt: endUTC,
                },
            },
        });

        return pageVisit?.count || 0;
    } catch (error) {
        console.error('Error getting page visit count:', error);
        return 0;
    }
}

export async function getTotalPageVisits(pageName: string): Promise<number> {
    try {
        const result = await prisma.pageVisit.aggregate({
            where: {
                pageName: pageName,
            },
            _sum: {
                count: true,
            },
        });

        return result._sum.count || 0;
    } catch (error) {
        console.error('Error getting total page visits:', error);
        return 0;
    }
}
