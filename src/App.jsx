import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Receitas from './pages/Receitas';
import ReceitaPost from './pages/ReceitaPost'; // NOVA IMPORTAÇÃO
import Calculadora from './pages/Calculadora';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/receitas/:id" element={<ReceitaPost />} /> {/* NOVA ROTA */}
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;