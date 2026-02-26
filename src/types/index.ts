export type Difficulty = 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced';

export interface Challenge {
    id: string;
    title: string;
    difficulty: Difficulty;
    tags: string[];
    description: string;
    slug: string;
    position: { x: number; y: number };
}