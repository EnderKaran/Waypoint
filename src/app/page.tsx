import { CHALLENGES } from "@/constants/challenges";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">WAYPOINT</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          DevChallenges yolculuğumun interaktif gelişim haritası.
        </p>
      </div>

      <div className="relative w-full max-w-3xl h-[600px] border border-white/5 rounded-3xl bg-black/20 p-10">
        
        {/* Proje Durakları (Nodes) */}
        {CHALLENGES.map((challenge) => (
          <Link
            key={challenge.id}
            href={`/challenges/${challenge.slug}`}
            style={{ 
              left: `${challenge.position.x}%`, 
              top: `${challenge.position.y}px` 
            }}
            className="absolute group -translate-x-1/2 -translate-y-1/2"
          >
            {/* Durak Noktası */}
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform" />
              
              {/* Tooltip / İsim */}
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 border border-white/10 px-3 py-2 rounded-lg pointer-events-none whitespace-nowrap">
                <p className="text-xs font-bold">{challenge.title}</p>
                <p className="text-[10px] text-gray-500">{challenge.difficulty}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}