import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Lightbox foto dengan navigasi prev/next.
 * props:
 *  - items: [{ image, title, caption }]
 *  - index: number | null (null = tertutup)
 *  - onClose(), onChange(newIndex)
 */
export default function PhotoLightbox({ items, index, onClose, onChange }) {
    const open = index !== null && index !== undefined;
    const total = items.length;

    useEffect(() => {
        if (!open) return;
        const prev = () => onChange((index - 1 + total) % total);
        const next = () => onChange((index + 1) % total);
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, index, total, onChange, onClose]);

    if (!open) return null;
    const item = items[index];

    const navBtn =
        'absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors';

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-10"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                aria-label="Tutup"
            >
                <FaTimes />
            </button>

            {total > 1 && (
                <>
                    <button
                        className={`${navBtn} left-3 sm:left-6`}
                        onClick={(e) => { e.stopPropagation(); onChange((index - 1 + total) % total); }}
                        aria-label="Sebelumnya"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className={`${navBtn} right-3 sm:right-6`}
                        onClick={(e) => { e.stopPropagation(); onChange((index + 1) % total); }}
                        aria-label="Berikutnya"
                    >
                        <FaChevronRight />
                    </button>
                </>
            )}

            <img
                src={item.image}
                alt={item.title || ''}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-[78vh] rounded-xl shadow-2xl object-contain"
            />

            <div className="mt-4 text-center text-white max-w-2xl" onClick={(e) => e.stopPropagation()}>
                {item.title && <p className="font-semibold">{item.title}</p>}
                {item.caption && <p className="text-sm text-white/70 mt-1">{item.caption}</p>}
                <p className="text-xs text-white/40 mt-2">{index + 1} / {total}</p>
            </div>
        </div>
    );
}
