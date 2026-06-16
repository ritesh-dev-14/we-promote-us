import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // Ordered testaments dataset perfectly mapping content metrics from your design
  const feedbackData = [
    {
      name: "Gaurav S.",
      role: "E-Commerce Director",
      stars: 5,
      comment: "Our organic traffic skyrocketed after partnering with them. Their deep technical expertise in structural SEO optimization and search blueprints completely turned our digital acquisition numbers around. Highly professional execution!"
    },
    {
      name: "Amit R.",
      role: "Founder, Law Firm Group",
      stars: 5,
      comment: "Zero empty promises, pure data performance. They built a custom multi-channel paid acquisition engine that significantly dropped our cost per lead while keeping our client pipelines full. Exceptional visibility reporting."
    },
    {
      name: "Sarah M.",
      role: "Boutique Hotel Operator",
      stars: 5,
      comment: "The direct booking application engine they engineered for us is flawless. Our conversions climbed steadily within weeks of deployment. They understand how to turn baseline visitor traffic directly into revenue scale."
    }
  ];

  // Animation layout containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.45, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full bg-[#f8fafc]/50 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* SECTION HEADER BLOCK PLATFORM */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-[#10223d] text-[38px] md:text-[44px] font-black tracking-tight leading-none">
            What Our <span className="text-[#00b4af]">Clients Say</span>
          </h2>
          <p className="mt-4 text-slate-700/95 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide leading-relaxed">
            Discover how our data-driven growth strategies, tailored marketing blueprints, and high-performance development systems deliver real impact.
          </p>
        </div>

        {/* 3-COLUMN REVIEWS MATRIX CANVAS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {feedbackData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 15px 30px -10px rgba(16, 34, 61, 0.08)" }}
              className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] transition-all duration-200"
            >
              <div>
                {/* 5-Star Geometric Vector Indicator Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <svg 
                      key={sIdx} 
                      className="w-5 h-5 text-[#f2a115]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Main Client Narrative Commentary Block */}
                <p className="text-slate-600 font-medium text-[14.5px] leading-[1.65] italic tracking-wide">
                  "{item.comment}"
                </p>
              </div>

              {/* Bottom Identity Shelf Footer Area */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[#10223d] font-black text-[15.5px] tracking-tight">
                    {item.name}
                  </span>
                  <span className="text-slate-400 font-bold text-[12px] uppercase tracking-wider mt-0.5">
                    {item.role}
                  </span>
                </div>
                
                {/* Structural Clean Quote Mark Watermark */}
                <span className="text-slate-100/70 text-[48px] font-serif leading-none select-none font-black translate-y-2">
                  ”
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;