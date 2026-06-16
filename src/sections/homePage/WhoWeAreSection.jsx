import { motion } from 'framer-motion';

const WhoWeAreSection = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden select-none">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: HERO TYPOGRAPHY ANCHOR LAYER */}
        <div className="lg:col-span-5 flex flex-col justify-center relative pl-0 md:pl-8 lg:pl-12">
          {/* Top Geometric Accent Bar Line */}
          <div className="w-25 h-1.75 bg-[#f2a115] mb-4 rounded-xs" />
          
          {/* Scaled Structural Heading */}
          <h2 className="text-[#10223d] text-[76px] sm:text-[90px] md:text-[105px] font-black tracking-tight leading-[0.88] flex flex-col font-sans uppercase">
            <span>Who</span>
            <span className="pl-6 sm:pl-8">We</span>
            <span className="text-[#10223d]">Are</span>
          </h2>
        </div>

        {/* RIGHT COLUMN: BRAND PARAGRAPH DESCRIPTIONS & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <p className="text-[15.5px] sm:text-[16.5px] text-slate-700/95 font-semibold tracking-wide leading-[1.75] max-w-180">
            With 14+ years in the industry and a team of 50+ specialists, we know what it takes to grow a 
            business online. Our people work every day across SEO, paid advertising, social media and web 
            design for clients running clinics, online stores, law firms, hotels and real estate businesses. We 
            use AI and live data to build strategies around what your customers are actually searching for, 
            not just what looks good on paper. Every business we work with gets a plan built around their 
            specific market and goals. Clients across India, the US, UK and Canada trust us to keep them 
            ahead of their competition. We'd love to do the same for you.
          </p>

          {/* Premium Depth Call-To-Action Button with Ambient Drop Shadow Frame */}
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 bg-[#f2a115] hover:bg-[#de910b] text-white font-extrabold text-[13.5px] tracking-widest px-9 py-4.5 rounded-full shadow-[0_6px_20px_rgba(242,161,21,0.35)] hover:shadow-[0_8px_25px_rgba(242,161,21,0.45)] transition-all duration-200 uppercase"
          >
            Know More About Us
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;