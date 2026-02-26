import { notFound } from "next/navigation";
import { CHALLENGES } from "@/constants/challenges";
import Link from "next/link";
import { ChevronLeft, Github, ExternalLink } from "lucide-react";

// Proje bileşenleri
import FlipTheCoin from "@/challenges/flip-the-coin";

// Slug -> Component
const challengeComponents: Record<string, React.ReactNode> = {
  "flip-the-coin": <FlipTheCoin />,
};

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const challenge = CHALLENGES.find((c) => c.slug === slug);

  // 404 sayfasına yönlendir
  if (!challenge || !challengeComponents[slug]) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation / Shell Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="font-bold text-sm md:text-base">{challenge.title}</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                {challenge.difficulty} Challenge
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs py-1 px-2 bg-white/5 border border-white/10 rounded-md text-gray-400">
              {challenge.tags[0]}
            </span>
          </div>
        </div>
      </header>

      {/* Challenge Display Area */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl min-h-[70vh] flex flex-col">
          <div className="flex-1 w-full h-full p-4 md:p-10">
            {challengeComponents[slug]}
          </div>
        </div>
        
        {/* Footer / Description */}
        <div className="mt-8 grid md:grid-cols-2 gap-8 px-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Hakkında</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {challenge.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {challenge.tags.map(tag => (
              <span key={tag} className="text-[11px] px-3 py-1 bg-white/5 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}