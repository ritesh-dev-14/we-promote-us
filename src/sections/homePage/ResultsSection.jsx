import React from 'react';
import { motion } from 'framer-motion';

const ResultsSection = () => {
  // Exact data points extracted directly from the reference mockup
  const statsData = [
    {
      value: "12+",
      label: "Years Of Expertise"
    },
    {
      value: "5M+",
      label: "Organic Keywords Ranked"
    },
    {
      value: "25K+",
      label: "Successful Projects"
    },
    {
      value: "95k+",
      label: "Leads Generated"
    }
  ];

  // Animation variants for smooth orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white pt-16 pb-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        
        {/* SECTION HEADLINE AND SUBTEXT */}
        <div className="text-center mb-14 max-w-3xl">
          <h2 className="text-[#10223d] text-[36px] md:text-[42px] font-black tracking-tight leading-tight">
            Results-Driven Digital Marketing Agency
          </h2>
          <p className="mt-3.5 text-slate-800 font-semibold text-[16px] md:text-[17px] tracking-wide">
            We let the numbers do the talking
          </p>
        </div>

        {/* STATISTICAL DISPLAY GRID COMPONENT MATRIX */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(16, 34, 61, 0.05)" }}
              className="bg-white border border-slate-200/90 rounded-xl h-[165px] px-8 flex flex-col justify-center items-start transition-all duration-200"
            >
              {/* Stat Highlight Metric */}
              <span className="text-[#f2a115] text-[40px] md:text-[44px] font-black tracking-tight leading-none">
                {item.value}
              </span>
              
              {/* Stat Structural Context Label */}
              <p className="mt-4 text-[#10223d] font-bold text-[14.5px] md:text-[15px] tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsSection;