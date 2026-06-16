import React from 'react';
import { motion } from 'framer-motion';

const ServiceSection = () => {
  // Structured service dataset with absolute textual alignment from your mockups
  const servicesData = [
    {
      title: "SEO Services",
      subtitle: "Increase Your Organic Growth",
      desc: "Is your business struggling with Poor Online Visibility? Want to enhance your organic reach, whether locally or in eCommerce? Our SEO experts specialize in growth marketing and have successfully ranked over 1.5 million keywords for our clients, helping them achieve outstanding visibility in search results.",
      features: ["Local SEO", "Link Building", "On Page SEO", "Ecommerce SEO"],
      buttonColor: "bg-[#f2a115] hover:bg-[#de910b] shadow-[0_5px_15px_rgba(242,161,21,0.3)]",
      icon: (
        <svg className="w-8 h-8 text-[#00b4af]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <circle cx="10" cy="12" r="2" />
          <path d="M14 15l3 3" />
        </svg>
      )
    },
    {
      title: "PPC Advertising",
      subtitle: "Generate More Leads & Sales",
      desc: "Want the best in PPC? Our elite team maximizes ROAS through expert search, smart campaigns, and shopping ads. We build ROI-driven PPC campaigns. With millions of conversions and proven growth strategies, we deliver unmatched results. Partner with us and watch your leads, sales, and success skyrocket!",
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Instagram Ads"],
      buttonColor: "bg-[#f2a115] hover:bg-[#de910b] shadow-[0_5px_15px_rgba(242,161,21,0.3)]",
      icon: (
        <svg className="w-8 h-8 text-[#4285f4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v9l4.5 4.5" />
          <path d="M12 12H7" />
        </svg>
      )
    },
    {
      title: "Web Development",
      subtitle: "Websites Built for Success",
      desc: "Our expert developers provide exceptional front-end and back-end web development, design, and programming services. With a proven track record of successful global projects, we turn ideas into reality, delivering innovative, tailored solutions to meet your needs and drive your digital success. Let's create greatness!",
      features: ["Ecommerce Development", "Speed Optimization", "WordPress Development", "Shopify Development"],
      buttonColor: "bg-[#f2a115] hover:bg-[#de910b] shadow-[0_5px_15px_rgba(242,161,21,0.3)]",
      icon: (
        <svg className="w-8 h-8 text-[#f2a115]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          <path d="M12 4.5l-2 15" />
        </svg>
      )
    },
    {
      title: "Social Media Marketing",
      subtitle: "Grow Your Online Presence",
      desc: "Social media isn't just about posting—it's about connecting. We're a social media management agency that takes your social channels to the next level by integrating omnichannel strategy. Through the intelligent use of AI, data-driven insights, and agile responses to market shifts, we craft social media campaigns that not only stand out but align perfectly with your broader digital objectives.",
      features: ["Instagram Marketing", "YouTube Marketing", "Facebook Marketing", "LinkedIn Marketing"],
      buttonColor: "bg-[#605a41] hover:bg-[#4f4a35] shadow-[0_5px_15px_rgba(96,90,65,0.3)]", // Custom variant color configuration as verified on your fourth block element mockup
      icon: (
        <svg className="w-8 h-8 text-[#e06666]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        
        {/* HEADER BRAND HUD LABELS */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="text-[#10223d] text-[38px] md:text-[44px] font-black tracking-tight leading-none">
            Our Services
          </h2>
          <p className="mt-4 text-slate-700/95 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide leading-relaxed max-w-[960px] mx-auto">
            We excel in driving marketing success and fostering organic growth through exceptional design and development. By mastering 
            the what, why, and how of your vision, we create innovative solutions that inspire impact and deliver extraordinary results.
          </p>
        </div>

        {/* 2x2 SERVICES CARD GRID PLATFORM */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <div>
                {/* Embedded Header HUD Plate */}
                <div className="bg-[#f8fafc] px-8 py-6 flex items-center gap-4 border-b border-slate-100">
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100">
                    {service.icon}
                  </div>
                  <h3 className="text-[#10223d] text-[24px] font-black tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Content Core Body Area */}
                <div className="p-8">
                  <h4 className="text-[#10223d] text-[16.5px] font-black tracking-wide mb-3">
                    {service.subtitle}
                  </h4>
                  <p className="text-slate-600/95 font-medium text-[14.5px] leading-[1.65] mb-6 min-h-[120px] lg:min-h-[96px]">
                    {service.desc}
                  </p>

                  {/* Feature Cross Grid Setup */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 mb-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {/* Custom High-Parity Gold Chevron Tick Markup */}
                        <svg className="w-4 h-4 text-[#f2a115] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700/90 font-bold text-[14px] tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Shelf Area */}
              <div className="px-8 pb-8 pt-2">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className={`${service.buttonColor} text-white font-extrabold text-[12.5px] tracking-widest px-9 py-4 rounded-xl transition-all duration-150 uppercase`}
                >
                  Learn More
                </motion.button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;