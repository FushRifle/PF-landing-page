"use client"

import { useState } from "react"
import { ctaDetails } from "@/data/cta"
import Modal from "./WaitlistModal"

const CTA: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        device: "",
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validate = () => {
        const newErrors: { [key: string]: string } = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.device.trim()) newErrors.device = "Device type is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            setIsOpen(true)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20 px-4">
            <div className="relative max-w-7xl mx-auto rounded-2xl bg-[#005A31] text-white text-center p-10 sm:p-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    {ctaDetails.heading}
                </h2>
                <p className="text-base text-center sm:text-lg opacity-90 max-w-2xl mx-auto mb-8">
                    {ctaDetails.subheading}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    {/* Name */}
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                    </div>

                    {/* Device */}
                    {/* Device */}
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm font-medium">Device type</label>
                        <select
                            name="device" // ✅ important
                            value={formData.device} // ✅ controlled
                            onChange={handleChange} // ✅ update formData
                            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        >
                            <option value="" disabled>
                                Select your device
                            </option>
                            <option value="iOS">iOS</option>
                            <option value="Android">Android</option>
                        </select>
                        {errors.device && <p className="text-red-400 text-sm">{errors.device}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors"
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </section>
    )
}

export default CTA
