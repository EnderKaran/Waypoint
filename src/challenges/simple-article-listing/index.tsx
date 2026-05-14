"use client";

import React from 'react';

const ARTICLES = [
  {
    title: "Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions",
    date: "November 12, 2024",
    // Unsplash: Mor/pembe tonlarında 3D kavisli soyut render
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The Future of AI: How Machine Learning is Revolutionizing Industries",
    date: "November 12, 2024",
    // Unsplash: Yapay zeka ve akışkan organik formu andıran yeşil soyut render
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work",
    date: "November 12, 2024",
    // Unsplash: 5G ve veri küplerini simgeleyen cam/neon 3D küp render
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
  }
];

export default function SimpleArticleListing() {
  return (
    <section className="min-h-screen bg-[#F3F4F6] py-20 px-6 font-['Syne'] flex items-center justify-center">
      {/* Ana Kart Konteynırı */}
      <div className="max-w-[1000px] w-full bg-white rounded-[32px] p-8 md:p-20 shadow-sm border border-gray-100 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#000000] leading-tight max-w-lg mx-auto">
            We release interesting articles about technology
          </h1>
          
          {/* Eğik Çizgili Ayırıcı */}
          <div className="flex justify-center gap-1 mt-6 text-gray-200 tracking-tighter select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="text-xl font-light">/</span>
            ))}
          </div>
        </div>

        {/* Makale Listesi */}
        <div className="w-full flex flex-col gap-10">
          {ARTICLES.map((article, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row items-center gap-6 group cursor-pointer"
            >
              {/* Görsel Alanı (Unsplash CDN bağlantılı) */}
              <div className="w-full md:w-[160px] aspect-square flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 relative">
                <img 
                  src={article.img} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Metin Alanı */}
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-[18px] md:text-[20px] font-bold text-[#000000] group-hover:text-gray-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-[14px] text-gray-400 font-medium font-['Space_Mono'] uppercase tracking-tight">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}