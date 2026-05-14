"use client";

import React from 'react';

export default function MinimalBlogCard() {
  return (
    <section className="min-h-screen w-full bg-[#FAFAFA] py-12 px-4 flex items-center justify-center font-sans selection:bg-purple-100">
      
      {/* 336px SABİT GENİŞLİKLİ KART KONTEYNIRI */}
      <div 
        className="w-[336px] bg-white rounded-[20px] p-4 border border-gray-100/60 flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
        style={{ 
          // Tasarımda talep edilen spesifik gölge değeri
          boxShadow: "8px 8px 20px 0px rgba(85, 85, 85, 0.08)" 
        }}
      >
        
        {/* HERO IMAGE LAYER (152px Yükseklik) */}
        <div className="w-full h-[152px] rounded-[12px] overflow-hidden bg-[#FFEAEB] relative flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Minimal Cactus" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* TAG - DESIGN (Üstten 16px Boşluk) */}
        <div className="mt-4 flex">
          <span className="bg-[#E6DFF7] text-[#6D28D9] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider select-none">
            Design
          </span>
        </div>

        {/* CATE BÖLÜMÜ: BAŞLIK VE İÇERİK (Etiket ile Başlık Arası 4px) */}
        <div className="mt-1 flex flex-col gap-1.5">
          <h2 className="text-[#121826] text-[18px] font-bold tracking-tight leading-snug">
            Embracing Minimalism
          </h2>
          {/* Başlık ile Açıklama Arası 6px Boşluk */}
          <p className="text-[#6C727F] text-xs font-medium leading-relaxed">
            From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.
          </p>
        </div>

        {/* AUTHOR ALANI (Üstten 20px Boşluk ve İnce Çizgi Ayrımı) */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col">
          <span className="text-[#A1A7B4] text-[11px] font-semibold tracking-wide uppercase">
            Annie Spratt
          </span>
        </div>

      </div>

    </section>
  );
}