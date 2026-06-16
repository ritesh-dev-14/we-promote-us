import React from 'react';
import { motion } from 'framer-motion';

const BrandsTrust = () => {
  // Client business niches precisely mapped with text values from your design mockup file
  const trustedIndustries = [
    { label: "Clinics", icon: "🏥" },
    { label: "Online Stores", icon: "🛍️" },
    { label: "Law Firms", icon: "⚖️" },
    { label: "Hotels", icon: "🏨" },
    { label: "Real Estate Businesses", icon: "🏢" }
  ];

  // Grid container orchestration variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* HEADER BRAND CONTENT HUD */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-[#10223d] text-[36px] md:text-[42px] font-black tracking-tight leading-none">
            Brands We Trust
          </h2>
          <p className="mt-4 text-slate-700/95 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide leading-relaxed max-w-xl mx-auto">
            Our people work every day across SEO, paid advertising, social media and web design for clients running:
          </p>
        </div>

        {/* PIXEL-PERFECT BALANCED MULTI-COLUMN CARD MATRIX */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {trustedIndustries.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -3, boxShadow: "0 12px 24px -10px rgba(16, 34, 61, 0.08)" }}
              className="bg-white border border-slate-200/80 rounded-xl h-[95px] px-6 flex items-center justify-start gap-4 transition-all duration-200"
            >
              {/* Geometric Icon Presentation Layer */}
              <div className="text-[24px] bg-slate-50 border border-slate-100 rounded-lg p-1.5 shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              
              {/* Structural Value Label */}
              <span className="text-[#10223d] font-bold text-[14.5px] sm:text-[15px] tracking-wide leading-snug">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BrandsTrust;