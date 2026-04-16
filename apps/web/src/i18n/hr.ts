import type { Translations } from "./en";

export const hr: Translations = {
  // Navbar
  nav: {
    features: "Značajke",
    levels: "Razine",
    speakers: "Izvorni govornici",
    pricing: "Cijene",
    login: "Prijava",
    startLearning: "Počni učiti",
  },

  // Hero
  hero: {
    badge: "Učenje kineskog uz AI",
    title1: "Savladaj kineski",
    title2: "uz AI i izvorne govornike",
    subtitle: "Uči mandarinski kroz AI tutora koji se prilagođava tebi, a zatim vježbaj s pravim izvornim govornicima. Od prvog",
    subtitleEnd: "do tečnih razgovora.",
    cta: "Počni učiti besplatno",
    ctaSecondary: "Pogledaj kako radi",
    statWords: "Riječi za savladati",
    statLevels: "Razine znanja",
    statHsk: "Usklađeni standard",
  },

  // Features
  features: {
    badge: "Zašto Kina?",
    title: "Učenje utemeljeno na istraživanjima",
    subtitle: "Svaka značajka temelji se na istraživanjima usvajanja jezika. AI tutoring pokazuje dokazan srednje-do-veliki učinak u 46 studija.",
    aiTutor: {
      title: "AI tutor koji se prilagođava",
      desc: "Pokretan naprednim AI-jem, tvoj tutor uči tvoje snage i slabosti. Svaka lekcija je prilagođena tvom tempu i stilu učenja.",
    },
    tones: {
      title: "Savladaj tonove od prvog dana",
      desc: "Fonetski trening visoke varijabilnosti (HVPT) s višestrukim izvornim glasovima. Multimodalni znakovi i geste produbljuju percepciju tonova.",
    },
    characters: {
      title: "Znakovi u kontekstu",
      desc: "Uči znakove kroz priče, ne kartice. Dekompozicija radikala i stupnjevano čitanje grade trajno prepoznavanje brže od čistog SRS-a.",
    },
    voice: {
      title: "Prirodna glasovna interakcija",
      desc: "Govori i slušaj s realističnim AI glasovima. Vježbaj razgovore u stvarnim scenarijima — naručivanje hrane, vožnja taksijem, upoznavanje ljudi.",
    },
    speakers: {
      title: "Pravi izvorni govornici",
      desc: "Kad AI prepozna da si spreman, poveži se s izvornim govornicima kineskog za 1-na-1 video sesije. Vježbaj ono što je tebi najvažnije.",
    },
    input: {
      title: "Razumljiv input",
      desc: "Temeljeno na Krashenovom istraživanju: masivan input na tvojoj razini pokreće usvajanje bolje od gramatičkih pravila. Slušaj, čitaj, upijaj, govori.",
    },
  },

  // Levels
  levels: {
    badge: "Tvoj put",
    title: "Tri razine do tečnosti",
    subtitle: "Usklađeno s HSK 3.0 (finalni standard 2025). Od nule do profesionalnog znanja — svaka razina gradi na prethodnoj.",
    words: "Riječi",
    characters: "Znakovi",
    duration: "Trajanje",
    showModules: "Prikaži module i kontrolne točke",
    hideModules: "Sakrij module i kontrolne točke",
    modules: "Moduli",
    checkpoints: "Kontrolne točke",
    level1: {
      name: "Potpuni početnik",
      desc: "Savladaj tonove, pinyin i prvih 500 riječi. Snađi se u svakodnevnim situacijama — naruči hranu, uzmi taksi, predstavi se.",
      time: "4-8 mjeseci",
      modules: [
        "Tonovi i Pinyin (HVPT trening s više glasova)",
        "Prvi znakovi i dekompozicija radikala",
        "Kineski za preživljavanje — pozdravi, brojevi, svakodnevica",
        "Prošireni svakodnevni scenariji — hrana, transport, kupovina",
        "Stupnjevano čitanje i slobodni razgovor",
      ],
      checkpoints: [
        "Prepoznaj 4 tona s >80% točnošću",
        "Pročitaj bilo koji pinyin naglas",
        "100 riječi savladano kroz SRS",
        "Završi scenarij u restoranu",
        "Položi probni HSK 2 test",
      ],
    },
    level2: {
      name: "Srednja razina",
      desc: "Razgovaraj o poznatim temama, čitaj jednostavne tekstove, snađi se u svim putnim situacijama u Kini. Gramatika postaje ozbiljna — 把, komplementi, topic-comment.",
      time: "6-10 mjeseci više",
      modules: [
        "Srednja gramatika kroz bogat input",
        "Tematski sadržaj — posao, kultura, tehnologija",
        "Program opsežnog čitanja (stupnjevani čitači)",
        "Analiza komponenti znakova (fonetski obrasci)",
        "Shadowing i otvoreni razgovor s AI-jem",
      ],
      checkpoints: [
        "Koristi 把 prirodno u kontekstu",
        "Čitaj uvježbane tekstove bez pinyina",
        "Održi 5-minutni neskriptirani razgovor",
        "Pročitaj i sažmi pojednostavljeni novinski članak",
        "Položi probni HSK 4 test",
      ],
    },
    level3: {
      name: "Polu-profesionalac",
      desc: "Funkcioniraj profesionalno na kineskom. Čitaj složene tekstove, debatiraj apstraktne teme, gledaj medije bez titlova. Savladaj 成语 i prebacivanje registra.",
      time: "12-18 mjeseci više",
      modules: [
        "Formalni kineski (书面语) i prebacivanje registra",
        "成语 (idiomi) — 200 četveroslovnih izraza",
        "Napredni sadržaj — filozofija, biznis, mediji",
        "Produkcija visoke razine — debate, eseji, prezentacije",
        "Autentični materijali — vijesti, podcasti, književnost",
      ],
      checkpoints: [
        "Piši formalne emailove s ispravnim registrom",
        "Raspravljaj o novinskim člancima bez rječnika",
        "Aktivno koristi 50+ 成语",
        "Održi 5-minutnu prezentaciju na kineskom",
        "Položi probni HSK 6 test",
      ],
    },
  },

  // Speakers
  speakers: {
    badge: "Izvorni govornici",
    title: "Vježbaj s pravim ljudima",
    subtitle: "Kad naš AI detektira da si spreman, besprijekorno te povezuje s provjerenim izvornim govornicima za fokusirane 1-na-1 sesije vježbanja.",
    bookSession: "Rezerviraj sesiju",
    sessions: "sesija",
    howItWorks: "Kako funkcionira AI-to-Human prijenos",
    step1title: "AI prepoznaje spremnost",
    step1desc: "Tvoj AI tutor prati tvoj napredak i detektira kad bi ti koristila ljudska praksa.",
    step2title: "Pametno uparivanje",
    step2desc: "Preporučujemo izvorne govornike na temelju tvog trenutnog fokusa — izgovor, kultura, biznis.",
    step3title: "Rezervacija jednim klikom",
    step3desc: "Rezerviraj video sesiju u sekundi. 80% ide govorniku, ti dobivaš autentičnu praksu.",
    tutors: {
      wei: { specialty: "Izgovor i tonovi", bio: "Rođeni Pekinžanin, 5 godina iskustva u podučavanju. Specijaliziran za pomoć početnicima s tonovima." },
      mei: { specialty: "Poslovni kineski", bio: "Bivša poslovna konzultantica u Šangaju. Stručnjakinja za profesionalni kineski i međukulturnu komunikaciju." },
      jun: { specialty: "Kultura i književnost", bio: "Diplomirani književnik s Pekinškog sveučilišta. Oživljava kinesku kulturu kroz priče i 成语." },
    },
  },

  // CTA
  cta: {
    title1: "Spreman za započeti svoju",
    title2: "kinesku avanturu?",
    subtitle: "Pridruži se učenicima koji su odabrali pametniji način za savladavanje mandarinskog. Tvoj AI tutor čeka.",
    button: "Započni besplatno",
    noCard: "Kreditna kartica nije potrebna",
  },

  // Footer
  footer: {
    builtWith: "Napravljeno s",
  },

  // Auth
  auth: {
    welcomeBack: "Dobrodošao natrag",
    continueJourney: "Nastavi svoju kinesku avanturu",
    email: "Email",
    password: "Lozinka",
    signIn: "Prijavi se",
    noAccount: "Nemaš račun?",
    startLearning: "Počni učiti",
    startJourney: "Započni svoju avanturu",
    letsLearn: "Učimo kineski zajedno",
    yourName: "Tvoje ime",
    namePlaceholder: "Kako da te zovemo?",
    createAccount: "Kreiraj račun",
    hasAccount: "Već imaš račun?",
    signInLink: "Prijavi se",
  },

  // Dashboard
  dash: {
    welcomeBack: "Dobrodošao natrag,",
    level1: "Razina 1 — Potpuni početnik",
    xp: "XP",
    streak: "Niz",
    words: "Riječi",
    progress: "Napredak",
    day: "dan",
    cardsDue: "kartica za ponavljanje",
    level1Progress: "Napredak razine 1",
    logout: "Odjava",
    min: "min",
    module1: { name: "Tonovi i Pinyin", chinese: "声调和拼音" },
    module2: { name: "Prvi znakovi", chinese: "第一批汉字" },
  },

  // Lesson
  lesson: {
    back: "Natrag",
    step: "Korak",
    of: "od",
    quiz: "Kviz",
    question: "Pitanje",
    tapForExample: "Dodirni za primjer",
    tapToFlip: "Dodirni za povratak",
    strokes: "poteza",
    radical: "Radikal",
    structure: "Struktura",
    examples: "Primjeri",
    continue: "Nastavi",
    completeLesson: "Završi lekciju",
    greatJob: "Odlično!",
    keepPracticing: "Nastavi vježbati!",
    correct: "točno",
    noExample: "Primjer nije dostupan",
  },

  // Review
  review: {
    title: "SRS Ponavljanje",
    tapToReveal: "Dodirni za otkrivanje",
    reviewNum: "Ponavljanje",
    nextIn: "Sljedeće za",
    days: "dana",
    again: "Ponovo",
    hard: "Teško",
    good: "Dobro",
    easy: "Lako",
    didntKnow: "Nisam znao",
    struggled: "Mučio sam se",
    gotIt: "Znam",
    tooEasy: "Prelagano",
    complete: "Ponavljanje završeno!",
    allCaughtUp: "Sve si ponovio!",
    youReviewed: "Ponovio si",
    cards: "kartica.",
    noCardsDue: "Trenutno nema kartica za ponavljanje.",
    totalCards: "Ukupno kartica u tvom špilu:",
    backToDashboard: "Natrag na Dashboard",
  },

  // Lesson content
  lessonContent: {
    l1_title: "Četiri tona",
    l1_desc: "Savladaj temelj kineskog izgovora — četiri tona koji daju svakom slogu značenje.",
    l1_s1: "Zašto su tonovi važni",
    l1_s1_content: "Kineski je tonalni jezik. Isti slog izgovoren s različitim tonom postaje potpuno druga riječ. Slog 'ma' može značiti majka (妈 mā), konoplja (麻 má), konj (马 mǎ) ili grditi (骂 mà). Ispravni tonovi od 1. dana su najvažnija stvar koju možeš napraviti.",
    l1_s2: "Četiri tona + neutralni",
    l1_s3: "Pravila tonova",
    l1_s4: "Provjera tonova",
    l1_s5: "Lekcija završena!",
    l1_s5_content: "Naučio si 4 tona + neutralni ton i kritično pravilo tone sandhi. Zapamti: tonovi NISU opcija — oni mijenjaju značenje svake riječi!",

    l2_title: "Vježba parova tonova",
    l2_desc: "Vježbaj sve kombinacije tonova u stvarnim riječima. Treniraj uho s minimalnim parovima.",

    l3_title: "Pinyin inicijali",
    l3_desc: "Nauči 21 početni suglasnik mandarinskog, posebno zvukove koji ne postoje u europskim jezicima.",

    l4_title: "Pinyin finali i zvuk ü",
    l4_desc: "Savladaj 35+ finala uključujući zvuk ü koji ne postoji u hrvatskom.",

    l5_title: "Brojevi i prvi razgovor",
    l5_desc: "Nauči brojeve 1-10, primijeni tonove u praksi i vodi svoj prvi kineski razgovor.",

    l6_title: "Kako znakovi funkcioniraju",
    l6_desc: "Razumij građevne blokove kineskih znakova — poteze, radikale i kako se kombiniraju.",

    l7_title: "Ljudi i zamjenice",
    l7_desc: "Nauči znakove za ljude, zamjenice i osnovni identitet — gradivne blokove svakog razgovora.",

    l8_title: "Svakodnevni izrazi",
    l8_desc: "Bitni znakovi za svakodnevni život — pozdravi, zahvale, osnovna pitanja i pristojni izrazi.",

    l9_title: "Hrana i piće",
    l9_desc: "Bitan vokabular hrane i pića — naruči u restoranu, izrazi što želiš.",

    l10_title: "Predstavljanje",
    l10_desc: "Spoji sve zajedno — predstavi se, reci odakle si, čime se baviš i pitaj druge o njima.",
  },
};
