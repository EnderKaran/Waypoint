"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const PricingTable = () => {
  const features = [
    "Website number", "Server storage", "Database", 
    "Unmetered Bandwidth", "SSD Disk", "VCPUS Fontworld", 
    "Worldpress install", "Server speed"
  ];

  const plans = [
    {
      name: "Free",
      price: "0",
      storage: "100 GB",
      website: "01",
      db: "-",
      features: [false, false, false, false, false] // İlk 3 özellikten sonrası pasif
    },
    {
      name: "Team",
      price: "59",
      storage: "500 GB",
      website: "10",
      db: "15",
      features: [true, false, false, false, false]
    },
    {
      name: "Popular",
      price: "99",
      storage: "1 TB",
      website: "50",
      db: "Unlimited",
      isPopular: true,
      features: [true, true, true, true, true]
    },
    {
      name: "Enterprise",
      price: "299",
      storage: "Unlimited",
      website: "Unlimited",
      db: "Unlimited",
      features: [true, true, true, true, true]
    }
  ];

  return (
    <section className="min-h-screen bg-[#F8FAFC] font-['Be_Vietnam_Pro'] py-16 px-4 relative overflow-hidden">
      {/* Arka Plan Deseni */}
      <div className="absolute top-0 left-0 w-full h-64 bg-white z-0" 
           style={{ backgroundImage: "url('/bg-pattern.png')", backgroundSize: 'cover' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[#121826] text-4xl md:text-[32px] font-bold mb-4">Pricing & Plans</h1>
          <p className="text-[#4D5562] max-w-xl mx-auto text-base">
            Discover the plan that unlocks the transformative power of digital art and join our vibrant community today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E5E7EB] flex flex-col md:flex-row">
          
          {/* Özellik İsimleri (Desktop Sol Sütun) */}
          <div className="hidden md:flex flex-col w-1/5 pt-[220px] bg-[#F8FAFC]/50">
            {features.map((f, i) => (
              <div key={i} className="px-8 py-4 text-[#121826] font-semibold text-sm border-b border-[#E5E7EB]/50 last:border-0">
                {f}
              </div>
            ))}
          </div>

          {/* Plan Sütunları */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-[#121826] text-white md:-mt-4 md:mb-[-1px] rounded-t-3xl md:rounded-b-none shadow-2xl z-20' 
                    : 'bg-white text-[#121826] border-r border-[#E5E7EB] last:border-0'
                }`}
              >
                {/* Plan Header */}
                <div className="p-8 text-center border-b border-[#E5E7EB]/10">
                  {plan.isPopular && (
                    <span className="bg-[#263FA9] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest inline-block mb-4">
                      Popular
                    </span>
                  )}
                  <h3 className={`text-sm font-semibold mb-2 ${plan.isPopular ? 'text-[#263FA9]' : 'text-[#263FA9]'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-4xl md:text-[64px] font-semibold">${plan.price}</span>
                  </div>
                  <p className={`text-xs mt-2 ${plan.isPopular ? 'text-gray-400' : 'text-[#4D5562]'}`}>Per month</p>
                </div>

                {/* Plan Değerleri */}
                <div className="flex-1">
                  <div className={`px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium`}>
                    <span className="md:hidden font-bold block mb-1 text-gray-400">Website number:</span> {plan.website}
                  </div>
                  <div className={`px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium`}>
                    <span className="md:hidden font-bold block mb-1 text-gray-400">Server storage:</span> {plan.storage}
                  </div>
                  <div className={`px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium`}>
                    <span className="md:hidden font-bold block mb-1 text-gray-400">Database:</span> {plan.db}
                  </div>
                  
                  {/* Checkmark Özellikleri */}
                  {plan.features.map((isIncluded, i) => (
                    <div key={i} className="px-4 py-4 flex justify-center border-b border-[#E5E7EB]/10 last:border-0">
                      {isIncluded ? (
                        <Check size={18} className="text-[#22c55e]" />
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Buton Section */}
                <div className="p-6">
                  <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular 
                      ? 'bg-[#7C4F1E] text-white hover:bg-[#633e18]' 
                      : 'bg-transparent text-[#263FA9] border border-transparent hover:gap-4'
                  }`}>
                    Get Started <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;