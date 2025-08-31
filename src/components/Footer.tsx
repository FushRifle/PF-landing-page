import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="relative text-foreground py-10 overflow-hidden">
            {/* Base background color */}
            <div className="absolute inset-0 -z-50 bg-[#E2FDF8]" />

            {/* Image overlay with opacity */}
            <div
                className="absolute inset-0 -z-40 bg-cover bg-center opacity-5"
                style={{ backgroundImage: "url('/images/HeroBG.png')" }}
            />

            {/* Content */}
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                {/* Logo + Subheading */}
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt={siteDetails.siteName}
                            width={90}
                            height={65}
                            className="object-contain h-auto w-[80px] sm:w-[100px] md:w-[110px]"
                        />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    {footerDetails.email && (
                        <a
                            href={`mailto:${footerDetails.email}`}
                            className="block text-foreground-accent hover:text-foreground"
                        >
                            Email: {footerDetails.email}
                        </a>
                    )}
                    {footerDetails.telephone && (
                        <a
                            href={`tel:${footerDetails.telephone}`}
                            className="block text-foreground-accent hover:text-foreground"
                        >
                            Phone: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 md:text-center text-foreground-accent px-6 relative z-10">
                <p>
                    Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
