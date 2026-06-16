import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Exact step layout definitions matching your layout structure
  const steps = [
    {
      id: "01",
      label: "Kick-Off Call",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
        </svg>
      ),
      title: "Kick-Off Call",
      desc: "Your journey begins with a dedicated, in-depth call where we take the time to truly understand your brand's essence, mission, and vision. During this personalized session, we'll explore your short-term and long-term goals, identify key challenges, and discuss the competitive landscape of your industry. The insights we gather here become the cornerstone for building a strategy that sets you up for success.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "02",
      label: "Strategic Planning",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
      title: "Strategic Planning",
      desc: "Data meets creativity. We align competitive multi-channel market audits with targeted traffic blueprints, ensuring your budget maps perfectly to scale. Every decision is structural, documented, and configured for predictable digital execution.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "03",
      label: "Clear Communication",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: "Clear Communication",
      desc: "Zero black boxes. You receive straightforward milestone updates, interactive tracking loops, and shared alignment rooms. We communicate in direct outcomes, ensuring your product and team move forward as one.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "04",
      label: "Result-Oriented",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L12 15v5z" />
        </svg>
      ),
      title: "Result-Oriented Execution",
      desc: "We focus completely on production velocity and structural ROI tracking. By optimizing modern application loops and marketing infrastructure, we build secure systems that turn baseline user intent directly into scalable performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* SECTION HEADER BLOCK */}
        <h2 className="text-[#0b2240] text-[36px] md:text-[44px] lg:text-[48px] font-black tracking-tight leading-tight text-center max-w-[850px] mb-20">
          How We Work To Make Your Business <br />
          <span className="text-[#00b4af]">#1 In The Digital World</span>
        </h2>

        {/* STEP-BY-STEP PROGRESS BAR TRACK CONTAINER */}
        <div className="w-full max-w-[1100px] relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 mb-24">
          
          {/* Exact Structural Timeline Connector Track Line */}
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[2px] bg-slate-100 hidden md:block z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div 
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center relative z-10 cursor-pointer group flex-1"
              >
                {/* Outlined Dynamic Numeric Bubble Frame */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 text-[18px] font-extrabold transition-all duration-300 shadow-sm ${
                  isActive 
                    ? 'border-[#00b4af] text-[#00b4af] scale-110 ring-4 ring-[#00b4af]/10' 
                    : 'border-slate-200 text-slate-800 group-hover:border-slate-400'
                }`}>
                  {step.id}
                </div>

                {/* Micro Action Icon Presentation Layer */}
                <div className={`mt-4 transition-colors duration-300 ${
                  isActive ? 'text-[#00b4af]' : 'text-slate-400 group-hover:text-slate-600'
                }`}>
                  {step.icon}
                </div>

                {/* Descriptive Title Text Block */}
                <span className="mt-3 text-[15px] font-bold text-[#0b2240] tracking-tight text-center">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* WORKSPACE PREVIEW CARD FRAME CONSOLE */}
        <div className="w-full max-w-[1150px] min-h-[420px] bg-white rounded-2xl border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Segment Column: Informational Text Copy Canvas */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h3 className="text-[#0b2240] font-black text-[24px] md:text-[28px] tracking-tight mb-5 leading-snug">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600 font-medium text-[16px] md:text-[17px] leading-[1.75] mb-8">
                  {steps[activeStep].desc}
                </p>
                <button className="bg-[#f2a115] hover:bg-[#d98f10] active:scale-[0.98] text-white font-extrabold text-[15px] uppercase tracking-wider px-9 py-4 rounded-full shadow-[0_4px_14px_rgba(242,161,21,0.35)] transition-all">
                  Contact Us
                </button>
              </div>

              {/* Right Segment Column: High-Fidelity Action Frame Showcase Component */}
              <div className="lg:col-span-5 w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative shadow-inner">
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title} 
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;