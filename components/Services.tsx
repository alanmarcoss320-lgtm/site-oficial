
import React, { useState } from 'react';
import { Truck, Home, BadgeDollarSign, Wrench, RefreshCw, ThermometerSnowflake, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full border-b-4 border-[#E4B801]">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform scale-150 group-hover:scale-125">
       {icon}
    </div>
    <div className="p-8 relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 bg-[#010101] rounded-lg flex items-center justify-center text-[#E4B801] mb-6 group-hover:bg-[#E4B801] group-hover:text-[#010101] transition-colors duration-300 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#010101] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
      <a href="https://w.app/lyijgl" className="inline-flex items-center text-[#010101] font-bold uppercase text-sm tracking-wider hover:text-[#E4B801] transition-colors">
        Saiba Mais <span className="ml-2 text-xl">→</span>
      </a>
    </div>
  </div>
);

interface AccordionItemProps {
  title: string;
  description: string;
  problems: string[];
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, problems, isOpen, toggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={toggle}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 ${isOpen ? 'bg-[#010101] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
      >
        <span className="font-bold text-lg md:text-xl">{title}</span>
        {isOpen ? <ChevronUp className="text-[#E4B801]" /> : <ChevronDown className="text-gray-400" />}
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <p className="text-gray-700 font-medium mb-4 leading-relaxed border-l-4 border-[#E4B801] pl-3">
            {description}
          </p>
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Problemas que resolvemos:</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {problems.map((prob, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#E4B801] rounded-full mr-2"></span>
                  {prob}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fridge' | 'washer'>('fridge');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const highLevelServices = [
    {
      title: "Sistema Leva e Traz",
      description: "Para reparos complexos, retiramos sua máquina ou geladeira, consertamos em nossa oficina equipada e devolvemos instalada. Sem esforço para você.",
      icon: <Truck size={32} />
    },
    {
      title: "Atendimento a Domicílio",
      description: "90% dos problemas são resolvidos no local. Nossos técnicos vão até você com as ferramentas e peças necessárias para um reparo ágil.",
      icon: <Home size={32} />
    },
    {
      title: "Compro Sua Máquina",
      description: "Tem uma máquina ou geladeira parada ocupando espaço? Avaliamos e compramos seu equipamento com defeito. Pagamento à vista.",
      icon: <BadgeDollarSign size={32} />
    }
  ];

  const fridgeServices = [
    {
      title: "Compressor e Refrigeração (O Coração da Geladeira)",
      description: "Realizamos a troca de motores (compressores) queimados, recarga técnica de gás refrigerante e soldagem de vazamentos no sistema selado.",
      problems: ["Geladeira não gela", "Motor fazendo barulho ou estalando", "Grade traseira fria", "Freezer gela mas embaixo não"]
    },
    {
      title: "Sistema Frost Free e Degelo",
      description: "Manutenção completa no sistema que impede o acúmulo de gelo. Troca de sensores de degelo, resistências, bimetal e fusíveis térmicos.",
      problems: ["Geladeira bloqueada de gelo", "Parte de baixo parou de gelar", "Água vazando dentro da geladeira", "Ventilador parou"]
    },
    {
      title: "Placa Eletrônica e Sensores",
      description: "Diagnóstico avançado e reparo ou substituição do módulo eletrônico de controle e sensores de temperatura (termistores).",
      problems: ["Painel piscando", "Geladeira apitando", "Não liga nada", "Desliga sozinha antes da temperatura ideal"]
    },
    {
      title: "Componentes Periféricos e Preventiva",
      description: "Troca de termostatos, borrachas de vedação, ventiladores e limpeza técnica preventiva de condensadores.",
      problems: ["Porta não fecha direito", "Consumo alto de energia", "Barulho de ventoinha raspando"]
    }
  ];

  const washerServices = [
    {
      title: "Drenagem e Entrada de Água",
      description: "Substituição de bombas de drenagem queimadas e válvulas de entrada de água (solenóides) defeituosas.",
      problems: ["Máquina não joga água fora", "Máquina não enche", "Água transbordando", "Não avança etapa"]
    },
    {
      title: "Placa e Comandos Eletrônicos",
      description: "Reparo especializado em placas de potência e interface. Solução para máquinas 'mortas' ou desprogramadas.",
      problems: ["Máquina não liga", "Painel piscando erro", "Pula etapas do ciclo", "Botões não funcionam"]
    },
    {
      title: "Mecânica, Motor e Centrifugação",
      description: "Reparo no sistema de transmissão, troca de correias, atuadores de freio e motores. Garantia de força na lavagem.",
      problems: ["Máquina não bate a roupa", "Não centrifuga (roupa sai molhada)", "Cheiro de queimado", "Motor roncando"]
    },
    {
      title: "Barulhos Excessivos e Vazamentos",
      description: "Mecânica pesada: troca de rolamentos, retentores, tirantes e câmbio. Solução definitiva para barulhos de 'avião'.",
      problems: ["Barulho muito alto na centrifugação", "Vazamento de água/óleo por baixo", "Cesto solto ou batendo"]
    }
  ];

  const currentDetailedServices = activeTab === 'fridge' ? fridgeServices : washerServices;

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E4B801] font-bold tracking-widest uppercase text-sm mb-2 block">Soluções Completas</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#010101] mb-4">NOSSOS SERVIÇOS</h2>
          <div className="w-24 h-1.5 bg-[#E4B801] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Oferecemos flexibilidade e conveniência para restaurar o conforto do seu lar.
          </p>
        </div>

        {/* High Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {highLevelServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#010101] mb-2 uppercase">O Que Nós Consertamos?</h3>
            <p className="text-gray-500">Selecione o seu equipamento para ver os problemas que resolvemos.</p>
          </div>

          {/* Buttons / Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-full shadow-md inline-flex">
              <button
                onClick={() => { setActiveTab('washer'); setOpenIndex(0); }}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'washer' ? 'bg-[#010101] text-[#E4B801] shadow-lg scale-105' : 'bg-transparent text-gray-500 hover:text-[#010101]'}`}
              >
                <RefreshCw size={18} className="mr-2" />
                MÁQUINA DE LAVAR
              </button>
              <button
                onClick={() => { setActiveTab('fridge'); setOpenIndex(0); }}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === 'fridge' ? 'bg-[#010101] text-[#E4B801] shadow-lg scale-105' : 'bg-transparent text-gray-500 hover:text-[#010101]'}`}
              >
                <ThermometerSnowflake size={18} className="mr-2" />
                GELADEIRA
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {currentDetailedServices.map((service, index) => (
              <AccordionItem 
                key={index}
                title={service.title}
                description={service.description}
                problems={service.problems}
                isOpen={openIndex === index}
                toggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Extra info strip */}
        <div className="mt-20 bg-[#010101] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-center gap-6">
                <div className="hidden md:block p-4 bg-gray-800 rounded-full">
                    <Wrench className="text-[#E4B801]" size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Identificou algum problema?</h3>
                    <p className="text-gray-400">Nossos técnicos estão prontos para diagnosticar e resolver.</p>
                </div>
            </div>
            <div className="flex gap-4">
                 <Button href="https://w.app/lyijgl" className="!bg-[#E4B801] !text-[#010101] hover:!bg-white hover:!text-[#010101]">
                    Agendar Visita
                 </Button>
            </div>
        </div>
      </div>
    </section>
  );
};
