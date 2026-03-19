'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroDetails } from '@/data/hero';
import {
    Calendar,
    Target,
    Wallet,
    MessageCircle,
    Bell,
    ArrowRight
} from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative w-full overflow-hidden py-20 md:py-24 mt-20">
            {/* Background Styles */}
            <div className="absolute inset-0 -z-50 bg-[#E2FDF8]" />
            <div
                className="absolute inset-0 -z-40 bg-cover bg-center opacity-[0.06]"
                style={{ backgroundImage: "url('/images/HeroBG.png')" }}
            />

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Heading Block */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#005A31] leading-[1.1] max-w-4xl tracking-tight">
                    Two Parents. <span className="text-[#F38500]">One App.</span> <br className="hidden md:block" /> Zero Conflict.
                </h1>
                <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-2xl font-medium leading-relaxed">
                    {heroDetails.subheading}
                </p>

                {/* Unified Download Button */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 z-20">
                    <Link
                        href="/download"
                        className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 bg-[#F38500] rounded-[2rem] hover:bg-[#005A31] hover:shadow-[0_20px_40px_rgba(0,90,49,0.2)] active:scale-95 overflow-hidden"
                    >
                        {/* Shine Effect on Hover */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

                        <div className="flex items-center gap-4 relative z-10">
                            {/* Minimalist Dual Icons */}
                            <div className="flex -space-x-2">
                                <div className="bg-black p-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                    <Image src="/icons/apple3.png" alt="apple" width={25} height={25} className="invert" />
                                </div>
                                <div className="bg-black p-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                    <Image src="/icons/google.png" alt="google" width={20} height={20} />
                                </div>
                            </div>

                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-1">Get Started</span>
                                <span className="text-xl tracking-tight">Download App</span>
                            </div>

                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>

                {/* --- The Visual Stack --- */}
                <div className="mt-24 relative w-full max-w-4xl h-[550px] sm:h-[650px] md:h-[750px] flex justify-center items-end">

                    {/* Background Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400/10 blur-[120px] rounded-full -z-10" />

                    {/* Left Mockup (Side) */}
                    <div className="absolute left-0 bottom-0 w-[200px] sm:w-[260px] md:w-[320px] h-[85%] -translate-x-12 sm:-translate-x-20 opacity-40 blur-[1px] -rotate-12 hidden sm:block">
                        <Image
                            src='/images/Mock3.png'
                            quality={100}
                            fill
                            priority
                            className="object-contain w-full h-full"
                            alt="app feature"
                        />
                    </div>

                    {/* Right Mockup (Side) */}
                    <div className="absolute right-0 bottom-0 w-[200px] sm:w-[260px] md:w-[320px] h-[85%] translate-x-12 sm:translate-x-20 opacity-40 blur-[1px] rotate-12 hidden sm:block">
                        <Image
                            src='/images/Mock2.png'
                            quality={100}
                            fill
                            priority
                            className="object-contain w-full h-full"
                            alt="app feature"
                        />
                    </div>
                    {/* Center Mockup - The Anchor */}
                    <div className="relative z-20 w-[280px] sm:w-[340px] md:w-[400px] h-full transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                            src='/images/Mock1.png'
                            quality={100}
                            priority
                            fill
                            alt="main app mockup"
                            className="object-contain w-full h-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
                        />

                        {/* 1. Shared Calendar - Top Left */}
                        <div className="absolute -top-6 -left-12 sm:-left-32 z-40 animate-float">
                            <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4 w-44 sm:w-52 flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#E2FDF8] flex items-center justify-center flex-shrink-0">
                                    <Calendar className="text-[#005A31] w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm text-[#005A31]">Calendar</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">Sync schedules.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Goal Tracker - Top Right */}
                        <div className="absolute top-10 -right-12 sm:-right-32 z-40 animate-float delay-700">
                            <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4 w-44 sm:w-52 flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#FFF4E5] flex items-center justify-center flex-shrink-0">
                                    <Target className="text-[#F38500] w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm text-[#005A31]">Goal Tracker</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">Milestones easy.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Budgeting - Middle Left */}
                        <div className="absolute top-1/2 -left-16 sm:-left-44 z-40 animate-float delay-1000">
                            <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4 w-44 sm:w-52 flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#E7DCFF] flex items-center justify-center flex-shrink-0">
                                    <Wallet className="text-[#5208F2] w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm text-[#005A31]">Budgeting</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">Track expenses.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Chat - Middle Right */}
                        <div className="absolute top-[60%] -right-16 sm:-right-44 z-40 animate-float delay-300">
                            <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4 w-44 sm:w-52 flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#D3F1FF] flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="text-[#3DCBFF] w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm text-[#005A31]">Secure Chat</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">Private chat.</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Reminders - Bottom Center */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-40 animate-float delay-500">
                            <div className="bg-white/95 backdrop-blur-md border border-white shadow-2xl rounded-2xl p-4 w-52 sm:w-60 flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#E2FDF8] flex items-center justify-center flex-shrink-0">
                                    <Bell className="text-[#005A31] w-5 h-5" strokeWidth={2.5} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-sm text-[#005A31]">Smart Reminders</h4>
                                    <p className="text-[10px] text-gray-500 leading-tight">Never miss a routine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;