import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Gallery = () => {
    const photos = [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    ];

    return (
        <Layout>
            <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 font-display uppercase tracking-tight">Our <span className="text-primary">Ecosystem</span> in Action</h1>
                    <p className="text-neutral-muted text-lg max-w-2xl mx-auto">Capturing the energy, innovation, and leadership at E-Cell HMRITM events.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((url, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden group border border-white/5"
                        >
                            <img src={`${url}?auto=format&fit=crop&w=800&q=80`} alt="Event" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <span className="bg-white text-neutral-dark px-4 py-2 rounded-lg font-bold">View Moments</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
