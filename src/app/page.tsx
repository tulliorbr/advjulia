import About from "@/components/About";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="bg-dark-brown text-white">
      <div className="relative">
        <p className="absolute text-white z-50 top-1/2 left-1/2">Proposito</p>
        <ImageSlider />
      </div>

      <About />
    </main>
  );
}
