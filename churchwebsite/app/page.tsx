import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FitForYou } from "@/components/FitForYou";
import { Gallery } from "@/components/Gallery";
import { Give } from "@/components/Give";
import { Hero } from "@/components/Hero";
import { NewHere } from "@/components/NewHere";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Verse } from "@/components/Verse";
import { Visit } from "@/components/Visit";

/**
 * Visitor journey — practical first, then belonging:
 * Where/when → First visit → Fit/beliefs → About → FAQ → Community → Give → Contact
 */
export default function Home() {
  return (
    <main id="main" className="main-with-mobile-bar overflow-x-hidden">
      <Hero />
      <Visit />
      <NewHere />
      <FitForYou />
      <About />
      <Verse />
      <FAQ />
      <Gallery />
      <Services />
      <Testimonials />
      <Give />
      <Contact />
    </main>
  );
}
