import { ctaDetails } from "@/data/cta"
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"

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
                    <div className="mt-12">
                        <button
                            type="submit"
                            className="w-full mt-4 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors"
                        >
                            Join Waitlist
                        </button>
                    </div>

                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-400" />
                    <span className="px-3 text-sm opacity-80">or join through</span>
                    <hr className="flex-1 border-gray-400" />
                </div>

                {/* WhatsApp / Telegram buttons */}
                <div className="flex justify-center gap-10">
                    <a
                        href="https://chat.whatsapp.com/EhY7ONsphWX1NmBmhGTHUS?mode=ems_copy_chat_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors shadow-md font-semibold"
                    >
                        <FaWhatsapp size={20} /> WhatsApp
                    </a>
                    <a
                        href="https://t.me/+NJfluxRPQsBlZGI5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors shadow-md font-semibold"
                    >
                        <FaTelegramPlane size={20} /> Telegram
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA
