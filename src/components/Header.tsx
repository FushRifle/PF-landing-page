'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Scroll listener for background change
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 
                ${scrolled ? 'bg-white shadow-md' : 'bg-[#E2FDF8]'
                }`}
        >
            <Container className="!px-0">
                <nav className="mx-auto flex justify-between items-center py-3 px-4 sm:px-6 md:px-10 lg:px-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 md:ml-12">
                        <Image
                            src="/images/logo.png"
                            alt={siteDetails.siteName}
                            width={90}
                            height={65}
                            className="object-contain h-auto w-[80px] sm:w-[100px] md:w-[110px]"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground hover:text-foreground-accent transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="#cta"
                                className="text-white bg-[#F38500] hover:bg-primary-accent px-6 py-2 rounded-lg transition-colors"
                            >
                                Join Waitlist
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-[#F38500] text-white rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" />
                            ) : (
                                <HiBars3 className="h-6 w-6" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg w-full">
                    <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground hover:text-primary block text-lg"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="#cta"
                                className="text-white bg-[#F38500] hover:bg-primary-accent px-5 py-3 rounded-lg block w-full text-center text-lg"
                                onClick={toggleMenu}
                            >
                                Join Waitlist
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
