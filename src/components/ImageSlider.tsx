"use client";
import Image from "next/image";
import foto1 from "../assets/foto2.jpg";
import foto2 from "../assets/foto6.jpg";
import foto3 from "../assets/foto3.jpg";
import foto5 from "../assets/foto5.jpg";
import foto4 from "../assets/foto4.jpg";
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
    <div id="inicio" className="relative h-full w-full">
      <div className="absolute text-white text-center flex flex-col top-[20%] md:top-1/3 md:left-1/4 md:right-1/4 px-10 bottom-1/3 ">
        <p className="text-6xl text-center font-bold">Julia Rauber</p>
        <small>Advogada trabalhista na defesa da classe trabalhadora</small>
        <br />
        {`"Defender trabalhadores em um estado burguês é uma batalha cheia de
        vitórias e derrotas. Ouvir as pessoas, suas histórias, seus contextos,
        suas dores, seus sentimentos é um sacrifício e um privilégio. Ser
        confiada para resgatar os direitos de uma pessoa que foi prejudicada
        (enganada, humilhada, acidentada, machucada, adoecida, etc) é uma honra
        e uma responsabilidade."`}
      </div>
      <div className="opacity-25">
        <Slide arrows={false} duration={3000} canSwipe={false}>
          {imageSlider.map((image, index) => (
            <div key={index} style={slideStyle}>
              <Image
                src={image}
                alt={`imageSlider-${index}`}
                className="object-cover w-full h-screen max-w-full"
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
