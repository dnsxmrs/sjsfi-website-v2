import { trackPageVisit } from "@/app/_actions/trackPageVisit";
import AIGeneratedWarning from "../../../components/AIGeneratedWarning";

export const metadata = {
    title: "Data Privacy Notice | SJSFI",
    description: "Data Privacy Notice of Saint Joseph School of Fairview Inc. in compliance with Republic Act No. 10173 (Data Privacy Act of 2012).",
};

export default async function DataPrivacyPage() {

    await trackPageVisit('data-privacy');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Data Privacy Notice
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        This Data Privacy Notice is issued by Saint Joseph School of Fairview Inc. (SJSFI) in compliance with
                        Republic Act No. 10173, also known as the Data Privacy Act of 2012, and its Implementing Rules and Regulations.
                        This notice explains how we collect, use, store, and protect your personal information.
                    </p>                    <p className="text-black font-semibold text-base md:text-lg pt-4">
                        Effective Date: January 1, 2025
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Controller Information
                    </h2>
                    <div className="text-black font-normal text-base md:text-lg pt-4 space-y-2">
                        <p><strong>Organization:</strong> Saint Joseph School of Fairview Inc.</p>
                        <p><strong>Address:</strong> Phase 8, Atherton, Quezon City, 1121 Metro Manila</p>
                        <p><strong>Contact Number:</strong> (02) 8-693-5661</p>
                        <p><strong>Email:</strong> sjsfi96@gmail.com</p>
                        <p><strong>Data Protection Officer:</strong> School Administrator</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Personal Information We Collect
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI collects and processes the following types of personal information:
                    </p>

                    <div className="pt-4 space-y-4">
                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Students:</h3>
                            <ul className="text-black font-normal text-base md:text-lg ml-6 mt-2 space-y-1 list-disc">
                                <li>Full name, date of birth, and place of birth</li>
                                <li>Contact information (address, phone numbers, email)</li>
                                <li>Educational records and academic performance</li>
                                <li>Disciplinary records and behavioral assessments</li>
                                <li>Medical information and emergency contact details</li>
                                <li>Financial information related to tuition and fees</li>
                                <li>Photographs and videos for school activities</li>
                                <li>Biometric data (if applicable for security purposes)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Parents/Guardians:</h3>
                            <ul className="text-black font-normal text-base md:text-lg ml-6 mt-2 space-y-1 list-disc">
                                <li>Full name and relationship to student</li>
                                <li>Contact information and employment details</li>
                                <li>Financial information for billing purposes</li>
                                <li>Communication records with the school</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Employees and Applicants:</h3>
                            <ul className="text-black font-normal text-base md:text-lg ml-6 mt-2 space-y-1 list-disc">
                                <li>Personal and contact information</li>
                                <li>Educational background and work experience</li>
                                <li>Employment records and performance evaluations</li>
                                <li>Government-issued identification numbers</li>
                                <li>Payroll and benefits information</li>
                                <li>Background check results and references</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#800000] font-semibold text-lg">Website Visitors:</h3>
                            <ul className="text-black font-normal text-base md:text-lg ml-6 mt-2 space-y-1 list-disc">
                                <li>IP addresses and browser information</li>
                                <li>Website usage data and preferences</li>
                                <li>Information submitted through contact forms</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Purpose of Data Collection
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We collect and process personal information for the following legitimate purposes:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Student enrollment, admission, and academic record management</li>
                        <li>Provision of educational services and extracurricular activities</li>
                        <li>Communication with students, parents, and guardians</li>
                        <li>Health and safety monitoring and emergency response</li>
                        <li>Financial transactions and billing</li>
                        <li>Compliance with DepEd, CHED, and other regulatory requirements</li>
                        <li>Employment and human resource management</li>
                        <li>School security and campus safety</li>
                        <li>Research and statistical analysis for educational improvement</li>
                        <li>Alumni relations and institutional advancement</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Legal Basis for Processing
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI processes personal information based on the following legal grounds:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li><strong>Consent:</strong> Express consent from data subjects or parents/guardians for minors</li>
                        <li><strong>Contract:</strong> Performance of enrollment agreements and employment contracts</li>
                        <li><strong>Legal Obligation:</strong> Compliance with DepEd, CHED, BIR, and other government requirements</li>
                        <li><strong>Vital Interests:</strong> Protection of health and safety of students and staff</li>
                        <li><strong>Legitimate Interest:</strong> Educational purposes and institutional operations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Sharing and Disclosure
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI may share personal information with the following parties:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Department of Education (DepEd) and Commission on Higher Education (CHED)</li>
                        <li>Philippine Association of Colleges and Universities Commission on Accreditation (PACUCOA)</li>
                        <li>Philippine Accrediting Association of Schools, Colleges and Universities (PAASCU)</li>
                        <li>Healthcare providers for medical emergencies</li>
                        <li>Law enforcement agencies when required by law</li>
                        <li>Third-party service providers (payment processors, IT vendors) under strict confidentiality agreements</li>
                        <li>Other educational institutions for transfer students</li>
                        <li>Potential employers with student consent for recommendation purposes</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Security Measures
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI implements appropriate technical, organizational, and physical security measures to protect personal information:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li>Secure storage systems with access controls and encryption</li>
                        <li>Regular backup and disaster recovery procedures</li>
                        <li>Employee training on data protection and confidentiality</li>
                        <li>Restricted access to personal information on a need-to-know basis</li>
                        <li>Secure disposal of documents and electronic media</li>
                        <li>Regular security assessments and system updates</li>
                        <li>Incident response procedures for data breaches</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Data Retention
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI retains personal information only for as long as necessary to fulfill the purposes for which it was collected:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li><strong>Student Records:</strong> Permanently retained as required by DepEd regulations</li>
                        <li><strong>Employee Records:</strong> Retained for the duration of employment plus applicable statutory periods</li>
                        <li><strong>Financial Records:</strong> Retained in accordance with BIR and accounting requirements</li>
                        <li><strong>Website Data:</strong> Automatically deleted after reasonable periods unless consent is given</li>
                        <li><strong>CCTV Footage:</strong> Retained for 30 days unless required for investigation purposes</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Your Rights as a Data Subject
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Under the Data Privacy Act of 2012, you have the following rights:
                    </p>
                    <ul className="text-black font-normal text-base md:text-lg pt-4 ml-6 space-y-2 list-disc">
                        <li><strong>Right to be Informed:</strong> Know how your personal information is processed</li>
                        <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                        <li><strong>Right to Object:</strong> Object to certain types of processing</li>
                        <li><strong>Right to Erasure/Blocking:</strong> Request deletion or blocking of personal information</li>
                        <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal information</li>
                        <li><strong>Right to Portability:</strong> Request transfer of personal information in a structured format</li>
                        <li><strong>Right to Damages:</strong> Seek compensation for damages caused by processing violations</li>
                    </ul>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        To exercise these rights, please contact our Data Protection Officer using the contact information provided above.
                        Please note that some rights may be limited by legal or regulatory requirements.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Updates to This Notice
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI reserves the right to update this Data Privacy Notice as necessary to comply with legal requirements
                        or changes in our data processing practices. Any material changes will be communicated to affected data subjects
                        through appropriate channels. The updated notice will be posted on our website with the effective date clearly indicated.
                    </p>
                </section>

                <section>
                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl">
                        Complaints and Inquiries
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        If you have any questions, concerns, or complaints regarding this Data Privacy Notice or our data processing practices,
                        please contact us immediately. You may also file a complaint with the National Privacy Commission (NPC) if you believe
                        your data privacy rights have been violated.
                    </p>
                    <div className="text-black font-normal text-base md:text-lg pt-4 space-y-2">
                        <p><strong>National Privacy Commission</strong></p>
                        <p>Website: www.privacy.gov.ph</p>
                        <p>Email: info@privacy.gov.ph</p>
                        <p>Hotline: (02) 8234-2228</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
