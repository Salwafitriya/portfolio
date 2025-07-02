// PORTFOLIO/resources/js/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu saat link diklik (opsional, tapi disarankan untuk UX)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    // Navbar kontainer utama
    // relative: Penting agar menu mobile yang 'absolute' diposisikan relatif terhadap navbar ini
    // z-50: Memastikan navbar berada di atas konten lain
    // bg-[var(--color-page-background)]: Warna background navbar
    // shadow-md: Memberikan sedikit bayangan untuk membedakan dari konten
    // NOTE: Saya menghapus 'absolute top-0 left-0 right-0' dari nav, karena ini akan ditangani oleh flexbox di App.jsx
    <nav className="relative p-6 z-30 bg-transparent">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo/Nama Brand */}
        <div className="text-xl font-great-vibes text-[#078d9c]">
          Salwa's Digital Diary
        </div>

        {/* Tombol Hamburger (Hanya terlihat di layar mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-button-bg)] rounded-md"
          aria-label="Toggle navigation" // Aksesibilitas
        >
          {isOpen ? (
            // Ikon X saat menu terbuka
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ikon Hamburger saat menu tertutup
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu Desktop (Hanya terlihat di layar medium ke atas) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-[var(--color-text-light)]">
          <li><a href="#about" className="hover:text-[var(--color-text-dark)] transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-[var(--color-text-dark)] transition duration-300">Projects</a></li>
          <li><a href="#blog" className="hover:text-[var(--color-text-dark)] transition duration-300">Blog</a></li>
          <li><a href="#contact" className="hover:text-[var(--color-text-dark)] transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Menu Mobile (Muncul saat hamburger diklik) */}
      {/* Menggunakan conditional rendering {isOpen && ...} dan classlist untuk transisi
          max-h-0/max-h-screen untuk transisi tinggi, opacity-0/opacity-100 untuk transisi fade
      */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[var(--color-page-background)] shadow-lg py-4 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium text-[var(--color-text-dark)]">
          <li><a href="#about" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">About</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">Projects</a></li>
          <li><a href="#blog" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">Blog</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;