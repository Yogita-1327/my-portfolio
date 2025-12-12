"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedParticles from "./AnimatedParticles";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
      <AnimatedParticles />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE — Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400">Hi, I'm</p>
          
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Yogita I J
          </h1>

          <h2 className="text-xl md:text-2xl mt-3 text-gray-300">
            Frontend Developer • CSE AIML Student
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            Passionate about building modern web experiences, learning new technologies,
            and exploring Artificial Intelligence & Machine Learning.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-medium shadow-lg shadow-purple-500/40 hover:shadow-purple-400/50 transition-all"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-60 h-60 rounded-3xl overflow-hidden border border-purple-400/30 backdrop-blur-lg bg-white/5 shadow-xl">
            <img
              src="/profile.jpg"
              alt="Yogita"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
