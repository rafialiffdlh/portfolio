import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/AboutSection.module.css";
import { useTheme } from "next-themes";
import IconCloud from "@/components/ui/icon-cloud";
import AOS from "aos";
import "aos/dist/aos.css";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

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

export default function AboutSection() {
  return (
    <div className="my-16 px-4">
      <Section title="About me" id="about-section" className={styles.container}>
        <div className={styles["about-description"]} data-aos="fade-up">
          <p>
            {`Hello! I'm a student at Purwadhika School who has a passion for Web
            Development and Design. I like to focus and work hard when it comes
            to my passion. This is my personal website which I intend to use for
            sharing my personal designs and projects.`}
          </p>

          <div className={styles["section-wrapper"]}>
            <p>
              {` While working for BNCC, I am entrusted the position of FAVE
              Solution Staff. My job is to work with the team on handling
              software projects.`}
            </p>
            <Link href="https://favesolution.com" target="_blank"></Link>
          </div>
        </div>
      </Section>

      <div className="my-8" data-aos="zoom-in">
        <h1 className="flex justify-center items-center">My Skill</h1>
        <IconCloud iconSlugs={iconSlugs} />
      </div>

      <div className="my-8" data-aos="fade-up">
        <h2 className="text-center text-2xl font-bold">Tools</h2>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["VS Code", "Node.js", "GitHUb", "GitHub Desktop", "Postman"].map(
            (tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-md"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, className, ...props }: SectionProps) {
  return (
    <section {...props} className={`${className} py-8 md:py-12`}>
      <h2>{title}</h2>
      <div className="hr"></div>
      {children}
    </section>
  );
}
