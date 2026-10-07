import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div style={{ background: "#0B0B0C", color: "#EDEDEA", minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        <StackStrip />
        <Stats />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
