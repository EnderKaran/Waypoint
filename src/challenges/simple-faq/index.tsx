"use client";

import React from 'react';

export default function SimpleFAQ() {
  return (
    <section className="min-h-screen bg-[#F3F4F6] py-16 px-4 md:py-24 flex items-center justify-center font-sans selection:bg-blue-500/10">
      
      {/* ANA KART KONTEYNIRI */}
      <div className="max-w-4xl w-full bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* HEADER BÖLÜMÜ */}
        <div className="text-center pt-16 pb-12 px-6 border-b border-gray-50 bg-[#F8FAFC]/50">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121826] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Browse through the most frequently asked questions
          </p>
        </div>

        {/* FAQ İÇERİK ALANI */}
        <div className="p-8 md:p-16 space-y-12">
          
          {/* SORU 1 */}
          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#121826] tracking-tight">
              How can I track my order?
            </h2>
            <div className="text-gray-600 text-base leading-relaxed space-y-4">
              <p>You can track your order using the following steps:</p>
              
              {/* Sıralı Liste Yapısı */}
              <ol className="list-decimal pl-5 space-y-2 font-medium text-gray-700">
                <li>
                  Go to the Order{" "}
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 underline rounded px-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Tracking page
                  </a>.
                </li>
                <li>Enter your order number and email address.</li>
                <li>Click on the Track Order button to view the current status of your shipment.</li>
              </ol>
              
              <p className="pt-2">
                If you encounter any issues, please visit our{" "}
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 underline rounded px-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Help Center
                </a>.
              </p>
            </div>
          </article>

          {/* TASARIMDAKİ İNCE BÖLÜCÜ ÇİZGİ */}
          <hr className="border-gray-100" />

          {/* SORU 2 */}
          <article className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#121826] tracking-tight">
              What is your return policy?
            </h2>
            <div className="text-gray-600 text-base leading-relaxed space-y-4">
              <p>We offer a 30-day return policy on most items. Here are some key points:</p>
              
              {/* Sırasız Liste Yapısı */}
              <ul className="list-disc pl-5 space-y-2 font-medium text-gray-700">
                <li>
                  <span className="font-bold text-[#121826]">Items must be in original condition:</span> Unworn, unused, and unwashed.
                </li>
                <li>Gifts and promotional items are eligible under custom terms detailed in our policy updates.</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}