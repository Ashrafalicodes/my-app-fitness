import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#0f1117] text-white py-12 md:py-20 border-b border-gray-800">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h4 className="text-lime-400 font-bold text-xs uppercase tracking-widest">
            WORKOUT LIBRARY
          </h4>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase">
            TRAIN WITH INTENT.LOG <br />
            <span className="whitespace-nowrap"> EVERY SET.</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div>
            <button className="bg-lime-400 text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-lime-300 transition-colors cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <Image
            src="/banner.png"
            alt="FITLOG Gym Illustration"
            width={380}
            height={380}
            priority
            className="object-contain h-auto max-h-87.5 md:max-h-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
