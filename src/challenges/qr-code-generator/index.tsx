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
  inputBg: "#030616",
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
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden rounded-3xl"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "'Outfit', sans-serif" }}
    >
      {/* --- KATMANLI ARKA PLAN EFEKTLERİ --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image src="/challenges/qr-code-generator/qa-bg.jpg" alt="bg" fill className="object-cover" />
        </div>
        
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#263FA9]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#263FA9]/10 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 w-full max-w-xl flex flex-col items-center gap-16 px-6">
        {/* LOGO */}
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Image src="/challenges/qr-code-generator/Logo.svg" alt="QRCODE Logo" width={180} height={50} />
        </motion.div>

        <AnimatePresence mode="wait">
          {!showQR ? (
            /* --- GİRİŞ EKRANI --- */
            <motion.div 
              key="input-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full"
            >
              <div className="bg-[#030616] p-2 border-2 border-[#263FA9] rounded-3xl flex items-center shadow-[0_0_30px_rgba(38,63,169,0.2)]">
                <input
                  type="text"
                  placeholder="Enter an url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent px-6 py-4 outline-none text-lg placeholder:text-gray-600"
                />
                <button
                  onClick={generateQR}
                  className="bg-[#263FA9] hover:bg-[#1F338A] px-10 py-4 rounded-2xl font-semibold transition-all active:scale-95"
                >
                  QR code
                </button>
              </div>
            </motion.div>
          ) : (
            /* --- SONUÇ EKRANI --- */
            <motion.div 
              key="result-screen"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-10 w-full"
            >
              {/* QR Code Gösterim Alanı */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#263FA9]/30 rounded-full blur-3xl scale-125" />
                <div className="relative bg-[#F2F5F9] p-10 rounded-[50px] shadow-2xl">
                  <motion.img 
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    src={qrImage} 
                    alt="Generated QR" 
                    className="w-64 h-64 md:w-72 md:h-72" 
                  />
                </div>
              </div>

              {/* BUTONLAR */}
              <div className="flex flex-col sm:flex-row gap-4 w-full px-4">
                <button
                  onClick={downloadQR}
                  className="flex-1 bg-[#263FA9] hover:bg-[#1F338A] py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-lg transition-all"
                >
                  Download <Download size={22} />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex-1 bg-[#263FA9] hover:bg-[#1F338A] py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-lg transition-all"
                >
                  Share <Share2 size={22} />
                </button>
              </div>
              
              <button 
                onClick={() => setShowQR(false)} 
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
              >
                <ArrowLeft size={16} /> Generate another code
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