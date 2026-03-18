"use client";
import { FC } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Goal Setting",
        description: "Help your child grow with structured, age-appropriate goals that make development fun and measurable.",
        icon: "octicon:goal-16",
        iconColor: "text-[#B35D00]",
        bgColor: "bg-[#FFEFDF]",
    },
    {
        title: "Routine Builder",
        description: "Create and track daily routines with tasks and reminders to build positive habits and consistency.",
        icon: "streamline:recycle-1-solid",
        iconColor: "text-emerald-500",
        bgColor: "bg-[#E2FDF8]",
    },
    {
        title: "Discipline Planner",
        description: "Encourage good behavior through positive reinforcement tools that promote responsibility.",
        icon: "streamline:good-health-and-well-being-solid",
        iconColor: "text-blue-500",
        bgColor: "bg-[#D0E8FF]",
    },
    {
        title: "Budget Management",
        description: "Track contributions and manage shared expenses transparently without the usual conflict.",
        icon: "iconoir:wallet-solid",
        iconColor: "text-[#5208F2]",
        bgColor: "bg-[#E7DCFF]",
    },
    {
        title: "Community",
        description: "Connect with other parents and learn from a supportive network that understands your journey.",
        icon: "fluent-color:people-community-32",
        iconColor: "text-[#3DCBFF]",
        bgColor: "bg-[#D3F1FF]",
    },
    {
        title: "Chat",
        description: "Communicate seamlessly with your co-parent—keeping all child-related discussions in one place.",
        icon: "ant-design:message-filled",
        iconColor: "text-[#4CAF50]",
        bgColor: "bg-[#E1FCE3]",
    },
];

const containerVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

export const Features: FC = () => {
    return (
        <section className="relative py-24 bg-[#FFFDF8] overflow-hidden">
            {/* Background Glows to match Hero */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 blur-[120px] rounded-full -mr-64 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 blur-[120px] rounded-full -ml-64 -mb-32" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Grid of Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-start text-left"
                        >
                            {/* Icon Container */}
                            <div className={`mb-6 p-4 rounded-2xl ${feature.bgColor} transition-transform duration-500 group-hover:rotate-6`}>
                                <Icon
                                    icon={feature.icon}
                                    className={`w-8 h-8 ${feature.iconColor}`}
                                />
                            </div>

                            {/* Text content */}
                            <h3 className="text-2xl font-bold text-[#005A31] group-hover:text-[#F38500] transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="mt-4 text-[#72706F] text-base leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Subtle "Learn More" or Arrow that appears on hover */}
                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#005A31] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                Explore Detail <span className="text-lg">→</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;