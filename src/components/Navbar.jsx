import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import logoimg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'about', or null
  const [activeServiceTab, setActiveServiceTab] = useState(
    "DESIGN & DEVELOPMENT",
  );
  const navigate = useNavigate();

  // Highly Structured Professional Service Content Data Mapping
  const serviceContent = {
    "DIGITAL MARKETING": {
      col1Title: "Search Engine Optimization",
      col1Items: [
        "White lable SEO",
        "Local SEO",
        "ECommerce SEO",
        "Dental SEO",
        "Fashion SEO",
        "Law Firm SEO",
        "Locksmith SEO",
        "Roofing SEO",
        "Real Estate SEO",
        "Blockchain SEO"
      ],
      col2Title: "Digital Marketing",
      col2Items: [
        "Content Marketing Agency",
        "Affiliate Marketing Services",
      ],
    },
    "PERFORMANCE MARKETING": {
      col1Title: "Pay Per Click Marketing Services",
      col1Items: [
        "Google Ads Management Services",
        "Social Media Advertising",
        "Youtube Marketing Agency",
        "Linkedin Marketing Agency",
        "Amazon Marketing Agency",
      ],
      col2Title: "Social Media",
      col2Items: [
        "Social Media Marketing Services",
        "Online Reputation Management",
      ],
    },
    INDUSTRIES: {
      col1Title: "Industries",
      col1Items: [
        "Dental Marketing Company",
        "Skin Care Digital Marketing Agency",
        "Hotel Digital Marketing Agency",
        "Locksmiths Digital Marketing Agency",
        "Law Firm Digital Marketing Agency"
      ],
      col2Title: "Consumer Facing Sectors",
      col2Items: [
        "Healthcare Digital Marketing Agency",
        "Real Estate Digital Marketing Agency",
        "Roofing Digital Marketing Agency",
        "Pest Control SEO Agency",
        "Restaurant SEO Agency",
      ],
    },
    "DESIGN & DEVELOPMENT": {
      col1Title: "Website Design Services",
      col1Icon: (
        <svg
          className="w-4 h-4 text-[#00b4af]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a15.998 15.998 0 01-3.42-3.42"
          />
        </svg>
      ),
      col1Items: [
        "UI/UX Design Strategy",
        "Responsive Web Design",
        "Graphics Services",
        "Landing Page Design",
      ],
      col2Title: "Website Development Services",
      col2Icon: (
        <svg
          className="w-4 h-4 text-[#00b4af]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
      col2Items: [
        "CMS Web Development",
        "E-commerce Engines",
        "Headless WordPress Ecosystems",
        "Custom Full Stack Applications",
        "Web Speed & Core Web Vitals Optimization",
        "Managed Maintenance & Security Support",
        "Cross-Platform Mobile Applications",
      ],
    },
  };

  return (
    <header className="w-full font-sans antialiased bg-white select-none relative z-50">
      {/* 1. REFINED UTILITY BAR */}
      <div className="w-full bg-[#0f2c59] text-white text-[12px] font-semibold px-12 h-[42px] flex justify-between items-center border-b border-white/5">
        {/* Left Side Corporate Badges */}
        <div className="flex items-center gap-2.5">
          {/* Facebook Badge */}
          <div className="bg-[#3b5998] px-2.5 py-1 rounded-[3px] flex items-center h-[22px] shadow-xs cursor-pointer hover:opacity-90 transition">
            <span className="font-extrabold tracking-tight text-[11px] text-white mr-1.5">
              facebook
            </span>
            <span className="text-[9px] text-white/70 font-normal border-l border-white/20 pl-1.5 tracking-wide">
              Marketing Partner
            </span>
          </div>
          {/* Google Badge */}
          <div className="bg-white px-2.5 py-1 rounded-[3px] flex items-center h-[22px] shadow-xs cursor-pointer hover:bg-gray-50 transition">
            <span className="font-bold tracking-tight text-[11px] mr-1.5">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-[9px] text-gray-500 font-medium border-l border-gray-200 pl-1.5 tracking-wide">
              Partner
            </span>
          </div>
        </div>

        {/* Right Contact & Language Select Options */}
        <div className="flex items-center gap-6 text-white/90">
          <div className="flex items-center gap-3">
            {/* WhatsApp Connection */}
            <FaWhatsapp className="w-5 h-5 text-green-400" />

            <a
              href="https://wa.me/917837777045"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition tracking-wide text-[12.5px]"
            >
              <span>+91- 78377 77045</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct US Line */}
            <a
              href="tel:+14192621977"
              className="flex items-center gap-1.5 hover:text-white transition tracking-wide text-[12.5px]"
            >
              <span className="text-[21px] leading-none">🇺🇸</span>
              <span>+1 (419) 262-1977</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER SHELF CONTROLLER */}
      <div
        className="w-full bg-white h-[90px] px-12 flex justify-between items-center relative border-b border-gray-100"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Pixel Perfect Vector Logo Mapping Area */}
        <div
          className="flex flex-col items-start cursor-pointer group w-58"
          onClick={() => navigate("/")}
        >
          <img src={logoimg} alt="Logo" />
        </div>

        {/* High-Fidelity Nav Anchors Configuration */}
        <nav className="flex items-center space-x-9 text-[13.5px] font-bold text-slate-700 tracking-wide">
          {/* Services Link Wrapper */}
          <div
            className="relative h-[90px] flex items-center cursor-pointer"
            onMouseEnter={() => setActiveMenu("services")}
          >
            <span
              className={`transition-colors duration-200 ${activeMenu === "services" ? "text-[#00b4af]" : "hover:text-[#00b4af]"}`}
            >
              SERVICES
            </span>
            <svg
              className={`w-3 h-3 ml-1.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-[#00b4af]" : "text-slate-400"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* About Us Link Dropdown Trigger */}
          <div
            className="relative h-[90px] flex items-center cursor-pointer"
            onMouseEnter={() => setActiveMenu("about")}
          >
            <span
              className={`transition-colors duration-200 ${activeMenu === "about" ? "text-[#00b4af]" : "hover:text-[#00b4af]"}`}
            >
              ABOUT LEIS
            </span>
            <svg
              className={`w-3 h-3 ml-1.5 transition-transform duration-200 ${activeMenu === "about" ? "rotate-180 text-[#00b4af]" : "text-slate-400"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

            {/* Standard Dropdown Component */}
            <AnimatePresence>
              {activeMenu === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className="absolute left-0 top-[90px] w-[190px] bg-white border border-slate-100 shadow-xl py-1.5 flex flex-col text-[12.5px] font-bold text-slate-600 rounded-b-md border-t-2 border-t-[#00b4af]"
                >
                  {["OUR TEAM", "OUR CULTURE", "CAREERS", "TRAINING"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`${item.toLowerCase().replace(" ", "-")}`}
                        className="px-5 py-2.5 hover:bg-slate-50 hover:text-[#00b4af] transition-colors border-l-2 border-transparent hover:border-[#00b4af] tracking-wide"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="blog"
            className="hover:text-[#00b4af] transition-colors duration-200"
          >
            BLOG
          </a>
          <a
            href="portfolio"
            className="hover:text-[#00b4af] transition-colors duration-200"
          >
            PORTFOLIO
          </a>
          <a
            href="testimonials"
            className="hover:text-[#00b4af] transition-colors duration-200"
          >
            TESTIMONIALS
          </a>
        </nav>

        {/* Premium Brand CTA Button Layout */}
        <button className="bg-[#00b4af] hover:bg-[#009e99] text-white font-bold text-[13.5px] px-6 py-3 rounded-full flex items-center gap-2 transition duration-200 shadow-xs hover:shadow-md tracking-wider border border-[#00a39e]/20">
          <span className="text-[14px]">👋</span> LET'S TALK
        </button>

        {/* 3. PREMIUM HUD OVERLAY PANEL (SERVICES MEGA MENU) */}
        <AnimatePresence>
          {activeMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-12 right-12 top-[90px] bg-[#f4f8fc] border border-slate-200/70 rounded-xl shadow-2xl p-6 flex gap-6 z-50 min-h-[360px]"
              onMouseEnter={() => setActiveMenu("services")}
            >
              {/* Perfectly Positioned Pure CSS Triangle Arrow Tip */}
              <div className="absolute top-[-9px] left-[54.6%] transform -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[9px] border-b-[#f4f8fc]"></div>

              {/* Sidebar Tabs Control Column */}
              <div className="w-[28%] flex flex-col gap-2.5 pr-2 border-r border-slate-200/60 justify-center">
                {Object.keys(serviceContent).map((tabName) => {
                  const isCurrent = activeServiceTab === tabName;
                  return (
                    <button
                      key={tabName}
                      onClick={() => setActiveServiceTab(tabName)}
                      onMouseEnter={() => setActiveServiceTab(tabName)}
                      className={`w-full text-left font-extrabold text-[12px] tracking-wider px-5 py-3.5 rounded-lg transition-all duration-200 ${
                        isCurrent
                          ? "bg-[#00b4af] text-white shadow-sm font-black"
                          : "bg-white text-slate-600 hover:bg-white hover:text-[#00b4af] shadow-2xs"
                      }`}
                    >
                      {tabName}
                    </button>
                  );
                })}
              </div>

              {/* Main Content Node Presentation Matrix */}
              <div className="w-[72%] grid grid-cols-2 gap-8 pl-6 py-4">
                {/* Visual Node Cluster 1 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 font-extrabold text-[14px] text-slate-900 mb-4 border-b border-slate-200/50 pb-2.5 tracking-wide">
                    {serviceContent[activeServiceTab].col1Icon || (
                      <span className="w-1.5 h-1.5 bg-[#00b4af] rounded-full"></span>
                    )}
                    <h3>{serviceContent[activeServiceTab].col1Title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {serviceContent[activeServiceTab].col1Items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-slate-600 font-semibold cursor-pointer hover:text-[#00b4af] transition-colors duration-150"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0 group-hover:bg-[#00b4af]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Node Cluster 2 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 font-extrabold text-[14px] text-slate-900 mb-4 border-b border-slate-200/50 pb-2.5 tracking-wide">
                    {serviceContent[activeServiceTab].col2Icon || (
                      <span className="w-1.5 h-1.5 bg-[#00b4af] rounded-full"></span>
                    )}
                    <h3>{serviceContent[activeServiceTab].col2Title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {serviceContent[activeServiceTab].col2Items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-slate-600 font-semibold cursor-pointer hover:text-[#00b4af] transition-colors duration-150"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
