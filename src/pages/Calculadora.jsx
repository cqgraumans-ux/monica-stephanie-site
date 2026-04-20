import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Ruler, 
  Calculator, 
  Info, 
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const Calculadora = () => {
  // Estados
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState(null);
  const [erro, setErro] = useState('');

  // Classificações do IMC
  const classificacoes = [
    { min: 0, max: 18.5, label: 'Abaixo do peso', cor: 'bg-blue-500', textColor: 'text-blue-600', recomendacao: 'É importante procurar um nutricionista para avaliar sua composição corporal e elaborar um plano para ganho de peso saudável.' },
    { min: 18.5, max: 24.9, label: 'Peso normal', cor: 'bg-green-500', textColor: 'text-green-600', recomendacao: 'Parabéns! Seu peso está adequado. Mantenha hábitos saudáveis e faça check-ups regulares.' },
    { min: 25, max: 29.9, label: 'Sobrepeso', cor: 'bg-yellow-500', textColor: 'text-yellow-600', recomendacao: 'Pequenos ajustes na alimentação e atividade física podem fazer grande diferença. Consulte um nutricionista para orientação personalizada.' },
    { min: 30, max: 34.9, label: 'Obesidade Grau I', cor: 'bg-orange-500', textColor: 'text-orange-600', recomendacao: 'Recomendo uma avaliação nutricional completa para iniciar um plano de emagrecimento saudável e sustentável.' },
    { min: 35, max: 39.9, label: 'Obesidade Grau II', cor: 'bg-red-500', textColor: 'text-red-600', recomendacao: 'É fundamental buscar acompanhamento profissional para reduzir os riscos à saúde associados ao excesso de peso.' },
    { min: 40, max: 100, label: 'Obesidade Grau III', cor: 'bg-red-700', textColor: 'text-red-700', recomendacao: 'Procure ajuda profissional o quanto antes. Um plano multidisciplinar (nutricionista, médico, educador físico) é essencial.' },
  ];

  // Calcular IMC
  const calcularIMC = () => {
    setErro('');
    
    // Validações
    if (!peso || !altura) {
      setErro('Preencha todos os campos.');
      setImc(null);
      setClassificacao(null);
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || pesoNum <= 0 || pesoNum > 300) {
      setErro('Peso inválido. Digite um valor entre 1 e 300 kg.');
      setImc(null);
      setClassificacao(null);
      return;
    }

    if (isNaN(alturaNum) || alturaNum <= 0 || alturaNum > 2.5) {
      setErro('Altura inválida. Digite um valor entre 0,5 e 2,5 metros.');
      setImc(null);
      setClassificacao(null);
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    const imcArredondado = Math.round(imcCalculado * 10) / 10;
    setImc(imcArredondado);

    // Encontrar classificação
    const classificacaoEncontrada = classificacoes.find(
      c => imcCalculado >= c.min && imcCalculado < c.max
    );
    setClassificacao(classificacaoEncontrada);
  };

  // Calcular automaticamente quando os campos mudam
  useEffect(() => {
    if (peso && altura) {
      calcularIMC();
    }
  }, [peso, altura]);

  // Formatar input de peso
  const handlePesoChange = (e) => {
    const value = e.target.value;
    // Permite apenas números, vírgula e ponto
    if (value === '' || /^[\d,.]+$/.test(value)) {
      setPeso(value);
    }
  };

  // Formatar input de altura
  const handleAlturaChange = (e) => {
    const value = e.target.value;
    // Permite apenas números, vírgula e ponto
    if (value === '' || /^[\d,.]+$/.test(value)) {
      setAltura(value);
    }
  };

  // Calcular posição do ponteiro na barra (0-100%)
  const getPointerPosition = () => {
    if (imc === null || !classificacao) return 0;
    const minIMC = 15;
    const maxIMC = 45;
    const position = ((imc - minIMC) / (maxIMC - minIMC)) * 100;
    return Math.max(0, Math.min(100, position));
  };

  return (
    <div>
      {/* 1. HERO - CONTRASTE GARANTIDO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Calculadora de IMC
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Calcule seu Índice de Massa Corporal e descubra sua faixa de peso ideal
          </p>
        </div>
      </section>

      {/* 2. CALCULADORA */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calculator size={24} className="text-primary" />
                </div>
                <h2 className="font-title text-2xl text-secondary">Calcule seu IMC</h2>
              </div>

              {/* Formulário */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Campo Peso */}
                <div>
                  <label className="block font-body text-sm font-semibold text-secondary mb-2">
                    Peso (kg)
                  </label>
                  <div className="relative">
                    <Scale className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Ex: 70,5"
                      value={peso}
                      onChange={handlePesoChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700 text-lg"
                    />
                  </div>
                </div>

                {/* Campo Altura */}
                <div>
                  <label className="block font-body text-sm font-semibold text-secondary mb-2">
                    Altura (m)
                  </label>
                  <div className="relative">
                    <Ruler className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Ex: 1,65"
                      value={altura}
                      onChange={handleAlturaChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700 text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Mensagem de erro */}
              {erro && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-red-700">{erro}</p>
                </div>
              )}

              {/* Resultado */}
              {imc !== null && classificacao && (
                <div className="mt-6">
                  {/* Valor do IMC */}
                  <div className="text-center mb-6">
                    <p className="font-body text-sm text-gray-500 mb-1">Seu IMC é</p>
                    <p className="font-title text-5xl md:text-6xl font-bold text-secondary">
                      {imc}
                    </p>
                    <p className={`font-body text-lg font-semibold mt-2 ${classificacao.textColor}`}>
                      {classificacao.label}
                    </p>
                  </div>

                  {/* Barra de Classificação */}
                  <div className="mb-6">
                    <div className="relative h-3 bg-gray-200 rounded-full mb-2">
                      {/* Segmentos coloridos */}
                      <div className="absolute inset-0 flex rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: '18.5%' }}></div>
                        <div className="bg-green-500 h-full" style={{ width: '13.4%' }}></div>
                        <div className="bg-yellow-500 h-full" style={{ width: '10.4%' }}></div>
                        <div className="bg-orange-500 h-full" style={{ width: '10.4%' }}></div>
                        <div className="bg-red-500 h-full" style={{ width: '10.4%' }}></div>
                        <div className="bg-red-700 h-full" style={{ width: '36.9%' }}></div>
                      </div>
                      {/* Ponteiro */}
                      <div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${getPointerPosition()}%` }}
                      >
                        <div className="w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-md"></div>
                      </div>
                    </div>
                    {/* Labels da barra */}
                    <div className="flex justify-between text-xs text-gray-500 font-body mt-1">
                      <span>15</span>
                      <span>18,5</span>
                      <span>25</span>
                      <span>30</span>
                      <span>35</span>
                      <span>40</span>
                      <span>45+</span>
                    </div>
                  </div>

                  {/* Peso ideal estimado */}
                  {classificacao.label !== 'Peso normal' && (
                    <div className="bg-light p-4 rounded-xl mb-6">
                      <p className="font-body text-sm text-gray-600">
                        <strong className="text-secondary">Peso ideal estimado:</strong>{' '}
                        {altura && !isNaN(parseFloat(altura.replace(',', '.'))) 
                          ? `${(18.5 * parseFloat(altura.replace(',', '.')) ** 2).toFixed(1)} kg a ${(24.9 * parseFloat(altura.replace(',', '.')) ** 2).toFixed(1)} kg`
                          : 'Preencha a altura para calcular'}
                      </p>
                    </div>
                  )}

                  {/* Recomendação */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-3">
                    <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-secondary mb-1">
                        Recomendação
                      </p>
                      <p className="font-body text-sm text-gray-600">
                        {classificacao.recomendacao}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Aviso importante */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <Activity size={18} className="text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-gray-500">
                    <strong className="text-gray-600">Aviso importante:</strong> O IMC é uma ferramenta de triagem e não substitui uma avaliação nutricional completa. 
                    Fatores como composição corporal, idade, sexo e nível de atividade física não são considerados neste cálculo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INFORMAÇÕES ADICIONAIS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-light rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={24} className="text-green-500" />
                <h3 className="font-title text-lg text-secondary">Por que o IMC é importante?</h3>
              </div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                O IMC ajuda a identificar riscos à saúde associados ao peso corporal. 
                Valores muito baixos ou muito altos estão relacionados a maior incidência de doenças cardiovasculares, diabetes e outras condições.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-light rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={24} className="text-yellow-500" />
                <h3 className="font-title text-lg text-secondary">Limitações do IMC</h3>
              </div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                O IMC não diferencia massa muscular de gordura corporal. Atletas podem ter IMC elevado devido à musculatura, 
                sem excesso de gordura. Por isso, uma avaliação profissional é essencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-title text-3xl md:text-4xl mb-4">Quer uma avaliação completa?</h2>
          <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma consulta para uma avaliação nutricional personalizada com bioimpedância e plano alimentar individualizado.
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

export default Calculadora;