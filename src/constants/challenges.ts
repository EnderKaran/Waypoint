import { Challenge } from "@/types";

export const CHALLENGES: Challenge[] = [
  {
    position: 0,
    id: "flip-the-coin",
    title: "Flip The Coin",
    difficulty: "Junior",
    status: "done", 
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Fizik tabanlı animasyonlar ve asenkron state yönetimi ile kurgulanmış interaktif yazı-tura deneyimi.",
    slug: "flip-the-coin",
  },
  {
    position: 1,
    id: "qr-code-generator",
    title: "QR Code Generator",
    difficulty: "Junior",
    status: "done",
    tags: ["Next.js", "TypeScript", "QR API", "Browser API"],
    description: "URL'leri anlık olarak QR koda dönüştüren, indirme ve paylaşma özelliklerine sahip dinamik araç.",
    slug: "qr-code-generator",
  },
  {
    position: 2,
    id: "device-shop-checkout",
    title: "Device Shop Checkout",
    difficulty: "Junior", 
    status: "done",
    tags: ["Next.js", "Grid", "Forms", "State Management"],
    description: "Apple tarzı şık bir sepet deneyimi. Karmaşık Grid yapıları ve form doğrulama süreçleri üzerine bir çalışma.",
    slug: "device-shop-checkout",
  },
  {
    position: 3,
    id: "github-profile",
    title: "GitHub Profile",
    difficulty: "Mid-Level",
    status: "done",
    tags: ["Next.js", "API Entegrasyonu", "Tailwind CSS"],
    description: "GitHub API kullanarak gerçek zamanlı kullanıcı verisi çeken ve detaylı repo analizi sunan arayüz.",
    slug: "github-profile",
  },
  {
    position: 4,
    id: "pricing-table",
    title: "Pricing Table",
    difficulty: "Junior",
    status: "done",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Grid"],
    description: "4 farklı plan seçeneği ve detaylı özellik karşılaştırmaları içeren, tipografi odaklı ve duyarlı bir fiyatlandırma arayüzü.",
    slug: "pricing-table",
  }
];