"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: "Liam Novak", role: "Software Engineer", img: "person_1.png", color: "#C1B6F8" },
  { name: "Sophia Moretti", role: "Business Development Manager", img: "person_2.png", color: "#EDACD2" },
  { name: "Ethan Rossi", role: "Business Development Manager", img: "person_3.png", color: "#9DC4F8" },
  { name: "Isabella Ricci", role: "UX Designer", img: "person_4.png", color: "#F8D8B0" },
  { name: "Noah Conti", role: "Content Creator", img: "person_5.png", color: "#86E7D4" },
];

const MeetTheTeam = () => {
  return (
    <section className="min-h-screen bg-[#F3F4F6] font-['Outfit'] py-12 px-4 md:py-24">
      <div className="max-w-[1200px] mx-auto bg-white rounded-[40px] overflow-hidden shadow-sm p-4 md:p-0">
        
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* HEADER CARD */}
          <div className="p-8 md:p-16 lg:col-span-1 flex flex-col justify-center relative">
            <div 
              className="absolute top-10 left-10 opacity-20"
              style={{ backgroundImage: "url('/challenges/meet-the-team/Background_decor.png')", width: '100px', height: '100px', backgroundSize: 'contain' }}
            />
            <span className="text-[#263FA9] text-sm font-medium mb-4">Our team</span>
            <h1 className="text-[#000000] text-[40px] font-medium leading-tight mb-6">Meet the brain</h1>
            <p className="text-[#394150] text-base leading-relaxed max-w-sm">
              We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.
            </p>
          </div>

          {/* TEAM MEMBERS */}
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className="relative aspect-square group overflow-hidden"
              style={{ backgroundColor: member.color }}
            >
              <Image 
                src={`/challenges/meet-the-team/${member.img}`} 
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.role}</p>
              </div>
            </div>
          ))}

          {/* FOOTER ACTION CARD */}
          <div className="p-8 flex items-end">
            <button className="flex items-center gap-2 text-[#394150] hover:text-[#000000] transition-colors font-medium">
              See all members <ArrowUpRight size={18} />
            </button>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default MeetTheTeam;