// import { Iexercise } from "@/types/types";
// import Image from "next/image";
// import React from "react";
// interface WorkoutData {
//   data: Iexercise
// }

import WorkoutCard from "@/Components/Bookcard";

// const getLoadData = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch workouts");
//   }

//   return res.json();
// };

// const WorkoutCard = ({ data }: WorkoutData) => {
//   // Support different possible API field names
//   const muscleGroups = Array.isArray(data.muscles)
//     ? data.muscles
//     : Array.isArray(data.muscleGroups)
//       ? data.muscleGroups
//       : data.muscleGroup
//         ? [data.muscleGroup]
//         : [];

//   return (
//     <article className="w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#15171c] text-white shadow-lg">
//       {/* Image */}
//       <div className="relative h-[153px] w-full overflow-hidden">
//         {data.image ? (
//           <Image
//             src={data.image}
//             alt={data.name || "Workout"}
//             fill
//             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             className="object-cover"
//           />
//         ) : (
//           <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
//         )}
//       </div>

//       {/* Content */}
//       <div className="px-5 pb-5 pt-4">
//         {/* Muscle Groups */}
//         <div className="mb-3 flex flex-wrap gap-2">
//           {muscleGroups.map((muscle) => (
//             <span
//               key={muscle}
//               className="rounded-full bg-[#c6f10e] px-3 py-[4px] text-[10px] font-extrabold uppercase leading-none tracking-wide text-black"
//             >
//               {muscle}
//             </span>
//           ))}
//         </div>

//         {/* Workout Name */}
//         <h3 className="mb-1 text-[16px] font-extrabold uppercase leading-tight tracking-wide text-white">
//           {data.name}
//         </h3>

//         {/* Equipment */}
//         <p className="text-[11px] leading-4 text-neutral-500">
//           {data.equipment}
//         </p>

//         {/* Divider */}
//         <div className="my-4 h-px bg-[#292c32]" />

//         {/* Workout Stats */}
//         <div className="flex items-center gap-5 text-[11px] text-neutral-400">
//           {/* Duration */}
//           <span className="flex items-center gap-1.5 whitespace-nowrap">
//             <svg
//               viewBox="0 0 24 24"
//               className="h-3.5 w-3.5 shrink-0 fill-none stroke-current"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="9" />
//               <path d="M12 7v5l3 2" />
//             </svg>

//             {data.duration} min
//           </span>

//           {/* Calories */}
//           <span className="flex items-center gap-1.5 whitespace-nowrap">
//             <svg
//               viewBox="0 0 24 24"
//               className="h-3.5 w-3.5 shrink-0 fill-none stroke-current"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />
//             </svg>

//             {data.calories} kcal
//           </span>

//           {/* Rating */}
//           <span className="flex items-center gap-1.5 whitespace-nowrap">
//             <svg
//               viewBox="0 0 24 24"
//               className="h-3.5 w-3.5 shrink-0 fill-none stroke-current"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
//             </svg>

//             {data.rating}
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// };

// const WorkoutPage = async () => {
//   const workouts = await getLoadData();

//   return (
//     <main className="min-h-screen bg-[#0b0c0f] px-4 py-6 sm:px-6">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {workouts.map((data, index) => (
//           <WorkoutCard key={data.id || index} data={data} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default WorkoutPage;



const getLoadData = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutPage = async () => {
  const workouts = await getLoadData();

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-6 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {workouts.map((data, index) => (
          <WorkoutCard
            key={data.id || index}
            data={data}
          />
        ))}

      </div>
    </main>
  );
};

export default WorkoutPage;
