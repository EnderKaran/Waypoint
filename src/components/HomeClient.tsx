"use client";

import { CHALLENGES } from "@/constants/challenges";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const MotionLink = motion.create(Link);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, 
      delayChildren: 0.3, 
    },
  },
};

// SVG Yolun Çizilmesi
const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.4, 
    transition: {
      duration: 2.5, 
      ease: "easeInOut",
    },
  },
};

// Durakların (Node) Belirmesi
const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function HomePage() {
  const svgPathData = `
    M 400 0 
    Q 400 50, ${CHALLENGES[0].position.x * 8} ${CHALLENGES[0].position.y}
    T ${CHALLENGES[1].position.x * 8} ${CHALLENGES[1].position.y}
  `;

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-20 overflow-hidden">
      <div className="text-center mb-10 z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          WAYPOINT
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
           className="text-gray-500 max-w-md mx-auto"
        >
          DevChallenges yolculuğumun interaktif gelişim haritası.
        </motion.p>
      </div>

      {/* ROADMAP KAPSAYICISI */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-[800px] h-[600px] border border-white/5 rounded-3xl bg-black/20 p-10"
      >
        {/* 1. SVG YOL KATMANI */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
          <motion.path
            variants={pathVariants}
            d={svgPathData}
            fill="none"
            stroke="url(#road-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="road-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* 2. PROJE DURAKLARI (Node'lar) */}
        {CHALLENGES.map((challenge) => (
          <MotionLink
            key={challenge.id}
            href={`/challenges/${challenge.slug}`}
            variants={nodeVariants}
            style={{ 
              left: `${challenge.position.x}%`, 
              top: `${challenge.position.y}px` 
            }}
            className="absolute group -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {/* Durak Noktası Görseli */}
            <div className="relative">
              {/* Dışarıdaki hare efekti */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Ana nokta */}
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] border-2 border-white/10 group-hover:scale-110 transition-transform" />
              
              {/* Tooltip / İsim */}
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#0A0A0A] border border-white/10 px-4 py-3 rounded-xl pointer-events-none whitespace-nowrap shadow-xl z-30">
                <p className="text-sm font-bold">{challenge.title}</p>
                <div className="flex items-center gap-2 mt-1">
                   <span className={`w-2 h-2 rounded-full ${challenge.difficulty === 'Beginner' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">{challenge.difficulty}</p>
                </div>
              </div>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </main>
  );
}