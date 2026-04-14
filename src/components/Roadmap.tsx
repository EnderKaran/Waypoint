"use client";

import { motion } from "framer-motion";
import { Challenge } from "@/types";

export default function Roadmap({ challenges }: { challenges: Challenge[] }) {
  if (challenges.length < 2) return null;

  let pathData = `M ${challenges[0].position.x} ${challenges[0].position.y}`;

  for (let i = 1; i < challenges.length; i++) {
    const prev = challenges[i - 1].position;
    const curr = challenges[i].position;
    
   
    const midY = (prev.y + curr.y) / 2;
    pathData += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      viewBox="0 0 100 800" 
      preserveAspectRatio="none"
    >
      {/* Arka plandaki sabit soluk çizgi */}
      <path
        d={pathData}
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="0.5"
      />

      {/* Animasyonlu parlayan çizgi */}
      <motion.path
        d={pathData}
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth="0.4"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* Gradyan Tanımı (Maviden Şeffafa) */}
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}