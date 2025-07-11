// Project data
const projectsData = [
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'Platform e-commerce modern dengan fitur lengkap untuk toko online.',
        fullDescription: 'Platform e-commerce yang dibangun dengan teknologi modern, menyediakan pengalaman berbelanja yang seamless untuk pelanggan dan dashboard admin yang powerful untuk pengelolaan toko.',
        icon: '🛒',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Midtrans'],
        features: [
            'Katalog produk dengan pencarian dan filter',
            'Keranjang belanja dan wishlist',
            'Sistem pembayaran terintegrasi Midtrans',
            'Dashboard admin untuk manajemen produk',
            'Sistem notifikasi real-time',
            'Responsive design untuk semua device'
        ],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'Website portfolio profesional dengan desain modern dan interaktif.',
        fullDescription: 'Website portfolio yang menampilkan karya dan keahlian dengan desain yang clean dan modern. Dilengkapi dengan animasi yang smooth dan optimasi SEO.',
        icon: '💼',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        features: [
            'Desain responsive dan modern',
            'Animasi smooth dengan GSAP',
            'Galeri portfolio interaktif',
            'Form kontak terintegrasi',
            'Optimasi SEO dan performance',
            'Dark/Light mode toggle'
        ],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 'restaurant-app',
        title: 'Restaurant App',
        description: 'Aplikasi restoran dengan sistem pemesanan online dan manajemen menu.',
        fullDescription: 'Aplikasi web untuk restoran yang memungkinkan pelanggan melihat menu, melakukan pemesanan online, dan tracking status pesanan secara real-time.',
        icon: '🍽️',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'PWA'],
        features: [
            'Menu digital interaktif',
            'Sistem pemesanan online',
            'Tracking status pesanan real-time',
            'Sistem pembayaran digital',
            'Progressive Web App (PWA)',
            'Dashboard admin untuk restoran'
        ],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 'learning-platform',
        title: 'Learning Platform',
        description: 'Platform pembelajaran online dengan video course dan quiz interaktif.',
        fullDescription: 'Platform e-learning yang menyediakan kursus online dengan video pembelajaran, quiz interaktif, dan sistem tracking progress untuk siswa.',
        icon: '📚',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Video.js'],
        features: [
            'Video player dengan kontrol lengkap',
            'Quiz dan assessment interaktif',
            'Progress tracking untuk siswa',
            'Sistem sertifikat digital',
            'Forum diskusi antar siswa',
            'Dashboard instructor dan admin'
        ],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 'task-manager',
        title: 'Task Manager',
        description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim.',
        fullDescription: 'Aplikasi manajemen tugas yang memungkinkan tim untuk berkolaborasi, mengatur deadline, dan tracking progress project secara real-time.',
        icon: '✅',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Chart.js'],
        features: [
            'Kanban board untuk manajemen tugas',
            'Kolaborasi tim real-time',
            'Sistem notifikasi dan reminder',
            'Analytics dan reporting',
            'Time tracking untuk setiap tugas',
            'Integrasi kalender'
        ],
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 'weather-app',
        title: 'Weather App',
        description: 'Aplikasi cuaca dengan prediksi 7 hari dan notifikasi cuaca ekstrem.',
        fullDescription: 'Aplikasi cuaca yang memberikan informasi cuaca real-time, prediksi 7 hari ke depan, dan notifikasi untuk cuaca ekstrem dengan interface yang beautiful.',
        icon: '🌤️',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'PWA'],
        features: [
            'Cuaca real-time berdasarkan lokasi',
            'Prediksi cuaca 7 hari',
            'Notifikasi cuaca ekstrem',
            'Multiple location tracking',
            'Beautiful weather animations',
            'Offline support dengan PWA'
        ],
        demoUrl: '#',
        codeUrl: '#'
    }
];

// Testimonials data
const testimonialsData = [
    {
        id: 'testimonial-1',
        name: 'Budi Santoso',
        role: 'CEO, TechStart Indonesia',
        text: 'IMSSTORE berhasil membangun website e-commerce kami dengan sangat profesional. Hasilnya melebihi ekspektasi dan sangat user-friendly.',
        avatar: '👨‍💼',
        rating: 5
    },
    {
        id: 'testimonial-2',
        name: 'Sari Dewi',
        role: 'Marketing Manager, Creative Agency',
        text: 'Portfolio website yang dibuat IMSSTORE sangat memukau! Desainnya modern dan loading speednya sangat cepat. Highly recommended!',
        avatar: '👩‍💻',
        rating: 5
    },
    {
        id: 'testimonial-3',
        name: 'Ahmad Rahman',
        role: 'Owner, Warung Nusantara',
        text: 'Aplikasi restoran dari IMSSTORE membantu bisnis kami berkembang pesat. Sistem pemesanan online-nya sangat mudah digunakan.',
        avatar: '👨‍🍳',
        rating: 5
    },
    {
        id: 'testimonial-4',
        name: 'Lisa Permata',
        role: 'Founder, EduTech Solutions',
        text: 'Platform pembelajaran yang dibangun IMSSTORE sangat interaktif dan engaging. Siswa-siswa kami sangat antusias menggunakannya.',
        avatar: '👩‍🏫',
        rating: 5
    },
    {
        id: 'testimonial-5',
        name: 'Rudi Hartono',
        role: 'Project Manager, Digital Corp',
        text: 'Task manager dari IMSSTORE meningkatkan produktivitas tim kami secara signifikan. Interface-nya intuitive dan fiturnya lengkap.',
        avatar: '👨‍💼',
        rating: 5
    },
    {
        id: 'testimonial-6',
        name: 'Maya Sari',
        role: 'Content Creator',
        text: 'Weather app buatan IMSSTORE sangat akurat dan designnya beautiful. Perfect untuk daily use dan sangat reliable.',
        avatar: '👩‍🎨',
        rating: 5
    }
];

// Skills data
const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML5', level: 95, icon: '🌐' },
            { name: 'CSS3', level: 90, icon: '🎨' },
            { name: 'JavaScript', level: 88, icon: '⚡' },
            { name: 'Responsive Design', level: 92, icon: '📱' }
        ]
    },
    {
        category: 'Backend & Database',
        skills: [
            { name: 'Firebase', level: 85, icon: '🔥' },
            { name: 'API Integration', level: 80, icon: '🔗' },
            { name: 'Database Design', level: 75, icon: '🗄️' }
        ]
    },
    {
        category: 'Tools & Others',
        skills: [
            { name: 'Git & GitHub', level: 85, icon: '📝' },
            { name: 'Performance Optimization', level: 80, icon: '⚡' },
            { name: 'SEO', level: 75, icon: '🔍' },
            { name: 'PWA Development', level: 70, icon: '📲' }
        ]
    }
];

// Services data
const servicesData = [
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Pembuatan website custom dengan teknologi modern dan performa optimal.',
        icon: '💻',
        features: [
            'Responsive Design',
            'Fast Loading Speed',
            'SEO Optimized',
            'Cross-browser Compatible'
        ],
        price: 'Mulai dari 2.5 juta'
    },
    {
        id: 'ecommerce-solution',
        title: 'E-Commerce Solution',
        description: 'Solusi lengkap untuk toko online dengan fitur pembayaran terintegrasi.',
        icon: '🛍️',
        features: [
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Tracking',
            'Admin Dashboard'
        ],
        price: 'Mulai dari 5 juta'
    },
    {
        id: 'web-maintenance',
        title: 'Web Maintenance',
        description: 'Layanan maintenance dan update website untuk performa optimal.',
        icon: '🔧',
        features: [
            'Regular Updates',
            'Security Monitoring',
            'Performance Optimization',
            'Backup & Recovery'
        ],
        price: 'Mulai dari 500 ribu/bulan'
    },
    {
        id: 'api-integration',
        title: 'API Integration',
        description: 'Integrasi API third-party untuk fungsionalitas website yang lebih lengkap.',
        icon: '🔌',
        features: [
            'Payment API (Midtrans, etc)',
            'Social Media API',
            'Maps & Location API',
            'Custom API Development'
        ],
        price: 'Mulai dari 1.5 juta'
    }
];

// FAQ data
const faqData = [
    {
        question: 'Berapa lama waktu pengerjaan website?',
        answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Website sederhana biasanya 1-2 minggu, sedangkan e-commerce atau aplikasi web kompleks bisa 3-6 minggu.'
    },
    {
        question: 'Apakah website yang dibuat responsive?',
        answer: 'Ya, semua website yang kami buat sudah responsive dan mobile-friendly. Kami memastikan website tampil optimal di semua device.'
    },
    {
        question: 'Apakah ada garansi untuk website yang dibuat?',
        answer: 'Ya, kami memberikan garansi 3 bulan untuk bug fixing dan minor adjustment setelah website selesai.'
    },
    {
        question: 'Bagaimana sistem pembayaran?',
        answer: 'Pembayaran bisa dilakukan dengan sistem DP 50% di awal dan pelunasan setelah website selesai. Kami menerima transfer bank dan e-wallet.'
    },
    {
        question: 'Apakah bisa request fitur khusus?',
        answer: 'Tentu saja! Kami bisa mengembangkan fitur custom sesuai kebutuhan bisnis Anda. Silakan diskusikan kebutuhan spesifik Anda dengan kami.'
    }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        testimonialsData,
        skillsData,
        servicesData,
        faqData
    };
}