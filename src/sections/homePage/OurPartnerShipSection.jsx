import React from 'react';
import { motion } from 'framer-motion';

const OurPartnerShipSection = () => {
  // Container animation for a clean staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  const partners = [
    {
      name: "GoDaddy",
      logo: (
        <span className="font-sans font-black text-xl text-[#00a6a0] tracking-tight flex items-center gap-1">
          <span className="text-2xl font-light">G</span>oDaddy
        </span>
      ),
    },
    {
      name: "Shopify",
      logo: (
        <span className="font-sans font-bold text-xl text-[#1a1a1a] tracking-tight flex items-center gap-1">
          <span className="text-[#95bf47] font-black text-2xl">s</span>hopify
        </span>
      ),
    },
    {
      name: "Namecheap",
      logo: (
        <span className="font-sans font-bold text-lg text-[#333333] tracking-tight flex items-center gap-0.5">
          <span className="text-[#de5a24] font-black text-xl">N</span>amecheap
        </span>
      ),
    },
    {
      name: "HostGator",
      logo: (
        <span className="font-sans font-extrabold text-lg text-[#11355c] tracking-tight flex items-center gap-1">
          <span className="text-[#e67e22]">Host</span>Gator
        </span>
      ),
    },
    {
      name: "Adobe",
      logo: (
        <span className="font-sans font-black text-lg text-[#ff0000] tracking-tight flex items-center gap-2">
          <span className="bg-[#ff0000] text-white text-[11px] font-black tracking-normal px-2 py-1 rounded-sm transform -skew-x-12">A</span>
          <span className="tracking-wide text-slate-900 text-base font-bold">Adobe</span>
        </span>
      ),
    },
    {
      name: "HubSpot",
      logo: (
        <span className="font-sans font-bold text-xl text-[#2e3e4c] tracking-tight">
          HubSp<span className="text-[#ff7a59] font-black">o</span>t
        </span>
      ),
    },
    {
      name: "Google Analytics",
      logo: (
        <div className="flex flex-col text-left font-sans leading-tight">
          <span className="font-bold text-slate-700 text-sm tracking-tight">Google</span>
          <span className="font-normal text-slate-400 text-xs tracking-wider uppercase">Analytics</span>
        </div>
      ),
    },
    {
      name: "Bing Ads",
      logo: (
        <span className="font-sans font-bold text-lg text-slate-700 tracking-tight">
          <span className="text-[#008375] font-extrabold">Bing</span>
          <span className="text-slate-400 font-light">Ads</span>
        </span>
      ),
    },
    {
      name: "Meta",
      logo: (
        <span className="font-sans font-black text-xl text-[#1c1e21] tracking-tight flex items-center gap-1.5">
          <span className="text-[#0064e0] text-2xl font-light leading-none">∞</span>
          <span className="text-slate-900 font-bold tracking-tight">Meta</span>
        </span>
      ),
    },
    {
      name: "Google Partner",
      logo: (
        <div className="flex items-center gap-2 border-l-4 border-l-[#4285f4] pl-2 py-0.5">
          <div className="flex flex-col text-left font-sans leading-none">
            <span className="font-bold text-[14px] tracking-tight text-slate-800">
              Google
            </span>
            <span className="text-slate-400 text-[10px] font-medium tracking-widest uppercase mt-0.5">Partner</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-50/50 pt-16 pb-20 font-sans antialiased select-none overflow-hidden">
      
      {/* HEADER LABEL AND SUBTEXT */}
      <div className="w-full max-w-6xl mx-auto px-6 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2a115] block mb-3">Ecosystem</span>
        <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight leading-none uppercase">
          Our Partnerships
        </h2>
        <div className="w-8 h-[2px] bg-slate-300 mx-auto mt-4 mb-4" />
        <p className="max-w-xl mx-auto text-slate-500 font-normal text-sm sm:text-base leading-relaxed">
          Integrated with industry-leading platforms to consistently drive scalable digital performance.
        </p>
      </div>

      {/* MINIMAL PARTNER BRAND GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, backgroundColor: '#ffffff' }}
              className="bg-white/60 border border-slate-200/60 rounded-xl h-[90px] flex items-center justify-center p-4 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shadow-xs hover:shadow-sm"
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default OurPartnerShipSection;