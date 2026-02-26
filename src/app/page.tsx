import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

// Ana sayfa için tarayıcı başlığı
export const metadata: Metadata = {
  title: "Waypoint",
  description: "DevChallenges gelişim yolculuğu",
};

export default function HomePage() {
  return <HomeClient />;
}