import { motion } from 'framer-motion';

// Formatting imports for files with spaces/special characters
import img1 from '../assets/gallery/ChatGPT Image Jan 28, 2026, 12_15_05 AM.png';
import img2 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.34.59 (3).jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.35.00.jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-01-27 at 23.44.41.jpeg';

const images = [
    { src: img1, alt: 'Cosmic Prophet', caption: 'ORACLE NOOT' },
    { src: img2, alt: 'Vibe Check', caption: 'VIBE CHECK' },
    { src: img3, alt: 'Ascension', caption: 'MOON SOON' },
    { src: img4, alt: 'Community', caption: 'GANG SHIT' },
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[var(--color-beak-yellow)] relative overflow-hidden border-y-4 border-black">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-8xl font-display text-white text-stroke transform -rotate-2 inline-block">
                        HALL OF MEMES
                    </h2>
                    <div className="bg-white border-2 border-black p-2 inline-block rounded-lg transform rotate-2 mt-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-xl font-bold font-body">Warning: May Cause Uncontrollable Honking</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`group bg-white p-3 pb-12 brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
                        >
                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-black shadow-sm z-20" />

                            <div className="aspect-square overflow-hidden border-2 border-black bg-gray-100">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <p className="mt-4 text-center font-display text-2xl text-black">
                                {img.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
