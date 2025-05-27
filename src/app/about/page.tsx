import AIGeneratedWarning from "../components/AIGeneratedWarning";

export const metadata = {
    title: "About Us | SJSFI",
    description:
        "Learn more about Saint Joseph School of Fairview Inc. and its mission, vision, and goals.",
};

export default function About() {
    return (
        <div className="bg-white px-6 py-8 md:px-16 lg:px-32">
            <AIGeneratedWarning />
            <div className="space-y-16 text-justify">
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        About SJSFI
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Saint Joseph School of Fairview Inc. (SJSFI) is a premier
                        educational institution committed to providing quality education
                        rooted in Christian values. Founded with the vision of nurturing
                        young minds and developing well-rounded individuals, SJSFI has been
                        a beacon of academic excellence in the community for years.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our school offers comprehensive educational programs from elementary
                        through senior high school, emphasizing both academic achievement
                        and character formation. We believe in creating an environment where
                        students can discover their potential, develop their talents, and
                        grow into responsible citizens who will contribute positively to
                        society.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Our Mission
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        To provide holistic education that develops competent,
                        compassionate, and committed individuals grounded in Christian
                        values and principles. We strive to create a learning environment
                        that fosters intellectual growth, moral development, and spiritual
                        formation, preparing our students to become active contributors to
                        their communities and the world.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        Our mission extends beyond academic excellence to include the
                        cultivation of critical thinking, creativity, and leadership skills.
                        We are dedicated to empowering our students with the knowledge,
                        values, and skills necessary to navigate the challenges of the 21st
                        century while maintaining their moral compass.
                    </p>
                </section>
                <section>
                    <h1 className="text-[#800000] font-semibold text-3xl md:text-4xl">
                        Our Vision
                    </h1>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        To be a leading Catholic educational institution recognized for
                        academic excellence, moral integrity, and innovative teaching
                        methodologies. We envision a school community where every student is
                        inspired to reach their full potential and become transformative
                        leaders in their chosen fields.
                    </p>
                    <p className="text-black font-normal text-base md:text-lg pt-4">
                        We aspire to create graduates who are not only academically prepared
                        but also spiritually mature, socially responsible, and
                        environmentally conscious. Our vision encompasses building a legacy
                        of excellence that continues to inspire future generations of
                        Josephians.
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
