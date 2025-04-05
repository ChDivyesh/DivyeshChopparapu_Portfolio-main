"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center space-x-4">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
      <img src="/images/utd.png" alt="gitam" style={{ borderRadius: '12px' }} />

        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Masters of Science in Computer Software Engineering
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          University of Texas at Dallas, Tx, USA
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-centre">
        Years-2023-2025
        </p>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
      <img src="/images/SRM.png" alt="utd" style={{ borderRadius: '12px' }}/>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Bachelors of Technology in Computer Science
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        SRM University, Amaravathi, INDIA
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-centre">
        Years-2019-2023
        </p>
      </BackgroundGradient>
    </div>
  );
}
