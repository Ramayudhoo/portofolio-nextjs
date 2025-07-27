"use client";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Lanyard from "./components/Lanyard/Lanyard";
import TextType from "./components/TextType/TextType";
import Galaxy from "./components/Galaxy/Galaxy";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
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
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <div className="flex flex-col h-full pl-10 justify-center">
            <div className="flex gap-0">
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
            <div className="mt-4 mb-0">
            <div className="flex mt-0 mb-0">
              <BlurText
              text="I'm Ready For New Job"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-2xl mb-0 font-bold"
              />
            </div>
            <div className="flex flex-col gap-0 item-start">
              <TextType
                text={[
                  "Web Developer",
                  "Full-Stack Developer",
                  "Front-End Developer",
                ]}
                typingSpeed={100}
                className=" text-4xl font-bold text-start"
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                deletingSpeed={50}
                textColors={["#FFCC00", "#FFCC00", "#FFCC00"]}
              />
            </div>
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
