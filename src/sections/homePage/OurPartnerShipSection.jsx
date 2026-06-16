import React from 'react';

const OurPartnerShipSection = () => {
  // Ordered partner dataset perfectly mapping text content to exact company layout slots
  const partners = [
    {
      name: "GoDaddy",
      logo: (
        <span className="font-sans font-extrabold text-[23px] text-[#00a6a0] tracking-tight flex items-center gap-1">
          <span className="text-[26px] font-normal leading-none">teal🩵</span>GoDaddy
        </span>
      ),
    },
    {
      name: "Shopify",
      logo: (
        <span className="font-sans font-black text-[24px] text-[#1a1a1a] tracking-tight flex items-center gap-1.5">
          <span className="text-[#96bf48] text-[26px]">🛍️</span>shopify
        </span>
      ),
    },
    {
      name: "Namecheap",
      logo: (
        <span className="font-sans font-bold text-[21px] text-[#4d4d4d] tracking-tight flex items-center gap-1">
          <span className="text-[#de5a24] font-black text-[23px]">N</span>namecheap
        </span>
      ),
    },
    {
      name: "HostGator",
      logo: (
        <span className="font-sans font-black text-[22px] text-[#e67e22] tracking-wide flex items-center gap-1">
          <span className="text-[24px]">🐊</span>HostGator
        </span>
      ),
    },
    {
      name: "Adobe",
      logo: (
        <span className="font-sans font-black text-[23px] text-[#ff0000] tracking-tight flex items-center gap-2">
          <span className="bg-[#ff0000] text-white px-2 py-0.5 rounded-[3px] text-[15px] font-black italic">A</span>Adobe
        </span>
      ),
    },
    {
      name: "HubSpot",
      logo: (
        <span className="font-sans font-black text-[24px] text-[#2e3e4c] tracking-tight flex items-center">
          HubSp<span className="text-[#ff7a59]">o</span>t
        </span>
      ),
    },
    {
      name: "Google Analytics",
      logo: (
        <span className="font-sans font-bold text-[19px] text-[#5f6368] leading-[1.1] flex items-center gap-2">
          <span className="text-[#f4b400] text-[24px] font-black">📊</span>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#5f6368] text-[18px]">Google</span>
            <span className="font-normal text-slate-500 text-[14px] mt-[-3px]">Analytics</span>
          </div>
        </span>
      ),
    },
    {
      name: "Bing Ads",
      logo: (
        <span className="font-sans font-bold text-[22px] text-[#2c3e50] tracking-tight flex items-center gap-1.5">
          <span className="text-[#008375] font-black text-[25px]">b</span>
          <span className="text-[#008375] font-extrabold">Bing</span>
          <span className="text-[#7f8c8d] font-normal">ads</span>
        </span>
      ),
    },
    {
      name: "Meta",
      logo: (
        <span className="font-sans font-black text-[25px] text-[#1c1e21] tracking-tight flex items-center gap-2">
          <span className="text-[#0064e0] text-[26px]">♾️</span>Meta
        </span>
      ),
    },
    {
      name: "Google Partner",
      logo: (
        <div className="flex items-center gap-2.5 border-l-[6px] border-l-[#4285f4] pl-2 h-[38px]">
          <div className="flex flex-col text-left font-sans leading-none">
            <span className="font-bold text-[15px] tracking-tight">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>
            <span className="text-slate-500 text-[12px] font-semibold tracking-wide mt-1">Partner</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-20 pb-0 relative font-sans antialiased select-none overflow-hidden">
      
      {/* HEADER LABEL AND SUBTEXT CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-[#10223d] text-[36px] md:text-[42px] font-black tracking-tight leading-none">
          Our Partnerships
        </h2>
        <p className="mt-3 text-slate-700/90 font-semibold text-[15.5px] md:text-[16.5px] tracking-wide">
          With our trusted partners, we consistently deliver top-notch digital marketing results!
        </p>
      </div>

      {/* COMPACT PIXEL-PERFECT PARTNER BRAND MATRIX */}
      <div className="w-full max-w-[1240px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/80 rounded-xl h-[105px] flex items-center justify-center p-4 transition-all duration-200 hover:shadow-md hover:border-gray-300"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>

      {/* SYSTEM SECTION SEPARATOR AXIS WITH CENTERED TRIANGLE POINTER */}
      <div className="w-full relative h-[1px] bg-gray-200/70">
        <div className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[11px] border-t-[#22c55e]" />
      </div>

    </section>
  );
};

export default OurPartnerShipSection;