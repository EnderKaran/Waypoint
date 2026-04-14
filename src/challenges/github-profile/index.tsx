"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RepoCard from "./RepoCard";

const COLORS = {
  bg: "#111729",
  searchBg: "#20293A",
  inputText: "#364153",
  textMain: "#CDD5E0",
  textSecondary: "#97A3B6"
};

export default function GithubProfile() {
  const [username, setUsername] = useState("github");
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  const fetchGithubData = async (targetUser: string) => {
    try {
      const [profRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${targetUser}`),
        fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=4`)
      ]);
      if (profRes.ok && repoRes.ok) {
        setProfile(await profRes.json());
        setRepos(await repoRes.json());
      }
    } catch (error) { console.error(error); }
  };

  useEffect(() => { fetchGithubData(username); }, []);

  if (!profile) return null;

  return (
    <div 
      className="min-h-screen pb-20 overflow-x-hidden font-['Be_Vietnam_Pro']"
      style={{ backgroundColor: COLORS.bg, color: COLORS.textMain }}
    >
      {/* HERO & SEARCH */}
      <div className="relative h-64 md:h-80 w-full">
        <Image src="/challenges/github-profile/hero-image-github-profile.jpg" alt="Hero" fill className="object-cover opacity-50" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-md">
          <div 
            className="border border-white/5 rounded-xl p-2 flex items-center gap-3 shadow-2xl"
            style={{ backgroundColor: COLORS.searchBg }}
          >
            <Image src="/challenges/github-profile/Search.svg" width={20} height={20} alt="Search" className="ml-2" />
            <input 
              type="text" 
              placeholder="username"
              style={{ color: COLORS.textMain }}
              className="bg-transparent outline-none flex-1 text-base placeholder:text-[#364153]"
              onKeyDown={(e) => e.key === "Enter" && fetchGithubData((e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-end gap-6 mb-12">
          <div className="bg-[#111729] p-2 rounded-3xl border-4 border-white/5 shadow-2xl">
            <img src={profile.avatar_url} className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover" alt="Avatar" />
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {[
              { label: "Followers", value: profile.followers },
              { label: "Following", value: profile.following },
              { label: "Location", value: profile.location || "N/A" }
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111729] px-5 py-3 md:px-6 md:py-4 rounded-xl flex items-center gap-4 border border-white/5">
                <span className="text-[12px] uppercase tracking-widest font-semibold text-[#97A3B6]">{stat.label}</span>
                <span className="h-6 w-[1px] bg-white/10" />
                <span className="text-base font-bold text-[#CDD5E0]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BIO SECTION */}
        <div className="mb-12 max-w-2xl">
          <h1 className="text-[32px] font-bold tracking-tight mb-2 text-[#CDD5E0] leading-tight">
            {profile.name || profile.login}
          </h1>
          <p className="text-base font-medium leading-relaxed text-[#97A3B6]">
            {profile.bio}
          </p>
        </div>

        {/* REPO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        <div className="text-center">
          <a 
            href={profile.html_url} 
            target="_blank" 
            className="text-[16px] font-bold text-[#97A3B6] hover:text-[#CDD5E0] transition-colors"
          >
            View all repositories
          </a>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}