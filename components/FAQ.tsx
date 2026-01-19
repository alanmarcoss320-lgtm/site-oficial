
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-200 rounded-xl mb-4 bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className={`shrink-0 ${isOpen ? 'text-[#E4B801]' : 'text-gray-400'} transition-colors`} size={24} />
          <span className={`font-bold text-lg ${isOpen ? 'text-[#010101]' : 'text-gray-700'}`}>{question}</span>
        </div>
        <ChevronDown 
          className={`text-[#E4B801] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={20} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 ml-10 text-gray-600 leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Vocês dão garantia no serviço?",
      answer: "Sim! Todos os nossos serviços e peças substituídas acompanham garantia total de 90 dias a 6 meses (dependendo do componente), garantindo sua tranquilidade e segurança."
    },
    {
      question: "Quais regiões vocês atendem?",
      answer: "Atendemos toda a cidade de São José dos Campos, Jacareí e Caçapava. Chegamos rapidamente em qualquer bairro da região com nossa unidade móvel."
    },
    {
      question: "O orçamento é cobrado?",
      answer: "A visita técnica para diagnóstico tem um valor simbólico que é totalmente abatido do valor do serviço caso o orçamento seja aprovado. Ou seja, se fizermos o conserto, a visita sai grátis!"
    },
    {
      question: "Quanto tempo demora o conserto?",
      answer: "Cerca de 90% dos problemas em geladeiras e máquinas de lavar são resolvidos no mesmo dia, diretamente na sua casa. Para casos complexos, usamos nosso sistema Leva e Traz."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos Pix, cartões de débito e crédito com parcelamento em até 10x (consulte condições). Também facilitamos para empresas e condomínios."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E4B801] font-bold tracking-widest uppercase text-sm mb-2 block">Transparência</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#010101] mb-4 text-center uppercase">Dúvidas Frequentes</h2>
          <div className="w-24 h-1.5 bg-[#E4B801] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg">
            Separamos as principais perguntas que nossos clientes costumam fazer. Se ainda tiver dúvidas, chame no WhatsApp!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
