import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export const metadata = {
    title: "Be a Josephian | SJSFI",
    description:
        "Learn how to become a Josephian at Saint Joseph School of Fairview Inc.",
};

export default async function Josephian() {

    await trackPageVisit('be-a-josephian');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Be a Josephian
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Becoming a Josephian means joining a community of learners dedicated
                        to academic excellence, moral integrity, and service to others. At
                        Saint Joseph School of Fairview Inc., we welcome students who are
                        ready to embrace our values and contribute to our vibrant school
                        community.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        As a Josephian, you will be part of a tradition that emphasizes not
                        just academic achievement, but also character formation, leadership
                        development, and social responsibility. Our students are encouraged
                        to excel in their studies while growing as compassionate and
                        committed individuals.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Age Qualifications
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Students must meet the following age requirements on or at least one month after school opening:
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[120px]">Kinder 1:</span>
                            <span className="text-gray-700">4.0 years old</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[120px]">Kinder 2:</span>
                            <span className="text-gray-700">5.0 years old</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[120px]">Grade 1:</span>
                            <span className="text-gray-700">6.0 years old</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Admission Procedure
                    </h1>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                1. Inquiry / Initial Contact
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Parents or guardians should contact or visit the school&apos;s admissions office to inquire about available grade levels.
                                You can reach us through:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Phone:</strong> +639399866311 or (02) 8-693-5661</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Email:</strong> sjsfi96@gmail.com</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>In-person:</strong> Monday to Friday, 9:00 AM to 3:00 PM | Saturday, 9:00 AM to 12:00 NN</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                2. Information Gathering
                            </h3>
                            <p className="text-gray-700 mb-3">
                                During the inquiry, please be prepared to provide:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Student&apos;s full name and date of birth</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Current or last completed grade level</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Any special accommodations or considerations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Contact details (phone number and email address)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                3. Complete Application Forms
                            </h3>
                            <p className="text-gray-700">
                                Complete the application forms thoroughly and ensure all information is accurate.
                                Review the form carefully before submission to the Admission Office.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                4. Submit Documentary Requirements
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Submit the completed application form along with the required documents to the Admission Office.
                                All prerequisite documents must be submitted and will become part of the school&apos;s permanent records.
                            </p>
                            <p className="text-gray-700 italic text-sm bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                                Note: Documents will not be returned once enrolled. Please present original copies for verification
                                along with photocopies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                5. Interview (If Required)
                            </h3>
                            <p className="text-gray-700">
                                The Admissions Office may schedule an interview with the student applicant and their parent or guardian
                                on a case-by-case basis. This interview helps us better understand the applicant&apos;s academic background,
                                personal interests, and readiness for our program. Interviews may be conducted in person or virtually.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                6. Payment of Fees
                            </h3>
                            <p className="text-gray-700 mb-3">
                                After completing the admissions process, pay the tuition fee at the Cashier&apos;s Office to secure enrollment.
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Accepted payments:</strong> Cash, check, and bank transfers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Installment plans:</strong> Flexible payment options available</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Important:</strong> Pay by the specified deadline to avoid late fees or penalties</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Documentary Requirements
                    </h1>

                    <div className="mt-6 space-y-8">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-4">
                                For Transferees
                            </h3>
                            <p className="text-gray-700 mb-3">
                                The following should be submitted as part of the requirements for enrollment and transfer:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">1.</span>
                                    <span>Certified true copy of the latest Form 138 with LRN</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">2.</span>
                                    <span>Photocopy of PSA Birth Certificate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">3.</span>
                                    <span>ID Photo 4pcs 1x1 White Background</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">4.</span>
                                    <span>Good Moral Certificate from Guidance Counselor/School Administrator</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">5.</span>
                                    <span>Form 137</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-4">
                                For Current Learners
                            </h3>
                            <p className="text-gray-700 mb-3">
                                The following should be submitted for the upcoming academic year:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">1.</span>
                                    <span>ID Photo 4pcs 1x1 White Background</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">2.</span>
                                    <span>Duly accomplished updated student profile</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-4">
                                For New Learners (Preschool Programs)
                            </h3>
                            <p className="text-gray-700 mb-3">
                                The following should be submitted as part of the requirements for new learners:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">1.</span>
                                    <span>Photocopy of PSA Birth Certificate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">2.</span>
                                    <span>ID Photo 4pcs 1x1 White Background</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">3.</span>
                                    <span>Duly accomplished forms from Registrar&apos;s Office</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-4">
                                For Learners under Inclusive/Special Education Program
                            </h3>
                            <p className="text-gray-700 mb-3">
                                The following should be submitted as part of the requirements of our Inclusive Program:
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">1.</span>
                                    <span>Photocopy of PSA Birth Certificate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">2.</span>
                                    <span>ID Photo 4pcs 1x1 White Background</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">3.</span>
                                    <span>Duly accomplished forms from Registrar&apos;s Office</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">4.</span>
                                    <span>Copy of the latest evaluation of the Developmental Pediatrician</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#800000] mr-3 font-bold">5.</span>
                                    <span>Copy of the latest assessment of the child&apos;s Occupational Therapist or Speech Therapist</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Payment Options
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Parents/Guardians have the option to choose from the following modes of payment:
                    </p>
                    <div className="mt-6 space-y-2">
                        <div className="flex items-start">
                            <span className="text-[#800000] mr-3">•</span>
                            <span className="text-gray-700"><strong>Annual Basis:</strong> One-time payment</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] mr-3">•</span>
                            <span className="text-gray-700"><strong>Semestral Basis:</strong> Upon enrollment + one installment</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] mr-3">•</span>
                            <span className="text-gray-700"><strong>Quarterly Basis:</strong> Upon enrollment + three installments</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] mr-3">•</span>
                            <span className="text-gray-700"><strong>Monthly Basis:</strong> Upon enrollment + eight installments</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Tuition Discounts
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Discounts on tuition fees are available when multiple siblings are enrolled,
                        and they apply to the younger siblings as follows:
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[100px]">2nd Child:</span>
                            <span className="text-gray-700">15% discount</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[100px]">3rd Child:</span>
                            <span className="text-gray-700">25% discount</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[100px]">4th Child:</span>
                            <span className="text-gray-700">35% discount</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-[#800000] font-semibold min-w-[100px]">5th Child:</span>
                            <span className="text-gray-700">50% discount</span>
                        </div>
                    </div>
                    <div className="mt-6 bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                        <p className="text-gray-700 text-sm">
                            <strong>Additional Discounts Available:</strong> Academic Awardee Discount for honor students
                            and Early Bird Discount for early payment. Please inquire at the Cashier&apos;s Office for more details.
                        </p>
                    </div>
                </section>

                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Important Policies
                    </h1>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                Policy for Non-Catholic Students
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Saint Joseph School of Fairview, while primarily serving the Catholic community, is a non-sectarian
                                institution and welcomes students of all faiths. Non-Catholic applicants may be admitted, provided they
                                agree to adhere to the school&apos;s policies and values.
                            </p>
                            <p className="text-gray-700 italic bg-gray-50 p-3 rounded">
                                Note: A signed agreement affirming commitment to respecting and upholding the school&apos;s policies,
                                including participation in religious activities and moral education, is required as part of the admission process.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                Probationary Admission
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Applicants who do not fully meet the standard admission requirements may be granted probationary admission,
                                provided they are willing to participate in the recommended intervention program.
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Requirements for probationary students:</strong>
                            </p>
                            <ul className="ml-6 space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Achieve a final academic general average of at least 80.00</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Maintain a final conduct grade of &quot;Good&quot; (G) or higher</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Upon meeting these requirements, the student will be formally admitted as a regular student</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl mb-3">
                                Education Service Contracting (ESC)
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Saint Joseph School of Fairview is a PEAC-certified institution participating in the Education Service
                                Contracting (ESC) program, a partnership between DepEd and the Private Education Assistance Committee (PEAC).
                                This program aims to alleviate overcrowding in public junior high schools by allocating slots for students
                                in certified private schools.
                            </p>
                            <p className="text-gray-700">
                                As an ESC-participating school, we provide grantees with an education that meets or exceeds the minimum
                                standards established by DepEd, maintaining our commitment to quality education.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
