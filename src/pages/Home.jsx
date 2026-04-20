import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Star, MapPin, Phone, Scale, Brain, Apple, ArrowRight } from 'lucide-react';
import { nutriInfo } from '../data/nutriData';

const iconMap = { Scale, Brain, Apple };

const Home = () => {
  return (
    <div>
      {/* 1. HERO - FUNDO ESCURO = TEXTO BRANCO */}
      <section className="relative">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={'fade'}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="w-full h-[550px] md:h-[650px]"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/80 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Alimentação saudável" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-white">
                <div className="max-w-3xl">
                  <TypeAnimation
                    sequence={[
                      'Comer bem não precisa ser complicado',
                      3000,
                      'Nutrição sem neuras',
                      3000,
                      'Resultados que duram',
                      3000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    repeat={Infinity}
                    className="font-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
                  />
                  <p className="font-body text-lg md:text-xl text-white max-w-2xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
                    Descubra o prazer de uma <span className="text-primary font-semibold">alimentação equilibrada</span> e saborosa, sem dietas restritivas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link to="/contato" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-body font-semibold transition-all shadow-lg flex items-center gap-2 w-fit">
                      Agendar Consulta <ArrowRight size={18} />
                    </Link>
                    <Link to="/sobre" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-full font-body font-semibold transition-all w-fit">
                      Conheça meu método
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/80 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/4662954/pexels-photo-4662954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Bem-estar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-white">
                <div className="max-w-3xl">
                  <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                    Sua <span className="text-primary">melhor versão</span><br />começa aqui
                  </h2>
                  <p className="font-body text-lg md:text-xl text-white max-w-2xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
                    Nutrição que respeita seu corpo, sua rotina e seus objetivos.
                  </p>
                  <Link to="/servicos" className="mt-8 bg-white text-secondary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-body font-semibold transition-all shadow-lg flex items-center gap-2 w-fit">
                    Conheça os serviços <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/80 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/5713736/pexels-photo-5713736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Consultório" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" className="text-yellow-400" />)}
                    </div>
                    <span className="font-body font-bold text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>{nutriInfo.avaliacoes.nota} • {nutriInfo.avaliacoes.total} avaliações</span>
                  </div>
                  <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                    Pronta para <span className="text-primary">transformar</span><br />sua saúde?
                  </h2>
                  <p className="font-body text-lg md:text-xl text-white max-w-2xl mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
                    Agende sua consulta e dê o primeiro passo para uma vida mais leve e saudável.
                  </p>
                  <Link to="/contato" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all shadow-lg flex items-center gap-2 w-fit">
                    Quero Agendar Agora <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. ÁREAS DE ATUAÇÃO - FUNDO CLARO = TÍTULO ESCURO (VINHO) */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-title text-3xl md:text-4xl text-secondary mb-4">Áreas de Atuação</h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Cuidado personalizado baseado em ciência e acolhimento para você atingir seus objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nutriInfo.areasAtuacao.map((area, index) => {
              const IconComponent = iconMap[area.icone];
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent size={28} className="text-primary" />
                  </div>
                  <h3 className="font-title text-xl text-secondary mb-3">{area.titulo}</h3>
                  <p className="font-body text-gray-600">{area.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SOBRE - FUNDO CLARO = TÍTULO ESCURO (VINHO) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Dra. Mônica Stephany" 
                className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-primary font-body font-semibold tracking-wider">PRAZER, SOU A</span>
              <h2 className="font-title text-4xl text-secondary mt-2 mb-6">{nutriInfo.nome}</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                {nutriInfo.sobreCurto}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-body font-bold text-lg text-secondary">{nutriInfo.avaliacoes.nota}</span>
                  <span className="font-body text-gray-500">({nutriInfo.avaliacoes.total} avaliações)</span>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={18} className="text-primary" />
                  <span className="font-body">{nutriInfo.contato.endereco}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="text-primary" />
                  <span className="font-body">{nutriInfo.contato.telefone}</span>
                </div>
              </div>
              <Link to="/sobre" className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-body hover:bg-primary transition-colors">
                Conheça minha história <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS - FUNDO ESCURO = TÍTULO BRANCO COM ROSA */}
      <section className="py-16 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-title text-3xl md:text-4xl mb-4 text-white">
              O que meus <span className="text-primary">pacientes dizem</span>
            </h2>
            <div className="flex justify-center items-center gap-2">
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <span className="font-body text-xl text-white">{nutriInfo.avaliacoes.nota} • {nutriInfo.avaliacoes.total} avaliações no Google</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {nutriInfo.avaliacoes.frases.map((frase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" />)}
                </div>
                <p className="font-body text-white/90 italic">"{frase}"</p>
                <p className="font-body text-sm text-gray-300 mt-4">— Paciente verificada</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white underline font-body hover:text-primary transition-colors">
              Ver todas as avaliações no Google <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL - FUNDO ROSA = TEXTO BRANCO */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-title text-3xl md:text-4xl mb-4 text-white">Pronta para transformar sua saúde?</h2>
          <p className="font-body text-lg mb-8 text-white opacity-90">Agende sua consulta e descubra como a nutrição pode ser leve e prazerosa.</p>
          <Link to="/contato" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-secondary hover:text-white transition-all shadow-lg">
            Quero Agendar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;