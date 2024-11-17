import React from "react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Demo API Generator",
      description:
        "A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.",
    },
    {
      id: 2,
      title: "Demo API Generator",
      description:
        "A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.",
    },
    {
      id: 3,
      title: "Demo API Generator",
      description:
        "A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.",
    },
  ];

  return (
    <section className=" text-gray-800 py-10 font-serif">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold">Portfolio</h2>
          <p className="text-lg mt-2">
            I have brought here my biggest and favorite works as a professional.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id} className="flex items-start space-x-16">
              {/* Project Number */}
              <div className="text-4xl font-bold text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </div>
              {/* Project Details */}
              <div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-base mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
