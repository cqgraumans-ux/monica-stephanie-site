import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Users, 
  Baby, 
  Scale, 
  Clock,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Home,
  Heart,
  Dumbbell,
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const Servicos = () => {
  // Dados dos serviços
  const servicos = [
    {
      id: 1,
      titulo: 'Consulta Nutricional Online',
      descricao: 'Atendimento completo por videochamada. Ideal para quem tem rotina corrida ou mora em outras cidades.',
      duracao: '60 minutos',
      preco: 'R$ 250,00',
      icone: Video,
      destaque: true,
      beneficios: [
        'Plano alimentar individualizado',
        'Lista de compras personalizada',
        'Receitas exclusivas',
        'Suporte WhatsApp 15 dias'
      ],
      categoria: 'consulta',
    },
    {
      id: 2,
      titulo: 'Consulta Nutricional Presencial',
      descricao: 'Atendimento no consultório em Brasília com avaliação de composição corporal e exame físico.',
      duracao: '60 minutos',
      preco: 'R$ 280,00',
      icone: Users,
      destaque: true,
      beneficios: [
        'Avaliação por bioimpedância',
        'Plano alimentar impresso',
        'Materiais educativos',
        'Suporte WhatsApp 15 dias'
      ],
      categoria: 'consulta',
    },
    {
      id: 3,
      titulo: 'Programa de Emagrecimento',
      descricao: 'Acompanhamento mensal para emagrecimento sustentável e relação saudável com a comida.',
      duracao: '3 meses',
      preco: 'R$ 597/mês',
      icone: Scale,
      destaque: false,
      beneficios: [
        '4 consultas por mês',
        'Avaliação corporal mensal',
        'Suporte diário WhatsApp',
        'Módulos educativos',
        'Grupo no Telegram'
      ],
      categoria: 'programa',
    },
    {
      id: 4,
      titulo: 'Nutrição Materno-Infantil',
      descricao: 'Acompanhamento para gestantes e introdução alimentar para bebês.',
      duracao: '60 minutos',
      preco: 'R$ 300,00',
      icone: Baby,
      destaque: false,
      beneficios: [
        'Plano para gestante',
        'Guia introdução alimentar',
        'Receitas para bebês',
        'Suporte amamentação'
      ],
      categoria: 'consulta',
    },
    {
      id: 5,
      titulo: 'Nutrição Esportiva',
      descricao: 'Orientação para praticantes de atividade física e atletas amadores.',
      duracao: '60 minutos',
      preco: 'R$ 270,00',
      icone: Dumbbell,
      destaque: false,
      beneficios: [
        'Cálculo energético',
        'Estratégias hidratação',
        'Suplementação individual',
        'Plano treino/descanso'
      ],
      categoria: 'consulta',
    },
    {
      id: 6,
      titulo: 'Saúde da Mulher',
      descricao: 'Acompanhamento para SOP, endometriose, menopausa e equilíbrio hormonal.',
      duracao: '60 minutos',
      preco: 'R$ 280,00',
      icone: Heart,
      destaque: false,
      beneficios: [
        'Avaliação hormonal',
        'Estratégias anti-inflamatórias',
        'Suplementação direcionada',
        'Plano alimentar cíclico'
      ],
      categoria: 'consulta',
    },
  ];

  const faqs = [
    {
      pergunta: 'Como funciona a primeira consulta?',
      resposta: 'Na primeira consulta, realizo uma anamnese completa para conhecer sua rotina, hábitos, preferências, histórico de saúde e objetivos. A partir disso, elaboramos juntos um plano alimentar personalizado que se encaixe na sua realidade.'
    },
    {
      pergunta: 'Preciso fazer exames antes da consulta?',
      resposta: 'Não é obrigatório, mas se você tiver exames recentes (hemograma, colesterol, glicemia, etc.), eles ajudam a traçar um plano mais preciso. Caso contrário, podemos solicitar após a primeira consulta.'
    },
    {
      pergunta: 'O plano alimentar é muito restritivo?',
      resposta: 'De forma alguma! Minha abordagem é baseada em inclusão e equilíbrio. Trabalhamos para incluir alimentos que você gosta, adaptando quantidades e combinações. Nada de cortar grupos alimentares inteiros.'
    },
    {
      pergunta: 'Quanto tempo leva para ver resultados?',
      resposta: 'Os resultados variam de pessoa para pessoa, mas em geral, pacientes que seguem as orientações começam a perceber mudanças em 2 a 4 semanas, seja na disposição, sono, digestão ou medidas corporais.'
    },
  ];

  return (
    <div>
      {/* 1. HERO - COM CONTRASTE CORRIGIDO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-16 md:py-20 text-white">
        {/* Overlay escuro para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Nossos Serviços
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Conheça todas as formas de cuidar da sua saúde com um atendimento personalizado e acolhedor.
          </p>
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS - CARDS PERFEITAMENTE ALINHADOS */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => {
              const IconComponent = servico.icone;
              return (
                <div 
                  key={servico.id} 
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border h-full flex flex-col ${
                    servico.destaque ? 'border-primary shadow-md' : 'border-gray-100'
                  } relative`}
                >
                  {servico.destaque && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-body font-semibold flex items-center gap-1 shadow-md whitespace-nowrap">
                      <Sparkles size={12} /> MAIS PROCURADO
                    </div>
                  )}
                  
                  {/* Conteúdo do Card - Flex Column para alinhamento perfeito */}
                  <div className="p-6 flex flex-col h-full">
                    
                    {/* Cabeçalho: Ícone + Título + Duração */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        servico.destaque ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        <IconComponent size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-title text-lg text-secondary font-bold leading-tight mb-1">
                          {servico.titulo}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock size={12} />
                          <span className="font-body">{servico.duracao}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Descrição - Altura fixa para alinhamento */}
                    <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
                      {servico.descricao}
                    </p>
                    
                    {/* Lista de Benefícios - Cresce para preencher espaço */}
                    <div className="mb-4 flex-1">
                      <p className="font-body text-xs font-semibold text-secondary mb-2 uppercase tracking-wider">
                        O que está incluso:
                      </p>
                      <ul className="space-y-2">
                        {servico.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="font-body">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Preço e Botão - Sempre no final */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="font-body text-xs text-gray-500 mb-1">Investimento</p>
                          <p className="font-title text-2xl text-secondary font-bold">{servico.preco}</p>
                          {servico.id === 3 && (
                            <p className="font-body text-xs text-gray-400 mt-1">ou 3x R$ 199,00</p>
                          )}
                        </div>
                        <Link 
                          to="/contato" 
                          className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all flex items-center gap-1.5 ${
                            servico.destaque 
                              ? 'bg-primary text-white hover:bg-primary/90' 
                              : 'bg-secondary text-white hover:bg-secondary/90'
                          }`}
                        >
                          Agendar <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INFORMAÇÕES ADICIONAIS - ATENDIMENTO DOMICILIAR */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-title text-lg text-secondary mb-1">Atendimento Domiciliar</h3>
                <p className="font-body text-gray-600 text-sm">
                  Para pacientes com mobilidade reduzida ou que preferem atendimento em casa, ofereço consultas domiciliares em Brasília e região.
                </p>
              </div>
              <Link to="/contato" className="bg-secondary text-white px-6 py-3 rounded-full font-body text-sm font-semibold hover:bg-primary transition-colors whitespace-nowrap">
                Consultar Disponibilidade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <HelpCircle size={28} className="text-primary" />
              </div>
            </div>
            <h2 className="font-title text-2xl md:text-3xl text-secondary mb-2">Perguntas Frequentes</h2>
            <p className="font-body text-gray-600">Tire suas dúvidas sobre o atendimento</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-title text-base text-secondary mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold">Q:</span>
                  <span>{faq.pergunta}</span>
                </h4>
                <p className="font-body text-sm text-gray-600 ml-6">
                  <span className="text-primary font-bold mr-2">A:</span>
                  {faq.resposta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-title text-3xl md:text-4xl mb-4">Pronta para começar?</h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Escolha o serviço ideal para você e agende sua consulta. Será um prazer fazer parte da sua jornada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all shadow-lg">
              Agendar Consulta
            </Link>
            <a href={`https://wa.me/55${nutriInfo.contato.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-body font-semibold text-lg transition-all">
              Dúvidas? Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;