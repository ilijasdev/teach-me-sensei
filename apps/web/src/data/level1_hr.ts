import type { Lesson } from "./level1";

export const level1LessonsHr: Lesson[] = [
  // ==========================================
  // MODUL 1.1: Tonovi i Pinyin (Lekcije 1-5)
  // ==========================================
  {
    id: 1,
    moduleId: 1,
    moduleName: "Tonovi i Pinyin",
    title: "Četiri tona",
    titleChinese: "四声",
    description: "Savladaj temelj kineskog izgovora — četiri tona koji daju svakom slogu značenje.",
    estimatedMinutes: 12,
    xpReward: 50,
    steps: [
      {
        type: "intro",
        title: "Zašto su tonovi važni",
        content: "Kineski je tonalni jezik. Isti slog izgovoren s različitim tonom postaje potpuno druga riječ. Slog 'ma' može značiti majka (妈 mā), konoplja (麻 má), konj (马 mǎ) ili grditi (骂 mà). Ispravni tonovi od 1. dana su najvažnija stvar koju možeš napraviti.",
      },
      {
        type: "vocab",
        title: "Četiri tona + neutralni",
        vocab: [
          { id: "t1-ma1", simplified: "妈", pinyin: "mā", meaning: "majka (1. ton: visoki ravni ‾)", radical: "女", strokes: 6, example: { chinese: "妈妈", pinyin: "māma", meaning: "mama" } },
          { id: "t1-ma2", simplified: "麻", pinyin: "má", meaning: "konoplja (2. ton: uzlazni ／)", radical: "麻", strokes: 11, example: { chinese: "麻烦", pinyin: "máfan", meaning: "problem" } },
          { id: "t1-ma3", simplified: "马", pinyin: "mǎ", meaning: "konj (3. ton: niski ˅)", radical: "马", strokes: 3, example: { chinese: "小马", pinyin: "xiǎo mǎ", meaning: "mali konj" } },
          { id: "t1-ma4", simplified: "骂", pinyin: "mà", meaning: "grditi (4. ton: silazni ＼)", radical: "马", strokes: 9, example: { chinese: "别骂我", pinyin: "bié mà wǒ", meaning: "nemoj me grditi" } },
          { id: "t1-ma0", simplified: "吗", pinyin: "ma", meaning: "upitna čestica (neutralni ton: lagani)", radical: "口", strokes: 6, example: { chinese: "好吗？", pinyin: "hǎo ma?", meaning: "je li dobro?" } },
        ],
      },
      {
        type: "grammar",
        title: "Pravila tonova",
        grammar: {
          structure: "Tone Sandhi (变调)",
          explanation: "Kada se dva 3. tona pojave zaredom, prvi se mijenja u 2. ton. Na primjer: 你好 se piše kao nǐ hǎo ali izgovara kao ní hǎo. Također: 不 (bù) se mijenja u 2. ton ispred 4. tona: 不是 = búshì.",
          examples: [
            { chinese: "你好", pinyin: "ní hǎo (ne nǐ hǎo)", meaning: "bok/zdravo" },
            { chinese: "不是", pinyin: "búshì (ne bùshì)", meaning: "nije" },
            { chinese: "很好", pinyin: "hén hǎo (ne hěn hǎo)", meaning: "jako dobro" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Provjera tonova — Slušaj i prepoznaj",
        quiz: [
          { type: "tone-listen", question: "Poslušaj ovu riječ. Koji ton čuješ?", listenText: "妈", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 0, explanation: "妈 (mā) — 1. ton. Visoka, ravna, neprekidna visina. Kao da držiš muzičku notu." },
          { type: "tone-listen", question: "Slušaj pažljivo. Koji je ovo ton?", listenText: "麻", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 1, explanation: "麻 (má) — 2. ton. Visina raste od sredine prema gore, kao kad pitaš 'ha?' na hrvatskom." },
          { type: "tone-listen", question: "Pusti audio. Koji ton čuješ?", listenText: "马", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 2, explanation: "马 (mǎ) — 3. ton. Visina pada nisko pa se lagano diže. U prirodnom govoru često je samo nizak ton." },
          { type: "tone-listen", question: "Poslušaj i prepoznaj ton.", listenText: "骂", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 3, explanation: "骂 (mà) — 4. ton. Oštar pad visine, kao kad odlučno kažeš 'Ne!'" },
          { type: "tone-listen", question: "Ovo je nova riječ koju nisi vidio. Koji ton?", listenText: "书", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 0, explanation: "书 (shū) — 1. ton. Visok i ravan. Ova riječ znači 'knjiga' — naučit ćeš je uskoro!" },
          { type: "tone-listen", question: "Poslušaj ovaj slog. Koji ton?", listenText: "人", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 1, explanation: "人 (rén) — 2. ton. Uzlazna visina. Ovo znači 'osoba' — jako česta riječ." },
          { type: "tone-listen", question: "Nova riječ! Pusti i prepoznaj ton.", listenText: "狗", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 2, explanation: "狗 (gǒu) — 3. ton. Niska visina koja se spušta. Ovo znači 'pas'." },
          { type: "tone-listen", question: "Koji ton ima ova riječ?", listenText: "大", options: ["1. ton (visoki ravni ‾)", "2. ton (uzlazni ／)", "3. ton (niski ˅)", "4. ton (silazni ＼)"], correctIndex: 3, explanation: "大 (dà) — 4. ton. Oštar pad s visoke na nisku. Ovo znači 'velik'." },
          { type: "multiple-choice", question: "Kako se zapravo izgovara 你好? (Dva 3. tona zaredom)", options: ["nǐ hǎo (oba 3. ton)", "ní hǎo (2. + 3. ton)", "ní háo (oba 2. ton)", "nì hào (oba 4. ton)"], correctIndex: 1, explanation: "Pravilo tone sandhi: dva uzastopna 3. tona → prvi se mijenja u 2. ton. Dakle 你好 = ní hǎo." },
          { type: "multiple-choice", question: "Što je neutralni ton?", options: ["Jako glasan ton", "Lagani, nenaglašeni slog bez fiksne visine", "Isto što i 1. ton", "Šapnuti ton"], correctIndex: 1, explanation: "Neutralni ton (轻声) je lagan i kratak, bez specifične tonske konture. Primjer: 吗 (ma) u 好吗？" },
        ],
      },
      {
        type: "summary",
        title: "Lekcija završena!",
        content: "Naučio si 4 tona + neutralni ton i kritično pravilo tone sandhi. Zapamti: tonovi NISU opcija — oni mijenjaju značenje svake riječi!",
      },
    ],
  },
  {
    id: 2,
    moduleId: 1,
    moduleName: "Tonovi i Pinyin",
    title: "Vježba parova tonova",
    titleChinese: "声调组合",
    description: "Vježbaj sve kombinacije tonova u stvarnim riječima. Treniraj uho s minimalnim parovima.",
    estimatedMinutes: 15,
    xpReward: 60,
    steps: [
      {
        type: "intro",
        title: "Parovi tonova su ključ",
        content: "Postoji 20 mogućih dvotonskih kombinacija (4 tona × 5 uključujući neutralni). Savladavanje ovih parova je najbrži put do točnog izgovora. Vježbat ćemo najčešće i najzahtjevnije.",
      },
      {
        type: "vocab",
        title: "Česti parovi tonova",
        vocab: [
          { id: "tp-1-1", simplified: "天天", pinyin: "tiāntiān", meaning: "svaki dan (1+1)", example: { chinese: "我天天学习", pinyin: "wǒ tiāntiān xuéxí", meaning: "Učim svaki dan" } },
          { id: "tp-2-4", simplified: "学校", pinyin: "xuéxiào", meaning: "škola (2+4)", example: { chinese: "去学校", pinyin: "qù xuéxiào", meaning: "ići u školu" } },
          { id: "tp-1-4", simplified: "工作", pinyin: "gōngzuò", meaning: "posao/raditi (1+4)", example: { chinese: "我工作", pinyin: "wǒ gōngzuò", meaning: "Ja radim" } },
          { id: "tp-3-3", simplified: "你好", pinyin: "ní hǎo", meaning: "bok/zdravo (3+3 → 2+3)", example: { chinese: "你好吗？", pinyin: "ní hǎo ma?", meaning: "Kako si?" } },
          { id: "tp-4-2", simplified: "大学", pinyin: "dàxué", meaning: "sveučilište (4+2)", example: { chinese: "上大学", pinyin: "shàng dàxué", meaning: "studirati na sveučilištu" } },
          { id: "tp-4-1", simplified: "再见", pinyin: "zàijiàn", meaning: "doviđenja (4+4)", example: { chinese: "老师再见", pinyin: "lǎoshī zàijiàn", meaning: "doviđenja učitelju" } },
        ],
      },
      {
        type: "practice",
        title: "Izazov minimalnih parova",
        content: "Minimalni parovi su riječi koje se razlikuju samo po tonu. Možeš li ih razlikovati?\n\n买 (mǎi) = kupiti vs 卖 (mài) = prodati\n大 (dà) = velik vs 打 (dǎ) = udariti\n问 (wèn) = pitati vs 文 (wén) = kultura/pisanje\n说 (shuō) = govoriti vs 水 (shuǐ) = voda",
      },
      {
        type: "quiz",
        title: "Kviz parova tonova",
        quiz: [
          { type: "multiple-choice", question: "Koja je kombinacija tonova u 学校 (xuéxiào)?", options: ["1+1", "2+4", "3+2", "4+4"], correctIndex: 1, explanation: "学 (xué) je 2. ton, 校 (xiào) je 4. ton = 2+4." },
          { type: "multiple-choice", question: "买 (mǎi) znači 'kupiti'. Što znači 卖 (mài)?", options: ["kupiti više", "prodati", "platiti", "trgovati"], correctIndex: 1, explanation: "买 (mǎi, 3. ton) = kupiti, 卖 (mài, 4. ton) = prodati. Razlikuje ih samo ton!" },
          { type: "multiple-choice", question: "Koji par demonstrira tone sandhi?", options: ["天天 tiāntiān", "工作 gōngzuò", "你好 ní hǎo", "大学 dàxué"], correctIndex: 2, explanation: "你好 su dva 3. tona, pa se prvi mijenja u 2. ton: ní hǎo." },
        ],
      },
      {
        type: "summary",
        title: "Odličan napredak!",
        content: "Vježbao si najčešće parove tonova i naučio o minimalnim parovima. Nastavi trenirati uho — ova vještina se multiplicira s vremenom!",
      },
    ],
  },
  {
    id: 3,
    moduleId: 1,
    moduleName: "Tonovi i Pinyin",
    title: "Pinyin inicijali",
    titleChinese: "声母",
    description: "Nauči 21 početni suglasnik mandarinskog, posebno zvukove koji ne postoje u europskim jezicima.",
    estimatedMinutes: 14,
    xpReward: 55,
    steps: [
      {
        type: "intro",
        title: "Što su inicijali?",
        content: "Svaki kineski slog ima opcionalni inicijal (suglasnik na početku) i final (ostatak). Postoji 21 inicijal u mandarinskom. Većina zvuči slično engleskom, ali neki su potpuno novi: zh, ch, sh, r (retrofleksni) i j, q, x (palatalni). Ove dvije grupe su izazov #1 za izgovor europskih učenika.",
      },
      {
        type: "vocab",
        title: "Zahtjevni inicijali — retrofleksni vs palatalni",
        vocab: [
          { id: "pi-zhi", simplified: "知", pinyin: "zhī", meaning: "znati (zh: jezik uvijen natrag)", example: { chinese: "知道", pinyin: "zhīdào", meaning: "znati" } },
          { id: "pi-chi", simplified: "吃", pinyin: "chī", meaning: "jesti (ch: aspirirani retrofleksni)", example: { chinese: "吃饭", pinyin: "chīfàn", meaning: "jesti obrok" } },
          { id: "pi-shi", simplified: "是", pinyin: "shì", meaning: "biti (sh: retrofleksni frikativ)", example: { chinese: "我是", pinyin: "wǒ shì", meaning: "ja sam" } },
          { id: "pi-ji", simplified: "几", pinyin: "jǐ", meaning: "koliko (j: jezik ravan, naprijed)", example: { chinese: "几个？", pinyin: "jǐ gè?", meaning: "koliko?" } },
          { id: "pi-qi", simplified: "七", pinyin: "qī", meaning: "sedam (q: aspirirani palatalni)", example: { chinese: "七个", pinyin: "qī gè", meaning: "sedam (nečega)" } },
          { id: "pi-xi", simplified: "西", pinyin: "xī", meaning: "zapad (x: palatalni frikativ)", example: { chinese: "东西", pinyin: "dōngxī", meaning: "stvar" } },
        ],
      },
      {
        type: "grammar",
        title: "Retrofleksni vs palatalni — ključna razlika",
        grammar: {
          structure: "zh/ch/sh vs j/q/x",
          explanation: "Retrofleksni (zh, ch, sh, r): uvij vrh jezika unatrag prema nepcu. Palatalni (j, q, x): jezik ostaje ravan i naprijed, dodiruje iza donjih zubi. NIKAD nisu zamjenjivi — brkanje ih čini nerazumljivim.",
          examples: [
            { chinese: "知 zhī vs 几 jǐ", pinyin: "zhī (retrofleksni) vs jǐ (palatalni)", meaning: "znati vs koliko" },
            { chinese: "吃 chī vs 七 qī", pinyin: "chī (retrofleksni) vs qī (palatalni)", meaning: "jesti vs sedam" },
            { chinese: "是 shì vs 西 xī", pinyin: "shì (retrofleksni) vs xī (palatalni)", meaning: "biti vs zapad" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Kviz inicijala",
        quiz: [
          { type: "multiple-choice", question: "Koja grupa zahtijeva uvijanje jezika unatrag?", options: ["j, q, x", "zh, ch, sh", "b, p, m", "z, c, s"], correctIndex: 1, explanation: "zh, ch, sh su retrofleksni — jezik se uvija unatrag." },
          { type: "multiple-choice", question: "吃 (chī) znači 'jesti'. Kakav je inicijal 'ch'?", options: ["Palatalni", "Retrofleksni", "Labijalni", "Dentalni"], correctIndex: 1, explanation: "'ch' je retrofleksni aspirirani suglasnik." },
          { type: "multiple-choice", question: "Što znači 东西 (dōngxī)?", options: ["Istok-zapad (smjerovi)", "stvar", "istočna strana", "doručak"], correctIndex: 1, explanation: "东西 doslovno znači 'istok-zapad' ali kolokvijalno znači 'stvar'." },
        ],
      },
      {
        type: "summary",
        title: "Inicijali savladani!",
        content: "Naučio si najzahtjevnije inicijale u mandarinskom. Razlika retrofleksni/palatalni će se nastaviti poboljšavati s praksom. Sljedeće: finali i posebni zvuk ü!",
      },
    ],
  },
  {
    id: 4,
    moduleId: 1,
    moduleName: "Tonovi i Pinyin",
    title: "Pinyin finali i zvuk ü",
    titleChinese: "韵母",
    description: "Savladaj 35+ finala uključujući zvuk ü koji ne postoji u hrvatskom.",
    estimatedMinutes: 13,
    xpReward: 55,
    steps: [
      {
        type: "intro",
        title: "Finali dovršavaju slog",
        content: "Finali su samoglasnički dio svakog sloga (sve nakon inicijala). Većina je intuitivna: a, o, e, i, u. Ali 'ü' je poseban — ne postoji u hrvatskom. Zamisli da izgovaraš 'i' dok zaokružuješ usne kao za 'u'. Također: 'e' u kineskom NIJE kao hrvatsko 'e' — više je poput 'a' u 'da' (engleski 'duh').",
      },
      {
        type: "vocab",
        title: "Ključni finali u riječima",
        vocab: [
          { id: "pf-yu", simplified: "鱼", pinyin: "yú", meaning: "riba (zvuk ü!)", radical: "鱼", strokes: 8, example: { chinese: "小鱼", pinyin: "xiǎo yú", meaning: "mala riba" } },
          { id: "pf-nv", simplified: "女", pinyin: "nǚ", meaning: "žensko/žena (ü s n)", radical: "女", strokes: 3, example: { chinese: "女人", pinyin: "nǚrén", meaning: "žena" } },
          { id: "pf-lv", simplified: "绿", pinyin: "lǜ", meaning: "zeleno (ü s l)", radical: "纟", strokes: 11, example: { chinese: "绿色", pinyin: "lǜsè", meaning: "zelena boja" } },
          { id: "pf-he", simplified: "喝", pinyin: "hē", meaning: "piti (posebno 'e')", radical: "口", strokes: 12, example: { chinese: "喝水", pinyin: "hē shuǐ", meaning: "piti vodu" } },
          { id: "pf-shui", simplified: "水", pinyin: "shuǐ", meaning: "voda (final ui)", radical: "水", strokes: 4, example: { chinese: "冷水", pinyin: "lěng shuǐ", meaning: "hladna voda" } },
        ],
      },
      {
        type: "grammar",
        title: "Pravila pisanja ü",
        grammar: {
          structure: "Kada ü gubi točkice",
          explanation: "Zvuk ü se piše kao 'u' (bez točkica) nakon j, q, x, y — jer se ovi inicijali mogu spariti SAMO s ü, nikad s običnim u. Dakle: ju, qu, xu, yu su zapravo jü, qü, xü, yü. Nakon n i l, točkice ostaju: nǚ, lǜ — jer i nü i nu postoje kao različiti slogovi.",
          examples: [
            { chinese: "去 qù", pinyin: "zapravo qǜ", meaning: "ići (ü skriven)" },
            { chinese: "女 nǚ", pinyin: "nǚ (točkice ostaju)", meaning: "žena (ü prikazan jer nù također postoji)" },
            { chinese: "鱼 yú", pinyin: "zapravo yǘ", meaning: "riba (ü skriven nakon y)" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Kviz finala",
        quiz: [
          { type: "multiple-choice", question: "Kako se proizvodi zvuk ü?", options: ["Reci 'u' glasno", "Reci 'i' sa zaokruženim usnama", "Reci 'a' s jezikom natrag", "Reci 'o' dok se smiješiš"], correctIndex: 1, explanation: "ü = zvuk 'i' sa zaokruženim usnama kao za 'u'. Jedinstveno za kineski!" },
          { type: "multiple-choice", question: "Zašto 去 (qù) nema točkice na u?", options: ["Koristi obično u", "q se može spariti samo s ü, pa su točkice podrazumijevane", "Greška u pisanju", "4. ton uklanja točkice"], correctIndex: 1, explanation: "Nakon j, q, x, y — u je uvijek ü, pa se točkice izostavljaju." },
          { type: "multiple-choice", question: "Što znači 鱼 (yú)?", options: ["kiša", "riba", "jezik", "žad"], correctIndex: 1, explanation: "鱼 (yú) znači riba. Napomena: 雨 (yǔ) znači kiša — različit ton!" },
        ],
      },
      {
        type: "summary",
        title: "Finali gotovi!",
        content: "Sad poznaješ sve ključne finale uključujući ü. Završio si Pinyin sustav! Sada možeš dekodirati bilo koji pinyin na koji naiđeš.",
      },
    ],
  },
  {
    id: 5,
    moduleId: 1,
    moduleName: "Tonovi i Pinyin",
    title: "Brojevi i prvi razgovor",
    titleChinese: "数字和第一次对话",
    description: "Nauči brojeve 1-10, primijeni tonove u praksi i vodi svoj prvi kineski razgovor.",
    estimatedMinutes: 15,
    xpReward: 70,
    steps: [
      {
        type: "intro",
        title: "Tvoj prvi pravi kineski",
        content: "Vrijeme je da sve spojiš! Brojevi su savršen prvi vokabular — odmah su korisni, vježbaju sva četiri tona, a kineski brojevi su prekrasno logični (11 = deset-jedan, 21 = dva-deset-jedan).",
      },
      {
        type: "vocab",
        title: "Brojevi 1-10",
        vocab: [
          { id: "n-1", simplified: "一", pinyin: "yī", meaning: "jedan", strokes: 1, example: { chinese: "一个人", pinyin: "yī gè rén", meaning: "jedna osoba" } },
          { id: "n-2", simplified: "二", pinyin: "èr", meaning: "dva", strokes: 2, example: { chinese: "二月", pinyin: "èr yuè", meaning: "veljača" } },
          { id: "n-3", simplified: "三", pinyin: "sān", meaning: "tri", strokes: 3, example: { chinese: "三个", pinyin: "sān gè", meaning: "tri (nečega)" } },
          { id: "n-4", simplified: "四", pinyin: "sì", meaning: "četiri", strokes: 5, example: { chinese: "四月", pinyin: "sì yuè", meaning: "travanj" } },
          { id: "n-5", simplified: "五", pinyin: "wǔ", meaning: "pet", strokes: 4, example: { chinese: "五个人", pinyin: "wǔ gè rén", meaning: "pet ljudi" } },
          { id: "n-6", simplified: "六", pinyin: "liù", meaning: "šest", strokes: 4 },
          { id: "n-7", simplified: "七", pinyin: "qī", meaning: "sedam", strokes: 2 },
          { id: "n-8", simplified: "八", pinyin: "bā", meaning: "osam", strokes: 2 },
          { id: "n-9", simplified: "九", pinyin: "jiǔ", meaning: "devet", strokes: 2 },
          { id: "n-10", simplified: "十", pinyin: "shí", meaning: "deset", strokes: 2, example: { chinese: "十个", pinyin: "shí gè", meaning: "deset (nečega)" } },
        ],
      },
      {
        type: "vocab",
        title: "Riječi za prvi razgovor",
        vocab: [
          { id: "fc-ni", simplified: "你", pinyin: "nǐ", meaning: "ti", example: { chinese: "你好", pinyin: "ní hǎo", meaning: "bok" } },
          { id: "fc-wo", simplified: "我", pinyin: "wǒ", meaning: "ja / mene", example: { chinese: "我是", pinyin: "wǒ shì", meaning: "ja sam" } },
          { id: "fc-hao", simplified: "好", pinyin: "hǎo", meaning: "dobro", example: { chinese: "很好", pinyin: "hěn hǎo", meaning: "jako dobro" } },
          { id: "fc-shi", simplified: "是", pinyin: "shì", meaning: "biti", example: { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "Ja sam student" } },
          { id: "fc-xiexie", simplified: "谢谢", pinyin: "xièxiè", meaning: "hvala", example: { chinese: "谢谢你", pinyin: "xièxiè nǐ", meaning: "hvala ti" } },
          { id: "fc-zaijian", simplified: "再见", pinyin: "zàijiàn", meaning: "doviđenja" },
        ],
      },
      {
        type: "quiz",
        title: "Kviz brojeva i razgovora",
        quiz: [
          { type: "multiple-choice", question: "Kako se kaže '7' na kineskom?", options: ["六 liù", "七 qī", "八 bā", "九 jiǔ"], correctIndex: 1 },
          { type: "multiple-choice", question: "Što znači 谢谢 (xièxiè)?", options: ["bok", "doviđenja", "hvala", "oprosti"], correctIndex: 2 },
          { type: "multiple-choice", question: "Kako bi rekao 'jedanaest' (10+1)?", options: ["一十 yīshí", "十一 shíyī", "十十 shíshí", "一一 yīyī"], correctIndex: 1, explanation: "Kineski brojevi su logični: 11 = 十一 (deset-jedan)." },
          { type: "fill-blank", question: "我____学生 (Ja sam student)", options: ["好", "是", "你", "有"], correctIndex: 1, explanation: "是 (shì) = 'biti'. 我是学生 = Ja sam student." },
        ],
      },
      {
        type: "summary",
        title: "Modul 1.1 završen!",
        content: "Čestitamo! Završio si modul Tonovi i Pinyin. Znaš sva 4 tona, tone sandhi, sve inicijale i finale, brojeve 1-10 i svoje prve razgovorne riječi. Sljedeće: učenje čitanja i pisanja kineskih znakova!",
      },
    ],
  },

  // ==========================================
  // MODUL 1.2: Prvi znakovi (Lekcije 6-10)
  // ==========================================
  {
    id: 6,
    moduleId: 2,
    moduleName: "Prvi znakovi",
    title: "Kako znakovi funkcioniraju",
    titleChinese: "汉字入门",
    description: "Razumij građevne blokove kineskih znakova — poteze, radikale i kako se kombiniraju.",
    estimatedMinutes: 12,
    xpReward: 50,
    steps: [
      {
        type: "intro",
        title: "Znakovi nisu nasumični",
        content: "Kineski znakovi izgledaju složeno, ali su izgrađeni od jednostavnih komponenti. Razmišljaj o njima kao o LEGO kockicama: nekoliko stotina građevnih blokova se kombinira u tisuće znakova. Razumijevanje sustava čini učenje 10x bržim od puke memorizacije.",
      },
      {
        type: "vocab",
        title: "8 osnovnih poteza",
        vocab: [
          { id: "bs-heng", simplified: "一", pinyin: "héng", meaning: "vodoravni potez (一)", strokes: 1 },
          { id: "bs-shu", simplified: "丨", pinyin: "shù", meaning: "okomiti potez (丨)", strokes: 1 },
          { id: "bs-pie", simplified: "丿", pinyin: "piě", meaning: "lijevo-padajući potez (丿)", strokes: 1 },
          { id: "bs-na", simplified: "㇏", pinyin: "nà", meaning: "desno-padajući potez (㇏)", strokes: 1 },
          { id: "bs-dian", simplified: "丶", pinyin: "diǎn", meaning: "točka potez (丶)", strokes: 1 },
        ],
      },
      {
        type: "vocab",
        title: "Ključni radikali — tvoji prvi građevni blokovi",
        vocab: [
          { id: "rad-ren", simplified: "人 → 亻", pinyin: "rén", meaning: "osoba (oblik radikala: 亻)", example: { chinese: "你 = 亻+ 尔", pinyin: "nǐ", meaning: "ti (osoba + drevno 'ti')" } },
          { id: "rad-nv", simplified: "女", pinyin: "nǚ", meaning: "radikal žena", example: { chinese: "妈 = 女 + 马", pinyin: "mā", meaning: "majka (žena + konj za zvuk)" } },
          { id: "rad-kou", simplified: "口", pinyin: "kǒu", meaning: "radikal usta", example: { chinese: "吃 = 口 + 乞", pinyin: "chī", meaning: "jesti (usta + moliti)" } },
          { id: "rad-shou", simplified: "手 → 扌", pinyin: "shǒu", meaning: "radikal ruka (扌)", example: { chinese: "打 = 扌+ 丁", pinyin: "dǎ", meaning: "udariti (ruka + čavao)" } },
          { id: "rad-shui", simplified: "水 → 氵", pinyin: "shuǐ", meaning: "radikal voda (氵)", example: { chinese: "河 = 氵+ 可", pinyin: "hé", meaning: "rijeka (voda + moći)" } },
          { id: "rad-mu", simplified: "木", pinyin: "mù", meaning: "radikal drvo", example: { chinese: "休 = 亻+ 木", pinyin: "xiū", meaning: "odmor (osoba + drvo = odmor pod drvetom)" } },
        ],
      },
      {
        type: "quiz",
        title: "Kviz znakova",
        quiz: [
          { type: "multiple-choice", question: "Što predstavlja radikal 口 (kǒu)?", options: ["ruka", "usta", "voda", "osoba"], correctIndex: 1 },
          { type: "multiple-choice", question: "U 妈 (majka), što daje naznaku značenja?", options: ["马 konj", "女 žena", "口 usta", "人 osoba"], correctIndex: 1, explanation: "女 (žena) je semantički radikal; 马 (konj) daje naznaku izgovora (mǎ → mā)." },
          { type: "multiple-choice", question: "Što znači 休 (xiū) i zašto?", options: ["drvo — ima 木", "odmor — osoba naslonjena na drvo", "šuma — puno drveća", "vatra — osoba kraj drva"], correctIndex: 1, explanation: "休 = 亻(osoba) + 木 (drvo) = osoba se odmara naslonjeno na drvo!" },
        ],
      },
      {
        type: "summary",
        title: "Vidiš sustav!",
        content: "Znakovi nisu nasumični crteži — oni su logične kombinacije radikala. Poznavanje radikala ti omogućuje da pogađaš značenja i učiš nove znakove puno brže.",
      },
    ],
  },
  {
    id: 7,
    moduleId: 2,
    moduleName: "Prvi znakovi",
    title: "Ljudi i zamjenice",
    titleChinese: "人和代词",
    description: "Nauči znakove za ljude, zamjenice i osnovni identitet — gradivne blokove svakog razgovora.",
    estimatedMinutes: 14,
    xpReward: 60,
    steps: [
      {
        type: "intro",
        title: "Govoriti o ljudima",
        content: "Zamjenice u kineskom su prekrasno jednostavne. 我 (ja), 你 (ti), 他/她 (on/ona) — a da ih pretvoriš u množinu, samo dodaj 们! Nema konjugacije, nema padeža. Naučimo i riječi za ljude i identitet.",
      },
      {
        type: "vocab",
        title: "Zamjenice i ljudi",
        vocab: [
          { id: "pp-wo", simplified: "我", pinyin: "wǒ", meaning: "ja / mene", strokes: 7, example: { chinese: "我们", pinyin: "wǒmen", meaning: "mi / nas" } },
          { id: "pp-ni", simplified: "你", pinyin: "nǐ", meaning: "ti / tebe", strokes: 7, example: { chinese: "你们", pinyin: "nǐmen", meaning: "vi (množina)" } },
          { id: "pp-ta-m", simplified: "他", pinyin: "tā", meaning: "on / njega", strokes: 5, example: { chinese: "他们", pinyin: "tāmen", meaning: "oni (muški)" } },
          { id: "pp-ta-f", simplified: "她", pinyin: "tā", meaning: "ona / nju", strokes: 6, example: { chinese: "她们", pinyin: "tāmen", meaning: "one (ženski)" } },
          { id: "pp-ren", simplified: "人", pinyin: "rén", meaning: "osoba / ljudi", strokes: 2, example: { chinese: "中国人", pinyin: "zhōngguó rén", meaning: "Kinez/Kineskinja" } },
          { id: "pp-xuesheng", simplified: "学生", pinyin: "xuéshēng", meaning: "student", example: { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "Ja sam student" } },
          { id: "pp-laoshi", simplified: "老师", pinyin: "lǎoshī", meaning: "učitelj", example: { chinese: "她是老师", pinyin: "tā shì lǎoshī", meaning: "Ona je učiteljica" } },
          { id: "pp-pengyou", simplified: "朋友", pinyin: "péngyǒu", meaning: "prijatelj", example: { chinese: "我的朋友", pinyin: "wǒ de péngyǒu", meaning: "moj prijatelj" } },
        ],
      },
      {
        type: "grammar",
        title: "是 (shì) rečenice — 'biti'",
        grammar: {
          structure: "Subjekt + 是 + Imenica",
          explanation: "是 (shì) funkcionira kao hrvatsko 'sam/si/je/smo/ste/su' ali SAMO povezuje imenice. Nikad ne koristi 是 s pridjevima (ne kaži 我是好, kaži 我很好). Za negaciju: 不是 (bú shì).",
          examples: [
            { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "Ja sam student" },
            { chinese: "她是老师", pinyin: "tā shì lǎoshī", meaning: "Ona je učiteljica" },
            { chinese: "他不是中国人", pinyin: "tā bú shì zhōngguó rén", meaning: "On nije Kinez" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Kviz ljudi i zamjenica",
        quiz: [
          { type: "multiple-choice", question: "Kako se kaže 'mi' na kineskom?", options: ["你们", "我们", "他们", "她们"], correctIndex: 1, explanation: "我 (ja) + 们 (oznaka množine) = 我们 (mi)." },
          { type: "multiple-choice", question: "他 i 她 se oba izgovaraju 'tā'. Koja je razlika?", options: ["Nema razlike", "他 = on, 她 = ona", "他 = formalno, 她 = neformalno", "他 = mladi, 她 = stari"], correctIndex: 1, explanation: "他 (on) ima radikal 亻osoba, 她 (ona) ima radikal 女 žena. Isti izgovor!" },
          { type: "fill-blank", question: "她____老师 (Ona je učiteljica)", options: ["很", "是", "不", "有"], correctIndex: 1 },
          { type: "multiple-choice", question: "Kako se kaže 'On nije student'?", options: ["他是不学生", "他不是学生", "他没是学生", "不他是学生"], correctIndex: 1, explanation: "不 ide ispred 是: 他不是学生." },
        ],
      },
      {
        type: "summary",
        title: "Ljudi i zamjenice savladani!",
        content: "Sad možeš govoriti o sebi i drugima: ja, ti, on/ona, mi, oni. Plus 是 rečenice i negacija s 不. Trik za množinu (dodaj 们) je jedna od najlakših stvari u kineskom!",
      },
    ],
  },
  {
    id: 8,
    moduleId: 2,
    moduleName: "Prvi znakovi",
    title: "Svakodnevni izrazi",
    titleChinese: "日常用语",
    description: "Bitni znakovi za svakodnevni život — pozdravi, zahvale, osnovna pitanja i pristojni izrazi.",
    estimatedMinutes: 15,
    xpReward: 65,
    steps: [
      {
        type: "intro",
        title: "Fraze za preživljavanje",
        content: "Ovo su riječi koje ćeš koristiti svaki dan. Pozdravi, zahvale, postavljanje jednostavnih pitanja. Čak i samo s ovim riječima možeš se snalaziti u osnovnim interakcijama na kineskom.",
      },
      {
        type: "vocab",
        title: "Pozdravi i pristojne riječi",
        vocab: [
          { id: "de-nihao", simplified: "你好", pinyin: "ní hǎo", meaning: "bok/zdravo", example: { chinese: "你好！你好吗？", pinyin: "ní hǎo! nǐ hǎo ma?", meaning: "Bok! Kako si?" } },
          { id: "de-xiexie", simplified: "谢谢", pinyin: "xièxiè", meaning: "hvala" },
          { id: "de-bukeqi", simplified: "不客气", pinyin: "bú kèqì", meaning: "nema na čemu" },
          { id: "de-duibuqi", simplified: "对不起", pinyin: "duìbùqǐ", meaning: "oprosti", example: { chinese: "对不起，我不知道", pinyin: "duìbùqǐ, wǒ bù zhīdào", meaning: "Oprosti, ne znam" } },
          { id: "de-meiguanxi", simplified: "没关系", pinyin: "méi guānxì", meaning: "nema problema / nema veze" },
          { id: "de-zaijian", simplified: "再见", pinyin: "zàijiàn", meaning: "doviđenja" },
        ],
      },
      {
        type: "vocab",
        title: "Bitne upitne riječi",
        vocab: [
          { id: "de-shenme", simplified: "什么", pinyin: "shénme", meaning: "što", example: { chinese: "这是什么？", pinyin: "zhè shì shénme?", meaning: "Što je ovo?" } },
          { id: "de-shei", simplified: "谁", pinyin: "shéi", meaning: "tko", example: { chinese: "你是谁？", pinyin: "nǐ shì shéi?", meaning: "Tko si ti?" } },
          { id: "de-nar", simplified: "哪儿", pinyin: "nǎr", meaning: "gdje", example: { chinese: "你去哪儿？", pinyin: "nǐ qù nǎr?", meaning: "Kamo ideš?" } },
          { id: "de-duoshao", simplified: "多少", pinyin: "duōshǎo", meaning: "koliko", example: { chinese: "多少钱？", pinyin: "duōshǎo qián?", meaning: "Koliko košta?" } },
        ],
      },
      {
        type: "grammar",
        title: "吗 (ma) — da/ne pitanja",
        grammar: {
          structure: "Izjava + 吗？",
          explanation: "Najjednostavniji način za postaviti da/ne pitanje: samo dodaj 吗 na kraj bilo koje izjave. Nije potrebna promjena reda riječi! Za odgovor da: ponovi glagol. Za odgovor ne: 不 + glagol.",
          examples: [
            { chinese: "你好吗？", pinyin: "nǐ hǎo ma?", meaning: "Jesi li dobro?" },
            { chinese: "你是学生吗？", pinyin: "nǐ shì xuéshēng ma?", meaning: "Jesi li student?" },
            { chinese: "他是老师吗？不是。", pinyin: "tā shì lǎoshī ma? bú shì.", meaning: "Je li on učitelj? Nije." },
          ],
        },
      },
      {
        type: "quiz",
        title: "Kviz svakodnevnih izraza",
        quiz: [
          { type: "multiple-choice", question: "Kako se kaže 'oprosti' na kineskom?", options: ["谢谢", "对不起", "没关系", "不客气"], correctIndex: 1 },
          { type: "multiple-choice", question: "什么 (shénme) znači:", options: ["tko", "gdje", "što", "koliko"], correctIndex: 2 },
          { type: "multiple-choice", question: "Kako pitaš 'Koliko košta?'", options: ["什么钱？", "多少钱？", "谁的钱？", "哪儿钱？"], correctIndex: 1 },
          { type: "fill-blank", question: "你是老师____？(Jesi li učitelj?)", options: ["的", "了", "吗", "不"], correctIndex: 2, explanation: "Dodaj 吗 da pretvoriš bilo koju izjavu u da/ne pitanje." },
        ],
      },
      {
        type: "summary",
        title: "Svakodnevni izrazi savladani!",
        content: "Sad možeš pozdraviti ljude, zahvaliti im, ispričati se i postavljati osnovna pitanja (što, tko, gdje, koliko). Plus moćni obrazac pitanja s 吗!",
      },
    ],
  },
  {
    id: 9,
    moduleId: 2,
    moduleName: "Prvi znakovi",
    title: "Hrana i piće",
    titleChinese: "吃和喝",
    description: "Bitan vokabular hrane i pića — naruči u restoranu, izrazi što želiš.",
    estimatedMinutes: 15,
    xpReward: 65,
    steps: [
      {
        type: "intro",
        title: "Najkorisnija tema",
        content: "Hrana je kultura u Kini. Mogućnost naručivanja hrane je vjerojatno najneposrednije praktična vještina. Naučimo ključne riječi za hranu i kako izraziti što želiš.",
      },
      {
        type: "vocab",
        title: "Osnove hrane i pića",
        vocab: [
          { id: "fd-chi", simplified: "吃", pinyin: "chī", meaning: "jesti", radical: "口", example: { chinese: "吃饭", pinyin: "chīfàn", meaning: "jesti obrok" } },
          { id: "fd-he", simplified: "喝", pinyin: "hē", meaning: "piti", radical: "口", example: { chinese: "喝水", pinyin: "hē shuǐ", meaning: "piti vodu" } },
          { id: "fd-fan", simplified: "饭", pinyin: "fàn", meaning: "riža / obrok", example: { chinese: "米饭", pinyin: "mǐfàn", meaning: "kuhana riža" } },
          { id: "fd-shui", simplified: "水", pinyin: "shuǐ", meaning: "voda", strokes: 4 },
          { id: "fd-cha", simplified: "茶", pinyin: "chá", meaning: "čaj", example: { chinese: "绿茶", pinyin: "lǜchá", meaning: "zeleni čaj" } },
          { id: "fd-kafei", simplified: "咖啡", pinyin: "kāfēi", meaning: "kava" },
          { id: "fd-mian", simplified: "面", pinyin: "miàn", meaning: "tjestenina/rezanci", example: { chinese: "牛肉面", pinyin: "niúròu miàn", meaning: "rezanci s govedinom" } },
          { id: "fd-rou", simplified: "肉", pinyin: "ròu", meaning: "meso", example: { chinese: "猪肉", pinyin: "zhūròu", meaning: "svinjetina" } },
          { id: "fd-cai", simplified: "菜", pinyin: "cài", meaning: "povrće / jelo", example: { chinese: "点菜", pinyin: "diǎn cài", meaning: "naručiti hranu" } },
        ],
      },
      {
        type: "grammar",
        title: "想 (xiǎng) — 'želim'",
        grammar: {
          structure: "Subjekt + 想 + Glagol",
          explanation: "想 (xiǎng) znači 'želim' ili 'htio bih'. Pristojno je i savršeno za naručivanje. Za jaču želju, koristi 要 (yào) = 'hoću/trebam'.",
          examples: [
            { chinese: "我想吃面", pinyin: "wǒ xiǎng chī miàn", meaning: "Želim jesti rezance" },
            { chinese: "你想喝什么？", pinyin: "nǐ xiǎng hē shénme?", meaning: "Što želiš piti?" },
            { chinese: "我要一杯茶", pinyin: "wǒ yào yī bēi chá", meaning: "Želim šalicu čaja" },
          ],
        },
      },
      {
        type: "practice",
        title: "Igranje uloga u restoranu",
        content: "Zamisli da si u kineskom restoranu:\n\nKonobar: 你好！你想吃什么？(Bok! Što želite jesti?)\nTi: 我想吃牛肉面。(Želim rezance s govedinom.)\nKonobar: 想喝什么？(Što želite piti?)\nTi: 一杯绿茶，谢谢。(Šalicu zelenog čaja, hvala.)\nKonobar: 好的！(U redu!)\n\n多少钱？(Koliko košta?) je način kako tražiš račun!",
      },
      {
        type: "quiz",
        title: "Kviz hrane i pića",
        quiz: [
          { type: "multiple-choice", question: "Što znači 吃饭 (chīfàn)?", options: ["piti vodu", "jesti obrok", "kuhati hranu", "kupiti rižu"], correctIndex: 1 },
          { type: "fill-blank", question: "我____喝咖啡 (Želim piti kavu)", options: ["是", "想", "吃", "有"], correctIndex: 1 },
          { type: "multiple-choice", question: "Kako se kaže 'zeleni čaj'?", options: ["红茶", "绿茶", "茶水", "茶叶"], correctIndex: 1, explanation: "绿 (lǜ) = zeleno, 茶 (chá) = čaj." },
          { type: "multiple-choice", question: "Želiš tražiti račun. Kažeš:", options: ["再见！", "谢谢！", "多少钱？", "对不起！"], correctIndex: 2 },
        ],
      },
      {
        type: "summary",
        title: "Spreman za restoran!",
        content: "Sada možeš naručiti hranu i piće, reći što želiš (想/要) i pitati za cijenu. Samo ovo te čini funkcionalnim u bilo kojem kineskom restoranu!",
      },
    ],
  },
  {
    id: 10,
    moduleId: 2,
    moduleName: "Prvi znakovi",
    title: "Predstavljanje",
    titleChinese: "自我介绍",
    description: "Spoji sve zajedno — predstavi se, reci odakle si, čime se baviš i pitaj druge o njima.",
    estimatedMinutes: 16,
    xpReward: 80,
    steps: [
      {
        type: "intro",
        title: "Tvoje kinesko predstavljanje",
        content: "Ovo je završna lekcija prve faze Razine 1. Kombiniraš sve — tonove, znakove, gramatiku, vokabular — u kompletno predstavljanje. Ovo je prva prava prekretnica na tvom kineskom putovanju.",
      },
      {
        type: "vocab",
        title: "Vokabular za predstavljanje",
        vocab: [
          { id: "si-jiao", simplified: "叫", pinyin: "jiào", meaning: "zvati se", example: { chinese: "我叫…", pinyin: "wǒ jiào...", meaning: "Zovem se..." } },
          { id: "si-mingzi", simplified: "名字", pinyin: "míngzì", meaning: "ime", example: { chinese: "你叫什么名字？", pinyin: "nǐ jiào shénme míngzì?", meaning: "Kako se zoveš?" } },
          { id: "si-guojia", simplified: "国", pinyin: "guó", meaning: "država", example: { chinese: "中国", pinyin: "zhōngguó", meaning: "Kina" } },
          { id: "si-zhongguo", simplified: "中国", pinyin: "zhōngguó", meaning: "Kina (Srednje kraljevstvo)" },
          { id: "si-lai", simplified: "来", pinyin: "lái", meaning: "doći / iz", example: { chinese: "我从美国来", pinyin: "wǒ cóng měiguó lái", meaning: "Dolazim iz Amerike" } },
          { id: "si-xue", simplified: "学", pinyin: "xué", meaning: "učiti / studirati", example: { chinese: "学中文", pinyin: "xué zhōngwén", meaning: "učiti kineski" } },
          { id: "si-zhongwen", simplified: "中文", pinyin: "zhōngwén", meaning: "kineski jezik" },
          { id: "si-xihuan", simplified: "喜欢", pinyin: "xǐhuān", meaning: "voljeti / sviđati se", example: { chinese: "我喜欢中国菜", pinyin: "wǒ xǐhuān zhōngguó cài", meaning: "Volim kinesku hranu" } },
          { id: "si-hen", simplified: "很", pinyin: "hěn", meaning: "jako/vrlo", example: { chinese: "很高兴", pinyin: "hěn gāoxìng", meaning: "jako sretan" } },
          { id: "si-gaoxing", simplified: "高兴", pinyin: "gāoxìng", meaning: "sretan / veseo", example: { chinese: "认识你很高兴", pinyin: "rènshí nǐ hěn gāoxìng", meaning: "Drago mi je" } },
        ],
      },
      {
        type: "practice",
        title: "Tvoja skripta za predstavljanje",
        content: "Vježbaj ovo kompletno predstavljanje:\n\n你好！(Bok!)\n我叫 [tvoje ime]。(Zovem se [ime].)\n我是 [nacionalnost] 人。(Ja sam [nacionalnost].)\n我是学生。(Ja sam student.) / 我工作。(Radim.)\n我学中文。(Učim kineski.)\n我喜欢中国菜。(Volim kinesku hranu.)\n认识你很高兴！(Drago mi je!)\n\nSada probaj pitati nekoga o njemu:\n你叫什么名字？(Kako se zoveš?)\n你是哪国人？(Iz koje si države?)\n你做什么工作？(Čime se baviš?)",
      },
      {
        type: "grammar",
        title: "的 (de) — posvojnost i opis",
        grammar: {
          structure: "Imenica/zamjenica + 的 + Imenica",
          explanation: "的 (de) je najčešći znak u kineskom. Povezuje posjednika s onim što posjeduje (kao '-ov/-in' u hrvatskom), i također povezuje opise s imenicama.",
          examples: [
            { chinese: "我的名字", pinyin: "wǒ de míngzì", meaning: "moje ime" },
            { chinese: "你的老师", pinyin: "nǐ de lǎoshī", meaning: "tvoj učitelj" },
            { chinese: "中国的菜", pinyin: "zhōngguó de cài", meaning: "kineska hrana" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Kviz predstavljanja",
        quiz: [
          { type: "fill-blank", question: "你____什么名字？(Kako se zoveš?)", options: ["是", "叫", "有", "想"], correctIndex: 1 },
          { type: "multiple-choice", question: "Kako se kaže 'Volim kinesku hranu'?", options: ["我是中国菜", "我想中国菜", "我喜欢中国菜", "我吃中国菜"], correctIndex: 2 },
          { type: "multiple-choice", question: "我的老师 znači:", options: ["Ja sam učitelj", "moj učitelj", "tvoj učitelj", "učitelj"], correctIndex: 1, explanation: "我的 = moj. 老师 = učitelj." },
          { type: "fill-blank", question: "认识你____高兴！(Drago mi je!)", options: ["是", "的", "很", "不"], correctIndex: 2, explanation: "很 (hěn) = jako. 认识你很高兴 = upoznati te (ja sam) jako sretan." },
          { type: "multiple-choice", question: "Što znači 中文 (zhōngwén)?", options: ["Kina", "Kinez", "kineski jezik", "kineska hrana"], correctIndex: 2 },
        ],
      },
      {
        type: "summary",
        title: "Prekretnica dostignuta!",
        content: "Sada se možeš predstaviti na kineskom! Završio si 10 lekcija koje pokrivaju tonove, pinyin, građevne blokove znakova, zamjenice, svakodnevne fraze, hranu i predstavljanje. Znaš ~60 riječi i ~40 znakova. Ovo je pravi temelj — sve odavde se gradi na onome što si naučio. Sljedeće: proširenje svakodnevnog kineskog i početak stupnjevanog čitanja!",
      },
    ],
  },
];
