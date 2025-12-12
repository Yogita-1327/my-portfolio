export default function TechStack() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "C / C++",
    "Java",
    "Node.js",
    "Tailwind CSS",
    "React",
    "Next.js",
  ];

  return (
    <section
      id="techstack"
      className="w-full py-20 flex flex-col items-center text-center"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-purple-300 drop-shadow-[0_0_20px_rgba(200,100,255,0.6)] mb-10">
        Tech Stack
      </h2>

      {/* Skill pills container */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-purple-600/30 text-purple-200 border border-purple-400/40 rounded-full text-sm backdrop-blur-md shadow-lg hover:bg-purple-600/50 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

