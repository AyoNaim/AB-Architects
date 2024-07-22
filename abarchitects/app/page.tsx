import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tab from "@/components/Tab";
import About from "@/components/About";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex justify-center items-center">
        <Navbar/>
      </div>
      <Hero />
      <Tab />
      <About />
      <Feedback />
    </main>
  );
}
