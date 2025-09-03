"use client"

import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"

interface ModalProps {
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
                >
                    ×
                </button>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    You have successfully joined the waitlist. 🎉
                </h3>
                <p className="text-gray-700 mb-6">
                    ParentFully is more than an app - We are a community. Join our WhatsApp or Telegram groups for support, tips, and early updates.
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
    )
}

export default Modal
