import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export const Skills = () => {
  const categories = [
    {
      title: "AI & Agents",
      skills: ["Python", "LangChain", "LangGraph", "RAG Systems", "AI Agents", "Computer Vision"],
      icon: "🧠"
    },
    {
      title: "Backend",
      skills: ["FastAPI", "PostgreSQL", "Redis", "REST APIs"],
      icon: "⚡"
    },
    {
      title: "Frontend",
      skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      icon: "✨"
    },
    {
      title: "Dev Tools",
      skills: ["Git", "GitHub", "Docker", "Linux"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">03 / Capabilities</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group h-full">
              <div className="text-3xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform origin-left">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-slate-100">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-slate-300 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const items = [
    {
      title: "3rd Rank — Jagran Youth Parliament 2026",
      organization: "CSJMU Kanpur",
      description: "Secured 3rd rank in a competitive parliamentary debate simulation.",
      highlight: true
    },
    {
      title: "Participant",
      organization: "HBTU Framework 1.0 Hackathon",
      description: "Competed in high-intensity coding and problem-solving hackathon.",
      highlight: false
    },
    {
      title: "Event Anchor & Public Speaker",
      organization: "College Events",
      description: "Anchored first-year college events, delivered speeches, and participated in college fest skits.",
      highlight: false
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">04 / Journey</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        
        {/* Adjusted spacing to compact the timeline on desktop */}
        <div className="space-y-6 md:space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {items.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030712] ${item.highlight ? 'bg-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-white/10'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors`}>
                <div className={`w-2 h-2 rounded-full ${item.highlight ? 'bg-white' : 'bg-slate-400'}`}></div>
              </div>
              
              {/* Mobile Timeline dot */}
              <div className={`md:hidden absolute left-5 -translate-x-1/2 mt-6 flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#030712] ${item.highlight ? 'bg-brand-purple' : 'bg-white/10'} shrink-0 z-10`}>
                <div className={`w-1.5 h-1.5 rounded-full ${item.highlight ? 'bg-white' : 'bg-slate-400'}`}></div>
              </div>
              
              <div className={`w-full pl-14 md:pl-0 md:w-[calc(50%-2.5rem)] py-2 transition-transform duration-300 md:hover:-translate-y-1`}>
                <div className={`glass-card p-5 md:p-6 rounded-2xl ${item.highlight ? 'border-brand-purple/30 bg-brand-purple/[0.02]' : ''}`}>
                  {item.highlight && <div className="text-[10px] font-bold text-brand-purple mb-2 uppercase tracking-widest">Key Milestone</div>}
                  <h3 className="font-bold text-base md:text-lg mb-1 text-slate-100">{item.title}</h3>
                  <time className="block text-xs md:text-sm text-slate-400 mb-2 md:mb-3 font-mono">{item.organization}</time>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-white/10"></div>
          <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">05 / Contact</span>
          <div className="w-12 h-px bg-white/10"></div>
        </div>
        <h2 className="clamp-h2 font-bold mb-6 text-slate-50">Let&apos;s Build Something <br/><span className="text-gradient">Meaningful.</span></h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto text-balance">
          I&apos;m always open to discussing new engineering challenges, creative ideas, or opportunities to architect intelligent systems together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:arbab2171217@gmail.com?subject=Portfolio%20Inquiry"
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-[#030712] font-bold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030712]"
          >
            <MailIcon className="w-5 h-5" /> Say Hello
          </a>
          <a 
            href="https://www.linkedin.com/in/arbab-ali-848b9a389/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl glass-card hover:bg-white/10 text-white font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          >
            <LinkedinIcon className="w-5 h-5" /> Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030712] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tighter text-slate-50 flex items-center gap-1">
          ARBAB<span className="text-brand-blue">.</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/ARBAB2171217" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/arbab-ali-848b9a389/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-600 text-sm font-mono">
          © {new Date().getFullYear()} Arbab Ali. Engineered with precision.
        </p>
      </div>
    </footer>
  );
};
