/**
 * Data Sejarah Ringkas: Jejak Budaya Bali (1800 - 2020an)
 * Format sederhana: Judul, Tahun, Gambar asli internet, dan Penjelasan bercerita yang valid.
 */

const culturalHistoryData = [
  {
    id: "era-1846",
    year: "1846 - 1849",
    title: "Perang Jagaraga & Kedaulatan Hak Tawan Karang",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Puputan_of_the_Raja_of_Boeleleng.jpg",
    imageCaption: "Litografi Perang Jagaraga di Buleleng (1849)",
    description: "Patih I Gusti Ketut Jelantik dan Raja Buleleng menolak keras paksaan Belanda untuk menghapus Hak Tawan Karang (hukum adat laut Bali atas kapal yang kandas). Melalui Benteng Jagaraga, ribuan ksatria bertempur mati-matian demi harga diri tanah leluhur. Peristiwa ini melahirkan kidung kepahlawanan yang menanamkan etos 'Tindih'—keberanian membela kebenaran."
  },
  {
    id: "era-1906",
    year: "1906",
    title: "Tragedi Puputan & Lahirnya Seni Banjar Rakyat",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dutch_troops_landing_at_Sanur_1906.jpg",
    imageCaption: "Arsip pendaratan tentara kolonial di Sanur menjelang Puputan Badung (1906)",
    description: "Raja Badung beserta keluarga dan rakyat berbusana serba putih memilih jalan perang puputan sampai titik darah penghabisan daripada menyerah dalam penjajahan. Runtuhnya istana justru membawa berkah budaya yang tak terduga: para seniman, pemahat, dan penari istana kembali ke desa. Banjar (komunitas warga) pun bangkit menjadi rumah baru bagi denyut seni dan upacara rakyat hingga kini."
  },
  {
    id: "era-1936",
    year: "1936",
    title: "Era Pita Maha & Kelahiran Tari Kecak Modern",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Kecak_Dance_Bali.jpg",
    imageCaption: "Pementasan Tari Kecak Bali berlatar senja",
    description: "Para maestro seni Ubud seperti I Gusti Nyoman Lempad bersama pelukis Walter Spies dan Rudolf Bonnet membentuk wadah seni 'Pita Maha'. Pertemuan ini membuat seni lukis Bali lebih bebas dan ekspresif. Di masa ini pula, ritual sakral Sanghyang dikembangkan menjadi drama tari Kecak modern yang kini memukau jutaan pasang mata di seluruh penjuru dunia."
  },
  {
    id: "era-1960",
    year: "1960",
    title: "KOKAR: Menuliskan Seni Tabuh ke Buku Notasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Gamelan_Player_1.JPG",
    imageCaption: "Penabuh gamelan Gong Kebyar Bali",
    description: "Agar seni tabuh gamelan dan tari tidak punah ditelan masa, para tokoh maestro mendirikan Konservatori Karawitan (KOKAR) yang kelak berkembang menjadi ISI Denpasar. Gamelan yang semula hanya dihafalkan secara lisan dari telinga ke telinga mulai dituliskan ke dalam lembaran notasi resmi, melahirkan regenerasi seniman muda yang terdidik dan terstruktur."
  },
  {
    id: "era-1979",
    year: "1979",
    title: "Pesta Kesenian Bali: Panggung Akbar Milik Rakyat",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Taman_Budaya_Arts_Centre.jpg",
    imageCaption: "Panggung Taman Budaya Werdhi Budaya Art Centre Denpasar",
    description: "Khawatir kesenian Bali sekadar dijadikan komoditas hotel oleh ledakan pariwisata, Gubernur Prof. Ida Bagus Mantra menginisiasi Pesta Kesenian Bali (PKB) pertama di Art Centre Denpasar. Festival sebulan penuh ini menjadi pesta rakyat tahunan paling ditunggu, memberi ruang bagi sekaa banjar desa untuk unjuk kebolehan dan merawat kebanggaan adat."
  },
  {
    id: "era-1990",
    year: "1990-an",
    title: "Pecalang & Benteng Desa Adat Menghadapi Wisata Dunia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    imageCaption: "Masyarakat dan penjaga adat Bali dalam balutan busana tradisi",
    description: "Pariwisata massal tumbuh sangat cepat di era 90-an. Di tengah menjamurnya pembangunan hotel modern, masyarakat Bali justru memperkuat peran Desa Adat dan pasukan pengamanan Pecalang berbusana poleng. Bali membuktikan ketangguhannya: terbuka menyambut dunia luar, namun tetap teguh menjaga tradisi ngayah dan keasrian ritual pura."
  },
  {
    id: "era-2002",
    year: "2002",
    title: "Doa di Balik Duka: Rekonsiliasi Tri Hita Karana",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Bali_memorial.jpg",
    imageCaption: "Monumen Panca Benua (Ground Zero Memorial) di Kuta",
    description: "Tragedi ledakan bom di Legian Kuta mengguncang pulau dewata. Alih-alih membalas duka dengan dendam, masyarakat Bali bersama pemuka lintas agama menggelar upacara penyucian alam (Pemarisuda Karang) dan doa kedamaian semesta di pantai. Peristiwa ini menjadi cermin bagi dunia tentang kedalaman filosofi Tri Hita Karana—hidup damai dengan Tuhan, sesama, dan alam."
  },
  {
    id: "era-2012",
    year: "2012",
    title: "Sistem Subak Diakui Dunia sebagai Warisan UNESCO",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Tabanan-Regency_Indonesia_Rice-paddies-05.jpg",
    imageCaption: "Terasering persawahan Subak Jatiluwih yang terawat lestari",
    description: "Sistem irigasi persawahan tradisional Subak yang dipraktikkan sejak abad ke-11 resmi ditetapkan UNESCO sebagai Warisan Budaya Dunia. Dunia kagum karena Subak bukan cuma teknik membagi air sawah secara adil, melainkan wujud rasa syukur spiritual para petani yang menjaga alam pulau Bali tetap subur dan hijau selama ratusan tahun."
  },
  {
    id: "era-2018",
    year: "2018",
    title: "Aksara Bali Hadir di Papan Ketik Smartphone",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bible_printed_with_Balinese_script.jpg",
    imageCaption: "Guratan Aksara Bali yang kini telah berstandar Unicode resmi",
    description: "Agar huruf warisan leluhur tidak terlupakan oleh anak muda, pemerintah menerbitkan aturan resmi pelestarian Aksara Bali. Tonggak besarnya tercapai saat Aksara Bali resmi diakui dalam standar Unicode dunia dan hadir langsung di keyboard ponsel pintar (Android/iOS). Kini, anak-anak muda Bali bisa berkirim pesan obrolan menggunakan aksara leluhur mereka sendiri."
  },
  {
    id: "era-2020",
    year: "2020-an",
    title: "Preservasi Lontar Digital & Nafas Baru Budaya Bali",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bali-lontar-Balai_Bahasa_Bali-Wariga_147.jpg",
    imageCaption: "Digitalisasi lembaran lontar kuno menggunakan pemindai modern",
    description: "Memasuki era kecerdasan buatan (AI), ribuan naskah lontar kuno berisi ilmu pengobatan tradisional Usada dan filsafat hidup mulai dipindai serta diterjemahkan secara digital agar tidak lapuk dimakan usia. Para seniman muda Bali juga membawa ekspresi seni tradisi ke format karya digital modern, membuktikan bahwa budaya Bali selalu hidup dan adaptif mengarungi era digital."
  }
];
