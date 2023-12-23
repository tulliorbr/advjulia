"use client";
import Image from "next/image";
import React from "react";
import foto1 from "../assets/foto1.jpg";

const About: React.FC = () => {
  return (
    <div className="bg-dark-brown shadow-t-md rounded-lg p-4 w-full flex flex-col items-center justify-center min-h-screen">
      <p className="font-bold text-lg mb-8">Sobre mim</p>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-10">
        <div className="w-full lg:w-1/3 grid justify-center">
          <Image src={foto1} alt="foto" width={600}/>
        </div>
        <div className="w-full lg:w-1/3">
          Meu nome é Júlia, natural de Santa Cruz do Sul, e meu percurso
          acadêmico conduziu-me à graduação em Direito na Universidade de Santa
          Cruz do Sul (UNISC). <br />
          <br /> Atualmente, estabeleci residência em Santa Cruz, onde
          desempenho minha função como advogada trabalhista, dedicada à defesa
          incansável da classe trabalhadora. Iniciei minha trajetória
          profissional como estagiária na Defensoria Pública do Estado do Rio
          Grande do Sul, onde concentrei meus esforços na esfera jurídica
          familiar.
          <br />
          <br />
          Posteriormente, explorei distintas experiências em renomados
          escritórios, mas foi no Ministério Público do Trabalho que encontrei
          minha verdadeira vocação, dedicando-me integralmente à proteção dos
          direitos dos trabalhadores. <br />
          <br />
          Ao longo de minha carreira, nutri um compromisso intrínseco com a
          justiça social e a equidade no ambiente de trabalho. Minha atuação
          visa não apenas a aplicação técnica do Direito, mas também a defesa
          fervorosa dos princípios éticos e valores humanitários que fundamentam
          a dignidade laboral.
        </div>
      </div>
    </div>
  );
};

export default About;
