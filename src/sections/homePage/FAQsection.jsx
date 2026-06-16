import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQsection = () => {
  // Track open state per accordion item index (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  // Exact FAQ content mapped out to match your agency niche structural data
  const faqData = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive, data-driven suite of growth services including Search Engine Optimization (SEO), ROI-focused Pay-Per-Click (PPC) advertising campaigns, high-performance Full Stack Web Development, and omnichannel Social Media Marketing frameworks designed to scale conversions."
    },
    {
      question: "How long does it take to see tangible results from SEO?",
      answer: "While structural optimizations and technical SEO cleanups provide quick index efficiency benefits, meaningful organic rank authority and compounding growth metrics typically take 3 to 6 months to mature depending on industry competition density."
    },
    {
      question: "Do you build custom web applications or just use templates?",
      answer: "We focus heavily on high-performance, pixel-perfect custom development. By writing clean code configurations using modern tech stacks like the MERN architecture, Tailwind CSS, and optimized motion rendering, we ensure ultra-fast page speeds and custom tailor design flows to mirror your absolute vision."
    },
    {
      question: "How do you track and report campaign data metrics?",
      answer: "We enforce complete clarity and accountability. You receive structured milestone dashboards alongside direct performance reporting logs that track your live conversion rates, exact cost-per-lead (CPL), search positioning shifts, and precise multi-channel return on ad spend (ROAS)."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8fafc]/40 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[960px] mx-auto flex flex-col items-center">
        
        {/* HEADING INFRASTRUCTURE PLATFORM */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-[#10223d] text-[38px] md:text-[44px] font-black tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide leading-relaxed">
            Got questions? We've got answers. Explore our detailed breakdowns on how we drive 
            digital execution and scale performance metrics worldwide.
          </p>
        </div>

        {/* ACCORDION CONTAINER ENGINE */}
        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                {/* Trigger Button Row Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-6 focus:outline-none"
                >
                  <span className="text-[#10223d] font-black text-[17px] md:text-[18.5px] tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* High-Fidelity Custom Indicator Chevron Cross Frame */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 transition-colors ${
                      isOpen ? 'bg-[#10223d] text-white' : 'bg-slate-50 text-slate-500'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Animated Dropdown Smooth Expansion Layer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-7 pt-1 border-t border-slate-50">
                        <p className="text-slate-600 font-medium text-[15px] leading-[1.7] tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQsection;