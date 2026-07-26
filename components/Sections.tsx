import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ProjectImageLightbox } from "./ProjectImageLightbox";

export const Hero = () => {
  return (
    <section id="home" className="relative flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow"></span>
            <span className="text-xs font-medium text-slate-300">Building AI-powered systems</span>
          </div>
          
          <h1 className="clamp-h1 font-bold tracking-tighter mb-4 text-slate-50">
            Arbab <span className="text-gradient">Ali</span>
          </h1>
          <h2 className="clamp-h3 font-medium mb-6 text-slate-300">
            AI Developer • Full-Stack Builder
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed text-balance">
            I build intelligent systems, AI agents, and real-world software products that solve complex problems. Focused on creating secure and scalable applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="#projects"
              className="px-6 py-3 rounded-lg bg-brand-purple hover:bg-brand-purple/90 text-white font-medium transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030712]"
            >
              View Selected Work
            </Link>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/ARBAB2171217" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-card hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-purple" aria-label="GitHub Profile">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/arbab-ali-848b9a389/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-card hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-purple" aria-label="LinkedIn Profile">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* What I Build - Meaningful Technology Panel */}
        <div className="flex justify-center items-center animate-fade-in-up delay-200">
          <div className="w-full max-w-[420px] glass-card rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#030712]/80 backdrop-blur-xl">
            <div className="h-12 border-b border-white/5 flex items-center px-6 bg-white/[0.02]">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">What I Build</span>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col gap-8">
              {/* AI AGENTS */}
              <div className="group relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h5"/><path d="M16 12h5"/><path d="M12 3v5"/><path d="M12 16v5"/></svg>
                  </div>
                  <h3 className="font-bold text-slate-200 tracking-wide text-sm">AI AGENTS</h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-11">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-colors">LangChain</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-colors">LangGraph</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-colors">RAG</span>
                </div>
              </div>

              {/* BACKEND SYSTEMS */}
              <div className="group relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
                  </div>
                  <h3 className="font-bold text-slate-200 tracking-wide text-sm">BACKEND SYSTEMS</h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-11">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-colors">FastAPI</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-colors">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-medium group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-colors">Redis</span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>

              {/* CURRENTLY BUILDING */}
              <div className="relative group">
                <h3 className="font-bold text-slate-400 tracking-wide text-xs mb-3 uppercase">Currently Building</h3>
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[30px] -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-1 relative z-10">
                    <h4 className="font-bold text-slate-100 text-base">CyberShield AI</h4>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">Active Project</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 relative z-10">AI-Powered Cyber Fraud Intelligence Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  const cards = [
    { title: "AI Development", desc: "AI Agents & Systems", color: "text-brand-purple" },
    { title: "Backend Systems", desc: "FastAPI & Integration", color: "text-brand-blue" },
    { title: "Cybersecurity", desc: "AI Threat Intelligence", color: "text-emerald-400" },
    { title: "Communication", desc: "Public Speaking", color: "text-amber-400" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">01 / About</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="clamp-h2 font-bold mb-6 text-slate-50">Engineering <br/><span className="text-slate-400">Intelligence.</span></h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-balance">
              <p>
                I am a 2nd Year B.Tech Information Technology student at Dr. A.P.J. Abdul Kalam Technical University (2025–2029), deeply focused on artificial intelligence and backend infrastructure.
              </p>
              <p>
                My passion lies in building real-world projects—particularly AI agents and cybersecurity-oriented systems that process complex data into actionable intelligence. I believe in writing clean, deterministic code that scales gracefully.
              </p>
              <p>
                Beyond the terminal, I have a strong background in communication. Frequently anchoring college events and participating in public speaking allows me to bridge the gap between complex technical architecture and human-centric design.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white/[0.04] transition-colors group">
                <div className={`text-2xl mb-4 ${card.color}`}>●</div>
                <h4 className="font-bold text-slate-100 mb-1">{card.title}</h4>
                <p className="text-sm text-slate-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">02 / Selected Work</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* 1. Flagship Project - CyberShield AI */}
        <div className="glass-card rounded-3xl overflow-hidden border-brand-purple/20 mb-8 flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold tracking-widest uppercase mb-6 w-fit">
              Flagship Project
            </div>
            <h3 className="clamp-h2 font-bold mb-2">CyberShield AI</h3>
            <p className="text-brand-blue font-medium mb-4">AI-Powered Cyber Fraud Intelligence Platform</p>
            
            <p className="text-lg text-slate-400 mb-8 text-balance">
              An AI-powered cybersecurity intelligence platform for analyzing suspicious digital evidence, URLs, QR codes, screenshots, and potential cyber fraud through deterministic security checks and AI-assisted analysis.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Universal AI Scanner", "URL Intelligence", "QR Intelligence", "Screenshot Intelligence", "Cyber Fraud Analysis"].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a href="https://github.com/ARBAB2171217/cybersecurity_ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-purple">
                <GithubIcon className="w-4 h-4" /> View Code
              </a>
            </div>
          </div>

          <div className="bg-[#0a0f1c] relative min-h-[300px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-l border-white/5 flex items-center justify-center overflow-hidden p-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-blue/5"></div>
            
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center bg-black">
              <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5 z-10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <ProjectImageLightbox 
                src="/projects/cybershield/cybershield.png" 
                alt="CyberShield AI URL Threat Intelligence dashboard" 
                className="w-full h-full pt-6"
              />
            </div>
          </div>
        </div>

        {/* 2. Featured Project - SSBCoreAI */}
        <div className="glass-card rounded-3xl overflow-hidden border-brand-blue/20 mb-12 lg:mb-24 flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6 w-fit">
              Featured Project
            </div>
            <h3 className="clamp-h2 font-bold mb-2">SSBCoreAI</h3>
            <p className="text-emerald-400 font-medium mb-4">AI-powered SSB preparation platform</p>
            
            <p className="text-lg text-slate-400 mb-8 text-balance">
              An advanced AI agent platform designed specifically for SSB preparation workflows, utilizing intelligent guidance features.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Lecturette", "OIR", "PPDT", "Psychological Tests", "GTO preparation", "AI Interview", "AI-powered guidance"].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Python", "FastAPI", "LangGraph"].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0f1c] relative min-h-[300px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-l border-white/5 flex items-center justify-center overflow-hidden p-8">
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-emerald-500/5"></div>
            
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center bg-black">
              <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5 z-10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              {/* For tall images, object-top ensures the most important part is seen */}
              <ProjectImageLightbox 
                src="/projects/ssbcoreai/ssbcoreai.png" 
                alt="SSBCoreAI SSB preparation platform dashboard" 
                className="w-full h-full pt-6"
                imageClassName="object-top"
                objectPosition="top"
              />
            </div>
          </div>
        </div>

        {/* 3 & 4. Supporting Projects - No Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "District Info Agent",
              desc: "RAG-based system using custom data parsers for retrieving and analyzing district-level information.",
              tags: ["RAG", "FastAPI", "Python"],
            },
            {
              title: "Content Agents",
              desc: "AI agents for content generation, blog writing, and data processing using modern orchestration.",
              tags: ["LangChain", "Python", "AI Agents"],
            }
          ].map((proj, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300 p-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                <div className="w-4 h-4 rounded-full bg-brand-blue/50 blur-[2px]"></div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-100">{proj.title}</h4>
              <p className="text-sm text-slate-400 mb-8 flex-1 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/5 rounded-md text-slate-300">
                    {tag}
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
