"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import React from "react";

const BtnFlutuant: React.FC = () => {
  return (
    <button
      className="fixed bottom-4 right-4 p-4 bg-whatsapp text-white rounded-full shadow-lg"
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send/?phone=55051996134321&text&type=phone_number&app_absent=0"
        )
      }
    >
      <WhatsappLogo size={32} />
    </button>
  );
};

export default BtnFlutuant;
