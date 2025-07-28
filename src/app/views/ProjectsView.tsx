export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "POS App",
      description: "A Point-of-Sale mobile app using React Native and Firebase.",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://github.com/Ramayudhoo/pos-coba-solo",
      tech: ["React Native", "Firebase", "Redux"],
    },
    {
      id: "2",
      title: "Portfolio Website",
      description: "Personal website built with Next.js and Tailwind CSS.",
      img: "https://picsum.photos/seed/project1/400/300",
      url: "https://github.com/Ramayudhoo/Portofolio",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      id: "3",
      title: "Wedding_JWP",
      description: "Wedding website built with CodeIgniter From workshop.",
      img: "https://picsum.photos/seed/project2/400/300",
      url: "https://github.com/Ramayudhoo/wedding_jwp",
      tech: ["CodeIgniter", "PHP", "MySQL"],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-yellow-300 rounded-xl overflow-hidden shadow-lg bg-white transition transform hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
