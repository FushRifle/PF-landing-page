import { FC } from "react";
import { Icon } from "@iconify/react";

const features = [
    {
        title: "Goal Setting",
        description:
            "Help your child grow with structured, age-appropriate goals that make learning and development fun and measurable.",
        icon: (
            <Icon
                icon="octicon:goal-16"
                className="w-12 h-12 text-[#B35D00] bg-[#FFEFDF] rounded-full p-1"
            />
        ),
    },
    {
        title: "Routine Builder",
        description:
            "Create and track daily routines with tasks and reminders to help kids stay consistent and build positive habits.",
        icon: (
            <Icon
                icon="streamline:recycle-1-solid"
                className="w-12 h-12 text-emerald-400 bg-[#E2FDF8] rounded-full p-1"
            />
        ),
    },
    {
        title: "Discipline Planner",
        description:
            "Encourage good behavior through positive reinforcement and gentle discipline tools that promote responsibility.",
        icon: (
            <Icon
                icon="streamline:good-health-and-well-being-solid"
                className="w-12 h-12 text-blue-500 bg-[#E2FDF8] rounded-full p-1"
            />
        ),
    },
    {
        title: "Budget Management",
        description:
            "Track contributions, manage shared expenses, and stay transparent about your child’s needs without conflict.",
        icon: (
            <Icon
                icon="iconoir:wallet-solid"
                className="w-12 h-12 text-[#5208F2] bg-[#E7DCFF] rounded-full p-1"
            />
        ),
    },
    {
        title: "Community",
        description:
            "Connect with other parents, share experiences, and learn from a supportive network that understands your journey.",
        icon: (
            <Icon
                icon="fluent-color:people-community-32"
                className="w-12 h-12 text-[#3DCBFF] bg-[#D3F1FF] rounded-full p-1"
            />
        ),
    },
    {
        title: "Chat",
        description:
            "Communicate seamlessly with your co-parent — keeping all child-related discussions in one secure place.",
        icon: (
            <Icon
                icon="ant-design:message-filled"
                className="w-12 h-12 text-[#4CAF50] bg-[#E1FCE3] rounded-full p-1"
            />
        ),
    },
];

export const Features: FC = () => {
    return (
        <section className="py-16 bg-[#FFFDF8]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                        Everything You Need For Better Parenting
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Powerful Features Designed to support you every step of the way
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col"
                        >
                            <div className="mb-4 w-16 h-16 flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-[#72706F] text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
