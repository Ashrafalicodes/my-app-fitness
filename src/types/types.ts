export interface Iexercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string; // Consider string[] if you want to split "Barbell, Bench"
  difficulty: "Beginner" | "Intermediate" | "Advanced"; // Strongly typed enum-like string union
  duration: number; // in minutes
  caloriesBurned: number;
  sets: number;
  reps: string; // Handled as string to support ranges like "6-8"
  rating: number;
  description: string;
  instructions: string[];
  muscles: string[]; // Added to support the API's "muscles" field
}
