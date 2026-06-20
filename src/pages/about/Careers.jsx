import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data engineered for a premium agency architecture
const BENEFITS_DATA = [
  {
    id: 1,
    title: "Elite Work Culture",
    desc: "Work alongside world-class engineers, creators, and marketers in an environment built on absolute transparency and raw engineering craftsmanship.",
    icon: (
      <svg className="w-6 h-6 text-[#4cb1a1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Competitive Compensation",
    desc: "Industry-leading base salaries, high-velocity performance bonuses, comprehensive health insurance packages, and performance equity grants.",
    icon: (
      <svg className="w-6 h-6 text-[#4cb1a1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Uncapped Progression",
    desc: "Clear individual contributor & leadership tracking. We supply high-end educational stipends, courses, and custom architectural mentorship frameworks.",
    icon: (
      <svg className="w-6 h-6 text-[#4cb1a1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const OPENINGS_DATA = [
  {
    id: "fe-dev",
    title: "Senior Frontend Engineer (React / Next.js)",
    department: "Engineering",
    location: "Mohali, India (On-site / Hybrid)",
    type: "Full-Time",
    experience: "4 - 7 Years",
    summary: "We are seeking a master of UI/UX presentation who builds pixel-perfect fluid components, commands state-management pipelines, and architectures fluid framer animations.",
    requirements: ["Deep architectural command over React, Next.js, and TypeScript", "Proficient in performance tuning Tailwind, Framer Motion, and layout paint metrics", "State orchestration knowledge via Zustand, Redux Toolkit, or Context"]
  },
  {
    id: "growth-hack",
    title: "Performance Marketing & Growth Specialist",
    department: "Marketing Matrix",
    location: "Remote / Hybrid Available",
    type: "Full-Time",
    experience: "3 - 5 Years",
    summary: "Drive high-scale digital marketing frameworks. Architect, run, and optimize targeted multi-channel ad infrastructures that accelerate organic client acquisition.",
    requirements: ["Proven experience scaling paid acquisition budgets cleanly", "Deep parsing abilities inside Google Analytics, Meta Pixel, and complex attribution modeling", "Strong copywriting iteration and structured A/B testing workflow capabilities"]
  },
  {
    id: "uiux-arch",
    title: "Lead UI/UX Product Designer",
    department: "Design Strategy",
    location: "Mohali, India (On-site)",
    type: "Full-Time",
    experience: "5+ Years",
    summary: "Own user interfaces from abstract conceptual logic blocks to high-fidelity component libraries and enterprise design design patterns.",
    requirements: ["Extensive portfolio proving product lifecycle design ownership", "Mastery of Figma component architectures, variants, and design systems", "Empathetic translation of product user flows into fluid wireframes"]
  }
];

export default function PremiumCareersPage() {
  const [expandedOpening, setExpandedOpening] = useState(null);

  const toggleOpening = (id) => {
    setExpandedOpening(expandedOpening === id ? null : id);
  };

  return (
    <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#334155] selection:bg-[#4cb1a1]/20 overflow-x-hidden">
      
      {/* SECTION 1: KINETIC ENTERPRISE HERO IMAGE BLOCK */}
      <div className="w-full relative min-h-[85vh] flex items-center bg-[#182f59] text-white overflow-hidden">
        {/* Parallax background element */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Dynamic Workspace Cohesion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#182f59] via-[#182f59]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182f59] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4cb1a1]/20 border border-[#4cb1a1]/30 text-[#4cb1a1] text-xs font-semibold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[#4cb1a1] animate-ping" />
              We Are Actively Hiring
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Build the Future of <br />
              <span className="text-[#4cb1a1] bg-gradient-to-r from-[#4cb1a1] to-[#3ca090] bg-clip-text text-transparent italic font-serif font-normal">Digital Dominance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 font-light max-w-xl leading-relaxed"
            >
              Don't just look for a job. Join a calibrated collection of engineers, designers, and growth experts building high-end enterprise solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a 
                href="#openings" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#4cb1a1] hover:bg-[#3ca090] text-white text-sm font-bold tracking-wide shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Explore Open Positions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION 2: LIVE METRICS TICKER ROW */}
      <div className="w-full bg-[#FAF9FC] border-y border-gray-200/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: "150+", label: "Elite Technologists" },
            { metric: "10+", label: "Years of Scale Strategy" },
            { metric: "4.8", label: "Glassdoor Rating" },
            { metric: "24/7", label: "Continuous Innovation" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <h3 className="text-3xl sm:text-4xl font-black text-[#182f59]">{stat.metric}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 3: BENTO BENEFITS MATRIX LAYOUT */}
      <div className="w-full py-24 lg:py-32 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182f59] tracking-tight">
              Why Engineers & Creators Stay
            </h2>
            <div className="w-12 h-[3px] bg-[#4cb1a1] mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-400 font-light mt-4">
              We engineer our internal workplace culture just as intensely as we optimize our deployment systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS_DATA.map((benefit, idx) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(24,47,89,0.02)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(76,177,161,0.06)]"
              >
                <div className="w-12 h-12 bg-[#4cb1a1]/5 border border-[#4cb1a1]/10 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#182f59] mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 4: ACTIVE ACCORDION POSITIONS CHASSIS */}
      <div id="openings" className="w-full bg-[#182f59] py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Current Architecture Openings
            </h2>
            <div className="w-12 h-[2px] bg-[#4cb1a1]/60 mx-auto mt-4" />
            <p className="text-sm text-gray-400 font-light mt-4">
              Can't find an exact position match? Drop your CV directly at <span className="text-[#4cb1a1] font-semibold underline">hr@leadingedge.com</span>
            </p>
          </div>

          <div className="space-y-4">
            {OPENINGS_DATA.map((opening) => {
              const isExpanded = expandedOpening === opening.id;
              return (
                <motion.div
                  key={opening.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? "border-[#4cb1a1] shadow-2xl shadow-black/20" 
                      : "border-gray-200/10 hover:border-white/20 shadow-sm"
                  }`}
                >
                  {/* Top Accordion Trigger Stage */}
                  <div 
                    onClick={() => toggleOpening(opening.id)}
                    className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold bg-[#4cb1a1]/10 text-[#4cb1a1] px-2.5 py-0.5 rounded">
                          {opening.department}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded">
                          {opening.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#182f59] pt-1">
                        {opening.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {opening.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {opening.experience}
                        </span>
                      </div>
                    </div>

                    <div className={`p-2 rounded-full border bg-gray-50 text-[#182f59] transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? "rotate-180 border-[#4cb1a1]/30 bg-[#4cb1a1]/5 text-[#4cb1a1]" : "border-gray-200"}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Liquid Reveal Body Box */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="border-t border-gray-100 bg-[#FAF9FC]"
                      >
                        <div className="p-6 sm:p-8 space-y-6 text-sm">
                          <div className="space-y-2">
                            <h4 className="font-bold text-[#182f59] uppercase tracking-wide text-xs">Role Blueprint</h4>
                            <p className="text-gray-600 font-light leading-relaxed">{opening.summary}</p>
                          </div>

                          <div className="space-y-2.5">
                            <h4 className="font-bold text-[#182f59] uppercase tracking-wide text-xs">Core Skill Criteria</h4>
                            <ul className="space-y-1.5 list-inside text-gray-600 font-light">
                              {opening.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-[#4cb1a1] font-bold mt-0.5">✓</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 flex justify-end">
                            <button className="px-6 py-2.5 rounded-xl bg-[#182f59] hover:bg-[#4cb1a1] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md">
                              Apply Securely
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}