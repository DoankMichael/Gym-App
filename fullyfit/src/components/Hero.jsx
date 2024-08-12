import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          fully<span className="text-blue-400 font-medium">fit</span>gym
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Saya yakin dengan mengikuti kegiatan yang ada dalam <span className="text-blue-400 font-medium">GYM FULLY FIT</span> ini akan membuat tubuh saya menjadi lebih <span className="text-blue-400 font-medium">fit, sehat</span>, dan dapat
        <span className="text-blue-400 font-medium">diandalkan</span>.
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
