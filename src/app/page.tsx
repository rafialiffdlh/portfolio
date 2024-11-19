import Image from "next/image";
import Cloud from "@/components/pages/cloud";
import HeroSection from "@/components/pages/heroSection";
import Navbar from "@/components/pages/navbar";
import { ParticlesDemo } from "@/components/pages/particles";
import { MeteorDemo } from "@/components/pages/meteor";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5 px-8">
        <HeroSection />
        <Cloud />
        {/* <ParticlesDemo /> */}
        <MeteorDemo />
      </div>
    </div>
  );
}
