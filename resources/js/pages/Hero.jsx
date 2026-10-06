import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

// Ikon Folder SVG yang digunakan agar ringan dan tajam
const FolderIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#72b8f8"
    strokeWidth="1"
    style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.15))' }}
  >
    <path
      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      fill="#90caf9"
    />
  </svg>
);

const HeroPage = () => {
  // Variabel untuk animasi teks utama
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Menampilkan elemen satu per satu
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: "url('/assets/foto/bg-porto-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* LAPISAN BLUR OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1,
        }}
      />

      {/* ── TOP NAV BAR (Home, Project, Contact) ── */}
      {/* Posisi Navbar diubah ke paling atas */}
      <nav
        style={{
          position: 'absolute',
          top: '32px', // Jarak dari atas layar
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          zIndex: 20, // Z-index tinggi agar selalu di atas
        }}
      >
        {['Home', 'Project', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              padding: '6px 20px',
              border: '1px solid rgba(0, 0, 0, 0.4)',
              borderRadius: '99px',
              fontSize: '0.9rem',
              color: '#000', // Teks navbar hitam seperti di gambar referensi
              textDecoration: 'none',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparan sedikit
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ── MAIN CONTENT (Judul & Tombol Explore) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Mengubah ini ke center, lalu mengatur top negatif
          position: 'relative',
          zIndex: 5,
          pointerEvents: 'none', // Agar area yang kosong tidak menghalangi drag folder
        }}
      >
        {/* Teks dinaikkan secara signifikan dengan top negatif */}
        <div style={{ position: 'relative', textAlign: 'center', top: '-120px', pointerEvents: 'auto' }}>

          {/* 1. Teks Utama: Salwa Fitriya's */}
          <motion.h1
            variants={itemVariants} // Menggunakan delay bawaan (muncul pertama)
            style={{
              fontFamily: "'Helvetica World', 'Helvetica', Arial, sans-serif",
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 400,
              color: '#ffffffff',
              lineHeight: 1,
              margin: 0,
              letterSpacing: '-0.04em',
              textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            Salwa Fitriya's
          </motion.h1>

          {/* 2. Kotak Kuning (Muncul setelah judul selesai) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 }, // Efek membesar sedikit
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 1.1, ease: "easeOut" } // Delay 1.1 detik menunggu judul selesai
              },
            }}
            style={{
              backgroundColor: '#fde047',
              padding: '4px 32px',
              display: 'inline-block',
              position: 'relative',
              top: '5px',
              left: '10%',
            }}
          >
            <span
              style={{
                fontFamily: "'Times New Roman', 'Georgia', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: '#000',
                lineHeight: 1,
              }}
            >
              {/* Animasi Ketik (Mulai setelah kotak kuning muncul) */}
              <ReactTyped
                strings={["portfolio"]}
                typeSpeed={80}
                startDelay={1500} // Menunggu 1.5 detik dari awal halaman dimuat baru mulai ngetik
                showCursor={true}
                cursorChar="|"
                loop={false}
              />
            </span>
          </motion.div>
        </div>

        {/* 3. Link Explore my Works (Muncul paling akhir setelah ketikan selesai) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 2.5, ease: "easeOut" } // Delay 2.5 detik agar muncul terakhir
            },
          }}
          style={{ position: 'absolute', bottom: '15vh', pointerEvents: 'auto' }}
        >
          <a
            href="#projects"
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#000',
              textDecoration: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(6px)',
              padding: '10px 28px',
              borderRadius: '99px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Explore my Works
          </a>
        </motion.div>

        {/* Link Explore my Works (Tetap di bawah teks) */}
        <motion.div
          variants={itemVariants}
          style={{ position: 'absolute', bottom: '15vh', pointerEvents: 'auto' }}
        >
          <a
            href="#projects"
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#000', // Teks hitam agar kontras
              textDecoration: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.75)', // Latar belakang putih semi-transparan
              backdropFilter: 'blur(6px)', // Efek blur kaca
              padding: '10px 28px', // Memberikan ruang (padding) agar terlihat seperti tombol
              borderRadius: '99px', // Membuat sudut melingkar sempurna (bentuk kapsul)
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Bayangan lembut agar tombol terangkat
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Menjadi lebih solid saat di-hover
              e.currentTarget.style.transform = 'translateY(-3px)'; // Efek sedikit naik
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)'; // Kembali transparan
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Explore my Works
          </a>
        </motion.div>
      </motion.div>

      {/* ── DESKTOP FOLDERS (Bisa Di-Drag) ── */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          zIndex: 10,
        }}
      >
        {/* Folder Contact Me - Sekarang bisa di drag */}
        <motion.a
          href="mailto:salwafitriyatunnisa@gmail.com"
          drag // Mengaktifkan fitur drag
          dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }} // Batasan area drag
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'grab', // Kursor menunjukkan item bisa diseret
          }}
        >
          <FolderIcon />
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 600, // Dipertebal sedikit
              color: '#000', // Teks hitam
              marginTop: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Latar putih semi-transparan (sesuai referensi)
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            Contact Me
          </span>
        </motion.a>

        {/* Folder CV - Sekarang bisa di drag */}
        <motion.a
          href="https://drive.google.com/open?id=1p7ysE3TkWFV4J1sIYwWcQ0LPTQJGCbeR"
          target="_blank"
          rel="noopener noreferrer"
          drag // Mengaktifkan fitur drag
          dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }} // Batasan area drag
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'grab', // Kursor menunjukkan item bisa diseret
          }}
        >
          <FolderIcon />
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 600, // Dipertebal sedikit
              color: '#000', // Teks hitam
              marginTop: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Latar putih semi-transparan (sesuai referensi)
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            CV
          </span>
        </motion.a>
      </motion.div>

    </section>
  );
};

export default HeroPage;