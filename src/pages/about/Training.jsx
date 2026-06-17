// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Mock dataset engineered for a premium agency corporate training framework
// const TRACKS_DATA = [
//   {
//     id: "engineering",
//     title: "Full-Stack Software Architecture",
//     duration: "12 Weeks Intensive",
//     headline: "Transforming standard code-monkeys into enterprise-grade system architects.",
//     description: "Go beyond basic syntax loops. Master state machines, layout compilation engines, high-scale database modeling, and asynchronous performance tuning layers.",
//     curriculum: [
//       "Advanced UI Rendering & Rendering Framework Pipelines",
//       "State Management Orchestration (Zustand / Redux Architecture)",
//       "High-Velocity API Design & Scalable DB Normalization",
//       "CI/CD Orchestration, Containerization & Edge Deployments"
//     ]
//   },
//   {
//     id: "marketing",
//     title: "Performance Growth Engineering",
//     duration: "8 Weeks Intensive",
//     headline: "Data-driven system mechanics to acquire, convert, and scale user bases.",
//     description: "Learn how to weaponize digital funnels. This track covers granular tracking infrastructures, complex conversion rate optimization pipelines, and mathematical attribution modeling.",
//     curriculum: [
//       "Attribution Models & Advanced Pixel/API Telemetry",
//       "Dynamic Funnel Engineering & User Behavior Analysis",
//       "High-Budget Paid Acquisition Architecture (Meta/Google)",
//       "Automated Lifecycle Operations & Retention Matrix Loops"
//     ]
//   },
//   {
//     id: "design",
//     title: "High-Fidelity UI/UX Systems Design",
//     duration: "10 Weeks Intensive",
//     headline: "Bridging the gap between raw interactive psychology and component engineering.",
//     description: "Design isn't just aesthetic layout; it's operational velocity. Master structural multi-variant design systems, empathetic human-computer mapping models, and advanced prototyping.",
//     curriculum: [
//       "Cognitive Interaction Principles & Spatial Psychology",
//       "Calibrated Multi-Variant Token Design System Logic",
//       "Advanced Motion Design, Layout Transitions & Micro-Interactions",
//       "Technical Handoff Optimizations & Component Spec Documentation"
//     ]
//   }
// ];

// const METRICS_DATA = [
//   { value: "100%", label: "Practical Lab Projects" },
//   { value: "1-on-1", label: "Architect Mentorship" },
//   { value: "450+", label: "Graduates Placed" },
//   { value: "Top 1%", label: "Curriculum Standards" }
// ];

// export default function PremiumTrainingPage() {
//   const [activeTrack, setActiveTrack] = useState("engineering");

//   const currentTrack = TRACKS_DATA.find(t => t.id === activeTrack);

//   return (
//     <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#333333] selection:bg-[#74358C]/20 overflow-x-hidden">
      
//       {/* SECTION 1: MASTER BIG PICTURE IMAGE HERO BANNER */}
//       <div className="w-full relative overflow-hidden bg-[#1F2B48]">
//         {/* Big cinematic layout picture stage */}
//         <div className="w-full h-[320px] sm:h-[460px] md:h-[580px] lg:h-[640px] relative">
//           <img 
//             src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000" 
//             alt="Corporate Innovation and Technical Training Lab" 
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B48] via-[#1F2B48]/40 to-transparent" />
//         </div>

//         {/* Floating Identity Title block matching your corporate aesthetic */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-24 text-white">
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-purple-400 mb-3"
//           >
//             Internal Knowledge Excellence Hub
//           </motion.p>
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
//           >
//             Up-Skilling Tomorrow's Elite
//           </motion.h1>
//           <motion.div 
//             initial={{ width: 0 }}
//             animate={{ width: 96 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-[3px] bg-[#74358C] mx-auto mb-8 rounded-full" 
//           />
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 font-light leading-relaxed"
//           >
//             We don't do superficial slide-deck bootcamps. Our training ecosystem delivers deep architectural immersion, rigorous code blueprints, and real-world execution metrics engineered to accelerate raw capability.
//           </motion.p>
//         </div>
//       </div>

//       {/* SECTION 2: METRICS COMPASS TICKER */}
//       <div className="w-full bg-[#FAF9FC] border-y border-gray-200/60 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {METRICS_DATA.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="space-y-1"
//             >
//               <h3 className="text-3xl sm:text-4xl font-black text-[#231F54]">{stat.value}</h3>
//               <p className="text-xs font-semibold tracking-wider uppercase text-gray-400">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* SECTION 3: INTERACTIVE CORE CURRICULUM SELECTOR MATRIX */}
//       <div className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231F54] tracking-tight">
//               Calibrated Learning Tracks
//             </h2>
//             <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-4" />
//           </div>

//           {/* Tab Selection Row */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-3xl mx-auto mb-16 bg-[#FAF9FC] p-2 rounded-2xl border border-gray-100">
//             {TRACKS_DATA.map((track) => {
//               const isActive = activeTrack === track.id;
//               return (
//                 <button
//                   key={track.id}
//                   onClick={() => setActiveTrack(track.id)}
//                   className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 uppercase ${
//                     isActive 
//                       ? "bg-[#231F54] text-white shadow-lg shadow-[#231F54]/20" 
//                       : "text-gray-500 hover:text-[#231F54] hover:bg-gray-100/60"
//                   }`}
//                 >
//                   {track.id}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Dynamic Content Display with Liquid Fade Transition */}
//           <div className="max-w-5xl mx-auto min-h-[400px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTrack}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 transition={{ duration: 0.4 }}
//                 className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
//               >
//                 {/* Track General Info Block */}
//                 <div className="lg:col-span-6 space-y-4">
//                   <div className="inline-block px-3 py-1 rounded bg-[#74358C]/10 text-[#74358C] text-[10px] font-extrabold uppercase tracking-widest">
//                     {currentTrack.duration}
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-black text-[#231F54] leading-tight">
//                     {currentTrack.title}
//                   </h3>
//                   <p className="text-sm text-[#74358C] font-semibold italic">
//                     "{currentTrack.headline}"
//                   </p>
//                   <p className="text-sm text-gray-500 font-light leading-relaxed">
//                     {currentTrack.description}
//                   </p>
//                 </div>

//                 {/* Track Structured Syllabus Checklist Block */}
//                 <div className="lg:col-span-6 bg-[#1F2B48] p-8 sm:p-10 rounded-2xl text-white shadow-xl relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#74358C]/10 rounded-full blur-2xl pointer-events-none" />
                  
//                   <h4 className="text-xs uppercase font-black tracking-widest text-purple-400 mb-6 border-b border-white/10 pb-3">
//                     Core Blueprint Competencies
//                   </h4>
                  
//                   <ul className="space-y-4">
//                     {currentTrack.curriculum.map((item, index) => (
//                       <motion.li 
//                         key={index}
//                         initial={{ opacity: 0, x: 10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="flex items-start gap-3 text-sm font-light text-gray-200"
//                       >
//                         <span className="w-5 h-5 rounded-full bg-[#74358C]/30 text-[#74358C] flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
//                           0{index + 1}
//                         </span>
//                         <span>{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>

//       {/* SECTION 4: SPLIT DIAGONAL BRANDED CTA AREA */}
//       <div className="w-full bg-white border-t border-gray-100 overflow-hidden relative">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          
//           {/* Left Callout Text Component */}
//           <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 space-y-6">
//             <h3 className="text-2xl sm:text-3xl font-black text-[#231F54] tracking-tight leading-tight">
//               Ready to Upgrade <br />
//               Your Professional <br />
//               Trajectory?
//             </h3>
//             <div className="w-16 h-[2px] bg-[#74358C]" />
//             <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
//               Our placement framework operates in direct collaboration with tier-1 digital agencies and worldwide technical ventures. Secure entry to unlock elite opportunities.
//             </p>
//             <div className="pt-2">
//               <button className="px-6 py-3 rounded-xl bg-[#74358C] hover:bg-[#5c2870] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md">
//                 Register For Entrance Exam
//               </button>
//             </div>
//           </div>

//           {/* Right Sharp Diagonal Cut Image Component */}
//           <div className="lg:col-span-7 h-[340px] sm:h-[440px] lg:h-[520px] relative w-full bg-[#1F2B48]">
//             <div 
//               className="absolute inset-0 w-full h-full hidden lg:block bg-white z-10"
//               style={{ clipPath: 'polygon(0 0, 16% 0, 0 100%, 0% 100%)' }}
//             />
//             <img 
//               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
//               alt="High-scale collaboration and continuous learning" 
//               className="w-full h-full object-cover"
//               style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
//             />
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded dataset with specialized modules for deep-dive inspection
const TRACKS_DATA = [
  {
    id: "engineering",
    title: "Full-Stack Software Architecture",
    duration: "12 Weeks Intensive",
    headline: "Transforming standard engineers into enterprise-grade system architects.",
    description: "Go beyond basic state mutations and boilerplate loops. Master V8 engine mechanics, deterministic state machines, layout paint cycles, high-scale DB indexing, and asynchronous runtime performance tuning.",
    curriculum: [
      "Advanced UI Virtualization & Reconciliation Framework Pipelines",
      "Global State Orchestration (Zustand, Custom Middleware, Context optimization)",
      "High-Velocity API Microservices & Distributed System Patterns",
      "CI/CD Orchestration, Infrastructure-as-Code (IaC) & Edge Runtimes"
    ],
    deepDiveModules: [
      { num: "MOD-01", name: "Advanced React Core & V8 Under the Hood", detail: "Fiber reconciliation, concurrent mode rendering, custom hook dependency tracking, memory leaks isolation, and garbage collection mechanics." },
      { num: "MOD-02", name: "Distributed Databases & Caching Strategy", detail: "PostgreSQL indexing optimization, Redis layer replication, read/write segregation, and query profiling under heavy scale." },
      { num: "MOD-03", name: "Cloud Infrastructure & Edge Virtualization", detail: "Docker containerization networks, AWS/GCP serverless architecture, edge handlers, security header protocols, and automated deployment pipelines." }
    ]
  },
  {
    id: "marketing",
    title: "Performance Growth Engineering",
    duration: "8 Weeks Intensive",
    headline: "Data-driven system mechanics to acquire, convert, and retain at scale.",
    description: "Learn how to weaponize data funnels. This track covers granular analytics pipelines, programmatic attribution modeling, automated retention hooks, and cross-channel script injection frameworks.",
    curriculum: [
      "First-Party Telemetry & Advanced Conversions API (CAPI) Architecture",
      "Dynamic Funnel Engineering & Structural Cohort Retention Analysis",
      "High-Budget Paid Acquisition Infrastructure (Meta, Google Search/Display)",
      "Automated Lifecycle Infrastructure & Cross-Channel Trigger Logic"
    ],
    deepDiveModules: [
      { num: "MOD-01", name: "Advanced Telemetry & Server-Side Tracking", detail: "Setting up custom proxy event forwarders, defeating ad-blocker drop-offs legally via first-party DNS, and deep data layer mapping." },
      { num: "MOD-02", name: "Mathematical Attribution & Media Buying", detail: "Linear vs. data-driven attribution models, lookalike bidding automation strategies, and continuous hyper-parameter testing metrics." },
      { num: "MOD-03", name: "CRO Scripting & Cognitive User Mapping", detail: "A/B/X variance setup, heatmapping interpretation, user flow friction isolation, and algorithmic copy matching structures." }
    ]
  },
  {
    id: "design",
    title: "High-Fidelity UI/UX Systems Design",
    duration: "10 Weeks Intensive",
    headline: "Bridging the gap between raw interactive psychology and production token engines.",
    description: "Design isn't just aesthetic presentation; it's operational efficiency. Master complex typography ratios, semantic design token spacing architectures, cognitive user mapping, and high-fidelity prototype handoffs.",
    curriculum: [
      "Cognitive Interaction Laws & Human-Computer Spatial Mapping",
      "Semantic Multi-Variant Design Token Architecture & Token Stacking",
      "Advanced Motion Curves, Spatial Transitions & Micro-Interactions",
      "Production Hand-off Optimizations & Strict Component Spec Documentation"
    ],
    deepDiveModules: [
      { num: "MOD-01", name: "Design System Architecture & Tokens", detail: "Building strict typography scales, color mapping hierarchies, automated Figma-to-GitHub JSON tokens, and atomic variants." },
      { num: "MOD-02", name: "Interaction Mechanics & Micro-Animations", detail: "Framer Motion design pairing, keyframe curves mapping, easing equations, layout id transitions, and visual micro-feedback loops." },
      { num: "MOD-03", name: "Usability Testing & Empirical Diagnostics", detail: "Setting up behavioral split tests, running qualitative screen-record labs, mapping accessibility barriers (WCAG), and prototyping." }
    ]
  }
];

const TIMELINE_DATA = [
  { hour: "09:00 AM", event: "Architectural Briefing", description: "Deconstructing production codebases or live growth funnels with a Principal Mentor." },
  { hour: "11:00 AM", event: "Core Technical Lab Execution", description: "Solo engineering sprints building targeted isolated modules based on actual client briefs." },
  { hour: "02:00 PM", event: "Peer Review & Refactoring", description: "Live, transparent code/design critiques where edge cases and performance metrics are torn apart." },
  { hour: "04:30 PM", event: "Edge Case Problem Solving", description: "Overcoming extreme stress scenarios, scaling limits, or budget-efficiency bottlenecks simulated in real time." }
];

const FAQS_DATA = [
  { q: "Is this training program fully remote or on-site?", a: "We offer a flexible Hybrid model. Core architectural labs and team reviews can be completed on-site at our tech labs, or streamed live with real-time remote infrastructure support." },
  { q: "How are candidates selected for these cohorts?", a: "Selection is highly selective. Candidates must submit a portfolio or code repository review, followed by a live problem-solving technical interview evaluating architectural potential." },
  { q: "Do you offer job placement guarantees after graduation?", a: "While we do not offer generic placement guarantees, our top graduates are directly funnelled into our internal engineering, design, and growth teams, or placed within our tier-1 enterprise network." }
];

export default function DetailedTrainingPage() {
  const [activeTrack, setActiveTrack] = useState("engineering");
  const [expandedModule, setExpandedModule] = useState(null);

  const currentTrack = TRACKS_DATA.find(t => t.id === activeTrack);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#333333] selection:bg-[#74358C]/20 overflow-x-hidden">
      
      {/* SECTION 1: MASTER HERO PICTURE BLOCK */}
      <div className="w-full relative overflow-hidden bg-[#1F2B48]">
        <div className="w-full h-[340px] sm:h-[480px] lg:h-[600px] relative">
          <img 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Innovation and Technical Training Lab" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B48] via-[#1F2B48]/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-28 text-white relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-3"
          >
            Internal Knowledge Excellence Hub
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Up-Skilling Tomorrow's Elite
          </motion.h1>
          <div className="w-20 h-[3px] bg-[#74358C] mx-auto mb-8 rounded-full" />
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            We don't do superficial slide-deck bootcamps. Our training ecosystem delivers deep architectural immersion, rigorous code blueprints, and real-world execution metrics engineered to accelerate raw capability.
          </p>
        </div>
      </div>

      {/* SECTION 2: LIVE METRICS DISPLAY */}
      <div className="w-full bg-[#FAF9FC] border-y border-gray-200/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100%", label: "Practical Lab Projects" },
            { value: "1-on-1", label: "Architect Mentorship" },
            { value: "450+", label: "Graduates Placed" },
            { value: "Top 1%", label: "Curriculum Standards" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-black text-[#231F54]">{stat.value}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE CORE CURRICULUM SELECTOR */}
      <div className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#231F54] tracking-tight">
              Calibrated Learning Tracks
            </h2>
            <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-4" />
          </div>

          {/* Tab Row Container */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-3xl mx-auto mb-16 bg-[#FAF9FC] p-2 rounded-2xl border border-gray-100">
            {TRACKS_DATA.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track.id);
                  setExpandedModule(null);
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 uppercase ${
                  activeTrack === track.id 
                    ? "bg-[#231F54] text-white shadow-lg shadow-[#231F54]/20" 
                    : "text-gray-500 hover:text-[#231F54] hover:bg-gray-100/60"
                }`}
              >
                {track.id}
              </button>
            ))}
          </div>

          {/* Main Track Display Area */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* General Description Block */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-block px-3 py-1 rounded bg-[#74358C]/10 text-[#74358C] text-[10px] font-extrabold uppercase tracking-widest">
                    {currentTrack.duration}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#231F54] leading-tight">
                    {currentTrack.title}
                  </h3>
                  <p className="text-sm text-[#74358C] font-semibold italic">
                    "{currentTrack.headline}"
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                    {currentTrack.description}
                  </p>
                </div>

                {/* Micro Syllabus Accordion Module Block */}
                <div className="lg:col-span-7 space-y-3 bg-[#FAF9FC] p-4 sm:p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-[11px] uppercase font-black tracking-widest text-gray-400 mb-4 px-2">
                    Deep Dive Technical Modules
                  </h4>
                  
                  {currentTrack.deepDiveModules.map((mod, i) => {
                    const isOpen = expandedModule === i;
                    return (
                      <div 
                        key={i} 
                        className={`bg-white rounded-xl border transition-all duration-200 ${isOpen ? "border-[#74358C] shadow-md shadow-[#74358C]/5" : "border-gray-200/60"}`}
                      >
                        <div 
                          onClick={() => toggleModule(i)}
                          className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono font-bold bg-[#74358C]/10 text-[#74358C] px-2 py-0.5 rounded">
                              {mod.num}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#231F54]">
                              {mod.name}
                            </span>
                          </div>
                          <span className={`text-[#74358C] transition-transform duration-200 text-lg font-bold ${isOpen ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden border-t border-gray-50"
                            >
                              <p className="p-4 sm:p-5 text-xs sm:text-sm font-light text-gray-500 leading-relaxed bg-[#FAF9FC]/50">
                                {mod.detail}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* SECTION 4: THE LAB LIFECYCLE TIMELINE TIMETABLE */}
      <div className="w-full bg-[#1F2B48] py-24 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              A Day In The Training Engine
            </h2>
            <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-4">
              Calibrated hourly intervals structure our dynamic skill progression loop daily.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1F2B48] border-2 border-[#74358C] group-hover:bg-[#74358C] transition-colors duration-200" />
                
                {/* Horizontal hour tag for wide viewport layout styling */}
                <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono tracking-widest uppercase font-bold text-purple-400">
                  {item.hour}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {item.event}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS CORE GRID */}
      <div className="w-full bg-[#FAF9FC] py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#231F54] tracking-tight">
              Program Operations FAQ
            </h2>
            <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FAQS_DATA.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/50 space-y-3 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-[#231F54] flex items-start gap-2">
                  <span className="text-[#74358C]">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm font-light text-gray-500 leading-relaxed pl-4">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 6: HIGH CONTRAST CTAs ASYMMETRICAL WRAPPER */}
      <div className="w-full bg-white overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#231F54] tracking-tight leading-tight">
              Ready to Upgrade <br />
              Your Professional <br />
              Trajectory?
            </h3>
            <div className="w-16 h-[2px] bg-[#74358C]" />
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              Our placement framework operates in direct collaboration with tier-1 digital agencies and global technology architecture houses. Secure entry to unlock enterprise pipelines.
            </p>
            <div className="pt-2">
              <button className="px-6 py-3 rounded-xl bg-[#74358C] hover:bg-[#5c2870] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md">
                Register For Entrance Exam
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 h-[340px] sm:h-[440px] lg:h-[520px] relative w-full bg-[#1F2B48]">
            <div 
              className="absolute inset-0 w-full h-full hidden lg:block bg-white z-10"
              style={{ clipPath: 'polygon(0 0, 16% 0, 0 100%, 0% 100%)' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
              alt="High-scale collaboration and continuous learning" 
              className="w-full h-full object-cover"
              style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}