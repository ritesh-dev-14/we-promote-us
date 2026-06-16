import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  // Ordered features matching text weights and typography variations directly from your mockup files
  const highlights = [
    {
      title: "Boost 20x ROI",
      desc: (
        <span>
          Your growth is our top priority. We’re not just about promises — we deliver <strong className="text-[#10223d] font-black">20%+ ROAS</strong>, ensuring every marketing dollar counts.
        </span>
      ),
      icon: (
        <svg className="w-8 h-8 text-[#f2a115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Rank #1 & Stay There",
      desc: "We don’t just get you to the top of search engines; we keep you there. Dominate your industry with proven SEO expertise that drives organic visibility and traffic.",
      icon: (
        <svg className="w-8 h-8 text-[#f2a115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Transparent Reporting & Accountability",
      desc: "No empty promises. You’ll always know where your money is going and how it’s performing, with clear, actionable insights.",
      icon: (
        <svg className="w-8 h-8 text-[#f2a115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Proven Expertise Across Industries",
      desc: "With years of experience and countless success stories, our team knows what it takes to thrive in even the most competitive industries.",
      icon: (
        <svg className="w-8 h-8 text-[#f2a115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start">
        
        {/* MAIN OVERSIZED TITLE HEADLINE AREA */}
        <h2 className="text-[#10223d] text-[44px] md:text-[54px] lg:text-[62px] font-black tracking-tight leading-[1.08] max-w-[900px] text-left mb-16">
          Leading The Way To Your <br />Digital Growth Journey
        </h2>

        {/* CONTENT DUAL COLUMN WORKSPACE ROW */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT CONTAINER LAYER: GRID COMPONENT VALUE PROPS */}
          <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                {/* Clean Custom Outlined Structural Icon Frame */}
                <div className="mb-4 p-2 bg-orange-50/50 rounded-xl border border-orange-100/40">
                  {item.icon}
                </div>
                {/* Title Segment Block */}
                <h3 className="text-[#10223d] font-black text-[20px] md:text-[22px] tracking-tight mb-3">
                  {item.title}
                </h3>
                {/* Content Paragraph Block */}
                <p className="text-slate-600 font-medium text-[15px] leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT CONTAINER LAYER: HIGH-FIDELITY LAYERED INTERFACE WIRE MOCKUPS */}
          <div className="xl:col-span-5 w-full flex items-center justify-center relative pt-12 xl:pt-4 select-none pointer-events-none">
            
            {/* Desktop UI Frame Representation Component */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[520px] aspect-[16/10] bg-slate-900 rounded-2xl p-2 shadow-2xl relative border border-slate-800"
            >
              <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col border border-slate-200">
                {/* Browser Inner Top Header Bar Wire Frame */}
                <div className="w-full h-6 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {/* Simulated Content Area Block */}
                <div className="flex-1 p-4 bg-slate-50/50 flex flex-col justify-center items-center text-center">
                  <div className="text-[#10223d] text-[15px] font-black tracking-tight scale-90">
                    AI-Powered <span className="text-[#00b4af]">Digital Marketing</span> Agency
                  </div>
                  <div className="w-20 h-5 bg-[#f2a115] rounded-full mt-3 opacity-80" />
                  <div className="w-full bg-[#10223d] h-4 mt-6 rounded opacity-90 flex items-center px-4 justify-between">
                    <span className="text-[7px] text-white font-bold scale-75">We Deliver Results:</span>
                    <span className="text-[6px] text-white/60 scale-75">Organic growth trends tracking...</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Smartphone Overlapping UI Presentation Floating Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-[-30px] right-2 md:right-8 xl:right-[-10px] w-[175px] aspect-[9/18] bg-slate-950 rounded-[32px] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-2 border-slate-800 hidden sm:block"
            >
              {/* Internal Smart Screen Layer Canvas */}
              <div className="w-full h-full bg-white rounded-[26px] overflow-hidden flex flex-col relative border border-slate-200">
                {/* Camera Speaker Notch Mockup Block */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-950 rounded-full z-30" />
                
                {/* Simulated Content Frame Platform */}
                <div className="flex-1 pt-8 p-3 flex flex-col justify-start items-center text-center bg-white">
                  <div className="text-[10px] font-black text-[#10223d] leading-tight scale-95 mt-2">
                    AI-Powered <br /><span className="text-[#00b4af]">Digital Marketing</span>
                  </div>
                  <div className="w-14 h-4 bg-[#f2a115] rounded-full mt-3 opacity-90" />
                  <div className="w-full bg-slate-100 h-20 mt-4 rounded-lg p-1 text-[6px] text-left font-bold text-slate-700 leading-normal border border-slate-200/50">
                    <div>Our Partnerships</div>
                    <div className="grid grid-cols-2 gap-1 mt-1.5 opacity-60">
                      <div className="h-3 bg-white border border-slate-200 rounded" />
                      <div className="h-3 bg-white border border-slate-200 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;