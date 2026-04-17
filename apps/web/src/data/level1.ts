export interface VocabItem {
  id: string;
  simplified: string;
  pinyin: string;
  meaning: string;
  audio?: string;
  radical?: string;
  strokes?: number;
  example?: { chinese: string; pinyin: string; meaning: string };
}

export interface QuizQuestion {
  type: "multiple-choice" | "tone-identify" | "tone-listen" | "match" | "fill-blank";
  question: string;
  questionChinese?: string;
  /** Chinese text to speak via TTS for tone-listen questions */
  listenText?: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface LessonStep {
  type: "intro" | "vocab" | "grammar" | "practice" | "quiz" | "summary";
  title: string;
  content?: string;
  vocab?: VocabItem[];
  grammar?: { structure: string; explanation: string; examples: { chinese: string; pinyin: string; meaning: string }[] };
  quiz?: QuizQuestion[];
}

export interface Lesson {
  id: number;
  moduleId: number;
  moduleName: string;
  title: string;
  titleChinese: string;
  description: string;
  estimatedMinutes: number;
  xpReward: number;
  steps: LessonStep[];
}

export const level1Lessons: Lesson[] = [
  // ==========================================
  // MODULE 1.1: Tones & Pinyin (Lessons 1-5)
  // ==========================================
  {
    id: 1,
    moduleId: 1,
    moduleName: "Tones & Pinyin",
    title: "The Four Tones",
    titleChinese: "四声",
    description: "Master the foundation of Chinese pronunciation — the four tones that give every syllable meaning.",
    estimatedMinutes: 12,
    xpReward: 50,
    steps: [
      {
        type: "intro",
        title: "Why Tones Matter",
        content: "Chinese is a tonal language. The same syllable spoken with different tones becomes a completely different word. The syllable 'ma' can mean mother (妈 mā), hemp (麻 má), horse (马 mǎ), or scold (骂 mà). Getting tones right from Day 1 is the single most important thing you can do.",
      },
      {
        type: "vocab",
        title: "The Four Tones + Neutral",
        vocab: [
          { id: "t1-ma1", simplified: "妈", pinyin: "mā", meaning: "mother (1st tone: high flat ‾)", radical: "女", strokes: 6, example: { chinese: "妈妈", pinyin: "māma", meaning: "mom" } },
          { id: "t1-ma2", simplified: "麻", pinyin: "má", meaning: "hemp (2nd tone: rising ／)", radical: "麻", strokes: 11, example: { chinese: "麻烦", pinyin: "máfan", meaning: "trouble" } },
          { id: "t1-ma3", simplified: "马", pinyin: "mǎ", meaning: "horse (3rd tone: low ˅)", radical: "马", strokes: 3, example: { chinese: "小马", pinyin: "xiǎo mǎ", meaning: "small horse" } },
          { id: "t1-ma4", simplified: "骂", pinyin: "mà", meaning: "to scold (4th tone: falling ＼)", radical: "马", strokes: 9, example: { chinese: "别骂我", pinyin: "bié mà wǒ", meaning: "don't scold me" } },
          { id: "t1-ma0", simplified: "吗", pinyin: "ma", meaning: "question particle (neutral tone: light)", radical: "口", strokes: 6, example: { chinese: "好吗？", pinyin: "hǎo ma?", meaning: "is it good?" } },
        ],
      },
      {
        type: "grammar",
        title: "Tone Rules",
        grammar: {
          structure: "Tone Sandhi (变调)",
          explanation: "When two 3rd tones appear in a row, the first one changes to a 2nd tone. For example: 你好 is written as nǐ hǎo but pronounced as ní hǎo. Also: 不 (bù) changes to 2nd tone before a 4th tone: 不是 = búshì.",
          examples: [
            { chinese: "你好", pinyin: "ní hǎo (not nǐ hǎo)", meaning: "hello" },
            { chinese: "不是", pinyin: "búshì (not bùshì)", meaning: "is not" },
            { chinese: "很好", pinyin: "hén hǎo (not hěn hǎo)", meaning: "very good" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Tone Check — Listen & Identify",
        quiz: [
          { type: "tone-listen", question: "Listen to this word. Which tone do you hear?", listenText: "妈", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 0, explanation: "妈 (mā) — 1st tone. A high, flat, sustained pitch. Like holding a musical note." },
          { type: "tone-listen", question: "Listen carefully. Which tone is this?", listenText: "麻", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 1, explanation: "麻 (má) — 2nd tone. The pitch rises from middle to high, like asking 'huh?' in English." },
          { type: "tone-listen", question: "Play the audio. What tone do you hear?", listenText: "马", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 2, explanation: "马 (mǎ) — 3rd tone. The pitch dips low then rises slightly. In natural speech it's often just a low tone." },
          { type: "tone-listen", question: "Listen and identify the tone.", listenText: "骂", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 3, explanation: "骂 (mà) — 4th tone. A sharp falling pitch, like saying 'No!' firmly." },
          { type: "tone-listen", question: "This is a new word you haven't seen. What tone?", listenText: "书", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 0, explanation: "书 (shū) — 1st tone. High and flat. This word means 'book' — you'll learn it soon!" },
          { type: "tone-listen", question: "Listen to this syllable. Which tone?", listenText: "人", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 1, explanation: "人 (rén) — 2nd tone. Rising pitch. This means 'person' — a very common word." },
          { type: "tone-listen", question: "New word! Play and identify the tone.", listenText: "狗", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 2, explanation: "狗 (gǒu) — 3rd tone. Low dipping pitch. This means 'dog'." },
          { type: "tone-listen", question: "What tone is this word?", listenText: "大", options: ["1st tone (high flat ‾)", "2nd tone (rising ／)", "3rd tone (low dip ˅)", "4th tone (falling ＼)"], correctIndex: 3, explanation: "大 (dà) — 4th tone. Sharp fall from high to low. This means 'big'." },
          { type: "multiple-choice", question: "How is 你好 actually pronounced? (Two 3rd tones in a row)", options: ["nǐ hǎo (both 3rd tone)", "ní hǎo (2nd + 3rd tone)", "ní háo (both 2nd tone)", "nì hào (both 4th tone)"], correctIndex: 1, explanation: "Tone sandhi rule: two consecutive 3rd tones → the first changes to 2nd tone. So 你好 = ní hǎo." },
          { type: "multiple-choice", question: "What is the neutral tone?", options: ["A very loud tone", "A light, unstressed syllable with no fixed pitch", "The same as 1st tone", "A whispered tone"], correctIndex: 1, explanation: "The neutral tone (轻声) is light and short, with no specific pitch contour. Example: 吗 (ma) in 好吗？" },
        ],
      },
      {
        type: "summary",
        title: "Lesson Complete!",
        content: "You've learned the 4 tones + neutral tone, and the critical tone sandhi rule. Remember: tones are NOT optional — they change the meaning of every word!",
      },
    ],
  },
  {
    id: 2,
    moduleId: 1,
    moduleName: "Tones & Pinyin",
    title: "Tone Pairs Practice",
    titleChinese: "声调组合",
    description: "Practice all tone combinations in real words. Train your ear with minimal pairs.",
    estimatedMinutes: 15,
    xpReward: 60,
    steps: [
      {
        type: "intro",
        title: "Tone Pairs Are Key",
        content: "There are 20 possible two-tone combinations (4 tones × 5 including neutral). Mastering these pairs is the fastest way to accurate pronunciation. We'll practice the most common and tricky ones.",
      },
      {
        type: "vocab",
        title: "Common Tone Pairs",
        vocab: [
          { id: "tp-1-1", simplified: "天天", pinyin: "tiāntiān", meaning: "every day (1+1)", example: { chinese: "我天天学习", pinyin: "wǒ tiāntiān xuéxí", meaning: "I study every day" } },
          { id: "tp-2-4", simplified: "学校", pinyin: "xuéxiào", meaning: "school (2+4)", example: { chinese: "去学校", pinyin: "qù xuéxiào", meaning: "go to school" } },
          { id: "tp-1-4", simplified: "工作", pinyin: "gōngzuò", meaning: "work (1+4)", example: { chinese: "我工作", pinyin: "wǒ gōngzuò", meaning: "I work" } },
          { id: "tp-3-3", simplified: "你好", pinyin: "ní hǎo", meaning: "hello (3+3 → 2+3)", example: { chinese: "你好吗？", pinyin: "ní hǎo ma?", meaning: "How are you?" } },
          { id: "tp-4-2", simplified: "大学", pinyin: "dàxué", meaning: "university (4+2)", example: { chinese: "上大学", pinyin: "shàng dàxué", meaning: "attend university" } },
          { id: "tp-4-1", simplified: "再见", pinyin: "zàijiàn", meaning: "goodbye (4+4)", example: { chinese: "老师再见", pinyin: "lǎoshī zàijiàn", meaning: "goodbye teacher" } },
        ],
      },
      {
        type: "practice",
        title: "Minimal Pairs Challenge",
        content: "Minimal pairs are words that differ only by tone. Can you tell them apart?\n\n买 (mǎi) = to buy vs 卖 (mài) = to sell\n大 (dà) = big vs 打 (dǎ) = to hit\n问 (wèn) = to ask vs 文 (wén) = culture/writing\n说 (shuō) = to speak vs 水 (shuǐ) = water",
      },
      {
        type: "quiz",
        title: "Tone Pairs Quiz",
        quiz: [
          { type: "multiple-choice", question: "What tone combination is 学校 (xuéxiào)?", options: ["1+1", "2+4", "3+2", "4+4"], correctIndex: 1, explanation: "学 (xué) is 2nd tone, 校 (xiào) is 4th tone = 2+4." },
          { type: "multiple-choice", question: "买 (mǎi) means 'to buy'. What does 卖 (mài) mean?", options: ["to buy more", "to sell", "to pay", "to trade"], correctIndex: 1, explanation: "买 (mǎi, 3rd tone) = buy, 卖 (mài, 4th tone) = sell. Only the tone differs!" },
          { type: "multiple-choice", question: "Which pair demonstrates tone sandhi?", options: ["天天 tiāntiān", "工作 gōngzuò", "你好 ní hǎo", "大学 dàxué"], correctIndex: 2, explanation: "你好 is two 3rd tones, so the first changes to 2nd tone: ní hǎo." },
        ],
      },
      {
        type: "summary",
        title: "Great Progress!",
        content: "You've practiced the most common tone pairs and learned about minimal pairs. Keep training your ear — this skill compounds over time!",
      },
    ],
  },
  {
    id: 3,
    moduleId: 1,
    moduleName: "Tones & Pinyin",
    title: "Pinyin Initials",
    titleChinese: "声母",
    description: "Learn the 21 initial consonants of Mandarin, especially sounds that don't exist in European languages.",
    estimatedMinutes: 14,
    xpReward: 55,
    steps: [
      {
        type: "intro",
        title: "What Are Initials?",
        content: "Every Chinese syllable has an optional initial (consonant at the start) and a final (the rest). There are 21 initials in Mandarin. Most sound similar to English, but some are completely new: zh, ch, sh, r (retroflex) and j, q, x (palatals). These two groups are the #1 pronunciation challenge for European learners.",
      },
      {
        type: "vocab",
        title: "Tricky Initials — Retroflex vs Palatal",
        vocab: [
          { id: "pi-zhi", simplified: "知", pinyin: "zhī", meaning: "to know (zh: tongue curled back)", example: { chinese: "知道", pinyin: "zhīdào", meaning: "to know" } },
          { id: "pi-chi", simplified: "吃", pinyin: "chī", meaning: "to eat (ch: aspirated retroflex)", example: { chinese: "吃饭", pinyin: "chīfàn", meaning: "to eat a meal" } },
          { id: "pi-shi", simplified: "是", pinyin: "shì", meaning: "to be (sh: retroflex fricative)", example: { chinese: "我是", pinyin: "wǒ shì", meaning: "I am" } },
          { id: "pi-ji", simplified: "几", pinyin: "jǐ", meaning: "how many (j: tongue flat, front)", example: { chinese: "几个？", pinyin: "jǐ gè?", meaning: "how many?" } },
          { id: "pi-qi", simplified: "七", pinyin: "qī", meaning: "seven (q: aspirated palatal)", example: { chinese: "七个", pinyin: "qī gè", meaning: "seven (of something)" } },
          { id: "pi-xi", simplified: "西", pinyin: "xī", meaning: "west (x: palatal fricative)", example: { chinese: "东西", pinyin: "dōngxī", meaning: "thing/stuff" } },
        ],
      },
      {
        type: "grammar",
        title: "Retroflex vs Palatal — The Key Difference",
        grammar: {
          structure: "zh/ch/sh vs j/q/x",
          explanation: "Retroflex (zh, ch, sh, r): curl your tongue tip backward toward the roof of your mouth. Palatal (j, q, x): tongue stays flat and forward, touching behind your lower teeth. They are NEVER interchangeable — confusing them makes you unintelligible.",
          examples: [
            { chinese: "知 zhī vs 几 jǐ", pinyin: "zhī (retroflex) vs jǐ (palatal)", meaning: "to know vs how many" },
            { chinese: "吃 chī vs 七 qī", pinyin: "chī (retroflex) vs qī (palatal)", meaning: "to eat vs seven" },
            { chinese: "是 shì vs 西 xī", pinyin: "shì (retroflex) vs xī (palatal)", meaning: "to be vs west" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Initials Quiz",
        quiz: [
          { type: "multiple-choice", question: "Which group requires curling your tongue back?", options: ["j, q, x", "zh, ch, sh", "b, p, m", "z, c, s"], correctIndex: 1, explanation: "zh, ch, sh are retroflex — tongue curls backward." },
          { type: "multiple-choice", question: "吃 (chī) means 'to eat'. What kind of initial is 'ch'?", options: ["Palatal", "Retroflex", "Labial", "Dental"], correctIndex: 1, explanation: "'ch' is a retroflex aspirated consonant." },
          { type: "multiple-choice", question: "What does 东西 (dōngxī) mean?", options: ["East-west (directions)", "thing/stuff", "east side", "breakfast"], correctIndex: 1, explanation: "东西 literally means 'east-west' but colloquially means 'thing' or 'stuff'." },
        ],
      },
      {
        type: "summary",
        title: "Initials Mastered!",
        content: "You've learned the trickiest initials in Mandarin. The retroflex/palatal distinction will keep improving with practice. Next up: finals and the special ü sound!",
      },
    ],
  },
  {
    id: 4,
    moduleId: 1,
    moduleName: "Tones & Pinyin",
    title: "Pinyin Finals & The ü Sound",
    titleChinese: "韵母",
    description: "Master the 35+ finals including the ü sound that doesn't exist in English.",
    estimatedMinutes: 13,
    xpReward: 55,
    steps: [
      {
        type: "intro",
        title: "Finals Complete the Syllable",
        content: "Finals are the vowel part of each syllable (everything after the initial). Most are intuitive: a, o, e, i, u. But 'ü' is special — it doesn't exist in English. Think of it as saying 'ee' while rounding your lips like 'oo'. Also: the 'e' in Chinese is NOT like English 'e' — it's more like the 'u' in 'duh'.",
      },
      {
        type: "vocab",
        title: "Key Finals in Words",
        vocab: [
          { id: "pf-yu", simplified: "鱼", pinyin: "yú", meaning: "fish (ü sound!)", radical: "鱼", strokes: 8, example: { chinese: "小鱼", pinyin: "xiǎo yú", meaning: "small fish" } },
          { id: "pf-nv", simplified: "女", pinyin: "nǚ", meaning: "female/woman (ü with n)", radical: "女", strokes: 3, example: { chinese: "女人", pinyin: "nǚrén", meaning: "woman" } },
          { id: "pf-lv", simplified: "绿", pinyin: "lǜ", meaning: "green (ü with l)", radical: "纟", strokes: 11, example: { chinese: "绿色", pinyin: "lǜsè", meaning: "green color" } },
          { id: "pf-he", simplified: "喝", pinyin: "hē", meaning: "to drink (special 'e')", radical: "口", strokes: 12, example: { chinese: "喝水", pinyin: "hē shuǐ", meaning: "drink water" } },
          { id: "pf-shui", simplified: "水", pinyin: "shuǐ", meaning: "water (ui final)", radical: "水", strokes: 4, example: { chinese: "冷水", pinyin: "lěng shuǐ", meaning: "cold water" } },
        ],
      },
      {
        type: "grammar",
        title: "The ü Spelling Rules",
        grammar: {
          structure: "When ü loses its dots",
          explanation: "The ü sound is written as 'u' (without dots) after j, q, x, y — because these initials can ONLY pair with ü, never with regular u. So: ju, qu, xu, yu are all actually jü, qü, xü, yü. After n and l, the dots stay: nǚ, lǜ — because both nü and nu exist as different syllables.",
          examples: [
            { chinese: "去 qù", pinyin: "actually qǜ", meaning: "to go (ü hidden)" },
            { chinese: "女 nǚ", pinyin: "nǚ (dots kept)", meaning: "woman (ü shown because nù also exists)" },
            { chinese: "鱼 yú", pinyin: "actually yǘ", meaning: "fish (ü hidden after y)" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Finals Quiz",
        quiz: [
          { type: "multiple-choice", question: "How do you make the ü sound?", options: ["Say 'oo' loudly", "Say 'ee' with rounded lips", "Say 'ah' with tongue back", "Say 'oh' while smiling"], correctIndex: 1, explanation: "ü = 'ee' sound with lips rounded like 'oo'. Unique to Chinese!" },
          { type: "multiple-choice", question: "Why does 去 (qù) not have dots on the u?", options: ["It uses regular u", "q can only pair with ü, so dots are implied", "It's a spelling error", "4th tone removes the dots"], correctIndex: 1, explanation: "After j, q, x, y — the u is always ü, so dots are omitted." },
          { type: "multiple-choice", question: "What does 鱼 (yú) mean?", options: ["rain", "fish", "language", "jade"], correctIndex: 1, explanation: "鱼 (yú) means fish. Note: 雨 (yǔ) means rain — different tone!" },
        ],
      },
      {
        type: "summary",
        title: "Finals Complete!",
        content: "You now know all the key finals including ü. You've completed the Pinyin system! You can now decode any pinyin you encounter.",
      },
    ],
  },
  {
    id: 5,
    moduleId: 1,
    moduleName: "Tones & Pinyin",
    title: "Numbers & First Conversation",
    titleChinese: "数字和第一次对话",
    description: "Learn numbers 1-10, put tones into practice, and have your first Chinese conversation.",
    estimatedMinutes: 15,
    xpReward: 70,
    steps: [
      {
        type: "intro",
        title: "Your First Real Chinese",
        content: "Time to put everything together! Numbers are the perfect first vocabulary — they're immediately useful, they practice all four tones, and Chinese numbers are beautifully logical (11 = ten-one, 21 = two-ten-one).",
      },
      {
        type: "vocab",
        title: "Numbers 1-10",
        vocab: [
          { id: "n-1", simplified: "一", pinyin: "yī", meaning: "one", strokes: 1, example: { chinese: "一个人", pinyin: "yī gè rén", meaning: "one person" } },
          { id: "n-2", simplified: "二", pinyin: "èr", meaning: "two", strokes: 2, example: { chinese: "二月", pinyin: "èr yuè", meaning: "February" } },
          { id: "n-3", simplified: "三", pinyin: "sān", meaning: "three", strokes: 3, example: { chinese: "三个", pinyin: "sān gè", meaning: "three (of something)" } },
          { id: "n-4", simplified: "四", pinyin: "sì", meaning: "four", strokes: 5, example: { chinese: "四月", pinyin: "sì yuè", meaning: "April" } },
          { id: "n-5", simplified: "五", pinyin: "wǔ", meaning: "five", strokes: 4, example: { chinese: "五个人", pinyin: "wǔ gè rén", meaning: "five people" } },
          { id: "n-6", simplified: "六", pinyin: "liù", meaning: "six", strokes: 4 },
          { id: "n-7", simplified: "七", pinyin: "qī", meaning: "seven", strokes: 2 },
          { id: "n-8", simplified: "八", pinyin: "bā", meaning: "eight", strokes: 2 },
          { id: "n-9", simplified: "九", pinyin: "jiǔ", meaning: "nine", strokes: 2 },
          { id: "n-10", simplified: "十", pinyin: "shí", meaning: "ten", strokes: 2, example: { chinese: "十个", pinyin: "shí gè", meaning: "ten (of something)" } },
        ],
      },
      {
        type: "vocab",
        title: "First Conversation Words",
        vocab: [
          { id: "fc-ni", simplified: "你", pinyin: "nǐ", meaning: "you", example: { chinese: "你好", pinyin: "ní hǎo", meaning: "hello" } },
          { id: "fc-wo", simplified: "我", pinyin: "wǒ", meaning: "I / me", example: { chinese: "我是", pinyin: "wǒ shì", meaning: "I am" } },
          { id: "fc-hao", simplified: "好", pinyin: "hǎo", meaning: "good", example: { chinese: "很好", pinyin: "hěn hǎo", meaning: "very good" } },
          { id: "fc-shi", simplified: "是", pinyin: "shì", meaning: "to be", example: { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "I am a student" } },
          { id: "fc-xiexie", simplified: "谢谢", pinyin: "xièxiè", meaning: "thank you", example: { chinese: "谢谢你", pinyin: "xièxiè nǐ", meaning: "thank you" } },
          { id: "fc-zaijian", simplified: "再见", pinyin: "zàijiàn", meaning: "goodbye" },
        ],
      },
      {
        type: "quiz",
        title: "Numbers & Conversation Quiz",
        quiz: [
          { type: "multiple-choice", question: "How do you say '7' in Chinese?", options: ["六 liù", "七 qī", "八 bā", "九 jiǔ"], correctIndex: 1 },
          { type: "multiple-choice", question: "What does 谢谢 (xièxiè) mean?", options: ["hello", "goodbye", "thank you", "sorry"], correctIndex: 2 },
          { type: "multiple-choice", question: "How would you say 'eleven' (10+1)?", options: ["一十 yīshí", "十一 shíyī", "十十 shíshí", "一一 yīyī"], correctIndex: 1, explanation: "Chinese numbers are logical: 11 = 十一 (ten-one)." },
          { type: "fill-blank", question: "我____学生 (I am a student)", options: ["好", "是", "你", "有"], correctIndex: 1, explanation: "是 (shì) = 'to be'. 我是学生 = I am a student." },
        ],
      },
      {
        type: "summary",
        title: "Module 1.1 Complete!",
        content: "Congratulations! You've completed the Tones & Pinyin module. You know all 4 tones, tone sandhi, all initials and finals, numbers 1-10, and your first conversation words. Next: learning to read and write Chinese characters!",
      },
    ],
  },

  // ==========================================
  // MODULE 1.2: First Characters (Lessons 6-10)
  // ==========================================
  {
    id: 6,
    moduleId: 2,
    moduleName: "First Characters",
    title: "How Characters Work",
    titleChinese: "汉字入门",
    description: "Understand the building blocks of Chinese characters — strokes, radicals, and how they combine.",
    estimatedMinutes: 12,
    xpReward: 50,
    steps: [
      {
        type: "intro",
        title: "Characters Are Not Random",
        content: "Chinese characters look complex, but they're built from simple components. Think of them like LEGO: a few hundred building blocks combine into thousands of characters. Understanding the system makes learning 10x faster than brute memorization.",
      },
      {
        type: "vocab",
        title: "The 8 Basic Strokes",
        vocab: [
          { id: "bs-heng", simplified: "一", pinyin: "héng", meaning: "horizontal stroke (一)", strokes: 1 },
          { id: "bs-shu", simplified: "丨", pinyin: "shù", meaning: "vertical stroke (丨)", strokes: 1 },
          { id: "bs-pie", simplified: "丿", pinyin: "piě", meaning: "left-falling stroke (丿)", strokes: 1 },
          { id: "bs-na", simplified: "㇏", pinyin: "nà", meaning: "right-falling stroke (㇏)", strokes: 1 },
          { id: "bs-dian", simplified: "丶", pinyin: "diǎn", meaning: "dot stroke (丶)", strokes: 1 },
        ],
      },
      {
        type: "vocab",
        title: "Key Radicals — Your First Building Blocks",
        vocab: [
          { id: "rad-ren", simplified: "人 → 亻", pinyin: "rén", meaning: "person (radical form: 亻)", example: { chinese: "你 = 亻+ 尔", pinyin: "nǐ", meaning: "you (person + ancient 'you')" } },
          { id: "rad-nv", simplified: "女", pinyin: "nǚ", meaning: "woman radical", example: { chinese: "妈 = 女 + 马", pinyin: "mā", meaning: "mother (woman + horse for sound)" } },
          { id: "rad-kou", simplified: "口", pinyin: "kǒu", meaning: "mouth radical", example: { chinese: "吃 = 口 + 乞", pinyin: "chī", meaning: "eat (mouth + beg)" } },
          { id: "rad-shou", simplified: "手 → 扌", pinyin: "shǒu", meaning: "hand radical (扌)", example: { chinese: "打 = 扌+ 丁", pinyin: "dǎ", meaning: "hit (hand + nail)" } },
          { id: "rad-shui", simplified: "水 → 氵", pinyin: "shuǐ", meaning: "water radical (氵)", example: { chinese: "河 = 氵+ 可", pinyin: "hé", meaning: "river (water + can)" } },
          { id: "rad-mu", simplified: "木", pinyin: "mù", meaning: "tree/wood radical", example: { chinese: "休 = 亻+ 木", pinyin: "xiū", meaning: "rest (person + tree = rest under tree)" } },
        ],
      },
      {
        type: "quiz",
        title: "Characters Quiz",
        quiz: [
          { type: "multiple-choice", question: "What does the radical 口 (kǒu) represent?", options: ["hand", "mouth", "water", "person"], correctIndex: 1 },
          { type: "multiple-choice", question: "In 妈 (mother), what provides the meaning hint?", options: ["马 horse", "女 woman", "口 mouth", "人 person"], correctIndex: 1, explanation: "女 (woman) is the semantic radical; 马 (horse) provides the pronunciation hint (mǎ → mā)." },
          { type: "multiple-choice", question: "What does 休 (xiū) mean, and why?", options: ["tree — it has 木", "rest — person leaning on tree", "forest — many trees", "fire — person by wood"], correctIndex: 1, explanation: "休 = 亻(person) + 木 (tree) = a person resting against a tree!" },
        ],
      },
      {
        type: "summary",
        title: "You See the System!",
        content: "Characters aren't random drawings — they're logical combinations of radicals. Knowing radicals lets you guess meanings and learn new characters much faster.",
      },
    ],
  },
  {
    id: 7,
    moduleId: 2,
    moduleName: "First Characters",
    title: "People & Pronouns",
    titleChinese: "人和代词",
    description: "Learn characters for people, pronouns, and basic identity — the building blocks of every conversation.",
    estimatedMinutes: 14,
    xpReward: 60,
    steps: [
      {
        type: "intro",
        title: "Talking About People",
        content: "Pronouns in Chinese are beautifully simple. 我 (I), 你 (you), 他/她 (he/she) — and to make them plural, just add 们! No conjugation, no case changes. Let's also learn words for people and identity.",
      },
      {
        type: "vocab",
        title: "Pronouns & People",
        vocab: [
          { id: "pp-wo", simplified: "我", pinyin: "wǒ", meaning: "I / me", strokes: 7, example: { chinese: "我们", pinyin: "wǒmen", meaning: "we / us" } },
          { id: "pp-ni", simplified: "你", pinyin: "nǐ", meaning: "you", strokes: 7, example: { chinese: "你们", pinyin: "nǐmen", meaning: "you (plural)" } },
          { id: "pp-ta-m", simplified: "他", pinyin: "tā", meaning: "he / him", strokes: 5, example: { chinese: "他们", pinyin: "tāmen", meaning: "they (male)" } },
          { id: "pp-ta-f", simplified: "她", pinyin: "tā", meaning: "she / her", strokes: 6, example: { chinese: "她们", pinyin: "tāmen", meaning: "they (female)" } },
          { id: "pp-ren", simplified: "人", pinyin: "rén", meaning: "person / people", strokes: 2, example: { chinese: "中国人", pinyin: "zhōngguó rén", meaning: "Chinese person" } },
          { id: "pp-xuesheng", simplified: "学生", pinyin: "xuéshēng", meaning: "student", example: { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "I am a student" } },
          { id: "pp-laoshi", simplified: "老师", pinyin: "lǎoshī", meaning: "teacher", example: { chinese: "她是老师", pinyin: "tā shì lǎoshī", meaning: "She is a teacher" } },
          { id: "pp-pengyou", simplified: "朋友", pinyin: "péngyǒu", meaning: "friend", example: { chinese: "我的朋友", pinyin: "wǒ de péngyǒu", meaning: "my friend" } },
        ],
      },
      {
        type: "grammar",
        title: "是 (shì) Sentences — 'to be'",
        grammar: {
          structure: "Subject + 是 + Noun",
          explanation: "是 (shì) works like English 'am/is/are' but ONLY connects nouns. Never use 是 with adjectives (don't say 我是好, say 我很好). To negate: 不是 (bú shì).",
          examples: [
            { chinese: "我是学生", pinyin: "wǒ shì xuéshēng", meaning: "I am a student" },
            { chinese: "她是老师", pinyin: "tā shì lǎoshī", meaning: "She is a teacher" },
            { chinese: "他不是中国人", pinyin: "tā bú shì zhōngguó rén", meaning: "He is not Chinese" },
          ],
        },
      },
      {
        type: "quiz",
        title: "People & Pronouns Quiz",
        quiz: [
          { type: "multiple-choice", question: "How do you say 'we' in Chinese?", options: ["你们", "我们", "他们", "她们"], correctIndex: 1, explanation: "我 (I) + 们 (plural marker) = 我们 (we)." },
          { type: "multiple-choice", question: "他 and 她 are both pronounced 'tā'. What's the difference?", options: ["No difference", "他 = he, 她 = she", "他 = formal, 她 = casual", "他 = young, 她 = old"], correctIndex: 1, explanation: "他 (he) has 亻person radical, 她 (she) has 女 woman radical. Same pronunciation!" },
          { type: "fill-blank", question: "她____老师 (She is a teacher)", options: ["很", "是", "不", "有"], correctIndex: 1 },
          { type: "multiple-choice", question: "How do you say 'He is not a student'?", options: ["他是不学生", "他不是学生", "他没是学生", "不他是学生"], correctIndex: 1, explanation: "不 goes before 是: 他不是学生." },
        ],
      },
      {
        type: "summary",
        title: "People & Pronouns Down!",
        content: "You can now talk about yourself and others: I, you, he/she, we, they. Plus 是 sentences and negation with 不. The plural trick (add 们) is one of the easiest things in Chinese!",
      },
    ],
  },
  {
    id: 8,
    moduleId: 2,
    moduleName: "First Characters",
    title: "Daily Essentials",
    titleChinese: "日常用语",
    description: "Essential characters for daily life — greetings, thanks, basic questions, and polite expressions.",
    estimatedMinutes: 15,
    xpReward: 65,
    steps: [
      {
        type: "intro",
        title: "Survival Phrases",
        content: "These are the words you'll use every single day. Greetings, saying thank you, asking simple questions. Even with just these, you can navigate basic interactions in Chinese.",
      },
      {
        type: "vocab",
        title: "Greetings & Polite Words",
        vocab: [
          { id: "de-nihao", simplified: "你好", pinyin: "ní hǎo", meaning: "hello", example: { chinese: "你好！你好吗？", pinyin: "ní hǎo! nǐ hǎo ma?", meaning: "Hello! How are you?" } },
          { id: "de-xiexie", simplified: "谢谢", pinyin: "xièxiè", meaning: "thank you" },
          { id: "de-bukeqi", simplified: "不客气", pinyin: "bú kèqì", meaning: "you're welcome" },
          { id: "de-duibuqi", simplified: "对不起", pinyin: "duìbùqǐ", meaning: "sorry", example: { chinese: "对不起，我不知道", pinyin: "duìbùqǐ, wǒ bù zhīdào", meaning: "Sorry, I don't know" } },
          { id: "de-meiguanxi", simplified: "没关系", pinyin: "méi guānxì", meaning: "it's okay / no problem" },
          { id: "de-zaijian", simplified: "再见", pinyin: "zàijiàn", meaning: "goodbye" },
        ],
      },
      {
        type: "vocab",
        title: "Essential Question Words",
        vocab: [
          { id: "de-shenme", simplified: "什么", pinyin: "shénme", meaning: "what", example: { chinese: "这是什么？", pinyin: "zhè shì shénme?", meaning: "What is this?" } },
          { id: "de-shei", simplified: "谁", pinyin: "shéi", meaning: "who", example: { chinese: "你是谁？", pinyin: "nǐ shì shéi?", meaning: "Who are you?" } },
          { id: "de-nar", simplified: "哪儿", pinyin: "nǎr", meaning: "where", example: { chinese: "你去哪儿？", pinyin: "nǐ qù nǎr?", meaning: "Where are you going?" } },
          { id: "de-duoshao", simplified: "多少", pinyin: "duōshǎo", meaning: "how much / how many", example: { chinese: "多少钱？", pinyin: "duōshǎo qián?", meaning: "How much money?" } },
        ],
      },
      {
        type: "grammar",
        title: "吗 (ma) — Yes/No Questions",
        grammar: {
          structure: "Statement + 吗？",
          explanation: "The simplest way to ask a yes/no question: just add 吗 at the end of any statement. No word order change needed! To answer yes: repeat the verb. To answer no: 不 + verb.",
          examples: [
            { chinese: "你好吗？", pinyin: "nǐ hǎo ma?", meaning: "Are you well?" },
            { chinese: "你是学生吗？", pinyin: "nǐ shì xuéshēng ma?", meaning: "Are you a student?" },
            { chinese: "他是老师吗？不是。", pinyin: "tā shì lǎoshī ma? bú shì.", meaning: "Is he a teacher? No." },
          ],
        },
      },
      {
        type: "quiz",
        title: "Daily Essentials Quiz",
        quiz: [
          { type: "multiple-choice", question: "How do you say 'sorry' in Chinese?", options: ["谢谢", "对不起", "没关系", "不客气"], correctIndex: 1 },
          { type: "multiple-choice", question: "什么 (shénme) means:", options: ["who", "where", "what", "how many"], correctIndex: 2 },
          { type: "multiple-choice", question: "How do you ask 'How much money?'", options: ["什么钱？", "多少钱？", "谁的钱？", "哪儿钱？"], correctIndex: 1 },
          { type: "fill-blank", question: "你是老师____？(Are you a teacher?)", options: ["的", "了", "吗", "不"], correctIndex: 2, explanation: "Add 吗 to turn any statement into a yes/no question." },
        ],
      },
      {
        type: "summary",
        title: "Daily Essentials Locked In!",
        content: "You can now greet people, thank them, apologize, and ask basic questions (what, who, where, how much). Plus the powerful 吗 question pattern!",
      },
    ],
  },
  {
    id: 9,
    moduleId: 2,
    moduleName: "First Characters",
    title: "Food & Drink",
    titleChinese: "吃和喝",
    description: "Essential food and drink vocabulary — order at a restaurant, express what you want.",
    estimatedMinutes: 15,
    xpReward: 65,
    steps: [
      {
        type: "intro",
        title: "The Most Useful Topic",
        content: "Food is culture in China. Being able to order food is probably the most immediately practical skill. Let's learn key food words and how to express what you want.",
      },
      {
        type: "vocab",
        title: "Food & Drink Basics",
        vocab: [
          { id: "fd-chi", simplified: "吃", pinyin: "chī", meaning: "to eat", radical: "口", example: { chinese: "吃饭", pinyin: "chīfàn", meaning: "eat a meal" } },
          { id: "fd-he", simplified: "喝", pinyin: "hē", meaning: "to drink", radical: "口", example: { chinese: "喝水", pinyin: "hē shuǐ", meaning: "drink water" } },
          { id: "fd-fan", simplified: "饭", pinyin: "fàn", meaning: "rice / meal", example: { chinese: "米饭", pinyin: "mǐfàn", meaning: "cooked rice" } },
          { id: "fd-shui", simplified: "水", pinyin: "shuǐ", meaning: "water", strokes: 4 },
          { id: "fd-cha", simplified: "茶", pinyin: "chá", meaning: "tea", example: { chinese: "绿茶", pinyin: "lǜchá", meaning: "green tea" } },
          { id: "fd-kafei", simplified: "咖啡", pinyin: "kāfēi", meaning: "coffee" },
          { id: "fd-mian", simplified: "面", pinyin: "miàn", meaning: "noodles", example: { chinese: "牛肉面", pinyin: "niúròu miàn", meaning: "beef noodles" } },
          { id: "fd-rou", simplified: "肉", pinyin: "ròu", meaning: "meat", example: { chinese: "猪肉", pinyin: "zhūròu", meaning: "pork" } },
          { id: "fd-cai", simplified: "菜", pinyin: "cài", meaning: "vegetables / dish", example: { chinese: "点菜", pinyin: "diǎn cài", meaning: "order food" } },
        ],
      },
      {
        type: "grammar",
        title: "想 (xiǎng) — 'want to'",
        grammar: {
          structure: "Subject + 想 + Verb",
          explanation: "想 (xiǎng) means 'want to' or 'would like to'. It's polite and perfect for ordering. For stronger desire, use 要 (yào) = 'want/need'.",
          examples: [
            { chinese: "我想吃面", pinyin: "wǒ xiǎng chī miàn", meaning: "I want to eat noodles" },
            { chinese: "你想喝什么？", pinyin: "nǐ xiǎng hē shénme?", meaning: "What do you want to drink?" },
            { chinese: "我要一杯茶", pinyin: "wǒ yào yī bēi chá", meaning: "I want a cup of tea" },
          ],
        },
      },
      {
        type: "practice",
        title: "Restaurant Role Play",
        content: "Imagine you're at a Chinese restaurant:\n\nWaiter: 你好！你想吃什么？(Hello! What would you like to eat?)\nYou: 我想吃牛肉面。(I'd like beef noodles.)\nWaiter: 想喝什么？(What would you like to drink?)\nYou: 一杯绿茶，谢谢。(A cup of green tea, thanks.)\nWaiter: 好的！(Great!)\n\n多少钱？(How much?) is how you ask for the bill!",
      },
      {
        type: "quiz",
        title: "Food & Drink Quiz",
        quiz: [
          { type: "multiple-choice", question: "What does 吃饭 (chīfàn) mean?", options: ["drink water", "eat a meal", "cook food", "buy rice"], correctIndex: 1 },
          { type: "fill-blank", question: "我____喝咖啡 (I want to drink coffee)", options: ["是", "想", "吃", "有"], correctIndex: 1 },
          { type: "multiple-choice", question: "How do you say 'green tea'?", options: ["红茶", "绿茶", "茶水", "茶叶"], correctIndex: 1, explanation: "绿 (lǜ) = green, 茶 (chá) = tea." },
          { type: "multiple-choice", question: "You want to ask for the bill. You say:", options: ["再见！", "谢谢！", "多少钱？", "对不起！"], correctIndex: 2 },
        ],
      },
      {
        type: "summary",
        title: "Restaurant Ready!",
        content: "You can now order food and drinks, say what you want (想/要), and ask for the price. This alone makes you functional in any Chinese restaurant!",
      },
    ],
  },
  {
    id: 10,
    moduleId: 2,
    moduleName: "First Characters",
    title: "Self-Introduction",
    titleChinese: "自我介绍",
    description: "Put it all together — introduce yourself, say where you're from, what you do, and ask others about themselves.",
    estimatedMinutes: 16,
    xpReward: 80,
    steps: [
      {
        type: "intro",
        title: "Your Chinese Self-Introduction",
        content: "This is the capstone lesson for Level 1's first phase. You'll combine everything — tones, characters, grammar, vocabulary — into a complete self-introduction. This is the first real milestone in your Chinese journey.",
      },
      {
        type: "vocab",
        title: "Introduction Vocabulary",
        vocab: [
          { id: "si-jiao", simplified: "叫", pinyin: "jiào", meaning: "to be called", example: { chinese: "我叫…", pinyin: "wǒ jiào...", meaning: "My name is..." } },
          { id: "si-mingzi", simplified: "名字", pinyin: "míngzì", meaning: "name", example: { chinese: "你叫什么名字？", pinyin: "nǐ jiào shénme míngzì?", meaning: "What's your name?" } },
          { id: "si-guojia", simplified: "国", pinyin: "guó", meaning: "country", example: { chinese: "中国", pinyin: "zhōngguó", meaning: "China" } },
          { id: "si-zhongguo", simplified: "中国", pinyin: "zhōngguó", meaning: "China (Middle Kingdom)" },
          { id: "si-lai", simplified: "来", pinyin: "lái", meaning: "to come / from", example: { chinese: "我从美国来", pinyin: "wǒ cóng měiguó lái", meaning: "I come from America" } },
          { id: "si-xue", simplified: "学", pinyin: "xué", meaning: "to study / learn", example: { chinese: "学中文", pinyin: "xué zhōngwén", meaning: "study Chinese" } },
          { id: "si-zhongwen", simplified: "中文", pinyin: "zhōngwén", meaning: "Chinese language" },
          { id: "si-xihuan", simplified: "喜欢", pinyin: "xǐhuān", meaning: "to like", example: { chinese: "我喜欢中国菜", pinyin: "wǒ xǐhuān zhōngguó cài", meaning: "I like Chinese food" } },
          { id: "si-hen", simplified: "很", pinyin: "hěn", meaning: "very", example: { chinese: "很高兴", pinyin: "hěn gāoxìng", meaning: "very happy" } },
          { id: "si-gaoxing", simplified: "高兴", pinyin: "gāoxìng", meaning: "happy / glad", example: { chinese: "认识你很高兴", pinyin: "rènshí nǐ hěn gāoxìng", meaning: "Nice to meet you" } },
        ],
      },
      {
        type: "practice",
        title: "Your Self-Introduction Script",
        content: "Practice this complete self-introduction:\n\n你好！(Hello!)\n我叫 [your name]。(My name is [name].)\n我是 [nationality] 人。(I am [nationality].)\n我是学生。(I am a student.) / 我工作。(I work.)\n我学中文。(I'm studying Chinese.)\n我喜欢中国菜。(I like Chinese food.)\n认识你很高兴！(Nice to meet you!)\n\nNow try asking someone about themselves:\n你叫什么名字？(What's your name?)\n你是哪国人？(What country are you from?)\n你做什么工作？(What do you do for work?)",
      },
      {
        type: "grammar",
        title: "的 (de) — Possession & Description",
        grammar: {
          structure: "Noun/Pronoun + 的 + Noun",
          explanation: "的 (de) is the most common character in Chinese. It connects a possessor to what they possess (like 's in English), and also connects descriptions to nouns.",
          examples: [
            { chinese: "我的名字", pinyin: "wǒ de míngzì", meaning: "my name" },
            { chinese: "你的老师", pinyin: "nǐ de lǎoshī", meaning: "your teacher" },
            { chinese: "中国的菜", pinyin: "zhōngguó de cài", meaning: "Chinese food / China's cuisine" },
          ],
        },
      },
      {
        type: "quiz",
        title: "Self-Introduction Quiz",
        quiz: [
          { type: "fill-blank", question: "你____什么名字？(What is your name?)", options: ["是", "叫", "有", "想"], correctIndex: 1 },
          { type: "multiple-choice", question: "How do you say 'I like Chinese food'?", options: ["我是中国菜", "我想中国菜", "我喜欢中国菜", "我吃中国菜"], correctIndex: 2 },
          { type: "multiple-choice", question: "我的老师 means:", options: ["I am a teacher", "my teacher", "your teacher", "the teacher"], correctIndex: 1, explanation: "我的 = my. 老师 = teacher." },
          { type: "fill-blank", question: "认识你____高兴！(Nice to meet you!)", options: ["是", "的", "很", "不"], correctIndex: 2, explanation: "很 (hěn) = very. 认识你很高兴 = knowing you (I'm) very happy." },
          { type: "multiple-choice", question: "What does 中文 (zhōngwén) mean?", options: ["China", "Chinese person", "Chinese language", "Chinese food"], correctIndex: 2 },
        ],
      },
      {
        type: "summary",
        title: "Milestone Reached! 🎉",
        content: "You can now introduce yourself in Chinese! You've completed 10 lessons covering tones, pinyin, character building blocks, pronouns, daily phrases, food, and self-introduction. You know ~60 words and ~40 characters. This is a real foundation — everything from here builds on what you've learned. Next: expanding your daily Chinese and starting graded reading!",
      },
    ],
  },
];
