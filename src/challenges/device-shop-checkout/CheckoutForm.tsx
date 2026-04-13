"use client";

import { ChevronDown } from "lucide-react";

export default function CheckoutForm() {
  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-700">
      <h2 className="text-xl font-bold text-[#111827] mb-8">Contact Information</h2>

      <form className="space-y-6 flex-1" onSubmit={(e) => e.preventDefault()}>
        {/* Ad Soyad */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">First & Last name</label>
          <input 
            type="text" 
            placeholder="Enter first & last name"
            className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-gray-900"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address"
            className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-gray-900"
          />
        </div>

        {/* Ülke ve Posta Kodu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Country</label>
            <div className="relative">
              <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none appearance-none text-gray-900 pr-10 cursor-pointer">
                <option value="finland">Finland</option>
                <option value="turkey">Turkey</option>
                <option value="usa">USA</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Postal Code</label>
            <input 
              type="text" 
              placeholder="00270"
              className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Aksiyon Butonu */}
        <div className="pt-6 mt-auto">
          <button 
            type="submit"
            className="w-full bg-[#111827] text-white font-bold py-5 rounded-xl hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-gray-200"
            style={{ boxShadow: "0px 4px 4px -1px rgba(17, 23, 41, 0.05)" }}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}