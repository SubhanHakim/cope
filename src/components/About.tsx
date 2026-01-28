import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpeg';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Side - Polaroid Style */}
                    <motion.div
                        initial={{ rotate: -5, opacity: 0 }}
                        whileInView={{ rotate: -3, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="relative bg-white p-4 pb-16 brutal-border brutal-shadow"
                    >
                        <div className="overflow-hidden border-2 border-black">
                            <img
                                src={aboutImg}
                                alt="Cult Leader Penguin"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="absolute bottom-4 left-0 right-0 text-center font-display text-3xl text-black -rotate-2">
                            THE PROPHECY
                        </p>
                        {/* Tape Effect */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-gray-200/80 rotate-2 shadow-sm" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                        className="space-y-6"
                    >
                        <div className="bg-[var(--color-ocean-blue)] text-white p-6 rounded-2xl brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h2 className="text-5xl md:text-7xl font-display mb-4 leading-[1.1] font-black">
                                THE AWAKENING
                            </h2>
                            <p className="text-xl font-bold font-body">
                                "NOOT NOOT!" - <span className="italic opacity-80">Ancient Scriptures</span>
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl brutal-border brutal-shadow space-y-6 text-xl font-bold text-black leading-relaxed">
                            <p>
                                Cult Of Penguin was born deep in the trenches not by accident, but by sheer inevitability. When the trenches flooded with penguins, something had to happen.
                            </p>
                            <p>
                                At first, they were just memes. Then they multiplied. Soon, the trenches were no longer ruled by humans, charts, or logic but by penguins.
                            </p>
                            <p>
                                From this chaos, Cult Of Penguin emerged. A movement formed by trenchers who embraced the cold, the madness, and the collective belief that penguins run the trenches now.
                            </p>
                            <p className="font-bold text-[var(--color-ocean-blue)]">
                                This is not just another coin. It’s a cult. If you’re still in the trenches, you’re already one of us.
                            </p>
                            <p className="text-2xl font-black text-[var(--color-feet-orange)] uppercase tracking-wide">
                                Welcome to the Cult Of Penguin.
                            </p>
                        </div>

                        <button className="w-full md:w-auto px-8 py-3 bg-[var(--color-beak-yellow)] text-black border-2 border-black rounded-xl font-bold text-xl hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                            JOIN COMMUNITY
                        </button>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};
