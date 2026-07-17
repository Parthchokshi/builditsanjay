import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Reviews } from "@/components/Reviews";
import { Instagram } from "@/components/Instagram";
import { ServiceArea } from "@/components/ServiceArea";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-[clamp(20px,5vw,72px)]">
        <Hero />
        <hr className="hr" />
        <Stats />
        <hr className="hr" />
        <Services />
        <hr className="hr" />
        <About />
        <hr className="hr" />
        <Work />
        <hr className="hr" />
        <Reviews />
        <hr className="hr" />
        <Instagram />
        <hr className="hr" />
        <ServiceArea />
        <hr className="hr" />
        <Contact />
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
}
