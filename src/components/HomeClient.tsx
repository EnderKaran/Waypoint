"use client";

import { CHALLENGES } from "@/constants/challenges";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = CHALLENGES.length;
  const doneCount = CHALLENGES.filter(c => c.status === "done").length;
  const progressPercent = Math.round((doneCount / total) * 100);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-['Syne',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <section className="text-center pt-16 pb-8 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(3rem,10vw,6rem)] font-extrabold tracking-tighter leading-none"
        >
          WAY<span style={{ WebkitTextStroke: "1px #333", color: "#050505" }}>POINT</span>
        </motion.h1>
        
        <div className="flex justify-center gap-8 md:gap-12 mt-8 font-['Space_Mono',monospace]">
          <div className="text-center">
            <div className="text-2xl font-bold">{doneCount}</div>
            <div className="text-[0.6rem] text-[#444] uppercase tracking-widest mt-1">Tamamlandı</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{total}</div>
            <div className="text-[0.6rem] text-[#444] uppercase tracking-widest mt-1">Toplam</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{progressPercent}%</div>
            <div className="text-[0.6rem] text-[#444] uppercase tracking-widest mt-1">İlerleme</div>
          </div>
        </div>
      </section>

      {/* ROADMAP TRACK */}
      <section className="max-w-[860px] mx-auto px-4 pb-20">
        <div className="relative">
          {CHALLENGES.map((challenge, index) => {
            const status = challenge.status;
            const difficulty = challenge.difficulty; // Junior veya Mid-level verisi buradan geliyor
            
            return (
              <div key={challenge.id} className="grid grid-cols-[80px_1fr] gap-0 relative group">
                {/* SPINE */}
                <div className="flex flex-col items-center pt-6">
                  <div className={`
                    w-9 h-9 rounded-full border-2 flex items-center justify-center relative z-10 transition-all duration-300
                    ${status === 'done' ? 'border-green-500 bg-[#0a1f10]' : 
                      status === 'active' ? 'border-blue-500 bg-[#0a0f1f] shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 
                      'border-[#1a1a1a] bg-[#080808]'}
                  `}>
                    <motion.div 
                      animate={status === 'active' ? { opacity: [1, 0.5, 1], scale: [1, 0.8, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-2.5 h-2.5 rounded-full ${status === 'done' ? 'bg-green-500' : status === 'active' ? 'bg-blue-500' : 'bg-[#222]'}`} 
                    />
                  </div>
                  
                  {index < CHALLENGES.length - 1 && (
                    <div className={`w-[2px] flex-1 my-1 transition-colors duration-500 ${status === 'done' ? 'bg-gradient-to-b from-green-500/30 to-[#111]' : 'bg-[#1a1a1a]'}`} />
                  )}
                </div>

                {/* CARD CONTENT */}
                <Link href={`/challenges/${challenge.slug}`} className="py-5 pl-2 block">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className={`
                      relative overflow-hidden bg-[#0a0a0a] border border-[#111] rounded-xl p-5 transition-all duration-300
                      ${status === 'done' ? 'hover:border-green-500/30' : status === 'active' ? 'border-blue-500/20 hover:border-blue-500/40' : 'opacity-60'}
                    `}
                  >
                    <div className="flex items-center justify-between mb-3 font-['Space_Mono',monospace] text-[0.6rem]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#333]">0{index + 1}</span>
                        {/* ZORLUK SEVİYESİ BADGE */}
                        <span className={`px-2 py-0.5 rounded border ${
                          difficulty.toLowerCase() === 'junior' 
                          ? 'border-yellow-500/20 text-yellow-600' 
                          : 'border-purple-500/20 text-purple-500'
                        }`}>
                          {difficulty.toUpperCase()}
                        </span>
                      </div>
                      
                      <span className={`
                        px-2 py-1 rounded border tracking-widest uppercase
                        ${status === 'done' ? 'bg-[#0a1f10] text-green-500 border-green-500/20' : 
                          status === 'active' ? 'bg-[#0a0f1f] text-blue-500 border-blue-500/20' : 
                          'bg-[#111] text-[#333] border-[#1a1a1a]'}
                      `}>
                        {status === 'done' ? '✓ Tamamlandı' : status === 'active' ? '→ Devam Ediyor' : '○ Kilitli'}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 tracking-tight ${status === 'locked' ? 'text-[#2a2a2a]' : 'text-white'}`}>
                      {challenge.title}
                    </h3>
                    
                    <p className={`font-['Space_Mono',monospace] text-[0.75rem] leading-relaxed ${status === 'locked' ? 'text-[#2a2a2a]' : 'text-[#555]'}`}>
                      {challenge.description}
                    </p>

                    <div className="flex gap-2 flex-wrap mt-4">
                      {challenge.tags.map(tag => (
                        <span key={tag} className="font-['Space_Mono',monospace] text-[0.55rem] border border-[#1a1a1a] px-2 py-0.5 rounded text-[#2a2a2a] tracking-wider uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(status === 'done' || status === 'active') && (
                      <div className="mt-6 pt-4 border-t border-[#0f0f0f] flex items-center gap-4 font-['Space_Mono',monospace] text-[0.6rem] text-[#333]">
                        <span>{status === 'done' ? '100%' : '45%'}</span>
                        <div className="flex-1 h-[2px] bg-[#111] rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ${status === 'done' ? 'bg-green-500 w-full' : 'bg-blue-600 w-[45%]'}`} 
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="py-12 text-center font-['Space_Mono',monospace] text-[0.55rem] text-[#444] tracking-[0.2em] uppercase">
        Waypoint · Her commit bir adım
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
      `}</style>
    </main>
  );
}