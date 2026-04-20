import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  BookOpen, 
  Heart, 
  Users, 
  Calendar,
  GraduationCap,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const Sobre = () => {
  // Dados da linha do tempo (formação e experiência)
  const timeline = [
    {
      ano: '2015',
      titulo: 'Graduação em Nutrição',
      descricao: 'Universidade de Brasília (UnB) - Bacharelado com ênfase em Nutrição Clínica',
      icone: GraduationCap,
    },
    {
      ano: '2017',
      titulo: 'Especialização em Nutrição Comportamental',
      descricao: 'Instituto de Nutrição Comportamental - Abordagem que une psicologia e nutrição',
      icone: Heart,
    },
    {
      ano: '2018',
      titulo: 'Pós-graduação em Emagrecimento e Metabolismo',
      descricao: 'Faculdade de Ciências da Saúde - Estratégias personalizadas para perda de peso sustentável',
      icone: Award,
    },
    {
      ano: '2020',
      titulo: 'Consultório Próprio',
      descricao: 'Inauguração do espaço acolhedor no Centro de Brasília para atender com excelência',
      icone: Briefcase,
    },
    {
      ano: '2023',
      titulo: 'Especialização em Nutrição Materno-Infantil',
      descricao: 'Acompanhamento nutricional para gestantes e introdução alimentar para bebês',
      icone: Users,
    },
  ];

  const diferenciais = [
    {
      titulo: 'Atendimento Humanizado',
      descricao: 'Escuta ativa e acolhimento sem julgamentos. Cada paciente é único.',
      icone: Heart,
    },
    {
      titulo: 'Sem Dietas Restritivas',
      descricao: 'Nada de cortar grupos alimentares. Aprendemos a comer de tudo com equilíbrio.',
      icone: CheckCircle,
    },
    {
      titulo: 'Baseado em Ciência',
      descricao: 'Condutas atualizadas baseadas nas melhores evidências científicas.',
      icone: BookOpen,
    },
    {
      titulo: 'Acompanhamento Contínuo',
      descricao: 'Suporte entre consultas via WhatsApp para tirar dúvidas e manter o foco.',
      icone: Clock,
    },
  ];

  return (
    <div>
      {/* 1. HERO - FOTO DA DRA. MÔNICA + TÍTULO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary/90 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Foto */}
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-2xl"></div>
                <img 
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Dra. Mônica Stephany" 
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl mx-auto"
                />
              </div>
            </div>
            
            {/* Texto */}
            <div className="md:w-3/5 text-center md:text-left text-white">
              <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" className="text-yellow-400" />)}
                </div>
                <span className="font-body font-bold">{nutriInfo.avaliacoes.nota} • {nutriInfo.avaliacoes.total} avaliações no Google</span>
              </div>
              <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {nutriInfo.nome}
              </h1>
              <p className="font-body text-xl md:text-2xl text-primary font-semibold mb-4">
                {nutriInfo.titulo}
              </p>
              <p className="font-body text-lg text-gray-200 max-w-2xl mx-auto md:mx-0 mb-6">
                {nutriInfo.slogan}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/contato" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-body font-semibold transition-all shadow-lg flex items-center gap-2 w-fit mx-auto md:mx-0">
                  Agendar Consulta <ArrowRight size={18} />
                </Link>
                <a href={`https://wa.me/55${nutriInfo.contato.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-full font-body font-semibold transition-all w-fit mx-auto md:mx-0">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIO COMPLETA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-primary font-body font-semibold tracking-wider">MINHA HISTÓRIA</span>
            <h2 className="font-title text-3xl md:text-4xl text-secondary mt-2 mb-6">Prazer, sou a Dra. Mônica</h2>
          </div>
          
          <div className="space-y-6 font-body text-gray-600 text-lg leading-relaxed">
            <p>
              Desde pequena, sempre fui fascinada pelo poder que a alimentação tem de transformar vidas. 
              Lembro-me de ajudar minha avó na cozinha e observar como uma refeição caseira era capaz de reunir 
              a família, trazer conforto e alegria. Foi ali que nasceu minha paixão pela nutrição.
            </p>
            <p>
              Durante a graduação na Universidade de Brasília, percebi que a nutrição ia muito além de contar 
              calorias ou prescrever dietas prontas. Entendi que cada pessoa tem uma história, uma rotina, 
              preferências e desafios únicos. Foi quando decidi me especializar em <strong>Nutrição Comportamental</strong>, 
              uma abordagem que respeita a individualidade e promove uma relação saudável com a comida.
            </p>
            <p>
              Ao longo da minha carreira, atendi centenas de pacientes e percebi um padrão: a maioria das pessoas 
              sabe <em>o que</em> comer, mas não sabe <em>como</em> implementar isso na correria do dia a dia. 
              Dietas extremamente restritivas até funcionam no curto prazo, mas são insustentáveis e geram frustração.
            </p>
            <p>
              Por isso, desenvolvi um método próprio que une <strong>ciência, praticidade e acolhimento</strong>. 
              Aqui, não existe certo ou errado, existe o que funciona para <strong>você</strong>. Meu objetivo é 
              te ajudar a ressignificar sua relação com a comida, para que comer bem seja um prazer, não uma obrigação.
            </p>
            <p>
              Hoje, atendo em meu consultório no Centro de Brasília e também online, acompanhando pacientes de todo 
              o Brasil. Seria uma honra fazer parte da sua jornada de transformação.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-light rounded-2xl border border-gray-200">
            <p className="font-body text-secondary font-semibold text-center italic">
              "Meu propósito é te mostrar que é possível emagrecer, ter saúde e prazer à mesa, tudo ao mesmo tempo."
            </p>
            <p className="text-center text-primary font-body mt-2">— Dra. Mônica Stephany</p>
          </div>
        </div>
      </section>

      {/* 3. LINHA DO TEMPO - FORMAÇÃO */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-body font-semibold tracking-wider">FORMAÇÃO & EXPERIÊNCIA</span>
            <h2 className="font-title text-3xl md:text-4xl text-secondary mt-2">Minha Trajetória Profissional</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => {
              const IconComponent = item.icone;
              return (
                <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Linha vertical conectando */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-primary/30"></div>
                  )}
                  
                  {/* Ícone */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <span className="inline-block bg-primary/10 text-primary font-body font-semibold px-3 py-1 rounded-full text-sm mb-2">
                      {item.ano}
                    </span>
                    <h3 className="font-title text-xl text-secondary mb-2">{item.titulo}</h3>
                    <p className="font-body text-gray-600">{item.descricao}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-body font-semibold tracking-wider">POR QUE ESCOLHER A DRA. MÔNICA?</span>
            <h2 className="font-title text-3xl md:text-4xl text-secondary mt-2">Diferenciais do Atendimento</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {diferenciais.map((item, index) => {
              const IconComponent = item.icone;
              return (
                <div key={index} className="bg-light p-6 rounded-2xl hover:shadow-md transition-shadow border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="font-title text-lg text-secondary mb-2">{item.titulo}</h3>
                  <p className="font-body text-sm text-gray-600">{item.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-title text-3xl md:text-4xl mb-4">Vamos começar sua transformação?</h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta e descubra como a nutrição pode ser leve, prazerosa e eficaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all shadow-lg">
              Agendar Consulta
            </Link>
            <a href={`tel:${nutriInfo.contato.telefone}`} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-body font-semibold text-lg transition-all">
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;