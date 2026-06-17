// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const CATEGORIES = ["All Blogs", "Leis News", "Web Design", "Web Development", "Marketing", "SEO", "PPC", "Social Media"];

// const BLOGS_DATA = [
//   {
//     id: 1,
//     category: "SEO",
//     tag: "Blog",
//     title: "Why Local SEO Matters More Than Traditional SEO for Local Growth",
//     desc: "Businesses invest in SEO and wait. Then they check the numbers and see traffic, but no calls. No enquiries. Nothing useful. That's a targeting problem, not an SEO problem. Traditional SEO goes...",
//     readTime: "6 Minutes Read",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 2,
//     category: "Marketing",
//     tag: "Blog",
//     title: "What Does a Healthcare Digital Marketing Agency Do?",
//     desc: "Most good doctors have the same problem. Their clinic is solid. Their patients are happy. But online, nobody can find them. That's how it goes now. Patients don't ask friends for referrals the...",
//     readTime: "7 Minutes Read",
//     image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 3,
//     category: "SEO",
//     tag: "Blog",
//     title: "How GEO Helps You Rank in ChatGPT, Gemini, and AI Search Results",
//     desc: "Search has shifted in a way most businesses haven't caught up with yet. People aren't typing queries into Google and clicking links the way they used to. They're asking ChatGPT for...",
//     readTime: "7 Minutes Read",
//     image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 4,
//     category: "SEO",
//     tag: "SEO",
//     title: "Best Ecommerce SEO Companies in Los Angeles",
//     desc: "Why Ecommerce SEO Matters More Than Ever The ecommerce industry has become one of the most competitive digital markets in the world. Every day, thousands of online stores compete for visibility on...",
//     readTime: "8 Minutes Read",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 5,
//     category: "SEO",
//     tag: "Blog",
//     title: "How to Create SEO Content That Actually Ranks on Google",
//     desc: "Understanding How Google Evaluates Content Google's ranking system has become incredibly sophisticated. Instead of simply looking for keyword frequency, the algorithm now evaluates whether a page...",
//     readTime: "10 Minutes Read",
//     image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600"
//   },
//   {
//     id: 6,
//     category: "Web Design",
//     tag: "Blog",
//     title: "How to Prepare Your Website for Google's Generative AI Search Changes",
//     desc: "Google Search is no longer just a list of blue links. It's becoming a conversation engine powered by AI. Features like AI Overviews, AI Mode, conversational search, and search agents are...",
//     readTime: "10 Minutes Read",
//     image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
//   }
// ];

// export default function BlogSection() {
//   const [activeTab, setActiveTab] = useState("All Blogs");

//   const filteredBlogs = activeTab === "All Blogs" 
//     ? BLOGS_DATA 
//     : BLOGS_DATA.filter(blog => blog.category.toLowerCase() === activeTab.toLowerCase());

//   return (
//     <section className="w-full bg-[#F5F6FA] py-28 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#231F54] relative">
      
//       {/* Subtle background graphic circles matching the branding image */}
//       <div className="absolute right-12 bottom-12 w-12 h-12 rounded-full border border-[#74358C]/20 pointer-events-none hidden md:block" />
//       <div className="absolute left-[-20px] bottom-[-20px] w-24 h-24 rounded-full bg-[#74358C]/5 pointer-events-none hidden md:block" />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Breadcrumbs */}
//         <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
//           <a href="#home" className="hover:text-[#74358C] transition-colors">Home</a>
//           <span className="text-gray-300">/</span>
//           <span className="text-gray-500">Blog</span>
//         </nav>

//         {/* Dynamic Header Center Layout Title */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#231F54] mb-4">
//             Blogs
//           </h1>
//           <div className="w-16 h-[3px] bg-[#74358C] mx-auto rounded-full" />
//         </div>

//         {/* Horizontal Filter Navigation Row */}
//         <div className="flex justify-center mb-16 border-b border-gray-200/80 max-w-4xl mx-auto">
//           <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-px w-full justify-start md:justify-center">
//             {CATEGORIES.map((tab) => {
//               const isActive = tab === activeTab;
//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`relative px-4 py-3.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
//                     isActive ? "text-[#74358C]" : "text-gray-500 hover:text-[#231F54]"
//                   }`}
//                 >
//                   {tab}
//                   {/* Premium Tracking Slide Indicator Bar */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeTabUnderline"
//                       className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#74358C]"
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dynamic Card Grid with High-End Structural Animations */}
//         <motion.div 
//           layout="position"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredBlogs.map((blog) => (
//               <motion.article
//                 layout
//                 key={blog.id}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -8 }}
//                 transition={{ duration: 0.3, ease: [0.215, 0.610, 0.355, 1.000] }}
//                 className="group flex flex-col bg-white border border-gray-200/60 rounded-xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(35,31,84,0.08)] hover:border-gray-300 transition-all duration-300"
//               >
//                 {/* Image Section */}
//                 <div className="h-56 w-full overflow-hidden relative bg-gray-100">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
//                     loading="lazy"
//                   />
//                   {/* Premium Brand-Colored Tag */}
//                   <span className="absolute top-4 left-4 text-[11px] font-bold text-white bg-[#74358C] px-3 py-1.5 rounded uppercase tracking-wide shadow-sm">
//                     {blog.tag}
//                   </span>
//                 </div>

//                 {/* Content Block */}
//                 <div className="p-6 flex-1 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold leading-snug text-[#231F54] group-hover:text-[#74358C] transition-colors duration-200 line-clamp-2 mb-3">
//                       {blog.title}
//                     </h3>
//                     <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed line-clamp-4 mb-6">
//                       {blog.desc}
//                     </p>
//                   </div>

//                   {/* Card Bottom Meta Data */}
//                   <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
//                     <div className="flex items-center gap-1 text-xs font-bold text-[#231F54] group-hover:text-[#74358C] transition-colors duration-200 uppercase tracking-wider">
//                       <span>Read {blog.tag}</span>
//                       <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">»</span>
//                     </div>
                    
//                     <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#74358C]/80">
//                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       <span>{blog.readTime}</span>
//                     </div>
//                   </div>
//                 </div>

//               </motion.article>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Dynamic Fallback Layer */}
//         {filteredBlogs.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-24 border border-dashed border-gray-200 rounded-xl bg-white max-w-md mx-auto mt-12"
//           >
//             <p className="text-gray-400 font-medium text-sm">No articles listed under this category yet.</p>
//           </motion.div>
//         )}

//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All Blogs", "Leis News", "Web Design", "Web Development", "Marketing", "SEO", "PPC", "Social Media"];

const BLOGS_DATA = [
  {
    id: 1,
    category: "SEO",
    tag: "Blog",
    title: "Why Local SEO Matters More Than Traditional SEO for Local Growth",
    desc: "Businesses invest in SEO and wait. Then they check the numbers and see traffic, but no calls. No enquiries. Nothing useful. That's a targeting problem, not an SEO problem. Traditional SEO goes...",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    category: "Marketing",
    tag: "Insight",
    title: "What Does a Healthcare Digital Marketing Agency Do?",
    desc: "Most good doctors have the same problem. Their clinic is solid. Their patients are happy. But online, nobody can find them. That's how it goes now. Patients don't ask friends for referrals the...",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    category: "SEO",
    tag: "Trends",
    title: "How GEO Helps You Rank in ChatGPT, Gemini, and AI Search Results",
    desc: "Search has shifted in a way most businesses haven't caught up with yet. People aren't typing queries into Google and clicking links the way they used to. They're asking ChatGPT for...",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    category: "SEO",
    tag: "SEO",
    title: "Best Ecommerce SEO Companies in Los Angeles",
    desc: "Why Ecommerce SEO Matters More Than Ever The ecommerce industry has become one of the most competitive digital markets in the world. Every day, thousands of online stores compete for visibility on...",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    category: "SEO",
    tag: "Guide",
    title: "How to Create SEO Content That Actually Ranks on Google",
    desc: "Understanding How Google Evaluates Content Google's ranking system has become incredibly sophisticated. Instead of simply looking for keyword frequency, the algorithm now evaluates whether a page...",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    category: "Web Design",
    tag: "AI Tech",
    title: "How to Prepare Your Website for Google's Generative AI Search Changes",
    desc: "Google Search is no longer just a list of blue links. It's becoming a conversation engine powered by AI. Features like AI Overviews, AI Mode, conversational search, and search agents are...",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
  }
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("All Blogs");

  const filteredBlogs = activeTab === "All Blogs" 
    ? BLOGS_DATA 
    : BLOGS_DATA.filter(blog => blog.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="w-full bg-[#F5F6FA] py-32 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#231F54] relative overflow-hidden">
      
      {/* Editorial Decorative Background Elements */}
      <div className="absolute right-[-10%] top-[10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#74358C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[5%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#231F54]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
          <a href="#home" className="hover:text-[#74358C] transition-colors duration-200">Home</a>
          <span className="text-gray-300">/</span>
          <span className="text-[#231F54]/60">Insights & News</span>
        </nav>

        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#231F54] mb-4 lg:leading-[1.1]">
            Our Latest <span className="text-[#74358C] font-serif italic font-normal">Blogs</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            Thought leadership, deep dives, and digital marketing strategies straight from our veteran engineering and design desks.
          </p>
        </div>

        {/* Premium Pill Dynamic Filter Container */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-[0_10px_30px_rgba(35,31,84,0.04)] border border-gray-200/50 max-w-full overflow-x-auto scrollbar-none token-scroller">
            {CATEGORIES.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap rounded-full ${
                    isActive ? "text-white" : "text-gray-500 hover:text-[#231F54]"
                  }`}
                >
                  <span className="relative z-20">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePillBubble"
                      className="absolute inset-0 bg-gradient-to-r from-[#74358C] to-[#231F54] rounded-full z-10 shadow-md shadow-[#74358C]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Layer */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.article
                layout
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(35,31,84,0.02)] border border-gray-200/60 hover:shadow-[0_30px_60px_-15px_rgba(35,31,84,0.12)] hover:border-gray-300/80 transition-all duration-500"
              >
                {/* Visual Frame wrapper */}
                <div className="w-full aspect-[16/10.5] overflow-hidden relative bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231F54]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Absolute Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] tracking-widest font-black uppercase text-white bg-gradient-to-r from-[#74358C] to-[#231F54] px-3 py-1.5 rounded-md shadow-sm">
                      {blog.tag}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-7 flex-1 flex flex-col justify-between bg-white relative z-20">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#231F54] group-hover:text-[#74358C] transition-colors duration-300 line-clamp-2 mb-3.5 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed line-clamp-3 mb-6">
                      {blog.desc}
                    </p>
                  </div>

                  {/* Operational Footer Bar inside card */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#231F54] group-hover:text-[#74358C] transition-colors duration-300 uppercase tracking-widest">
                      <span>Explore</span>
                      <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Filter Fallback */}
        {filteredBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white/60 border border-dashed border-gray-300/80 rounded-2xl max-w-md mx-auto mt-12"
          >
            <p className="text-gray-400 font-medium text-sm tracking-wide">No articles found in this category.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}