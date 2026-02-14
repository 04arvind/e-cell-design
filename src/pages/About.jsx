import React from 'react';
import { motion } from 'framer-motion';
import {
    Eye,
    Rocket,
    Lightbulb,
    Users,
    ShieldCheck,
    Mail,
    Share2,
    Link,
    AtSign,
    MapPin,
    ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center lg:text-left"
                        >

                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-white font-display">
                                Empowering the Next Generation of <span className="text-primary">Innovators</span>
                            </h1>
                            <p className="text-lg text-neutral-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                E-Cell HMRITM is a vibrant community dedicated to fostering an entrepreneurial spirit, bridging the gap between classroom learning and industry-ready leadership.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full max-w-xl"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-navy-dark">
                                <img
                                    alt="Students Collaborating"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <p className="text-2xl font-bold font-display">Innovation Hub</p>
                                        <p className="text-sm opacity-80">Where ideas find their path to reality.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-neutral-dark/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-8">
                                    <img
                                        className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                                        alt="Workshop"
                                    />
                                    <img
                                        className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                        alt="Meeting"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <img
                                        className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                                        alt="Presentation"
                                    />
                                    <img
                                        className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80"
                                        alt="Auditorium"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white font-display">
                                <span className="w-12 h-1 bg-primary"></span> Our Story
                            </h2>
                            <div className="prose prose-lg dark:prose-invert">
                                <p className="text-neutral-muted mb-4">
                                    Founded with the vision to bridge the gap between innovation and industry, E-Cell HMRITM has grown from a small student initiative into a thriving ecosystem. Over the years, we have nurtured countless student-led startups and hosted premier summits.
                                </p>
                                <p className="text-neutral-muted">
                                    Our journey began with a handful of passionate students and faculty members who believed that every engineer has the potential to be a creator. Today, we stand as a cornerstone of the HMR Institute of Technology and Management, providing the tools, mentorship, and network required for students to transform their boldest ideas into sustainable business ventures.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-neutral-dark p-10 rounded-2xl shadow-xl border-t-4 border-primary hover:shadow-2xl transition-shadow"
                        >
                            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-navy-dark dark:text-white font-display">Our Vision</h3>
                            <p className="text-gray-600 dark:text-neutral-muted leading-relaxed">
                                To be a premier hub of entrepreneurship that inspires students to lead with innovation and integrity, creating a ripple effect of socio-economic progress through technology-driven solutions.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-navy-dark text-white p-10 rounded-2xl shadow-xl border-t-4 border-primary hover:shadow-2xl transition-shadow"
                        >
                            <div className="size-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                <Rocket className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To provide a robust platform of resources, mentorship, and networking opportunities that empower students to build sustainable ventures, fostering an environment where failure is a lesson and innovation is a way of life.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-white font-display">Our Core Values</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { icon: <Lightbulb />, title: "Innovation", desc: "Pushing the boundaries of technology and business to solve real-world problems." },
                            { icon: <Users />, title: "Collaboration", desc: "Believing in the power of collective intelligence and building strong ecosystems." },
                            { icon: <ShieldCheck />, title: "Integrity", desc: "Upholding the highest ethical standards in all entrepreneurial endeavors." }
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="size-20 bg-white dark:bg-neutral-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-primary/20 transition-transform group-hover:scale-110">
                                    <div className="text-primary">
                                        {React.cloneElement(item.icon, { size: 36 })}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-white font-display">{item.title}</h4>
                                <p className="text-neutral-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section className="py-20 bg-white dark:bg-neutral-dark/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-16 text-center text-white font-display">Our Milestones</h2>
                    <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between">
                        {[
                            { year: "2018", title: "The Foundation", desc: "E-Cell HMRITM was officially inaugurated with 20 core members." },
                            { year: "2020", title: "First E-Summit", desc: "Hosted our flagship event with 500+ participants and industry experts." },
                            { year: "2022", title: "Incubation Launch", desc: "Established the pre-incubation center to support campus startups." },
                            { year: "Present", title: "Thriving Community", desc: "Empowering 1000+ students annually with entrepreneurial programs." }
                        ].map((milestone, i) => (
                            <div key={i} className="mb-12 md:mb-0 relative md:w-1/4 px-6">
                                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-0 size-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(244,157,37,0.2)]"></div>
                                <div className="md:text-center mt-6">
                                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                                    <h4 className="text-lg font-bold mt-2 text-white font-display">{milestone.title}</h4>
                                    <p className="text-sm text-neutral-muted mt-2">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20 bg-background-light dark:bg-background-dark/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white font-display">Meet the Visionaries</h2>
                        <p className="text-neutral-muted">The dedicated team driving the entrepreneurial revolution at HMRITM.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Dr. Rajesh Khanna", role: "Faculty Advisor", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
                            { name: "Ananya Sharma", role: "Student President", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
                            { name: "Vikram Singh", role: "Vice President", img: "https://i.pravatar.cc/150?u=a04258114e29026302d" },
                            { name: "Rohan Gupta", role: "Technical Head", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d2" }
                        ].map((member, i) => (
                            <div key={i} className="bg-white dark:bg-neutral-dark p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/20 transition-all text-center group">
                                <div className="relative mb-6 inline-block">
                                    <div className="size-32 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/40 transition-colors mx-auto">
                                        <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-navy-dark dark:text-white font-display">{member.name}</h4>
                                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                                <div className="flex justify-center gap-3">
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Share2 size={20} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/90"></div>
                <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 size-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-black text-white mb-6 font-display">Ready to Start Your Entrepreneurial Journey?</h2>
                    <p className="text-lg text-white/90 mb-10 leading-relaxed">
                        Join E-Cell HMRITM today and get access to exclusive workshops, industry mentorship, and a network of like-minded innovators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary hover:bg-navy-dark hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl">
                            Become a Member
                        </button>
                        <button className="bg-navy-dark text-white hover:bg-white hover:text-navy-dark px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
