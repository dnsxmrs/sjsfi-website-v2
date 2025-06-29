import AIGeneratedWarning from "@/components/AIGeneratedWarning";
import { getVacancies } from "../../_actions/careers";
import { Globe } from "lucide-react";
import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export const metadata = {
    title: "Careers | SJSFI",
    description:
        "Explore career opportunities at Saint Joseph School of Fairview Inc. and join our dedicated team.",
};

export default async function Career() {
    const vacancies = await getVacancies();
    await trackPageVisit('careers');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />

            {/* Dynamic hiring statistics */}
            {/* <section className="mb-16">
                <div className="bg-gradient-to-r from-[#800000] to-red-800 text-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                We&apos;re Hiring!
                            </h2>
                            <p className="text-red-100 text-lg">
                                Join our growing team at SJSFI
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                                    {vacancies.length}
                                </div>
                                <div className="text-sm text-red-100">
                                    Open Positions
                                </div>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px]">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                                    {vacancies.filter(v => v.position === "Faculty Member").length}
                                </div>
                                <div className="text-sm text-red-100">
                                    Faculty Positions
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {employeeNeeds.departments.map((dept, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-4 text-center"
                            >
                                <div className="text-xl font-semibold text-yellow-300">
                                    {dept.needed}
                                </div>
                                <div className="text-xs text-red-100 mb-1">
                                    {dept.name}
                                </div>
                                {dept.urgent > 0 && (
                                    <div className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full">
                                        {dept.urgent} urgent
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-red-100 text-sm">
                            * Data updated in real-time from HRMS system
                        </p>
                    </div>
                </div>
            </section> */}

            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Careers at SJSFI
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Saint Joseph School of Fairview Inc. is always seeking passionate
                        educators and dedicated professionals who share our commitment to
                        excellence in education. We offer a supportive work environment
                        where you can grow professionally while making a meaningful impact
                        on young lives.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        As part of the SJSFI family, you&apos;ll join a community of educators
                        who are devoted to nurturing students&apos; academic, spiritual, and
                        personal development. We value innovation, collaboration, and
                        continuous learning in our pursuit of educational excellence.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Current Job Openings
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We are currently looking for qualified and passionate individuals to
                        join our team. Explore the available positions below and find the
                        opportunity that matches your skills and career aspirations.
                    </p>

                    {vacancies.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {vacancies.map((vacancy) => (
                                <div key={vacancy.id} className="bg-red-50 p-6 rounded-lg border-l-4 border-[#800000]">
                                    <h3 className="text-[#800000] font-semibold text-lg mb-3">
                                        {vacancy.title}
                                    </h3>
                                    <div className="mb-2">
                                        <span className="inline-block bg-[#800000] text-white text-xs px-2 py-1 rounded-full mb-2">
                                            {vacancy.position}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-2">
                                        {vacancy.description}
                                    </p>
                                    <p className="text-xs text-gray-500">Posted: {vacancy.postedDate}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6 p-6 bg-gray-50 rounded-lg text-center">
                            <p className="text-gray-600">No current job openings available. Please check back later.</p>
                        </div>
                    )}

                    <p className="text-gray-600 text-sm mt-4">
                        Interested candidates can apply by filling out this form and sending their resume
                        to our HR department at{" "}
                        <a
                            href="https://hrms-v2-azure.vercel.app/applicant"
                            className="text-[#800000] hover:underline"
                        >
                            Applicants Portal Page
                        </a> and see <a href="#requirements" className="text-[#800000] hover:underline transition-colors">requirements</a> below.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Why Work at SJSFI?
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI offers more than just a job - we provide a fulfilling career
                        where you can make a lasting difference in the lives of young
                        people. Our school values work-life balance, professional growth,
                        and creating a positive impact in education.
                    </p>
                    <div className="space-y-4 mt-6">
                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-[#800000] w-3 h-3 rounded-full mt-1"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Competitive Compensation
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    We offer competitive salaries and comprehensive benefits
                                    package including health insurance and performance incentives.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-[#800000] w-3 h-3 rounded-full mt-1"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Professional Development
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Access to continuous learning opportunities, workshops,
                                    seminars, and educational advancement programs.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-[#800000] w-3 h-3 rounded-full mt-1"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Supportive Environment
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Collaborative workplace culture with supportive colleagues and
                                    administration committed to your success.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-[#800000] w-3 h-3 rounded-full mt-1"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Meaningful Impact
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Opportunity to shape young minds and contribute to building
                                    future leaders with strong values and character.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Application Process
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Ready to join our team? Follow these simple steps to apply for a
                        position at SJSFI. We encourage all qualified candidates to submit
                        their applications and become part of our educational mission.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h4 className="text-[#800000] font-semibold text-lg mb-2">
                                Submit Application
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Send your resume, cover letter, and required documents to our HR
                                department.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h4 className="text-[#800000] font-semibold text-lg mb-2">
                                Initial Screening
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Our HR team will review your application and contact qualified
                                candidates.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h4 className="text-[#800000] font-semibold text-lg mb-2">
                                Interview Process
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Participate in interviews with department heads and school
                                administrators.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="text-[#800000] font-semibold text-lg mb-3">
                            Ready to Apply?
                        </h4>
                        <p className="text-gray-700 mb-4">
                            Take the first step towards joining our educational community.
                            Send your application materials today and help us continue our
                            mission of providing quality education to young Josephians.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center space-x-2">
                                <Globe className="w-5 h-5 text-[#800000]" />
                                <span className="text-sm text-gray-600"><a href="https://hrms-v2-azure.vercel.app/applicant" className="hover:text-red-800">HRMS - Applicant Portal</a></span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-[#800000]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-sm text-gray-600">
                                    <a
                                        href="mailto:sjsfi96@gmail.com"
                                        rel="noopener noreferrer"
                                        className="hover:text-red-800"
                                    >
                                        sjsfi96@gmail.com
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-[#800000]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-sm text-gray-600">(02) 8-693-5661</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-[#800000]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm text-gray-600">
                                    Phase 8, Atherton, Quezon City, 1121 Metro Manila <span className="text-[#800000]">(<a href="https://maps.app.goo.gl/87WyMU2Db285kGNE7" className="hover:text-yellow-500">Google Maps</a>)</span>
                                </span>
                            </div>
                        </div>
                        <div id='requirements' className="mt-4 p-4 bg-white rounded border">
                            <h5 className="font-semibold text-gray-800 mb-2">
                                Required Documents:
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Updated Resume/CV</li>
                                <li>• Cover Letter</li>
                                <li>• Teaching License (for teaching positions)</li>
                                {/* <li>• Transcript of Records</li> */}
                                <li>• Letter of Recommendation (if available)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
