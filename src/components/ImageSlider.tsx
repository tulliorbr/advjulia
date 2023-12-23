"use client";
import Image from "next/image";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const imageSlider = [foto1, foto2, foto3, foto4, foto5];

  const slideStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="opacity-25">
      <Slide arrows={false} duration={3000}>
        {imageSlider.map((image, index) => (
          <div key={index} style={slideStyle}>
            <Image
              src={image}
              alt={`imageSlider-${index}`}
              className="flex items-center justify-center object-cover w-full h-[550px]"
              style={{
                objectPosition:
                  index >= 0 && index <= 2 ? "50% 25%" : "50% 45%",
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
