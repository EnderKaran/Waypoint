export type Difficulty = 'Beginner' | 'Junior' | 'Mid-Level' | 'Intermediate' | 'Advanced';

export interface Challenge {
  position: any;
  id: string;
  title: string;
  difficulty: "Beginner" | "Junior" | "Mid-Level" | "Intermediate" | "Advanced";
  status: "done" | "active" | "locked";
  tags: string[];
  description: string;
  slug: string;
}