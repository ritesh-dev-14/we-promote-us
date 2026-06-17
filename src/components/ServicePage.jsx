// import React from "react";

// const ServicePage = ({
//   heroTitle,
//   heroDescription,
//   heroImage,

//   aboutTitle,
//   aboutDescription,

//   processTitle,
//   processItems,

//   ctaTitle,
//   ctaDescription,
//   ctaButton,
// }) => {
//   return (
//     <div className="bg-white">

//       {/* HERO */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

//           <div>
//             <span className="text-blue-600 font-semibold uppercase tracking-widest">
//               Our Services
//             </span>

//             <h1 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
//               {heroTitle}
//             </h1>

//             <p className="mt-6 text-lg text-slate-600">
//               {heroDescription}
//             </p>

//             <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl">
//               Get Started
//             </button>
//           </div>

//           <div>
//             <img
//               src={heroImage}
//               alt={heroTitle}
//               className="rounded-3xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-4xl font-bold text-slate-900">
//             {aboutTitle}
//           </h2>

//           <p className="mt-6 text-slate-600 max-w-3xl">
//             {aboutDescription}
//           </p>

//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-center text-4xl font-bold text-slate-900 mb-14">
//             {processTitle}
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

//             {processItems?.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-2xl border border-slate-200"
//               >
//                 <h3 className="text-xl font-semibold text-slate-900 mb-4">
//                   {item.title}
//                 </h3>

//                 <p className="text-slate-600">
//                   {item.description}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-blue-600">
//         <div className="max-w-5xl mx-auto text-center px-6">

//           <h2 className="text-4xl font-bold text-white">
//             {ctaTitle}
//           </h2>

//           <p className="text-blue-100 mt-6">
//             {ctaDescription}
//           </p>

//           <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
//             {ctaButton}
//           </button>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default ServicePage;





import React from "react";

const ServiceLayout = ({
  // Hero Props
  heroTitle,
  heroCheckpoints = [],
  showForm = true,

  // Feature Section Props (The introductory content with an image)
  featureTitle,
  featureParagraphs = [],
  featureImage,

  // Grid Grid Props (The 6 boxes: e.g., Logo & Branding, Print Design)
  gridSectionTitle,
  gridItems = [],

  // Center Call-To-Action Banner Props
  bannerText,
  bannerBtnText,

  // Core Value Pillars / Process Steps (e.g., Research, Evaluate, Execute, Performance)
  pillarsTitle,
  pillarsItems = [],

  // Bottom Project Discussion Card
  bottomCtaTitle,
  bottomCtaDescription,
  bottomCtaBtnText,
  bottomCtaImage
}) => {
  return (
    <div className="w-full bg-white font-sans antialiased text-[#4A5568]">
      
      {/* ================= SECTION 1: HERO CONTAINER ================= */}
      <section className="w-full bg-[#F8FAFC] py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Main Context Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] leading-tight tracking-tight">
              {heroTitle}
            </h1>
            
            {/* Structural Checkpoints */}
            {heroCheckpoints.length > 0 && (
              <div className="space-y-3 pt-2">
                {heroCheckpoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm max-w-xl">
                    <span className="text-[#F59E0B] font-bold text-lg flex-shrink-0">✓</span>
                    <p className="text-sm sm:text-base font-semibold text-[#334155]">{point}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <button className="px-6 py-3.5 bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-bold uppercase tracking-wider text-sm rounded shadow-md">
                Schedule a Meeting
              </button>
            </div>
          </div>

          {/* Right Main Consultation Form Column */}
          <div className="lg:col-span-5 w-full">
            {showForm ? (
              <div className="bg-[#111827] text-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold text-center tracking-wide mb-6 border-b border-gray-800 pb-4">
                  Request a Free Consultation
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name*" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" required />
                    <input type="email" placeholder="Business Email" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Website" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" />
                    <input type="tel" placeholder="Mobile" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Service</label>
                    <input type="text" placeholder="Graphic Design / SEO / Development" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" />
                  </div>
                  <div>
                    <textarea placeholder="I Need Help with..." rows="3" className="w-full px-4 py-2.5 rounded bg-white text-gray-900 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"></textarea>
                  </div>
                  
                  {/* Recaptcha Mockup Stand-in Container */}
                  <div className="bg-gray-800 p-3 rounded flex items-center justify-between border border-gray-700">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="captcha" className="w-5 h-5 rounded text-[#F59E0B] focus:ring-0 cursor-pointer" />
                      <label htmlFor="captcha" className="text-xs font-medium text-gray-300 select-none cursor-pointer">I'm not a robot</label>
                    </div>
                    <div className="flex flex-col items-center justify-center scale-90">
                      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin hidden" />
                      <span className="text-[9px] text-gray-400 font-mono tracking-tight">reCAPTCHA</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button type="submit" className="w-full py-3 bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-extrabold uppercase tracking-wider text-xs rounded shadow">
                      Submit
                    </button>
                    <button type="reset" className="w-full py-3 bg-transparent hover:bg-gray-800 transition-colors text-gray-400 hover:text-white font-extrabold uppercase tracking-wider text-xs rounded border border-gray-700">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-12 h-1 bg-amber-500" />
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: GRAPHICS INTRO FEATURE ================= */}
      {featureTitle && (
        <section className="w-full py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img 
                src={featureImage || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"} 
                alt="Feature Showcase Context Illustration" 
                className="w-full h-auto rounded-3xl shadow-xl object-cover border border-gray-100"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E293B] leading-snug">
                {featureTitle}
              </h2>
              <div className="w-16 h-1 bg-[#10B981] rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                {featureParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 3: THE RICH PALETTE GRID ================= */}
      {gridItems.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-[#FAF9FB] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-16 tracking-tight">
              {gridSectionTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridItems.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4 group">
                  <div className="w-14 h-14 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {item.icon || "✦"}
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] tracking-tight group-hover:text-[#1E3A8A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 4: MID CALL-TO-ACTION BANNER ================= */}
      {bannerText && (
        <section className="w-full py-12 bg-[#0F172A] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-4xl leading-relaxed">
              {bannerText}
            </p>
            <button className="whitespace-nowrap px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-extrabold text-xs tracking-widest uppercase rounded shadow-lg">
              {bannerBtnText || "Let's Discuss Now"}
            </button>
          </div>
        </section>
      )}

      {/* ================= SECTION 5: CORE PILLARS / WHY HIRE US ================= */}
      {pillarsItems.length > 0 && (
        <section className="w-full py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] mb-16 tracking-tight">
            {pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {pillarsItems.map((pillar, index) => (
              <div key={index} className="flex gap-4 sm:gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B] text-white font-black flex items-center justify-center flex-shrink-0 shadow-md text-base">
                  {pillar.customIcon || (index + 1)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SECTION 6: INTERACTIVE FOOTER CTA CARD ================= */}
      {bottomCtaTitle && (
        <section className="w-full py-16 bg-[#F8FAFC] border-t border-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-2xl p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Project Illustration Vector Wrapper */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <img 
                src={bottomCtaImage || "https://images.unsplash.com/photo-1553484771-047a44eee27f?auto=format&fit=crop&q=80&w=800"} 
                alt="Interactive Graphic Project Collaboration Pipeline" 
                className="max-h-64 lg:max-h-72 w-auto object-contain"
              />
            </div>

            {/* Direct Copywriting Context Block */}
            <div className="w-full lg:w-[60%] space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E293B] tracking-tight leading-tight">
                {bottomCtaTitle}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {bottomCtaDescription}
              </p>
              <div className="pt-2">
                <button className="px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-black uppercase text-xs tracking-widest rounded-xl shadow-xl hover:shadow-amber-500/20">
                  {bottomCtaBtnText || "Contact Us Today"}
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

    </div>
  );
};

export default ServiceLayout;