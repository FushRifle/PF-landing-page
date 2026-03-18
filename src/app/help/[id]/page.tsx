"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { helpArticles } from "@/data/helpCenter";
import { ArrowLeft, Share2, Printer } from "lucide-react";
import Link from "next/link";

export default function ArticlePage() {
     const { id } = useParams();
     const router = useRouter();

     const article = helpArticles.find((a) => a.id === id);

     if (!article) {
          return <div className="py-20 text-center">Article not found. <Link href="/help">Go back</Link></div>;
     }

     return (
          <div className="min-h-screen bg-white pb-20">
               <article className="max-w-3xl mx-auto px-6 pt-16 mt-20">

                    {/* Simple Top Nav */}
                    <div className="border-b border-gray-100 py-10 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">

                         <div className="max-w-4xl mx-auto flex justify-between items-center">
                              <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-500 hover:text-[#005A31] font-bold transition-colors text-sm">
                                   <ArrowLeft size={18} /> Back to Help
                              </button>
                              <div className="flex gap-4">
                                   <Share2 size={18} className="text-gray-400 cursor-pointer hover:text-[#005A31]" />
                                   <Printer size={18} className="text-gray-400 cursor-pointer hover:text-[#005A31]" />
                              </div>
                         </div>
                    </div>

                    <span className="text-[#F38500] font-black text-xs uppercase tracking-widest">{article.category}</span>
                    <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mt-4 mb-6 tracking-tighter">
                         {article.title}
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium border-l-4 border-[#E2FDF8] pl-6">
                         {article.description}
                    </p>

                    {/* Render the HTML content from data.ts */}
                    <div
                         className="prose prose-lg prose-slate max-w-none 
                    prose-headings:text-[#1A1A1A] prose-headings:font-black 
                    prose-strong:text-[#005A31] prose-a:text-[#F38500]"
                         dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-20 p-8 bg-gray-50 rounded-[2.5rem] text-center border border-gray-100">
                         <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">Was this article helpful?</h4>
                         <div className="flex justify-center gap-4 mt-4">
                              <button className="px-8 py-2 bg-white border border-gray-200 rounded-full hover:bg-emerald-50 hover:border-emerald-200 transition-all font-bold">Yes</button>
                              <button className="px-8 py-2 bg-white border border-gray-200 rounded-full hover:bg-red-50 hover:border-red-200 transition-all font-bold">No</button>
                         </div>
                    </div>
               </article>
          </div>
     );
}