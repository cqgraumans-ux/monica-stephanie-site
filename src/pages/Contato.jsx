import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';
// Usando Radix Icons para redes sociais (mais confiáveis)
import { 
  InstagramLogoIcon, 
  LinkedInLogoIcon,
  GlobeIcon
} from '@radix-ui/react-icons';
import { nutriInfo } from '../data/nutriData';

const Contato = () => {
  // Estados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Horários de funcionamento
  const horarios = [
    { dia: 'Segunda - Sexta', horario: '08:00 - 18:00' },
    { dia: 'Sábado', horario: '08:00 - 12:00' },
    { dia: 'Domingo', horario: 'Fechado' },
  ];

  // Redes sociais (usando Radix Icons)
  const redesSociais = [
    { nome: 'Instagram', icone: InstagramLogoIcon, link: 'https://instagram.com', cor: 'hover:bg-pink-500' },
    { nome: 'LinkedIn', icone: LinkedInLogoIcon, link: 'https://linkedin.com', cor: 'hover:bg-blue-600' },
    { nome: 'Site', icone: GlobeIcon, link: '#', cor: 'hover:bg-primary' },
  ];

  // Manipular mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validar formulário
  const validarFormulario = () => {
    if (!formData.nome.trim()) {
      setErro('Por favor, informe seu nome.');
      return false;
    }
    if (!formData.email.trim()) {
      setErro('Por favor, informe seu email.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErro('Por favor, informe um email válido.');
      return false;
    }
    if (!formData.telefone.trim()) {
      setErro('Por favor, informe seu telefone.');
      return false;
    }
    if (!formData.mensagem.trim()) {
      setErro('Por favor, escreva sua mensagem.');
      return false;
    }
    return true;
  };

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    
    if (!validarFormulario()) {
      return;
    }

    setCarregando(true);

    // Simular envio
    setTimeout(() => {
      console.log('Formulário enviado:', formData);
      setEnviado(true);
      setCarregando(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
      });
    }, 1500);
  };

  // Formatar telefone
  const handleTelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setFormData(prev => ({ ...prev, telefone: value }));
  };

  return (
    <div>
      {/* 1. HERO - CONTRASTE GARANTIDO */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Entre em Contato
          </h1>
          <p className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Tire suas dúvidas, agende uma consulta ou saiba mais sobre nossos serviços
          </p>
        </div>
      </section>

      {/* 2. FORMULÁRIO E INFORMAÇÕES */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            
            {/* Formulário */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
                <h2 className="font-title text-2xl text-secondary mb-6">Envie uma mensagem</h2>
                
                {enviado ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-title text-xl text-secondary mb-2">Mensagem enviada com sucesso!</h3>
                    <p className="font-body text-gray-600 mb-4">
                      Obrigado pelo contato, {formData.nome}! Retornaremos em até 24 horas úteis.
                    </p>
                    <button
                      onClick={() => setEnviado(false)}
                      className="text-primary font-body font-semibold hover:underline"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome e Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm font-semibold text-secondary mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold text-secondary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700"
                        />
                      </div>
                    </div>

                    {/* Telefone e Assunto */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm font-semibold text-secondary mb-2">
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleTelefoneChange}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold text-secondary mb-2">
                          Assunto
                        </label>
                        <select
                          name="assunto"
                          value={formData.assunto}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700"
                        >
                          <option value="">Selecione...</option>
                          <option value="Agendar Consulta">Agendar Consulta</option>
                          <option value="Dúvidas">Dúvidas</option>
                          <option value="Orçamento">Orçamento</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label className="block font-body text-sm font-semibold text-secondary mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Escreva sua mensagem..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-body text-gray-700 resize-none"
                      />
                    </div>

                    {/* Erro */}
                    {erro && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="font-body text-sm text-red-700">{erro}</p>
                      </div>
                    )}

                    {/* Botão */}
                    <button
                      type="submit"
                      disabled={carregando}
                      className="w-full bg-primary text-white py-4 rounded-full font-body font-semibold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {carregando ? (
                        <>Enviando...</>
                      ) : (
                        <>Enviar mensagem <Send size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="lg:w-1/3 space-y-6">
              {/* Card de Contato */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
                <h3 className="font-title text-lg text-secondary mb-4 flex items-center gap-2">
                  <Phone size={20} className="text-primary" />
                  Fale Conosco
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/55${nutriInfo.contato.telefone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                  >
                    <MessageCircle size={20} className="text-green-600" />
                    <div>
                      <p className="font-body text-xs text-gray-500">WhatsApp</p>
                      <p className="font-body text-secondary font-semibold group-hover:text-primary transition-colors">
                        {nutriInfo.contato.telefone}
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href={`mailto:${nutriInfo.contato.email}`}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                  >
                    <Mail size={20} className="text-blue-600" />
                    <div>
                      <p className="font-body text-xs text-gray-500">Email</p>
                      <p className="font-body text-secondary font-semibold group-hover:text-primary transition-colors">
                        {nutriInfo.contato.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card de Endereço */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
                <h3 className="font-title text-lg text-secondary mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Endereço
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {nutriInfo.contato.endereco}<br />
                  CEP: {nutriInfo.contato.cep}
                </p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(nutriInfo.contato.endereco)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold hover:underline"
                >
                  Ver no Google Maps <ArrowRight size={14} />
                </a>
              </div>

              {/* Card de Horários */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
                <h3 className="font-title text-lg text-secondary mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  Horário de Funcionamento
                </h3>
                <div className="space-y-2">
                  {horarios.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                      <span className="font-body text-sm text-gray-600">{item.dia}</span>
                      <span className="font-body text-sm font-semibold text-secondary">{item.horario}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6">
                <h3 className="font-title text-lg text-secondary mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {redesSociais.map((rede, index) => {
                    const Icone = rede.icone;
                    return (
                      <a
                        key={index}
                        href={rede.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all ${rede.cor} hover:text-white hover:shadow-md`}
                        aria-label={rede.nome}
                      >
                        <Icone width={20} height={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA Agendamento */}
              <div className="bg-primary rounded-3xl shadow-xl overflow-hidden p-6 text-white">
                <Calendar size={32} className="mb-3" />
                <h3 className="font-title text-xl mb-2">Agende sua consulta</h3>
                <p className="font-body text-sm mb-4 opacity-90">
                  Prefere agendar diretamente? Escolha o melhor horário para você.
                </p>
                <Link
                  to="/contato"
                  className="block w-full bg-white text-primary text-center py-3 rounded-full font-body font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  Ver horários disponíveis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAPA */}
      <section className="pb-16 bg-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-80 md:h-96">
            <iframe
              title="Localização do Consultório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.061162080045!2d-47.89162568461341!3d-15.794165989039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b5c2e5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sCentro%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;