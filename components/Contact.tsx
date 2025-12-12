"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-purple-300 
                     drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] 
                     mb-12">
        Contact Me
      </h2>

      {/* Contact Box */}
      <div className="max-w-3xl mx-auto bg-black/40 border border-purple-500/30 
                      backdrop-blur-xl rounded-2xl p-10 
                      shadow-[0_0_25px_rgba(168,85,247,0.3)]">

       

        {/* Email Box */}
        <div className="w-full mx-auto bg-black/30 border border-purple-500/40 
                        rounded-xl py-4 px-6 flex items-center justify-center gap-3
                        shadow-[0_0_20px_rgba(168,85,247,0.25)] mb-10">

          <img 
            src="/mail.jpg" 
            alt="Mail Icon" 
            className="w-7 h-7 opacity-90"
          />

          <span className="text-purple-200 text-xl font-semibold">
            yogita.ij.027@gmail.com
          </span>

        </div>

        {/* Icon Buttons */}
        <div className="flex justify-center gap-10 mt-6">

          {/* GitHub */}
          <a href="https://github.com/Yogita-1327" target="_blank">
            <img 
              src="/github.jpg" 
              alt="GitHub"
              className="w-12 h-12 p-3 border border-purple-500/40 rounded-xl 
                       hover:bg-purple-600/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                       transition-all duration-300 cursor-pointer"
            />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yogita-i-j/" target="_blank">
            <img 
              src="/linkedin.jpg" 
              alt="LinkedIn"
              className="w-12 h-12 p-3 border border-purple-500/40 rounded-xl 
                       hover:bg-purple-600/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                       transition-all duration-300 cursor-pointer"
            />
          </a>

        </div>

      </div>
    </section>
  );
}
