"use client";
import styles from "@/styles/HeroSection.module.css";
import { AiFillDribbbleCircle } from "@react-icons/all-files/ai/AiFillDribbbleCircle";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { ParticlesDemo } from "./particles";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import { ScrollIntoView } from "@/lib/scroll";
import Link from "next/link";
import Image from "next/image";

import HeroImage from "../../public/images/hero-image.png";
import Square from "../../public/images/rectangle.png";
import Rimage from "@/public/images/rbg.png";
import AOS from "aos"; 
import "aos/dist/aos.css";

interface Social {
  url: string;
  label: JSX.Element;
}

export default function HeroSection(): JSX.Element {
  const socials: Social[] = [
    {
      url: "https://www.instagram.com/ervin.cs_09",
      label: <AiFillInstagram size={24} />,
    },
    {
      url: "https://www.linkedin.com/in/ervin-cahyadinata-sungkono",
      label: <AiFillLinkedin size={24} />,
    },
    {
      url: "https://dribbble.com/ErvinCS",
      label: <AiFillDribbbleCircle size={24} />,
    },
    {
      url: "https://github.com/ervin-sungkono",
      label: <AiFillGithub size={24} />,
    },
  ];

  const typewriterConfig: any = {
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 50,
  };

  useEffect(() => {
    const typewriter = new Typewriter("#heading-typewriter", typewriterConfig);
    typewriter.typeString("Rafi Alif Fadhilah").pauseFor(5000).start();

    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className={`${styles.container} py-6 md:py-16`}>
      <div className={styles["hero-content"]}>
        <div className={styles["heading-text"]}>
          <p>Hello, my name is</p>
          <div className={styles["heading-name"]}>
            <h1 id="heading-typewriter"></h1>
            <h1 id="name-text">Rafi Alif Fadhilah</h1>
          </div>
          <p>Web Developer & Web Designer</p>
        </div>
        <Link
          href="https://drive.google.com/file/d/1cODpw-zhF3dpDGRBxN0HlxOI1ywUYUbK/view?usp=sharing"
          className="btn btn-primary"
          target="_blank"
        >
          <p>See My CV</p>
        </Link>
      </div>
      <div
        className={`${styles["social-media-links"]} px-8 flex justify-center sm:justify-start  `}
      >
        {socials.map((social, i) => (
          <div
            className={`${styles["social-media"]} hover:text-white transition-colors duration-300 `}
            key={i}
          >
            <Link
              href={social.url}
              aria-label={social.label.toString()}
              target="_blank"
            >
              {social.label}
            </Link>
          </div>
        ))}
      </div>

      <div className="relative mx-20 sm:px-0" data-aos="zoom-in">
        <Image
          src={Rimage}
          width={400}
          height={400}
          priority
          alt="Main Image"
          className="relative animate-float"
        />
      </div>
      <div className={styles["arrow-btn"]}>
        <button
          className="cursor-pointer hover:text-white transition-colors duration-300"
          onClick={() =>
            ScrollIntoView({ id: "about-section", block: "center" })
          }
        >
          <AiOutlineArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
