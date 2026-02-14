import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                        <Rocket className="text-neutral-dark size-6" />
                    </div>
                    <span className="text-white text-xl font-bold tracking-tight font-display">E-Cell HMRITM</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">About</Link>
                    <Link to="/events" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Events</Link>
                    <Link to="/incubation" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Incubation Center</Link>
                    <Link to="/team" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Team</Link>
                    <Link to="/gallery" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Gallery</Link>
                    <Link to="/faq" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">FAQ</Link>
                    <Link to="/join" className="text-sm font-medium text-neutral-muted hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/join" className="hidden sm:block bg-primary text-neutral-dark px-6 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        Apply Now
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">About</Link>
                    <Link to="/events" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">Events</Link>
                    <Link to="/incubation" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">Incubation</Link>
                    <Link to="/team" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">Team</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">Gallery</Link>
                    <Link to="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium text-neutral-muted">FAQ</Link>
                    <Link to="/join" onClick={() => setIsOpen(false)} className="bg-primary text-neutral-dark text-center py-3 rounded-lg font-bold">
                        Apply Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
