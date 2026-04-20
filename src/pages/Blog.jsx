import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Brain,
  Apple,
  Salad,
  Scale,
  Dumbbell,
  Utensils,
  Droplets,
  Activity
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const Blog = () => {
  // Estados para busca e filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const artigosPorPagina = 6;

  // Dados dos artigos com URLs de imagens confiáveis
  const artigos = [
    {
      id: 1,
      titulo: '5 Alimentos que Ajudam a Reduzir a Ansiedade',
      resumo: 'Descubra como a alimentação pode ser uma aliada no controle da ansiedade e melhore sua qualidade de vida.',
      imagem: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '15 Abr 2026',
      tempoLeitura: '5 min',
      categoria: 'Saúde Mental',
      iconeCategoria: Brain,
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Guia Completo: Como Montar um Prato Saudável',
      resumo: 'Aprenda o método do prato ideal para garantir todos os nutrientes que seu corpo precisa em cada refeição.',
      imagem: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '10 Abr 2026',
      tempoLeitura: '8 min',
      categoria: 'Alimentação Saudável',
      iconeCategoria: Apple,
      destaque: false,
    },
    {
      id: 3,
      titulo: 'Nutrição Comportamental: O que é e como pode te ajudar',
      resumo: 'Entenda como essa abordagem inovadora pode transformar sua relação com a comida e facilitar o emagrecimento.',
      imagem: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '05 Abr 2026',
      tempoLeitura: '6 min',
      categoria: 'Comportamento',
      iconeCategoria: Heart,
      destaque: false,
    },
    {
      id: 4,
      titulo: 'Receitas Low Carb para o Café da Manhã',
      resumo: 'Opções deliciosas e práticas para começar o dia com energia e sem sair da dieta low carb.',
      imagem: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '01 Abr 2026',
      tempoLeitura: '4 min',
      categoria: 'Receitas',
      iconeCategoria: Utensils,
      destaque: false,
    },
    {
      id: 5,
      titulo: 'A Importância da Hidratação para o Emagrecimento',
      resumo: 'Beber água vai muito além de matar a sede. Descubra como a hidratação adequada potencializa a perda de peso.',
      imagem: 'https://images.pexels.com/photos/3270908/pexels-photo-3270908.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '28 Mar 2026',
      tempoLeitura: '5 min',
      categoria: 'Emagrecimento',
      iconeCategoria: Scale,
      destaque: false,
    },
    {
      id: 6,
      titulo: 'Suplementação para Iniciantes na Musculação',
      resumo: 'Whey protein, creatina, BCAA... Saiba o que realmente funciona e o que é apenas marketing.',
      imagem: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '20 Mar 2026',
      tempoLeitura: '7 min',
      categoria: 'Esportes',
      iconeCategoria: Dumbbell,
      destaque: false,
    },
    {
      id: 7,
      titulo: 'Como Melhorar a Imunidade Através da Alimentação',
      resumo: 'Alimentos que fortalecem seu sistema imunológico e ajudam a prevenir doenças.',
      imagem: 'https://images.pexels.com/photos/2325841/pexels-photo-2325841.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '15 Mar 2026',
      tempoLeitura: '6 min',
      categoria: 'Saúde',
      iconeCategoria: Activity,
      destaque: false,
    },
    {
      id: 8,
      titulo: '10 Dicas para Comer Bem Fora de Casa',
      resumo: 'Estratégias práticas para manter uma alimentação saudável mesmo com a rotina corrida de trabalho.',
      imagem: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
      data: '10 Mar 2026',
      tempoLeitura: '5 min',
      categoria: 'Dicas Práticas',
      iconeCategoria: Salad,
      destaque: false,
    },
  ];

  // Extrair categorias únicas
  const categorias = ['Todas', ...new Set(artigos.map(artigo => artigo.categoria))];

  // Filtrar artigos
  const artigosFiltrados = artigos.filter(artigo => {
    const matchSearch = artigo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       artigo.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategoria = categoriaAtiva === 'Todas' || artigo.categoria === categoriaAtiva;
    return matchSearch && matchCategoria;
  });

  // Paginação
  const totalPaginas = Math.ceil(artigosFiltrados.length / artigosPorPagina);
  const inicio = (paginaAtual - 1) * artigosPorPagina;
  const fim = inicio + artigosPorPagina;
  const artigosPaginados = artigosFiltrados.slice(inicio, fim);

  // Resetar para página 1 ao filtrar
  const handleCategoriaChange = (categoria) => {
    setCategoriaAtiva(categoria);
    setPaginaAtual(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPaginaAtual(1);
  };

  // Função para lidar com erro de imagem
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600';
  };

  return (
    <div>
      {/* 1. HERO - COM CONTRASTE GARANTIDO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Blog NutriVida
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Artigos, dicas e receitas para uma vida mais saudável e equilibrada
          </p>
        </div>
      </section>

      {/* 2. BARRA DE BUSCA E FILTROS */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Campo de Busca */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoriaChange(cat)}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                    categoriaAtiva === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID DE ARTIGOS */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          {artigosPaginados.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-gray-500 text-lg">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artigosPaginados.map((artigo) => {
                const IconeCategoria = artigo.iconeCategoria;
                return (
                  <article 
                    key={artigo.id} 
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                  >
                    {/* Imagem */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img 
                        src={artigo.imagem} 
                        alt={artigo.titulo}
                        onError={handleImageError}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {artigo.destaque && (
                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-body font-semibold shadow-md">
                          Destaque
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-body flex items-center gap-1 shadow-md">
                        <IconeCategoria size={12} />
                        {artigo.categoria}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {artigo.data}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {artigo.tempoLeitura} de leitura
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="font-title text-lg text-secondary font-bold mb-2 leading-tight hover:text-primary transition-colors">
                        <Link to={`/blog/${artigo.id}`}>
                          {artigo.titulo}
                        </Link>
                      </h3>

                      {/* Resumo */}
                      <p className="font-body text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                        {artigo.resumo}
                      </p>

                      {/* Link */}
                      <Link 
                        to={`/blog/${artigo.id}`}
                        className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold hover:gap-3 transition-all"
                      >
                        Ler artigo <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* 4. PAGINAÇÃO */}
          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setPaginaAtual(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600"
              >
                <ChevronLeft size={18} />
              </button>

              {[...Array(totalPaginas)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPaginaAtual(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-body transition-all ${
                    paginaAtual === i + 1
                      ? 'bg-primary text-white shadow-md'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPaginaAtual(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-title text-3xl md:text-4xl mb-4">Gostou do conteúdo?</h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta e receba orientação nutricional personalizada para seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all shadow-lg">
              Agendar Consulta
            </Link>
            <a href={`https://wa.me/55${nutriInfo.contato.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-body font-semibold text-lg transition-all">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;