import React from 'react';
import { motion } from 'framer-motion';
import triveniLogo from "../../assets/partnerships/triveniLogo.png"
import IDClogo from "../../assets/partnerships/logoIDC.png"
import theClassicLogo from "../../assets/partnerships/logoTheClassic.png"
import altezzaLogo from "../../assets/partnerships/altezzalogo.jpg"
import logoLuxuryKuche from "../../assets/partnerships/logoLuxuryKuche.png"
import logoAstheticHomes from "../../assets/partnerships/logoAstheticHomes.png"
import logoDecor from "../../assets/partnerships/logoDecor.png"
import logoAadique from "../../assets/partnerships/logoAadique.png"
import logoPunjabModular from "../../assets/partnerships/logoPunjabModular.png"
import logoBachan from "../../assets/partnerships/logoBachan.png"
import InneLogo from "../../assets/partnerships/inneLogo.jpg"
import logoLadazzle from "../../assets/partnerships/logoLa'dazzle.png"
import logoHanda from "../../assets/partnerships/logoHanda.png"
import logoHCS from "../../assets/partnerships/logoHCS.png"
import logoGuptaBrothers from "../../assets/partnerships/logoGuptaBrothers.png"
import logoMittal from "../../assets/partnerships/logoMittal.png"
import logoMansarover from "../../assets/partnerships/logoMansarover.png"
import logoGoyalSweets from "../../assets/partnerships/logoGoyalSweets.png"
import logoModrika from "../../assets/partnerships/logoModrika.png"
import logoKamla from "../../assets/partnerships/logoKamla.png"


// const placeholderLogo = "https://via.placeholder.com/180x60/ffffff/94a3b8?text=BRAND+LOGO";

const BrandsTrust = () => {
  // 5 columns over multiple rows based on your asset array length
  const clientLogos = [
    { name: "ISKCON Columbus", img: triveniLogo },
    { name: "C-DAC", img: IDClogo },
    { name: "Nexgen Agency", img: theClassicLogo },
    { name: "FS Insight", img: altezzaLogo },
    { name: "Wheely Wheels", img: logoLuxuryKuche },
    { name: "Thread & Ink", img: logoAstheticHomes },
    { name: "Payclix", img: logoDecor },
    { name: "Lengthis", img: logoAadique },
    { name: "Hagan", img: logoPunjabModular },
    { name: "Skin & Cosmetic Surgery", img: logoBachan },
    { name: "Amrit", img: InneLogo },
    { name: "Home Center MI", img: logoLadazzle },
    { name: "Hale Road Medical", img: logoHanda },
    { name: "Bacteriostatic Water", img: logoHCS },
    { name: "Heera", img: logoGuptaBrothers },
    { name: "Gulla CPA", img: logoMittal },
    { name: "Guide Hustle", img: logoMansarover },
    { name: "Golden Key Group", img: logoGoyalSweets },
    { name: "Iidots", img: logoModrika },
    { name: "Adventure EXP", img: logoKamla },
  ];

  return (
  <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-12 lg:px-24 font-sans antialiased text-[#0f172a] overflow-hidden relative">
      {/* Soft Architectural Grid Background Accent */}
      

      <div className="max-w-[1320px] mx-auto relative z-10">
        
        {/* CENTERED EDITORIAL HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">
            Brands That <span className="text-[#00b4af]">Trust Us</span>
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl mx-auto">
            We partner with enterprises, healthcare providers, and high-growth startups globally to construct elite organic digital visibility.
          </p>
        </div>

        {/* PIXEL-PERFECT BORDERED LOGO MATRIX */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(15,23,42,0.02)]">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className=" flex items-center justify-center p-6 bg-white border border-slate-100 relative group transition-colors duration-300 hover:bg-[#fafcfe] cursor-default"
            >
              {/* Subtle inner card border interaction matching your theme */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#00b4af]/30 transition-all duration-300 pointer-events-none z-20" />
              
              {/* Logo Presentation Frame */}
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                src={logo.img}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-[55px] object-contain filter  opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsTrust;