import Image from "next/image";

export default function RepoCard({ repo }: { repo: any }) {
  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      // Linear Gradient: #111729 -> #1D1B48
      style={{ background: "linear-gradient(95deg, #111729 3%, #1D1B48 99.61%)" }}
      className="p-6 md:p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all flex flex-col gap-4 shadow-xl group"
    >
      <h3 className="text-[20px] font-bold tracking-tight text-[#CDD5E0] group-hover:text-white transition-colors">
        {repo.name}
      </h3>
      
      <p className="text-base font-medium leading-relaxed text-[#97A3B6] line-clamp-2">
        {repo.description || "No description available for this repository."}
      </p>
      
      <div className="flex flex-wrap items-center gap-5 mt-2">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#97A3B6]">
          <Image src="/challenges/github-profile/Chield_alt.svg" width={16} height={16} alt="License" />
          {repo.license ? repo.license.spdx_id : "MIT"}
        </div>
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#97A3B6]">
          <Image src="/challenges/github-profile/Nesting.svg" width={16} height={16} alt="Forks" />
          {repo.forks_count}
        </div>
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#97A3B6]">
          <Image src="/challenges/github-profile/Star.svg" width={16} height={16} alt="Stars" />
          {repo.stargazers_count}
        </div>
        <div className="text-[12px] font-medium text-[#364153]">
          updated {new Date(repo.updated_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
        </div>
      </div>
    </a>
  );
}