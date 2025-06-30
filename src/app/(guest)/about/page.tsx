"use client";

import { useEffect } from "react";
import AIGeneratedWarning from "../../../components/AIGeneratedWarning";

export default function About() {
    useEffect(() => {
        fetch('/api/page-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pageName: 'about' }),
        });
    }, []);

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
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
                        Our Goal
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our primary goal is to cultivate lifelong learners who are equipped
                        with the knowledge, skills, and values necessary to excel in their
                        academic pursuits and future careers. We aim to develop students who
                        demonstrate excellence in scholarship, leadership, service, and
                        character.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We strive to maintain high academic standards while fostering a
                        supportive and inclusive learning environment. Our goal includes
                        preparing students for higher education and professional success,
                        while instilling in them a deep appreciation for their cultural
                        heritage and a commitment to serving others with compassion and
                        integrity.
                    </p>
                </section>
            </div>
        </div>
    );
}
