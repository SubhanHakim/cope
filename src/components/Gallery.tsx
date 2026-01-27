import { motion } from 'framer-motion';

// Formatting imports for files with spaces/special characters
import img1 from '../assets/gallery/ChatGPT Image Jan 28, 2026, 12_15_05 AM.png';
import img2 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.34.59 (3).jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.35.00.jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.44.41.jpeg';

const images = [
    { src: img1, alt: 'Cosmic Prophet', caption: 'The Oracle Speaks' },
    { src: img2, alt: 'Vibe Check', caption: 'Vibe Check: PASSED' },
    { src: img3, alt: 'Ascension', caption: 'Ascending to the Moon' },
    { src: img4, alt: 'Community', caption: 'Penguin Gang Strong' },
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
                        Hall of Memes
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Witness the historical archives of the Cult.
                        These are not just JPEGs, they are holy scriptures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                            className="group relative rounded-xl overflow-hidden border-2 border-white/5 hover:border-[var(--color-neon-blue)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-white/5">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
