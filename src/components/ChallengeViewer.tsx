"use client";

import { useState } from "react";
import { Layout, Code2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function ChallengeViewer({ challenge, code }: { challenge: any, code: string }) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const DynamicChallenge = dynamic(() => import(`@/challenges/${challenge.slug}`), {
    loading: () => <p className="text-gray-500 text-center py-20 animate-pulse">Proje Yükleniyor...</p>,
    ssr: false 
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Dynamic Shell Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-all">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="font-bold text-sm md:text-base leading-none">{challenge.title}</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                {challenge.difficulty} Challenge
              </p>
            </div>
          </div>

          {/* TASARIM / KOD SWITCHER */}
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm transition-all ${
                activeTab === "preview" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-400 hover:text-white"
              }`}
            >
              <Layout size={16} /> <span className="hidden sm:inline">Tasarım</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm transition-all ${
                activeTab === "code" ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 size={16} /> <span className="hidden sm:inline">Kod</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 animate-in fade-in duration-700">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl min-h-[75vh]">
          {activeTab === "preview" ? (
            <div className="w-full h-full p-2 md:p-6 bg-[#0a0a0a]">
              <DynamicChallenge />
            </div>
          ) : (
            <div className="w-full h-full bg-[#0d0d0d] p-6 overflow-auto">
              <pre className="font-mono text-sm leading-relaxed text-blue-300/80 selection:bg-blue-500/30">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}