'use client';

import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden mt-20 mb-10 py-10 md:py-16 md:mt-25"
        >
            {/* Base background color */}
            <div className="absolute inset-0 -z-50 bg-[#E2FDF8]" />

            {/* Image overlay with opacity */}
            <div
                className="absolute inset-0 -z-40 bg-cover bg-center opacity-5"
                style={{ backgroundImage: "url('/images/HeroBG.png')" }}
            />

            {/* Content container (constrained width) */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-2 gap-12 md:gap-20">
                {/* Left side text */}
                <div className="flex-1 text-left md:text-left max-w-5xl z-10 left-0">
                    <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-foreground  leading-[1.4] md:leading-[1.3] text-[#005A31]">
                        Two Parents. <span className="text-[#F38500]">One App.</span> Zero Conflict.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                        {heroDetails.subheading}
                    </p>

                    {/* CTA Button */}
                    <button
                        className="mt-10 px-6 py-3 bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors duration-200 rounded-lg text-base sm:text-lg"
                    >
                        Join the Waitlist
                    </button>
                </div>

                {/* Right side image */}
                <div className="hidden md:flex flex-1 justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[500px] md:h-[600px] lg:h-[700px]">
                        <Image
                            src={heroDetails.centerImageSrc}
                            fill
                            quality={100}
                            priority
                            unoptimized
                            alt="app mockup"
                            className="relative z-10 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
