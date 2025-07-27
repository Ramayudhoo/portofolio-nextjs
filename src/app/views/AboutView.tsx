import GradientText from "../components/GradientText/GradientText";
import SkillsSection from "../components/skillSection";
import Galaxy from "../components/Galaxy/Galaxy";

export default function About() {
  return (
    <section className="container mx-auto py-20 px-6 border">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Galaxy
              mouseRepulsion={false}
              mouseInteraction={true}
              density={1.5}
              glowIntensity={0.5}
              saturation={0.8}
              hueShift={0}
              />
      </div>
    <div className="flex flex-col items-center mt-20 border-2 border-yellow-400 rounded-lg p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        <span className="text-yellow-400 mt-5">About</span> Me
      </h1>

      <GradientText
        colors={["#26355D", "#AF47D2", "#40ffaa", "#B13BFF", "#FFCC00"]}
        animationSpeed={3}
        showBorder={false}
        className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mt-4 flex flex-col gap-4"
        >
        Hello! My name is <span className="font-bold">Rama Cahaya Yudhoyono</span>,  
        a fresh graduate who is passionate about crafting modern, interactive, and user-friendly digital experiences.  

        I love exploring both <span className="font-semibold text-yellow-300">front-end</span> and 
        <span className="font-semibold text-yellow-300"> full-stack development</span>, 
        and I constantly push myself to learn new technologies that elevate web solutions to the next level.  

        I am currently seeking an opportunity to kickstart my career as a 
        <span className="font-semibold text-yellow-300"> Web Developer</span>, 
        where I can contribute to innovative projects, grow as a professional, and create products that truly make an impact.
      </GradientText>
    </div>
    <div>
      <SkillsSection/>
    </div>
    </section>
    
  );
}
