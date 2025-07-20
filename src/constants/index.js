export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Direktur Pemasaran di GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Bekerja dengan Hakim adalah pengalaman yang luar biasa. Ia mengubah situs lama kami menjadi platform modern yang ramah pengguna. Perhatiannya terhadap detail dan komitmennya terhadap kualitas sungguh luar biasa. Sangat merekomendasikan untuk proyek pengembangan web.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Pendiri TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Keahlian Hakim dalam pengembangan web sangat mengesankan. Ia memberikan solusi yang kuat dan skalabel untuk situs e-commerce kami, dan penjualan online kami meningkat signifikan sejak peluncuran. Profesional sejati! Kerja yang fantastis.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Manajer Proyek di UrbanTech',
    img: 'assets/review3.png',
    review:
      'Saya tidak bisa cukup memuji Hakim. Ia mampu menangani persyaratan proyek yang kompleks dan mengubahnya menjadi situs web yang fungsional dan mulus. Kemampuannya dalam memecahkan masalah sangat luar biasa.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Bekerja dengan Hakim sangat menyenangkan. Ia benar-benar memahami kebutuhan kami dan memberikan situs web yang melebihi harapan. Keahliannya di frontend dan backend sangat hebat.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - Platform Podcast Berbasis AI',
    desc: 'Podcastr adalah platform Software-as-a-Service revolusioner yang mengubah cara pembuatan podcast. Dengan fitur-fitur canggih berbasis AI seperti konversi teks ke berbagai suara, memungkinkan kreator menghasilkan voiceover beragam hanya dari satu input teks.',
    subdesc:
      'Dibangun sebagai aplikasi Software-as-a-Service yang unik dengan Next.js 14, Tailwind CSS, TypeScript, Framer Motion, dan Convex, Podcastr dirancang untuk performa dan skalabilitas optimal.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Klon Google Docs Real-Time',
    desc: 'LiveDoc adalah aplikasi kolaboratif yang kuat yang meningkatkan kemampuan pengeditan dokumen secara real-time. Sebagai versi yang disempurnakan dari Google Docs, aplikasi ini mendukung jutaan kolaborator secara bersamaan dengan akurasi tinggi.',
    subdesc:
      'Dengan LiveDoc, pengguna dapat merasakan masa depan kolaborasi, di mana banyak kontributor bekerja secara bersamaan tanpa jeda menggunakan fitur-fitur terbaru dari Next.js dan Liveblocks.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Sistem Manajemen Kesehatan',
    desc: 'Sebuah platform layanan kesehatan inovatif yang dirancang untuk menyederhanakan proses medis penting. Memudahkan pendaftaran pasien, penjadwalan janji temu, dan manajemen rekam medis untuk pengalaman yang mulus bagi penyedia layanan kesehatan dan pasien.',
    subdesc:
      'Dengan fokus pada efisiensi, CarePulse mengintegrasikan formulir kompleks dan notifikasi SMS menggunakan Next.js, Appwrite, Twilio, dan Sentry untuk meningkatkan alur kerja operasional.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Platform Perbankan Online',
    desc: 'Horizon adalah platform perbankan online komprehensif yang menawarkan pengguna dasbor manajemen keuangan terpusat. Pengguna dapat menghubungkan beberapa akun bank, memantau transaksi secara real-time, dan mentransfer uang dengan mudah ke pengguna lain.',
    subdesc:
      'Dibangun dengan Next.js 14, Appwrite, Dwolla, dan Plaid, Horizon menjamin pengalaman perbankan yang lancar dan aman, disesuaikan dengan kebutuhan konsumen modern.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - Aplikasi Manipulasi Foto AI',
    desc: 'Imaginify adalah aplikasi Software-as-a-Service yang revolusioner yang memungkinkan pengguna membuat manipulasi foto menakjubkan dengan teknologi AI. Fitur-fiturnya termasuk pengeditan gambar berbasis AI, sistem pembayaran, dan model berbasis kredit.',
    subdesc:
      'Dibangun dengan Next.js 14, Cloudinary AI, Clerk, dan Stripe, Imaginify menggabungkan teknologi mutakhir dengan pendekatan berorientasi pengguna. Aplikasi ini bisa menjadi sumber penghasilan tambahan atau bahkan bisnis penuh.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 3.50 : isMobile ? 3.5 : 4.065,
    deskPosition: isMobile ? [1.6, 8, 0] : [2, 5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Sekarang',
    title: 'Framer adalah alat utama saya untuk membuat prototipe interaktif. Saya menggunakannya untuk menghidupkan desain agar para pemangku kepentingan dapat merasakan alur pengguna dan interaksi sebelum pengembangan.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: 'Figma adalah platform desain kolaboratif pilihan saya. Saya menggunakannya untuk bekerja secara lancar dengan anggota tim dan klien, memfasilitasi umpan balik dan iterasi desain secara real-time.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: 'Notion membantu saya menjaga proyek tetap terorganisir. Saya menggunakannya untuk manajemen proyek, pelacakan tugas, dan sebagai pusat dokumentasi, memastikan semua hal dari catatan desain hingga rencana terarsipkan dengan baik.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

