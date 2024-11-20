"use client";
import styles from "@/styles/HeroSection.module.css";
import { AiFillDribbbleCircle } from "@react-icons/all-files/ai/AiFillDribbbleCircle";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import Particles from "@/components/ui/particles";
import Meteors from "@/components/ui/meteors";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import { ScrollIntoView } from "@/lib/scroll";
import Link from "next/link";
import Image from "next/image";

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
      url: "",
      label: <AiFillInstagram size={24} />,
    },
    {
      url: "",
      label: <AiFillLinkedin size={24} />,
    },

    {
      url: "",
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
    <section
      className={`${styles.container} py-6 md:py-16 relative overflow-hidden`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={500}
          staticity={800}
          ease={800}
          color="#4F46E5"
        />
        <Meteors number={100} />
      </div>

      <div className={styles["hero-content"]}>
        <div className={styles["heading-text"]}>
          <p>Hello, my name is</p>
          <div className={styles["heading-name"]}>
            <h1 id="heading-typewriter"></h1>
            <h1 id="name-text">Rafi Alif Fadhilah</h1>
          </div>
          <p>Junior Full Stack Web Developer</p>
        </div>
        <Link
          href="https://drive.google.com/file/d/1wUCeROEFbNQnkINkLVbhb2kq8xasK7Vz/view?usp=drive_link"
          className="btn btn-primary"
          target="_blank"
        >
          <p>Lihat CV</p>
        </Link>
      </div>
      {/* <div className={`${styles["social-media-links"]} px-16 `}>
        {socials.map((social, i) => (
          <div
            className={`${styles["social-media"]} hover:text-white transition-colors duration-300`}
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
      </div> */}

      <div className="relative mx-16 sm:px-0" data-aos="zoom-in">
        <Image
          src={Rimage}
          width={400}
          height={400}
          priority
          alt="Main Image"
          className="relative animate-float"
        />
      </div>
    </section>
  );
}
