import React from "react";
import { motion } from "framer-motion";

const StoriesSection = () => {
  // Case studies data extracted directly with absolute textual mapping from your mockups
  const stories = [
    {
      company: "G-Crown Jewellery",
      title: "How We Scaled Luxury E-Commerce Revenue by 340% via Omnichannel Marketing",
      description:
        "Struggling with inconsistent conversions and high acquisition costs, G-Crown needed a complete digital transformation. We redesigned their sales funnel, integrated advanced AI audience tracking, and optimized their local and global SEO matrices.",
      metrics: [
        { label: "Revenue Growth", value: "+340%", color: "text-emerald-600 bg-emerald-50" },
        { label: "Cost Per Lead", value: "-45%", color: "text-amber-600 bg-amber-50" },
      ],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600",
      tags: ["E-Commerce SEO", "Meta Ads", "CRO"],
    },
    {
      company: "Hotel Shiv Ganga, Rishikesh",
      title: "Driving 4.5x Direct Booking Volume & Transforming Local Search Visibility",
      description:
        "Over-reliant on third-party OTA platforms charging heavy commissions, Hotel Shiv Ganga wanted a custom direct booking engine ecosystem. Our team engineered high-performance landing pages and implemented localized hyper-targeted search blueprints.",
      metrics: [
        { label: "Direct Bookings", value: "4.5x More", color: "text-sky-600 bg-sky-50" },
        { label: "Local Map Rank", value: "Top #3", color: "text-indigo-600 bg-indigo-50" },
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      tags: ["Local SEO", "PPC Campaign", "Web Dev"],
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc]/60 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* SECTION CORE HEADING PLATE */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-[#10223d] text-[38px] md:text-[44px] font-black tracking-tight leading-none">
            Our Success Stories
          </h2>
          <p className="mt-4 text-slate-600 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide leading-relaxed">
            Real clients. Real metrics. See how our high-performance marketing engines, data-driven frameworks, 
            and design optimizations create measurable business value worldwide.
          </p>
        </div>

        {/* DOUBLE-COLUMN CASE STUDY CARDS GRID */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/70 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300/60"
            >
              {/* Card Main Image Body Layout Block */}
              <div>
                <div className="w-full aspect-[16/9] overflow-hidden bg-slate-100 border-b border-slate-100 relative group">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#10223d] text-white font-extrabold text-[11px] tracking-widest px-3.5 py-1.5 rounded-md uppercase shadow-sm">
                    {story.company}
                  </div>
                </div>

                {/* Card Context Information Canvas */}
                <div className="p-8 pb-4">
                  {/* Categorization Tags Track */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-slate-500 font-bold text-[11.5px] tracking-wider bg-slate-100 px-2.5 py-1 rounded-md uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Primary Narrative Headings */}
                  <h3 className="text-[#10223d] font-black text-[21px] md:text-[23px] tracking-tight leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 font-medium text-[14.5px] leading-[1.65] mb-6">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* Dynamic Metric Output Panel & Bottom Button Shelf */}
              <div className="px-8 pb-8 pt-0">
                <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100/80 py-5 mb-6">
                  {story.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col items-start">
                      <span className="text-slate-400 font-bold text-[11.5px] uppercase tracking-wider mb-1">
                        {metric.label}
                      </span>
                      <span className={`font-black text-[22px] md:text-[24px] tracking-tight px-3 py-0.5 rounded-lg ${metric.color}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#f2a115] hover:bg-[#de910b] text-white font-extrabold text-[13px] tracking-widest py-4 rounded-xl transition-all duration-150 uppercase shadow-[0_4px_15px_rgba(242,161,21,0.25)]"
                >
                  Read Full Case Study
                </motion.button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoriesSection;