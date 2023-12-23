"use client";
import { Info } from "@phosphor-icons/react";
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white text-primary-dark rounded-md flex flex-col items-center p-3 text-center w-60 h-40">
      <div className="mt-1">
        <Info size={32} />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
  
};

export default InfoCard;
