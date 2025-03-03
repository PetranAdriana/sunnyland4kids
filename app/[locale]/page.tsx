import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
