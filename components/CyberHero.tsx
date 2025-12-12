"use client";

import { useEffect, useState } from "react";
import AnimatedParticles from "./AnimatedParticles";

export default function CyberHero() {
  const fullName = "Yogita I J";
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  // blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  // auto-close intro after a max time (safety)
  

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-center text-purple-200 font-sans">
      {/* subtle animated particles (background) */}
      <AnimatedParticles />

      {/* Purple matrix background (semi-transparent) */}
      <div className="absolute inset-0 opacity-30 bg-black/90">
        <div className="absolute inset-0 bg-[url('/matrixx-purple.jpg')] bg-center bg-cover opacity-30"></div>
      </div>

      <div className="relative px-6 py-8 max-w-4xl w-full z-20">

        {/* name display */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold neon-purple tracking-widest leading-tight">
            {fullName}
            <span className="inline-block ml-2">
              {cursorVisible ? (
                <span className="inline-block w-5 h-7 bg-[#c084fc] rounded-sm align-middle animate-blink" />
              ) : (
                <span className="inline-block w-5 h-7" />
              )}
            </span>
          </h1>

          
        </div>

        {/* subtitle and info */}
        <div className="mt-8 text-sm md:text-base text-purple-200/90">
          <p className="font-medium text-purple-100">Frontend Developer • CSE AIML Student</p>
          <p className="mt-3 text-purple-300/80">Learning AI • Building modern UI • Tech enthusiast</p>
          <p className="mt-3 text-purple-300/80">📍 India</p>
          <p className="mt-2 text-purple-300/70">🌐 English • Tamil</p>

          {/* social icons */}
          <div className="flex gap-4 justify-center mt-6">
            <a href="https://github.com/Yogita-1327" target="_blank" rel="noopener noreferrer" aria-label="github" className="icon-purple-btn">
              <img src="/github.jpg" alt="github" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/yogita-i-j-b1a036345/" target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="icon-purple-btn">
              <img src="/linkedin.jpg" alt="linkedin" className="w-5 h-5" />
            </a>
            
          </div>
        </div>

        {/* access button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowIntro(false)}
            className="px-6 py-3 border-2 rounded-md text-sm font-medium transition-all border-[#c084fc] text-[#c084fc] bg-transparent shadow-[0_0_20px_#c084fc,_inset_0_0_20px_#c084fc22] hover:shadow-[0_0_40px_#c084fc,_inset_0_0_30px_#c084fc33]"
          >
            › VIEW MY PORTFOLIO
          </button>
        </div>
      </div>

      {/* component-only styles */}
      <style jsx>{`
        .neon-purple {
          color: #e9d5ff;
          text-shadow: 0 0 12px #c084fc, 0 0 24px #a78bfa, 0 0 40px #7c3aed;
        }
        .animate-blink {
          animation: blink 0.7s steps(2) infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .icon-purple-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 2px solid #c084fc55;
          transition: all 180ms ease;
          background: transparent;
        }
        .icon-purple-btn:hover {
          background: #c084fc22;
          box-shadow: 0 0 12px #c084fc66;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}
