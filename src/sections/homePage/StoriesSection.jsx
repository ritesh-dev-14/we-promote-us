import React from "react";
import { motion } from "framer-motion";

const StoriesSection = () => {
  const stories = [
  {
    id: "case-01",
    company: "Premium Modular Kitchen Brand",
    title: "Building a Premium Digital Presence for a Modern Kitchen Business",
    description:
      "We partnered with a modular kitchen company to create a refined digital experience that showcases craftsmanship, design expertise, and project portfolios. The objective was to improve brand credibility and generate qualified inquiries through a conversion-focused website.",
    tags: [
      "Website Design",
      "UI/UX Strategy",
      "Lead Generation"
    ],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200",
    metrics: [
      { label: "Industry", value: "Interior Design" },
      { label: "Focus", value: "Lead Growth" }
    ]
  },

  {
    id: "case-02",
    company: "Natural Granite & Stone Store",
    title: "Creating a Strong Online Showcase for a Granite & Stone Supplier",
    description:
      "For a granite and stone business, we designed a professional digital platform highlighting product collections, completed projects, and customer trust factors. The website was structured to help potential buyers discover products and request consultations more efficiently.",
    tags: [
      "Corporate Website",
      "Brand Positioning",
      "SEO Foundation"
    ],
    image:
      "data:image/jpeg;base64,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",
    metrics: [
      { label: "Industry", value: "Construction" },
      { label: "Focus", value: "Visibility" }
    ]
  },

  {
    id: "case-03",
    company: "Hotel & Hospitality Business",
    title: "Elevating the Digital Experience for Hospitality Brands",
    description:
      "We helped hospitality businesses strengthen their online presence through modern website experiences, clear service presentation, and streamlined customer inquiry flows. The goal was to build trust and improve direct customer engagement.",
    tags: [
      "Hospitality",
      "Website Development",
      "Local SEO"
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    metrics: [
      { label: "Industry", value: "Hospitality" },
      { label: "Focus", value: "Bookings" }
    ]
  }
];

  return (
    <section id="case-study" className="w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A]">
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
                      <span className="group-hover:text-[#00B4AF] transition-colors duration-200">
                        {story.title}
                      </span>
                      <svg 
                        className="w-5 h-5 mt-1 text-[#00B4AF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" 
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
                        <span className="text-xl md:text-2xl font-black text-[#00B4AF] tracking-tight block">
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