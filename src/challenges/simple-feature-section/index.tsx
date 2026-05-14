"use client";

import React from 'react';
import Image from 'next/image';

const FEATURES = [
  {
    emoji: "✋",
    title: "Collect Feedback at Multiple Touchpoints",
    description: "Provide a comprehensive understanding of the customer experience.",
    img: "photo_1.png",
    bg: "#DEE9FC"
  },
  {
    emoji: "🥅",
    title: "Ask Targeted and Specific Questions",
    description: "Avoid vague or open-ended questions that may not yield actionable insights.",
    img: "photo_2.png",
    bg: "#FBE5E6"
  },
  {
    emoji: "💬",
    title: "Prioritize and Respond to Feedback",
    description: "Communicate the changes or improvements you've made in response to their feedback.",
    img: "photo_3.png",
    bg: "#FCEED8"
  }
];

export default function SimpleFeatureSection() {
  return (
    <section className="min-h-screen bg-[#121826] font-['Outfit'] py-20 px-6 relative overflow-hidden text-white">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image 
          src="/challenges/simple-feature-section/Background_image.svg" 
          alt="pattern" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h1 className="text-[40px] font-semibold leading-tight mb-4 text-[#E5E7EB]">
            Quality feedbacks for your SaaS products
          </h1>
          <p className="text-[#9DA3AE] text-base font-normal">
            The blocks & components you need
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="flex-1 bg-[#212936] p-8 rounded-2xl flex flex-col gap-6 border border-[#E5E7EB]/5 transition-all hover:scale-[1.02]"
              style={{ boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.15)" }}
            >
              {/* Emoji ve Metin Alanı */}
              <div className="flex flex-col gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner"
                  style={{ backgroundColor: feature.bg }}
                >
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#9DA3AE] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Görsel Alanı */}
              <div className="mt-auto overflow-hidden rounded-xl border border-white/5">
                <img 
                  src={`/challenges/simple-feature-section/${feature.img}`} 
                  alt={feature.title}
                  className="w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap');
      `}</style>
    </section>
  );
}