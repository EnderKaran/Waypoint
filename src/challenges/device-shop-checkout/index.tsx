"use client";

import { useState } from "react";
import ProductList from "./ProductList";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function DeviceShopCheckout() {
  return (
    <div 
      id="checkout-page"
      className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 md:p-10 font-sans"
    >
      <div className="w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-[1.2fr_1fr] relative z-10">
        
        {/* SOL TARAF: Sepet Özeti */}
        <div className="p-6 md:p-12 bg-[#F8FAFC]">
          <div className="flex items-center gap-3 mb-10">
            <h1 className="text-3xl font-bold text-[#111827]">Checkout</h1>
            <span className="bg-[#E5E7EB] text-[#4B5563] text-xs font-bold px-3 py-1 rounded-full uppercase">3 Items</span>
          </div>

          <ProductList />
          <OrderSummary />
        </div>

        {/* SAĞ TARAF: Form Alanı */}
        <div className="p-6 md:p-12 bg-white">
          <CheckoutForm />
        </div>
      </div>

      <style jsx global>{`
        #checkout-page {
          /* Standart Ekranlar İçin Görsel */
          background-image: url('/challenges/device-shop-checkout/background-image.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* RETINA (YÜKSEK ÇÖZÜNÜRLÜKLÜ) EKRANLAR İÇİN OPTİMİZASYON */
        @media 
        (-webkit-min-device-pixel-ratio: 2), 
        (min-resolution: 192dpi) { 
          #checkout-page {
            /* Retina Ekranlar İçin @2x Görseli */
            background-image: url('/challenges/device-shop-checkout/background-image@2x.png');
          }
        }
      `}</style>
    </div>
  );
}