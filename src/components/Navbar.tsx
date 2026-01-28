import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'CULT', href: '#about' },
    { name: 'HOARD', href: '#tokenomics' },
    { name: 'MEMES', href: '#gallery' },
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
                        <button className="ml-4 bg-[var(--color-feet-orange)] text-white px-6 py-2 rounded-xl font-display text-xl tracking-wide brutal-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all">
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

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 md:hidden"
                    >
                        <div className="bg-white brutal-border brutal-shadow rounded-2xl p-4 flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl font-bold text-black hover:bg-[var(--color-beak-yellow)] text-center border-2 border-transparent hover:border-black transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full bg-[var(--color-feet-orange)] text-white px-6 py-3 rounded-xl font-display text-2xl brutal-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all mt-2">
                                BUY NOW
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
