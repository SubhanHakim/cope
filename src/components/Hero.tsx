import { motion } from 'framer-motion';
import heroBg from '../assets/Whisk_df7b9c71332a66e941e41a8b7ee719cddr.png';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">

                {/* Floating Elements (Badge/Sticker) */}
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-0 right-0 md:right-20 hidden md:block"
                >
                    <div className="bg-[var(--color-beak-yellow)] text-black font-display text-2xl p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12">
                        NO GODS<br />JUST NOOT
                    </div>
                </motion.div>

                {/* Main Heading_ */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="mb-8 relative"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white text-stroke relative z-10">
                        CULTURE OF
                        <br />
                        <span className="text-[var(--color-ocean-blue)]">PENGUIN</span>
                    </h1>
                </motion.div>

                {/* Image Display - Sticker Style */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-64 h-64 md:w-96 md:h-96 my-[-20px] md:my-[-40px] z-0"
                >
                    <div className="absolute inset-0 bg-white rounded-full scale-105 border-4 border-black" />
                    <img
                        src={heroBg}
                        alt="Hero Penguin"
                        className="w-full h-full object-cover rounded-full border-4 border-black object-bottom relative z-10"
                    />
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

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row gap-6"
                >
                    <button className="px-8 py-4 bg-[var(--color-feet-orange)] text-white font-display text-2xl tracking-wider rounded-xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all transform hover:rotate-2">
                        JOIN THE CULT
                    </button>
                    <button className="px-8 py-4 bg-[var(--color-beak-yellow)] text-black font-display text-2xl tracking-wider rounded-xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all transform hover:-rotate-2">
                        BUY $COPE
                    </button>
                </motion.div>

            </div>
        </section>
    );
};
