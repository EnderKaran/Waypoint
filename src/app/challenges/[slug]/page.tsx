import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { CHALLENGES } from "@/constants/challenges";
import ChallengeViewer from "@/components/ChallengeViewer";
import { Metadata } from "next";

// --- DINAMIK SAYFA BAŞLIĞI (METADATA) ---
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const challenge = CHALLENGES.find((c) => c.slug === slug);

  return {
    title: challenge ? `${challenge.title} | Waypoint` : `${slug} | Waypoint`,
  };
}

// --- SAYFA BİLEŞENİ ---
export default async function ChallengePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const challenge = CHALLENGES.find((c) => c.slug === slug);

  if (!challenge) notFound();

  const filePath = path.join(process.cwd(), "src/challenges", slug, "index.tsx");
  let codeString = "";

  try {
    if (fs.existsSync(filePath)) {
      codeString = fs.readFileSync(filePath, "utf8");
    } else {
      codeString = "// Kod dosyası henüz oluşturulmadı.";
    }
  } catch (error) {
    codeString = "// Kod okunurken bir hata oluştu.";
  }

  return (
    <ChallengeViewer 
      challenge={challenge} 
      code={codeString} 
    />
  );
}