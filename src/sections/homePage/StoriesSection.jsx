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
      "https://i.pinimg.com/736x/4e/17/5e/4e175e5e92c2a5c07964351eab3b0abf.jpg",
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
      "https://i.pinimg.com/736x/9b/f9/49/9bf9498344360e8545611009da0a2fd2.jpg",
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