import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  ChefHat,
  Flame,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Coffee,
  Soup,
  Fish,
  Egg,
  Carrot,
  Salad,
  Apple
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const Receitas = () => {
  // Estados
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const receitasPorPagina = 6;

  // Dados das receitas
  const receitas = [
    {
      id: 1,
      titulo: 'Panqueca de Banana com Aveia',
      descricao: 'Café da manhã saudável e delicioso, pronto em 10 minutos.',
      imagem: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '10 min',
      dificuldade: 'Fácil',
      calorias: '180 kcal',
      porcoes: 2,
      categoria: 'Café da Manhã',
      iconeCategoria: Coffee,
      ingredientes: ['1 banana madura', '1 ovo', '2 colheres de aveia', 'Canela a gosto'],
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Salada Colorida com Molho de Iogurte',
      descricao: 'Refeição leve e nutritiva, perfeita para os dias quentes.',
      imagem: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '15 min',
      dificuldade: 'Fácil',
      calorias: '220 kcal',
      porcoes: 2,
      categoria: 'Saladas',
      iconeCategoria: Salad,
      ingredientes: ['Folhas verdes', 'Tomate cereja', 'Pepino', 'Cenoura ralada', 'Iogurte natural'],
      destaque: false,
    },
    {
      id: 3,
      titulo: 'Sopa de Legumes com Frango Desfiado',
      descricao: 'Reconfortante e nutritiva, ideal para os dias frios.',
      imagem: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '40 min',
      dificuldade: 'Média',
      calorias: '280 kcal',
      porcoes: 4,
      categoria: 'Sopas',
      iconeCategoria: Soup,
      ingredientes: ['Peito de frango', 'Cenoura', 'Batata', 'Chuchu', 'Cebola', 'Alho'],
      destaque: false,
    },
    {
      id: 4,
      titulo: 'Salmão Assado com Ervas e Legumes',
      descricao: 'Rico em ômega 3, uma opção saudável e sofisticada.',
      imagem: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '30 min',
      dificuldade: 'Média',
      calorias: '350 kcal',
      porcoes: 2,
      categoria: 'Peixes',
      iconeCategoria: Fish,
      ingredientes: ['Filé de salmão', 'Alecrim', 'Tomilho', 'Limão', 'Brócolis'],
      destaque: true,
    },
    {
      id: 5,
      titulo: 'Omelete de Espinafre com Queijo Branco',
      descricao: 'Prático, rápido e rico em proteínas.',
      imagem: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '8 min',
      dificuldade: 'Fácil',
      calorias: '200 kcal',
      porcoes: 1,
      categoria: 'Ovos',
      iconeCategoria: Egg,
      ingredientes: ['2 ovos', 'Espinafre', 'Queijo branco', 'Sal', 'Pimenta'],
      destaque: false,
    },
    {
      id: 6,
      titulo: 'Chips de Batata Doce Assada',
      descricao: 'Snack saudável e crocante para beliscar sem culpa.',
      imagem: 'https://images.pexels.com/photos/2286778/pexels-photo-2286778.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '25 min',
      dificuldade: 'Fácil',
      calorias: '120 kcal',
      porcoes: 2,
      categoria: 'Snacks',
      iconeCategoria: Carrot,
      ingredientes: ['Batata doce', 'Azeite', 'Sal', 'Páprica'],
      destaque: false,
    },
    {
      id: 7,
      titulo: 'Bowl de Açaí com Frutas e Granola',
      descricao: 'Energia e sabor para o pós-treino ou café da manhã.',
      imagem: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '5 min',
      dificuldade: 'Fácil',
      calorias: '300 kcal',
      porcoes: 1,
      categoria: 'Lanches',
      iconeCategoria: Apple,
      ingredientes: ['Açaí puro', 'Banana', 'Morango', 'Granola', 'Mel'],
      destaque: false,
    },
    {
      id: 8,
      titulo: 'Bolo de Cenoura Fit com Cobertura de Chocolate',
      descricao: 'Versão saudável do clássico, sem açúcar refinado.',
      imagem: 'https://images.pexels.com/photos/8308923/pexels-photo-8308923.jpeg?auto=compress&cs=tinysrgb&w=600',
      tempo: '50 min',
      dificuldade: 'Média',
      calorias: '190 kcal',
      porcoes: 8,
      categoria: 'Bolos',
      iconeCategoria: ChefHat,
      ingredientes: ['Cenoura', 'Farinha de aveia', 'Ovos', 'Adoçante', 'Cacau em pó'],
      destaque: true,
    },
  ];

  // Extrair categorias únicas (com verificação de segurança)
  const categorias = receitas && receitas.length > 0 
    ? ['Todas', ...new Set(receitas.map(r => r.categoria))]
    : ['Todas'];

  // Filtrar receitas (com verificação de segurança)
  const receitasFiltradas = receitas && receitas.length > 0
    ? receitas.filter(receita => {
        const matchSearch = receita.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           receita.descricao.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategoria = categoriaAtiva === 'Todas' || receita.categoria === categoriaAtiva;
        return matchSearch && matchCategoria;
      })
    : [];

  // Paginação (com verificação de segurança)
  const totalPaginas = Math.ceil(receitasFiltradas.length / receitasPorPagina) || 1;
  const inicio = (paginaAtual - 1) * receitasPorPagina;
  const fim = inicio + receitasPorPagina;
  const receitasPaginadas = receitasFiltradas.slice(inicio, fim);

  // Resetar página ao filtrar
  const handleCategoriaChange = (categoria) => {
    setCategoriaAtiva(categoria);
    setPaginaAtual(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPaginaAtual(1);
  };

  // Fallback para imagem
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600';
  };

  return (
    <div>
      {/* 1. HERO - CONTRASTE GARANTIDO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Receitas Saudáveis
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Delícias nutritivas para todas as refeições do seu dia
          </p>
        </div>
      </section>

      {/* 2. BUSCA E FILTROS */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Campo de Busca */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar receitas..."
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

      {/* 3. GRID DE RECEITAS */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          {receitasPaginadas.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-gray-500 text-lg">Nenhuma receita encontrada.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {receitasPaginadas.map((receita) => {
                const IconeCategoria = receita.iconeCategoria;
                return (
                  <article 
                    key={receita.id} 
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                  >
                    {/* Imagem */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img 
                        src={receita.imagem} 
                        alt={receita.titulo}
                        onError={handleImageError}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {receita.destaque && (
                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-body font-semibold shadow-md flex items-center gap-1">
                          <Heart size={12} fill="white" /> Destaque
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-body flex items-center gap-1 shadow-md">
                        <IconeCategoria size={12} />
                        {receita.categoria}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta info */}
                      <div className="flex items-center flex-wrap gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {receita.tempo}
                        </span>
                        <span className="flex items-center gap-1">
                          <ChefHat size={12} /> {receita.dificuldade}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame size={12} /> {receita.calorias}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={12} /> {receita.porcoes} {receita.porcoes > 1 ? 'porções' : 'porção'}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="font-title text-lg text-secondary font-bold mb-2 leading-tight hover:text-primary transition-colors">
                        <Link to={`/receitas/${receita.id}`}>
                          {receita.titulo}
                        </Link>
                      </h3>

                      {/* Descrição */}
                      <p className="font-body text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                        {receita.descricao}
                      </p>

                      {/* Ingredientes resumidos */}
                      {receita.ingredientes && receita.ingredientes.length > 0 && (
                        <div className="mb-4">
                          <p className="font-body text-xs font-semibold text-secondary mb-2">Ingredientes principais:</p>
                          <div className="flex flex-wrap gap-1">
                            {receita.ingredientes.slice(0, 3).map((ing, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-body">
                                {ing}
                              </span>
                            ))}
                            {receita.ingredientes.length > 3 && (
                              <span className="text-primary text-xs font-body">+{receita.ingredientes.length - 3}</span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Link */}
                      <Link 
                        to={`/receitas/${receita.id}`}
                        className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold hover:gap-3 transition-all"
                      >
                        Ver receita completa <ArrowRight size={14} />
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
          <h2 className="font-title text-3xl md:text-4xl mb-4">Quer um plano alimentar personalizado?</h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta e receba receitas exclusivas adaptadas aos seus objetivos e preferências.
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

export default Receitas;