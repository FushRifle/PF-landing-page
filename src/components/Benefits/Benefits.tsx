"use client";
import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"
import { FC } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


const Benefits: React.FC = () => {
    return (
        <div id="features">
            {/* Heading Block */}
            <div className="text-center max-w-3xl mx-auto mb-10 mt-20">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-[#005A31] leading-tight"
                >
                    Everything You Need For <span className="text-[#F38500]">Better Parenting</span>
                </motion.h2>
            </div>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits