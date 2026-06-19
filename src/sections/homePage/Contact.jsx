import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    contactMethod: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/175pCsf-RXA1GBiflCqwedOA4aJW6CbgLbwBvpHJotBE/edit?usp=sharing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          contactMethod: "",
          projectDetails: "",
        });
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased select-none overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(16,34,61,0.07)] border border-slate-100">
        {/* LEFT COLUMN: BRAND INFO CARD HUB */}
        <div className="lg:col-span-5 bg-[#10223d] p-8 sm:p-12 md:p-16 flex flex-col justify-between relative text-white overflow-hidden">
          {/* Ambient Decorative Background Glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00b4af]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[#00b4af] text-[13px] font-extrabold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-white text-[36px] md:text-[42px] font-black tracking-tight leading-tight mt-3 mb-6">
              Let's Scale Your <br />
              Business Together
            </h2>
            <p className="text-slate-300 font-medium text-[15px] leading-[1.65] max-w-sm mb-12">
              Ready to dominate search engine results, scale conversions, and
              maximize your multi-channel ROAS metrics? Drop us a message.
            </p>

            {/* Direct Contact Resource Vectors */}
            <div className="flex flex-col gap-6.5">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#00b4af] group-hover:bg-white/10 transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                  (906) 970-6661
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#00b4af] group-hover:bg-white/10 transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                  sales@wepromote.us
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Watermark Sign-off */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col relative z-10">
            <span className="text-[12px] font-extrabold tracking-widest text-[#00b4af] uppercase">
              Global Execution Framework
            </span>
            <span className="text-[13px] text-slate-400 font-medium mt-1">
              Serving clients across Duabi, US, UK, India, and Canada.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-PARITY REVENUE LEAD CAPTURE FORM */}
        <div className="lg:col-span-7 bg-[#f8fafc]/40 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                >
                  <option value="">Select Service</option>
                  <option>Website Development</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Brand Strategy</option>
                  <option>Google Ads</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">
                  Monthly Budget *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none transition"
                >
                  <option value="">Select Budget</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            {/* Preferred Contact */}
            <div>
              <label className="block mb-3 text-sm font-bold text-[#10223d]">
                Preferred Contact Method *
              </label>

              <div className="grid grid-cols-3 gap-3">
                {["Call", "Email", "Any"].map((method) => (
                  <label
                    key={method}
                    className={`h-14 rounded-xl border cursor-pointer flex items-center justify-center font-semibold transition ${
                      formData.contactMethod === method
                        ? "border-[#00b4af] bg-[#00b4af]/10 text-[#00b4af]"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block mb-2 text-sm font-bold text-[#10223d]">
                Project Details *
              </label>

              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Tell us about your business, goals, target audience, challenges, and project requirements..."
                className="w-full rounded-xl border border-slate-200 bg-white p-5 text-[#10223d] font-medium focus:border-[#00b4af] focus:ring-4 focus:ring-[#00b4af]/10 outline-none resize-none transition"
              />
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-16 rounded-xl bg-[#00b4af] hover:bg-[#009691] text-white font-black tracking-[0.15em] uppercase transition-all shadow-[0_10px_30px_rgba(0,180,175,0.25)]"
            >
              Get Free Strategy Consultation
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
