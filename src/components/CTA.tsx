"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const ContactCTA: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Please leave a message";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 lg:py-32 px-6">
            <div className="max-w-6xl mx-auto relative rounded-[3rem] bg-[#005A31] overflow-hidden shadow-[0_40px_100px_rgba(0,90,49,0.3)]">

                {/* Modern Background Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F38500] opacity-20 blur-[120px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 opacity-10 blur-[100px] -ml-20 -mb-20" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center">

                    {/* --- Left Side: Text --- */}
                    <div className="w-full lg:w-1/2 p-10 lg:p-20 text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black leading-tight tracking-tighter"
                        >
                            Have Questions? <br />
                            <span className="text-[#F38500]">Let’s Talk.</span>
                        </motion.h2>
                        <p className="mt-6 text-xl text-emerald-50/80 font-medium leading-relaxed max-w-md">
                            Whether you need support or want to learn how Parentfully can help your family, we're here for you.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📍</div>
                                <span className="text-lg font-semibold">Global Support</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">✉️</div>
                                <span className="text-lg font-semibold">support@parentfully.com</span>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Side: Form --- */}
                    <div className="w-full lg:w-1/2 p-6 lg:p-12">
                        <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl">
                            {submitted ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="text-5xl mb-6">🎉</div>
                                    <h3 className="text-2xl font-bold text-[#005A31]">Message Sent!</h3>
                                    <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 text-[#F38500] font-bold underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black transition-all"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs px-2">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black transition-all"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs px-2">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="contact-phone-input">
                                        <PhoneInput
                                            country={"us"}
                                            value={formData.phone}
                                            onChange={(val) => setFormData({ ...formData, phone: val })}
                                            inputStyle={{
                                                width: "100%",
                                                height: "56px",
                                                borderRadius: "12px",
                                                background: "#f9fafb",
                                                border: "1px solid #e5e7eb",
                                                fontSize: "16px"
                                            }}
                                            buttonStyle={{
                                                borderRadius: "12px 0 0 12px",
                                                border: "1px solid #e5e7eb",
                                                background: "#f9fafb",
                                                borderRight: "none"
                                            }}
                                            dropdownStyle={{
                                                borderRadius: "12px"
                                            }}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <textarea
                                            placeholder="How can we help?"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#F38500] focus:ring-2 focus:ring-[#F38500]/20 outline-none text-black resize-none transition-all"
                                        />
                                        {errors.message && <p className="text-red-500 text-xs px-2">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-5 bg-[#F38500] hover:bg-[#d67500] text-white font-black text-lg rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .contact-phone-input .flag-dropdown {
                    background: transparent !important;
                }
            `}</style>
        </section>
    );
};

export default ContactCTA;