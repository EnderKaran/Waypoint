"use client";

import React from 'react';

export default function BusinessBlogCard() {
  const cardData = {
    title: "Perfect solution for small business",
    description: "Small businesses need to generate leads to grow. You can use tools like Ringy.",
    // Unsplash: Sıcak ve modern bir ofis içi kolaborasyon görseli
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Amy Burgess",
      role: "Customer Manager, Solution Oy",
      // Unsplash: Kurumsal ve profesyonel kadın profil fotoğrafı
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#F8FAFC] py-12 px-4 flex items-center justify-center font-sans selection:bg-gray-100">
      
      {/* BLOG KART KONTEYNIRI */}
      <div 
        className="max-w-[400px] w-full bg-white rounded-[24px] overflow-hidden border border-gray-100/80 flex flex-col shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
        style={{ boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.05)" }}
      >
        
        {/* ÜST ALAN: GÖRSEL VE MUTLAK KONUMLANDIRMALI DALGA (ABSOLUTE POSITIONING) */}
        <div className="relative h-[240px] w-full bg-gray-50 flex-shrink-0">
          <img 
            src={cardData.heroImage} 
            alt={cardData.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* TASARIMDAKİ ASİMETRİK BEYAZ DALGA AYIRICI (ABSOLUTE POSITIONED SVG) */}
          <div className="absolute bottom-[-1px] left-0 w-full pointer-events-none z-10">
            <svg 
              viewBox="0 0 400 40" 
              className="w-full fill-white"
              preserveAspectRatio="none"
            >
              <path d="M0,40 C120,40 200,10 400,28 L400,40 L0,40 Z" />
            </svg>
          </div>
        </div>

        {/* ORTA ALAN: METİN VE İÇERİK HİYERARŞİSİ */}
        <div className="p-7 flex flex-col gap-3 bg-white relative z-20">
          <h2 className="text-[#121826] text-[22px] font-bold tracking-tight leading-tight">
            {cardData.title}
          </h2>
          <p className="text-[#4D5562] text-sm md:text-base font-medium leading-relaxed">
            {cardData.description}
          </p>
        </div>

        {/* ALT ALAN: YAZAR BİLGİSİ (AUTHOR INFO) */}
        <div className="mx-7 mb-7 pt-5 border-t border-gray-100 flex items-center gap-3 bg-white z-20">
          <img 
            src={cardData.author.avatar} 
            alt={cardData.author.name} 
            className="w-10 h-10 rounded-full object-cover border border-gray-50 flex-shrink-0"
            loading="lazy"
          />
          <div className="flex flex-col min-w-0">
            <h3 className="text-[#121826] font-bold text-sm truncate">
              {cardData.author.name}
            </h3>
            <p className="text-gray-400 text-xs font-semibold truncate mt-0.5">
              {cardData.author.role}
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}