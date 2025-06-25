"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative w-full">
            <div className="relative flex w-full bg-[#800000] min-h-[60px] md:min-h-[80px] custom-lg:min-h-[90px]">
                <div className="absolute top-0 left-0 z-19 ">
                    <Link href="/" passHref className="hidden custom-lg:flex ">
                        <Image
                            src="/assets/Navbar.webp"
                            alt="Saint Joseph School Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="custom-lg:h-[90px] w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="custom-lg:hidden align-center flex items-center justify-start ml-5">
                    <Image
                        src="/assets/school-logo.webp"
                        alt="Saint Joseph School Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[40px] md:h-[60px] w-auto object-contain"
                    />
                    <Link href="/" passHref className="custom-lg:hidden font-poppins text-white text-xs sm:text-lg md:text-xl font-medium tracking-wide pl-2">
                        SAINT JOSEPH SCHOOL OF FAIRVIEW INC.
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden custom-lg:flex flex-col flex-1 h-[90px]">
                    <div className="flex justify-end items-center pr-4 lg:pr-10 text-white space-x-2 md:space-x-4 basis-7/16">
                        <a
                            href="https://sjsfi-auth-git-dev-faculty-dnsxmrs-projects.vercel.app/"
                            title="Go to SJSFI-SIS Portal (preview)"
                            className="hover:text-[#FFD700] text-xs md:text-xs font-sans tracking-wider"
                        >
                            SJSFI-SIS
                        </a>
                        {/* <a
                            href="https://lms-project-nine-delta.vercel.app/"
                            title="Go to SJSFI-LMS Portal (preview)"
                            className="hover:text-[#FFD700] text-xs md:text-xs font-sans tracking-wider"
                        >
                            SJSFI-LMS
                        </a> */}
                        <a
                            href="https://hrms-v2-azure.vercel.app/"
                            title="Go to SJSFI-HRMS Portal (preview)"
                            className="hover:text-[#FFD700] text-xs md:text-xs font-sans tracking-wider"
                        >
                            SJSFI-HRMS
                        </a>
                    </div>

                    <div
                        className="text-white basis-9/16 flex items-center"
                        style={{
                            backgroundImage: "url('/assets/texture-background.webp')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex justify-end items-center pr-4 lg:pr-10 space-x-4 lg:space-x-8 w-full">
                            <Link
                                href="/about"
                                className="hover:text-[#FFD700] text-sm md:text-base font-poppins"
                            >
                                About SJSFI
                            </Link>
                            <Link
                                href="/what-we-offer"
                                className="hover:text-[#FFD700] text-sm md:text-base font-poppins"
                            >
                                What We Offer
                            </Link>
                            <Link
                                href="/be-a-josephian"
                                className="hover:text-[#FFD700] text-sm md:text-base font-poppins"
                            >
                                Be a Josephian
                            </Link>
                            <Link
                                href="/careers"
                                className="hover:text-[#FFD700] text-sm md:text-base font-poppins"
                            >
                                Careers at SJSFI
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Hamburger Button */}
                <div className="custom-lg:hidden flex flex-1 items-center justify-end pr-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-[#FFD700] transition-colors duration-200 z-30 relative"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="custom-lg:hidden fixed inset-0 backdrop-blur-[2px] z-20"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`custom-lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#7F3F41] transform transition-transform duration-300 ease-in-out z-25 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            // style={{
            //     backgroundImage: "url('/assets/texture-background.webp')",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div className="pt-15 px-6">
                    {/* Portal Links */}
                    <div className="mb-8">
                        <h3 className="text-white text-lg font-semibold mb-4 font-poppins">Portals</h3>
                        <div className="space-y-3">
                            <a
                                href="https://sjsfi-sis.vercel.app/"
                                title="Go to SJSFI-SIS Portal"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                SJSFI-SIS
                            </a>
                            {/* removed lms */}
                            {/* <a
                                href="https://lms-project-nine-delta.vercel.app/"
                                title="Go to SJSFI-LMS Portal (preview)"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                SJSFI-LMS
                            </a> */}
                            <a
                                href="https://hrms-v2-azure.vercel.app/"
                                title="Go to SJSFI-HRMS Portal (preview)"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                SJSFI-HRMS
                            </a>
                        </div>
                    </div>

                    <hr className="mb-6"></hr>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4 font-poppins">Navigation</h3>
                        <div className="space-y-3">
                            <Link
                                href="/about"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                About SJSFI
                            </Link>
                            <Link
                                href="/what-we-offer"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                What We Offer
                            </Link>
                            <Link
                                href="/be-a-josephian"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Be a Josephian
                            </Link>
                            <Link
                                href="/careers"
                                className="block text-white hover:text-[#FFD700] text-base font-poppins transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Careers at SJSFI
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;