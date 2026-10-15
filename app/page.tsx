import VsCodeShell from "@/components/VsCodeShell";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <VsCodeShell>
      <Hero />
      <StackStrip />
      <Stats />
      <Projects />
      <About />
      <Contact />
    </VsCodeShell>
  );
}
