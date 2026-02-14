import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Globe, Cpu, BarChart3, Users, Handshake, CheckCircle2, Lightbulb } from 'lucide-react';
import Layout from '../components/Layout';

const Incubation = () => {
    return (
        <Layout>
            <section className="pt-20 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-8 font-display"
                    >
                        Nurturing <span className="hero-gradient">The Next Big Idea</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        Our incubation center is a high-octane ecosystem where visionary student founders get the tools, capital, and mentorship to build venture-backed startups.
                    </motion.p>
                </div>

                {/* Incubation Program Roadmap */}
                <div className="mb-32 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4 font-display">Incubation Program '24</h2>
                        <p className="text-neutral-muted text-lg max-w-2xl mx-auto">
                            A 12-week intensive journey designed to transform high-potential concepts into venture-backed businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { title: "Discovery", desc: "Problem identification and market validation workshops.", icon: <Rocket /> },
                            { title: "Build (MVP)", desc: "Rapid prototyping with tech stack support and expert UI/UX labs.", icon: <Cpu /> },
                            { title: "Mentorship", desc: "Weekly 1:1 sessions with industry leaders and alumni founders.", icon: <Users /> },
                            { title: "Pitch Day", desc: "Present your venture to a panel of Angel Investors & VCs.", icon: <BarChart3 /> }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group relative">
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-neutral-dark transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-white">{step.title}</h3>
                                <p className="text-neutral-muted text-sm px-4">{step.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Portfolio Startups */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-white font-display">Portfolio Startups</h2>
                            <p className="text-neutral-muted">The next generation of industry giants being built at HMRITM.</p>
                        </div>
                        <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                            View All Portfolio <Globe size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "NeuralPath AI",
                                tag: "EdTech",
                                desc: "Revolutionizing student learning paths through real-time emotional and cognitive AI analytics.",
                                stage: "Pre-seed stage",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwezMfy5YE-vYXWruz_kA7Wxpu3fTAU2mU47C_fLWun6bhfbDrNbFi0OXBabfzaMn14WLOupJRHI-f4gH9vR8z428nWjEk9dhedRh-LF3aEcVcYmbuUeWeonDPcZzRfHSqKDpWcBG5M1zc7gW51WndX-KYkZlOopQ61iZx4sek1MBPZS465W8rX6ju7tyNx8xRkdOhDY4cyKvaljokrWDU2R10L40KBkWOmBE2GycUnDUf42SQOJoLiMzmv0x3AH2TT-GGjRiOrgg"
                            },
                            {
                                name: "EcoStream",
                                tag: "Sustainability",
                                desc: "IoT-enabled water management systems for residential complexes to reduce waste by 40%.",
                                stage: "Seed Round",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArwsyOaJJMlfQhzdpbmZ5dPAysX9N1LuplILhyI9qMxZQCc_8rkRudFuGAUu9qX7GCAgsjh0n3Foz_GyLENlQL1514KJOWCnBu7WXX1DKh-FpHJXjxLHbfbPAjwHaJmL_ns_faDkhPoJRVZ7C8YV4fom8WP2P0ZOHkLnfeiMNWxOB-qD9xwqWakl4UPvGT2ctncXEIp4EopBMG-F4Mx18Tqv7k6AJaHsNOAX_rTt_pjH112miJvIHrOQ9S_lxQhx3pnHMzYTAuZV0"
                            },
                            {
                                name: "SwiftPay",
                                tag: "FinTech",
                                desc: "Unified micro-transaction protocol for campus economies and student-run businesses.",
                                stage: "Incubating",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8-2jWlHGy4k42zFRX2Ml4xP1VpTZEA99NYxAIQhQBX5NrGrtc0hc94X6iffv9J8I18DwxO8Kem_5Mphrc-Wvq7l4cMNpVJEd0dl_ZZIoy2khSegJQswfhzQXlsOopZNCsEIZoIs6-FtS0Zgv0_NJCTS5fjE6998o_kZmgerod1UfFusLzlBEXT4oIbTrYsQMRaiobGyHFf5-iNrhjdwnOOfJiLeZvPL5AxyUJS1QZVOXF_SFiNbF4AAk1uLT8-Y7G37UdEGncLo"
                            }
                        ].map((startup, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="glass-card p-8 rounded-2xl border-white/5 group hover:border-primary/50 transition-all"
                            >
                                <div className="w-16 h-16 bg-white rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src={startup.img} alt={startup.name} />
                                </div>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{startup.name}</h3>
                                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-neutral-muted font-bold uppercase tracking-tight">{startup.tag}</span>
                                </div>
                                <p className="text-neutral-muted text-sm leading-relaxed mb-6">{startup.desc}</p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 border border-neutral-dark"></div>
                                        <div className="w-6 h-6 rounded-full bg-primary/40 border border-neutral-dark"></div>
                                    </div>
                                    <span className="text-xs font-medium text-white">{startup.stage}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mentorship & Funding */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Mentorship */}
                    <div className="glass-card p-10 rounded-3xl border-white/5 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-8">
                                <Users className="text-neutral-dark" size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4 font-display">Elite Mentorship</h2>
                            <p className="text-neutral-muted text-lg mb-8">
                                Get direct access to founders who have scaled startups to $100M+ and industry veterans from Google, Amazon, and Microsoft.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Direct Office Hours (Weekly)",
                                    "Alumni Network Connections",
                                    "Technical & Legal Advisory"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                                        <span className="font-medium text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-4 border-2 border-primary text-white font-bold rounded-xl hover:bg-primary hover:text-neutral-dark transition-all">
                            Browse Mentor Directory
                        </button>
                    </div>

                    {/* Funding */}
                    <div className="bg-primary p-10 rounded-3xl flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-dark rounded-2xl mb-8">
                                <Zap className="text-primary" size={32} />
                            </div>
                            <h2 className="text-3xl font-black mb-4 text-neutral-dark font-display">Venture Capital & Grants</h2>
                            <p className="text-neutral-dark/80 text-lg mb-8">
                                We provide initial capital to get you off the ground and connect you with a network of Angel Investors and VCs.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                                    <h4 className="text-2xl font-black text-neutral-dark">₹10L</h4>
                                    <p className="text-xs font-bold uppercase text-neutral-dark/60 tracking-wider">Avg. Pre-seed</p>
                                </div>
                                <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm">
                                    <h4 className="text-2xl font-black text-neutral-dark">50+</h4>
                                    <p className="text-xs font-bold uppercase text-neutral-dark/60 tracking-wider">Investor Network</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-neutral-dark text-white font-bold rounded-xl hover:bg-neutral-dark/90 transition-all">
                            View Funding Opportunities
                        </button>
                    </div>
                </div>

                {/* Final Call to Action */}
                <div className="relative rounded-3xl overflow-hidden py-24 px-8 text-center bg-white/5 border border-white/5">
                    <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display">Ready to build the future of India?</h2>
                        <p className="text-neutral-muted text-lg">
                            Whether it's a rough sketch or a functional prototype, your journey starts here. Join E-Cell HMRITM today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-primary text-neutral-dark px-12 py-5 rounded-2xl font-black text-xl shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                                Get Started Now
                            </button>
                            <button className="bg-transparent border border-white/10 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white hover:text-neutral-dark transition-all">
                                Talk to an Expert
                            </button>
                        </div>
                        <div className="pt-8">
                            <p className="text-sm font-medium text-neutral-muted flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-xs">Applications for Fall Cohort close in 14 days</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Incubation;
