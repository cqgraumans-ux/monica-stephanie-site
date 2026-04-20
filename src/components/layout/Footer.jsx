import React from 'react';
import { Link } from 'react-router-dom';
import { 
  InstagramLogoIcon, 
  LinkedInLogoIcon,
  EnvelopeClosedIcon, 
  MobileIcon, 
  GlobeIcon,
  ClockIcon,
  ChatBubbleIcon
} from '@radix-ui/react-icons';
import { MapPin, Phone, Mail } from 'lucide-react';
import { nutriInfo } from '../../data/nutriData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">
          
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-title text-lg font-bold">M</span>
              </div>
              <div>
                <h3 className="font-title text-xl font-bold text-white leading-tight">
                  Monica Stephanie
                </h3>
                <p className="font-body text-primary text-xs tracking-wider">
                  Nutricionista
                </p>
              </div>
            </div>
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">
              Cuidando da sua saúde com nutrição personalizada, baseada em ciência e acolhimento. 
              Transforme sua relação com a comida e viva com mais energia.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <InstagramLogoIcon width={16} height={16} className="text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <LinkedInLogoIcon width={16} height={16} className="text-white" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <GlobeIcon width={16} height={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-title text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/sobre" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Sobre Mim</Link></li>
              <li><Link to="/servicos" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Serviços</Link></li>
              <li><Link to="/blog" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/receitas" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Receitas</Link></li>
              <li><Link to="/calculadora" className="font-body text-gray-300 hover:text-primary transition-colors text-sm">Calculadora de IMC</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-title text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-gray-300 text-sm">{nutriInfo.contato.endereco}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="font-body text-gray-300 text-sm">{nutriInfo.contato.telefone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="font-body text-gray-300 text-sm">{nutriInfo.contato.email}</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <a 
                href={`https://wa.me/55${nutriInfo.contato.telefone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-body hover:bg-green-700 transition-colors"
              >
                <ChatBubbleIcon width={14} height={14} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna 4: Horário */}
          <div>
            <h4 className="font-title text-lg font-semibold mb-4 text-white">Horário de Atendimento</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ClockIcon width={14} height={14} className="text-primary" />
                <span className="font-body text-gray-300 text-sm">Segunda - Sexta: 08h - 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon width={14} height={14} className="text-primary" />
                <span className="font-body text-gray-300 text-sm">Sábado: 08h - 12h</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeClosedIcon width={14} height={14} className="text-primary" />
                <span className="font-body text-gray-300 text-sm">CRN-1: 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6">
          <p className="font-body text-gray-400 text-xs">
            © {currentYear} Monica Stephanie • Nutricionista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;