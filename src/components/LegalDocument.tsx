import Link from 'next/link';

export type LegalSection = {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
};

type LegalDocumentProps = {
    eyebrow: string;
    title: string;
    summary: string;
    lastUpdated: string;
    sections: LegalSection[];
};

export default function LegalDocument({ eyebrow, title, summary, lastUpdated, sections }: LegalDocumentProps) {
    return (
        <div className="min-h-screen bg-[#f8fbf9] px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:pb-28">
            <div className="mx-auto max-w-6xl">
                <header className="relative overflow-hidden rounded-[2rem] bg-[#005A31] px-7 py-10 text-white shadow-[0_24px_65px_rgba(0,90,49,0.2)] sm:px-12 sm:py-14">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F38500]/20 blur-3xl" />
                    <div className="relative max-w-3xl">
                        <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-200">{eyebrow}</p>
                        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-white/80">{summary}</p>
                        <p className="mt-7 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">Last Updated: {lastUpdated}</p>
                    </div>
                </header>

                <div className="mt-10 grid gap-10 lg:grid-cols-[225px_minmax(0,1fr)]">
                    <aside className="hidden lg:block">
                        <nav className="sticky top-28 border-l border-[#005A31]/15 pl-4" aria-label={`${title} contents`}>
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#005A31]">Contents</p>
                            <ul className="space-y-2">
                                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="block text-sm font-semibold leading-snug text-gray-600 transition hover:text-[#F38500]">{section.title}</a></li>)}
                            </ul>
                        </nav>
                    </aside>

                    <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-10">
                        <div className="border-b border-gray-200 pb-8 text-gray-600"><p className="leading-relaxed">Parentfully is owned and operated by Pilandres Solutions Inc. · 350 Boulevard de Maisonneuve Ouest, H3A 0B4, Montreal, Quebec, Canada · <a className="font-bold text-[#005A31] hover:text-[#F38500]" href="mailto:admin@parentfullyapp.com">admin@parentfullyapp.com</a></p></div>
                        <div className="divide-y divide-gray-200">
                            {sections.map((section) => <section id={section.id} key={section.id} className="scroll-mt-32 py-9 first:pt-8"><h2 className="text-2xl font-black leading-tight text-gray-950">{section.title}</h2><div className="mt-4 space-y-4 text-[17px] leading-relaxed text-gray-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul className="space-y-2 pl-5 marker:text-[#F38500]">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div></section>)}
                        </div>
                        <div className="mt-4 rounded-2xl bg-[#E2FDF8] p-6 text-center"><p className="font-black text-[#005A31]">Questions?</p><Link href="mailto:admin@parentfullyapp.com" className="mt-2 inline-block font-bold text-[#005A31] underline decoration-[#F38500] decoration-2 underline-offset-4">Contact Parentfully</Link></div>
                    </article>
                </div>
            </div>
        </div>
    );
}
