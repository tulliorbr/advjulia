'use client'
import React from "react";
import InfoCard from "./InfoCard";
import Maps from "./Maps";

const Contact: React.FC = () => {
  return (
    <div className="bg-light-brown shadow-t-md rounded-lg p-4 w-full flex flex-col items-center justify-center">
      <p className="font-bold text-lg mb-8">Onde me encontrar?</p>
      <InfoCard
        title="Atendimento online"
        description="Faço atendimentos online e individuais por todo vale do rio pardo"
      />
      <Maps />
    </div>
  );
};

export default Contact;
