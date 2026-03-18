import { motion } from "framer-motion"
import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center p-4 rounded-2xl transition-colors hover:bg-white/50 group lg:flex-row lg:items-start lg:gap-6 text-center lg:text-left"
            variants={childVariants}
        >
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm text-2xl transition-transform group-hover:scale-110 group-hover:rotate-3">
                {icon}
            </div>
            <div className="mt-4 lg:mt-0">
                <h4 className="text-lg font-bold text-[#005A31]">
                    {title}
                </h4>
                <p className="mt-1 text-base text-gray-500 leading-snug">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet