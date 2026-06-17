import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    rating: 5,
    quote: "Working with this team completely transformed our product trajectory. Our pipeline loading speed went from 4.2 seconds down to 45ms, driving a direct surge in customer acquisition.",
    author: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Nova SaaS Ecosystems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    rating: 5,
    quote: "Their programmatic SEO engine delivered what three organic search firms failed to do over eighteen months. Our monthly unique visitors spiked past 4M, completely shifting our sales framework.",
    author: "Marcus Vance",
    role: "VP of Growth & Operations",
    company: "Scribe Media Platforms",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    rating: 5,
    quote: "The strategic redesign of our digital banking client portal was executed with deep precision. User engagement benchmarks jumped by 240% within the first fiscal quarter post-launch.",
    author: "Elena Rostova",
    role: "Head of Product Design",
    company: "Acme Fintech Corp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    rating: 5,
    quote: "The absolute benchmark for elite engineering and intuitive UX architecture. They didn't just build components—they shaped a highly scalable, premium brand experience for our buyers.",
    author: "David Thorne",
    role: "Managing Director",
    company: "Vogue Luxury Fashion",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export default function TestimonialSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-[#F5F6FA] py-32 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#231F54] relative overflow-hidden">
      
      {/* Background Graphic Ambient Blurs */}
      <div className="absolute right-[-15%] top-[-5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-bl from-[#74358C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#231F54]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Split Layout Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Editorial Header Block */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-24">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              <span className="w-6 h-[1px] bg-gray-300" />
              <span>Social Proof Layer</span>
            </nav>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-[#231F54] mb-6 leading-[1.1]">
              Validated by <br />
              <span className="text-[#74358C] font-serif italic font-normal">Industry Leaders</span>
            </h2>
            
            <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-8 max-w-md">
              We don't just ship production code. We partner with product engineering teams globally to generate verifiable growth matrices and premium digital transformations.
            </p>

            {/* Micro Conversion Counter Block */}
            <div className="pt-8 border-t border-gray-200/80 flex items-center gap-12">
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#231F54]">99.4%</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Retention Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[#74358C]">12.4x</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Average ROAS</p>
              </div>
            </div>
          </div>

          {/* Right Fluid Interactive Masonry Stack */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TESTIMONIALS_DATA.map((item) => {
              const isDimmed = hoveredCard !== null && hoveredCard !== item.id;
              
              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={{ 
                    opacity: isDimmed ? 0.45 : 1,
                    scale: hoveredCard === item.id ? 1.02 : 1,
                    y: hoveredCard === item.id ? -4 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-[0_4px_25px_rgba(35,31,84,0.01)] hover:shadow-[0_30px_50px_-15px_rgba(35,31,84,0.08)] hover:border-gray-300/80 transition-shadow duration-500 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Decorative Subtle Quote Icon backdrop */}
                  <span className="absolute right-6 top-4 text-7xl font-serif font-black text-gray-100 select-none pointer-events-none transition-colors duration-300 group-hover:text-[#74358C]/5">
                    “
                  </span>

                  <div>
                    {/* Star Matrix Header */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-[#74358C]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Quote Prose Text Block */}
                    <p className="text-xs md:text-sm text-[#231F54]/90 font-light leading-relaxed mb-8 relative z-10">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile Author Card Footer Block */}
                  <div className="pt-6 border-t border-gray-100 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#74358C]/10 bg-gray-50 flex-shrink-0">
                      <img 
                        src={item.avatar} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-[#231F54] tracking-tight truncate">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                        {item.role}, <span className="text-[#74358C]/90 font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Absolute Minimal Top Track Active Highlight Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#74358C] to-[#231F54] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}