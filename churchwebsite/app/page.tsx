import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Give } from "@/components/Give";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { NewHere } from "@/components/NewHere";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <main id="main" className="overflow-x-hidden">
      <Hero />
      <Welcome />
      <NewHere />
      <About />
      <Visit />
      <Services />
      <Invitation />
      <Give />
      <Contact />
    </main>
  );
}
