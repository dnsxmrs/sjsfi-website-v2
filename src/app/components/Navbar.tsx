import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="relative w-full ">
            {/* Main navigation bar wrapper */}
            <div className="relative flex w-full bg-[#800000] min-h-[120px]">

                {/* // ✅ Floating Logo */}
                <div className="absolute top-0 left-0 z-10">
                    <Link href="/" passHref>
                    <Image
                        src="/assets/Navbar.webp"
                        alt="Saint Joseph School Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[120px] w-auto object-contain"
                    />
                    </Link>
                </div>

                {/* ✅ Right-side section that fills all available space */}
                <div className="flex flex-col flex-1 h-[120px]">

                    {/* 🔹 Top system links - 1/3 of height */}
                    <div className="flex justify-end items-center pr-10 text-white space-x-4 basis-7/16">
                        <a href="https://sjsfi-auth-git-dev-faculty-dnsxmrs-projects.vercel.app/" title="Go to SJSFI-SIS Portal (preview)" className="hover:text-[#FFD700] text-base font-poppins font-light">SJSFI-SIS</a>
                        <a href="https://lms-project-nine-delta.vercel.app/" title="Go to SJSFI-LMS Portal (preview)" className="hover:text-[#FFD700] text-base font-poppins font-light">SJSFI-LMS</a>
                        <a href="https://hrms-v2-azure.vercel.app/" title="Go to SJSFI-HRMS Portal (preview)" className="hover:text-[#FFD700] text-base font-poppins font-light">SJSFI-HRMS</a>
                    </div>

                    {/* 🔹 Bottom navigation - 2/3 of height */}
                    <div
                        className="text-white basis-9/16 flex items-center"
                        style={{
                            backgroundImage: "url('/assets/texture-background.webp')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex justify-end space-x-8 pr-10 w-full">
                            <Link href="/about" className="hover:text-[#FFD700] text-lg font-poppins font-light">
                                About SJSFI
                            </Link>
                            <Link href="/what-we-offer" className="hover:text-[#FFD700] text-lg font-poppins font-light">
                                What We Offer
                            </Link>
                            <Link href="/be-a-josephian" className="hover:text-[#FFD700] text-lg font-poppins font-light">
                                Be a Josephian
                            </Link>
                            <Link href="/careers" className="hover:text-[#FFD700] text-lg font-poppins font-light">
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
