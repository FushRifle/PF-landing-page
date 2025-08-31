import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Icon } from "@iconify/react";

const reasons = [
    "Personalized guidance based on your child's age",
    "Expert-backed tips from child development specialists",
    "Easy-to-use interface designed for busy parents",
    "Gentle reminders that help you stay consistent",
    "Safe, private platform with no ads or data sharing",
];

export default function WhyChoose() {
    return (
        <section className="bg-[#FBFFEF] py-7 mx-auto">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Why Parents Choose Parentfully
                    </h2>
                    <p className="text-gray-700 mb-8">
                        We understand that every family is unique. That's why Parentfully provides
                        personalized guidance that adapts to your family's specific needs and challenges.
                    </p>

                    <ul className="space-y-7">
                        {reasons.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Icon icon="streamline-ultimate:check-badge-bold" className="text-green-600 w-6 h-6" />
                                <span className="text-gray-800">{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="hidden md:flex flex justify-center"
                >
                    <div className="relative" style={{ width: '100%', height: '700px' }} >
                        <Image
                            src={'/images/started.jpg'}
                            fill quality={100}
                            priority unoptimized
                            alt="app mockup" className="relative z-10 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
