// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="relative p-6 z-30 bg-transparent">
//       <div className="max-w-screen-xl mx-auto flex items-center relative">

//         {/* Logo kiri */}
//         <div className="text-xl font-great-vibes text-[#078d9c]">
//           Salwa&apos;s Digital Diary
//         </div>

//         {/* Menu Desktop (tengah) */}
//         <ul className="hidden md:flex space-x-8 text-lg font-medium font-Poppins text-[#078d9c] absolute left-1/2 -translate-x-1/2">
//           <li><a href="#about" className="hover:text-[var(--color-text-dark)] transition duration-300">About</a></li>
//           <li><a href="#projects" className="hover:text-[var(--color-text-dark)] transition duration-300">Projects</a></li>
//           <li><a href="#contact" className="hover:text-[var(--color-text-dark)] transition duration-300">Contact</a></li>
//         </ul>

//         {/* Hamburger kanan */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden ml-auto p-2 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-button-bg)] rounded-md"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Menu Mobile */}
//       <div className={`md:hidden absolute top-full left-0 right-0 bg-[var(--color-page-background)] shadow-lg py-4 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//         <ul className="flex flex-col items-center space-y-4 text-lg font-medium text-[var(--color-text-dark)]">
//           <li><a href="#about" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">About</a></li>
//           <li><a href="#projects" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">Projects</a></li>
//           <li><a href="#contact" onClick={handleLinkClick} className="block w-full text-center py-2 hover:bg-[var(--color-button-bg)] rounded">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
