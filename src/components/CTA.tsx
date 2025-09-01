'use client';

import { useState } from "react"
import { ctaDetails } from "@/data/cta"
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"

const CTA: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsOpen(true) // open modal after submitting
    }

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
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
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

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
                        >
                            ×
                        </button>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            You have successfully joined the waitlist. 🎉
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Please choose your preferred means of communication
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://chat.whatsapp.com/EhY7ONsphWX1NmBmhGTHUS?mode=ems_copy_c"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors shadow-md font-semibold text-white"
                            >
                                <FaWhatsapp size={20} /> WhatsApp
                            </a>
                            <a
                                href="https://t.me/+NJfluxRPQsBlZGI5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors shadow-md font-semibold text-white"
                            >
                                <FaTelegramPlane size={20} /> Telegram
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CTA
