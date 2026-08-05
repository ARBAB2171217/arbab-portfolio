import React from "react";
import { MailIcon, LinkedinIcon, GithubIcon } from "./Icons";

export const Skills = () => {
  const categories = [
    {
      title: "Core Programming",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
      icon: "💻"
    },
    {
      title: "AI & Data",
      skills: ["LangChain", "LangGraph", "RAG Systems", "Vector Databases", "Prompt Engineering"],
      icon: "🧠"
    },
    {
      title: "Backend & Cloud",
      skills: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
      icon: "☁️"
    },
    {
      title: "Dev Tools",
      skills: ["Git", "GitHub", "Docker", "Linux"],
      icon: "🛠️"
    }
  ];

  const exploring = [
    "Agentic AI",
    "LangGraph Workflows",
    "RAG Systems",
    "Computer Vision"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">03 / Expertise</span>
              <div className="h-px bg-white/10 w-24"></div>
            </div>
            <h3 className="clamp-h2 font-bold text-slate-50 leading-tight">Technical <br/><span className="text-slate-400">Arsenal.</span></h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="text-3xl mb-6 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all">{cat.icon}</div>
              <h4 className="text-lg font-bold text-slate-200 mb-4">{cat.title}</h4>
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
        
        <div className="mt-16">
          <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-6 text-center">Currently Exploring</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {exploring.map((item, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-xs font-medium text-slate-300 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Achievements = () => {
  const timeline = [
    {
      year: "2026",
      title: "3rd Rank, Jagran Youth Parliament",
      org: "AITD",
      desc: "Recognized for exceptional public speaking and debate skills at the university level."
    },
    {
      year: "Ongoing",
      title: "Event Anchor & Speaker",
      org: "University & Tech Communities",
      desc: "Regularly anchoring major events and participating in technical discourse."
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">04 / Journey</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <div className="max-w-3xl">
          <h3 className="clamp-h2 font-bold mb-16 text-slate-50">Milestones & <br/><span className="text-slate-400">Recognition.</span></h3>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#030712] text-brand-purple shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-brand-purple group-hover:scale-150 transition-transform"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-card border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-slate-200">{item.title}</h4>
                  </div>
                  <div className="text-brand-purple text-sm font-bold mb-3">{item.org} <span className="text-slate-500 font-normal ml-2">{item.year}</span></div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-slate-50">
          Let&apos;s Build Something <br/>
          <span className="text-gradient">Meaningful.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I am currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:arbab2171217@gmail.com?subject=Portfolio%20Inquiry"
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-[#030712] font-bold transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030712]"
          >
            <MailIcon className="w-5 h-5" /> Say Hello
          </a>
          <a 
            href="https://www.linkedin.com/in/arbab-ali-848b9a389/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl glass-card hover:bg-white/10 text-white font-medium transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-purple"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="text-xl font-bold tracking-tighter text-slate-50 flex items-center gap-1">
            ARBAB<span className="text-brand-purple">.</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="text-2xl text-brand-purple font-signature opacity-60 transform -rotate-2">
            Arbab Ali
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/ARBAB2171217" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/arbab-ali-848b9a389/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10"></div>
          <p className="text-slate-600 text-sm font-mono">
            © {new Date().getFullYear()} Arbab Ali
          </p>
        </div>
      </div>
    </footer>
  );
};
