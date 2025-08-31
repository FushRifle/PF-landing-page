import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20 px-4">
            <div className="relative max-w-7xl mx-auto rounded-2xl bg-[#005A31] text-white text-center p-10 sm:p-16">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    {ctaDetails.heading}
                </h2>
                <p className="text-base text-center sm:text-lg opacity-90 max-w-2xl mx-auto mb-8">
                    {ctaDetails.subheading}
                </p>

                {/* Form */}
                <form className="space-y-4 max-w-md mx-auto">
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Device type</label>
                        <input
                            type="text"
                            placeholder="iOS / Android"
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors"
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CTA
