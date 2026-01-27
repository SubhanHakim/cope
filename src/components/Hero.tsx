import { motion } from 'framer-motion';
import heroBg from '../assets/Whisk_df7b9c71332a66e941e41a8b7ee719cddr.png';


export const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - Clean uniform overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Hero Background"
                    className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-20">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
                            Culture Of
                        </span>
                        <span className="block">
                            Penguin
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto space-y-6 mb-12"
                >
                    <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed">
                        Welcome to the <span className="text-cyan-400 font-medium">Cult of Penguin</span>.
                    </p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
                        Get ready to ascend beyond mere mortal gains.
                        Converting normies into enlightened disciples, one meme at a time.
                    </p>
                </motion.div>

                {/* CTA Buttons - Clean & Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center"
                >
                    <button className="min-w-[160px] px-8 py-3.5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors duration-300">
                        Join the Cult
                    </button>
                    <button className="min-w-[160px] px-8 py-3.5 bg-transparent border border-white/30 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                        Buy Token
                    </button>
                </motion.div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};
