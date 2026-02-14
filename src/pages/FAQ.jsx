import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Layout from '../components/Layout';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>{question}</span>
                <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-primary text-neutral-dark' : 'bg-white/5 text-neutral-muted group-hover:bg-white/10'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-neutral-muted leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: "What is E-Cell HMRITM?", answer: "E-Cell HMRITM is the Entrepreneurship Cell of HMR Institute of Technology and Management, dedicated to fostering a startup culture among students." },
        { question: "How can I join the core team?", answer: "We open recruitment for the core team annually. Keep an eye on our Join Us page and social media for application announcements." },
        { question: "Do I need a startup idea to join events?", answer: "Not at all! Many of our events are designed to help you brainstorm and discover ideas from scratch." },
        { question: "What support does the Incubation Center provide?", answer: "We provide mentorship, technical support, legal assistance, and direct connections to a network of 50+ investors." },
        { question: "Can students from other colleges participate?", answer: "Yes, our flagship events like the E-Summit are open to students from all universities across India." }
    ];

    return (
        <Layout>
            <section className="py-24 px-6 lg:px-20 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-6">
                        <HelpCircle size={32} />
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 font-display uppercase tracking-tight">Frequently Asked <span className="text-primary">Questions</span></h1>
                    <p className="text-neutral-muted text-lg">Everything you need to know about the entrepreneurship ecosystem at HMRITM.</p>
                </div>

                <div className="glass-card p-8 border-white/5">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-neutral-muted">Still have questions?</p>
                    <a href="/join" className="text-primary font-bold hover:underline">Contact our support team</a>
                </div>
            </section>
        </Layout>
    );
};

export default FAQ;
