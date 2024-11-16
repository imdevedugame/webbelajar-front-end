import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </main>
    </>
  );
}
