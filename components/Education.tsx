"use client";



export default function Education() {
  return (
    <section id="education" className="py-20 px-6 text-white flex justify-center">
      <div className="w-full max-w-3xl">

        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-12 
          text-purple-300 tracking-widest 
          drop-shadow-[0_0_18px_rgba(168,85,247,0.9)]"
        >
          Education
        </h2>

        {/* Education Card */}
        <div
          className="bg-gradient-to-br from-purple-900/40 to-black/40 
          backdrop-blur-xl border border-purple-500/30 rounded-xl 
          p-10 shadow-lg shadow-purple-900/40 
          hover:shadow-purple-500/60 transition-all duration-300"
        >
          {/* Title Row */}
          <div className="flex items-center gap-3 mb-6">
            
            <h3 className="text-2xl font-semibold text-purple-300">Education</h3>
          </div>

          {/* B.Tech Section */}
          <div className="border-l border-purple-500/40 pl-6 mb-8">
            <h4 className="text-xl font-bold">SRM Institute of Science and Technology</h4>
            <p className="text-gray-300">B.Tech Computer Science & Engineering</p>

            <p className="mt-3 text-gray-300">
              <span className="text-purple-300 font-semibold">Specialization:</span> Artificial Intelligence & Machine Learning
            </p>

            <p className="mt-1 text-gray-300">2024 – 2028</p>

            <p className="mt-3 font-semibold text-purple-300">CGPA: 8.9 </p>
          </div>

          {/* School Section */}
          <div className="border-l border-purple-500/40 pl-6">
            <h4 className="text-xl font-bold">Vikaasa World School</h4>
            <p className="mt-3 font-semibold text-purple-300">XII: 65% | X: 62%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
