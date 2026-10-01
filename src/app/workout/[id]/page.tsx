import { Iexercise } from "@/types/types";
import Image from "next/image";
import React from "react";
interface PageProps {
  params: {
    id: string | number;
  };
}

const getLoadData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  console.log(id, "id");
  const workouts = await getLoadData();
  const workout = workouts.find(
    (workout: Iexercise) => workout.id === Number(id),
  ) as Iexercise;
  console.log(workout, "workout");
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0d12] px-4 py-10 text-white">
  <div className="container mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[340px_1fr]">
   
        {/* Image */}
        {/* Image */}
        <div className="relative mx-auto aspect-4/5 w-full max-w-85 justify-self-center overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold uppercase tracking-wide">
            {workout.name}
          </h1>
          <p className="mt-2 text-sm text-gray-400">{workout.description}</p>

          {/* Muscle badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#d4ff00] px-3 py-0.5 text-xs font-semibold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Stats table */}
          <div className="mt-5 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#12151c]">
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Equipment
              </span>
              <span className="font-medium">{workout.equipment}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Difficulty
              </span>
              <span className="font-medium">{workout.difficulty}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Sets
              </span>
              <span className="font-medium">{workout.sets}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Reps
              </span>
              <span className="font-medium">{workout.reps}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Duration
              </span>
              <span className="font-medium">{workout.duration} min</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Calories
              </span>
              <span className="font-medium">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Rating
              </span>
              <span className="font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-widest">
              Instructions
            </h2>
            <ol className="mt-3 space-y-2 text-sm text-gray-400">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span>{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-[#d4ff00] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110">
              Add to today&apos;s plan
            </button>
            <button className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
