import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LEADERSHIP_DATA = [
  {
    id: "deepanshu",
    name: "Mr. Deepanshu Thakral",
    role: "Chief Executive Officer (CEO)",
    bio: "Deepanshu Thakral is a hands-on Chief Executive Officer (CEO) who has been an IT industry pioneer for the last ten years. Through strategic foresight, drive, and determination, he built a strong foundation for his successful company. Due to his innate ability to build high-performance teams, he has served as a growth catalyst and infused productive energy into the workplace.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "deepika",
    name: "Mrs. Deepika Sharma",
    role: "Managing Director",
    bio: "Deepika Sharma is an example of a leadership role in Women. She is the managing director and leading marketing manager of Leading Edge Info Solutions. Understanding the client's needs and strong team management skills is what sets her apart from the crowd. If there is any person with active listening and persuasion skills, she is the one.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
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

export default function PremiumEnterpriseAbout() {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  return (
    <div className="w-full bg-[#FFFFFF] font-sans antialiased text-[#334155] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION 1: CLEAN HEADER & HERO */}
        <header className="mb-16">
          <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cb1a1] mb-4">
            Our Identity
          </span>
          <h1 className="text-6xl md:text-7xl font-serif italic font-medium leading-[0.9] text-[#182f59] mb-8">
            Technical<br />
            <span className="not-italic font-sans font-black tracking-tighter text-5xl md:text-6xl uppercase text-[#4cb1a1]">Alliance.</span>
          </h1>
          <p className="text-base text-[#64748B] font-normal leading-relaxed max-w-2xl border-t border-[#E2E8F0] pt-6">
            The people who work with us share the vision and values of our community. We are driven by the absolute philosophy that the best work is born from diligence, craftsmanship, and a unified, high-performance culture across all operational scopes.
          </p>
        </header>

        <div className="w-full aspect-[21/9] bg-[#FFFFFF] border border-[#E2E8F0] overflow-hidden mb-24 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team Portrait" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* SECTION 2: EXECUTIVE LEADERSHIP */}
        <section className="mb-24">
          <header className="mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cb1a1] mb-4">
              Strategic Governance
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-medium text-[#182f59]">
              Leadership Architecture.
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E8F0] border border-[#E2E8F0] shadow-sm">
            {LEADERSHIP_DATA.map((leader) => (
              <div 
                key={leader.id}
                className="bg-[#FFFFFF] p-8 lg:p-12 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[4/3] overflow-hidden bg-[#FFFFFF] mb-8 border border-[#E2E8F0]">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  <span className="text-[10px] font-bold text-[#4cb1a1] uppercase tracking-widest mb-2 block">
                    {leader.role}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#182f59] mb-4">
                    {leader.name}
                  </h3>
                  <p className="text-[#64748B] text-base font-normal leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: AVATAR GRID MATRIX */}
        <section className="mb-24">
          <header className="mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cb1a1] mb-4">
              Operational Backbone
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-medium text-[#182f59]">
              Meet The Full Team.
            </h2>
          </header>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-[#E2E8F0] border border-[#E2E8F0] shadow-sm">
            {TEAM_AVATARS.map((avatar) => (
              <div
                key={avatar.id}
                onMouseEnter={() => setHoveredAvatar(avatar.id)}
                onMouseLeave={() => setHoveredAvatar(null)}
                className="relative bg-[#FFFFFF] aspect-square flex items-center justify-center overflow-hidden hover:bg-[#F4FAF9] transition-colors duration-300 group cursor-default"
              >
                <div className="w-full h-full p-3">
                  <img 
                    src={avatar.img} 
                    alt={avatar.name} 
                    className="w-full h-full object-cover border border-[#E2E8F0]"
                  />
                </div>

                <AnimatePresence>
                  {hoveredAvatar === avatar.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#182f59]/95 flex flex-col items-center justify-center p-2 text-center"
                    >
                      <span className="text-white text-[10px] font-bold tracking-widest uppercase leading-tight">
                        {avatar.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: TEXT AND CONTENT BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 border-t border-[#E2E8F0] pt-16 mb-24">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cb1a1] block">
              Execution Paradigm
            </span>
            <h3 className="text-5xl font-serif italic font-medium text-[#182f59] leading-tight">
              Talent Wins Games. <br />
              Teamwork Wins <br />
              <span className="not-italic font-sans font-black tracking-tighter text-4xl uppercase text-[#4cb1a1]">Championships.</span>
            </h3>
            <p className="text-base text-[#64748B] font-normal leading-relaxed pt-2">
              Behind the success of our digital blueprints stands a rigorous, multi-disciplinary network built to deliver absolute performance. We systematically eliminate development and deployment scaling thresholds through coordinated internal synchronization.
            </p>
          </div>

          <div className="lg:col-span-7 aspect-[16/10] w-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
              alt="Collaboration Workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION 5: MINIMAL CAREER BANNER */}
        <section className="border-t border-[#E2E8F0] pt-16 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4cb1a1] mb-4 block">
            Join the Alliance
          </span>
          <h4 className="text-4xl font-serif italic font-medium text-[#182f59] mb-8">
            Be Part Of Our Team
          </h4>
          <button className="border border-[#182f59] text-[#182f59] font-bold text-[10px] tracking-[0.2em] px-10 py-4 uppercase hover:bg-[#182f59] hover:text-white transition-all duration-300">
            Current Openings
          </button>
        </section>

      </div>
    </div>
  );
}