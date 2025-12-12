"use client";

export default function About() {
  return (
    <section id="about" className="py-28 bg-black/60 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="about-title mb-6 reveal">About Me</h2>

            <p className="text-gray-300 text-lg leading-relaxed reveal delay-100">
              I’m <span className="font-semibold text-purple-300">Yogita I J</span>, a dedicated Frontend Developer and CSE AI &amp; ML student who is passionate about building modern, high-performance, and aesthetically rich digital experiences.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 reveal delay-200">
              My journey in tech is fueled by curiosity — the curiosity to understand how systems work, how interfaces influence user experience, and how intelligence can be embedded into everyday applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 reveal delay-300">
              I specialize in creating responsive and beautifully structured web interfaces using <span className="text-purple-300 font-semibold">Next.js</span>, <span className="text-purple-300 font-semibold">React</span>, and <span className="text-purple-300 font-semibold">Tailwind CSS</span>. I love working on components, layouts, and animations that make websites feel interactive, elegant, and user-centric. With an eye for detail and a strong interest in UI engineering, I enjoy transforming ideas into polished designs.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 reveal delay-300">
              In the AI &amp; ML domain, I enjoy exploring neural networks, prediction models, and AI-powered applications — blending frontend creativity with intelligent systems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 reveal delay-400">
              I believe in continuous learning, consistency, and building things that matter. My goal is to contribute to impactful projects and collaborate with passionate developers.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-6 reveal delay-500">
              When I’m not coding, you’ll likely find me exploring new design ideas, learning new technologies, or improving my skills to become the best version of myself in tech.
            </p>

            <div className="mt-8 reveal delay-400">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js','React','Tailwind CSS','TypeScript','Node.js','Python','ML'].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/5 text-purple-200">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-center md:items-end">
              <div className="relative w-40 h-40 reveal">
                <div className="profile-ring" aria-hidden="true" />
                <div className="w-full h-full rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl">
                  <img src="/profile.jpg" alt="Yogita" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-300 text-right reveal delay-200">
                <a href="mailto:yogita.ij.027@gmail.com" className="text-purple-300 underline">yogita.ij.027@gmail.com</a>
              </div>
          </aside>
        </div>

      </div>

      <style jsx>{`
        .about-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #e9d5ff;
          text-shadow: 0 0 16px rgba(192,132,252,0.9), 0 0 30px rgba(167,139,250,0.6);
          letter-spacing: -0.02em;
        }

        /* reveal animations */
        .reveal { opacity: 0; transform: translateY(10px); transition: opacity 600ms ease, transform 600ms ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal.delay-100 { transition-delay: 100ms; }
        .reveal.delay-200 { transition-delay: 200ms; }
        .reveal.delay-300 { transition-delay: 300ms; }
        .reveal.delay-400 { transition-delay: 400ms; }

        @media (min-width: 768px) {
          .about-title { font-size: 3rem; }
        }

        /* animated profile ring */
        .profile-ring {
          position: absolute;
          inset: -6px;
          border-radius: 0.75rem; /* matches rounded-2xl */
          background: conic-gradient(from 0deg, rgba(192,132,252,0.18), rgba(167,139,250,0.12), rgba(240,220,255,0.08), rgba(192,132,252,0.18));
          filter: blur(8px);
          opacity: 0.9;
          z-index: -1; /* place behind the profile image to avoid overlay */
          pointer-events: none;
          animation: spinSlow 10s linear infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          if (typeof window === 'undefined') return;
          function revealOnScroll(){
            var els = document.querySelectorAll('.reveal');
            els.forEach(function(el){
              var rect = el.getBoundingClientRect();
              if (rect.top < (window.innerHeight - 50)) el.classList.add('is-visible');
            });
          }
          revealOnScroll();
          window.addEventListener('scroll', revealOnScroll, {passive:true});
        })();
      `}} />

    </section>
  );
}
