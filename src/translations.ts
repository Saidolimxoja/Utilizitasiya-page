export type Language = 'uz' | 'ru' | 'en';

export interface ServiceItem {
  id: string;
  hazardClass: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  features: string[];
  recommendedFor: string;
}

export interface LicenseItem {
  id: string;
  title: string;
  regNumber: string;
  issueDate: string;
  authority: string;
  validity: string;
  description: string;
  image: string;
  pdfDownload?: string;
  badge: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  desc: string;
  highlight: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
  badge: string;
}

export interface PartnersSection {
  sectionTag: string;
  title: string;
  subtitle: string;
  verifiedPartner: string;
  bannerTag: string;
  bannerTitle: string;
  bannerDesc: string;
  items: PartnerItem[];
}

export interface TranslationDictionary {
  brand: {
    name: string;
    tagline: string;
    licenseBadge: string;
  };
  nav: {
    services: string;
    partners: string;
    calculator: string;
    licenses: string;
    process: string;
    contacts: string;
    callNow: string;
    callNow2: string;
    requestOffer: string;
  };
  hero: {
    badge: string;
    locationBadge: string;
    headlineTop: string;
    headlineHighlight: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaCalculate: string;
    ctaTelegram: string;
    ctaForm: string;
    btnSubmitLead: string;
    btnHowWeWork: string;
    pillClasses: string;
    pillActs: string;
    pillFleet: string;
    floatingBadge247Title: string;
    floatingBadge247Subtitle: string;
    floatingBadgeCycleTitle: string;
    floatingBadgeCycleSubtitle: string;
    trustPills: {
      license: string;
      fleet: string;
      didox: string;
    };
    stats: {
      tons: { value: string; label: string };
      clients: { value: string; label: string };
      speed: { value: string; label: string };
      compliance: { value: string; label: string };
    };
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    requestForService: string;
    viewDetails: string;
    hazardBadge: string;
    items: ServiceItem[];
  };
  partners: PartnersSection;
  calculator: {
    sectionTag: string;
    title: string;
    subtitle: string;
    modalTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    wasteTypes: {
      medical: string;
      industrial: string;
      chemical: string;
      expired: string;
      mercury: string;
      construction: string;
    };
    unitKg: string;
    unitTons: string;
    unitCubic: string;
    frequencyOneTime: string;
    frequencyMonthly: string;
    frequencyContract: string;
    companyLabel: string;
    nameLabel: string;
    phoneLabel: string;
    volumeLabel: string;
    calculatedEstimate: string;
    estimateNote: string;
    btnNext: string;
    btnBack: string;
    btnSubmit: string;
    btnCalculating: string;
    quickSummary: string;
  };
  licenses: {
    sectionTag: string;
    title: string;
    subtitle: string;
    officialRegistry: string;
    watermarkText: string;
    antiTheftProtected: string;
    clickToZoom: string;
    certModalTitle: string;
    verifiedDocument: string;
    closeModal: string;
    downloadPdf: string;
    viewOriginal: string;
    items: LicenseItem[];
  };
  process: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  leadForm: {
    sectionTag: string;
    title: string;
    subtitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    companyPlaceholder: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    categoryLabel: string;
    serviceSelectPlaceholder: string;
    categories: string[];
    volumePlaceholder: string;
    notesPlaceholder: string;
    btnSubmit: string;
    btnSubmitting: string;
    privacyNote: string;
    successModal: {
      title: string;
      desc: string;
      telegramNotifyNote: string;
      buttonClose: string;
    };
    errorModal: {
      title: string;
      desc: string;
      buttonRetry: string;
    };
  };
  footer: {
    about: string;
    quickLinks: string;
    contactInfo: string;
    addressVal: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    telegramLabel: string;
    workingHoursLabel: string;
    workingHoursVal: string;
    didoxNotice: string;
    allRightsReserved: string;
    uzbekistanEcoRegistry: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  uz: {
    brand: {
      name: "EKO-PARTNER",
      tagline: "Ekologik hamkorlik va chiqindilarni zararsizlantirish",
      licenseBadge: "Davlat Probir Nazorati Litsenziyasi № 538500",
    },
    nav: {
      services: "Xizmatlar",
      partners: "Hamkorlar",
      calculator: "Kalkulyator",
      licenses: "Litsenziyalar",
      process: "Bosqichlar",
      contacts: "Bog'lanish",
      callNow: "+998 99 408-51-11",
      callNow2: "+998 97 701-44-66",
      requestOffer: "Tijoriy taklif olish",
    },
    hero: {
      badge: "DAVLAT PROBIR PALATASI VA EKOLOGIYA LITSENZIYASIGA EGA KORXONA",
      locationBadge: "EKO-PARTNER · TOSHKENT",
      headlineTop: "Hisobdan chiqarilgan texnika va mulklarni",
      headlineHighlight: "QONUNIY UTILIZATSIYA QILISH",
      titleStart: "Chiqindilarni professional ",
      titleHighlight: "utilizatsiya qilish",
      titleEnd: " va zararsizlantirish",
      subtitle: "Foydalanishdan chiqarilgan va eskirgan IT-uskunalar, elektronika hamda orgtexnikalarni litsenziya asosida xavfsiz utilizatsiya qilish va hisobdan chiqarish (spisaniye). Defekt akti va Didox orqali 100% rasmiy hujjatlar.",
      ctaCalculate: "Narxni hisoblash",
      ctaTelegram: "Telegram orqali bog'lanish",
      ctaForm: "Shartnoma tuzish",
      btnSubmitLead: "Ariza qoldirish",
      btnHowWeWork: "Qanday ishlaymiz",
      pillClasses: "Barcha xavflilik toifalari",
      pillActs: "Didox orqali aktlar",
      pillFleet: "Xususiy maxsus transport",
      floatingBadge247Title: "24/7",
      floatingBadge247Subtitle: "chiqindini olib ketishga buyurtma qabul qilish",
      floatingBadgeCycleTitle: "To'liq sikl",
      floatingBadgeCycleSubtitle: "olib ketishdan to zararsizlantirishgacha",
      trustPills: {
        license: "Davlat Probir Nazorati Inspektsiyasi litsenziyasi № 538500",
        fleet: "Xususiy ixtisoslashgan ADR avtotransport parki",
        didox: "24 soat ichida Didox orqali elektron hisob-faktura va aktlar",
      },
      stats: {
        tons: { value: "35 000+", label: "Zararsizlantirilgan chiqindi" },
        clients: { value: "480+", label: "Doimiy korporativ mijozlar" },
        speed: { value: "24 soat", label: "Hujjatlarni Didoxda taqdim etish" },
        compliance: { value: "100%", label: "Ekologik me'yorlarga kafolat" },
      },
    },
    services: {
      sectionTag: "Litsenziyalangan yo'nalishlar",
      title: "Hisobdan chiqarilgan texnika va mulklarni utilizatsiya qilish",
      subtitle: "Foydalanishdan chiqarilgan va eskirgan IV-V toifali IT-uskunalar, elektronika va orgtexnikalarni defekt akti bilan qonuniy hisobdan chiqarish, qimmatbaho va rangli metallarni ajratish hamda utilizatsiya qilish.",
      requestForService: "Ushbu xizmatga buyurtma berish",
      viewDetails: "Batafsil ma'lumot",
      hazardBadge: "Xavflilik toifasi",
      items: [
        {
          id: "it-equipment",
          hazardClass: "IV - V toifalar",
          title: "Kompyuter va ofis texnikasi (IT-uskunalar)",
          shortDesc: "Tizim bloklari, serverlar, noutbuklar, protsessorlar va elektron platalarni hisobdan chiqarish va utilizatsiya qilish.",
          fullDesc: "Korxona va tashkilotlar balansidagi eskirgan kompyuter va server uskunalarini qonuniy hisobdan chiqarish (spisaniye). Birlamchi demontaj, Davlat Probir Palatasi litsenziyasi asosida qimmatbaho metallar (ЛОДМ) va rangli metallarni ajratish, qolgan polimer va metall bo'lmagan qismlarni ekologik utilizatsiya qilish.",
          tags: ["Tizim bloklari", "Serverlar", "Noutbuklar", "Elektron platalar"],
          features: ["Balansdan chiqarish uchun defekt akti beriladi (Ilova №3)", "Probir Palatasi litsenziyasi asosida ЛОДМ ajratish", "Didox orqali elektron hisob-faktura va aktlar"],
          recommendedFor: "Banklar, davlat idoralari, IT-kompaniyalar, korporativ ofislar",
        },
        {
          id: "monitors-displays",
          hazardClass: "IV toifa",
          title: "Monitorlar va displeylar",
          shortDesc: "LCD, LED, OLED hamda EOT monitorlar, axborot panellari va displey qurilmalarini xavfsiz utilizatsiya qilish.",
          fullDesc: "Displey va monitorlar korpusini ajratish, lyuminofor qatlamlari va xavfli matritsalarni zararsizlantirish, elektron boshqaruv sxemalarini saralash. Korpus plastmassalari ikkilamchi xomashyoga, metall qotishmalari esa 'O'zmetkombinat' va 'O'zikkilamchiranglimetall' AJga yo'naltiriladi.",
          tags: ["LCD monitorlar", "LED ekranlar", "EOT ekranlar", "Terminallar"],
          features: ["Toksik qismlarni xavfsiz zararsizlantirish", "Plastmassa, shisha va elektron platalarni saralash", "O'z maxsus transportimizda olib ketish"],
          recommendedFor: "O'quv markazlari, bank filiallari, aloqa operatorlari, call-markazlar",
        },
        {
          id: "printing-copying",
          hazardClass: "IV toifa",
          title: "Chop etish va nusxalash uskunalari",
          shortDesc: "Printerlar, plotterlar, skanerlar, kserokslar va ko'p funksiyali qurilmalarni (MFU) hisobdan chiqarish va utilizatsiya qilish.",
          fullDesc: "Chop etish texnikalarini qismlarga ajratish: tonerli kartrijlar, qizdirish elementlari (fuzerlar), optika va elektr dvigatellarini saralash. Toner qoldiqlari maxsus ekologik poligonlarda zararsizlantiriladi, rangli va qora metallar qayta ishlashga topshiriladi.",
          tags: ["Printerlar", "MFU va kserokslar", "Plotterlar", "Kartrijlar"],
          features: ["Toner changini xavfsiz zararsizlantirish", "Metall va dvigatellarni saralash", "Spisaniye uchun rasmiy defekt akti"],
          recommendedFor: "Tipografiyalar, loyihalash institutlari, arxivlar, yirik ofislar",
        },
        {
          id: "network-power-furniture",
          hazardClass: "IV - V toifalar",
          title: "Tarmoq va quvvat uskunalari va mebellar",
          shortDesc: "UPS (uzluksiz quvvat manbalari), kommutatorlar, server shkaflari, kabellar hamda eskirgan ofis mebellari utilizatsiyasi.",
          fullDesc: "Og'ir server shkaflari, quvvat akkumulyatorlari, mis va alyuminiy kabellar hamda ofis mebellarini demontaj qilish va olib ketish. Akkumulyatorlar neytrallanadi, rangli metall simlar (mis, alyuminiy) 'O'zikkilamchiranglimetall' AJga, qora metall 'O'zmetkombinat' AJga topshiriladi.",
          tags: ["UPS va akkumulyatorlar", "Server shkaflari", "Mis kabellar", "Ofis mebellari"],
          features: ["Takelej va yuklash-tushirish xizmati", "Akkumulyator kislotalarini zararsizlantirish", "Ikkilamchi metallolom qiymatini hisob-kitob qilish (Ilova №4)"],
          recommendedFor: "Data-markazlar (DITs), aloqa operatorlari, sanoat korxonalari",
        },
        {
          id: "special-tech-waste",
          hazardClass: "IV - V toifalar (Probir Palatasi)",
          title: "Boshqa maxsus texnik chiqindilar",
          shortDesc: "O'lchov asboblari, laboratoriya qurilmalari, bankomatlar, kassa apparatlari va nostandart elektron jihozlar.",
          fullDesc: "Nostandart va murakkab uskunalarni defektologik ekspertizadan o'tkazish. Tarkibida oltin, kumush, platina kabi qimmatbaho metallar bo'lgan platalar va detallar Davlat Probir Palatasi litsenziyasi asosida ajratilib, O'zbekiston Respublikasi ixtisoslashtirilgan korxonalariga topshiriladi.",
          tags: ["Bankomatlar", "Laboratoriya asboblari", "O'lchov uskunalari", "Probir Palatasi"],
          features: ["Davlat Probir Nazorati litsenziyasi № 538500", "Eskirgan texnikaga defektologik xulosa", "Davlat ekologiya tekshiruvlari uchun ma'lumotnoma (2.2.12-band)"],
          recommendedFor: "Tibbiyot diagnostika markazlari, banklar, ilmiy institutlar, ishlab chiqarish korxonalari",
        },
      ],
    },
    partners: {
      sectionTag: "Yirik davlat va moliya tashkilotlari ishonchi",
      title: "Bizga ishonch bildirgan asosiy hamkorlarimiz",
      subtitle: "EKO-PARTNER O'zbekistonning nufuzli davlat organlari, banklari va xavfsizlik tuzilmalarining eskirgan IT-uskunalari va mulklarini utilizatsiya qilish bo'yicha ishonchli bosh hamkori hisoblanadi.",
      verifiedPartner: "Rasmiy shartnoma asosidagi hamkor",
      bannerTag: "B2B & Davlat sektori",
      bannerTitle: "Korxonangiz texnikalarini qonuniy hisobdan chiqarishga tayyormisiz?",
      bannerDesc: "Biz davlat talablariga to'liq javob beruvchi defekt aktlari, topshirish-qabul qilish dalolatnomalari va Didox orqali elektron hisob-fakturalarni taqdim etamiz.",
      items: [
        {
          id: "gov-uz",
          name: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
          category: "Bosh ijroiya davlat organi",
          logo: "/partners/gov-uz.svg",
          description: "Bosh davlat ijroiya organi balansidagi barcha toifadagi eskirgan kompyuter va orgtexnika mulklarini litsenziya asosida utilizatsiya qilish.",
          badge: "Davlat organi",
        },
        {
          id: "tashkent-hokimiyat",
          name: "Toshkent Shahar Hokimiyati",
          category: "Mahalliy ijro etuvchi hokimiyat",
          logo: "/partners/tashkent-hokimiyat.svg",
          description: "Toshkent shahri ma'muriy tizimi va uning tasarrufidagi muassasalarning hisobdan chiqarilgan texnika va uskunalarini utilizatsiya qilish.",
          badge: "Shahar hokimiyati",
        },
        {
          id: "qoriqlash",
          name: "Toshkent shahar qo'riqlash boshqarmasi",
          category: "Xavfsizlik va qo'riqlash xizmati",
          logo: "/partners/qoriqlash-emblem.png",
          description: "Maxsus xavfsizlik, aloqa va monitoring tizimlari elektronikasini qonuniy defektologik tekshirish va utilizatsiya qilish.",
          badge: "Xavfsizlik xizmati",
        },
        {
          id: "asaka-bank",
          name: "Asaka Bank",
          category: "Yetakchi yirik tijorat banki",
          logo: "/partners/asakabank.png",
          description: "Respublika bo'ylab keng filiallar tarmog'iga ega bankning server infratuzilmasi, kompyuter parki va ofis uskunalarini qonuniy hisobdan chiqarish.",
          badge: "Tijorat banki",
        },
        {
          id: "avo-bank",
          name: "Avo Bank",
          category: "Innovatsion raqamli fintech bank",
          logo: "/partners/avo-bank.png",
          description: "Zamonaviy raqamli banking IT-uskunalari, serverlari va terminallarini xavfsiz va ekologik toza qayta ishlash.",
          badge: "Raqamli bank",
        },
        {
          id: "gaznachilik",
          name: "Toshkent shahar g'aznachilik xizmati boshqarmasi",
          category: "Davlat g'aznachilik va moliya organi",
          logo: "/partners/gaznachilik.svg",
          description: "Davlat byudjeti hisobidan moliyalashtiriladigan muassasalar va g'aznachilik bo'linmalarining eskirgan IT-uskunalari, serverlari va orgtexnikalarini qonuniy utilizatsiya qilish.",
          badge: "G'aznachilik organi",
        },
      ],
    },
    calculator: {
      sectionTag: "Tezkor onlayn hisob-kitob",
      title: "Chiqindilarni utilizatsiya qilish xarajatini hisoblang",
      subtitle: "3 ta oddiy qadamda chiqindi turini va hajmini belgilang, biz sizga daqiqalar ichida aniq tijoriy taklif taqdim etamiz.",
      modalTitle: "Interaktiv narx kalkulyatori",
      step1Title: "1-qadam: Chiqindi toifasini tanlang",
      step1Desc: "Korxonangizda hosil bo'lgan asosiy chiqindi guruhini belgilang",
      step2Title: "2-qadam: Chiqindi hajmi va chastotasini tanlang",
      step2Desc: "Taxminiy oylik yoki bir martalik utilizatsiya hajmini ko'rsating",
      step3Title: "3-qadam: Ma'lumotlarni yuboring va hisob-kitobni oling",
      step3Desc: "Didox orqali rasmiy smeta va shartnoma loyihasi uchun kontaktlaringizni kiriting",
      wasteTypes: {
        medical: "Tibbiyot va farmatsevtika chiqindilari (A, B, V, G toifa)",
        industrial: "Sanoat chiqindilari, shlamlar va filtrlari",
        chemical: "Xavfli kimyo, ishlatilgan moy va kislotalar",
        expired: "Muddati o'tgan tovarlar va bojxona chiqindilari",
        mercury: "Simobli lampalar, priborlar va orgtexnika",
        construction: "Alohida texnik va qurilish chiqindilari",
      },
      unitKg: "kg",
      unitTons: "tonna",
      unitCubic: "m³",
      frequencyOneTime: "Bir martalik tozalash",
      frequencyMonthly: "Doimiy oylik reja",
      frequencyContract: "Yillik korporativ xizmat",
      companyLabel: "Kompaniya nomi (YATT yoki MChJ)",
      nameLabel: "Mas'ul shaxs ismi",
      phoneLabel: "Telefon raqami",
      volumeLabel: "Chiqindi miqdori:",
      calculatedEstimate: "Taxminiy asosiy narx diapazoni:",
      estimateNote: "* Yakuniy narx chiqindining aniq tarkibi, laboratoriya tahlili va transport masofasiga qarab aniqlashtiriladi.",
      btnNext: "Keyingi bosqich",
      btnBack: "Orqaga",
      btnSubmit: "Rasmiy smetani olish",
      btnCalculating: "Hisoblanmoqda...",
      quickSummary: "Tanlangan parametrlar:",
    },
    licenses: {
      sectionTag: "Rasmiy Davlat Litsenziyasi va Tavsiyanoma",
      title: "Davlat litsenziyasi va rasmiy tavsiyanomalar",
      subtitle: "Barcha xizmatlar O'zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi Davlat probir nazorati inspektsiyasi litsenziyasi (Tasdiqnoma № 538500) asosida ko'rsatiladi va Vazirlar Mahkamasi tomonidan tavsiya etilgan.",
      officialRegistry: "Rasmiy Davlat Reyestri Ro'yxati: X-83693",
      watermarkText: "EKO-PARTNER ASLI NUSXASI • NOQONUNIY KO'CHIRISH TAQIQLANADI",
      antiTheftProtected: "Hujjat qalbaki nusxa va noqonuniy ko'chirishdan himoyalangan",
      clickToZoom: "Kattalashtirib ko'rish uchun bosing",
      certModalTitle: "Rasmiy hujjat va litsenziya tekshiruvi",
      verifiedDocument: "Davlat reyestridan muvaffaqiyatli o'tgan rasmiy hujjat",
      closeModal: "Yopish",
      downloadPdf: "Rasmiy PDF hujjatni yuklab olish",
      viewOriginal: "To'liq hajmda ochish",
      items: [
        {
          id: "lic-probir-main",
          title: "Davlat Probir Nazorati Inspektsiyasi Litsenziyasi (Tasdiqnoma № 538500)",
          regNumber: "№ 538500 (Reestr: X-83693)",
          issueDate: "22.12.2024",
          authority: "O'zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi Davlat probir nazorati inspektsiyasi",
          validity: "Muddatsiz (Rasmiy reyestrda)",
          description: "Qimmatbaho metallar va qimmatbaho toshlar bo'lgan uskunalar bilan ishlash, texnikalarni hisobdan chiqarish va qonuniy utilizatsiya qilish faoliyati bo'yicha berilgan rasmiy tasdiqnoma. STIR: 306995292.",
          image: "/licenses/litsenziya-page-1.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "Davlat Litsenziyasi",
        },
        {
          id: "lic-probir-scope",
          title: "Utilizatsiya va saralash faoliyati ruxsatnomasi (Litsenziya ilovasi)",
          regNumber: "№ 538500 (2-ilova)",
          issueDate: "22.12.2024",
          authority: "Davlat probir nazorati inspektsiyasi",
          validity: "Muddatsiz",
          description: "Maishiy texnika, orgtexnika, tibbiy va tarkibida qimmatbaho metallar mavjud boshqa texnikalarning bosma platalarini qismlarga ajratish, birlamchi ishlov berish, saralash va utilizatsiya qilish.",
          image: "/licenses/litsenziya-page-2.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "Faoliyat turi",
        },
        {
          id: "tavsiyanoma-gov",
          title: "O'zbekiston Respublikasi Vazirlar Mahkamasi Tavsiyanomasi",
          regNumber: "№ 008 (STIR: 306 995 292)",
          issueDate: "26.01.2026",
          authority: "O'zbekiston Respublikasi Vazirlar Mahkamasining Hukumat uyidan foydalanish boshqarmasi",
          validity: "2018-yildan buyon ishonchli hamkor",
          description: "2018-yildan buyon 'EKO PARTNER' MCHJ bilan uzoq yillik muvaffaqiyatli hamkorlik asosida, jamiyatning utilizatsiya sohasidagi yuksak mas'uliyati, davlat qonunlariga to'liq rioya qilishi va professional faoliyatiga berilgan rasmiy tavsiyanoma.",
          image: "/licenses/tavsiyanoma-vazirlar-mahkamasi.jpg",
          badge: "Davlat Tavsiyanomasi",
        },
      ],
    },
    process: {
      sectionTag: "Hamkorlik algoritmi",
      title: "Ishlash tartibi: Buyurtmadan to Didox aktigacha",
      subtitle: "Burokratiyasiz, 100% qonuniy va xavfsiz ish tartibi.",
      steps: [
        {
          step: "01",
          title: "Ariza va Chiqindi Auditi",
          duration: "15 daqiqa",
          desc: "Sayt yoki telefon orqali murojaat qilasiz. Mutaxassisimiz chiqindi toifasi, hajmi va xavflilik darajasini aniqlaydi.",
          highlight: "Tezkor birlamchi konsultatsiya",
        },
        {
          step: "02",
          title: "Rasmiy Shartnoma va Didox",
          duration: "1-2 soat",
          desc: "Didox tizimi orqali ikki tomonlama elektron shartnoma yuboriladi. Barcha yuridik kafolatlar qonuniy mustahkamlanadi.",
          highlight: "Didox orqali tezkor imzolash",
        },
        {
          step: "03",
          title: "Ixtisoslashgan Transportda Olib Ketish",
          duration: "24 soat ichida",
          desc: "Bizning sertifikatlangan ADR-avtotransportimiz chiqindilarni ob'ektingizdan xavfsiz qabul qilib, zavodimizga yetkazadi.",
          highlight: "O'z texnika parkimiz",
        },
        {
          step: "04",
          title: "Zararsizlantirish va Rasmiy Akt",
          duration: "24 soat ichida",
          desc: "Utilizatsiya amalga oshirilgach, Davlat Ekonazorati tekshiruvlari uchun rasmiy topshirish-qabul qilish akti Didox orqali tasdiqlanadi.",
          highlight: "100% yuridik himoya",
        },
      ],
    },
    leadForm: {
      sectionTag: "Hamkorlikni boshlash",
      title: "Chiqindilarni utilizatsiya qilish uchun ariza qoldiring",
      subtitle: "Mutaxassisimiz 15 daqiqa ichida siz bilan bog'lanib, shartnoma shartlari va aniq smetani taqdim etadi.",
      benefit1: "Didox orqali 24 soat ichida to'liq rasmiy hujjatlar",
      benefit2: "Ekologiya inspeksiyasi tekshiruvlarida to'liq yuridik himoya",
      benefit3: "Toshkent va butun respublika bo'ylab o'z transportimiz",
      companyPlaceholder: "Kompaniya yoki korxona nomi",
      namePlaceholder: "Ismingiz va lavozimingiz",
      phonePlaceholder: "+998 (__) ___-__-__",
      categoryLabel: "Chiqindi toifasi",
      serviceSelectPlaceholder: "Chiqindi yo'nalishini tanlang...",
      categories: [
        "1. Kompyuter va ofis texnikasi (IT-uskunalar)",
        "2. Monitorlar va displeylar",
        "3. Chop etish va nusxalash uskunalari",
        "4. Tarmoq va quvvat uskunalari va mebellar",
        "5. Boshqa maxsus texnik chiqindilar",
      ],
      volumePlaceholder: "Taxminiy hajm (masalan: 500 kg, 3 tonna)",
      notesPlaceholder: "Qo'shimcha izohlar yoki chiqindi tarkibi haqida qisqacha...",
      btnSubmit: "Arizani yuborish va smeta olish",
      btnSubmitting: "Ma'lumotlar yuborilmoqda...",
      privacyNote: "Tugmani bosish orqali siz konfidensiallik va shaxsiy ma'lumotlarni qayta ishlash shartlariga rozilik bildirasiz.",
      successModal: {
        title: "Arizangiz muvaffaqiyatli qabul qilindi!",
        desc: "Bizning yetakchi ekolog mutaxassisimiz tez orada ko'rsatilgan raqam orqali siz bilan bog'lanadi va tijoriy taklif yuboradi.",
        telegramNotifyNote: "Ma'lumotlar Telegram orqali navbatchi dispetcherimizga zudlik bilan yetkazildi.",
        buttonClose: "Tushunarli, rahmat",
      },
      errorModal: {
        title: "Xatolik yuz berdi",
        desc: "Afsuski arizani yuborishda texnik uzilish yuz berdi. Iltimos, to'g'ridan-to'g'ri telefon yoki Telegram orqali bog'laning.",
        buttonRetry: "Qaytadan urinish",
      },
    },
    footer: {
      about: "EKO-PARTNER — O'zbekistonda xavfli va sanoat chiqindilarini utilizatsiya qilish va ekologik xavfsizlik bo'yicha yetakchi litsenziyalangan kompaniya. Biz atrof-muhit tozaligi va biznesingizning ekologik daxlsizligi uchun xizmat qilamiz.",
      quickLinks: "Tezkor havolalar",
      contactInfo: "Kontaktlar",
      addressLabel: "Bosh ofis manzili:",
      addressVal: "Toshkent sh., Yashnobod tumani, Mo'ynoq ko'chasi 241, 72-a uy.",
      phoneLabel: "Markaziy dispetcherlik:",
      emailLabel: "Korporativ pochta:",
      telegramLabel: "Telegram kanali va bot:",
      workingHoursLabel: "Ish grafigi:",
      workingHoursVal: "Dushanba – Shanba: 09:00 – 20:00",
      didoxNotice: "Elektron hujjat aylanishi: 100% integratsiya c Didox, Factura.uz",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
      uzbekistanEcoRegistry: "O'zbekiston Respublikasi Ekologiya qo'mitasining rasmiy ro'yxatidan o'tgan korxona.",
    },
  },

  ru: {
    brand: {
      name: "EKO-PARTNER",
      tagline: "Экологическое партнерство и обезвреживание отходов",
      licenseBadge: "Подтверждение Пробирного контроля № 538500",
    },
    nav: {
      services: "Услуги",
      partners: "Партнеры",
      calculator: "Калькулятор",
      licenses: "Лицензии",
      process: "Этапы",
      contacts: "Контакты",
      callNow: "+998 99 408-51-11",
      callNow2: "+998 97 701-44-66",
      requestOffer: "Получить КП",
    },
    hero: {
      badge: "ЛИЦЕНЗИРОВАННОЕ ПРЕДПРИЯТИЕ ПРОБИРНОЙ ПАЛАТЫ И ГОСЭКОЛОГИИ РУЗ",
      locationBadge: "EKO-PARTNER · ТАШКЕНТ",
      headlineTop: "Утилизация списанного имущества и",
      headlineHighlight: "IT-ОБОРУДОВАНИЯ С ВЫДАЧЕЙ АКТОВ",
      titleStart: "Комплексная ",
      titleHighlight: "утилизация и обезвреживание",
      titleEnd: " отходов в Узбекистане",
      subtitle: "Официальная утилизация и списание выбывшей из эксплуатации техники и оборудования IV–V классов опасности. Извлечение лома черных, цветных и драгоценных металлов по лицензии Пробирной Палаты РУз с выдачей дефектного акта.",
      ctaCalculate: "Рассчитать стоимость",
      ctaTelegram: "Связаться в Telegram",
      ctaForm: "Заключить договор",
      btnSubmitLead: "Оставить заявку",
      btnHowWeWork: "Как мы работаем",
      pillClasses: "Все классы опасности",
      pillActs: "Акты утилизации",
      pillFleet: "Свой спецтранспорт",
      floatingBadge247Title: "24/7",
      floatingBadge247Subtitle: "прием заявок на вывоз",
      floatingBadgeCycleTitle: "Полный цикл",
      floatingBadgeCycleSubtitle: "от вывоза до захоронения",
      trustPills: {
        license: "Подтверждение Пробирного контроля № 538500",
        fleet: "Собственный спецтранспорт ADR с допуском к опасным грузам",
        didox: "Электронные акты и счета-фактуры через Didox за 24 часа",
      },
      stats: {
        tons: { value: "35 000+", label: "Обезврежено отходов" },
        clients: { value: "480+", label: "Корпоративных клиентов" },
        speed: { value: "24 часа", label: "Предоставление актов в Didox" },
        compliance: { value: "100%", label: "Соответствие SanPiN и законам" },
      },
    },
    services: {
      sectionTag: "Лицензированные направления",
      title: "Утилизация списанного имущества и техники",
      subtitle: "Комплексная утилизация выбывшего из эксплуатации имущества IV–V классов опасности с выдачей дефектного акта, извлечением лома черных, цветных и драгоценных металлов по лицензии Пробирной Палаты РУз.",
      requestForService: "Заказать данную услугу",
      viewDetails: "Подробнее об услуге",
      hazardBadge: "Класс опасности",
      items: [
        {
          id: "it-equipment",
          hazardClass: "IV - V классы",
          title: "Компьютерная и офисная техника (IT-оборудование)",
          shortDesc: "Сбор, техническая экспертиза, списание с баланса и утилизация системных блоков, серверов, ноутбуков и электронных плат.",
          fullDesc: "Официальное списание и утилизация компьютерной техники и серверов. Первичный демонтаж на производственном участке, извлечение лома черных, цветных и драгоценных металлов (лицензия Пробирной Палаты РУз) с передачей на специализированные предприятия и выдачей дефектного акта.",
          tags: ["Системные блоки", "Серверы", "Ноутбуки", "Электронные платы"],
          features: ["Дефектный акт для списания с баланса (Приложение №3)", "Лицензия Пробирной Палаты РУз на извлечение ЛОДМ", "Электронные акты и счета-фактуры через Didox"],
          recommendedFor: "Банки, госучреждения, IT-компании, коммерческие предприятия",
        },
        {
          id: "monitors-displays",
          hazardClass: "IV класс",
          title: "Мониторы и дисплеи",
          shortDesc: "Безопасная утилизация неисправных и списанных LCD, LED, OLED мониторов, ЭЛТ-дисплеев, видеопанелей и терминалов.",
          fullDesc: "Поэтапный разбор корпусов мониторов, безопасная нейтрализация люминофоров и матриц, сортировка электронных схем. Пластик направляется на вторичную переработку, лом черных и цветных металлов — в АО «Узметкомбинат» и АО «Узвторцветмет».",
          tags: ["LCD мониторы", "LED экраны", "ЭЛТ-мониторы", "Инфокиоски"],
          features: ["Безопасная нейтрализация токсичных компонентов", "Сортировка пластика, стекла и электронных схем", "Транспортировка собственным транспортом исполнителя"],
          recommendedFor: "Учебные заведения, филиалы банков, сервисные центры, колл-центры",
        },
        {
          id: "printing-copying",
          hazardClass: "IV класс",
          title: "Печатная и копировальная техника",
          shortDesc: "Техническая экспертиза, списание с баланса и утилизация офисных принтеров, плоттеров, копировальных аппаратов (МФУ) и сканеров.",
          fullDesc: "Разборка печатной техники с безопасным извлечением картриджей, термоблоков, оптики и электродвигателей. Остатки тонера и полимеров обезвреживаются, металлический лом сдается в переработку согласно договору.",
          tags: ["Принтеры", "МФУ и ксероксы", "Плоттеры", "Оргтехника"],
          features: ["Безопасная локализация тонерной пыли", "Сортировка цветных металлов и электроприводов", "Дефектный акт для бухгалтерского списания"],
          recommendedFor: "Типографии, проектные институты, архивы, крупные офисы",
        },
        {
          id: "network-power-furniture",
          hazardClass: "IV - V классы",
          title: "Сетевое, силовое оборудование и мебель",
          shortDesc: "Утилизация ИБП (UPS), стабилизаторов, серверных стоек, маршрутизаторов, кабельных линий и списанной офисной мебели.",
          fullDesc: "Демонтаж тяжелых серверных шкафов, кабельных трасс, аккумуляторов ИБП и офисной мебели. Свинцовые аккумуляторы нейтрализуются, лом меди и алюминия передается в АО «Узвторцветмет», лом черных металлов — в АО «Узметкомбинат».",
          tags: ["ИБП и аккумуляторы", "Серверные стойки", "Кабельные трассы", "Офисная мебель"],
          features: ["Такелажные и погрузочно-разгрузочные работы (п. 2.2.4)", "Нейтрализация электролитов аккумуляторов", "Взаиморасчет за металлолом (Приложение №4)"],
          recommendedFor: "Дата-центры (ЦОД), телеком-операторы, предприятия связи",
        },
        {
          id: "special-tech-waste",
          hazardClass: "IV - V классы (Пробирная Палата)",
          title: "Прочие специальные технические отходы",
          shortDesc: "Утилизация контрольно-измерительных приборов, лабораторного оборудования, банкоматов, POS-терминалов и нестандартной техники.",
          fullDesc: "Дефектологическая экспертиза и утилизация нестандартной и сложной аппаратуры. Узлы и детали, содержащие драгоценные металлы (золото, серебро, платина, палладий), извлекаются по лицензии Пробирной Палаты РУз и передаются на переработку без задержек.",
          tags: ["Банкоматы", "Лабораторные приборы", "КИПиА", "Пробирная Палата"],
          features: ["Лицензия Пробирного контроля РУз № 538500", "Дефектологическая экспертиза любой сложности", "Справка об утилизации и размещении отходов (п. 2.2.12)"],
          recommendedFor: "Диагностические центры, банки, НИИ, заводы и лаборатории",
        },
      ],
    },
    partners: {
      sectionTag: "Доверие государственных и финансовых институтов",
      title: "Наши ключевые партнеры и клиенты",
      subtitle: "EKO-PARTNER выступает надежным генеральным подрядчиком по утилизации списанного оборудования и IT-активов для ведущих государственных ведомств, банков и силовых структур Узбекистана.",
      verifiedPartner: "Официальный партнер по договору",
      bannerTag: "B2B и Государственный сектор",
      bannerTitle: "Готовы к законному списанию и утилизации техники вашего предприятия?",
      bannerDesc: "Мы предоставляем дефектные акты, акты приема-передачи и электронные счета-фактуры через Didox в строгом соответствии с требованиями законодательства.",
      items: [
        {
          id: "gov-uz",
          name: "Кабинет Министров Республики Узбекистан",
          category: "Высший орган исполнительной власти",
          logo: "/partners/gov-uz.svg",
          description: "Утилизация и списание компьютерного оборудования, серверов и оргтехники аппарата высшего исполнительного органа республики.",
          badge: "Госорган",
        },
        {
          id: "tashkent-hokimiyat",
          name: "Хокимият города Ташкента",
          category: "Орган исполнительной власти столицы",
          logo: "/partners/tashkent-hokimiyat.svg",
          description: "Утилизация списанной компьютерной техники и оборудования муниципальных ведомств и учреждений города Ташкента.",
          badge: "Городской хокимият",
        },
        {
          id: "qoriqlash",
          name: "Управление охраны города Ташкента",
          category: "Служба охраны и безопасности",
          logo: "/partners/qoriqlash-emblem.png",
          description: "Дефектологическая экспертиза и утилизация спецтехники связи, охранной сигнализации и электронного оборудования.",
          badge: "Служба охраны",
        },
        {
          id: "asaka-bank",
          name: "АКБ «Асакабанк»",
          category: "Ведущий системообразующий банк",
          logo: "/partners/asakabank.png",
          description: "Комплексное списание и переработка серверных комплексов, банкоматов и компьютерного парка банковской сети.",
          badge: "Коммерческий банк",
        },
        {
          id: "avo-bank",
          name: "AVO bank",
          category: "Инновационный цифровой розничный банк",
          logo: "/partners/avo-bank.png",
          description: "Утилизация оборудования цифрового банкинга, сетевых мощностей и терминалов в строгом соответствии с экологическими стандартами.",
          badge: "Цифровой банк",
        },
        {
          id: "gaznachilik",
          name: "Управление казначейской службы города Ташкента",
          category: "Государственный финансово-казначейский орган",
          logo: "/partners/gaznachilik.svg",
          description: "Официальное списание и экологическая утилизация серверного оборудования, вычислительной техники и оргтехники казначейских подразделений.",
          badge: "Казначейство",
        },
      ],
    },
    calculator: {
      sectionTag: "Быстрый онлайн-расчет",
      title: "Рассчитайте стоимость утилизации отходов",
      subtitle: "Выберите категорию и объем отходов в 3 простых шага, и мы подготовим персональное коммерческое предложение.",
      modalTitle: "Интерактивный калькулятор утилизации",
      step1Title: "Шаг 1: Выберите тип отходов",
      step1Desc: "Укажите основную категорию отходов вашего предприятия",
      step2Title: "Шаг 2: Укажите объём и периодичность",
      step2Desc: "Задайте примерный вес или объем и регулярность вывоза",
      step3Title: "Шаг 3: Контакты для отправки сметы",
      step3Desc: "Введите реквизиты компании для отправки проекта договора через Didox",
      wasteTypes: {
        medical: "Медицинские и фармацевтические отходы (Классы А, Б, В, Г)",
        industrial: "Промышленные шламы, фильтры и твердые остатки",
        chemical: "Отработанные масла, растворители, кислоты и химия",
        expired: "Просроченные товары, косметика и таможенные грузы",
        mercury: "Ртутные люминесцентные лампы и оргтехника",
        construction: "Специфические строительные и тех-отходы",
      },
      unitKg: "кг",
      unitTons: "тонн",
      unitCubic: "м³",
      frequencyOneTime: "Разовый вывоз",
      frequencyMonthly: "Ежемесячный график",
      frequencyContract: "Годовой корпоративный контракт",
      companyLabel: "Название организации (ООО, СП, ЧП)",
      nameLabel: "Контактное лицо",
      phoneLabel: "Номер телефона",
      volumeLabel: "Объем отходов:",
      calculatedEstimate: "Ориентировочная базовая стоимость:",
      estimateNote: "* Точная стоимость формируется на основе лабораторного анализа состава и расстояния транспортировки.",
      btnNext: "Следующий шаг",
      btnBack: "Назад",
      btnSubmit: "Получить официальную смету",
      btnCalculating: "Расчет...",
      quickSummary: "Выбранные параметры:",
    },
    licenses: {
      sectionTag: "Государственная лицензия и рекомендация",
      title: "Государственная лицензия и официальные документы",
      subtitle: "Деятельность осуществляется строго на основании официального Подтверждения Инспекции государственного пробирного контроля № 538500 и подтверждена официальной рекомендацией Кабинета Министров РУз.",
      officialRegistry: "Номер реестра подтверждений: X-83693",
      watermarkText: "ОРИГИНАЛ EKO-PARTNER • КОПИРОВАНИЕ ЗАПРЕЩЕНО",
      antiTheftProtected: "Документ защищен от фальсификации и несанкционированного копирования",
      clickToZoom: "Нажмите для детального просмотра документа",
      certModalTitle: "Официальный документ и проверка лицензии",
      verifiedDocument: "Официальный государственный документ из реестра РУз",
      closeModal: "Закрыть",
      downloadPdf: "Скачать официальный PDF документ",
      viewOriginal: "Открыть в полном размере",
      items: [
        {
          id: "lic-probir-main",
          title: "Подтверждение Инспекции государственного пробирного контроля № 538500",
          regNumber: "№ 538500 (Реестр: X-83693)",
          issueDate: "22.12.2024",
          authority: "Инспекция государственного пробирного контроля при Министерстве экономики и финансов РУз",
          validity: "Бессрочно (В реестре)",
          description: "Официальное подтверждение на право работы с оборудованием, содержащим драгоценные металлы и драгоценные камни, при списании и утилизации. ИНН: 306995292.",
          image: "/licenses/litsenziya-page-1.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "Гослицензия",
        },
        {
          id: "lic-probir-scope",
          title: "Разрешенные виды деятельности: разборка и утилизация печатных плат (Приложение)",
          regNumber: "№ 538500 (Стр. 2)",
          issueDate: "22.12.2024",
          authority: "Инспекция государственного пробирного контроля",
          validity: "Бессрочно",
          description: "Разборка, первичная обработка, сортировка, утилизация печатных плат бытовой техники, оргтехники, медицинской и другой техники, содержащей драгоценные металлы.",
          image: "/licenses/litsenziya-page-2.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "Вид деятельности",
        },
        {
          id: "tavsiyanoma-gov",
          title: "Рекомендательное письмо Кабинета Министров Республики Узбекистан",
          regNumber: "№ 008 (ИНН: 306 995 292)",
          issueDate: "26.01.2026",
          authority: "ГУ «Управление по эксплуатации Дома Правительства Кабинета Министров Республики Узбекистан»",
          validity: "Надежный партнер с 2018 года",
          description: "Официальное подтверждение многолетнего успешного сотрудничества с 2018 года. Высокая оценка профессионализма руководства и специалистов ООО «EKO-PARTNER», строгого соблюдения законодательства РУз и надежности в сфере утилизации.",
          image: "/licenses/tavsiyanoma-vazirlar-mahkamasi.jpg",
          badge: "Госрекомендация",
        },
      ],
    },
    process: {
      sectionTag: "Регламент сотрудничества",
      title: "Порядок работы: От заявки до акта в Didox",
      subtitle: "Прозрачный процесс без бюрократии со 100% юридической защитой.",
      steps: [
        {
          step: "01",
          title: "Заявка и Эко-аудит",
          duration: "15 минут",
          desc: "Оставляете заявку. Наш эколог связывается с вами, уточняет класс опасности, объемы и график вывоза.",
          highlight: "Экспресс-консультация эколога",
        },
        {
          step: "02",
          title: "Договор через Didox",
          duration: "1-2 часа",
          desc: "Мгновенно формируем электронный договор в Didox с фиксацией цен и ответственности сторон.",
          highlight: "Подписание в Didox / Factura.uz",
        },
        {
          step: "03",
          title: "Вывоз спецтранспортом ADR",
          duration: "В течение 24 часов",
          desc: "Подаем специализированный транспорт с обученным экипажем и герметичной тарой прямо на ваш склад.",
          highlight: "Собственный автопарк",
        },
        {
          step: "04",
          title: "Обезвреживание и Эко-акты",
          duration: "В течение 24 часов",
          desc: "После обезвреживания направляем официальный двусторонний акт утилизации через Didox для эконадзора.",
          highlight: "100% защита от штрафов",
        },
      ],
    },
    leadForm: {
      sectionTag: "Начать сотрудничество",
      title: "Оставьте заявку на утилизацию отходов",
      subtitle: "Дежурный инженер-эколог перезвонит в течение 15 минут с готовым расчетом стоимости.",
      benefit1: "Официальные акты утилизации в Didox за 24 часа",
      benefit2: "Полная юридическая защита при проверках Госкомэкологии",
      benefit3: "Собственный спецтранспорт ADR по Ташкенту и всему Узбекистану",
      companyPlaceholder: "Название организации (ООО, АО, СП)",
      namePlaceholder: "Ваше имя и должность",
      phonePlaceholder: "+998 (__) ___-__-__",
      categoryLabel: "Категория / Тип отходов",
      serviceSelectPlaceholder: "Выберите тип отходов...",
      categories: [
        "1. Компьютерная и офисная техника (IT-оборудование)",
        "2. Мониторы и дисплеи",
        "3. Печатное и копировальное оборудование (МФУ, принтеры)",
        "4. Сетевое, силовое оборудование и офисная мебель",
        "5. Прочие специальные технические отходы",
      ],
      volumePlaceholder: "Примерный объем (например: 800 кг, 5 тонн)",
      notesPlaceholder: "Краткое описание отходов или особые требования...",
      btnSubmit: "Отправить заявку и получить смету",
      btnSubmitting: "Отправка заявки...",
      privacyNote: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных и условий конфиденциальности.",
      successModal: {
        title: "Заявка успешно принята!",
        desc: "Спасибо! Наш ведущий специалист уже получил ваши данные и готовит детальный расчет стоимости и проект договора.",
        telegramNotifyNote: "Уведомление мгновенно отправлено дежурному диспетчеру в Telegram.",
        buttonClose: "Отлично, спасибо",
      },
      errorModal: {
        title: "Ошибка отправки",
        desc: "Произошла непредвиденная задержка связи. Пожалуйста, позвоните нам напрямую или напишите в Telegram.",
        buttonRetry: "Попробовать снова",
      },
    },
    footer: {
      about: "EKO-PARTNER — ведущая лицензированная экологическая компания Узбекистана в сфере сбора, транспортировки, обезвреживания и утилизации промышленных, опасных и медицинских отходов I–IV классов опасности.",
      quickLinks: "Навигация",
      contactInfo: "Контакты",
      addressLabel: "Адрес главного офиса:",
      addressVal: "г. Ташкент, Яшнабадский район, ул. Муйнакская 241, дом 72-а.",
      phoneLabel: "Центральная диспетчерская:",
      emailLabel: "Корпоративная почта:",
      telegramLabel: "Telegram канал и бот:",
      workingHoursLabel: "График работы:",
      workingHoursVal: "Пн – Сб: 09:00 – 20:00",
      didoxNotice: "Электронный документооборот: 100% интеграция с Didox, Factura.uz",
      allRightsReserved: "Все права защищены.",
      uzbekistanEcoRegistry: "Зарегистрировано в Государственном реестре экологических предприятий РУз.",
    },
  },

  en: {
    brand: {
      name: "EKO-PARTNER",
      tagline: "Environmental Partnership & Waste Neutralization",
      licenseBadge: "State Assay Control License #538500",
    },
    nav: {
      services: "Services",
      partners: "Partners",
      calculator: "Calculator",
      licenses: "Licenses",
      process: "Process",
      contacts: "Contacts",
      callNow: "+998 99 408-51-11",
      callNow2: "+998 97 701-44-66",
      requestOffer: "Request Proposal",
    },
    hero: {
      badge: "LICENSED BY THE STATE ASSAY CHAMBER & ECOLOGY COMMITTEE",
      locationBadge: "EKO-PARTNER · TASHKENT",
      headlineTop: "Comprehensive Recycling & Disposal of",
      headlineHighlight: "DECOMMISSIONED ASSETS & IT TECH",
      titleStart: "Comprehensive ",
      titleHighlight: "waste disposal & recycling",
      titleEnd: " across Uzbekistan",
      subtitle: "Certified disposal and write-off of decommissioned IT hardware, electronics, and office equipment. Precious and non-ferrous metal recovery under State Assay Chamber license with full defect documentation.",
      ctaCalculate: "Calculate Cost",
      ctaTelegram: "Contact via Telegram",
      ctaForm: "Sign Agreement",
      btnSubmitLead: "Submit Request",
      btnHowWeWork: "How We Work",
      pillClasses: "All Hazard Classes (I-IV)",
      pillActs: "Didox Disposal Acts",
      pillFleet: "Certified ADR Fleet",
      floatingBadge247Title: "24/7",
      floatingBadge247Subtitle: "dispatch & order reception",
      floatingBadgeCycleTitle: "Full Cycle",
      floatingBadgeCycleSubtitle: "from collection to safe disposal",
      trustPills: {
        license: "State Assay Control Inspection License #538500",
        fleet: "Private certified ADR specialized vehicle fleet",
        didox: "Official electronic invoices & acts via Didox within 24h",
      },
      stats: {
        tons: { value: "35,000+", label: "Neutralized Waste" },
        clients: { value: "480+", label: "Corporate Clients" },
        speed: { value: "24 Hours", label: "Didox Certificate Turnaround" },
        compliance: { value: "100%", label: "Environmental Audit Compliance" },
      },
    },
    services: {
      sectionTag: "Licensed Service Directions",
      title: "Disposal & Recycling of Written-off Equipment and Assets",
      subtitle: "Certified decommissioning and recycling of Class IV–V IT hardware, electronics, and office equipment with technical defect certificates, scrap metal recovery, and Assay Chamber precious metal compliance.",
      requestForService: "Order this service",
      viewDetails: "Service details",
      hazardBadge: "Hazard Class",
      items: [
        {
          id: "it-equipment",
          hazardClass: "Classes IV - V",
          title: "Computer & Office Equipment (IT Hardware)",
          shortDesc: "Collection, technical inspection, balance-sheet write-off, and disposal of PCs, servers, laptops, and circuit boards.",
          fullDesc: "Official write-off and recycling of computer and server equipment. Primary disassembly, extraction of precious metals (State Assay Chamber license) and scrap metals, and safe disposal of non-metallic residues with certified defect acts.",
          tags: ["System Units", "Servers", "Laptops", "Circuit Boards"],
          features: ["Defect certificate for asset write-off (App. 3)", "State Assay Chamber license for precious metals", "Complete digital documentation via Didox"],
          recommendedFor: "Banks, state institutions, IT companies, corporate enterprises",
        },
        {
          id: "monitors-displays",
          hazardClass: "Class IV",
          title: "Monitors & Displays",
          shortDesc: "Safe disposal and recycling of decommissioned LCD, LED, OLED monitors, CRT screens, video panels, and kiosks.",
          fullDesc: "Systematic dismantling of monitors, neutralization of phosphors and panel modules, and circuit sorting. Plastics are channeled to polymer recyclers, while scrap metals go to state metallurgical plants (Uzmetkombinat and Uzvtortsvetmet).",
          tags: ["LCD Monitors", "LED Screens", "CRT Monitors", "Terminals"],
          features: ["Safe hazardous component neutralization", "Sorting of plastics, glass, and electronic boards", "Pickup with specialized carrier fleet"],
          recommendedFor: "Educational facilities, bank branches, service centers, call centers",
        },
        {
          id: "printing-copying",
          hazardClass: "Class IV",
          title: "Printing & Copying Equipment",
          shortDesc: "Technical evaluation, write-off, and recycling of office printers, plotters, photocopiers (MFP), and scanners.",
          fullDesc: "Dismantling printing hardware, isolating toner cartridges, fusers, optical sensors, and drive motors. Toner dust is ecologically neutralized, and structural metal is forwarded for smelting according to contract.",
          tags: ["Printers", "MFP & Copiers", "Plotters", "Office Tech"],
          features: ["Safe toner powder localization", "Motor and metal fraction separation", "Accounting write-off defect certificate"],
          recommendedFor: "Publishing houses, design institutes, corporate archives, business centers",
        },
        {
          id: "network-power-furniture",
          hazardClass: "Classes IV - V",
          title: "Network, Power Equipment & Furniture",
          shortDesc: "Recycling of UPS battery units, network switches, server racks, cabling systems, and decommissioned office furniture.",
          fullDesc: "Disassembly and removal of heavy server enclosures, structured wiring, UPS batteries, and office furniture. Batteries are neutralized, and copper/aluminum wires are delivered to state non-ferrous metal plants.",
          tags: ["UPS & Batteries", "Server Racks", "Cabling", "Office Furniture"],
          features: ["Rigging, heavy lifting, and transport", "Battery electrolyte neutralization", "Secondary metal valuation settlement (App. 4)"],
          recommendedFor: "Data centers, telecom providers, industrial complexes",
        },
        {
          id: "special-tech-waste",
          hazardClass: "Classes IV - V (Assay Chamber)",
          title: "Other Specialized Technical Waste",
          shortDesc: "Disposal of measuring instrumentation, laboratory equipment, ATMs, POS terminals, and custom electronic gear.",
          fullDesc: "Defect evaluation and recycling of complex instrumentation. Components containing precious metals (gold, silver, platinum) are recovered under the State Assay Chamber license and routed to certified refiners.",
          tags: ["ATMs & Kiosks", "Lab Equipment", "Instrumentation", "Assay Chamber"],
          features: ["State Assay Control License #538500", "Technical defect certification for write-offs", "Official environmental compliance certificate"],
          recommendedFor: "Diagnostic labs, banking networks, research institutes, industrial plants",
        },
      ],
    },
    partners: {
      sectionTag: "Trusted by Government & Financial Leaders",
      title: "Our Key Partners & Institutional Clients",
      subtitle: "EKO-PARTNER is a certified prime contractor for decommissioning and recycling written-off assets and IT hardware for Uzbekistan's leading ministries, financial institutions, and security authorities.",
      verifiedPartner: "Official Contracted Partner",
      bannerTag: "B2B & Public Sector",
      bannerTitle: "Ready for legal decommissioning and disposal of corporate equipment?",
      bannerDesc: "We provide official defect certificates, transfer-acceptance acts, and electronic invoicing via Didox in full compliance with state regulations.",
      items: [
        {
          id: "gov-uz",
          name: "Cabinet of Ministers of the Republic of Uzbekistan",
          category: "Supreme Executive State Authority",
          logo: "/partners/gov-uz.svg",
          description: "Decommissioning and certified disposal of IT assets, computers, and office machinery for the supreme executive body.",
          badge: "State Government",
        },
        {
          id: "tashkent-hokimiyat",
          name: "Tashkent City Administration (Khokimiyat)",
          category: "Capital Municipal Authority",
          logo: "/partners/tashkent-hokimiyat.svg",
          description: "Disposal of obsolete electronics, displays, and written-off municipal office tech across city administrative departments.",
          badge: "City Administration",
        },
        {
          id: "qoriqlash",
          name: "Tashkent City Security & Guard Department",
          category: "Security & Protection Service",
          logo: "/partners/qoriqlash-emblem.png",
          description: "Technical defect evaluation and disposal of specialized surveillance, security electronics, and telecommunications gear.",
          badge: "Security Agency",
        },
        {
          id: "asaka-bank",
          name: "JSCB Asakabank",
          category: "Major Systemic Commercial Bank",
          logo: "/partners/asakabank.png",
          description: "Decommissioning of enterprise banking server racks, ATMs, computing fleets, and power backup units.",
          badge: "Commercial Bank",
        },
        {
          id: "avo-bank",
          name: "AVO bank",
          category: "Innovative Digital Retail Bank",
          logo: "/partners/avo-bank.png",
          description: "Safe recycling and eco-friendly recovery of digital banking server hardware and IT infrastructure.",
          badge: "Digital Bank",
        },
        {
          id: "gaznachilik",
          name: "Tashkent City Treasury Service Department",
          category: "State Financial & Treasury Authority",
          logo: "/partners/gaznachilik.svg",
          description: "Decommissioning, technical audit, and certified disposal of obsolete servers, computing clusters, and office hardware of treasury subdivisions.",
          badge: "Treasury Authority",
        },
      ],
    },
    calculator: {
      sectionTag: "Instant Online Estimation",
      title: "Calculate Your Waste Disposal Budget",
      subtitle: "Select waste parameters in 3 simple steps to receive an accurate commercial proposal.",
      modalTitle: "Interactive Waste Calculator",
      step1Title: "Step 1: Choose Waste Category",
      step1Desc: "Select the primary category of waste generated by your facility",
      step2Title: "Step 2: Define Volume & Frequency",
      step2Desc: "Set your estimated quantity and collection frequency",
      step3Title: "Step 3: Company Details for Proposal",
      step3Desc: "Enter contact details to receive a formal invoice draft via Didox",
      wasteTypes: {
        medical: "Medical & Pharmaceutical Waste (Classes A, B, C, D)",
        industrial: "Industrial Sludge, Ash & Production By-products",
        chemical: "Hazardous Chemical Solvents, Acids & Oils",
        expired: "Expired Retail Goods & Customs Rejections",
        mercury: "Mercury Fluorescent Lamps & Electronic Equipment",
        construction: "Technical Construction & Demolition Debris",
      },
      unitKg: "kg",
      unitTons: "tons",
      unitCubic: "m³",
      frequencyOneTime: "One-time collection",
      frequencyMonthly: "Scheduled monthly plan",
      frequencyContract: "Annual corporate contract",
      companyLabel: "Company Name (LLC, JV, Corp)",
      nameLabel: "Contact Person & Title",
      phoneLabel: "Phone Number",
      volumeLabel: "Estimated volume:",
      calculatedEstimate: "Estimated Baseline Pricing Range:",
      estimateNote: "* Final pricing is confirmed following laboratory sample analysis and transit distance verification.",
      btnNext: "Next Step",
      btnBack: "Back",
      btnSubmit: "Get Official Proposal",
      btnCalculating: "Calculating...",
      quickSummary: "Selected parameters:",
    },
    licenses: {
      sectionTag: "Official State License & Recommendation",
      title: "State License & Official Recommendations",
      subtitle: "Operations are conducted under official Confirmation № 538500 of the State Assay Control Inspection under the Ministry of Economy and Finance of Uzbekistan and endorsed by the Cabinet of Ministers.",
      officialRegistry: "Registry Confirmation Number: X-83693",
      watermarkText: "EKO-PARTNER CERTIFIED COPY • UNLAWFUL DUPLICATION FORBIDDEN",
      antiTheftProtected: "Document protected against tampering and unauthorized replication",
      clickToZoom: "Click to inspect full resolution document",
      certModalTitle: "Official Document & License Verification",
      verifiedDocument: "Officially registered in the State Register of Uzbekistan",
      closeModal: "Close",
      downloadPdf: "Download Official PDF Document",
      viewOriginal: "Open in Full Size",
      items: [
        {
          id: "lic-probir-main",
          title: "State Assay Control Inspection License & Confirmation № 538500",
          regNumber: "№ 538500 (Registry: X-83693)",
          issueDate: "22.12.2024",
          authority: "State Assay Control Inspection under the Ministry of Economy and Finance of the Republic of Uzbekistan",
          validity: "Perpetual (In State Registry)",
          description: "Official state authorization for operations involving equipment and materials containing precious metals and precious stones, asset decommissioning, and recycling. TIN: 306995292.",
          image: "/licenses/litsenziya-page-1.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "State License",
        },
        {
          id: "lic-probir-scope",
          title: "Authorized Scope: Dismantling & Recycling of Electronic Boards (Annex)",
          regNumber: "№ 538500 (Page 2)",
          issueDate: "22.12.2024",
          authority: "State Assay Control Inspection of Uzbekistan",
          validity: "Perpetual",
          description: "Dismantling, primary processing, sorting, and certified disposal of printed circuit boards of home appliances, office tech, medical and other equipment containing precious metals.",
          image: "/licenses/litsenziya-page-2.png",
          pdfDownload: "/licenses/litsenziya-eko-partner.pdf",
          badge: "Scope of Work",
        },
        {
          id: "tavsiyanoma-gov",
          title: "Recommendation Letter from the Cabinet of Ministers of Uzbekistan",
          regNumber: "№ 008 (TIN: 306 995 292)",
          issueDate: "26.01.2026",
          authority: "Government House Operations Administration of the Cabinet of Ministers of Uzbekistan",
          validity: "Trusted Partner since 2018",
          description: "Official letter of recommendation highlighting a continuous, dependable partnership in decommissioning and waste disposal since 2018, praising the enterprise's high diligence, strict legal compliance, and reliability.",
          image: "/licenses/tavsiyanoma-vazirlar-mahkamasi.jpg",
          badge: "State Recommendation",
        },
      ],
    },
    process: {
      sectionTag: "Operating Workflow",
      title: "How It Works: From Request to Didox Acts",
      subtitle: "A frictionless 4-step workflow with 100% legal backing.",
      steps: [
        {
          step: "01",
          title: "Inquiry & Waste Audit",
          duration: "15 minutes",
          desc: "Submit your request. Our certified environmental engineer analyzes hazard classes, quantities, and schedules.",
          highlight: "Free ecological consultation",
        },
        {
          step: "02",
          title: "Contracting via Didox",
          duration: "1-2 hours",
          desc: "We dispatch a legally binding digital contract through Didox with transparent pricing and liability terms.",
          highlight: "Fast digital signature",
        },
        {
          step: "03",
          title: "ADR Specialized Pickup",
          duration: "Within 24 hours",
          desc: "Our licensed ADR transport fleet arrives with sealed containers to safely load and transport the materials.",
          highlight: "Dedicated company fleet",
        },
        {
          step: "04",
          title: "Disposal & Certified Acts",
          duration: "Within 24 hours",
          desc: "Upon destruction, official certificates of disposal are issued through Didox for state environmental audits.",
          highlight: "100% audit protection",
        },
      ],
    },
    leadForm: {
      sectionTag: "Initiate Partnership",
      title: "Request Waste Management & Disposal Proposal",
      subtitle: "Our on-duty environmental engineer will contact you within 15 minutes with a custom proposal.",
      benefit1: "Official disposal certificates in Didox within 24h",
      benefit2: "Complete legal immunity during State Ecology audits",
      benefit3: "Dedicated certified ADR transport throughout Uzbekistan",
      companyPlaceholder: "Company or enterprise name",
      namePlaceholder: "Your full name & designation",
      phonePlaceholder: "+998 (__) ___-__-__",
      categoryLabel: "Waste Category",
      serviceSelectPlaceholder: "Select waste category...",
      categories: [
        "1. Computer & Office Equipment (IT Hardware)",
        "2. Monitors & Displays",
        "3. Printing & Copying Equipment",
        "4. Network & Power Equipment and Office Furniture",
        "5. Other Specialized Technical Waste",
      ],
      volumePlaceholder: "Estimated volume (e.g. 800 kg, 5 tons)",
      notesPlaceholder: "Brief notes on waste composition or specific logistics...",
      btnSubmit: "Submit Request & Get Quote",
      btnSubmitting: "Submitting request...",
      privacyNote: "By submitting, you agree to the privacy policy and processing of corporate contact details.",
      successModal: {
        title: "Request Submitted Successfully!",
        desc: "Thank you! Our lead environmental specialist has received your request and is preparing a tailored proposal.",
        telegramNotifyNote: "Instant notification dispatched to our Telegram operations team.",
        buttonClose: "Understood, thank you",
      },
      errorModal: {
        title: "Submission Error",
        desc: "A connection timeout occurred. Please contact our dispatch desk directly by phone or via Telegram.",
        buttonRetry: "Try Again",
      },
    },
    footer: {
      about: "EKO-PARTNER is Uzbekistan's premier licensed environmental services contractor, specializing in the collection, transportation, neutralization, and disposal of hazardous, industrial, and medical wastes (Classes I–IV).",
      quickLinks: "Quick Navigation",
      contactInfo: "Contacts",
      addressLabel: "Headquarters Address:",
      addressVal: "Tashkent city, Yashnobod district, Muynak street 241, bld. 72-a.",
      phoneLabel: "Central Dispatch Desk:",
      emailLabel: "Corporate Email:",
      telegramLabel: "Telegram Channel & Bot:",
      workingHoursLabel: "Working Hours:",
      workingHoursVal: "Mon – Sat: 09:00 – 20:00",
      didoxNotice: "Electronic document workflow: 100% integration with Didox, Factura.uz",
      allRightsReserved: "All rights reserved.",
      uzbekistanEcoRegistry: "Officially registered in the State Ecological Enterprise Registry of Uzbekistan.",
    },
  },
};
