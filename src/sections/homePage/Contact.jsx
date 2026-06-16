import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Production form transmission logic goes here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(16,34,61,0.07)] border border-slate-100">
        
        {/* LEFT COLUMN: BRAND INFO CARD HUB */}
        <div className="lg:col-span-5 bg-[#10223d] p-8 sm:p-12 md:p-16 flex flex-col justify-between relative text-white overflow-hidden">
          {/* Ambient Decorative Background Glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00b4af]/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[#f2a115] text-[13px] font-extrabold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-white text-[36px] md:text-[42px] font-black tracking-tight leading-tight mt-3 mb-6">
              Let's Scale Your <br />Business Together
            </h2>
            <p className="text-slate-300 font-medium text-[15px] leading-[1.65] max-w-sm mb-12">
              Ready to dominate search engine results, scale conversions, and maximize your multi-channel ROAS metrics? Drop us a message.
            </p>

            {/* Direct Contact Resource Vectors */}
            <div className="flex flex-col gap-6.5">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#f2a115] group-hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#f2a115] group-hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">hello@sitesparkone.com</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Watermark Sign-off */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col relative z-10">
            <span className="text-[12px] font-extrabold tracking-widest text-[#00b4af] uppercase">Global Execution Framework</span>
            <span className="text-[13px] text-slate-400 font-medium mt-1">Serving clients across India, US, UK, and Canada.</span>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-PARITY REVENUE LEAD CAPTURE FORM */}
        <div className="lg:col-span-7 bg-[#f8fafc]/40 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name Input Slot */}
              <div className="flex flex-col">
                <label className="text-[#10223d] font-bold text-[13.5px] tracking-wide mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white border border-slate-200/90 rounded-xl h-[52px] px-5 text-[#10223d] font-semibold text-[14.5px] tracking-wide placeholder-slate-400 focus:outline-none focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/5 transition-all"
                />
              </div>

              {/* Email Address Input Slot */}
              <div className="flex flex-col">
                <label className="text-[#10223d] font-bold text-[13.5px] tracking-wide mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white border border-slate-200/90 rounded-xl h-[52px] px-5 text-[#10223d] font-semibold text-[14.5px] tracking-wide placeholder-slate-400 focus:outline-none focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/5 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Phone Input Slot */}
              <div className="flex flex-col">
                <label className="text-[#10223d] font-bold text-[13.5px] tracking-wide mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white border border-slate-200/90 rounded-xl h-[52px] px-5 text-[#10223d] font-semibold text-[14.5px] tracking-wide placeholder-slate-400 focus:outline-none focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/5 transition-all"
                />
              </div>

              {/* Target Service Selection Dropdown Frame */}
              <div className="flex flex-col">
                <label className="text-[#10223d] font-bold text-[13.5px] tracking-wide mb-2">Requested Service</label>
                <div className="relative w-full">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-slate-200/90 rounded-xl h-[52px] px-5 pr-10 text-[#10223d] font-semibold text-[14.5px] tracking-wide appearance-none focus:outline-none focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/5 transition-all"
                  >
                    <option value="" disabled>Select a core channel</option>
                    <option value="seo">SEO Optimization Services</option>
                    <option value="ppc">PPC Growth Campaigns</option>
                    <option value="webdev">Full Stack Web Development</option>
                    <option value="smm">Social Media Marketing</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Message Textarea Frame */}
            <div className="flex flex-col">
              <label className="text-[#10223d] font-bold text-[13.5px] tracking-wide mb-2">Project Vision Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business metrics and long-term targets..."
                rows="4"
                required
                className="w-full bg-white border border-slate-200/90 rounded-xl p-5 text-[#10223d] font-semibold text-[14.5px] tracking-wide placeholder-slate-400 focus:outline-none focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/5 transition-all resize-none"
              />
            </div>

            {/* Custom High-Performance Action Form Button Submission Block */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full mt-2 bg-[#f2a115] hover:bg-[#de910b] text-white font-extrabold text-[13.5px] tracking-widest h-[54px] rounded-xl uppercase transition-all duration-150 shadow-[0_5px_18px_rgba(242,161,21,0.3)] hover:shadow-[0_8px_22px_rgba(242,161,21,0.4)]"
            >
              Send Secure Message
            </motion.button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;