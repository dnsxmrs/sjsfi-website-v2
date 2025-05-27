import React from "react";

const Footer = () => {
    return (
        <footer className="min-h-[20px] bg-[#800000] flex justify-center items-center">
            <div className="p-2 sm:p-3">
                <p className="text-white font-poppins font-light text-xs sm:text-sm text-center">
                    &copy; {new Date().getFullYear()} Saint Joseph School of Fairview Incorporated. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
