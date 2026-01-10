"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "../public/asset/proj5.png";
import project2 from "../public/asset/proj6.png";
import project3 from "../public/asset/proj3.png";
const projects = [
  {
    id: 1,
    year: 2023,
    title: "Doodle -Customer support dahsboard",
    description:
      "A centralized dashboard for managing customer inquiries, tracking tickets, and monitoring support performance in real time. Designed to streamline workflows and improve response efficiency across support teams.",
    image: project1,
  },
  {
    id: 3,
    year: 2024,
    title: "Zella and Zella-merchant dahsboard",
    description:
      "User and merchant dashboards built to manage transactions, view account insights, and track activity with clarity and speed. Focused on reliability, clean data presentation, and smooth user experience for financial operations",
    image: project2,
  },
  {
    id: 4,
    year: 2024,
    title: "Atomic - AI driven outreach",
    description:
      "An AI-powered outreach system that automates personalized communication and optimizes engagement strategies. Built to leverage data and intelligence to drive smarter, more effective outreach at scale.",
    image: project3,
  },
];
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <section id="portfolio" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Project</span>
          </h2>
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="cursor-pointer mb-8 group"
              onClick={() => setSelectedProject(project)}
            >
              <p className="text-purple-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === project.id ? "text-gray-200" : ""} duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}

              {selectedProject.id === project.id && (
                <p className="text-purple-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          height={450}
          width={800}
        />
      </div>
    </section>
  );
};

export default Portfolio;
