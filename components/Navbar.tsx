"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "projects", "skills", "achievements", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about", id: "about" },
    { name: "Work", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Journey", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-bold tracking-tighter text-slate-50 group flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-brand-purple rounded-md">
              ARBAB
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue block group-hover:animate-pulse"></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-1 glass-card px-2 py-1 rounded-full">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-brand-purple ${
                    activeSection === link.id 
                      ? "text-white" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-white/10 rounded-full -z-10"></span>
                  )}
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a 
              href="/resume/Arbab_Ali_Resume_Under_500KB-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-sm font-medium hover:bg-brand-purple/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              Resume
            </a>
          </div>
          
          <div className="-mr-2 flex items-center gap-4 md:hidden">
            <a 
              href="/resume/Arbab_Ali_Resume_Under_500KB-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-medium hover:bg-brand-purple/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
              aria-label="Open main menu"
            >
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-white/5 glass-nav' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
