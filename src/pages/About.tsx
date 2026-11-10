import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppsShowcase from "../components/AppsShowcase";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Terminal,
  ExternalLink,
  Layers,
  MapPin
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-netflix selection:text-white">
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-20 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto space-y-12">
        {/* ====================================================================== */}
        {/* 1. CREATOR HERO — Big Profile Picture + Bio Side-by-Side               */}
        {/* ====================================================================== */}
        <section className="relative bg-[#181818] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Netflix red top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-netflix" />

          <div className="flex flex-col md:flex-row">
            {/* BIG Profile Photo (left or top on mobile) */}
            <div className="md:w-[400px] lg:w-[460px] flex-shrink-0">
              <div className="aspect-[3/4] md:h-full w-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Mohit 'Enji' Negi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/logo.png";
                  }}
                />
              </div>
            </div>

            {/* Bio Panel (right side) */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-netflix font-black text-2xl tracking-tighter">N</span>
                <span className="text-zinc-400 text-xs uppercase font-extrabold tracking-[0.2em]">
                  CREATOR PROFILE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Mohit "Enji" Negi
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="text-netflix font-bold">Founding Forward Deployed Engineer</span>
                <span className="text-zinc-600">•</span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <MapPin size={13} /> Boston, MA / Remote
                </span>
                <span className="text-zinc-600">•</span>
                <span className="netflix-tag">Season 1</span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed max-w-xl">
                On-device AI agent pipelines via Gemini Nano, production RAG with LangChain & Pydantic AI, and browser intelligence tools with 3,500+ downloads.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a href="mailto:enjimohitnegi@gmail.com" className="netflix-play-button !text-xs !py-2 !px-4">
                  <Mail size={14} />
                  <span>enjimohitnegi@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/mohit-singh-negi/" target="_blank" rel="noopener noreferrer" className="netflix-secondary-button !text-xs !py-2 !px-4">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Negi97Mohit" target="_blank" rel="noopener noreferrer" className="netflix-secondary-button !text-xs !py-2 !px-4">
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">3,500+</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Downloads</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-black text-netflix">1,000+</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Nano MAU</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">$15M+</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Contracts</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">Featured</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Chrome Store</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================== */}
        {/* 2. SHIPPED APPS — Horizontal scroll                                    */}
        {/* ====================================================================== */}
        <section>
          <AppsShowcase
            title="Shipped Apps & Chrome Extensions"
            subtitle="Live tools built by Enji with on-device AI, autonomous agents, and ambient DOM intelligence."
          />
        </section>

        {/* ====================================================================== */}
        {/* 3. CAREER TIMELINE                                                     */}
        {/* ====================================================================== */}
        <section className="space-y-4">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              <Briefcase size={22} className="text-netflix" />
              Career Track & Production Impact
            </h2>
          </div>

          {/* FUJM */}
          <div className="bg-[#181818] border border-zinc-800 rounded-md p-5 sm:p-6 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <span className="text-xs font-bold text-netflix uppercase tracking-wider">FUJM</span>
                <h3 className="text-lg font-bold text-white">Founding Forward Deployed Engineer</h3>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded inline-block w-fit">Feb 2024 – Jul 2026 • Boston / Remote</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside leading-relaxed">
              <li><strong className="text-white">On-Device AI:</strong> 4-phase agent pipeline on Gemini Nano (<strong className="text-netflix">MyTake: 1,000+ MAU</strong>).</li>
              <li><strong className="text-white">RAG Pipeline:</strong> LangChain + Pydantic AI + Giskard golden-dataset validation; MCP multi-agent voice automation.</li>
              <li><strong className="text-white">GAKI:</strong> Conversational DevOps/AIOps agent with automated RCA and remediation.</li>
              <li><strong className="text-white">Platform Growth:</strong> GenAI job board scaled to 256 MAU with LLM matching.</li>
            </ul>
          </div>

          {/* Dassault Systèmes */}
          <div className="bg-[#181818] border border-zinc-800 rounded-md p-5 sm:p-6 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Dassault Systèmes — ENOVIA Cloud PLM</span>
                <h3 className="text-lg font-bold text-white">QA Software Engineer</h3>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded inline-block w-fit">Aug 2022 – Dec 2023 • Boston, MA</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside leading-relaxed">
              <li>Automated 7+ test suites in Python/TS within Jenkins CI/CD — <strong className="text-white">30% cycle reduction</strong>.</li>
              <li>Built Selenium regression framework & ETL monitoring dashboards.</li>
              <li>Reduced user provisioning time by <strong className="text-white">67%</strong> via automation.</li>
            </ul>
          </div>

          {/* HUF Group */}
          <div className="bg-[#181818] border border-zinc-800 rounded-md p-5 sm:p-6 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">HUF Group</span>
                <h3 className="text-lg font-bold text-white">Investment Sales Analyst</h3>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded inline-block w-fit">Nov 2018 – Nov 2020 • Pune, India</span>
            </div>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside leading-relaxed">
              <li>Secured <strong className="text-white">$15M+ in contracts</strong> through cost analysis & stakeholder management.</li>
              <li>Drove <strong className="text-white">18% market share growth</strong> via data-driven forecasting.</li>
            </ul>
          </div>
        </section>

        {/* ====================================================================== */}
        {/* 4. OPEN SOURCE & PROJECTS                                              */}
        {/* ====================================================================== */}
        <section className="space-y-4">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              <Terminal size={22} className="text-netflix" />
              Open Source & AI Innovations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#181818] border border-zinc-800 rounded-md p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-netflix uppercase">CERN INSPIRE</span>
                <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">High Energy Physics</span>
              </div>
              <h3 className="text-base font-bold text-white">Author Testing & Query Parser Fixes</h3>
              <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                <li>Backoffice author-list testing UI — PR <span className="text-netflix font-mono">inspirehep#4638</span>.</li>
                <li>Fixed critical query-parser crash; <strong className="text-white">405 tests passed</strong> — PR <span className="text-netflix font-mono">#181</span>.</li>
              </ul>
            </div>

            <div className="bg-[#181818] border border-zinc-800 rounded-md p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase">Interactive AI Systems</span>
                <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">Production</span>
              </div>
              <h3 className="text-base font-bold text-white">CERN CRIC Explorer & Pa 3D Co-Star</h3>
              <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-white">CRIC WLCG:</strong> FastAPI multi-source reconciliation of GOCDB, BDII, OSG data.</li>
                <li><strong className="text-white">Pa 3D:</strong> Three.js AI companion with streaming speech, LLMs, and OBS integration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ====================================================================== */}
        {/* 5. SKILLS & EDUCATION — Clean 2-column                                 */}
        {/* ====================================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills */}
          <div className="bg-[#181818] border border-zinc-800 rounded-md p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Layers size={18} className="text-netflix" />
              Technical Arsenal
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block mb-1.5">Languages</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "SQL", "JavaScript", "TypeScript", "Shell", "HTML/CSS"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700/80 text-zinc-200 font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block mb-1.5">AI, LLMs & Agents</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Gemini Nano", "LangChain", "Pydantic AI", "MCP", "FastAPI", "Django", "React", "Keras", "Hugging Face"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded bg-netflix/10 border border-netflix/30 text-white font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block mb-1.5">Cloud & DevOps</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Kubernetes", "Docker", "Jenkins", "Terraform", "AWS", "GCP", "Milvus", "FAISS"].map(s => (
                    <span key={s} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700/80 text-zinc-200 font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="bg-[#181818] border border-zinc-800 rounded-md p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <GraduationCap size={18} className="text-netflix" />
              Education & Credentials
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                <span className="text-sm font-bold text-white block">M.Sc. Information Systems</span>
                <span className="text-xs text-netflix font-medium">Northeastern University</span>
                <span className="text-[10px] text-zinc-400 block">Boston, MA, USA</span>
              </div>
              <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                <span className="text-sm font-bold text-white block">B.Tech. Mechanical Engineering</span>
                <span className="text-xs text-netflix font-medium">VIT University</span>
                <span className="text-[10px] text-zinc-400 block">Spec. Automotive Technology • Vellore, India</span>
              </div>
            </div>

            <div>
              <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block mb-2">Certifications</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <span className="text-netflix font-bold text-[11px]">Red Hat</span>
                  <span className="text-zinc-200 block">OpenShift I (DO180)</span>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <span className="text-netflix font-bold text-[11px]">Databricks</span>
                  <span className="text-zinc-200 block">ML & Enterprise Data</span>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <span className="text-netflix font-bold text-[11px]">LinkedIn</span>
                  <span className="text-zinc-200 block">GenAI in Cloud</span>
                </div>
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  <span className="text-netflix font-bold text-[11px]">LinkedIn</span>
                  <span className="text-zinc-200 block">LLMs & Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
