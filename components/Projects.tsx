export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-black/60 via-purple-900/20 to-black/60 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-5xl font-extrabold text-purple-300 drop-shadow-[0_0_25px_rgba(200,100,255,0.8)] text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-purple-500/20 hover:shadow-purple-500/30 hover:shadow-2xl transition-all">
            <img src="/p1.jpg" className="rounded-lg"className="w-5 h-5" />
            <h3 className="text-[#d8b4fe] font-semibold text-2xl drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]">AI-Powered-Crop-Recommendation</h3>
            <p className="mt-2 text-gray-300">An intelligent machine-learning-based web application that analyzes environmental and soil data to suggest the most suitable crops to grow. The system considers factors such as soil nutrients, rainfall, temperature, and other conditions to make data-driven crop recommendations, helping farmers make informed decisions and optimize agricultural productivity.</p>
            <a
             href="https://github.com/Yogita-1327/AI-Powered-Crop-Recommendation"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block mt-6 px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 
               text-purple-200 border border-purple-400/40 rounded-lg 
               transition backdrop-blur-md shadow-md"
              >
            View on GitHub →
             </a>
          </div>

          {/* Project 2 */}
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-purple-500/20 hover:shadow-purple-500/30 hover:shadow-2xl transition-all">
            <img src="/p2.webp" className="rounded-lg" className="w-5 h-5"/>
            <h3 className="text-[#d8b4fe] font-semibold text-2xl drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]">Leaf Stress Detection</h3>
            <p className="mt-2 text-gray-300">A machine-learning-based system that analyzes images of plant leaves to detect signs of stress caused by disease, nutrient deficiency, or environmental conditions. By using trained models to identify patterns in leaf imagery, the tool helps farmers monitor crop health early and take proactive measures to support sustainable and productive farming practices.</p>
            <a
             href="https://github.com/Yogita-1327/AI-Powered-Leaf-Stress-Detection-For-Sustainable-Farming"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block mt-6 px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 
               text-purple-200 border border-purple-400/40 rounded-lg 
               transition backdrop-blur-md shadow-md"
              >
            View on GitHub →
             </a>
  
          </div>
          <div className="flex justify-center mt-10">
          <button className="px-6 py-3 rounded-lg bg-purple-600/40 text-purple-200 border border-purple-400/40 hover:bg-purple-600/60 transition shadow-lg shadow-purple-800/40">
           More Projects Coming Soon...
          </button>
          </div>
          <div className="w-full flex justify-center mt-10">
          <button className="
          px-8 py-3 
          rounded-xl 
          bg-purple-600/30 
          text-purple-200 
          border border-purple-400/40 
          backdrop-blur-md
          hover:bg-purple-600/50 
          hover:shadow-purple-600/50 
          shadow-lg shadow-purple-900/40
          transition-all
          ">
          More Projects Coming Soon...
         </button>
         </div>



        </div>
      </div>
    </section>
  );
}

