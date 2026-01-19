import React from 'react';
import { ShieldCheck, Truck, Wrench, Smile } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck size={40} />,
      title: "Sistema Leva e Traz",
      description: "Logística própria para retirada e entrega do seu equipamento com total segurança."
    },
    {
      icon: <Wrench size={40} />,
      title: "Materiais Premium",
      description: "Utilizamos apenas peças originais e ferramentas de alta precisão nos reparos."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Garantia Total",
      description: "Todos os serviços acompanham garantia estendida de até 6 meses para sua tranquilidade."
    },
    {
      icon: <Smile size={40} />,
      title: "Conforto Total",
      description: "Resolvemos seu problema no conforto de sua casa, sem sujeira e sem bagunça."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#010101] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4B801] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E4B801] opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            Por que escolher a <br className="md:hidden" /><span className="text-[#E4B801]">RS Refrigeração <br className="md:hidden" />e Manutenção?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Não somos apenas técnicos, somos especialistas em devolver a vida útil ao seu eletrodoméstico com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E4B801]/10 text-[#E4B801] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};