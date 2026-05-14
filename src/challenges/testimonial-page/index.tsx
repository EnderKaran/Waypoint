"use client";

import React from 'react';
import { Check, Star } from 'lucide-react';

export default function TestimonialPage() {
  // Tasarımdaki checklist maddeleri
  const checklistItems = [
    "Checklist to Review an Academic Paper",
    "Peer Review Checklist",
    "Checklist for Editors, Reviewers, and Authors of SPIE Journals"
  ];

  return (
    <section className="min-h-screen w-full bg-[#F8FAFC] py-12 px-6 md:py-24 flex items-center justify-center font-['Outfit'] selection:bg-gray-100">
      
      {/* ANA KONTEYNER (Masaüstünde Split Flex/Grid Düzeni) */}
      <div className="max-w-6xl w-full bg-white rounded-[32px] p-8 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border border-gray-100/50">
        
        {/* SOL SÜTUN: BAŞLIK, AÇIKLAMA VE CHECKLIST (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            {/* Altın Rozet İkonu */}
            <div className="w-12 h-12 rounded-full bg-[#FCE8D3] flex items-center justify-center text-xl shadow-inner">
              ⭐
            </div>
            <h1 className="text-[#121826] text-3xl md:text-4xl font-bold tracking-tight">
              Reviewers
            </h1>
            <p className="text-[#4D5562] text-base md:text-lg leading-relaxed font-medium">
              Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.
            </p>
          </div>

          {/* Checklist Yapısı */}
          <ul className="space-y-3 pt-2">
            {checklistItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-[#121826]/90">
                <div className="w-5 h-5 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SAĞ SÜTUN: SÜZÜLEN TESTIMONIAL KARTLARI (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative pt-6 lg:pt-0">
          
          {/* KART 1: GOOGLE / SAMANTHA LEE */}
          <div 
            className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col gap-4 max-w-md lg:max-w-none self-end lg:self-auto shadow-2xl transition-transform hover:translate-y-[-2px] duration-300"
            style={{ boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.05)" }} // İstenen özel gölge derinliği
          >
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-lg tracking-tight">Google</span>
              <div className="flex items-center gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <div>
              <h3 className="text-[#121826] font-bold text-base">Samantha Lee</h3>
              <p className="text-[#4D5562] text-sm mt-1 leading-relaxed font-medium">
                The checklist ensures the review process is thorough and efficient. Highly intuitive structure.
              </p>
            </div>
          </div>

          {/* KART 2: META / RACHEL PATEL (Masaüstünde hafif sola kaydırılmış asimetrik duruş) */}
          <div 
            className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col gap-4 max-w-md lg:max-w-none lg:w-[105%] lg:-left-[5%] relative shadow-2xl transition-transform hover:translate-y-[-2px] duration-300"
            style={{ boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.05)" }} // İstenen özel gölge derinliği
          >
            <div className="flex items-center justify-between">
              <span className="text-indigo-600 font-black text-lg tracking-tight">∞ Meta</span>
              <div className="flex items-center gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <div>
              <h3 className="text-[#121826] font-bold text-base">Rachel Patel</h3>
              <p className="text-[#4D5562] text-sm mt-1 leading-relaxed font-medium">
                I highly recommend the Writecream Business Description. It provides an elite, consistent standard.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* FONTS IMPORT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}