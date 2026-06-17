import React from "react";
import { motion } from "framer-motion";

const StoriesSection = () => {
  const stories = [
    {
      id: "case-01",
      company: "G-Crown Jewellery",
      title: "Scaling Luxury E-Commerce Revenue by 340% via Omnichannel Infrastructure",
      description:
        "Struggling with fragmented conversions and volatile acquisition overhead, G-Crown required a complete system overhaul. We re-engineered their pipeline funnel physics, deployed advanced telemetry tracking, and optimized their structural global search indexes.",
      metrics: [
        { label: "Revenue Yield", value: "+340%" },
        { label: "Acquisition Cost", value: "-45%" },
      ],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200",
      tags: ["E-Commerce Architecture", "Meta Deployment", "CRO Matrix"],
      slug: "/case-studies/g-crown-jewellery"
    },
    {
      id: "case-02",
      company: "Hotel Shiv Ganga",
      title: "Driving 4.5x Direct Booking Channels & Securing Search Dominance",
      description:
        "Over-reliant on high-commission third-party OTA platforms, Hotel Shiv Ganga deployed our custom direct-booking engine. Our engineers designed high-velocity conversion nodes and executed localized search visibility blueprints.",
      metrics: [
        { label: "Direct Booking Volume", value: "4.5x Yield" },
        { label: "Local Index Position", value: "Top #3" },
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      tags: ["Local Maps Engine", "Targeted PPC", "Platform Dev"],
      slug: "/case-studies/hotel-shiv-ganga"
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        
        {/* STRUCTURAL HEADER BLOCK */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
            Case studies in scale.
          </h2>
        </div>

        {/* HIGH-END INTERACTIVE GRID */}
        <div className="space-y-20">
          {stories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <a
                href={story.slug}
                key={story.id}
                className="block group relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center cursor-pointer"
              >
                {/* IMAGE COMPONENT WITH FLUID HOVER MASKS */}
                <div className={`col-span-12 md:col-span-5 ${!isEven ? 'md:order-last' : ''}`}>
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FDFBF7] border border-[#F1E4D1] relative">
                    
                    {/* Dark Editorial Image Styling */}
                    <motion.img
                      src={story.image}
                      alt={story.company}
                      variants={{
                        hover: { scale: 1.04 }
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover filter contrast-[102%] brightness-[0.95]"
                    />

                    {/* Subtle warm overlay that deepens on hover */}
                    <div className="absolute inset-0 bg-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />
                    
                    {/* Permanent clean branding label */}
                    <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white px-3 py-1 rounded-md shadow-xs">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider">
                        {story.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONTENT ELEMENT CONTAINER */}
                <div className="col-span-12 md:col-span-7 space-y-6">
                  
                  <div className="space-y-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono font-medium tracking-wide text-[#64748B] bg-[#F8FAFC] border border-slate-200/60 px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dynamic Header Block with Animated Inline SVG Arrow */}
                    <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug flex items-start gap-2">
                      <span className="group-hover:text-[#D97706] transition-colors duration-200">
                        {story.title}
                      </span>
                      <svg 
                        className="w-5 h-5 mt-1 text-[#F59E0B] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </h3>

                    <p className="text-[#566171] text-sm md:text-base leading-relaxed font-normal">
                      {story.description}
                    </p>
                  </div>

                  {/* Clean Integrated Data Panels */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    {story.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                          {metric.label}
                        </span>
                        <span className="text-xl md:text-2xl font-black text-[#F59E0B] tracking-tight block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StoriesSection;