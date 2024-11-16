import React from "react";
import HeroImg from "../assets/hero-img.jpg";

export default function HeroSection() {
  return (
    <section className="font-serif w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-center h-screen pt-[10dvh]">
      {/* left side */}
      <div className="">
        <div className="relative mx-auto sm:mx-0 w-full sm:w-[90%] aspect-square">
          <div className="bg-gray-800 w-[95%] aspect-square p-1 shadow-md absolute top-0 left-0">
            <div className="bg-white w-[100%] aspect-square"></div>
          </div>
          <img
            src={HeroImg}
            alt="placeholder"
            className="object-cover w-[95%] aspect-square shadow-md absolute bottom-0 right-0"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col self-start sm:self-center justify-center">
        <h1 className="text-5xl sm:text-7xl font-semibold text-gray-800 mt-4">
          Hi, I'm <br /> John Doe
        </h1>
        <h2 className="text-3xl sm:text-4xl italic text-gray-700 font-black mt-2">
          Photographer & Senior Frontend Web Developer
        </h2>
        <button className="font-sans border-double border-black border-2 px-4 py-2 mt-4 w-fit font-semibold">
          Learn More
        </button>
      </div>
    </section>
  );
}
