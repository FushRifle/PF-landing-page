"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { heroDetails } from "@/data/hero";

const reasons = [
    "Personalized guidance for your child's age",
    "Expert-backed tips from specialists",
    "Interface designed for busy parents",
    "Gentle, consistent habit reminders",
    "Private platform. No ads. No data sharing",
];

export default function WhyChoose() {
    return (
        <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* --- Left Content: Clean & Modern --- */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#005A31] leading-tight tracking-tighter">
                            Built for <span className="text-[#F38500]">Real</span> <br />
                            Parenting.
                        </h2>
                        <p className="mt-8 text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
                            Every family is unique. We provide the structure so you can focus on the connection.
                        </p>
                    </motion.div>

                    <div className="mt-12 space-y-8">
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-5 group"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#F38500] flex items-center justify-center group-hover:bg-[#F38500] transition-all duration-300">
                                    <Icon icon="ph:check-bold" className="text-[#F38500] group-hover:text-white w-4 h-4" />
                                </div>
                                <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">
                                    {reason}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Right Visual: The "Hero" Mockup --- */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* The "Glow" - softer and more organic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E2FDF8]/60 blur-[120px] rounded-full -z-10" />

                    {/* The Mockup - Clean, No Frame, High Shadow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-[300px] sm:w-[380px] md:w-[420px] h-[600px] sm:h-[750px] md:h-[820px] drop-shadow-[0_50px_80px_rgba(0,0,0,0.12)]"
                    >
                        <Image
                            src={heroDetails.extraMock2}
                            priority
                            alt="app preview"
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}