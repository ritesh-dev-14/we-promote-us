import React from 'react';
import { motion } from 'framer-motion';

const BrandsTrust = () => {
  const trustedIndustries = [
    { 
      label: "Clinics", 
      volume: "Healthcare Platforms",
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: "Online Stores", 
      volume: "E-Commerce Brands",
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      label: "Law Firms", 
      volume: "Legal Practices",
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a4 4 0 00-8 0v4c0 2.476.643 4.8 1.77 6.816m16.516.18A13.93 13.93 0 0115 11.543V11.5m0 0a5 5 0 000-10m0 10a5 5 0 010 10M15 1V1m0 18v2" />
        </svg>
      )
    },
    { 
      label: "Hotels", 
      volume: "Hospitality Groups",
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: "Real Estate", 
      volume: "Property Agencies",
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-28 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        
        {/* REFINED EDITORIAL HEADER */}
        <div className="max-w-xl mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A]">
            Industries we scale.
          </h2>
          <p className="mt-3 text-[#566171] text-sm md:text-base leading-relaxed">
            Our team optimizes structural organic search, manages targeted acquisition loops, and develops high-velocity platforms across core business sectors.
          </p>
        </div>

        {/* HIGH-CONTRAST BALANCED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustedIndustries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5, 
                borderColor: "#F59E0B",
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.06)"
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between h-44 shadow-xs group transition-colors duration-200 cursor-default"
            >
              {/* Premium Vector Badge Container */}
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/5 border border-[#F59E0B]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:border-[#F59E0B]">
                <span className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
              </div>
              
              {/* Core Text Elements Block */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#94A3B8] uppercase block">
                  {item.volume}
                </span>
                <h3 className="text-[#0F172A] font-black text-lg md:text-xl tracking-tight leading-none group-hover:text-[#D97706] transition-colors duration-200">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsTrust;