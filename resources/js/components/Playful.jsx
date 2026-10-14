import React from 'react';

/* ─────────────────────────────────────────────────────────────
   Playful Editorial kit: palet, font, dekorasi (sparkle, cube,
   sticker, tape) dan filter bar yang dipakai di semua halaman.
   ───────────────────────────────────────────────────────────── */

export const PALETTE = {
    ivory: '#F5F1E8',
    card: '#FFFFFF',
    border: '#E8E2D5',
    navy: '#070D20',
    yellow: '#FFE34F',
    pink: '#F6BFD3',
    sky: '#BFE8EC',
};
export const CYCLE = ['#FFFFFF', '#FAF7F0', '#FFFFFF', '#FAF7F0'];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600;1,9..144,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700;800&display=swap');

.pl-serif { font-family: 'Fraunces', Georgia, serif; }
.pl-mono  { font-family: 'Space Mono', ui-monospace, monospace; }

/* Kertas ivory bertekstur halus */
.pl-grid {
  background-color: #F5F1E8;
  background-image:
    linear-gradient(rgba(7,13,32,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(7,13,32,.035) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Header editorial ivory bersih */
.pl-hero {
  background-color: #F5F1E8;
  background-image:
    linear-gradient(rgba(7,13,32,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(7,13,32,.03) 1px, transparent 1px);
  background-size: 32px 32px;
}
.pl-hard { box-shadow: 2px 2px 0 #070D20; }
.pl-hard-hover { transition: transform .18s ease, box-shadow .18s ease; }
.pl-hard-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(7,13,32,.08); }

@keyframes pl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.pl-float { animation: pl-float 5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .pl-float { animation: none; } }
`;

export const PlayfulStyles = () => <style>{css}</style>;

/* ✦ sparkle / bintang */
export const Sparkle = ({ size = 24, color = '#FFE34F', className = '', style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
        <path
            d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"
            fill={color}
        />
    </svg>
);

/* ⬡ cube outline (dekorasi samar elegan) */
export const Cube = ({ size = 64, className = '', style }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} style={style} aria-hidden="true" fill="none" stroke="#070D20" strokeOpacity="0.08" strokeWidth="2" strokeLinejoin="round">
        <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="rgba(255,255,255,.5)" />
        <polyline points="6,18 32,32 58,18" />
        <line x1="32" y1="32" x2="32" y2="60" />
    </svg>
);

/* stiker miring editorial */
export const Sticker = ({ children, color = PALETTE.yellow, rotate = -3, className = '', style }) => (
    <span
        className={`pl-mono inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-[#070D20] ${className}`}
        style={{
            background: color,
            border: '1px solid rgba(7,13,32,.12)',
            boxShadow: '0 4px 12px rgba(7,13,32,.08)',
            transform: `rotate(${rotate}deg)`,
            ...style,
        }}
    >
        {children}
    </span>
);

/* lakban aksen lembut */
export const Tape = ({ className = '', style }) => (
    <span
        className={`absolute block w-14 h-4 rounded-sm ${className}`}
        style={{ background: 'rgba(255, 227, 79, 0.75)', boxShadow: '0 1px 3px rgba(7,13,32,.1)', ...style }}
        aria-hidden="true"
    />
);

/* tombol filter kategori */
export const FilterBar = ({ categories, value, onChange }) => {
    if (categories.length <= 2) return null;
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
                const on = c === value;
                return (
                    <button
                        key={c}
                        onClick={() => onChange(c)}
                        className={`pl-mono text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 ${on
                            ? 'bg-[#070D20] text-[#FFE34F] shadow-sm'
                            : 'bg-white border border-[#E8E2D5] text-[#141B2D]/75 hover:border-[#070D20]/40'
                        }`}
                    >
                        {c}
                    </button>
                );
            })}
        </div>
    );
};
