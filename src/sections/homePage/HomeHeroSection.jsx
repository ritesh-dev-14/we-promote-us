import React from 'react';
import { motion } from 'framer-motion';

const HomeHeroSection = () => {
  // Ticker items matching the real agency content stream
  const tickerItems = [
    "Engineered for hyper-business growth.",
    "👍 1,200+ custom-designed websites, elevating brands with tailored digital experiences.",
    "Data-driven marketing performance execution.",
    "Enterprise infrastructure optimized for core web vitals scaling."
  ];

  return (
    <section className="w-full relative min-h-[620px] flex flex-col justify-between bg-white overflow-hidden font-sans antialiased">
      
      {/* 1. PIXEL-PERFECT SUBTLE GEOMETRIC BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
        style={{
          backgroundImage: `
            linear-gradient(45deg, #1b2a47 25%, transparent 25%), 
            linear-gradient(-45deg, #1b2a47 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #1b2a47 75%), 
            linear-gradient(-45deg, transparent 75%, #1b2a47 75%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px'
        }}
      />

      {/* 2. MAIN HERO BRAND COPY HUD */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center relative z-10 flex-grow justify-center">
        
        {/* Deep Multi-Colored Typography Composition */}
        <h1 className="text-[54px] lg:text-[64px] font-black text-[#1b2a47] tracking-tight leading-[1.1] max-w-[5xl]">
          AI-Powered <span className="text-[#00b4af]">Digital Marketing</span>
          <br />
          <span className="text-[#00b4af]">Agency</span> for Growth
        </h1>

        {/* Clean Corporate Sub-headline */}
        <p className="mt-6 text-[21px] lg:text-[23px] font-medium text-slate-700 tracking-wide">
          From Strategy to Scale — All Sorted
        </p>

        {/* High-Fidelity Call-To-Action Element */}
        <button className="mt-8 bg-[#f2a115] hover:bg-[#de910b] text-white font-extrabold text-[14px] tracking-widest px-10 py-4.5 rounded-full shadow-[0_5px_20px_rgba(242,161,21,0.3)] hover:shadow-[0_8px_25px_rgba(242,161,21,0.4)] active:scale-98 transition-all duration-200 uppercase">
          Let's Talk Growth
        </button>
      </div>

      {/* 3. PREMIUM INFINITE CONTENT TICKER FOOTER SHELF */}
      <div className="w-full bg-[#10223d] h-[64px] relative z-10 flex items-center overflow-hidden border-t border-white/5 select-none">
        
        {/* Fixed Title Leading Badge */}
        <div className="absolute left-0 top-0 bottom-0 bg-[#10223d] z-20 px-12 flex items-center border-r border-white/5 shadow-[10px_0_20px_rgba(16,34,61,0.8)]">
          <span className="text-[#f2a115] font-black text-[15px] tracking-wide whitespace-nowrap">
            We Deliver Results:
          </span>
        </div>

        {/* Infinite CSS/Framer Motion Translation Scroller */}
        <div className="w-full flex items-center pl-[240px]">
          <motion.div 
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
          >
            {/* Render loop duplicate sets to prevent white space clipping layout issues */}
            {[...tickerItems, ...tickerItems, ...tickerItems].map((text, idx) => (
              <span key={idx} className="text-white/90 text-[14px] font-semibold tracking-wide flex items-center">
                {text}
              </span>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default HomeHeroSection;