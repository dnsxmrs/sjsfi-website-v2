"use client";

import { useEffect } from "react";

// Extend Window interface for Facebook SDK
declare global {
    interface Window {
        FB?: {
            XFBML: {
                parse: () => void;
            };
        };
    }
}

export default function SocialMedia() {
    // Load Facebook SDK
    useEffect(() => {
        // Load Facebook SDK script
        if (window.FB) {
            window.FB.XFBML.parse();
        } else {
            const script = document.createElement("script");
            script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);
        }

        // Load Instagram embed script
        const instagramScript = document.createElement("script");
        instagramScript.src = "https://www.instagram.com/embed.js";
        instagramScript.async = true;
        document.body.appendChild(instagramScript);
    }, []);

    return (
        <section className="bg-white px-6 py-12 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                {/* Social Media Feeds Layout */}
                <div className="flex gap-10">
                    {/* Facebook Feed - Left Side (1/3) */}
                    <div className="w-1/3">
                        <div id="fb-root"></div>
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/sjsfi96"
                            data-tabs="timeline"
                            data-width="500"
                            data-height="700"
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true"
                        >
                            <blockquote
                                cite="https://www.facebook.com/sjsfi96"
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/sjsfi96">
                                    Loading Facebook feed...
                                </a>
                            </blockquote>
                        </div>
                    </div>

                    {/* YouTube - Right Side (2/3) */}
                    <div className="w-2/3">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/fJZRIn3fd5o"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
