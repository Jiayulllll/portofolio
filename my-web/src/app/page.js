import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('/images/background.jpg')]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12">
        <div className="mt-12">
          <HeroSection />
        </div>
        <div className="mt-12">
          <AboutSection />
        </div>
        <div className="mt-12">
          <Skills />
          <div className="mt-12">
            <ProjectsSection />
          </div>
          <div className="mt-12">
            <EmailSection />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
