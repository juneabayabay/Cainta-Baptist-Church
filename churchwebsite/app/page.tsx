import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FitForYou } from "@/components/FitForYou";
import { Gallery } from "@/components/Gallery";
import { Give } from "@/components/Give";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { NewHere } from "@/components/NewHere";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Verse } from "@/components/Verse";
import { Visit } from "@/components/Visit";

/**
 * Visitor journey (one job per section):
 * Welcome → Scripture → First Sunday → Visit (canonical times)
 * → Invitation → Beliefs → About → Photos → Stories → Life → FAQ → Give → Contact
 */
export default function Home() {
  return (
    <main id="main" className="main-with-mobile-bar overflow-x-hidden">
      <Hero />
      <Verse />
      <NewHere />
      <Visit />
      <Invitation />
      <FitForYou />
      <About />
      <Gallery />
      <Testimonials />
      <Services />
      <FAQ />
      <Give />
      <Contact />
    </main>
  );
}
