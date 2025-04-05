"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200 bg-opacity-50">
          Divyesh Chopparapu, <br /> 
        </h1>
        
        <br />
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200 bg-opacity-50">
        Software Engineer <br /> 
        </h2>
        <br />
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Skilled in Html, CSS, Tailwind, ReactJS, NextJS, <br /> 
          Focused on Responsive, Dynamic Web Development with Efficient Code and state
          management.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
