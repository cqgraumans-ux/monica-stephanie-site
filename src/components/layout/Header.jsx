import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Receitas', path: '/receitas' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* LOGO PERSONALIZADA - MONICA STEPHANIE */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Leaf size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-title text-secondary text-lg md:text-xl font-bold leading-tight tracking-tight">
              Monica Stephanie
            </span>
            <span className="font-body text-primary text-xs font-medium tracking-wider">
              Nutricionista
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body font-medium transition-colors duration-200 border-b-2 ${
                  isActive
                    ? 'text-primary border-primary'
                    : 'text-gray-600 border-transparent hover:text-primary'
                } py-1 text-sm lg:text-base`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="bg-primary text-white px-5 py-2 rounded-full font-body font-semibold text-sm hover:bg-secondary transition-colors duration-300 shadow-sm ml-2"
          >
            Agendar Consulta
          </Link>
        </nav>

        {/* BOTÃO HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-secondary hover:text-primary focus:outline-none"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-secondary/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '72px' }}
      >
        <nav className="flex flex-col items-center justify-start pt-12 gap-8 h-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-title font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-white hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contato"
            onClick={closeMenu}
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-body font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
          >
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;