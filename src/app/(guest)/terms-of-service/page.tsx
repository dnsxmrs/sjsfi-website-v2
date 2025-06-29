import { trackPageVisit } from "@/app/_actions/trackPageVisit";
import AIGeneratedWarning from "../../../components/AIGeneratedWarning";

export const metadata = {
    title: "Terms of Service | SJSFI",
    description: "Terms of Service for Saint Joseph School of Fairview Inc. website and educational services, outlining rights and responsibilities.",
};

export default async function TermsOfServicePage() {

    await trackPageVisit('terms-of-service');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Terms of Service
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">                        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Saint Joseph School of Fairview Inc. (SJSFI) website
                        and educational services. By accessing our website or utilizing our services, you agree to be bound by these Terms.
                        Please read them carefully before proceeding.
                    </p>
                    <p className="text-black font-semibold text-base md:text-lg pt-4">
                        Effective Date: January 1, 2025
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        About Saint Joseph School of Fairview Inc.
                    </h2>
                    <div className="text-black font-normal text-base md:text-lg pt-4 space-y-2">
                        <p><strong>School Name:</strong> Saint Joseph School of Fairview Inc.</p>
                        <p><strong>Address:</strong> Phase 8, Atherton, Quezon City, 1121 Metro Manila</p>
                        <p><strong>Contact:</strong> (02) 8-693-5661</p>
                        <p><strong>Email:</strong> sjsfi96@gmail.com</p>
                        <p><strong>Recognition:</strong> Recognized by the Department of Education (DepEd) and Commission on Higher Education (CHED)</p>
                        <p><strong>Accreditation:</strong> Accredited by the Philippine Accrediting Association of Schools, Colleges and Universities (PAASCU)</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Acceptance of Terms
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        By accessing, browsing, or using the SJSFI website or any of our educational services, you acknowledge that you have
                        read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to
                        these terms, please discontinue use of our services immediately.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        These Terms apply to all users of our services, including but not limited to students, parents, guardians,
                        employees, prospective students, website visitors, and any other individuals who interact with SJSFI&apos;s services.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Educational Services
                    </h2>

                    <div className="pt-4 space-y-6">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Academic Programs</h3>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                SJSFI offers the following educational programs:
                            </p>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Kindergarten through Elementary Education</li>
                                <li>Junior High School (Grades 7-10)</li>
                                <li>Senior High School (Grades 11-12)</li>
                                <li>Various academic tracks and specialized programs</li>
                                <li>Extracurricular activities and enrichment programs</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Enrollment Requirements</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Completion of required application forms and documentation</li>
                                <li>Payment of applicable fees and deposits</li>
                                <li>Compliance with academic and conduct standards</li>
                                <li>Adherence to school policies and regulations</li>
                                <li>Consent to data processing and privacy policies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Online Services</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Student Information System (SIS) Portal</li>
                                <li>Learning Management System (LMS)</li>
                                <li>Online enrollment and application systems</li>
                                <li>Digital communication platforms</li>
                                <li>Virtual classroom and remote learning tools</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        User Responsibilities and Conduct
                    </h2>

                    <div className="pt-4 space-y-6">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Academic Integrity</h3>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                All users must maintain the highest standards of academic honesty:
                            </p>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Submit original work and properly cite sources</li>
                                <li>Avoid plagiarism, cheating, and unauthorized collaboration</li>
                                <li>Respect intellectual property rights</li>
                                <li>Follow examination and assessment guidelines</li>
                                <li>Report academic misconduct when observed</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Acceptable Use of Technology</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Use school technology resources for educational purposes only</li>
                                <li>Maintain confidentiality of login credentials</li>
                                <li>Respect network security and do not attempt unauthorized access</li>
                                <li>Avoid downloading or sharing inappropriate content</li>
                                <li>Report technical issues and security concerns promptly</li>
                                <li>Comply with software licensing agreements</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Code of Conduct</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Treat all community members with respect and dignity</li>
                                <li>Maintain appropriate language and behavior</li>
                                <li>Follow dress code and appearance standards</li>
                                <li>Attend classes regularly and punctually</li>
                                <li>Participate constructively in school activities</li>
                                <li>Respect school property and facilities</li>
                                <li>Comply with health and safety protocols</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Financial Obligations
                    </h2>

                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Tuition and Fees</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Tuition and fees are due according to published payment schedules</li>
                                <li>Late payment penalties may apply as specified in the enrollment agreement</li>
                                <li>All financial obligations must be settled before graduation or issuance of credentials</li>
                                <li>Fee structures may be subject to annual review and adjustment</li>
                                <li>Refund policies apply as outlined in the student handbook</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Payment Methods</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Payments may be made via cash, check, bank transfer, or approved online methods</li>
                                <li>Payment confirmations and receipts should be retained for records</li>
                                <li>Third-party payment services may have additional terms and conditions</li>
                                <li>Currency conversions (if applicable) are subject to prevailing exchange rates</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Intellectual Property Rights
                    </h2>

                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">School-Owned Content</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>All curriculum materials, course content, and educational resources are proprietary to SJSFI</li>
                                <li>Website content, logos, trademarks, and branding materials are protected by copyright</li>
                                <li>Unauthorized reproduction or distribution of school materials is prohibited</li>
                                <li>Faculty-created content remains the intellectual property of the school unless otherwise agreed</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Student Work</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Students retain ownership of their original creative works</li>
                                <li>SJSFI may use student work for educational and promotional purposes with appropriate attribution</li>
                                <li>Permission will be sought for significant use of student work in publications or marketing</li>
                                <li>Academic papers and projects may be retained for institutional assessment and accreditation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Privacy and Data Protection
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI is committed to protecting personal information in accordance with the Data Privacy Act of 2012
                        and other applicable privacy laws:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Personal information is collected and processed for legitimate educational purposes only</li>
                        <li>Data sharing is limited to authorized parties and purposes as outlined in our Privacy Policy</li>
                        <li>Security measures are implemented to protect against unauthorized access and data breaches</li>
                        <li>Individuals have rights regarding their personal information as specified in our Data Privacy Notice</li>
                        <li>Concerns about data processing can be addressed to our Data Protection Officer</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Disciplinary Actions and Consequences
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Violations of these Terms or school policies may result in disciplinary action:
                    </p>

                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Progressive Discipline</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Verbal warnings and counseling</li>
                                <li>Written reprimands and behavior contracts</li>
                                <li>Suspension from specific activities or services</li>
                                <li>Academic probation or conditional enrollment</li>
                                <li>Suspension or dismissal from the institution</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Due Process</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Students have the right to be informed of allegations against them</li>
                                <li>Opportunity to present their side and provide evidence</li>
                                <li>Fair and impartial investigation of incidents</li>
                                <li>Right to appeal disciplinary decisions through established procedures</li>
                                <li>Involvement of parents/guardians in the disciplinary process for minor students</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Liability and Disclaimers
                    </h2>

                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Educational Services</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>SJSFI strives to provide quality education but cannot guarantee specific academic outcomes</li>
                                <li>Curriculum and programs may be subject to change based on educational requirements</li>
                                <li>Class schedules and faculty assignments may be modified as necessary</li>
                                <li>External factors beyond the school&apos;s control may affect service delivery</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Technology Services</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Online systems may experience occasional downtime for maintenance or technical issues</li>
                                <li>Users are responsible for maintaining their own data backups</li>
                                <li>Third-party services are subject to their own terms and availability</li>
                                <li>SJSFI is not liable for data loss due to user error or system failures</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Personal Property and Safety</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Students are responsible for their personal belongings</li>
                                <li>SJSFI implements reasonable security measures but cannot guarantee against all incidents</li>
                                <li>Insurance coverage recommendations may be provided for students and families</li>
                                <li>Emergency procedures are in place, but outcomes cannot be guaranteed</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Force Majeure and Emergency Situations
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI shall not be liable for delays or failures in performance due to circumstances beyond our reasonable control:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Natural disasters, earthquakes, typhoons, floods, or other acts of nature</li>
                        <li>Government actions, regulatory changes, or legal restrictions</li>
                        <li>Public health emergencies, pandemics, or quarantine requirements</li>
                        <li>Infrastructure failures, utility outages, or communication disruptions</li>
                        <li>Security threats, civil unrest, or other emergency situations</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        In such circumstances, SJSFI will make reasonable efforts to continue providing educational services
                        through alternative means when possible and safe to do so.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Governing Law and Jurisdiction
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        These Terms of Service are governed by and construed in accordance with the laws of the Republic of the Philippines.
                        Any disputes arising from these Terms or the use of SJSFI services shall be subject to the exclusive jurisdiction
                        of the courts of Quezon City, Philippines.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI encourages the resolution of disputes through good faith discussion and mediation before resorting to
                        formal legal proceedings.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Modifications to Terms
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI reserves the right to modify these Terms of Service at any time to reflect changes in our services,
                        legal requirements, or operational needs. Material changes will be communicated to users through:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Website notifications and updates</li>
                        <li>Email communications to registered users</li>
                        <li>Announcements through official school channels</li>
                        <li>Direct notice to enrolled students and parents</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Continued use of SJSFI services after notification of changes constitutes acceptance of the modified Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Contact Information and Support
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        For questions, concerns, or support regarding these Terms of Service or SJSFI services, please contact us:
                    </p>
                    <div className="text-black font-normal text-base md:text-lg pt-4 space-y-2">
                        <p><strong>Saint Joseph School of Fairview Inc.</strong></p>
                        <p>Phase 8, Atherton, Quezon City, 1121 Metro Manila</p>
                        <p>Phone: (02) 8-693-5661</p>
                        <p>Email: sjsfi96@gmail.com</p>
                        <p>Office Hours: Monday to Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We are committed to addressing your concerns promptly and providing assistance with our services.
                        For urgent matters outside of office hours, emergency contact procedures are available through the main office.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Acknowledgment and Agreement
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        By using SJSFI services, you acknowledge that you have read, understood, and agree to be bound by these
                        Terms of Service. You also acknowledge that you have been provided with access to our Privacy Policy and
                        Data Privacy Notice, and that you understand your rights and responsibilities as outlined in these documents.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        If you are enrolling a minor child, you represent that you have the legal authority to agree to these Terms
                        on behalf of the minor and that you will ensure their compliance with these Terms.
                    </p>                    <p className="text-black font-semibold text-base md:text-lg pt-4">
                        Thank you for choosing Saint Joseph School of Fairview Inc. We look forward to serving your educational needs
                        with excellence and integrity.
                    </p>
                </section>
            </div>
        </div>
    );
}