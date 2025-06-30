"use client";

import { useEffect } from "react";
import AIGeneratedWarning from "../../../components/AIGeneratedWarning";

export default function Program() {
    useEffect(() => {
        fetch('/api/page-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pageName: 'what-we-offer' }),
        });
    }, []);

    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        What We Offer
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI offers a comprehensive range of academic programs designed to
                        meet the diverse needs and interests of our students. From
                        foundational elementary education to specialized senior high school
                        tracks, we provide quality education that prepares students for
                        their future endeavors.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-[#800000] font-semibold text-lg mb-2">
                                Preparatory Education
                            </h3>
                            <p className="text-sm text-gray-700">
                                Early childhood education focusing on holistic development and
                                readiness for formal schooling.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-[#800000] font-semibold text-lg mb-2">
                                Elementary Education
                            </h3>
                            <p className="text-sm text-gray-700">
                                Building strong foundations in literacy, numeracy, and character
                                development for young learners.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-[#800000] font-semibold text-lg mb-2">
                                Junior High School
                            </h3>
                            <p className="text-sm text-gray-700">
                                Comprehensive secondary education with focus on academic
                                excellence and personal growth.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-[#800000] font-semibold text-lg mb-2">
                                Senior High School - STEM
                            </h3>
                            <p className="text-sm text-gray-700">
                                Science, Technology, Engineering, and Mathematics track for
                                future innovators and researchers.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-[#800000] font-semibold text-lg mb-2">
                                Senior High School - ABM
                            </h3>
                            <p className="text-sm text-gray-700">
                                Accountancy, Business, and Management track for future business
                                leaders and entrepreneurs.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl text-left">
                        Student Support Services
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We believe that every student deserves comprehensive support to
                        succeed academically and personally. Our student support services
                        are designed to address the diverse needs of our learning community
                        and ensure that every Josephian has the resources they need to
                        thrive.
                    </p>
                    <div className="space-y-4 mt-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#800000] w-2 h-2 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Guidance and Counseling
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Professional counseling services to support students&apos;
                                    emotional, social, and academic development.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#800000] w-2 h-2 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Learning Support
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Additional academic support for students who need extra
                                    assistance in their studies.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#800000] w-2 h-2 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Health and Wellness
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Health services and wellness programs to ensure students&apos;
                                    physical and mental well-being.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#800000] w-2 h-2 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Scholarship Programs
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Financial assistance programs to make quality education
                                    accessible to deserving students.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Extracurricular Activities
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Beyond academics, SJSFI offers a vibrant array of extracurricular
                        activities that allow students to explore their interests, develop
                        new skills, and build lasting friendships. These activities are
                        integral to our holistic approach to education and character
                        development.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Sports Teams
                            </h4>
                            <p className="text-sm text-gray-600">
                                Basketball, volleyball, soccer, and other competitive sports
                                programs.
                            </p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Academic Clubs
                            </h4>
                            <p className="text-sm text-gray-600">
                                Science club, math club, debate team, and academic competitions.
                            </p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Arts & Culture
                            </h4>
                            <p className="text-sm text-gray-600">
                                Music ensembles, dance groups, theater, and visual arts
                                programs.
                            </p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Student Government
                            </h4>
                            <p className="text-sm text-gray-600">
                                Leadership opportunities through student council and class
                                organizations.
                            </p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Community Service
                            </h4>
                            <p className="text-sm text-gray-600">
                                Volunteer programs and community outreach initiatives.
                            </p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <h4 className="text-[#800000] font-semibold mb-2">
                                Religious Activities
                            </h4>
                            <p className="text-sm text-gray-600">
                                Prayer groups, retreats, and spiritual formation programs.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Facilities & Resources
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        SJSFI is equipped with modern facilities and resources that create
                        an optimal learning environment for our students. Our campus
                        features state-of-the-art classrooms, specialized laboratories, and
                        recreational facilities that support both academic excellence and
                        personal development.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Smart Classrooms
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Interactive whiteboards, multimedia systems, and modern learning
                                technologies.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Science Laboratories
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Fully equipped physics, chemistry, and biology labs for hands-on
                                learning.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Computer Laboratory
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Modern computers with latest software for digital literacy and
                                programming.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Library & Media Center
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Extensive collection of books, digital resources, and quiet
                                study spaces.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Sports Facilities
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Basketball courts, volleyball courts, and other athletic
                                facilities.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                            <h4 className="text-[#800000] font-semibold text-lg mb-3">
                                Chapel
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Sacred space for prayer, reflection, and spiritual formation
                                activities.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
