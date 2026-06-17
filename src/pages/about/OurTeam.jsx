// // // import React from 'react'

// // // const OurTeam = () => {
// // //   return (
// // //     <div>OurTeam</div>
// // //   )
// // // }

// // // export default OurTeam



// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // // Mock high-end enterprise team assets
// // const LEADERSHIP_DATA = [
// //   {
// //     id: "deepanshu",
// //     name: "Mr. Deepanshu Thakral",
// //     role: "Chief Executive Officer (CEO)",
// //     bio: "An IT industry pioneer for over a decade. Through intentional strategy, foresight, and relentless execution, he established the core foundation for our digital engineering ecosystem—serving as a high-velocity growth catalyst.",
// //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
// //   },
// //   {
// //     id: "deepika",
// //     name: "Mrs. Deepika Sharma",
// //     role: "Managing Director & Head of Growth",
// //     bio: "The absolute benchmark for strategic digital leadership. Her mastery of scale operations and deep precision management frameworks sets our team architecture apart, transforming complex project criteria into streamlined success models.",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
// //   }
// // ];

// // const TEAM_AVATARS = [
// //   { id: 1, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120" },
// //   { id: 2, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" },
// //   { id: 3, img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=120" },
// //   { id: 4, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120" },
// //   { id: 5, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120" },
// //   { id: 6, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=120" },
// //   { id: 7, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120" },
// //   { id: 8, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120" },
// //   { id: 9, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" },
// //   { id: 10, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" },
// //   { id: 11, img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=120" },
// //   { id: 12, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120" },
// //   { id: 13, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" },
// //   { id: 14, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120" },
// //   { id: 15, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120" },
// // ];

// // export default function PremiumEnterpriseAbout() {
// //   const [activeLeader, setActiveLeader] = useState(LEADERSHIP_DATA[0].id);

// //   return (
// //     <section className="w-full bg-[#F5F6FA] py-32 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#231F54] relative overflow-hidden">
      
// //       {/* BRAND GRADIENT ACCENT LAYER BLURS */}
// //       <div className="absolute right-[-10%] top-[-5%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-bl from-[#74358C]/4 to-transparent blur-3xl pointer-events-none" />
// //       <div className="absolute left-[-5%] mid:bottom-[20%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-[#231F54]/3 to-transparent blur-3xl pointer-events-none" />

// //       <div className="max-w-7xl mx-auto relative z-10">
        
// //         {/* SECTION 1: HERO TEXT STAGE */}
// //         <div className="text-center max-w-3xl mx-auto mb-24">
// //           <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">
// //             <span className="w-6 h-[1px] bg-gray-300" />
// //             <span>The Intelligence Capital</span>
// //             <span className="w-6 h-[1px] bg-gray-300" />
// //           </nav>
// //           <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#231F54] leading-[1.1] mb-6">
// //             A Passionate Team of <br />
// //             <span className="text-[#74358C] font-serif italic font-normal">Skilled Visionaries</span>
// //           </h2>
// //           <p className="text-base text-gray-500 font-light leading-relaxed">
// //             The engineers, architects, and growth hackers at We Promote share a unified mission: building high-scale components and performance frameworks that deliver absolute digital dominance.
// //           </p>
// //         </div>

// //         {/* SECTION 2: INTERACTIVE LEADERSHIP INTERACTION STAGE */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-36">
          
// //           {/* Active Profile Text Box Display (Left) */}
// //           <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
// //             <span className="text-xs font-black uppercase tracking-widest text-[#74358C] bg-[#74358C]/5 px-3.5 py-1.5 rounded-full">
// //               Executive Guidance
// //             </span>
            
// //             <div className="relative min-h-[220px]">
// //               <AnimatePresence mode="wait">
// //                 {LEADERSHIP_DATA.map((leader) => leader.id === activeLeader && (
// //                   <motion.div
// //                     key={leader.id}
// //                     initial={{ opacity: 0, x: -15 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: 15 }}
// //                     transition={{ duration: 0.35, ease: "easeOut" }}
// //                     className="space-y-4"
// //                   >
// //                     <h3 className="text-3xl font-black tracking-tight text-[#231F54]">
// //                       {leader.name}
// //                     </h3>
// //                     <p className="text-sm font-semibold text-[#74358C] tracking-wide uppercase">
// //                       {leader.role}
// //                     </p>
// //                     <p className="text-gray-500 font-light text-base leading-relaxed">
// //                       {leader.bio}
// //                     </p>
// //                   </motion.div>
// //                 ))}
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           {/* Interactive Cards Stage (Right) */}
// //           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
// //             {LEADERSHIP_DATA.map((leader) => {
// //               const isSelected = leader.id === activeLeader;
// //               return (
// //                 <div
// //                   key={leader.id}
// //                   onClick={() => setActiveLeader(leader.id)}
// //                   className={`relative h-[380px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-500 border ${
// //                     isSelected 
// //                       ? "border-[#74358C] shadow-[0_30px_60px_-15px_rgba(116,53,140,0.18)]" 
// //                       : "border-gray-200 opacity-70 hover:opacity-100 shadow-[0_10px_35px_rgba(35,31,84,0.02)]"
// //                   }`}
// //                 >
// //                   <img 
// //                     src={leader.image} 
// //                     alt={leader.name}
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                   />
// //                   {/* Premium Vignette Overlay Block */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[#231F54]/90 via-[#231F54]/30 to-transparent" />
                  
// //                   <div className="absolute bottom-6 left-6 right-6 text-white">
// //                     <h4 className="text-lg font-bold tracking-tight">{leader.name}</h4>
// //                     <p className="text-xs text-gray-300 font-medium mt-0.5">{leader.role}</p>
// //                   </div>

// //                   {/* Top Right Active Status Badge */}
// //                   {isSelected && (
// //                     <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#74358C] ring-4 ring-white" />
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* SECTION 3: ORGANIC MASS TEAM BUBBLE MATRIX */}
// //         <div className="text-center mb-36">
// //           <h3 className="text-2xl font-black text-[#231F54] mb-12 tracking-tight">
// //             Meet the Entire Scale Engine
// //           </h3>
          
// //           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
// //             {TEAM_AVATARS.map((avatar) => (
// //               <motion.div
// //                 key={avatar.id}
// //                 whileHover={{ scale: 1.15, zIndex: 10 }}
// //                 transition={{ type: "spring", stiffness: 400, damping: 20 }}
// //                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white bg-white shadow-[0_8px_20px_rgba(35,31,84,0.06)] cursor-pointer flex-shrink-0"
// //               >
// //                 <img src={avatar.img} alt="Team Member Avatar" className="w-full h-full object-cover" />
// //               </motion.div>
// //             ))}
// //             {/* Infinite Expand Placeholder Cap */}
// //             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#74358C]/40 bg-[#74358C]/5 flex items-center justify-center text-xs font-bold text-[#74358C] tracking-tight select-none">
// //               +140 More
// //             </div>
// //           </div>
// //         </div>

// //         {/* SECTION 4: SPLIT QUOTE HERO ELEMENT BANNER */}
// //         <div className="w-full bg-white border border-gray-200/80 rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-36 shadow-[0_30px_70px_-20px_rgba(35,31,84,0.04)]">
// //           <div className="lg:col-span-5 space-y-4">
// //             <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
// //               Talent Wins Games,<br />
// //               <span className="text-[#74358C] font-serif italic font-normal">Teamwork Wins</span> Championships.
// //             </h3>
// //             <p className="text-sm text-gray-400 font-light leading-relaxed">
// //               Behind the organic growth metrics of enterprise systems stands a focused group of engineering experts built to adapt.
// //             </p>
// //           </div>
// //           <div className="lg:col-span-7 h-[260px] rounded-2xl overflow-hidden relative group">
// //             <img 
// //               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
// //               alt="We Promote Culture Group Graphic" 
// //               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
// //             />
// //             <div className="absolute inset-0 bg-[#231F54]/10 mix-blend-multiply" />
// //           </div>
// //         </div>

// //         {/* SECTION 5: COMPACT PREMIUM HEX LINK GATES */}
// //         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          
// //           {/* Left Hex Card Image */}
// //           <div className="hidden sm:block h-[180px] bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm">
// //             <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400" alt="Culture Accent Left" className="w-full h-full object-cover" />
// //           </div>

// //           {/* Core Interactive Center Gateway */}
// //           <motion.div 
// //             whileHover={{ y: -4 }}
// //             className="bg-[#231F54] text-white p-8 rounded-2xl text-center space-y-4 shadow-[0_20px_45px_-10px_rgba(35,31,84,0.25)] border border-[#231F54] relative overflow-hidden group"
// //           >
// //             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#74358C]/30 to-transparent rounded-full blur-xl pointer-events-none" />
// //             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 block">Join Our Mission</span>
// //             <h4 className="text-xl font-bold tracking-tight">Be The Part <br />Of Our Team</h4>
// //             <a 
// //               href="#careers" 
// //               className="inline-flex items-center gap-1.5 text-xs font-bold text-[#74358C] bg-white px-4 py-2 rounded-xl transition-all duration-200 hover:bg-gray-50 group-shadow"
// //             >
// //               Current Openings
// //               <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //               </svg>
// //             </a>
// //           </motion.div>

// //           {/* Right Hex Card Image */}
// //           <div className="hidden sm:block h-[180px] bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm">
// //             <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400" alt="Culture Accent Right" className="w-full h-full object-cover" />
// //           </div>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // Mock High-End Dataset matching reference layout architecture
// const LEADERSHIP_DATA = [
//   {
//     id: "deepanshu",
//     name: "Mr. Deepanshu Thakral",
//     role: "Chief Executive Officer (CEO)",
//     bio: "Deepanshu Thakral is a hands-on Chief Executive Officer (CEO) who has been an IT industry pioneer for the last ten years. Through strategic foresight, drive, and determination, he built a strong foundation for his successful company. Due to his innate ability to build high-performance teams, he has served as a growth catalyst and infused productive energy into the workplace.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: "deepika",
//     name: "Mrs. Deepika Sharma",
//     role: "Managing Director",
//     bio: "Deepika Sharma is an example of a leadership role in Women. She is the managing director and leading marketing manager of Leading Edge Info Solutions. Understanding the client's needs and strong team management skills is what sets her apart from the crowd. If there is any person with active listening and persuasion skills, she is the one.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
//   }
// ];

// const TEAM_AVATARS = [
//   { id: 1, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" },
//   { id: 2, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
//   { id: 3, img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150" },
//   { id: 4, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
//   { id: 5, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
//   { id: 6, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" },
//   { id: 7, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
//   { id: 8, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" },
//   { id: 9, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" },
//   { id: 10, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
//   { id: 11, img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150" },
//   { id: 12, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&w=150" },
//   { id: 13, img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&w=150" },
//   { id: 14, img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&w=150" },
//   { id: 15, img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&w=150" },
//   { id: 16, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=150" },
// ];

// export default function PremiumEnterpriseAbout() {
//   return (
//     <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#333333] selection:bg-[#74358C]/20">
      
//       {/* SECTION 1: MASTER BIG PICTURE PICTURE HERO BANNER */}
//       <div className="w-full relative overflow-hidden bg-gray-100">
//         <div className="w-full h-[320px] sm:h-[460px] md:h-[580px] lg:h-[680px] relative">
//           <img 
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
//             alt="Our Unified Enterprise Team Portrait" 
//             className="w-full h-full object-cover object-center"
//           />
//           {/* Subtle artistic light mask overlay matching the screenshot mood */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
//         </div>

//         {/* Hero Title Identity Block directly underneath the image stage */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#231F54] tracking-tight mb-2">
//             A Passionate Team
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#74358C] tracking-wide mb-6">
//             Skilled Team of Creators
//           </p>
//           <div className="w-24 h-[3px] bg-[#74358C] mx-auto mb-8 rounded-full" />
//           <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
//             The people who work at LEIS share the vision and values of our community. We're driven by the idea that the best work is born from diligence, craftsmanship, and fun.
//           </p>
//         </div>
//       </div>

//       {/* SECTION 2: EXECUTIVE LEADERSHIP ROW */}
//       <div className="w-full bg-[#1F2B48] py-20 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//               Leadership
//             </h2>
//             <div className="w-12 h-[2px] bg-[#74358C]/60 mx-auto mt-4" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {LEADERSHIP_DATA.map((leader) => (
//               <div 
//                 key={leader.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 transition-all duration-300 hover:shadow-black/20"
//               >
//                 {/* Executive Image Container */}
//                 <div className="w-full md:w-[42%] h-[300px] md:h-auto relative bg-gray-50 flex-shrink-0">
//                   <img 
//                     src={leader.image} 
//                     alt={leader.name} 
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>
                
//                 {/* Executive Text Data */}
//                 <div className="p-6 sm:p-8 flex flex-col justify-center">
//                   <h3 className="text-xl font-bold text-[#231F54] mb-1">
//                     {leader.name}
//                   </h3>
//                   <p className="text-xs font-semibold text-[#74358C] uppercase tracking-wider mb-4">
//                     {leader.role}
//                   </p>
//                   <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
//                     {leader.bio}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* SECTION 3: MEET THE ENTIRE TEAM MATRIX DISPLAY */}
//       <div className="w-full bg-[#FFFFFF] py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231F54] tracking-tight">
//               Meet The Entire Team
//             </h2>
//             <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-3" />
//           </div>

//           {/* Clean, perfectly aligned circles matrix layout mimicking screenshot 3 */}
//           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 justify-center items-center max-w-6xl mx-auto">
//             {TEAM_AVATARS.map((avatar) => (
//               <motion.div
//                 key={avatar.id}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex flex-col items-center justify-center"
//               >
//                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1.5 bg-white border border-gray-200/80 shadow-md aspect-square transition-colors duration-300 hover:border-[#74358C]">
//                   <img 
//                     src={avatar.img} 
//                     alt="Corporate Team Expert Circle Asset" 
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* SECTION 4: SPLIT DIAGONAL SHARP MASK GEOMETRIC ROW */}
//       <div className="w-full bg-white border-t border-gray-100 overflow-hidden relative">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          
//           {/* Dynamic Cultural Brand Content */}
//           <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 space-y-4 lg:pr-8">
//             <h3 className="text-2xl sm:text-3xl font-black text-[#231F54] tracking-tight leading-tight">
//               Talent Wins Games <br />
//               Teamwork Wins <br />
//               Championships.
//             </h3>
//             <div className="w-16 h-[2px] bg-[#74358C]" />
//             <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed pt-2">
//               Behind the success of a company there is not a single person but a group of individuals who want to bring a change in the world. Dogging the hurdles was possible due to the efforts of the team.
//             </p>
//           </div>

//           {/* Precision Polygonal Mask Row matching screenshot 4 shape architecture */}
//           <div className="lg:col-span-7 h-[340px] sm:h-[440px] lg:h-[500px] relative w-full bg-[#1F2B48]">
//             <div 
//               className="absolute inset-0 w-full h-full hidden lg:block bg-white z-10"
//               style={{ clipPath: 'polygon(0 0, 16% 0, 0 100%, 0% 100%)' }}
//             />
//             <img 
//               src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
//               alt="Team Collaboration Workspace" 
//               className="w-full h-full object-cover"
//               style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
//             />
//           </div>

//         </div>
//       </div>

//       {/* SECTION 5: GEOMETRIC HONEYCOMB/HEX LINK GATEWAY CONTAINER */}
//       <div className="w-full bg-[#FAF9FC] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
//         <div className="max-w-5xl mx-auto">
          
//           {/* Hexagonal Layout Flow imitating layout 5 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            
//             {/* Hex Left Side Graphic */}
//             <div className="flex justify-center md:justify-end">
//               <div 
//                 className="w-[240px] h-[270px] bg-gray-200 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.03]"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
//               >
//                 <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400" alt="Culture Grid Left" className="w-full h-full object-cover" />
//               </div>
//             </div>

//             {/* Core Interactive Center Gateway */}
//             <div className="flex justify-center z-10">
//               <div 
//                 className="w-[250px] h-[280px] bg-[#74A83A] flex flex-col items-center justify-center text-center p-6 text-white shadow-xl transform transition-transform duration-300 hover:scale-105"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
//               >
//                 <h4 className="text-xl font-extrabold tracking-tight leading-snug mb-1">
//                   Be The Part <br /> Of A Team
//                 </h4>
//                 <div className="w-8 h-[1px] bg-white/50 my-2" />
//                 <a 
//                   href="#careers" 
//                   className="text-xs font-bold uppercase tracking-widest border-b border-white/60 pb-0.5 hover:text-gray-100 transition-colors"
//                 >
//                   Current Opening
//                 </a>
//               </div>
//             </div>

//             {/* Hex Right Side Graphic */}
//             <div className="flex justify-center md:justify-start">
//               <div 
//                 className="w-[240px] h-[270px] bg-gray-200 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.03]"
//                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
//               >
//                 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Culture Grid Right" className="w-full h-full object-cover" />
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock High-End Dataset matching your corporate brand layout architecture
const LEADERSHIP_DATA = [
  {
    id: "deepanshu",
    name: "Mr. Deepanshu Thakral",
    role: "Chief Executive Officer (CEO)",
    bio: "Deepanshu Thakral is a hands-on Chief Executive Officer (CEO) who has been an IT industry pioneer for the last ten years. Through strategic foresight, drive, and determination, he built a strong foundation for his successful company. Due to his innate ability to build high-performance teams, he has served as a growth catalyst and infused productive energy into the workplace.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "deepika",
    name: "Mrs. Deepika Sharma",
    role: "Managing Director",
    bio: "Deepika Sharma is an example of a leadership role in Women. She is the managing director and leading marketing manager of Leading Edge Info Solutions. Understanding the client's needs and strong team management skills is what sets her apart from the crowd. If there is any person with active listening and persuasion skills, she is the one.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  }
];

const TEAM_AVATARS = [
  { id: 1, name: "Technical Lead", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" },
  { id: 2, name: "UX Architect", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
  { id: 3, name: "System Engineer", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150" },
  { id: 4, name: "Product Strategy", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
  { id: 5, name: "DevOps Engineer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
  { id: 6, name: "Data Scientist", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" },
  { id: 7, name: "QA Optimizer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
  { id: 8, name: "Growth Specialist", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" },
  { id: 9, name: "Cloud Architect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" },
  { id: 10, name: "Security Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
  { id: 11, name: "Full-Stack Dev", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150" },
  { id: 12, name: "Creative Producer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&w=150" },
  { id: 13, name: "Brand Catalyst", img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&w=150" },
  { id: 14, name: "UI Engineer", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&w=150" },
  { id: 15, name: "Frontend Lead", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&w=150" },
  { id: 16, name: "Project Delivery", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=150" },
];

// Configuration layout for Framer Motion scroll mechanics
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 }
  }
};

export default function PremiumEnterpriseAbout() {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  return (
    <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#333333] selection:bg-[#74358C]/20 overflow-x-hidden">
      
      {/* SECTION 1: MASTER HERO CINEMATIC PIECES PLATFORM */}
      <div className="w-full relative overflow-hidden bg-gray-950">
        <div className="w-full h-[340px] sm:h-[480px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
          <motion.img 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Our Unified Enterprise Team Portrait" 
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layered vector light masks replacing flat CSS overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#231F54]/20 via-transparent to-[#74358C]/10" />
        </div>

        {/* Identity Headings Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black text-[#231F54] tracking-tight mb-2"
          >
            A Passionate Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-[#74358C] tracking-wide mb-6 font-serif italic"
          >
            Skilled Team of Creators
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            className="h-[3px] bg-[#74358C] mx-auto mb-8 rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-light leading-relaxed"
          >
            The people who work at LEIS share the vision and values of our community. We're driven by the idea that the best work is born from diligence, craftsmanship, and unified high-performance culture.
          </motion.p>
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE LEADERSHIP MATRICES */}
      <div className="w-full bg-[#1F2B48] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Vector Blobs for ambient aesthetic depth */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-[#74358C]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            >
              Leadership Architecture
            </motion.h2>
            <div className="w-16 h-[2px] bg-[#74358C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {LEADERSHIP_DATA.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5 transition-all duration-300 group"
              >
                {/* Image Container Frame */}
                <div className="w-full md:w-[44%] h-[320px] md:h-auto relative overflow-hidden bg-gray-900 flex-shrink-0">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                </div>
                
                {/* Content Details Block */}
                <div className="p-8 flex flex-col justify-center relative bg-white">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#74358C] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <h3 className="text-xl sm:text-2xl font-black text-[#231F54] mb-1 group-hover:text-[#74358C] transition-colors duration-200">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold text-[#74358C]/90 uppercase tracking-widest mb-4 font-mono">
                    {leader.role}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 3: MASS MATRIX AVATAR FIELD WITH FLY-AWAY TOOLTIPS */}
      <div className="w-full bg-[#FFFFFF] py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-[#231F54] tracking-tight">
              Meet The Entire Team
            </h2>
            <div className="w-12 h-[2px] bg-[#74358C] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-2">
              Hover over our engineering nodes to view specialized focus roles.
            </p>
          </div>

          {/* Staggered Animated Matrix Layout Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 max-w-6xl mx-auto justify-items-center"
          >
            {TEAM_AVATARS.map((avatar) => (
              <motion.div
                key={avatar.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredAvatar(avatar.id)}
                onMouseLeave={() => setHoveredAvatar(null)}
                whileHover={{ scale: 1.12, y: -4 }}
                className="relative flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-white border border-gray-200 shadow-lg aspect-square transition-all duration-300 hover:border-[#74358C] hover:shadow-[#74358C]/10">
                  <img 
                    src={avatar.img} 
                    alt="Corporate Specialist Node Frame" 
                    className="w-full h-full object-cover rounded-full filter contrast-[1.02]"
                  />
                </div>

                {/* Micro Floating Tooltip Badge Component */}
                <AnimatePresence>
                  {hoveredAvatar === avatar.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -4, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full mb-3 z-30 bg-[#231F54] text-white text-[10px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none border border-white/10"
                    >
                      {avatar.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#231F54] rotate-45 border-r border-b border-white/5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* SECTION 4: GEOMETRIC SLICE CUT DIAGONAL PARALLAX */}
      <div className="w-full bg-white border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Dynamic Typographic Context Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-12 lg:p-16 space-y-5"
          >
            <h3 className="text-2xl sm:text-4xl font-black text-[#231F54] tracking-tight leading-tight">
              Talent Wins Games <br />
              Teamwork Wins <br />
              <span className="text-[#74358C] font-serif italic font-normal">Championships.</span>
            </h3>
            <div className="w-16 h-[2px] bg-[#74358C]" />
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed pt-2">
              Behind the success of our digital blueprints stands a multi-disciplinary network built to deliver high operational availability. We defeat scaling thresholds through systematic group coordination.
            </p>
          </motion.div>

          {/* Mask Frame Component Layout */}
          <div className="lg:col-span-7 h-[360px] sm:h-[460px] lg:h-[520px] relative w-full bg-[#1F2B48]">
            <div 
              className="absolute inset-0 w-full h-full hidden lg:block bg-white z-10"
              style={{ clipPath: 'polygon(0 0, 16% 0, 0 100%, 0% 100%)' }}
            />
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Collaboration Workspace Interface" 
              className="w-full h-full object-cover"
              style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
          </div>

        </div>
      </div>

      {/* SECTION 5: GEOMETRIC HONEYCOMB HONEY GATEWAY */}
      <div className="w-full bg-[#FAF9FC] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center justify-center">
            
            {/* Hex Left Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div 
                className="w-[230px] h-[260px] bg-gray-200 overflow-hidden shadow-lg group relative"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400" alt="Culture Grid Matrix Left" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#231F54]/10 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Core Interactive Center Gateway Shape Node */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
              className="flex justify-center z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-[245px] h-[275px] bg-[#74A83A] flex flex-col items-center justify-center text-center p-6 text-white shadow-2xl relative overflow-hidden group cursor-pointer"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                {/* Floating ambient lens flair vector inside the center hexagonal block */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-700" />
                
                <h4 className="text-xl font-black tracking-tight leading-snug mb-1 text-white">
                  Be The Part <br /> Of A Team
                </h4>
                <div className="w-8 h-[1px] bg-white/40 my-3" />
                <a 
                  href="#careers" 
                  className="text-[10px] font-extrabold uppercase tracking-widest border-b border-white/60 pb-0.5 hover:text-gray-100 transition-colors duration-200"
                >
                  Current Openings
                </a>
              </motion.div>
            </motion.div>

            {/* Hex Right Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-start"
            >
              <div 
                className="w-[230px] h-[260px] bg-gray-200 overflow-hidden shadow-lg group relative"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Culture Grid Matrix Right" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#231F54]/10 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </div>
  );
}