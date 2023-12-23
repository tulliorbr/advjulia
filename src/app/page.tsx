import About from "@/components/About";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="bg-dark-brown text-white">
      <div className="relative">
        <p className="absolute text-white text-center z-50 top-1/2 left-1/4 right-1/4">Defender trabalhadores em um estado burguês é uma batalha cheia de vitórias e derrotas. Ouvir as pessoas, suas histórias, seus contextos, suas dores, seus sentimentos é um sacrifício e um privilégio. Ser confiada para resgatar os direitos de uma pessoa que foi prejudicada (enganada, humilhada, acidentada, machucada, adoecida, etc) é uma honra e uma responsabilidade.</p>
        <ImageSlider />
      </div>

      <About />
    </main>
  );
}
