"use client";

import { ArrowDown, ArrowUpRight, Instagram, Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const photos = [
  ["https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=900&q=85", "Olhar em destaque"],
  ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85", "Ritual de beleza"],
  ["https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85", "Unhas feitas com carinho"],
  ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", "Beleza natural"],
  ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85", "Detalhes que encantam"],
  ["https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85", "Um tempo para você"],
  ["https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=900&q=85", "Olhar em destaque"],
  ["https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85", "Ritual de beleza"],
  ["https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85", "Unhas feitas com carinho"],
  ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", "Beleza natural"],
  ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85", "Detalhes que encantam"],
  ["https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85", "Um tempo para você"],
];
const phone = "5519982146739";

export default function HelixRibbonHero() {
  return <section className="hero" id="inicio">
    <div className="hero-image" aria-hidden="true" />
    <header className="topbar"><a href="#inicio" className="wordmark"><span className="monogram">1996</span><span>STUDIO DE BELEZA<small>CAROL TAVARES · CAMPINAS</small></span></a><nav className="desktop-nav" aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#cuidados">Cuidados</a><a href="#regras">Informações</a><a href="#contato">Contato</a></nav><a className="nav-book" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Agendar <ArrowUpRight size={15}/></a><a className="mobile-menu" href="#servicos" aria-label="Ir para serviços"><Menu/></a></header>
    <div className="hero-content">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>BELEZA COM TEMPO, CUIDADO E INTENÇÃO</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>Beleza &<br/><em>autoestima.</em></motion.h1>
      <p className="hero-copy">Um espaço para você se cuidar, respirar e sair se sentindo ainda mais você.</p>
      <div className="hero-actions"><a href="#servicos" className="button button-dark">Conheça os serviços <ArrowUpRight size={16}/></a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="text-link">Agendar horário <span>↗</span></a></div>
      <div className="hero-caption"><span className="caption-line"/> ATENDIMENTO COM HORA MARCADA <span>·</span> TERÇA A SÁBADO</div>
    </div>
    <div className="helix" aria-label="Galeria de beleza"><div className="helix-label"><Sparkles size={15}/> UM POUCO DO NOSSO UNIVERSO</div>{photos.map(([src, alt], i) => <motion.div key={`${src}-${i}`} className={`helix-card helix-${i + 1}`} initial={{ opacity: 0, y: 18, rotate: (i % 2 ? 3 : -3) }} animate={{ opacity: 1, y: 0, rotate: (i % 2 ? 3 : -3) }} transition={{ delay: .3 + i * .1, duration: .6 }}><img src={src} alt={alt}/></motion.div>)}<a className="gallery-link" href="https://www.instagram.com/studiodebeleza1996" target="_blank" rel="noreferrer"><Instagram size={15}/> @studiodebeleza1996 <ArrowUpRight size={13}/></a></div>
    <div className="hero-bottom"><span>01 / 04</span><a href="#servicos">Role para explorar <ArrowDown size={14}/></a><span>CAMPINAS · SP</span></div>
    <div className="seal" aria-label="Studio de Beleza 1996, atendimento com hora marcada"><span>STUDIO DE BELEZA 1996 · ATENDIMENTO COM HORA MARCADA · </span><b>✳</b></div>
  </section>;
}
