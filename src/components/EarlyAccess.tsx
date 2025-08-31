import React from "react"

const EarlyAccess: React.FC = () => {
    return (
        <section className="w-full py-6 px-2 bg-[#FFF8EF]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between p-6 sm:p-10">

                {/* Text */}
                <div className="text-center sm:text-left mb-4 sm:mb-0 space-y-4">
                    <h3 className="text-xl sm:text-4xl font-bold text-[#FF8C01]">
                        <span className="text-black">Get</span> Early Access
                    </h3>
                    <p className="text-sm sm:text-xl opacity-90 text-black">
                        Join a community of parents building calmer, healthier childhoods through teamwork.
                    </p>
                </div>

                {/* Button */}
                <button className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors">
                    Join Now
                </button>
            </div>
        </section>
    )
}

export default EarlyAccess
