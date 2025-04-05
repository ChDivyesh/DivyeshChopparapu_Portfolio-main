"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       
          Contact Me
        
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0.5, y: 100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         delay: 0.3,
         duration: 0.8,
         ease: "easeInOut",
       }}
       className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Looking for Expert Software Engineer? Contact Me for Top-Quality
        Web Solutions and Seamless User Experiences!
      </motion.p>
      <motion.input
          type="text"
          placeholder="divyeshram753@gmail.com"
          initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
          className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-50 placeholder:text-neutral-800"
        />
    </LampContainer>
  );
}
