
import Image from "next/image";
import Link from "next/link";
import { Iexercise } from "@/types/types";

interface WorkoutData {
  data: Iexercise;
}

const WorkoutCard = ({ data }: WorkoutData) => {
  const muscleGroups = Array.isArray(data.muscles)
    ? data.muscles
    : Array.isArray(data.muscleGroups)
      ? data.muscleGroups
      : data.muscleGroups
        ? [data.muscleGroups]
        : [];

  return (
    <Link href={`/workout/${data.id}`}>

      <article className="w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-[#15171c] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#c6f10e] hover:shadow-xl">

        {/* Image */}
        <div className="relative h-38 w-full overflow-hidden">
          {data.image ? (
            <Image
              src={data.image}
              alt={data.name || "Workout"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-slate-700 to-slate-900" />
          )}
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-4">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6f10e] px-3 py-1 text-[10px] font-extrabold uppercase leading-none tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="mb-1 text-[16px] font-extrabold uppercase leading-tight tracking-wide">
            {data.name}
          </h3>

          {/* Equipment */}
          <p className="text-[11px] leading-4 text-neutral-500">
            {data.equipment}
          </p>

          <div className="my-4 h-px bg-[#292c32]" />

          {/* Stats */}
          <div className="flex items-center gap-5 text-[11px] text-neutral-400">

            <span>{data.duration} min</span>

            <span>{data.caloriesBurned} kcal</span>

            <span>⭐ {data.rating}</span>

          </div>

        </div>

      </article>

    </Link>
  );
};

export default WorkoutCard;
