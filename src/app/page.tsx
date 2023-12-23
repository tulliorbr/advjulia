import About from "@/components/About";
import Contact from "@/components/Contact";
import HowToHelp from "@/components/HowToHelp";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="bg-dark-brown text-white">
      <ImageSlider />
      <HowToHelp />
      <About />
      <Contact />
    </main>
  );
}
