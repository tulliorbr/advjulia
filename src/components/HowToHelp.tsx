import React from "react";
import InfoCard from "./InfoCard";

const CardInformation: React.FC = () => {
  const infoCards = [
    {
      title: "Ações Trabalhistas",
      description: "Questões legais entre empregadores e empregados.",
    },
    {
      title: "Acidente de Trabalho",
      description:
        "Lesão ou morte durante o trabalho, gerando direitos ao trabalhador.",
    },
    {
      title: "Acidente de Trajeto / Percurso",
      description: "Acidentes no trajeto entre casa e trabalho.",
    },
    {
      title: "Doenças Ocupacionais",
      description: "Condições de saúde relacionadas ao trabalho.",
    },
    {
      title: "Verbas Rescisórias",
      description: "Valores devidos na rescisão do contrato de trabalho.",
    },
    {
      title: "Adicional de Insalubridade / Periculosidade",
      description: "Pagamento extra por condições arriscadas.",
    },
    {
      title: "Pagamento de Horas Extras",
      description: "Remuneração por trabalho além da jornada normal.",
    },
    {
      title: "Trabalho sem Carteira Assinada",
      description: "Atividades sem contrato formalizado.",
    },
    {
      title: "Dano Moral / Assédio Moral",
      description: "Situações que afetam dignidade ou integridade emocional.",
    },
    {
      title: "Desvio/Acúmulo de Função",
      description:
        "Atribuição de responsabilidades extras ou acumulo de funções.",
    },
  ];

  return (
    <div id="howToHelp" className="bg-light-brown shadow-md rounded-lg p-4 w-full flex flex-col items-center justify-center">
      <p className="font-bold text-lg">Como posso te ajudar</p>
      <small className="mb-3 text-center">Aqui estão alguns dos serviços que posso te auxiliar. Não encontrou o que precisa? Entra em contato comigo!</small>
      <div className="flex flex-wrap justify-center w-full">
        {infoCards.map((infoCard, index) => (
          <div key={index} className="m-4">
            <InfoCard
              title={infoCard.title}
              description={infoCard.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInformation;
