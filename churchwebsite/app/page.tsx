import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Give } from "@/components/Give";
import { Hero } from "@/components/Hero";
import { NewHere } from "@/components/NewHere";
import { Services } from "@/components/Services";
import { Verse } from "@/components/Verse";
import { Visit } from "@/components/Visit";

/**
 * Visitor journey (one job per section):
 * Welcome → Scripture → New guest → Who we are → Photos → Visit → Life → Give → Contact
 */
export default function Home() {
  return (
    <main id="main" className="overflow-x-hidden">
      <Hero />
      <Verse />
      <NewHere />
      <About />
      <Gallery />
      <Visit />
      <Services />
      <Give />
      <Contact />
    </main>
  );
}
