"use client";

import React from "react";
import {
     Trash2,
     AlertTriangle,
     Info,
     Settings,
     User,
     CheckCircle,
     ArrowRight,
     Mail
} from "lucide-react";

const DeleteAccount = () => {
     return (
          <div className="min-h-screen bg-[#FDFCFB] py-20 px-6">
               <div className="max-w-4xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                         <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-50 mb-6 shadow-sm">
                              <Trash2 className="text-red-600" size={40} />
                         </div>
                         <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter mb-4">
                              Account Deletion
                         </h1>
                         <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                              At Parentfully, you have full control over your personal data.
                              Here is how to permanently remove your account.
                         </p>
                    </div>

                    <div className="grid gap-8">

                         {/* Step-by-Step Guide Card */}
                         <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full blur-3xl -mr-16 -mt-16" />

                              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 flex items-center gap-3">
                                   <Settings className="text-[#005A31]" size={24} />
                                   How to Delete via the App
                              </h2>

                              <div className="space-y-4">
                                   {[
                                        { step: "1", text: "Open the Parentfully app", icon: <ArrowRight size={16} /> },
                                        { step: "2", text: "Navigate to Settings (Gear Icon)", icon: <Settings size={16} /> },
                                        { step: "3", text: "Select Account settings", icon: <User size={16} /> },
                                        { step: "4", text: "Tap Delete Account at the bottom", icon: <Trash2 size={16} /> },
                                        { step: "5", text: "Confirm your decision in the final prompt", icon: <CheckCircle size={16} /> },
                                   ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-red-100 hover:bg-red-50/30 transition-all group">
                                             <span className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-sm font-bold text-[#005A31] group-hover:text-red-600 transition-colors">
                                                  {item.step}
                                             </span>
                                             <span className="font-semibold text-gray-700">{item.text}</span>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Data Impact Grid */}
                         <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                                   <h3 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                        <Info className="text-[#F38500]" size={20} />
                                        What stays?
                                   </h3>
                                   <p className="text-sm text-gray-500 leading-relaxed">
                                        Subscription history (Apple/Google) and basic transactional logs are kept
                                        for minimum periods required by financial laws.
                                   </p>
                              </div>
                              <div className="bg-red-600 rounded-[2rem] p-8 text-white shadow-xl shadow-red-200">
                                   <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <AlertTriangle className="text-white" size={20} />
                                        What goes?
                                   </h3>
                                   <ul className="text-sm space-y-2 opacity-90 font-medium list-disc pl-4">
                                        <li>Profile, email, and password</li>
                                        <li>All private messages and journals</li>
                                        <li>Family shared group connections</li>
                                        <li>Stored documents and media</li>
                                   </ul>
                              </div>
                         </div>

                         {/* Warning & Contact Footer */}
                         <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent pointer-events-none" />
                              <h3 className="text-xl font-bold mb-4 relative z-10">Important Note on Subscriptions</h3>
                              <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 relative z-10 leading-relaxed">
                                   Account deletion is **permanent**. It does not automatically cancel
                                   active Premium subscriptions. Please manage your billing through the
                                   App Store or Google Play Store.
                              </p>

                              <div className="h-px bg-white/10 w-full mb-8" />

                              <p className="text-gray-300 font-medium mb-6">Need help with the process?</p>
                              <a
                                   href="mailto:admin@parentfullyapp.com"
                                   className="inline-flex items-center gap-3 bg-white text-[#1A1A1A] px-10 py-4 rounded-full font-black hover:bg-[#F38500] hover:text-white transition-all shadow-lg active:scale-95"
                              >
                                   <Mail size={18} /> Contact Support
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DeleteAccount;