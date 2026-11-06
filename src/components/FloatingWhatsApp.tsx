import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingProps> = ({ onOpenQuoteModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultWhatsAppUrl =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent('Olá Marques Estética! Gostaria de tirar dúvidas e orçar um serviço para o meu carro.');

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Subtle Greeting Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto relative max-w-[240px] rounded-xl border border-slate-700 bg-[#0d1017]/95 p-3 shadow-2xl backdrop-blur-md animate-fade-in text-xs text-slate-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-500 hover:text-white p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-[#25D366] shrink-0" />
            <span className="font-bold text-white text-[11px] uppercase tracking-wide">
              Especialista Online
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Tem dúvidas sobre PPF ou Vitrificação? Fale agora mesmo com nossa equipe.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="mt-2 w-full py-1 text-[10px] font-bold text-[#d4af37] hover:underline text-left block"
          >
            Ou abra o Simulador Express →
          </button>
        </div>
      )}

      {/* Floating Action Button with Dynamic Green Light Glow */}
      <div className="pointer-events-auto relative flex items-center justify-center">
        {/* Pulsing Radar Wave 1 */}
        <span className="absolute h-14 w-14 rounded-full bg-[#25D366]/60 animate-green-radar pointer-events-none" />

        {/* Pulsing Radar Wave 2 (delayed) */}
        <span className="absolute h-14 w-14 rounded-full bg-[#25D366]/40 animate-green-radar-delayed pointer-events-none" />

        {/* Glowing Green Ambient Aura */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#10b981] to-[#25D366] opacity-75 blur-md animate-pulse pointer-events-none" />

        {/* Main WhatsApp Button with Green Light Glow */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com Marques Estética"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2fe675] via-[#25D366] to-[#1ebe5d] text-white shadow-2xl animate-green-glow transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* Specular glass reflection curve on button */}
          <span className="pointer-events-none absolute top-1 inset-x-2 h-4 rounded-t-full bg-gradient-to-b from-white/40 to-transparent" />

          {/* Badge indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white shadow-md shadow-red-900/50">
            1
          </span>

          <MessageCircle className="relative h-7 w-7 fill-current stroke-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};
