import React, { useState } from 'react';
import {
  Shield,
  MessageCircle,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Flame,
  ShieldCheck,
  CreditCard,
  Clock,
  Award,
} from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'PPF vs Vitrificação', href: '#comparativo' },
    { label: 'Antes & Depois', href: '#antes-depois' },
    { label: 'Vitrine', href: '#portfolio' },
    { label: 'Orçamentos', href: '#orcamentos' },
    { label: 'Estrutura', href: '#estudio' },
    { label: 'Avaliações', href: '#depoimentos' },
  ];

  const marqueeItems = [
    {
      icon: Flame,
      tag: 'CONDIÇÃO ESPECIAL',
      text: 'Vitrificação 9H com Polimento Técnico incluso neste mês',
    },
    {
      icon: ShieldCheck,
      tag: 'PPF TPU',
      text: 'Proteção regenerativa contra pedriscos com até 10 anos de garantia',
    },
    {
      icon: CreditCard,
      tag: '12X SEM JUROS',
      text: 'Parcelamento facilitado no cartão ou condição especial no Pix',
    },
    {
      icon: Award,
      tag: 'EXCLUSIVIDADE',
      text: 'Estúdio 100% climatizado com laudo micrométrico de verniz',
    },
    {
      icon: Clock,
      tag: 'AGENDA ABERTA',
      text: 'Consulte vagas da semana e agende sua avaliação gratuita',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080a0e]/95 backdrop-blur-md">
      {/* Faixa Informativa Amarela Compacta & Elegante (Ultra Slim Ticker) */}
      <div className="relative h-7 w-full overflow-hidden bg-gradient-to-r from-[#d4af37] via-[#fcd34d] to-[#d4af37] text-[#080a0e] shadow-xs">
        <div className="flex h-full select-none items-center overflow-hidden">
          <div className="animate-marquee flex items-center">
            {/* Group 1 */}
            <div className="flex items-center">
              {marqueeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`mq-1-${index}`}
                    onClick={onOpenQuoteModal}
                    className="inline-flex cursor-pointer items-center gap-1.5 px-4 text-left transition-opacity hover:opacity-75"
                    title="Simular orçamento"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-[#080a0e]" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#080a0e]/80">
                      [{item.tag}]
                    </span>
                    <span className="text-[11px] font-bold tracking-tight text-[#080a0e] whitespace-nowrap">
                      {item.text}
                    </span>
                    <span className="ml-3 text-[10px] text-[#080a0e]/40 font-bold">•</span>
                  </button>
                );
              })}
            </div>

            {/* Group 2 (Duplicate for continuous loop) */}
            <div className="flex items-center">
              {marqueeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`mq-2-${index}`}
                    onClick={onOpenQuoteModal}
                    className="inline-flex cursor-pointer items-center gap-1.5 px-4 text-left transition-opacity hover:opacity-75"
                    title="Simular orçamento"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-[#080a0e]" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#080a0e]/80">
                      [{item.tag}]
                    </span>
                    <span className="text-[11px] font-bold tracking-tight text-[#080a0e] whitespace-nowrap">
                      {item.text}
                    </span>
                    <span className="ml-3 text-[10px] text-[#080a0e]/40 font-bold">•</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark & Official Logo with brilliant shining effects */}
        <a href="#" className="flex items-center gap-3.5 group shrink-0" aria-label="Marques Estética Automotiva Home">
          <div className="relative overflow-hidden rounded-xl border-2 border-[#d4af37] bg-[#0d1017] p-1.5 shadow-xl shadow-[#d4af37]/35 transition-all duration-300 group-hover:border-[#ffd700] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] group-hover:scale-105">
            {/* Ambient golden glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/30 via-amber-400/20 to-[#f5d77f]/40 opacity-80 group-hover:opacity-100 transition-opacity animate-gold-glow" />

            {/* Logo Image with golden radiant backlight */}
            <img
              src="https://res.cloudinary.com/hd1sahto/image/upload/v1793920949/WhatsApp_Image_2026-11-05_at_8.08.15_PM_2.jpg"
              alt="Logo Marques Estética Automotiva"
              referrerPolicy="no-referrer"
              className="relative h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-lg filter drop-shadow-[0_0_12px_rgba(212,175,55,0.75)] transition-transform duration-300 group-hover:scale-105"
            />

            {/* Specular Light Sweep / Brilliant Beam crossing the logo */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden">
              <div className="h-full w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-95 animate-gold-sweep-highlight" />
            </div>

            {/* Corner Sparkling Star Glint */}
            <div className="pointer-events-none absolute -top-1 -right-1 text-yellow-300 drop-shadow-[0_0_6px_#ffd700] animate-sparkle">
              <Sparkles className="h-4 w-4 fill-amber-300 stroke-yellow-100" />
            </div>
            <div className="pointer-events-none absolute -bottom-1 -left-1 text-amber-200 drop-shadow-[0_0_5px_#d4af37] animate-sparkle" style={{ animationDelay: '1.6s' }}>
              <Sparkles className="h-3 w-3 fill-amber-200 stroke-white" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#ffd700] transition-colors drop-shadow-[0_0_10px_rgba(255,215,0,0.25)]">
                MARQUES
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/15 px-1.5 py-0.5 rounded border border-[#d4af37]/40 shadow-xs shadow-[#d4af37]/30">
                STUDIO
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-slate-300 font-medium flex items-center gap-1">
              <span>Estética Automotiva Premium</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single line) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#d4af37] text-xs uppercase tracking-wider font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#e5c05b] to-[#c59b27] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080a0e] shadow-md shadow-[#d4af37]/20 transition-all hover:brightness-110 active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 fill-current stroke-1" />
            <span>Orçamento WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden items-center justify-center p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0d1017] px-5 py-4 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-slate-200 hover:text-[#d4af37] border-b border-slate-800/40"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-3 text-xs font-bold uppercase tracking-wider text-[#080a0e]"
              >
                <MessageCircle className="h-4 w-4 fill-current stroke-1" />
                <span>Simular Orçamento via WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
