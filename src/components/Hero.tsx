import { motion } from 'framer-motion';
import heroBg from '../assets/Whisk_df7b9c71332a66e941e41a8b7ee719cddr.png';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">



                {/* Main Heading_ */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="mb-12 relative z-10 flex flex-col items-center gap-2"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-black font-black leading-none tracking-tight">
                        CULTURE OF
                    </h1>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-[var(--color-ocean-blue)] font-black leading-none tracking-tight mt-4 md:mt-2">
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
                        Welcome to the <span className="text-[var(--color-feet-orange)]">CULT</span>, anon!
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
