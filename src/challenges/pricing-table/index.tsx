"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingTable = () => {
  // Tasarımdaki özellik listesi
  const features = [
    "Website number", "Server storage", "Database", 
    "Unmetered Bandwidth", "SSD Disk", "VCPUS Fontworld", 
    "Worldpress install", "Server speed"
  ];

  // Plan verileri
  const plans = [
    {
      name: "Free",
      price: "0",
      storage: "100 GB",
      website: "01",
      db: "-",
      features: [false, false, false, false, false]
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
      isPopular: true, // Öne çıkan kart
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
    <section className="min-h-screen bg-[#F8FAFC] py-16 px-4 relative overflow-hidden font-['Be_Vietnam_Pro']">
      {/* Üst Kısımdaki Desen Arka Planı */}
      <div 
        className="absolute top-0 left-0 w-full h-[400px] bg-white z-0 opacity-50" 
        style={{ backgroundImage: "url('/challenges/pricing-table/bg-pattern.png')", backgroundSize: '400px' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Bölümü */}
        <div className="text-center mb-16">
          <h1 className="text-[#121826] text-[32px] font-bold mb-4">Pricing & Plans</h1>
          <p className="text-[#4D5562] max-w-xl mx-auto text-base">
            Discover the plan that unlocks the transformative power of digital art and join our vibrant community today.
          </p>
        </div>

        {/* Ana Tablo / Grid Yapısı */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E5E7EB] flex flex-col md:flex-row">
          
          {/* Masaüstü Sol Sütun: Özellik İsimleri */}
          <div className="hidden md:flex flex-col w-1/5 pt-[240px] bg-[#F8FAFC]/30 border-r border-[#E5E7EB]">
            {features.map((feature, i) => (
              <div key={i} className="px-8 py-4 text-[#121826] font-semibold text-sm border-b border-[#E5E7EB]/50 last:border-0 h-[60px] flex items-center">
                {feature}
              </div>
            ))}
          </div>

          {/* Plan Sütunları */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col transition-all duration-300 relative ${
                  plan.isPopular 
                    ? 'bg-[#121826] text-white md:-mt-4 md:-mb-4 rounded-3xl shadow-2xl z-20' 
                    : 'bg-white text-[#121826] border-r border-[#E5E7EB] last:border-0'
                }`}
              >
                {/* Kart Başlığı */}
                <div className="p-8 text-center border-b border-[#E5E7EB]/10 min-h-[240px] flex flex-col justify-end">
                  {plan.isPopular && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2">
                      <span className="bg-[#263FA9] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                        Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold mb-2 text-[#263FA9] uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="flex justify-center items-baseline">
                    <span className="text-[64px] font-semibold leading-none">${plan.price}</span>
                  </div>
                  <p className={`text-xs mt-2 font-medium ${plan.isPopular ? 'text-gray-400' : 'text-[#4D5562]'}`}>
                    Per month
                  </p>
                </div>

                {/* Plan Detayları ve Özellik Karşılaştırma */}
                <div className="flex-1">
                  {/* Dinamik Değerler */}
                  <div className="px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium h-[60px] flex items-center justify-center">
                    <span className="md:hidden font-bold text-gray-400 mr-2">Websites:</span> {plan.website}
                  </div>
                  <div className="px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium h-[60px] flex items-center justify-center">
                    <span className="md:hidden font-bold text-gray-400 mr-2">Storage:</span> {plan.storage}
                  </div>
                  <div className="px-4 py-4 text-center border-b border-[#E5E7EB]/10 text-sm font-medium h-[60px] flex items-center justify-center">
                    <span className="md:hidden font-bold text-gray-400 mr-2">Database:</span> {plan.db}
                  </div>
                  
                  {/* Onay İşaretleri (Checkmarks) */}
                  {plan.features.map((isIncluded, i) => (
                    <div key={i} className="px-4 py-4 flex justify-center border-b border-[#E5E7EB]/10 last:border-0 h-[60px] items-center">
                      {isIncluded ? (
                        <Check size={18} className={plan.isPopular ? "text-white" : "text-[#263FA9]"} />
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Buton Alanı */}
                <div className="p-6">
                  <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                    plan.isPopular 
                      ? 'bg-[#7C4F1E] text-white hover:bg-[#8e5a22]' 
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

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default PricingTable;