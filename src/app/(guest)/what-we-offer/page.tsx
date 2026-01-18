import { trackPageVisit } from "@/app/_actions/trackPageVisit";

export default async function WhatWeOfferPage() {
    // Track page visit when the page loads
    await trackPageVisit('what-we-offer');

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <div className="space-y-16 text-justify">
                {/* The Josephian Education */}
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        The Josephian Education
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Saint Joseph School of Fairview Inc stands as a distinguished institution, holding esteemed accreditation from the Department of Education. Our dedication to delivering exceptional education is underpinned by our Government Recognition for both Elementary and Secondary Courses. This accolade signifies our unwavering commitment to meeting and exceeding the rigorous standards set forth by the government, ensuring a paramount level of educational excellence for our students.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        At Saint Joseph, we are resolutely dedicated to upholding these esteemed standards, channeling our efforts into providing a superior educational experience. Our mission is to nurture and cultivate the minds of our students through a comprehensive and dynamic approach to learning.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our educational philosophy harmoniously marries the strengths of traditional and progressive teaching methodologies. Recognizing the significance of a well-structured and disciplined foundation, we embrace the time-tested principles of traditional teaching. This approach equips our students with a robust understanding of fundamental skills and knowledge.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Concurrently, we ardently endorse the principles of progressive education. Fostering creativity, critical thinking, and an intrinsic passion for learning are at the forefront of our pedagogical pursuits. These principles serve as guiding lights in preparing our students to navigate the complexities of an ever-evolving world.
                    </p>
                </section>

                {/* Programs Offering */}
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Programs Offering
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Catering to the educational journey from Kindergarten to 12th Grade (K to 12), our institution ensures a seamless transition through the critical stages of a student&apos;s development. This continuum in education not only imparts a consistent and coherent learning experience but also fortifies the intellectual growth of our students over time.
                    </p>
                    <div className="mt-8 grid md:grid-cols-2 gap-6 text-gray-800">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Pre-school</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Kinder 1</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Kinder 2</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Primary</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 1</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 2</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 3</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Intermediate</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 4</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 5</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 6</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Junior High School</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 7</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 8</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 9</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 10</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Senior High School</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 11</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Grade 12</span>
                                    </div>
                                    <div className="ml-6 mt-3 space-y-1 text-sm text-gray-600">
                                        <div className="flex items-start">
                                            <span className="mr-2">-</span>
                                            <span>ABM (Accountancy, Business & Management)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="mr-2">-</span>
                                            <span>GAS (General Academic Strand)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="mr-2">-</span>
                                            <span>HUMMS (Humanities & Social Sciences)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#800000] text-lg mb-2">Inclusive Education</h3>
                                <div className="ml-4 space-y-2">
                                    <div className="flex items-start">
                                        <span className="text-[#800000] font-bold mr-3">•</span>
                                        <span>Individualized Special Programs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Framework */}
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Academic Framework
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        The curriculum at Saint Joseph School of Fairview fosters the comprehensive growth of learners by combining academic excellence with the development of Josephian values. It integrates both scholastic and non-scholastic components, striking a balance between knowledge acquisition and character development.
                    </p>

                    <h2 className="text-[#800000] font-semibold text-2xl md:text-3xl mt-8 mb-4">
                        Core Components
                    </h2>

                    <div className="mt-8 space-y-6 text-gray-800">
                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Learner-Focused Instruction
                            </h3>
                            <div className="ml-4 space-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span><strong>Student-Centered Learning:</strong> Prioritizes students in the educational process, ensuring active engagement and meaningful outcomes.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span><strong>Collaborative Learning:</strong> Fosters teamwork and interpersonal skill development through cooperative activities.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Integrated Skill Development
                            </h3>
                            <div className="ml-4 space-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span><strong>Cross-Disciplinary Literacy:</strong> Embeds reading and writing into all subjects, enhancing language proficiency across disciplines.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span><strong>Holistic Subject Integration:</strong> Connects academic subjects to life skills and real-world concepts for deeper and more relevant learning.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Community Engagement
                            </h3>
                            <div className="ml-4 space-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Encourages interactions with the local community, promoting broader perspectives and practical, real-world understanding.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Fosters social responsibility by cultivating learners who are prepared to contribute positively to society.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Inclusive Learning Environment
                            </h3>
                            <div className="ml-4 space-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span><strong>Diverse Learning Programs:</strong> Provides tailored programs to meet the specific needs of various learners, ensuring equal opportunities for success.</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Creates an environment where every student can thrive and achieve their potential.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Programs by Level */}
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Academic Programs
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our comprehensive curriculum is designed to provide students with a well-rounded education at every level, from preschool through junior high school.
                    </p>

                    <div className="mt-8 space-y-6 text-gray-800">
                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Preschool
                            </h3>
                            <div className="ml-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Numeracy</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Reading and Literacy</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Natural Science</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Music and Movement</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Arts and Crafts</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Values Formation</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Primary (Grades 1-3)
                            </h3>
                            <div className="ml-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Mathematics</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Reading and Literacy</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Language and Grammar</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Makabansa</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Science</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Good Moral and Right Conduct</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Intermediate (Grades 4-6)
                            </h3>
                            <div className="ml-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Mathematics</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>English</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Filipino</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Araling Panlipunan</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Science</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Good Moral and Right Conduct</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>HELE</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Computer</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Music and Arts</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Physical Education and Health</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#800000] text-lg mb-3">
                                Junior High School (Grades 7-10)
                            </h3>
                            <div className="ml-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Mathematics</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>English</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Filipino</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Araling Panlipunan</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Science</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Values Education</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>TLE</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Computer</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Music and Arts</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#800000] font-bold mr-3">•</span>
                                    <span>Physical Education and Health</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
