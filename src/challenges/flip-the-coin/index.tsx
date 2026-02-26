"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const COLORS = {
  bg: "#404A65",
  text: "#ECEDF0",
  headingStroke: "#35383F",
  button: "#1F6FB0",
  buttonShadow: "#23649b"
};

export default function FlipTheCoin() {
  const [result, setResult] = useState<"Heads" | "Tails">("Heads");
  const [isFlipping, setIsFlipping] = useState(false);
  const controls = useAnimation();

  const flipCoin = async () => {
    if (isFlipping) return;

    setIsFlipping(true);
    
    // Rastgele sonuç belirle
    const newResult = Math.random() < 0.5 ? "Heads" : "Tails";
    
    // Animasyon
    await controls.start({
      rotateY: [0, 1800], 
      y: [-100, 0],      
      transition: { duration: 1.5, ease: "easeOut" }
    });

    setResult(newResult);
    setIsFlipping(false);
    
    controls.set({ rotateY: 0 });
  };

  return (
    <div 
      className="flex flex-col items-center justify-center gap-8 py-12 px-4 min-h-[600px] transition-colors duration-500"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "'Kanit', sans-serif" }}
    >
      {/* BAŞLIK */}
      <div className="text-center space-y-2">
        <h1 
          className="text-5xl md:text-7xl font-semibold uppercase tracking-tight"
          style={{
            textShadow: "2px 2px 0px #35383f",
            WebkitTextStroke: "5px #35383f",
            paintOrder: "stroke fill"
          }}
        >
          Flip the coin
        </h1>
        <p className="text-xl md:text-2xl font-semibold opacity-90">
          Press the coin or the button to flip the coin
        </p>
      </div>

      {/* PARA VE GÖLGE ALANI */}
      <div className="relative flex flex-col items-center py-10">
        <motion.div
          animate={controls}
          onClick={flipCoin}
          className="cursor-pointer z-10 w-48 h-48 md:w-56 md:h-56 relative"
        >
          {/* Paranın Önü/Arkası mantığı */}
          <Image 
            src={`/challenges/flip-the-coin/${result === "Heads" ? "heads.svg" : "tails.svg"}`}
            alt={result}
            fill
            className="drop-shadow-2xl"
          />
        </motion.div>

        {/* GÖLGE */}
        <motion.div 
          animate={{ scale: isFlipping ? [1, 0.5, 1] : 1, opacity: isFlipping ? [0.4, 0.2, 0.4] : 0.4 }}
          className="mt-4"
        >
           <Image src="/challenges/flip-the-coin/shadow.svg" alt="shadow" width={100} height={20} />
        </motion.div>
      </div>

      {/* SONUÇ METNİ */}
      <div className="h-10">
        {!isFlipping && (
           <h2 className="text-3xl font-semibold animate-in fade-in zoom-in duration-300">
             {result}
           </h2>
        )}
      </div>

      {/* BUTON */}
      <button
        onClick={flipCoin}
        disabled={isFlipping}
        className="px-10 py-3 rounded-lg font-semibold text-xl tracking-widest uppercase transition-transform active:translate-y-1"
        style={{
          backgroundColor: COLORS.button,
          boxShadow: `0px 4px 0px 0px ${COLORS.buttonShadow}`,
        }}
      >
        RANDOM
      </button>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');
      `}</style>
    </div>
  );
}