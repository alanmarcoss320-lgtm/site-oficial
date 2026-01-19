
import React from 'react';
import { CheckCheck } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  message: string;
  time: string;
}

export const SocialProof: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: "01",
      name: "Mariana Oliveira",
      location: "Cliente 05 – São José dos Campos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&q=80", 
      message: "Boa tarde! Só pra agradecer, a geladeira ficou ótima. Gelando muito agora! O técnico foi super educado e explicou tudo direitinho.",
      time: "14:30"
    },
    {
      id: "02",
      name: "Carlos Silva",
      location: "Cliente 02 – Jardim Aquarius",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80", 
      message: "Serviço de primeira. Achei que ia ter que comprar outra máquina, mas vocês salvaram. Preço justo demais, recomendo!",
      time: "09:15"
    },
    {
      id: "03",
      name: "Fernanda Costa",
      location: "Cliente 03 – Zona Sul",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80", 
      message: "Adorei o atendimento. Vieram no mesmo dia e resolveram rapidinho. Minha Brastemp tá nova de novo! 🙏",
      time: "16:45"
    },
    {
      id: "04",
      name: "Rafael Santos",
      location: "Cliente 01 – Centro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces&q=80", 
      message: "Muito obrigado pela honestidade. Outro tinha condenado o motor, e vcs resolveram só trocando o sensor. Ganharam um cliente fiel.",
      time: "11:20"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern hint */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#E4B801] font-bold tracking-widest uppercase text-sm mb-2 block">Depoimentos Reais</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#010101] mb-6">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A satisfação de quem já contratou é a nossa maior garantia de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              {/* Header do Chat */}
              <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#E4B801]"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-[#010101] text-lg leading-tight">{item.name}</h4>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.location}</p>
                </div>
              </div>

              {/* Corpo da Mensagem (Balão) */}
              <div className="bg-gray-50 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-4 relative mb-2 flex-grow">
                 <p className="text-gray-700 leading-relaxed text-[15px]">
                   {item.message}
                 </p>
              </div>

              {/* Rodapé da Mensagem */}
              <div className="flex justify-end items-center gap-1 mt-auto pt-2">
                <span className="text-[11px] text-gray-400 font-medium">{item.time}</span>
                <CheckCheck size={14} className="text-[#34B7F1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
