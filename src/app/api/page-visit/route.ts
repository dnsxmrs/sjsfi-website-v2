import { NextResponse } from 'next/server';
import { trackPageVisit } from '@/app/_actions/trackPageVisit';

export async function POST(req: Request) {
    const { pageName } = await req.json();

    try {
        await trackPageVisit(pageName);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('❌ Error in API:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
