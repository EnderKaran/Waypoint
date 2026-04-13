import { Challenge } from "@/types";

export const CHALLENGES: Challenge[] = [
  {
    id: "flip-the-coin",
    title: "Flip The Coin",
    difficulty: "Junior",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Yazı mı tura mı? İnteraktif animasyonlu bir şans oyunu.",
    slug: "flip-the-coin",
    position: { x: 50, y: 100 }
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    difficulty: "Junior",
    tags: ["Next.js", "TypeScript", "QR API"],
    description: "Linkleri anında QR koda dönüştüren ve indirme imkanı sunan araç.",
    slug: "qr-code-generator",
    position: { x: 30, y: 350 }
  },
  {
    id: "device-shop-checkout",
    title: "Device Shop Checkout",
    difficulty: "Junior", 
    tags: ["Next.js", "Grid", "Forms"],
    description: "Apple tarzı şık bir sepet ve ödeme sayfası. Karmaşık Grid yapıları ve form yönetimi üzerine bir çalışma.",
    slug: "device-shop-checkout",
    position: { x: 70, y: 600 } 
  }
];