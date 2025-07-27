import { FaHtml5, FaCss3, FaPhp, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss,SiTypescript } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3 className="text-4xl text-blue-500" /> },
    { name: "PHP", icon: <FaPhp className="text-4xl text-indigo-400" /> },
    { name: "Javascript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-purple-500" /> },
    { name: "ReactJS", icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: "Typescript", icon: <SiTypescript className="text-4xl text-blue-400" /> },
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-yellow-400 rounded-lg px-7 py-5 bg-black/40 hover:bg-black/60 transition"
          >
            {skill.icon}
            <span className="text-lg font-medium text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
