"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, Share2, ArrowLeft } from "lucide-react";

const COLORS = {
  bg: "#030616",
  primary: "#263FA9",
  text: "#F2F5F9",
  accent: "#F8FAFC1A"
};

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [showQR, setShowQR] = useState(false);

  const generateQR = async () => {
    if (!url) return;
    try {
      const response = await QRCode.toDataURL(url, {
        width: 600,
        margin: 2,
        color: { dark: "#030616", light: "#FFFFFF" },
      });
      setQrImage(response);
      setShowQR(true);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png";
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("URL kopyalandı!");
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-[85vh] w-full overflow-hidden rounded-3xl selection:bg-[#263FA9]/30"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "'Outfit', sans-serif" }}
    >
      {/* --- TASARIMDAKI GEOMETRIK ARKA PLAN --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ana Arka Plan Görseli */}
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/challenges/qr-code-generator/qa-bg.jpg" 
            alt="bg" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="absolute top-[10%] -right-20 md:-right-40 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#263FA9]/10 rotate-45 rounded-[80px] md:rounded-[120px] blur-sm border border-white/5" />
      </div>

      <div className="z-10 w-full max-w-[90%] md:max-w-xl flex flex-col items-center gap-10 md:gap-16">
        {/* LOGO - Mobilde daha küçük */}
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Image 
            src="/challenges/qr-code-generator/Logo.svg" 
            alt="QRCODE Logo" 
            width={160} 
            height={40} 
            className="w-[120px] md:w-[180px]" 
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!showQR ? (
            <motion.div 
              key="input-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-[600px]"
            >
              <div className="bg-[#030616]/90 p-1.5 md:p-2 border-2 border-[#263FA9] rounded-2xl md:rounded-3xl flex items-center shadow-[0_0_40px_rgba(38,63,169,0.15)]">
                <input
                  type="text"
                  placeholder="Enter an url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent px-4 md:px-6 py-3 md:py-4 outline-none text-base md:text-lg placeholder:text-gray-600"
                />
                <button
                  onClick={generateQR}
                  className="bg-[#263FA9] hover:bg-[#1F338A] px-5 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all active:scale-95"
                >
                  QR code
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-8 md:gap-12 w-full"
            >
              {/* QR Code Kartı */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#263FA9]/20 rounded-full blur-3xl scale-110 md:scale-125" />
                
                {/* Tasarımdaki kavisli beyaz kart */}
                <div className="relative bg-[#F2F5F9] p-6 md:p-10 rounded-[40px] md:rounded-[56px] shadow-2xl">
                  <motion.img 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    src={qrImage} 
                    alt="Generated QR" 
                    className="w-56 h-56 md:w-72 md:h-72 object-contain" 
                  />
                </div>
              </div>

              {/* BUTONLAR - Mobilde yan yana (grid) */}
              <div className="grid grid-cols-2 gap-3 md:gap-5 w-full px-2 max-w-[450px]">
                <button
                  onClick={downloadQR}
                  className="bg-[#263FA9] hover:bg-[#1F338A] py-4 md:py-5 rounded-2xl flex items-center justify-center gap-2 md:gap-3 font-bold text-sm md:text-lg transition-all shadow-lg"
                >
                  Download <Download size={18} className="md:w-[22px]" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="bg-[#263FA9] hover:bg-[#1F338A] py-4 md:py-5 rounded-2xl flex items-center justify-center gap-2 md:gap-3 font-bold text-sm md:text-lg transition-all shadow-lg"
                >
                  Share <Share2 size={18} className="md:w-[22px]" />
                </button>
              </div>
              
              <button 
                onClick={() => setShowQR(false)} 
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs md:text-sm"
              >
                <ArrowLeft size={14} /> Generate another code
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
}