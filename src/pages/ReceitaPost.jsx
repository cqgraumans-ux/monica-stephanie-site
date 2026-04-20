import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  ChefHat,
  Flame,
  Users,
  ArrowLeft,
  ArrowRight,
  Heart,
  Printer,
  Share2,
  Bookmark,
  CheckCircle,
  Coffee,
  Soup,
  Fish,
  Egg,
  Carrot,
  Salad,
  Apple,
  Utensils
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const ReceitaPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [receita, setReceita] = useState(null);
  const [receitasRelacionadas, setReceitasRelacionadas] = useState([]);
  const [receitaAnterior, setReceitaAnterior] = useState(null);
  const [proximaReceita, setProximaReceita] = useState(null);
  const [porcoes, setPorcoes] = useState(1);

  // Dados completos das receitas (expandidos)
  const receitasCompletas = [
    {
      id: 1,
      titulo: 'Panqueca de Banana com Aveia',
      descricao: 'Café da manhã saudável e delicioso, pronto em 10 minutos.',
      imagem: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '10 min',
      dificuldade: 'Fácil',
      calorias: 180,
      porcoesBase: 2,
      categoria: 'Café da Manhã',
      iconeCategoria: Coffee,
      ingredientes: [
        { nome: 'Banana madura', quantidade: 1, unidade: 'unidade' },
        { nome: 'Ovo', quantidade: 1, unidade: 'unidade' },
        { nome: 'Aveia em flocos', quantidade: 2, unidade: 'colher de sopa' },
        { nome: 'Canela em pó', quantidade: 1, unidade: 'pitada' },
        { nome: 'Mel (opcional)', quantidade: 1, unidade: 'colher de chá' },
      ],
      modoPreparo: [
        'Amasse bem a banana com um garfo até formar um purê.',
        'Adicione o ovo e misture bem até incorporar.',
        'Acrescente a aveia e a canela, mexendo até obter uma massa homogênea.',
        'Aqueça uma frigideira antiaderente em fogo médio.',
        'Despeje a massa formando pequenas panquecas (rende cerca de 4 unidades).',
        'Cozinhe por cerca de 2-3 minutos de cada lado, até dourar.',
        'Sirva com mel ou frutas frescas.',
      ],
      dicas: 'Para uma versão proteica, adicione 1 scoop de whey protein sabor baunilha.',
      destaque: true,
    },
    {
      id: 2,
      titulo: 'Salada Colorida com Molho de Iogurte',
      descricao: 'Refeição leve e nutritiva, perfeita para os dias quentes.',
      imagem: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '15 min',
      dificuldade: 'Fácil',
      calorias: 220,
      porcoesBase: 2,
      categoria: 'Saladas',
      iconeCategoria: Salad,
      ingredientes: [
        { nome: 'Folhas verdes (alface, rúcula)', quantidade: 2, unidade: 'xícaras' },
        { nome: 'Tomate cereja', quantidade: 10, unidade: 'unidades' },
        { nome: 'Pepino', quantidade: 1, unidade: 'unidade pequena' },
        { nome: 'Cenoura ralada', quantidade: 1, unidade: 'unidade média' },
        { nome: 'Iogurte natural', quantidade: 1, unidade: 'pote (170g)' },
        { nome: 'Limão', quantidade: 1, unidade: 'unidade (suco)' },
        { nome: 'Azeite de oliva', quantidade: 1, unidade: 'colher de sopa' },
        { nome: 'Sal e pimenta', quantidade: 1, unidade: 'a gosto' },
      ],
      modoPreparo: [
        'Lave bem todos os vegetais.',
        'Rasgue as folhas verdes e coloque em uma tigela grande.',
        'Corte os tomates cereja ao meio e o pepino em rodelas finas.',
        'Adicione a cenoura ralada.',
        'Para o molho: misture o iogurte, suco de limão, azeite, sal e pimenta.',
        'Despeje o molho sobre a salada e misture bem.',
        'Sirva imediatamente.',
      ],
      dicas: 'Acrescente frango desfiado ou grão-de-bico para uma refeição completa.',
      destaque: false,
    },
    {
      id: 3,
      titulo: 'Sopa de Legumes com Frango Desfiado',
      descricao: 'Reconfortante e nutritiva, ideal para os dias frios.',
      imagem: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '40 min',
      dificuldade: 'Média',
      calorias: 280,
      porcoesBase: 4,
      categoria: 'Sopas',
      iconeCategoria: Soup,
      ingredientes: [
        { nome: 'Peito de frango', quantidade: 300, unidade: 'g' },
        { nome: 'Cenoura', quantidade: 2, unidade: 'unidades médias' },
        { nome: 'Batata', quantidade: 2, unidade: 'unidades médias' },
        { nome: 'Chuchu', quantidade: 1, unidade: 'unidade' },
        { nome: 'Cebola', quantidade: 1, unidade: 'unidade' },
        { nome: 'Alho', quantidade: 2, unidade: 'dentes' },
        { nome: 'Azeite', quantidade: 1, unidade: 'colher de sopa' },
        { nome: 'Sal e cheiro-verde', quantidade: 1, unidade: 'a gosto' },
        { nome: 'Água', quantidade: 1.5, unidade: 'litros' },
      ],
      modoPreparo: [
        'Cozinhe o peito de frango em água com sal até ficar macio. Desfie e reserve.',
        'Na mesma água, cozinhe os legumes picados (cenoura, batata, chuchu) até ficarem macios.',
        'Em uma panela, refogue a cebola e o alho no azeite.',
        'Adicione os legumes cozidos com um pouco da água do cozimento.',
        'Bata parte dos legumes no liquidificador para engrossar o caldo (opcional).',
        'Volte tudo para a panela, adicione o frango desfiado.',
        'Acerte o sal e finalize com cheiro-verde.',
        'Sirva quente.',
      ],
      dicas: 'Pode adicionar macarrão cabelo de anjo ou arroz para deixar mais substanciosa.',
      destaque: false,
    },
    {
      id: 4,
      titulo: 'Salmão Assado com Ervas e Legumes',
      descricao: 'Rico em ômega 3, uma opção saudável e sofisticada.',
      imagem: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '30 min',
      dificuldade: 'Média',
      calorias: 350,
      porcoesBase: 2,
      categoria: 'Peixes',
      iconeCategoria: Fish,
      ingredientes: [
        { nome: 'Filé de salmão', quantidade: 400, unidade: 'g' },
        { nome: 'Alecrim fresco', quantidade: 2, unidade: 'ramos' },
        { nome: 'Tomilho fresco', quantidade: 2, unidade: 'ramos' },
        { nome: 'Limão', quantidade: 1, unidade: 'unidade' },
        { nome: 'Brócolis', quantidade: 1, unidade: 'maço pequeno' },
        { nome: 'Azeite de oliva', quantidade: 2, unidade: 'colheres de sopa' },
        { nome: 'Sal e pimenta', quantidade: 1, unidade: 'a gosto' },
      ],
      modoPreparo: [
        'Tempere o salmão com sal, pimenta, raspas de limão e as ervas picadas.',
        'Deixe marinar por 10 minutos.',
        'Pré-aqueça o forno a 200°C.',
        'Unte uma assadeira com azeite.',
        'Coloque o salmão e os brócolis ao redor.',
        'Regue com azeite e suco de meio limão.',
        'Asse por 15-20 minutos, até o salmão estar cozido e os legumes dourados.',
        'Sirva com fatias de limão.',
      ],
      dicas: 'Acompanha bem arroz integral ou quinoa.',
      destaque: true,
    },
    {
      id: 5,
      titulo: 'Omelete de Espinafre com Queijo Branco',
      descricao: 'Prático, rápido e rico em proteínas.',
      imagem: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '8 min',
      dificuldade: 'Fácil',
      calorias: 200,
      porcoesBase: 1,
      categoria: 'Ovos',
      iconeCategoria: Egg,
      ingredientes: [
        { nome: 'Ovos', quantidade: 2, unidade: 'unidades' },
        { nome: 'Espinafre fresco', quantidade: 1, unidade: 'xícara' },
        { nome: 'Queijo branco (minas ou ricota)', quantidade: 30, unidade: 'g' },
        { nome: 'Sal', quantidade: 1, unidade: 'pitada' },
        { nome: 'Pimenta do reino', quantidade: 1, unidade: 'a gosto' },
        { nome: 'Azeite', quantidade: 1, unidade: 'colher de chá' },
      ],
      modoPreparo: [
        'Bata os ovos com um garfo, adicione sal e pimenta.',
        'Aqueça uma frigideira antiaderente com azeite.',
        'Refogue o espinafre rapidamente até murchar.',
        'Despeje os ovos batidos sobre o espinafre.',
        'Cozinhe em fogo baixo até as bordas firmarem.',
        'Adicione o queijo branco picado sobre metade da omelete.',
        'Dobre a omelete ao meio e cozinhe por mais 1 minuto.',
        'Sirva quente.',
      ],
      dicas: 'Pode adicionar tomate picado ou cogumelos.',
      destaque: false,
    },
    {
      id: 6,
      titulo: 'Chips de Batata Doce Assada',
      descricao: 'Snack saudável e crocante para beliscar sem culpa.',
      imagem: 'https://images.pexels.com/photos/2286778/pexels-photo-2286778.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '25 min',
      dificuldade: 'Fácil',
      calorias: 120,
      porcoesBase: 2,
      categoria: 'Snacks',
      iconeCategoria: Carrot,
      ingredientes: [
        { nome: 'Batata doce', quantidade: 1, unidade: 'unidade grande' },
        { nome: 'Azeite de oliva', quantidade: 1, unidade: 'colher de sopa' },
        { nome: 'Sal', quantidade: 1, unidade: 'a gosto' },
        { nome: 'Páprica defumada', quantidade: 1, unidade: 'colher de chá' },
      ],
      modoPreparo: [
        'Pré-aqueça o forno a 200°C.',
        'Lave bem a batata doce (não precisa descascar).',
        'Corte em rodelas bem finas (use mandolina se tiver).',
        'Seque as rodelas com papel toalha.',
        'Em uma tigela, misture as rodelas com azeite, sal e páprica.',
        'Distribua em uma assadeira sem sobrepor.',
        'Asse por 15-20 minutos, virando na metade do tempo.',
        'Retire quando estiverem douradas e crocantes.',
      ],
      dicas: 'Consuma no mesmo dia para manter a crocância.',
      destaque: false,
    },
    {
      id: 7,
      titulo: 'Bowl de Açaí com Frutas e Granola',
      descricao: 'Energia e sabor para o pós-treino ou café da manhã.',
      imagem: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '5 min',
      dificuldade: 'Fácil',
      calorias: 300,
      porcoesBase: 1,
      categoria: 'Lanches',
      iconeCategoria: Apple,
      ingredientes: [
        { nome: 'Açaí puro (polpa)', quantidade: 100, unidade: 'g' },
        { nome: 'Banana', quantidade: 1, unidade: 'unidade' },
        { nome: 'Morango', quantidade: 5, unidade: 'unidades' },
        { nome: 'Granola sem açúcar', quantidade: 2, unidade: 'colheres de sopa' },
        { nome: 'Mel (opcional)', quantidade: 1, unidade: 'colher de chá' },
      ],
      modoPreparo: [
        'Bata a polpa de açaí com meia banana congelada até obter um creme espesso.',
        'Despeje em uma tigela.',
        'Corte a outra metade da banana e os morangos.',
        'Disponha as frutas sobre o açaí.',
        'Polvilhe a granola.',
        'Regue com mel se desejar.',
        'Sirva imediatamente.',
      ],
      dicas: 'Use frutas congeladas para um bowl mais cremoso.',
      destaque: false,
    },
    {
      id: 8,
      titulo: 'Bolo de Cenoura Fit com Cobertura de Chocolate',
      descricao: 'Versão saudável do clássico, sem açúcar refinado.',
      imagem: 'https://images.pexels.com/photos/8308923/pexels-photo-8308923.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tempo: '50 min',
      dificuldade: 'Média',
      calorias: 190,
      porcoesBase: 8,
      categoria: 'Bolos',
      iconeCategoria: ChefHat,
      ingredientes: [
        { nome: 'Cenoura', quantidade: 3, unidade: 'unidades médias' },
        { nome: 'Ovos', quantidade: 3, unidade: 'unidades' },
        { nome: 'Farinha de aveia', quantidade: 2, unidade: 'xícaras' },
        { nome: 'Adoçante culinário', quantidade: 1, unidade: 'xícara' },
        { nome: 'Óleo de coco', quantidade: 1, unidade: 'xícara' },
        { nome: 'Fermento em pó', quantidade: 1, unidade: 'colher de sopa' },
        { nome: 'Cacau em pó 70%', quantidade: 4, unidade: 'colheres de sopa' },
        { nome: 'Leite desnatado', quantidade: 4, unidade: 'colheres de sopa' },
      ],
      modoPreparo: [
        'Pré-aqueça o forno a 180°C.',
        'No liquidificador, bata as cenouras picadas, ovos e óleo de coco.',
        'Transfira para uma tigela e adicione a farinha de aveia e o adoçante. Misture bem.',
        'Por último, adicione o fermento e misture delicadamente.',
        'Despeje em forma untada e asse por 35-40 minutos.',
        'Para a cobertura: misture o cacau em pó com o leite e leve ao fogo baixo até engrossar.',
        'Adoce a gosto.',
        'Cubra o bolo já frio com a calda de chocolate.',
      ],
      dicas: 'Guarde na geladeira por até 5 dias.',
      destaque: true,
    },
  ];

  // Carregar receita atual
  useEffect(() => {
    const receitaAtual = receitasCompletas.find(r => r.id === parseInt(id));
    if (receitaAtual) {
      setReceita(receitaAtual);
      setPorcoes(receitaAtual.porcoesBase);
      
      // Receitas relacionadas (mesma categoria)
      const relacionadas = receitasCompletas
        .filter(r => r.categoria === receitaAtual.categoria && r.id !== receitaAtual.id)
        .slice(0, 3);
      setReceitasRelacionadas(relacionadas);
      
      // Navegação anterior/próximo
      const indexAtual = receitasCompletas.findIndex(r => r.id === parseInt(id));
      setReceitaAnterior(indexAtual > 0 ? receitasCompletas[indexAtual - 1] : null);
      setProximaReceita(indexAtual < receitasCompletas.length - 1 ? receitasCompletas[indexAtual + 1] : null);
    }
  }, [id]);

  // Ajustar quantidades conforme porções
  const ajustarQuantidade = (quantidadeBase) => {
    if (!receita) return quantidadeBase;
    const fator = porcoes / receita.porcoesBase;
    return Math.round(quantidadeBase * fator * 10) / 10;
  };

  // Função para erro de imagem
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200';
  };

  if (!receita) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-body text-gray-500">Carregando receita...</p>
      </div>
    );
  }

  const IconeCategoria = receita.iconeCategoria;

  return (
    <div>
      {/* 1. HERO DA RECEITA */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-12 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link to="/receitas" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Receitas
            </Link>
            <span>/</span>
            <span className="text-white">{receita.categoria}</span>
          </div>
          
          {/* Título e Meta */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-body flex items-center gap-1">
                <IconeCategoria size={12} />
                {receita.categoria}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-200">
                <Clock size={14} /> {receita.tempo}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-200">
                <ChefHat size={14} /> {receita.dificuldade}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-200">
                <Flame size={14} /> {receita.calorias} kcal
              </span>
            </div>
            <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              {receita.titulo}
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-3xl drop-shadow-md">
              {receita.descricao}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Coluna Esquerda - Imagem e Modo de Preparo */}
            <div className="lg:w-2/3">
              {/* Imagem */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src={receita.imagem} 
                  alt={receita.titulo}
                  onError={handleImageError}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              
              {/* Ações */}
              <div className="flex items-center gap-4 mb-8">
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Heart size={18} /> Salvar
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Printer size={18} /> Imprimir
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Share2 size={18} /> Compartilhar
                </button>
              </div>
              
              {/* Modo de Preparo */}
              <div className="mb-8">
                <h2 className="font-title text-2xl text-secondary mb-4">Modo de Preparo</h2>
                <ol className="space-y-3">
                  {receita.modoPreparo.map((passo, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-body flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="font-body text-gray-700">{passo}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* Dicas */}
              {receita.dicas && (
                <div className="bg-light p-5 rounded-xl border border-gray-200">
                  <h3 className="font-title text-lg text-secondary mb-2">💡 Dica da Nutri</h3>
                  <p className="font-body text-gray-600">{receita.dicas}</p>
                </div>
              )}
              
              {/* Navegação entre Receitas */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {receitaAnterior ? (
                  <Link 
                    to={`/receitas/${receitaAnterior.id}`}
                    className="flex items-center gap-3 p-4 bg-light rounded-xl hover:shadow-md transition-all group"
                  >
                    <ArrowLeft size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-body text-xs text-gray-500">Anterior</p>
                      <p className="font-body text-sm text-secondary font-semibold line-clamp-1">{receitaAnterior.titulo}</p>
                    </div>
                  </Link>
                ) : <div></div>}
                
                {proximaReceita ? (
                  <Link 
                    to={`/receitas/${proximaReceita.id}`}
                    className="flex items-center justify-end gap-3 p-4 bg-light rounded-xl hover:shadow-md transition-all group text-right"
                  >
                    <div>
                      <p className="font-body text-xs text-gray-500">Próxima</p>
                      <p className="font-body text-sm text-secondary font-semibold line-clamp-1">{proximaReceita.titulo}</p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </Link>
                ) : <div></div>}
              </div>
            </div>
            
            {/* Coluna Direita - Ingredientes e Info */}
            <div className="lg:w-1/3 space-y-6">
              {/* Ajuste de Porções */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-title text-lg text-secondary flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    Porções
                  </h3>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setPorcoes(Math.max(1, porcoes - 1))}
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    >
                      -
                    </button>
                    <span className="font-body font-semibold text-secondary w-8 text-center">{porcoes}</span>
                    <button 
                      onClick={() => setPorcoes(porcoes + 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-body text-xs text-gray-500">
                  Receita original para {receita.porcoesBase} {receita.porcoesBase > 1 ? 'porções' : 'porção'}
                </p>
              </div>
              
              {/* Ingredientes */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-title text-lg text-secondary mb-4 flex items-center gap-2">
                  <Utensils size={20} className="text-primary" />
                  Ingredientes
                </h3>
                <ul className="space-y-2">
                  {receita.ingredientes.map((ing, index) => (
                    <li key={index} className="flex items-start gap-3 py-1 border-b border-gray-100 last:border-0">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gray-700">
                        <strong>{ajustarQuantidade(ing.quantidade)} {ing.unidade}</strong> de {ing.nome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Informação Nutricional (Estimada) */}
              <div className="bg-light rounded-2xl p-6 border border-gray-200">
                <h3 className="font-title text-lg text-secondary mb-3">Informação Nutricional</h3>
                <p className="font-body text-xs text-gray-500 mb-3">*Valores aproximados por porção</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-body text-gray-600">Calorias:</span>
                    <span className="font-body font-semibold text-secondary">{Math.round(receita.calorias / receita.porcoesBase)} kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-gray-600">Tempo de preparo:</span>
                    <span className="font-body font-semibold text-secondary">{receita.tempo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-gray-600">Dificuldade:</span>
                    <span className="font-body font-semibold text-secondary">{receita.dificuldade}</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Consulta */}
              <div className="bg-primary rounded-2xl shadow-lg overflow-hidden p-6 text-white">
                <h3 className="font-title text-xl mb-2">Gostou da receita?</h3>
                <p className="font-body text-sm mb-4 opacity-90">
                  Agende uma consulta e receba um plano alimentar com receitas exclusivas!
                </p>
                <Link
                  to="/contato"
                  className="block w-full bg-white text-primary text-center py-3 rounded-full font-body font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  Agendar Consulta
                </Link>
              </div>
              
              {/* Receitas Relacionadas */}
              {receitasRelacionadas.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-title text-lg text-secondary mb-4">Receitas Relacionadas</h3>
                  <div className="space-y-4">
                    {receitasRelacionadas.map((rel) => (
                      <Link key={rel.id} to={`/receitas/${rel.id}`} className="flex gap-3 group">
                        <img 
                          src={rel.imagem} 
                          alt={rel.titulo}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-body text-sm text-secondary font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {rel.titulo}
                          </p>
                          <p className="font-body text-xs text-gray-500">{rel.tempo} • {rel.calorias} kcal</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReceitaPost;