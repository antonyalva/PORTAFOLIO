import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Spotlight } from "@/components/Spotlight";
import { Journey } from "@/components/Journey";
import { Carousel3D } from "@/components/Carousel3D";
import { HexWheel } from "@/components/HexWheel";
import { ProjectList } from "@/components/ProjectList";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Spotlight />
        <Journey />
        <Carousel3D />
        <HexWheel />
        <ProjectList />
        <Contact />
      </main>
    </>
  );
}
