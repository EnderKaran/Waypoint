"use client";

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Check } from 'lucide-react';

export default function SimpleHomepage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["About us", "Product", "Resource", "Contact"];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#111729] text-white' : 'bg-[#FFFFFF] text-[#121826]'}`}>
      
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tight">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg transform rotate-12 flex items-center justify-center text-white text-xs">A</div>
          <span>Alarado</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <a key={link} href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
              {link}
            </a>
          ))}
        </div>

        {/* Theme & Menu Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'border-gray-800 bg-gray-900/50 text-yellow-400' : 'border-gray-100 bg-gray-50 text-gray-500'}`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 rounded-xl border border-transparent"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Texts & CTA */}
        <div className="space-y-8 max-w-xl">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
              😎 Simple way to communicate
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Actions for <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Accessibility</span> in Design
            </h1>
          </div>

          <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            The fastest way to build and deploy websites with reusable components.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 text-sm uppercase tracking-wider">
              Get Started
            </button>
            <button className={`font-bold px-6 py-4 underline transition-colors text-sm uppercase tracking-wider ${darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>
              Get live demo
            </button>
          </div>

          {/* Checklist */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-xs font-semibold uppercase tracking-wider opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center"><Check size={12} strokeWidth={3} /></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center"><Check size={12} strokeWidth={3} /></div>
              <span>No software to install</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Hero Graphics */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none">
          {/* Big Circle Graphic */}
          <div className="absolute inset-4 rounded-full bg-blue-500/5 border border-blue-500/10 animate-pulse z-0" />
          
          {/* Main 3D Abstract Image */}
          <div className="absolute inset-16 rounded-[40px] overflow-hidden shadow-2xl z-10 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop" 
              alt="Hero Vector Art" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial Badge 1 (Edwin Mack) */}
          <div className="absolute top-1/4 -left-6 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 z-20 flex items-center gap-3 max-w-[200px] animate-bounce duration-1000">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-9 h-9 rounded-xl object-cover" alt="User" />
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">Edwin Mack</h4>
              <p className="text-[10px] text-yellow-500 font-bold">★★★★★</p>
            </div>
          </div>

          {/* Testimonial Badge 2 (Heidi Fisher) */}
          <div className="absolute bottom-1/4 -right-6 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 z-20 w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full object-cover" alt="User" />
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white">Heidi Fisher</h4>
                <p className="text-[9px] text-gray-400">Creative Director</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] font-bold text-gray-400"><span>Sending...</span><span>65%</span></div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MOBILE SIDE NAVIGATION DRAWER */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 bottom-0 w-[280px] p-6 flex flex-col justify-between transition-transform duration-300 ${darkMode ? 'bg-[#111729]' : 'bg-white'} ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-6 font-semibold text-lg">
              {navLinks.map((link) => (
                <a key={link} href="#" onClick={() => setMobileMenuOpen(false)} className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-gray-400 font-medium">Alarado Landing Page Module</p>
        </div>
      </div>

    </div>
  );
}