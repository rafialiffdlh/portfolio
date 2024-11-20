"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BsBrightnessHigh } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Fc from "@/public/images/android-chrome-192x192.png";
import F from "@/public/images/favicon.ico";
interface NavigationItem {
  label: string;
  url: string;
}

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [prevYPos, setPrevYPos] = useState<number>(0);
  const [isScrolledDown, setScrolledDown] = useState<boolean>(false);
  const [hamburgerState, setHamburger] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleHamburgerActive = () => setHamburger(!hamburgerState);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = throttle(
      () => setClientWindowHeight(window.scrollY),
      50
    );
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function throttle(fn: () => void, wait: number) {
    let time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  useEffect(() => {
    setScrolledDown(clientWindowHeight > prevYPos);
    setPrevYPos(clientWindowHeight);
  }, [clientWindowHeight, prevYPos]);

  const navigations: NavigationItem[] = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Project", url: "/project" },
    { label: "Contact", url: "/contact" },
  ];

  const isActive = (url: string): string =>
    pathname === url
      ? `${styles["nav-link"]} ${styles["active"]}`
      : styles["nav-link"];

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`${
        isScrolledDown
          ? `${styles["navbar"]} ${styles["active"]}`
          : styles["navbar"]
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className={styles["nav-left"]}>
          <Link href="/" className={styles["nav-logo"]}>
            {theme === "light" ? (
              <Image src={F} width={50} height={50} alt="Logo" fill />
            ) : (
              <Image
                src={Fc}
                width={50}
                height={50}
                alt="Logo White"
                className="mx-auto"
              />
            )}
          </Link>
          <div
            className="toggle-btn w-16 h-8 py-1 px-2 bg-blue-50 dark:bg-gray-700 rounded-full cursor-pointer hidden lg:block"
            onClick={toggleTheme}
          >
            <div className="toggle-btn-circle w-6 h-6 flex justify-center items-center bg-blue-500 dark:bg-blue-200 rounded-full transition-transform ease-in-out duration-500 dark:translate-x-full">
              {theme === "light" ? (
                <BsBrightnessHigh className="text-white" />
              ) : (
                <RiMoonClearLine className="text-black" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            hamburgerState && !isScrolledDown
              ? `${styles["nav-list"]} ${styles["active"]}`
              : styles["nav-list"]
          }
        >
          <div className={styles["nav-menu"]}>
            {navigations.map((navigation, i) => (
              <Link
                className={`${isActive(
                  navigation.url
                )} text-black dark:text-white`}
                href={navigation.url}
                key={i}
              >
                {navigation.label}
              </Link>
            ))}
            <div
              className="toggle-btn block mb-4 w-16 h-8 py-1 px-2 bg-blue-50 dark:bg-gray-700 rounded-full cursor-pointer lg:hidden"
              onClick={toggleTheme}
            >
              <div className="toggle-btn-circle w-6 h-6 flex justify-center items-center bg-blue-500 dark:bg-blue-200 rounded-full transition-transform ease-in-out duration-500 dark:translate-x-full">
                {theme === "light" ? (
                  <BsBrightnessHigh className="text-white" />
                ) : (
                  <RiMoonClearLine className="text-black" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            hamburgerState
              ? `${styles["hamburger-btn"]} ${styles["active"]}`
              : styles["hamburger-btn"]
          }`}
          onClick={toggleHamburgerActive}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
