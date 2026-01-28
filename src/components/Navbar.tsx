import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'CULT', href: '#about' },
    { name: 'TOKENOMICS', href: '#tokenomics' },
    { name: 'GALLERY', href: '#gallery' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white brutal-border brutal-shadow rounded-2xl px-4 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <motion.img
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            src={logo}
                            alt="Logo"
                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                        />
                        <span className="text-2xl sm:text-3xl font-display text-black tracking-wider hidden sm:block transform group-hover:scale-110 transition-transform">
                            COPE
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-xl font-bold text-black hover:bg-[var(--color-beak-yellow)] hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-black"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-3 ml-4 border-l-2 border-black pl-4">
                            <a
                                href="https://x.com/i/communities/2016549842831712530"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[var(--color-ice-200)] rounded-lg border-2 border-black hover:-translate-y-1 transition-transform"
                            >
                                {/* X / Twitter Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                        </div>
                        <button className="ml-4 bg-[var(--color-feet-orange)] text-white px-6 py-2 rounded-xl font-display text-xl tracking-wide brutal-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all" onClick={() => window.open('https://pump.fun/coin/Ae2YjwotPv3uhNqaZKJAj1sBu53EKMTkB1Lgr5bJpump', '_blank')}>
                            BUY NOW
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
                        >
                            {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="absolute top-[80px] left-4 right-4 md:hidden z-50 origin-top"
                        >
                            <div className="bg-white brutal-border rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="p-2 space-y-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-6 py-4 rounded-xl font-display text-xl text-black hover:bg-[var(--color-beak-yellow)] text-center transition-colors active:scale-95"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="p-4 border-t-2 border-black bg-gray-50">
                                    <button className="w-full bg-[var(--color-feet-orange)] text-white px-6 py-4 rounded-xl font-display text-2xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all">
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
