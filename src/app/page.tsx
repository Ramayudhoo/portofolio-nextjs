"use client";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Lanyard from "./components/Lanyard/Lanyard";
import TextType from "./components/TextType/TextType";
import Galaxy from "./components/Galaxy/Galaxy";
import SplitText from "./components/SplitText/SplitText";
export default function Home() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}

        />
      </div>
      <div className="z-10 flex justify-center pt-6">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <div className="flex flex-col h-full pl-10 justify-center">
            <div>
              <SplitText
                text="Hello,World!"
                className="text-2xl font-semibold text-start"
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <div>
              <SplitText
                text="I'm Rama Cahaya Yudhoyono"
                className="text-2xl font-semibold text-start"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <div className="flex flex-col gap-4 item-start">
              <TextType
                text={[
                  "Web Developer",
                  "Full-Stack Developer",
                  "Tech Enthusiast!",
                  "Front-End Developer",
                  "Fresh Graduate",
                ]}
                typingSpeed={75}
                className="text-white text-4xl font-bold text-start"
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
        </div>
          <div className="col-span-6 ">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
