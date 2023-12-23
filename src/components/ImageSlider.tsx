"use client";
import Image from "next/image";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const imageSlider = [foto1, foto2, foto3, foto4, foto5];

  const slideStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div className="relative h-full w-full">
      <p className="absolute text-white text-center z-50 top-1/3 md:left-1/4 md:right-1/4 px-10 bottom-1/3 text-sm md:text-base lg:text-lg xl:text-xl">
        <strong>PROPOSITO</strong>
        <br />
        <br />
        Defender os direitos dos trabalhadores em um contexto burguês, ciente
        das batalhas marcadas por desafios e sucessos. Reconhecer o privilégio e
        sacrifício ao ouvir as histórias, contextos, dores e sentimentos das
        pessoas. Comprometer-se com a responsabilidade de resgatar os direitos
        de indivíduos prejudicados, seja por enganos, humilhações, acidentes,
        ferimentos, doenças, etc.
      </p>
      <div className="opacity-25">
        <Slide arrows={false} duration={3000}>
          {imageSlider.map((image, index) => (
            <div key={index} style={slideStyle}>
              <Image
                src={image}
                alt={`imageSlider-${index}`}
                className="object-cover w-full h-[550px] max-w-full"
                style={{
                  objectPosition:
                    index >= 0 && index <= 2 ? "50% 25%" : "50% 45%",
                }}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ImageSlider;
