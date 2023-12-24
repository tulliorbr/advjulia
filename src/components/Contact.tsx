"use client";
import React from "react";
import InfoCard from "./InfoCard";
import {
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  MapPinLine,
  Phone,
  WhatsappLogo,
  WifiHigh,
} from "@phosphor-icons/react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-light-brown shadow-t-md rounded-lg p-4 w-full flex flex-col items-center justify-center">
      <p className="font-bold text-lg mb-8">Onde me encontrar?</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <InfoCard
          title="Santa Cruz do Sul"
          description="Resido em SCS, então podemos marcar um atendimento presencial"
          icon={<MapPinLine size={32} />}
        />
        <InfoCard
          title="Atendimento online"
          description="Atendimentos de forma remota e individual por todo vale do rio pardo"
          icon={<WifiHigh size={32} />}
        />
      </div>
      <p className="font-bold text-lg mt-4">Informações de contato:</p>
      <small className="mb-5 text-center">
        Você pode me contatar pelo telefone, e-mail, ou pelas redes sociais!
      </small>
      <div className="flex gap-3 mb-3">
        <InstagramLogo
          size={32}
          onClick={() => window.open("https://www.instagram.com/juliarrauber/")}
          target="_blank"
        />
        <WhatsappLogo
          size={32}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=55051996134321&text&type=phone_number&app_absent=0"
            )
          }
          target="_blank"
        />
        <LinkedinLogo
          size={32}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/julia-rohers-rauber-b62910239/"
            )
          }
          target="_blank"
        />
      </div>
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        <InfoCard
          title="Telefone"
          description="(51) 9 9613-4321"
          icon={<Phone size={32} />}
          copyable
        />
        <InfoCard
          title="E-mail"
          description="rauberj@outlook.com"
          icon={<Envelope size={32} />}
          copyable
        />
      </div>
    </div>
  );
};

export default Contact;
