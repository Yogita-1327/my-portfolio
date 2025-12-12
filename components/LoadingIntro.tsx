"use client";

import { useEffect, useState } from "react";

export default function LoadingIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500); // 3.5 seconds before loading main site

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black text-purple-400 font-mono flex items-center justify-center z-[9999] text-sm md:text-lg">
      <div className="space-y-2">
        <p className="typing">› INITIALIZING YOGITA PORTFOLIO SYSTEM...</p>
        <p className="typing delay-1">› FRONTEND_CORE.....................OK</p>
        <p className="typing delay-2">› UI_ENGINE..........................OK</p>
        <p className="typing delay-3">› ML_MODULE..........................OK</p>
        <p className="typing delay-4">› SECURITY_LAYER.....................OK</p>
      </div>

      <style>{`
        .typing {
          width: fit-content;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent;
          animation: typing 1.2s steps(40), blink .7s infinite;
        }

        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }
        .delay-4 { animation-delay: 2s; }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: green; }
        }
      `}</style>
    </div>
  );
}
