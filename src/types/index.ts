export type Difficulty = 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced';

export interface Challenge {
  position: any;
  id: string;
  title: string;
  difficulty: "Beginner" | "Junior" | "Intermediate" | "Advanced";
  status: "done" | "active" | "locked";
  tags: string[];
  description: string;
  slug: string;
}