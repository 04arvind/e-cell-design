import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, CircleDollarSign, CalendarCheck, Users, Rocket, Code, Palette, Megaphone, Settings, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight font-display"
                        >
                            <span className="hero-gradient">Think. Build. Scale.</span>
                            <br />
                            <span className="text-white">Join the revolution.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-neutral-muted max-w-lg leading-relaxed"
                        >
                            Empowering student entrepreneurs at HMR Institute of Technology & Management to Innovate, Lead, and Scale. We provide the platform for your ideas to take flight.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-neutral-dark font-bold h-14 px-8 rounded-xl transition-all shadow-xl shadow-primary/25">
                                Join the Movement
                                <ArrowRight size={20} />
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white font-bold h-14 px-8 rounded-xl transition-all">
                                View Initiatives
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-neutral-muted/30 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative glass-card p-6 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-4">
                            <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-neutral-dark">
                                <img
                                    className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                                    alt="Startup workspace"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-dark bg-neutral-dark flex items-center justify-center overflow-hidden">
                                            <img className="w-full h-full object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Founder" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-neutral-dark bg-primary flex items-center justify-center text-[10px] font-bold text-neutral-dark">
                                        +50
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-neutral-muted font-medium uppercase tracking-wider">Community Size</p>
                                    <p className="text-sm font-bold text-white">5000+ Students</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-32 h-32 glass-card rounded-2xl p-4 hidden md:flex flex-col items-center justify-center text-center shadow-2xl">
                            <span className="text-primary font-black text-2xl tracking-tighter">95%</span>
                            <span className="text-[10px] text-neutral-muted font-bold leading-tight uppercase">Success Rate</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Impact Metrics Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <CalendarCheck className="text-primary" />, value: "40+", label: "Events" },
                        { icon: <Rocket className="text-primary" />, value: "80+", label: "Awards" },
                        { icon: <Briefcase className="text-primary" />, value: "25+", label: "Internships" },
                        { icon: <Users className="text-primary" />, value: "10000+", label: "Students Impacted" },
                    ].map((metric, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 text-center group hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-neutral-dark transition-colors duration-300">
                                {metric.icon}
                            </div>
                            <h3 className="text-4xl font-black mb-2 font-display">{metric.value}</h3>
                            <p className="text-neutral-muted font-medium uppercase tracking-wider text-xs">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

{/* Our Domains Section */}
            <section className="py-24 px-6 bg-neutral-dark/50 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our <span className="text-primary">Domains</span></h2>
                        <p className="text-neutral-muted text-lg max-w-2xl mx-auto">
                            Specialized teams driving innovation across multiple verticals. Where expertise meets execution.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Technical", desc: "Building the digital infrastructure.", icon: Code },
                            { title: "Corporate", desc: "Bridging the gap between campus and industry.", icon: Briefcase },
                            { title: "Creatives", desc: "Crafting the visual identity of innovation.", icon: Palette },
                            { title: "Marketing", desc: "Amplifying our voice to the world.", icon: Megaphone },
                            { title: "Operations", desc: "Executing events with military precision.", icon: Settings },
                            { title: "Social", desc: "Driving impact beyond the campus walls.", icon: Globe }
                        ].map((domain, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                whileHover={{ y: -15, scale: 1.02, rotateX: 10, rotateY: 10, boxShadow: "0 25px 50px -12px rgba(13, 242, 204, 0.25)" }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: i * 0.15,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                }}
                                className="glass-card p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden cursor-pointer"
                            >
                                <motion.div 
                                    className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"
                                    whileHover={{ scale: 1.5, opacity: 1 }}
                                />
                                <motion.div 
                                    className="w-16 h-16 bg-neutral-dark rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary/50 relative z-10"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <domain.icon className="text-primary" size={32} />
                                </motion.div>
                                <motion.h3 
                                    className="text-2xl font-bold mb-3 font-display text-white group-hover:text-primary transition-colors relative z-10"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {domain.title}
                                </motion.h3>
                                <p className="text-neutral-muted text-sm leading-relaxed relative z-10">{domain.desc}</p>
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full"
                                    whileHover={{ translateX: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiative Preview */}
            <section className="py-24 px-6 border-t border-white/5 bg-neutral-dark/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">Empowering the Ecosystem</h2>
                            <p className="text-neutral-muted text-lg leading-relaxed">
                                From initial ideation to high-stakes investor pitches, we support every phase of the entrepreneurial journey within HMRITM.
                            </p>
                        </div>
                        <a href="#" className="text-primary font-bold inline-flex items-center gap-2 group underline-offset-4 hover:underline">
                            Explore All Initiatives
                            <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Hatchery", desc: "6-month structured incubation program.", img: "lab" },
                            { title: "Pitch Perfect", desc: "Monthly mock pitching sessions with experts.", img: "business" },
                            { title: "E-Summit", desc: "Annual flagship entrepreneurship convention.", img: "tech" }
                        ].map((item, i) => (
                            <div key={i} className="relative overflow-hidden rounded-2xl group aspect-[4/5]">
                                <img
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    src={`https://images.unsplash.com/photo-${i === 0 ? '1531482615713-2afd69097998' : i === 1 ? '1531482615713-2afd69097998' : '1531482615713-2afd69097998'}?auto=format&fit=crop&w=800&q=80`}
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-2xl font-bold mb-2 font-display">{item.title}</h4>
                                    <p className="text-neutral-muted text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Marquee */}
            <section className="py-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">What People <span className="text-primary">Say</span></h2>
                </div>

                <div className="flex gap-8 w-max animate-marquee">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8">
                            {[
                                { name: "Rohan Gupta", role: "Alumni, Google", quote: "E-Cell gave me the leadership skills I use every day." },
                                { name: "Sarah Khan", role: "Founder, TechNova", quote: "The incubation support was critical for our seed round." },
                                { name: "Amit Verma", role: "SDE, Amazon", quote: "Best place to network with like-minded innovators." },
                                { name: "Priya Singh", role: "Product Lead, Cred", quote: "HMRITM E-Cell is where my journey truly began." }
                            ].map((testimonial, j) => (
                                <div key={j} className="glass-card p-8 rounded-2xl w-96 shrink-0 border border-white/5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-neutral-dark rounded-full border border-white/10"></div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                            <p className="text-primary text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-neutral-muted italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative glass-card rounded-[2.5rem] p-12 overflow-hidden text-center border-primary/20"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] -ml-32 -mb-32"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black max-w-3xl mx-auto leading-tight font-display">
                                Your Entrepreneurial Journey <span className="text-primary">Starts Here.</span>
                            </h2>
                            <p className="text-neutral-muted text-lg max-w-xl mx-auto">
                                Don't wait for the right moment. Create it. Join HMRITM's premier startup ecosystem today.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-primary hover:bg-primary/90 text-neutral-dark font-bold h-14 px-12 rounded-xl transition-all shadow-xl shadow-primary/25">
                                    Apply Now Today
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
