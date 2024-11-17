import React from "react";
import ReactLogo from "../assets/tech/react_dark.svg";
import TailwindLogo from "../assets/tech/tailwindcss.svg";
import SvelteLogo from "../assets/tech/svelte-logo.svg";
import NextLogo from "../assets/tech/nextjs.svg";
import NodeLogo from "../assets/tech/nodejs.svg";

const TechList = [
  { id: 1, src: ReactLogo, alt: "React" },
  { id: 2, src: TailwindLogo, alt: "Tailwind CSS" },
  { id: 3, src: SvelteLogo, alt: "Svelte" },
  { id: 4, src: NextLogo, alt: "Next.js" },
  { id: 5, src: NodeLogo, alt: "Node.js" },
];

function TechItem({ src, alt }) {
  return (
    <div className="w-20 h-20 rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-10 ">
      <img src={src} alt={alt} className="w-full h-full" />
    </div>
  );
}

export default function TechSection() {
  return (
    <section className="font-serif py-10">
      {/* title */}
      <div className="text-center text-gray-800">
        <h1 className="text-5xl font-bold">Tech Stack</h1>
        <p className="text-lg mt-2">
          I have been working with a wide range of technologies and tools. Here
          are some of them:
        </p>
      </div>
      {/* tech list */}
      <div className="flex flex-wrap justify-center md:justify-evenly gap-12 mt-8">
        {/* tech item */}
        {TechList.map((tech) => (
          <TechItem key={tech.id} src={tech.src} alt={tech.alt} />
        ))}
      </div>
    </section>
  );
}
