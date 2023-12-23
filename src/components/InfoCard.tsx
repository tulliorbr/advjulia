"use client";
import { Info } from "@phosphor-icons/react";
import React from "react";
import toast from "react-hot-toast";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  copyable?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, copyable }) => {
  const handleCopyDescription = () => {
    if (!copyable) return;
    navigator.clipboard.writeText(description);
    toast.success('Conteúdo copiado!')
  };

  return (
    <div onClick={handleCopyDescription} className={`${copyable ? "cursor-pointer": "cursor-default"} bg-white text-primary-dark rounded-md flex flex-col items-center p-3 text-center w-60 h-40 transition-transform transform hover:scale-110 hover:shadow-2xl border-b-4 border-dark-brown border-primary`}>
      <div className="mt-1">{icon ? icon : <Info size={32} />}</div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <strong>{title}</strong>
        <p>{description}</p>
        {copyable && (
          <small className="text-gray-400">clique no card para copiar</small>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
