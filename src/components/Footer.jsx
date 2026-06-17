import { motion } from 'framer-motion';
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "How We Work", href: "#" }
  ];

  const supportLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ];

  const socialPlatforms = [
    { name: "Facebook", key: "fb", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { name: "Twitter", key: "tw", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { name: "LinkedIn", key: "ln", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { name: "Instagram", key: "ig", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
  ];

  return (
    <footer className="w-full bg-[#fcfbfa] pt-24 pb-10 px-6 md:px-12 lg:px-24 font-sans antialiased text-[#2d3139] select-none overflow-hidden relative border-t border-[#e3dfd8]">
      
      {/* SOFT EYE-COMFORT AMBIENT BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-[#00b4af]/3 to-amber-500/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-stone-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto flex flex-col relative z-10">
        
        {/* UPPER MAIN LAYOUT ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-12 pb-20">
          
          {/* COLUMN 1: BRAND PLATFORM & IMAGE LOGO ONLY */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start max-w-md">
            
            {/* CLEAN EMBEDDED LOGO CONTAINER */}
            <div className="h-15 mb-6 flex items-center group cursor-pointer">
              <img 
                src={logo} 
                alt="We Promote Logo" 
                className="h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
              />
            </div>

            <p className="text-stone-500 font-medium text-[15px] leading-[1.75] mb-8">
              An AI-powered digital marketing and web engineering agency dedicated to accelerating organic traffic, maximizing conversion velocity, and driving industry-leading ROAS.
            </p>
            
            {/* Premium Soft Earth-Tone Social Elements */}
            <div className="flex items-center gap-3.5">
              {socialPlatforms.map((platform) => (
                <motion.a
                  key={platform.key}
                  href="#"
                  aria-label={platform.name}
                  whileHover={{ y: -2, backgroundColor: "rgba(45, 49, 57, 0.05)", borderColor: "#00b4af", color: "#00b4af" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-10 h-10 bg-[#f4f1eb] border border-[#e3dfd8] rounded-xl flex items-center justify-center transition-all duration-200 text-stone-500"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={platform.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK NAV LINKS */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-12">
            <h4 className="text-[#00b4af] font-black text-[11.5px] uppercase tracking-[0.15em] mb-7 relative">
              Explore Links
              <span className="absolute -bottom-2 left-0 w-5 h-[2px] bg-[#00b4af]/40 rounded" />
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-stone-500 font-semibold text-[15px] tracking-wide hover:text-[#2d3139] transition-colors duration-200 block relative group py-0.5">
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#00b4af] transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT & RESOURCES */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col items-start">
            <h4 className="text-[#00b4af] font-black text-[11.5px] uppercase tracking-[0.15em] mb-7 relative">
              Support & Accountability
              <span className="absolute -bottom-2 left-0 w-5 h-[2px] bg-[#00b4af]/40 rounded" />
            </h4>
            <ul className="flex flex-col gap-4 mb-8">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-stone-500 font-semibold text-[15px] tracking-wide hover:text-[#2d3139] transition-colors duration-200 block relative group py-0.5">
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#00b4af] transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Comfort-Neutral Matte Card CTA Panel */}
            <div className="w-full bg-[#f6f4f0] border border-[#e8e4dc] rounded-2xl p-5 flex flex-col items-start shadow-none hover:border-[#dcd7cd] transition-all duration-300">
              <span className="text-stone-400 font-bold text-[11px] uppercase tracking-wider mb-1.5">Have an active inquiry?</span>
              <a 
                href="mailto:hello@wepromote.com" 
                className="text-[#2d3139] hover:text-[#00b4af] font-bold text-[15px] tracking-wide transition-colors duration-200 flex items-center gap-2 group"
              >
                hello@wepromote.com
                <svg className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00b4af] transition-colors transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* LOWER SUB-SHELF LEVEL */}
        <div className="pt-8 border-t border-[#e8e4dc] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <p className="text-stone-400 font-medium text-[13.5px] tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-stone-600 font-bold">We Promote</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-stone-400 font-extrabold text-[11px] tracking-[0.2em] uppercase select-none">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00b4af]/70" />
            Engineered For Absolute Scale
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;