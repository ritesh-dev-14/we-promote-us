// import React from 'react'

// const Portfolio = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Portfolio



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PORTFOLIO_CATEGORIES = ["All Projects", "Web Design", "Development", "E-Commerce", "Digital Marketing", "SEO Automation"];

const PORTFOLIO_DATA = [
  {
    id: 1,
    category: "Web Design",
    client: "Acme Fintech Corp",
    title: "Redefining Next-Gen Digital Banking Interfaces",
    metric: "+240% Engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI Architecture", "Design System", "Figma Framework"]
  },
  {
    id: 2,
    category: "Development",
    client: "Nova SaaS Ecosystems",
    title: "High-Performance Cloud Enterprise Dashboard",
    metric: "45ms Load Time",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React Engine", "Next.js 14", "Tailwind Native"]
  },
  {
    id: 3,
    category: "E-Commerce",
    client: "Vogue Luxury Fashion",
    title: "Immersive Direct-to-Consumer Flagship Store",
    metric: "3.8% Conversion Rate",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Headless Commerce", "Shopify API", "WebXR Experience"]
  },
  {
    id: 4,
    category: "Digital Marketing",
    client: "Apex Global Logistics",
    title: "Omnichannel Acquisition Campaign Framework",
    metric: "12.4x ROAS Achieved",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    tags: ["Growth Marketing", "Funnel Automation", "Paid Acquisition"]
  },
  {
    id: 5,
    category: "SEO Automation",
    client: "Scribe Media Platforms",
    title: "AI-Driven Organic Content Scaling Engine",
    metric: "4.2M Monthly Visits",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Programmatic SEO", "Data Pipelines", "Schema Core"]
  },
  {
    id: 6,
    category: "Web Design",
    client: "Aero Logistics Labs",
    title: "Interactive Operations & Supply Chain Portal",
    metric: "-40% Churn Reduction",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    tags: ["Interface Logic", "Data Viz Components", "Tailwind"]
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="w-full bg-[#F5F6FA] py-32 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#231F54] relative overflow-hidden">
      
      {/* Editorial Decorative Background Elements */}
      <div className="absolute left-[-5%] top-[15%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-[#74358C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-[#231F54]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
          <a href="#home" className="hover:text-[#74358C] transition-colors duration-200">Home</a>
          <span className="text-gray-300">/</span>
          <span className="text-[#231F54]/60">Case Studies</span>
        </nav>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#231F54] mb-4 lg:leading-[1.1]">
            Selected <span className="text-[#74358C] font-serif italic font-normal">Works</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            A curated showcase of digital products, cloud architecture, and high-growth marketing strategies built to outperform market standards.
          </p>
        </div>

        {/* Premium Pill Dynamic Filter Container */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-[0_10px_30px_rgba(35,31,84,0.04)] border border-gray-200/50 max-w-full overflow-x-auto scrollbar-none token-scroller">
            {PORTFOLIO_CATEGORIES.map((tab) => {
              const isActive = tab === activeCategory;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap rounded-full ${
                    isActive ? "text-white" : "text-gray-500 hover:text-[#231F54]"
                  }`}
                >
                  <span className="relative z-20">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#74358C] to-[#231F54] rounded-full z-10 shadow-md shadow-[#74358C]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid - Asymmetric Layout Engine */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(35,31,84,0.02)] border border-gray-200/60 hover:shadow-[0_40px_70px_-15px_rgba(35,31,84,0.15)] hover:border-gray-300 transition-all duration-500"
              >
                {/* Image Section with Integrated Performance Banner */}
                <div className="w-full aspect-[16/11] overflow-hidden relative bg-gray-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-[1.05] transition-transform duration-750 ease-out opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  
                  {/* Subtle Top-down Vignette Mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                  
                  {/* Client Identifier Label */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] tracking-widest font-black uppercase text-white bg-[#231F54]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                      {project.client}
                    </span>
                  </div>

                  {/* High Impact Core Data Metric Badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="text-[10px] tracking-wider font-bold uppercase text-white bg-gradient-to-r from-[#74358C] to-[#231F54] px-3 py-1.5 rounded-md shadow-lg">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="p-7 flex-1 flex flex-col justify-between bg-white relative z-20">
                  <div>
                    {/* Category Hook */}
                    <span className="text-[11px] font-bold text-[#74358C] uppercase tracking-widest block mb-2">
                      {project.category}
                    </span>
                    
                    {/* Case Title */}
                    <h3 className="text-xl font-bold tracking-tight text-[#231F54] group-hover:text-[#74358C] transition-colors duration-300 mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Meta Architecture Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-[#F5F6FA] text-gray-500 px-2.5 py-1 rounded font-medium border border-gray-200/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Bottom Trigger */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#231F54] group-hover:text-[#74358C] transition-colors duration-300 uppercase tracking-widest">
                      <span>View Case Study</span>
                      <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Filter Fallback */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white/60 border border-dashed border-gray-300/80 rounded-2xl max-w-md mx-auto mt-12"
          >
            <p className="text-gray-400 font-medium text-sm tracking-wide">No production assets deployed under this layer yet.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}