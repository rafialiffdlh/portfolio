import HeroSection from "@/components/pages/heroSection";
import Navbar from "@/components/pages/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5 px-4">
        <HeroSection />
      </div>
    </div>
  );
}
