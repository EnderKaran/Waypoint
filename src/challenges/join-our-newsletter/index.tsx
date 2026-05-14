"use client";

import React, { useState } from 'react';

export default function JoinOurNewsletter() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
    // Başarılı senaryo simülasyonu
    setStatusMessage("Thank you for subscribing! 🎉");
    setEmail("");
  };

  return (
    <section className="min-h-screen bg-[#F3F4F6] py-20 px-4 flex items-center justify-center font-['Outfit'] relative">
      
      {/* Ana Kart Konteynırı */}
      <div 
        className="max-w-[640px] w-full bg-white rounded-[32px] p-8 md:p-16 flex flex-col items-center text-center transition-all border border-gray-100"
        style={{ 
          // İstenen özel teknik gölge değerleri
          boxShadow: "0px 20px 30px 0px rgba(0, 0, 0, 0.03), 0px 8px 12px 0px rgba(0, 0, 0, 0.08)" 
        }}
      >
        {/* LOGO / ICON */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] flex items-center justify-center shadow-md shadow-blue-500/10 mb-8">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5" />
          </svg>
        </div>

        {/* METİNLER */}
        <h1 className="text-[32px] font-bold text-[#121826] tracking-tight mb-4">
          Join our newsletter
        </h1>
        <p className="text-[#9DA3AE] text-base leading-relaxed max-w-md mb-10">
          Keep up with our latest collections, exclusive deals, and special offers! We introduce a new collection every week, so stay tuned to snag the hottest items just for you.
        </p>

        {/* FORM YAPISI */}
        <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col gap-3">
          <div className="relative">
            <input 
              type="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (statusMessage) setStatusMessage("");
              }}
              placeholder="Enter your email address"
              className="w-full bg-[#F3F4F6] text-[#121826] placeholder:text-[#9DA3AE] text-base rounded-xl px-5 py-4 outline-none border border-transparent focus:border-blue-500/30 focus:bg-white transition-all font-medium"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-base py-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all active:scale-[0.99]"
          >
            Subscribe now
          </button>
        </form>

        {/* DURUM MESAJI VE YASAL UYARI */}
        {statusMessage ? (
          <p className="text-sm font-medium mt-4 text-blue-600 animate-fade-in">{statusMessage}</p>
        ) : (
          <p className="text-xs text-[#9DA3AE] font-medium mt-5 tracking-tight">
            Your email is 100% confidential and won't send you any spam.
          </p>
        )}

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}