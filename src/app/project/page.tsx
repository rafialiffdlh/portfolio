"use client";
import React, { useState } from "react";
import { projectData } from "@/app/api/dataProject";
import { CoolMode } from "@/components/ui/cool-mode";
import type { Project } from "@/app/api/dataProject";
import Image from "next/image";
import { Button } from "@/components/ui/button";
interface ProjectSectionProps {
  title: string;
  description: string;
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
  const [showAll, setShowAll] = useState(false);
  const gamesToShow = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gamesToShow.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-3 text-center transform hover:scale-105 transition duration-200 shadow-md bg-white"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-2"
            />
            <p className="text-gray text-sm font-medium">{project.title}</p>
            <p className="text-gray text-sm font-medium">
              {project.description}
            </p>

            {project.gitHub && (
              <CoolMode>
                <a
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-500 hover:underline"
                >
                  <Button className="bg-blue-500 text-white hover:bg-blue-700 transition duration-300">
                    GitHub
                  </Button>
                </a>
              </CoolMode>
            )}

            {project.website && (
              <CoolMode>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-500 hover:underline ml-2"
                >
                  <Button className="bg-blue-500 text-white hover:bg-blue-700 transition duration-300">
                    Website
                  </Button>
                </a>
              </CoolMode>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-500 hover:underline"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "FullStack" | "FrontEnd"
  >("All");

  const handleCategoryChange = (category: "All" | "FullStack" | "FrontEnd") => {
    setSelectedCategory(category);
  };

  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case "FullStack":
        return projectData.FullStack;
      case "FrontEnd":
        return projectData.FrontEnd;
      default:
        return projectData.All;
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12  min-h-screen">
      <div className="flex justify-center space-x-4 mb-8">
        <CoolMode>
          <button
            onClick={() => handleCategoryChange("All")}
            className={`text-white font-semibold ${
              selectedCategory === "All"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            All Project
          </button>
        </CoolMode>
        <CoolMode>
          <button
            onClick={() => handleCategoryChange("FullStack")}
            className={`text-white font-semibold ${
              selectedCategory === "FullStack"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            FullStack
          </button>
        </CoolMode>
        <CoolMode>
          <button
            onClick={() => handleCategoryChange("FrontEnd")}
            className={`text-white font-semibold ${
              selectedCategory === "FrontEnd"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            FrontEnd
          </button>
        </CoolMode>
      </div>

      <ProjectSection
        title={selectedCategory === "All" ? "All Projects" : selectedCategory}
        description={`Some ${selectedCategory} projects`}
        projects={getFilteredProjects()}
      />
    </div>
  );
};

export default Project;
