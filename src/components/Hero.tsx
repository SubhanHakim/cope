import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import heroBg from '../assets/Whisk_df7b9c71332a66e941e41a8b7ee719cddr.png';

export const Hero = () => {
    const [copied, setCopied] = useState(false);
    const ca = "Ae2YjwotPv3uhNqaZKJAj1sBu53EKMTkB1Lgr5bJpump"; // Placeholder Contract Address

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">

                {/* Main Heading */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="mb-12 relative z-10 flex flex-col items-center justify-center -space-y-2 md:-space-y-6"
                >
                    <h1 className="text-[15vw] sm:text-8xl md:text-9xl font-display text-black font-black leading-none tracking-tighter">
                        CULT OF
                    </h1>
                    <h1 className="text-[17vw] sm:text-9xl md:text-[10rem] font-display text-[var(--color-ocean-blue)] font-black leading-none tracking-tighter">
                        PENGUIN
                    </h1>
                </motion.div>

                {/* Image Display - Large & Clear */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full max-w-4xl mx-auto -mt-10 z-0"
                >
                    <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                        <img
                            src={heroBg}
                            alt="Hero Penguin"
                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-6 rounded-2xl brutal-border brutal-shadow max-w-2xl mx-auto mt-8 rotate-1 transform hover:rotate-0 transition-transform duration-300"
                >
                    <p className="text-xl md:text-2xl font-bold text-black">
                        Welcome to the <span className="text-[var(--color-feet-orange)]">CULT</span>, anon! 🐧
                    </p>
                    <p className="text-lg text-gray-800 mt-2 font-medium">
                        Waddle your way to financial freedom. Or just slide on the ice. We don't judge.
                    </p>
                </motion.div>

                {/* Buttons & CA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex flex-col items-center gap-6"
                >
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="px-8 py-4 bg-[var(--color-feet-orange)] text-white font-display text-2xl tracking-wider rounded-xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all transform hover:rotate-2" onClick={() => window.open('https://x.com/i/communities/2016549842831712530', '_blank')}>
                            JOIN THE CULT
                        </button>
                        <button className="px-8 py-4 bg-[var(--color-beak-yellow)] text-black font-display text-2xl tracking-wider rounded-xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all transform hover:-rotate-2" onClick={() => window.open('https://pump.fun/coin/Ae2YjwotPv3uhNqaZKJAj1sBu53EKMTkB1Lgr5bJpump', '_blank')}>
                            BUY $COPE
                        </button>
                    </div>

                    {/* Contract Address Copy */}
                    <div
                        onClick={handleCopy}
                        className="group flex items-center gap-3 bg-white px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all cursor-pointer active:scale-95"
                    >
                        <span className="font-bold text-lg md:text-xl font-mono text-black">
                            CA: {ca}
                        </span>
                        <div className="bg-gray-100 p-2 rounded-lg border border-black group-hover:bg-[var(--color-ice-200)] transition-colors">
                            {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-black" />}
                        </div>
                    </div>
                    {copied && <span className="text-sm font-bold text-green-600 -mt-4 animate-bounce">COPIED!</span>}

                </motion.div>

            </div>
        </section>
    );
};
