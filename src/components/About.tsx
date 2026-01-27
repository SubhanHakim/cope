import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpeg';

export const About = () => {
    return (
        <section id="about" className="relative py-24 bg-black overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[120px] rounded-full z-0" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Cult Leader Penguin"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Overlay gradient on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left space-y-8"
                    >
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase mb-4">
                                The Prophecy
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                BE A PART OF THE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                    AWAKENING
                                </span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                Hear these words, faithful flock. Through bull markets and frozen winters, our slide never falters.
                                While other tokens melt into the void, the <strong className="text-white">Cult of Penguin</strong> grows colder & bolder!
                            </p>
                            <p>
                                This isn't just a token — it's an <span className="text-cyan-300 italic">arctic awakening</span>!
                                A waddle revolution! A meme ascension!
                            </p>
                            <p>
                                Together, we're building the coolest spiritual experience in the entire cryptoverse.
                                No ice sheet is too thick, no dip is too deep. We slide together.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                                Read the Whitepaper
                            </button>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};
