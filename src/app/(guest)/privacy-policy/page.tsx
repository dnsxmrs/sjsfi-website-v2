"use client";

import { useEffect } from "react";
import AIGeneratedWarning from "../../../components/AIGeneratedWarning";

export default function PrivacyPolicyPage() {
    useEffect(() => {
        fetch('/api/page-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pageName: 'privacy-policy' }),
        });
    }, []);

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Saint Joseph School of Fairview Inc. (SJSFI) is committed to protecting the privacy and security of personal 
                        information entrusted to us by students, parents, employees, and website visitors. This Privacy Policy describes 
                        our practices concerning the collection, use, disclosure, and protection of personal information.
                    </p>                    <p className="text-black font-semibold text-base md:text-lg pt-4">
                        Last Updated: January 1, 2025
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Our Commitment to Privacy
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        As an educational institution committed to Christian values, SJSFI recognizes the importance of maintaining the 
                        confidentiality and privacy of personal information. We are dedicated to:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Collecting only necessary personal information for legitimate educational purposes</li>
                        <li>Using personal information solely for the purposes for which it was collected</li>
                        <li>Implementing robust security measures to protect against unauthorized access</li>
                        <li>Respecting individual privacy rights and providing transparency in our practices</li>
                        <li>Complying with all applicable privacy laws and regulations in the Philippines</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Information We Collect
                    </h2>
                    
                    <div className="pt-4 space-y-6">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Student Information</h3>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                We collect student information necessary for enrollment, academic progress tracking, and providing educational services:
                            </p>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Personal details (name, birthdate, contact information)</li>
                                <li>Academic records and performance data</li>
                                <li>Attendance and disciplinary records</li>
                                <li>Health information for safety and emergency purposes</li>
                                <li>Photographs for identification and school publications</li>
                                <li>Financial information for billing and scholarship purposes</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Parent and Guardian Information</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Contact information for communication purposes</li>
                                <li>Emergency contact details</li>
                                <li>Financial information for tuition and fee processing</li>
                                <li>Background information relevant to student welfare</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Employee Information</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Personal and professional information for employment purposes</li>
                                <li>Academic credentials and professional qualifications</li>
                                <li>Employment history and references</li>
                                <li>Payroll and benefits information</li>
                                <li>Performance evaluations and professional development records</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-xl">Website and Digital Information</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>IP addresses and browser information</li>
                                <li>Website usage patterns and preferences</li>
                                <li>Information submitted through online forms</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        How We Use Your Information
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI uses personal information for legitimate educational and operational purposes:
                    </p>
                    
                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Educational Services</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Managing student enrollment and registration</li>
                                <li>Delivering academic programs and services</li>
                                <li>Tracking academic progress and performance</li>
                                <li>Providing guidance and counseling services</li>
                                <li>Organizing extracurricular activities and events</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Communication</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Communicating with students, parents, and guardians</li>
                                <li>Sending important announcements and updates</li>
                                <li>Emergency notifications and safety alerts</li>
                                <li>Alumni relations and institutional communications</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Administration</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Financial transactions and billing</li>
                                <li>Human resources management</li>
                                <li>Compliance with regulatory requirements</li>
                                <li>Institutional research and improvement</li>
                                <li>Safety and security measures</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Information Sharing and Disclosure
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI does not sell, rent, or trade personal information. We may share information only in the following circumstances:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li><strong>With Consent:</strong> When explicit consent has been obtained from the individual or parent/guardian</li>
                        <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                        <li><strong>Educational Purposes:</strong> With educational institutions for transfer or continuing education</li>
                        <li><strong>Service Providers:</strong> With trusted third-party vendors under strict confidentiality agreements</li>
                        <li><strong>Emergency Situations:</strong> To protect health, safety, or vital interests of individuals</li>
                        <li><strong>Regulatory Compliance:</strong> With government agencies as required by education regulations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Security and Protection
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI implements comprehensive security measures to protect personal information:
                    </p>
                    
                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Technical Safeguards</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Encryption of sensitive data in storage and transmission</li>
                                <li>Secure networks and firewalls</li>
                                <li>Regular system updates and security patches</li>
                                <li>Access controls and user authentication</li>
                                <li>Regular security monitoring and incident response</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Administrative Safeguards</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Employee training on privacy and security practices</li>
                                <li>Confidentiality agreements for all staff</li>
                                <li>Regular privacy impact assessments</li>
                                <li>Incident response and breach notification procedures</li>
                                <li>Periodic review and update of security policies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Physical Safeguards</h3>
                            <ul className="text-black font-normal text-base md:text-lg pt-2 ml-6 space-y-1 list-disc">
                                <li>Secure storage of physical documents</li>
                                <li>Restricted access to areas containing personal information</li>
                                <li>Proper disposal of documents and electronic media</li>
                                <li>Surveillance systems in sensitive areas</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Student Rights and FERPA Compliance
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        While SJSFI is not directly subject to FERPA (Family Educational Rights and Privacy Act), we apply similar principles 
                        to protect student educational records:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Students and parents have the right to review educational records</li>
                        <li>Written consent is required before disclosing educational records to third parties</li>
                        <li>Directory information may be disclosed unless specifically opted out</li>
                        <li>Parents and eligible students can request corrections to inaccurate records</li>
                        <li>Complaints regarding educational records can be filed with the school administration</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Website Privacy and Cookies
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our website may use cookies and similar technologies to enhance user experience:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Essential cookies for website functionality</li>
                        <li>Analytics cookies to understand website usage (anonymized data)</li>
                        <li>Preference cookies to remember user settings</li>
                        <li>No tracking cookies for advertising purposes</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Third-Party Services
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI may use third-party services for educational and operational purposes. These services include:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Learning Management Systems (LMS)</li>
                        <li>Student Information Systems (SIS)</li>
                        <li>Payment processing services</li>
                        <li>Communication and collaboration tools</li>
                        <li>Cloud storage and backup services</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        All third-party services are carefully vetted and required to maintain appropriate privacy and security standards.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Retention and Disposal
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI retains personal information only as long as necessary for the purposes for which it was collected 
                        or as required by law:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Student academic records: Permanently retained in accordance with DepEd requirements</li>
                        <li>Employee records: Retained for employment duration plus statutory periods</li>
                        <li>Financial records: Retained according to accounting and tax requirements</li>
                        <li>Temporary records: Deleted when no longer needed for the specified purpose</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        When personal information is no longer needed, it is securely disposed of using appropriate methods to prevent 
                        unauthorized access or recovery.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Contact Information and Complaints
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        If you have questions, concerns, or complaints about our privacy practices, please contact us:
                    </p>
                    <div className="text-black font-normal text-base md:text-lg pt-4 space-y-2">
                        <p><strong>Privacy Officer / School Administrator</strong></p>
                        <p>Saint Joseph School of Fairview Inc.</p>
                        <p>Phase 8, Atherton, Quezon City, 1121 Metro Manila</p>
                        <p>Phone: (02) 8-693-5661</p>
                        <p>Email: sjsfi96@gmail.com</p>
                    </div>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We are committed to addressing your concerns promptly and fairly. If you are not satisfied with our response, 
                        you may also file a complaint with the National Privacy Commission.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Updates to This Policy
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI may update this Privacy Policy from time to time to reflect changes in our practices, services, 
                        or applicable laws. Material changes will be communicated to affected individuals through appropriate channels. 
                        The updated policy will be posted on our website with the effective date clearly indicated.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We encourage you to review this Privacy Policy periodically to stay informed about how we protect your privacy.
                    </p>
                </section>
            </div>
        </div>
    );
}