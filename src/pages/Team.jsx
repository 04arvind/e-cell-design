import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';

const Team = () => {
    const leadership = [
        { name: "Arvind Kumar", role: "President", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" },
        { name: "Priya Sharma", role: "Vice President", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" }
    ];

    const heads = [
        { name: "Rohan Vats", role: "Technical Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
        { name: "Sneha Rawat", role: "Events Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
        { name: "Aryan Singh", role: "Incubation Head", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" },
        { name: "Isha Gupta", role: "Marketing Head", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const TeamCard = ({ member, isLarge = false }) => (
        <motion.div
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-3xl bg-neutral-dark border border-white/5 hover:border-primary/50 transition-all duration-500 ${isLarge ? 'md:col-span-1' : ''}`}
        >
            <div className={`relative overflow-hidden ${isLarge ? 'h-96' : 'h-80'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Social Overlay */}
                <div className="absolute top-4 right-4 z-20 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 flex flex-col gap-2">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <a key={i} href="#" className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary hover:text-neutral-dark transition-all hover:scale-110">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                    <div className="flex items-end justify-between">
                        <h3 className={`font-black text-white font-display leading-tight ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
                            {member.name}
                        </h3>
                        <ArrowUpRight className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <Layout>
            <section className="pt-24 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider"
                    >
                        The Visionaries
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 font-display"
                    >
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Squad</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-muted text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        A collective of builders, dreamers, and executors driven by a single mission: to cultivate the next generation of unicorns from HMRITM.
                    </motion.p>
                </div>

                {/* Leadership Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Executive Leadership</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {leadership.map((member, i) => (
                            <TeamCard key={i} member={member} isLarge={true} />
                        ))}
                    </motion.div>
                </div>

                {/* Heads Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Core Team Leads</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {heads.map((member, i) => (
                            <TeamCard key={i} member={member} />
                        ))}
                    </motion.div>
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-12 rounded-3xl bg-white/5 border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6 font-display">Want to be part of the legacy?</h2>
                        <button className="bg-white text-neutral-dark px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors">
                            Join the Team
                        </button>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
};

export default Team;
