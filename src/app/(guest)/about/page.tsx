import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export default async function About() {

    await trackPageVisit('about');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        About SJSFI
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Founded in 1996, Saint Joseph School of Fairview, Inc. (SJSFI)
                        started as a preschool learning center catering to the educational
                        needs of young children in Quezon City. With 39 preschoolers and a
                        commitment to providing excellent educational services, the school
                        quickly gained recognition and appreciation from the local
                        community.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Over the years, SJSFI&apos;s dedicated and highly-trained teachers
                        from reputable universities consistently implemented child
                        development studies and child-centered philosophies in all
                        educational programs.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        A significant milestone came in 1997 when SJSFI expanded its
                        offerings to include Elementary Education, further solidifying its
                        position as an institution focused on holistic learning. Driven by
                        its vision and mission, and with unwavering support from the Board
                        of Trustees, school administration, faculty, and staff, the
                        institution embarked on a transformative journey.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        In June 2002, SJSFI moved to a larger and improved location at
                        Atherton St. Phase 8, North Fairview, Quezon City. This move proved
                        to be a turning point for the school, as it evolved into a renowned
                        institution recognized by the Department of Education.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Today, SJSFI proudly provides a comprehensive range of educational
                        programs, including Preschool, Elementary, Junior and Senior High
                        School, and Inclusive Education, making a lasting impact on the
                        lives of countless learners and the community it serves.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Our Mission
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        TO DEVELOP EVERY LEARNER TO BECOME PRODUCTIVE CITIZENS OF THE
                        SOCIETY, PRINCIPLED LEADERS AND LIFELONG LEARNERS BY PROVIDING A
                        SUITABLE INSTRUCTIONAL ENVIRONMENT AND STUDENT-CENTERED PROGRAMS
                        THAT ARE SHAPED BY OUR CORE VALUES AND EMPOWERED FOR THE FUTURE.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Our Vision
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SAINT JOSEPH SCHOOL OF FAIRVIEW INC. STRIVES TO PRODUCE PRINCIPLED
                        AND GLOBALLY COMPETITIVE INDIVIDUALS, WHO ARE SHAPED IN FAITH AND
                        VALUES, DIRECTED TO PRESERVE INTEGRITY, HUMAN DIGNITY AND THE
                        ENVIRONMENT.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Philosophy of Josephian Education
                    </h1>
                    <h2 className="text-black font-medium text-2xl md:text-3xl pt-2">
                        School Philosophy: Nurturing Excellence and Fostering Lifelong Learners
                    </h2>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        At SJSFI, we believe that education is a transformative journey that empowers students to reach their full potential and make a positive impact on the world. Our school philosophy centers on fostering a dynamic, inclusive, and supportive learning environment that nurtures excellence, cultivates critical thinking, and encourages a passion for lifelong learning.
                    </p>
                    <ol className="list-decimal list-inside text-black font-normal text-base md:text-lg pt-4 space-y-4">
                        <li><strong>Holistic Education:</strong> We embrace a holistic approach to education, recognizing that each student is a unique individual with distinct talents, interests, and potential. We aim to develop not only academic excellence but also emotional, social, physical, and creative aspects of our students&apos; lives. Our curriculum and co-curricular activities are designed to provide well-rounded growth and foster a sense of personal and social responsibility.</li>
                        <li><strong>Student-Centered Learning:</strong> At the heart of our philosophy is the belief that students learn best when they are actively engaged in the learning process. We strive to create a student-centered learning environment that promotes curiosity, critical thinking, and problem-solving skills. Our educators serve as facilitators, guiding and inspiring students to take ownership of their education.</li>
                        <li><strong>Inclusivity and Diversity:</strong> We celebrate and embrace the richness of diversity within our school community. We foster an inclusive environment where all students, regardless of their background, culture, or abilities, feel valued and respected. By promoting understanding and empathy, we prepare our students to thrive in an interconnected and multicultural world.</li>
                        <li><strong>Excellence in Teaching:</strong> Our dedicated and passionate educators are committed to excellence in teaching. They continuously seek innovative teaching methods and professional development opportunities to stay at the forefront of educational practices. They nurture strong relationships with their students, providing mentorship and guidance to support their academic and personal growth.</li>
                        <li><strong>Community Engagement:</strong> We believe that education extends beyond the classroom walls. We actively engage with parents, caregivers, and the broader community to create a collaborative and supportive network. We recognize the importance of partnerships between home and school to ensure the success and well-being of our students.</li>
                        <li><strong>Lifelong Learning:</strong> We instill in our students a love for learning that goes beyond their time at SJSFI. We encourage a growth mindset and the desire to embrace new challenges throughout their lives. By nurturing lifelong learners, we prepare our students to adapt, innovate, and contribute positively to society in an ever-changing world.</li>
                        <li><strong>Character Development:</strong> Beyond academic achievements, we place a strong emphasis on character development. Our school cultivates values such as integrity, empathy, resilience, and a sense of responsibility towards others and the environment. We strive to shape well-rounded individuals who can positively impact their communities.</li>
                    </ol>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        At SJSFI, our philosophy is grounded in the belief that education has the power to shape young minds and shape a better future. We&apos;re dedicated to providing a nurturing, stimulating, and safe environment where students can flourish academically, emotionally, and socially. By fostering excellence and a love for learning, we aim to prepare our students to embrace life&apos;s challenges and opportunities with confidence and compassion.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Josephian Core Values
                    </h1>
                    <div className="space-y-6 pt-4">
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                EXCELLENCE
                            </h3>
                            <p className="text-black font-normal text-base md:text-lg italic pt-2">
                                &quot;Whatever you do, work at it with all your heart.&quot; –Colossians 3:23
                            </p>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                We promote excellence in both academic and non-academic endeavors to ensure optimal outcomes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                INTEGRITY
                            </h3>
                            <p className="text-black font-normal text-base md:text-lg italic pt-2">
                                &quot;Dear children, let us not love with words or speech but with actions and in truth.&quot; –1 John 3:18
                            </p>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                We believe that integrity is the highest level of honesty. Josephians take responsibility for their actions and send forth to do the right thing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                DIGNITY
                            </h3>
                            <p className="text-black font-normal text-base md:text-lg italic pt-2">
                                &quot;So God created mankind in his own image, in the image of God he created them;&quot; –Genesis 1:27
                            </p>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                We aspire to uphold dignity in all forms that transcends all of our individual differences. We encourage diversity with mutual recognition for respect, fair treatment and to feel safe that grants freedom and hope.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                COMPASSION
                            </h3>
                            <p className="text-black font-normal text-base md:text-lg italic pt-2">
                                &quot;Since God chose you to be the holy people he loves, you must clothe yourselves with tenderhearted mercy, kindness, humility, gentleness, and patience.&quot; –Colossians 3:12
                            </p>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                Josephians are honed to have the ability to expand compassion beyond oneself and serve the community. We believe that social awareness helps recognize adversities and social action prepares us to take measures to alleviate adverse situations.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                PERSON FOR OTHERS
                            </h3>
                            <p className="text-black font-normal text-base md:text-lg italic pt-2">
                                &quot;Act with justice, love with kindness and walk humbly with your God.&quot; –Micah 6:8
                            </p>
                            <p className="text-black font-normal text-base md:text-lg pt-2">
                                We give utmost importance to the value of service as one of the cornerstones of our instructional approach. Josephians are nurtured to go beyond the acts of giving by consistently embracing inclusion and diversity of learners. We serve out of love and the desire for the greater good.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        School Recognitions and Affiliations
                    </h1>
                    <div className="space-y-6 pt-4">
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                Established in 1996
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                Department of Education
                            </h3>
                            <ul className="list-disc list-inside text-black font-normal text-base md:text-lg pt-2 space-y-2">
                                <li>Government Recognition No. P-059, S. - Complete Kindergarten Course</li>
                                <li>Government Recognition No. E-025, S.2004 - Complete Elementary Course</li>
                                <li>Government Recognition No. S-032, S.2010 - Complete Secondary Course</li>
                                <li>DepEd School ID No. 482617</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                Private Education Assistance Committee (PEAC)
                            </h3>
                            <ul className="list-disc list-inside text-black font-normal text-base md:text-lg pt-2 space-y-2">
                                <li>Certified Status - ESC ID No. 1404094</li>
                                <li>Overall and Final ReCertification Rating with a Rating of 3 (Evidence of compliance with standard is presented)</li>
                                <li>Awarded August 2023 at Makati City, NCR</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-black font-semibold text-xl md:text-2xl">
                                Membership Organizations
                            </h3>
                            <ul className="list-disc list-inside text-black font-normal text-base md:text-lg pt-2 space-y-2">
                                <li>Inter School Academic and Athletic League (ISAAL)</li>
                                <li>Inter School Basketball and Volleyball League (ISBVL)</li>
                                <li>Association of Private Schools Administrators Inc. (APSA)</li>
                                <li>National Alliance of Private Schools Philippines Inc. (NAPSPhil)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
