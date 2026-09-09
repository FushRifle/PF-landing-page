import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';

const articles = [
    {
        category: 'Routines',
        title: 'How to build a morning routine your child can actually follow',
        excerpt: 'Start small, make the next step visible, and let consistency do the heavy lifting.',
        image: '/mocks/routines.webp',
        readTime: '5 min read',
    },
    {
        category: 'Whole-child growth',
        title: 'Turn “I want my child to…” into everyday practice',
        excerpt: 'A practical way to connect the qualities you hope to nurture with the moments you already share.',
        image: '/mocks/goals.webp',
        readTime: '6 min read',
    },
    {
        category: 'Family life',
        title: 'A simpler way to share the mental load of parenting',
        excerpt: 'Bring routines, responsibilities, and the people who support your child into one clear system.',
        image: '/mocks/home.webp',
        readTime: '4 min read',
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#f8fbf9] pb-20 pt-28 sm:pt-36 lg:pb-28">
            <section className="px-4 sm:px-6">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#bf6500]">The Parentfully journal</p>
                    <div className="mt-4 grid gap-8 border-b border-gray-200 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] text-gray-950 text-balance sm:text-6xl">Small ideas for the big work of raising children.</h1>
                        </div>
                        <p className="max-w-xl text-lg leading-relaxed text-gray-600">Practical guidance for building calmer routines, stronger habits, and a more intentional family life.</p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6 lg:py-16">
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_1fr]">
                    <div className="relative min-h-[300px] bg-[#E2FDF8] sm:min-h-[380px]">
                        <Image src="/images/parenting-team-phone-diverse.png" alt="Family using Parentfully together" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#bf6500]">Featured</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 sm:text-4xl">What does intentional parenting look like on an ordinary Tuesday?</h2>
                        <p className="mt-5 text-lg leading-relaxed text-gray-600">It is not about doing more. It is about giving the things that matter a place in everyday family life.</p>
                        <Link href="#featured" className="group mt-7 inline-flex items-center gap-3 self-start rounded-full bg-[#005A31] px-6 py-3.5 font-black text-white shadow-[0_16px_35px_rgba(0,90,49,0.2)] transition hover:-translate-y-0.5 hover:bg-[#004825]">Read the article <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="flex items-end justify-between gap-6"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#005A31]">Latest from Parentfully</p><h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">For the days you&apos;re figuring it out.</h2></div></div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {articles.map((article) => (
                            <article key={article.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
                                <div className="relative h-52 overflow-hidden bg-[#E2FDF8]"><Image src={article.image} alt="" fill className="object-cover object-top transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" /></div>
                                <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#bf6500]">{article.category}</p><h3 className="mt-3 text-xl font-black leading-snug text-gray-950">{article.title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{article.excerpt}</p><div className="mt-5 flex items-center justify-between text-sm font-bold text-[#005A31]"><span className="inline-flex items-center gap-2 text-gray-500"><Clock3 className="h-4 w-4" />{article.readTime}</span><Link href={`#${article.category.toLowerCase().replaceAll(' ', '-')}`} className="inline-flex items-center gap-1 hover:text-[#F38500]">Read <ArrowRight className="h-4 w-4" /></Link></div></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="featured" className="mx-4 mt-16 rounded-[2rem] bg-[#005A31] px-7 py-12 text-center text-white sm:mx-6 sm:px-10 lg:mx-auto lg:mt-24 lg:max-w-6xl lg:py-16">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-200">More is coming</p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">A better family system starts with one useful next step.</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">Explore Parentfully when you&apos;re ready to turn your intentions into everyday action.</p>
                <Link href="/download" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F38500] px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d87500]">Start Free <ArrowRight className="h-5 w-5" /></Link>
            </section>
        </div>
    );
}
