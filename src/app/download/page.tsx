"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, PlayCircle } from 'lucide-react';
import { heroDetails } from '@/data/hero';
import { downloadLinks, platformFeatures } from '@/data/download';

const DownloadPage = () => {
     return (
          <section className="relative min-h-screen bg-white overflow-hidden pt-32 pb-20">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 blur-[120px] rounded-full -mr-48 -mt-48 -z-10 animate-pulse" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E2FDF8] blur-[120px] rounded-full -ml-48 -mb-48 -z-10" />

               <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                         {/* --- Left Content: The "Hook" --- */}
                         <div className="w-full lg:w-1/2 text-center lg:text-left">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, ease: "easeOut" }}
                              >
                                   <h1 className="text-6xl md:text-8xl font-black text-[#005A31] leading-[0.95] tracking-tighter">
                                        Start Your <br />
                                        <span className="text-[#F38500]">Stress-Free</span> <br />
                                        Journey.
                                   </h1>
                                   <p className="mt-8 text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                                        Join thousands of families using Parentfully to sync schedules, track goals, and communicate without the conflict.
                                   </p>
                              </motion.div>

                              {/* Store Buttons Block - Now using real data */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.3, duration: 0.6 }}
                                   className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                              >
                                   {/* Main Download Cards */}
                                   <div className="grid md:grid-cols-2 gap-8 mb-20">

                                        {/* Apple Card */}
                                        <a
                                             href={downloadLinks.apple}
                                             target="_blank"
                                             className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                        >
                                             <div className="flex justify-between items-start mb-12">
                                                  <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-xl">
                                                       <Image src="/icons/apple3.png" alt="apple" width={32} height={32} className="invert" />
                                                  </div>
                                                  <span className="bg-gray-50 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-gray-400">
                                                       Available Now
                                                  </span>
                                             </div>
                                             <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">Download for iOS</h3>
                                             <p className="text-gray-500 mb-8 font-medium">{platformFeatures[0].requirements}</p>
                                             <div className="flex items-center gap-2 text-[#005A31] font-black group-hover:gap-4 transition-all">
                                                  Go to App Store <PlayCircle size={20} />
                                             </div>
                                        </a>

                                        {/* Google Card */}
                                        <a
                                             href={downloadLinks.google}
                                             target="_blank"
                                             className="group bg-[#005A31] p-10 rounded-[3rem] shadow-xl hover:shadow-emerald-200 hover:-translate-y-2 transition-all duration-500 text-white"
                                        >
                                             <div className="flex justify-between items-start mb-12">
                                                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                                                       <Image src="/icons/google.png" alt="google" width={32} height={32} />
                                                  </div>
                                                  <span className="bg-white/10 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full text-emerald-100">
                                                       Stable Release
                                                  </span>
                                             </div>
                                             <h3 className="text-3xl font-black mb-2">Download for Android</h3>
                                             <p className="text-emerald-100/70 mb-8 font-medium">{platformFeatures[1].requirements}</p>
                                             <div className="flex items-center gap-2 text-white font-black group-hover:gap-4 transition-all">
                                                  Go to Play Store <PlayCircle size={20} />
                                             </div>
                                        </a>
                                   </div>
                              </motion.div>
                         </div>

                         {/* --- Right Visual: The Premium Mockup --- */}
                         <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                         >
                              {/* Glowing Aura behind phone */}
                              <div className="absolute inset-0 scale-75 bg-gradient-to-tr from-[#005A31]/20 to-[#F38500]/10 blur-[100px] rounded-full -z-10" />

                              <div className="relative w-[300px] sm:w-[380px] md:w-[480px] h-[600px] sm:h-[750px] md:h-[850px] animate-float drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                                   <Image
                                        src={heroDetails.centerImageSrc}
                                        fill
                                        priority
                                        quality={100}
                                        alt="Parentfully app preview"
                                        className="object-contain"
                                   />
                              </div>

                              {/* Floating Interaction Badge */}
                              <motion.div
                                   initial={{ x: 20, opacity: 0 }}
                                   animate={{ x: 0, opacity: 1 }}
                                   transition={{ delay: 1 }}
                                   className="absolute bottom-20 right-0 lg:-right-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-50 flex items-center gap-4 animate-bounce-slow"
                              >
                                   <div className="w-14 h-14 bg-[#005A31] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">
                                        <ArrowRight className="w-7 h-7" />
                                   </div>
                                   <div className="text-left pr-4">
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Join Today</p>
                                        <p className="text-lg font-black text-[#005A31]">2-min Setup</p>
                                   </div>
                              </motion.div>
                         </motion.div>
                    </div>
               </div>

               <style jsx global>{`
                @keyframes float-large {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(2deg); }
                }
                .animate-float {
                    animation: float-large 10s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 5s ease-in-out infinite;
                }
            `}</style>
          </section>
     );
};

export default DownloadPage;