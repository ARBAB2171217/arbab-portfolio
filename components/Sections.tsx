import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { ProjectImageLightbox } from "./ProjectImageLightbox";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern min-h-[90vh] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>
      
      {/* Portrait integration with mask */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] h-full lg:w-[50%] lg:right-0 z-0 pointer-events-none overflow-hidden opacity-30 md:opacity-50 lg:opacity-100 flex items-end md:items-center justify-end">
        <div className="relative w-full h-[90vh] min-h-[600px]">
          <div 
            className="absolute inset-0 bg-no-repeat bg-right-bottom md:bg-right-bottom"
            style={{ 
              backgroundImage: "url('/portrait.jpg')", 
              backgroundSize: "contain",
              maskImage: "linear-gradient(to top, transparent 5%, black 40%, black 80%, transparent 100%), linear-gradient(to right, transparent 5%, black 40%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 30%, black 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect"
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-10 mt-8">
            <div className="w-8 h-0.5 bg-brand-purple/80"></div>
            <span className="text-xs font-bold tracking-[0.15em] text-brand-purple uppercase">AI & Backend Developer</span>
          </div>
          
          <h1 className="text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-black tracking-tight mb-2 text-white leading-[0.9]">
            ARBAB <br/> <span className="text-gradient">ALI</span>
          </h1>
          
          <div className="relative inline-block mb-10">
            <div className="text-5xl md:text-6xl lg:text-7xl text-brand-purple font-signature opacity-80 -rotate-3 pl-4">
              Arbab Ali
            </div>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-purple/40 -rotate-2" preserveAspectRatio="none" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M0 10 Q 50 20 100 5"></path></svg>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-slate-200 max-w-2xl leading-tight text-balance">
            Building <span className="text-brand-purple">intelligent systems</span> <br/>
            for real-world problems.
          </h2>
          
          <p className="text-sm md:text-base text-slate-400 mb-10 max-w-xl leading-relaxed text-balance">
            B.Tech Information Technology student building AI agents, backend systems, and cybersecurity-oriented applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] focus:outline-none"
            >
              View My Work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <a 
              href="mailto:arbab2171217@gmail.com?subject=Portfolio%20Inquiry"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-all focus:outline-none"
            >
              Say Hello <MailIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 mb-20">
            <a href="https://github.com/ARBAB2171217" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-all focus:outline-none" aria-label="GitHub Profile">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/arbab-ali-848b9a389/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-all focus:outline-none" aria-label="LinkedIn Profile">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:arbab2171217@gmail.com" className="p-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-all focus:outline-none" aria-label="Email">
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Editorial Tech Chips & Scroll */}
        <div className="animate-fade-in-up delay-200 w-full pt-8 relative z-20">
          <div className="flex flex-wrap gap-x-12 gap-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-1.5">AI Agents</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">LangChain <span className="text-brand-purple/50 mx-1">•</span> LangGraph <span className="text-brand-purple/50 mx-1">•</span> RAG</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-1.5">Backend Systems</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">FastAPI <span className="text-brand-blue/50 mx-1">•</span> PostgreSQL <span className="text-brand-blue/50 mx-1">•</span> Redis</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-1.5">Currently Building</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">CyberShield AI</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><rect x="5" y="2" width="14" height="20" rx="7"></rect><line x1="12" y1="6" x2="12" y2="10"></line></svg>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">01 / About</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="clamp-h2 font-bold mb-8 text-slate-50 leading-tight">More than <br/><span className="text-slate-400">just code.</span></h3>
            
            <div className="mb-8">
              <p className="text-sm text-slate-400 font-mono mb-1">B.Tech Information Technology</p>
              <p className="text-lg text-slate-300 font-medium">CSJMU Kanpur</p>
            </div>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              I am an AI developer and backend engineer with a strong foundation in modern software architecture. My focus is on building intelligent, scalable systems that seamlessly integrate machine learning into practical workflows.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Beyond engineering, I am an experienced event anchor and public speaker, bringing strong communication and leadership skills to collaborative technical environments.
            </p>
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
        <div className="mb-20">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1 w-full">
              <div className="flex items-end gap-4 mb-4">
                <span className="text-6xl font-bold tracking-tighter text-white/10">01</span>
                <span className="text-brand-purple text-xs font-bold tracking-widest uppercase pb-2">Flagship</span>
              </div>
              
              <h3 className="clamp-h2 font-bold mb-4 leading-tight">CyberShield AI</h3>
              <p className="text-brand-purple font-medium mb-6">AI-Powered Cyber Fraud Intelligence Platform</p>
            
            <p className="text-lg text-slate-400 mb-8 text-balance">
              An enterprise-grade URL Intelligence and digital forensics engine integrating real-time telemetry, SSL/DNS profiling, and AI-driven explainability.
            </p>
            
            <div className="space-y-3 mb-8">
              {["URL Intelligence module", "Deterministic AI Forensics", "Reputation timelines", "Unified Reporting Schema"].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {["React", "Next.js", "Python", "FastAPI", "Gemini API"].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/ARBAB2171217/cybersecurity_ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#030712] hover:bg-slate-200 font-bold transition-all focus:outline-none">
                <GithubIcon className="w-4 h-4" /> View Code
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-[600px] order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-brand-purple/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <ProjectImageLightbox 
                src="/projects/cybershield/cybershield.png" 
                alt="CyberShield AI URL Threat Intelligence dashboard" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
        </div>

        {/* 2. Featured Project - SSBCoreAI */}
        <div className="mb-24 lg:mb-32">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[650px] group">
              <div className="absolute inset-0 bg-brand-blue/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <ProjectImageLightbox 
                  src="/projects/ssbcoreai/ssbcoreai.png" 
                  alt="SSBCoreAI SSB preparation platform dashboard" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  imageClassName="object-top"
                  objectPosition="top"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-end gap-4 mb-4">
                <span className="text-6xl font-bold tracking-tighter text-white/10">02</span>
                <span className="text-brand-blue text-xs font-bold tracking-widest uppercase pb-2">Featured</span>
              </div>
              
              <h3 className="clamp-h2 font-bold mb-4 leading-tight">SSBCoreAI</h3>
              <p className="text-brand-blue font-medium mb-6">AI-Powered SSB Preparation Platform</p>
            
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
