'use client';

import React from "react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Be a Josephian', href: '/be-a-josephian' },
        { name: 'Careers at SJSFI', href: '/careers' },
        { name: 'What We Offer', href: '/what-we-offer' },
        // { name: 'Contact', href: '#' }
    ];

    const importantLinks = [
        { name: 'HRMS Portal', href: 'https://hrms-v2-azure.vercel.app/' },
        // { name: 'LMS Portal', href: 'https://lms-project-nine-delta.vercel.app/' },
        { name: 'SIS Portal', href: 'https://sjsfi-sis.vercel.app/' },
        // { name: 'Career Guidance', href: '#' },
        // { name: 'Alumni', href: '#' }
    ];

    return (
        <footer className="bg-[#800000] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-poppins font-semibold text-base mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-poppins font-light text-sm hover:text-yellow-300 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="font-poppins font-semibold text-base mb-4">Important Links</h4>
                        <ul className="space-y-2">
                            {importantLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-poppins font-light text-sm hover:text-yellow-300 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Notices */}
                    <div>
                        <h4 className="font-poppins font-semibold text-base mb-4">Important Notices</h4>
                        <div className="space-y-3 text-sm">
                            <div className="bg-white/10 p-3 rounded">
                                <p className="font-medium text-yellow-300">Enrollment 2025-2026</p>
                                <p className="font-light text-xs mt-1">Now accepting applications</p>
                            </div>
                            <div className="space-y-2">
                                <a href="/privacy-policy" className="block font-light text-sm hover:text-yellow-300 transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/terms-of-service" className="block font-light text-sm hover:text-yellow-300 transition-colors">
                                    Terms of Service
                                </a>
                                <a href="/data-privacy" className="block font-light text-sm hover:text-yellow-300 transition-colors">
                                    Data Privacy Notice
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Back to Top */}
                <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        <p className="text-white font-poppins font-light text-xs sm:text-sm text-center">
                            &copy; {new Date().getFullYear()} Saint Joseph School of Fairview Inc. All rights reserved.
                            <span className="mx-2">|</span>
                            Certified by PEAC <span className="mx-2">|</span>
                            Recognized by DepEd
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors duration-200"
                    >
                        <span className="text-sm font-poppins">Back to Top</span>
                        {/* arrow pointing to top icon*/}
                        <span className="text-lg">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
