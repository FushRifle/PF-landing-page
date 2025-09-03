"use client"

import { useState, useMemo } from "react"
import countryList from "react-select-country-list"
import Select from "react-select"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { ctaDetails } from "@/data/cta"
import Modal from "./WaitlistModal"

const CTA: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        device: "",
        country: "",
    })
    const countries = useMemo(() => countryList().getData(), [])
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validate = () => {
        const newErrors: { [key: string]: string } = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.device.trim()) newErrors.device = "Please select your device type"
        if (!formData.country.trim()) newErrors.country = "Please select your country"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }))
        }
    }

    const handleCountryChange = (option: any) => {
        setFormData(prev => ({ ...prev, country: option?.value || "" }))
        if (errors.country) {
            setErrors(prev => ({ ...prev, country: "" }))
        }
    }

    const handlePhoneChange = (value: string) => {
        setFormData(prev => ({ ...prev, phone: value }))
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: "" }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        try {
            const res = await fetch("/api/cta", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setIsOpen(true)
                setFormData({ name: "", email: "", phone: "", device: "", country: "" })
            } else {
                const errorData = await res.json()
                alert(errorData.message || "Failed to submit. Please try again.")
            }
        } catch (error) {
            alert("Something went wrong. Please check your connection and try again.")
        } finally {
            setLoading(false)
        }
    }

    const customSelectStyles = {
        control: (base: any, state: any) => ({
            ...base,
            minHeight: '48px',
            borderRadius: '0.375rem',
            borderColor: state.isFocused ? '#10B981' : '#D1D5DB',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(16, 185, 129, 0.2)' : 'none',
            '&:hover': {
                borderColor: state.isFocused ? '#10B981' : '#9CA3AF'
            }
        }),
        menu: (base: any) => ({
            ...base,
            zIndex: 50,
        }),
    }

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20 px-4">
            <div className="relative max-w-7xl mx-auto rounded-2xl bg-[#005A31] text-white text-center p-6 sm:p-10 md:p-16 overflow-hidden">
                {/* Optional decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 rounded-full mix-blend-overlay"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full mix-blend-overlay"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        {ctaDetails.heading}
                    </h2>
                    <p className="text-base text-center sm:text-lg opacity-90 max-w-2xl mx-auto mb-8">
                        {ctaDetails.subheading}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto" noValidate>
                        {/* Name */}
                        <div className="flex flex-col text-left">
                            <label htmlFor="name" className="mb-1 text-sm font-medium">First Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border border-red-500' : ''
                                    }`}
                                placeholder="Enter your name"
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-300 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col text-left">
                            <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border border-red-500' : ''
                                    }`}
                                placeholder="Enter your email"
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && (
                                <p id="email-error" className="text-red-300 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col text-left">
                            <label className="mb-1 text-sm font-medium">Phone Number</label>
                            <div className="relative">
                                <PhoneInput
                                    country={"us"}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    inputStyle={{
                                        width: "100%",
                                        paddingTop: "1.5rem",
                                        paddingBottom: "1.5rem",
                                        paddingLeft: "4rem",
                                        paddingRight: "2rem",
                                        borderRadius: "0.375rem",
                                        color: "black",
                                        outline: "none",
                                        ...(errors.phone
                                            ? { border: "1px solid #ef4444" }
                                            : { border: "1px solid #d1d5db" })
                                    }}
                                    buttonStyle={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        height: "100%",
                                        paddingLeft: "0.5rem",
                                        paddingRight: "0.5rem",
                                        borderRight: "1px solid #d1d5db",
                                        borderTopLeftRadius: "0.375rem",
                                        borderBottomLeftRadius: "0.375rem"
                                    }}
                                    containerStyle={{
                                        position: "relative",
                                        width: "100%",

                                    }}
                                    dropdownStyle={{
                                        maxHeight: "15rem",
                                        overflowY: "auto",
                                        backgroundColor: "white",
                                        color: "black",
                                        borderRadius: "0.375rem",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                                    }}
                                />

                            </div>
                            {errors.phone && (
                                <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Country */}
                        <div className="flex flex-col text-left">
                            <label className="mb-1 text-sm font-medium">Country</label>
                            <Select
                                options={countries}
                                value={countries.find((c) => c.value === formData.country) || null}
                                onChange={handleCountryChange}
                                className="text-black"
                                placeholder="Select your country"
                                styles={customSelectStyles}
                                aria-describedby={errors.country ? "country-error" : undefined}
                            />
                            {errors.country && (
                                <p id="country-error" className="text-red-300 text-sm mt-1">{errors.country}</p>
                            )}
                        </div>

                        {/* Device */}
                        <div className="flex flex-col text-left">
                            <label htmlFor="device" className="mb-1 text-sm font-medium">Device type</label>
                            <select
                                id="device"
                                name="device"
                                value={formData.device}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.device ? 'border border-red-500' : ''
                                    }`}
                                aria-describedby={errors.device ? "device-error" : undefined}
                            >
                                <option value="" disabled>Select your device</option>
                                <option value="iOS">iOS</option>
                                <option value="Android">Android</option>
                            </select>
                            {errors.device && (
                                <p id="device-error" className="text-red-300 text-sm mt-1">{errors.device}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold shadow-md transition-colors
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 text-white"}
              `}
                            aria-label={loading ? "Submitting your information" : "Join waitlist"}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : "Join Waitlist"}
                        </button>
                    </form>
                </div>
            </div>

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </section>
    )
}

export default CTA