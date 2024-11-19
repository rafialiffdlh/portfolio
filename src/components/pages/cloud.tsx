import React from "react";
import IconCloud from "@/components/ui/icon-cloud";
import AOS from "aos"; 
import "aos/dist/aos.css";
const Cloud = () => {
  const iconSlugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <div className="my-8" data-aos="zoom-in">
      <h1 className="flex justify-center items-center">My Skill</h1>
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
};

export default Cloud;
