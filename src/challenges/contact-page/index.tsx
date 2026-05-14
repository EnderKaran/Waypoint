"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '50-100 employees', // Tasarımdaki varsayılan değer
    subject: 'Building Landing pages', // Tasarımdaki varsayılan değer
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    alert("Form submitted! Sales team will contact you soon. 🚀");
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#c12a4e] via-[#631e87] to-[#161a5c] py-12 px-4 md:py-24 flex items-center justify-center font-['Outfit'] selection:bg-white/20">
      
      {/* ANA FORM KART KAPSAYICISI */}
      <div 
        className="max-w-[760px] w-full bg-[#1b143a]/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-16 flex flex-col gap-10"
        style={{ boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.15)" }} // İstediğin özel gölge değeri
      >
        
        {/* BRAND LOGO & HEADER BÖLÜMÜ */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-xl select-none">
            <div className="w-6 h-6 bg-white/20 rounded-md transform rotate-45 flex items-center justify-center text-xs border border-white/30">◇</div>
            <span>Becv</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Interested in our business pricing?
            </h1>
            <p className="text-white/60 text-sm md:text-base font-medium">
              Fill out the form to view details and we'll contact you as soon as possible.
            </p>
          </div>
        </div>

        {/* FORM MİMARİSİ */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* SIRA 1: AD SOYAD & E-POSTA GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Name</label>
              <input 
                type="text"
                required
                placeholder="Ethan Johnson" // Placeholder gereksinimi
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white text-[#121826] placeholder:text-gray-400 font-medium rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Company Email</label>
              <input 
                type="email"
                required
                placeholder="ethan@johnson.com" // Placeholder gereksinimi
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white text-[#121826] placeholder:text-gray-400 font-medium rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
            </div>
          </div>

          {/* SIRA 2: ŞİRKET HACMİ & KONU DROPDOWN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Company Size</label>
              <div className="relative">
                <select 
                  value={formData.companySize}
                  onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                  className="w-full bg-white text-[#121826] font-medium rounded-xl p-4 pr-10 text-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-purple-400 transition-all"
                >
                  <option value="1-10 employees">1-10 employees</option>
                  <option value="10-50 employees">10-50 employees</option>
                  <option value="50-100 employees">50-100 employees</option> {/* Tasarımdaki default değer */}
                  <option value="100+ employees">100+ employees</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Subject</label>
              <div className="relative">
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white text-[#121826] font-medium rounded-xl p-4 pr-10 text-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-purple-400 transition-all"
                >
                  <option value="Building Landing pages">Building Landing pages</option> {/* Tasarımdaki default değer */}
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* SIRA 3: MESAJ ALANI */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Message</label>
            <textarea 
              rows={4}
              required
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white text-[#121826] placeholder:text-gray-400 font-medium rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-white hover:bg-gray-50 text-[#501777] font-bold py-4 rounded-xl text-sm transition-all active:scale-[0.99] shadow-lg"
            >
              Contact Sales
            </button>
          </div>

        </form>
      </div>

      {/* FONTS IMPORT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}