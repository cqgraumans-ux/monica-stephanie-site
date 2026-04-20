import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Heart,
  Brain,
  Apple,
  Salad,
  Scale,
  Dumbbell,
  Utensils,
  Droplets,
  Activity,
  Share2,
  Bookmark,
  MessageCircle,
  Star,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artigo, setArtigo] = useState(null);
  const [artigosRelacionados, setArtigosRelacionados] = useState([]);
  const [postAnterior, setPostAnterior] = useState(null);
  const [proximoPost, setProximoPost] = useState(null);

  // Dados completos dos artigos (mesmo array do Blog, mas com conteúdo expandido)
  const artigosCompletos = [
    {
      id: 1,
      titulo: '5 Alimentos que Ajudam a Reduzir a Ansiedade',
      resumo: 'Descubra como a alimentação pode ser uma aliada no controle da ansiedade e melhore sua qualidade de vida.',
      imagem: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '15 Abr 2026',
      tempoLeitura: '5 min',
      categoria: 'Saúde Mental',
      iconeCategoria: Brain,
      conteudo: `
        <p>A ansiedade é um dos males mais comuns da vida moderna. Mas você sabia que a alimentação pode ser uma grande aliada no controle dos sintomas? Confira 5 alimentos que ajudam a acalmar a mente:</p>
        
        <h3>1. Banana</h3>
        <p>Rica em triptofano, aminoácido precursor da serotonina (hormônio do bem-estar), a banana ajuda a regular o humor e reduzir a irritabilidade. Consuma 1 unidade por dia, preferencialmente pela manhã.</p>
        
        <h3>2. Castanha-do-Pará</h3>
        <p>Fonte de selênio, mineral com potente ação antioxidante que protege o cérebro do estresse oxidativo. Estudos mostram que baixos níveis de selênio estão associados a maior risco de depressão e ansiedade. Apenas 1 unidade por dia já supre suas necessidades!</p>
        
        <h3>3. Chá de Camomila</h3>
        <p>A camomila contém apigenina, um flavonoide que se liga aos receptores GABA no cérebro, promovendo efeito calmante e relaxante. Tome uma xícara antes de dormir para melhorar a qualidade do sono.</p>
        
        <h3>4. Chocolate Amargo (70% cacau ou mais)</h3>
        <p>Rico em flavonoides e magnésio, o chocolate amargo reduz os níveis de cortisol (hormônio do estresse) e aumenta a produção de endorfinas. Limite-se a 30g por dia para não exagerar nas calorias.</p>
        
        <h3>5. Iogurte Natural</h3>
        <p>Os probióticos presentes no iogurte melhoram a saúde intestinal, e um intestino saudável está diretamente ligado a uma mente mais equilibrada (eixo intestino-cérebro). Prefira versões sem adição de açúcar.</p>
        
        <h3>Dica Extra</h3>
        <p>Evite cafeína em excesso, açúcar refinado e alimentos ultraprocessados, que podem piorar os sintomas de ansiedade. Mantenha-se hidratado e pratique atividade física regularmente!</p>
      `,
    },
    {
      id: 2,
      titulo: 'Guia Completo: Como Montar um Prato Saudável',
      resumo: 'Aprenda o método do prato ideal para garantir todos os nutrientes que seu corpo precisa em cada refeição.',
      imagem: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '10 Abr 2026',
      tempoLeitura: '8 min',
      categoria: 'Alimentação Saudável',
      iconeCategoria: Apple,
      conteudo: `
        <p>Montar um prato equilibrado não precisa ser complicado. Com o método do prato, você garante todos os nutrientes necessários sem precisar contar calorias. Aprenda o passo a passo:</p>
        
        <h3>A Regra das 4 Partes</h3>
        <p>Divida seu prato (de sobremesa, cerca de 23cm) mentalmente em 4 partes:</p>
        <ul>
          <li><strong>50% do prato (2 partes):</strong> Vegetais crus e cozidos (folhas verdes, tomate, cenoura, beterraba, brócolis, abobrinha)</li>
          <li><strong>25% do prato (1 parte):</strong> Carboidratos integrais (arroz integral, batata-doce, quinoa, mandioca)</li>
          <li><strong>25% do prato (1 parte):</strong> Proteínas magras (frango, peixe, ovos, tofu, leguminosas como feijão e lentilha)</li>
        </ul>
        
        <h3>Exemplo Prático</h3>
        <p><strong>Almoço equilibrado:</strong> 2 colheres de arroz integral + 1 concha de feijão + 1 filé de frango grelhado + salada de folhas verdes à vontade + legumes refogados.</p>
        
        <h3>Gorduras Boas</h3>
        <p>Adicione uma fonte de gordura saudável: 1 fio de azeite de oliva extra virgem, 1/4 de abacate, ou 1 colher de sopa de sementes (chia, linhaça, gergelim).</p>
        
        <h3>Bebida</h3>
        <p>Acompanhe com água ou água saborizada naturalmente (com rodelas de limão, laranja ou folhas de hortelã). Evite refrigerantes e sucos industrializados.</p>
      `,
    },
    {
      id: 3,
      titulo: 'Nutrição Comportamental: O que é e como pode te ajudar',
      resumo: 'Entenda como essa abordagem inovadora pode transformar sua relação com a comida e facilitar o emagrecimento.',
      imagem: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '05 Abr 2026',
      tempoLeitura: '6 min',
      categoria: 'Comportamento',
      iconeCategoria: Heart,
      conteudo: `
        <p>Você já tentou várias dietas, emagreceu e engordou novamente? A Nutrição Comportamental pode ser a chave para quebrar esse ciclo.</p>
        
        <h3>O que é Nutrição Comportamental?</h3>
        <p>É uma abordagem que une os conhecimentos da nutrição com os da psicologia, entendendo que o ato de comer vai muito além dos nutrientes. Envolve emoções, memórias, cultura, ambiente social e crenças.</p>
        
        <h3>Principais Pilares</h3>
        <ul>
          <li><strong>Comer Intuitivo:</strong> Reconectar-se com os sinais de fome e saciedade do corpo, comendo quando tem fome e parando quando está satisfeito.</li>
          <li><strong>Comer com Atenção Plena (Mindful Eating):</strong> Estar presente durante a refeição, saboreando cada garfada, sem distrações como TV ou celular.</li>
          <li><strong>Fim da Mentalidade de Dieta:</strong> Abandonar a ideia de "certo x errado", "permitido x proibido", e construir uma relação mais flexível e gentil com a comida.</li>
        </ul>
        
        <h3>Como Funciona na Prática?</h3>
        <p>Nas consultas, trabalhamos para identificar os gatilhos emocionais que te levam a comer sem fome física (ansiedade, tédio, tristeza). Aprendemos estratégias para lidar com essas emoções sem usar a comida como válvula de escape.</p>
        
        <h3>Benefícios</h3>
        <p>Pacientes que adotam essa abordagem relatam: melhora da autoestima, redução da compulsão alimentar, perda de peso sustentável e, principalmente, mais prazer ao comer.</p>
      `,
    },
    // Artigos 4-8 mantidos com conteúdo similar (resumido por brevidade)
    {
      id: 4,
      titulo: 'Receitas Low Carb para o Café da Manhã',
      resumo: 'Opções deliciosas e práticas para começar o dia com energia e sem sair da dieta low carb.',
      imagem: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '01 Abr 2026',
      tempoLeitura: '4 min',
      categoria: 'Receitas',
      iconeCategoria: Utensils,
      conteudo: '<p>Conteúdo completo da receita aqui...</p>',
    },
    {
      id: 5,
      titulo: 'A Importância da Hidratação para o Emagrecimento',
      resumo: 'Beber água vai muito além de matar a sede.',
      imagem: 'https://images.pexels.com/photos/3270908/pexels-photo-3270908.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '28 Mar 2026',
      tempoLeitura: '5 min',
      categoria: 'Emagrecimento',
      iconeCategoria: Scale,
      conteudo: '<p>Conteúdo completo sobre hidratação aqui...</p>',
    },
    {
      id: 6,
      titulo: 'Suplementação para Iniciantes na Musculação',
      resumo: 'Whey protein, creatina, BCAA... Saiba o que realmente funciona.',
      imagem: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '20 Mar 2026',
      tempoLeitura: '7 min',
      categoria: 'Esportes',
      iconeCategoria: Dumbbell,
      conteudo: '<p>Conteúdo completo sobre suplementação aqui...</p>',
    },
    {
      id: 7,
      titulo: 'Como Melhorar a Imunidade Através da Alimentação',
      resumo: 'Alimentos que fortalecem seu sistema imunológico.',
      imagem: 'https://images.pexels.com/photos/2325841/pexels-photo-2325841.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '15 Mar 2026',
      tempoLeitura: '6 min',
      categoria: 'Saúde',
      iconeCategoria: Activity,
      conteudo: '<p>Conteúdo completo sobre imunidade aqui...</p>',
    },
    {
      id: 8,
      titulo: '10 Dicas para Comer Bem Fora de Casa',
      resumo: 'Estratégias práticas para manter uma alimentação saudável na correria.',
      imagem: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200',
      data: '10 Mar 2026',
      tempoLeitura: '5 min',
      categoria: 'Dicas Práticas',
      iconeCategoria: Salad,
      conteudo: '<p>Conteúdo completo sobre alimentação fora de casa aqui...</p>',
    },
  ];

  // Carregar artigo atual e navegação
  useEffect(() => {
    const artigoAtual = artigosCompletos.find(a => a.id === parseInt(id));
    if (artigoAtual) {
      setArtigo(artigoAtual);
      
      // Artigos relacionados (mesma categoria)
      const relacionados = artigosCompletos
        .filter(a => a.categoria === artigoAtual.categoria && a.id !== artigoAtual.id)
        .slice(0, 3);
      setArtigosRelacionados(relacionados);
      
      // Navegação anterior/próximo
      const indexAtual = artigosCompletos.findIndex(a => a.id === parseInt(id));
      setPostAnterior(indexAtual > 0 ? artigosCompletos[indexAtual - 1] : null);
      setProximoPost(indexAtual < artigosCompletos.length - 1 ? artigosCompletos[indexAtual + 1] : null);
    }
  }, [id]);

  // Função para lidar com erro de imagem
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200';
  };

  if (!artigo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-body text-gray-500">Carregando artigo...</p>
      </div>
    );
  }

  const IconeCategoria = artigo.iconeCategoria;

  return (
    <div>
      {/* 1. HERO DO POST */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-12 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link to="/blog" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Blog
            </Link>
            <span>/</span>
            <span className="text-white">{artigo.categoria}</span>
          </div>
          
          {/* Título e Meta */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-body flex items-center gap-1">
                <IconeCategoria size={12} />
                {artigo.categoria}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-200">
                <Calendar size={14} /> {artigo.data}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-200">
                <Clock size={14} /> {artigo.tempoLeitura} de leitura
              </span>
            </div>
            <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              {artigo.titulo}
            </h1>
            <p className="font-body text-lg text-gray-200 max-w-3xl drop-shadow-md">
              {artigo.resumo}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Artigo Principal */}
            <div className="lg:w-2/3">
              {/* Imagem de Capa */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src={artigo.imagem} 
                  alt={artigo.titulo}
                  onError={handleImageError}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              
              {/* Conteúdo Rico */}
              <div 
                className="prose prose-lg max-w-none font-body text-gray-700"
                dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
              />
              
              {/* Compartilhar */}
              <div className="border-t border-gray-200 mt-8 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-body text-gray-600 text-sm">Compartilhe:</span>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Bookmark size={18} />
                  <span className="font-body text-sm">Salvar para ler depois</span>
                </button>
              </div>
              
              {/* Navegação entre Posts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {postAnterior ? (
                  <Link 
                    to={`/blog/${postAnterior.id}`}
                    className="flex items-center gap-3 p-4 bg-light rounded-xl hover:shadow-md transition-all group"
                  >
                    <ArrowLeft size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-body text-xs text-gray-500">Anterior</p>
                      <p className="font-body text-sm text-secondary font-semibold line-clamp-1">{postAnterior.titulo}</p>
                    </div>
                  </Link>
                ) : <div></div>}
                
                {proximoPost ? (
                  <Link 
                    to={`/blog/${proximoPost.id}`}
                    className="flex items-center justify-end gap-3 p-4 bg-light rounded-xl hover:shadow-md transition-all group text-right"
                  >
                    <div>
                      <p className="font-body text-xs text-gray-500">Próximo</p>
                      <p className="font-body text-sm text-secondary font-semibold line-clamp-1">{proximoPost.titulo}</p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </Link>
                ) : <div></div>}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* Card da Autora */}
              <div className="bg-light rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Dra. Mônica"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-title text-secondary font-bold">{nutriInfo.nome}</h4>
                    <p className="font-body text-xs text-gray-500">{nutriInfo.titulo}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-600 mb-4">
                  Nutricionista especializada em comportamento alimentar e emagrecimento consciente. 
                  Ajudo pessoas a transformarem sua relação com a comida.
                </p>
                <Link 
                  to="/sobre" 
                  className="text-primary font-body text-sm font-semibold hover:underline"
                >
                  Conheça minha história →
                </Link>
              </div>
              
              {/* Artigos Relacionados */}
              {artigosRelacionados.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-title text-lg text-secondary mb-4">Artigos Relacionados</h4>
                  <div className="space-y-4">
                    {artigosRelacionados.map((rel) => {
                      const IconeRel = rel.iconeCategoria;
                      return (
                        <Link key={rel.id} to={`/blog/${rel.id}`} className="flex gap-3 group">
                          <img 
                            src={rel.imagem} 
                            alt={rel.titulo}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <IconeRel size={10} />
                              <span>{rel.categoria}</span>
                            </div>
                            <p className="font-body text-sm text-secondary font-semibold group-hover:text-primary transition-colors line-clamp-2">
                              {rel.titulo}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* CTA Consulta */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h4 className="font-title text-xl mb-2">Pronta para começar?</h4>
                <p className="font-body text-sm mb-4 opacity-90">
                  Agende uma consulta e receba um plano alimentar personalizado.
                </p>
                <Link 
                  to="/contato"
                  className="block w-full bg-white text-primary text-center py-2.5 rounded-full font-body font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  Agendar Consulta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;