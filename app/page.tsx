import About from "@/components/About";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Work />
        <Impact />
        <Gallery />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
