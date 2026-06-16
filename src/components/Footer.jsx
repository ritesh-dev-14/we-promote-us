import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "How We Work", href: "#" }
  ];

  const supportLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="w-full bg-[#10223d] pt-20 pb-8 px-6 md:px-12 lg:px-24 font-sans antialiased text-white select-none overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto flex flex-col">
        
        {/* UPPER MAIN GRID LEVEL CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* COLUMN 1: BRAND INFORMATION WRAPPER (SPAN 5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Dynamic Brand Text Header Layout Plate */}
            <div className="text-[24px] font-black tracking-tight mb-5 text-white">
              SiteSpark<span className="text-[#00b4af]">One</span>
            </div>
            <p className="text-slate-300 font-medium text-[14.5px] leading-[1.65] max-w-sm mb-6">
              An AI-powered digital marketing and web engineering agency dedicated to accelerating organic traffic, maximizing conversion velocity, and driving industry-leading ROAS.
            </p>
            {/* Social Channels Row Track */}
            <div className="flex items-center gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, idx) => (
                <motion.a
                  whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.15)" }}
                  key={idx}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider scale-90">{platform[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION NAVIGATION (SPAN 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left lg:pl-8">
            <h4 className="text-[#00b4af] font-extrabold text-[13px] uppercase tracking-widest mb-6">
              Explore Links
            </h4>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-300 font-semibold text-[14.5px] tracking-wide hover:text-white transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: ACCOUNTABILITY & RESOURCES (SPAN 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-[#00b4af] font-extrabold text-[13px] uppercase tracking-widest mb-6">
              Support & Accountability
            </h4>
            <ul className="flex flex-col gap-3.5 mb-6">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-300 font-semibold text-[14.5px] tracking-wide hover:text-white transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-[13px] text-slate-400 font-medium leading-relaxed">
              Have inquiries? Connect directly at:<br />
              <span className="text-white font-bold text-[14px] tracking-wide">hello@sitesparkone.com</span>
            </div>
          </div>

        </div>

        {/* LOWER SUB-SHELF: COPYRIGHT BAR COMPONENT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-slate-400 font-medium text-[13.5px] tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">SiteSparkOne</span>. All rights reserved.
          </span>
          <span className="text-slate-500 font-bold text-[11.5px] tracking-widest uppercase">
            Engineered For Absolute Scale
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;