"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ArrowRight, Users, Target, Shield, Bell, Calendar, Heart, Copyright } from "lucide-react";
import Link from "next/link";

const reasons = [
    "Personalized guidance for your child's age",
    "Expert-backed tips from child specialists",
    "Interface designed for busy parents",
    "Gentle, consistent habit reminders",
];

const features = [
    {
        icon: <Users className="w-5 h-5 text-orange-400" />,
        title: "Family Connect",
        description: "Sync with co-parents and family members"
    },
    {
        icon: <Target className="w-5 h-5 text-orange-400" />,
        title: "Goal Tracking",
        description: "Set and monitor developmental milestones"
    },
    {
        icon: <Bell className="w-5 h-5 text-orange-400" />,
        title: "Smart Reminders",
        description: "Never miss appointments or routines"
    },
    {
        icon: <Heart className="w-5 h-5 text-orange-400" />,
        title: "Emotional Support",
        description: "Resources for parenting challenges"
    }
];

export default function WhyChoose() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/merch/merch6.png"
                    alt="Parenting app background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                {/* Gradient Overlay - Softer for parenting theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#005A31]/95 via-[#005A31]/85 to-[#F38500]/70" />
                {/* Additional subtle pattern overlay */}
                <div className="absolute inset-0 bg-[url('/patterns/dots.png')] opacity-5" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                        >
                            <Heart className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-white/90">Trusted by families</span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                            Built for <span className="text-orange-400">Real</span>
                            <br />
                            Parenting.
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                            Every family is unique. We provide the structure so you can focus on what matters most — connection.
                        </p>
                    </motion.div>

                    {/* Feature Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                                <p className="text-gray-300 text-xs">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Reasons Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
                    >
                        {reasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center">
                                    <Icon icon="ph:check-bold" className="text-[#005A31] w-3 h-3" />
                                </div>
                                <span className="text-sm sm:text-base text-gray-100 text-left">
                                    {reason}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/download">
                            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                                <span>Download the App</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <Link

                            href='/help'
                        >
                            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 border border-white/20">
                                <span>Learn More</span>
                            </button>
                        </Link>

                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex items-center justify-center gap-6 text-white/60 text-xs"
                    >
                        <div className="flex items-center gap-2">
                            <Copyright className="w-4 h-4" />
                            <span className="font-meduim">Pilandres Solutions Inc.</span>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-5" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#005A31]/30 rounded-full blur-3xl -z-5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl -z-5" />
        </section>
    );
}