import { Challenge } from "@/types";

export const CHALLENGES: Challenge[] = [
  {
    id: "flip-the-coin",
    title: "Flip The Coin",
    difficulty: "Beginner",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Yazı mı tura mı? İnteraktif animasyonlu bir şans oyunu.",
    slug: "flip-the-coin",
    position: { x: 50, y: 100 }
  },
  {
    id: "temp-challenge",
    title: "Gelecek Proje",
    difficulty: "Intermediate",
    tags: ["React", "API"],
    description: "Yolun devamını görmek için geçici durak.",
    slug: "temp-challenge",
    position: { x: 70, y: 300 }
  }
];