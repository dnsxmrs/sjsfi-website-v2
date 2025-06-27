'use server';

export interface Vacancy {
    id: number;
    title: string;
    position: string;
    description: string;
    postedDate: string;
}

export async function getVacancies(): Promise<Vacancy[]> {
    try {
        const response = await fetch('https://hrms-v2-azure.vercel.app/api/vacancies/public', {
            // next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch vacancies: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched vacancies:', data);
        return data;
    } catch (error) {
        console.error('Error fetching vacancies:', error);
        return [];
    }
}

export async function getVacancyStats() {
    const vacancies = await getVacancies();

    const stats = {
        total: vacancies.length,
        byPosition: {
            faculty: vacancies.filter(v => v.position === "Faculty Member").length,
            registrar: vacancies.filter(v => v.position === "Registrar").length,
            other: vacancies.filter(v => v.position === "Other Position").length,
        },
        recentlyPosted: vacancies.filter(v => {
            const posted = new Date(v.postedDate);
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            return posted >= oneWeekAgo;
        }).length
    };

    return stats;
}
