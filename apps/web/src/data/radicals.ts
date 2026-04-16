export interface RadicalInfo {
  radical: string;
  meaning: { en: string; hr: string };
  tooltip: { en: string; hr: string };
}

/**
 * Each radical has a unique explanation with different examples
 * showing where it appears in real characters.
 */
export const radicalMap: Record<string, RadicalInfo> = {
  "女": {
    radical: "女",
    meaning: { en: "woman", hr: "žena" },
    tooltip: {
      en: "The 女 (woman) radical appears in characters related to women and family. For example: 妈 (mother), 姐 (older sister), 好 (good — a woman 女 with a child 子).",
      hr: "Radikal 女 (žena) pojavljuje se u znakovima vezanim za žene i obitelj. Na primjer: 妈 (majka), 姐 (starija sestra), 好 (dobro — žena 女 s djetetom 子).",
    },
  },
  "麻": {
    radical: "麻",
    meaning: { en: "hemp", hr: "konoplja" },
    tooltip: {
      en: "The 麻 radical means hemp/flax. It appears in characters related to roughness or numbness: 摩 (to rub), 磨 (to grind), 魔 (demon/magic).",
      hr: "Radikal 麻 znači konoplja/lan. Pojavljuje se u znakovima vezanim za hrapavost ili obamrlost: 摩 (trljati), 磨 (brusiti), 魔 (demon/magija).",
    },
  },
  "马": {
    radical: "马",
    meaning: { en: "horse", hr: "konj" },
    tooltip: {
      en: "The 马 (horse) radical often provides pronunciation hints rather than meaning. It appears in: 妈 (mā, mother), 骂 (mà, scold), 吗 (ma, question particle) — all share the 'ma' sound!",
      hr: "Radikal 马 (konj) često daje naznaku izgovora, ne značenja. Pojavljuje se u: 妈 (mā, majka), 骂 (mà, grditi), 吗 (ma, upitna čestica) — svi dijele zvuk 'ma'!",
    },
  },
  "口": {
    radical: "口",
    meaning: { en: "mouth", hr: "usta" },
    tooltip: {
      en: "The 口 (mouth) radical appears in characters related to speaking, eating, and sounds. For example: 吃 (eat), 喝 (drink), 吗 (question particle), 叫 (to call/shout), 听 (listen).",
      hr: "Radikal 口 (usta) pojavljuje se u znakovima vezanim za govor, jelo i zvukove. Na primjer: 吃 (jesti), 喝 (piti), 吗 (upitna čestica), 叫 (zvati/vikati), 听 (slušati).",
    },
  },
  "鱼": {
    radical: "鱼",
    meaning: { en: "fish", hr: "riba" },
    tooltip: {
      en: "The 鱼 (fish) radical appears in characters for sea creatures and fish types: 鲸 (whale), 鲨 (shark), 鲜 (fresh — originally 'fresh fish').",
      hr: "Radikal 鱼 (riba) pojavljuje se u znakovima za morska bića i vrste riba: 鲸 (kit), 鲨 (morski pas), 鲜 (svježe — izvorno 'svježa riba').",
    },
  },
  "纟": {
    radical: "纟",
    meaning: { en: "silk/thread", hr: "svila/nit" },
    tooltip: {
      en: "The 纟 (silk) radical appears in characters related to threads, fabrics, and colors: 红 (red), 绿 (green), 线 (thread/line), 织 (to weave), 纸 (paper — originally made from silk).",
      hr: "Radikal 纟 (svila) pojavljuje se u znakovima vezanim za niti, tkanine i boje: 红 (crveno), 绿 (zeleno), 线 (nit/linija), 织 (tkati), 纸 (papir — izvorno od svile).",
    },
  },
  "水": {
    radical: "水",
    meaning: { en: "water", hr: "voda" },
    tooltip: {
      en: "The 水/氵 (water) radical appears in characters related to liquids and water: 河 (river), 湖 (lake), 海 (ocean), 泪 (tears), 汤 (soup).",
      hr: "Radikal 水/氵 (voda) pojavljuje se u znakovima vezanim za tekućine i vodu: 河 (rijeka), 湖 (jezero), 海 (ocean), 泪 (suze), 汤 (juha).",
    },
  },

  // Radicals from Lesson 6 (How Characters Work)
  "人": {
    radical: "人",
    meaning: { en: "person", hr: "osoba" },
    tooltip: {
      en: "The 人/亻 (person) radical is one of the most common. It appears in: 你 (you), 他 (he), 们 (plural marker), 休 (rest — person by a tree), 做 (to do).",
      hr: "Radikal 人/亻 (osoba) je jedan od najčešćih. Pojavljuje se u: 你 (ti), 他 (on), 们 (oznaka množine), 休 (odmor — osoba kraj drveta), 做 (raditi).",
    },
  },
  "手": {
    radical: "手",
    meaning: { en: "hand", hr: "ruka" },
    tooltip: {
      en: "The 手/扌 (hand) radical appears in action characters involving hands: 打 (hit), 拿 (take), 拉 (pull), 推 (push), 抱 (hug/hold).",
      hr: "Radikal 手/扌 (ruka) pojavljuje se u znakovima radnji s rukama: 打 (udariti), 拿 (uzeti), 拉 (vući), 推 (gurati), 抱 (zagrliti/držati).",
    },
  },
  "木": {
    radical: "木",
    meaning: { en: "tree/wood", hr: "drvo" },
    tooltip: {
      en: "The 木 (tree) radical appears in characters related to wood and plants: 林 (forest — two trees), 森 (dense forest — three trees!), 桌 (table), 椅 (chair), 休 (rest).",
      hr: "Radikal 木 (drvo) pojavljuje se u znakovima vezanim za drvo i biljke: 林 (šuma — dva drveta), 森 (gusta šuma — tri drveta!), 桌 (stol), 椅 (stolica), 休 (odmor).",
    },
  },

  // Additional radicals that might appear
  "火": {
    radical: "火",
    meaning: { en: "fire", hr: "vatra" },
    tooltip: {
      en: "The 火/灬 (fire) radical appears in characters related to heat and cooking: 烤 (roast), 热 (hot), 煮 (boil), 烧 (burn), 灯 (lamp).",
      hr: "Radikal 火/灬 (vatra) pojavljuje se u znakovima vezanim za toplinu i kuhanje: 烤 (peći), 热 (vruće), 煮 (kuhati), 烧 (gorjeti), 灯 (lampa).",
    },
  },
  "心": {
    radical: "心",
    meaning: { en: "heart", hr: "srce" },
    tooltip: {
      en: "The 心/忄 (heart) radical appears in emotion and thought characters: 想 (think/miss), 情 (feeling), 怕 (afraid), 快 (fast/happy), 忙 (busy).",
      hr: "Radikal 心/忄 (srce) pojavljuje se u znakovima za emocije i misli: 想 (misliti/nedostajati), 情 (osjećaj), 怕 (bojati se), 快 (brzo/sretno), 忙 (zauzet).",
    },
  },
  "日": {
    radical: "日",
    meaning: { en: "sun/day", hr: "sunce/dan" },
    tooltip: {
      en: "The 日 (sun) radical appears in time and light characters: 明 (bright — sun + moon), 早 (early/morning), 时 (time), 晚 (evening), 暖 (warm).",
      hr: "Radikal 日 (sunce) pojavljuje se u znakovima za vrijeme i svjetlost: 明 (svijetlo — sunce + mjesec), 早 (rano/jutro), 时 (vrijeme), 晚 (večer), 暖 (toplo).",
    },
  },
  "月": {
    radical: "月",
    meaning: { en: "moon/flesh", hr: "mjesec/tijelo" },
    tooltip: {
      en: "The 月 radical has two origins: moon (明 bright, 期 period) and flesh/body (脑 brain, 脸 face, 肉 meat). Context tells which meaning applies!",
      hr: "Radikal 月 ima dva podrijetla: mjesec (明 svijetlo, 期 period) i tijelo/meso (脑 mozak, 脸 lice, 肉 meso). Kontekst govori koje značenje vrijedi!",
    },
  },
  "土": {
    radical: "土",
    meaning: { en: "earth/soil", hr: "zemlja/tlo" },
    tooltip: {
      en: "The 土 (earth) radical appears in geography and building characters: 地 (ground), 城 (city), 场 (field/place), 块 (piece/block), 坐 (sit).",
      hr: "Radikal 土 (zemlja) pojavljuje se u znakovima za geografiju i gradnju: 地 (tlo), 城 (grad), 场 (polje/mjesto), 块 (komad/blok), 坐 (sjediti).",
    },
  },
  "食": {
    radical: "食",
    meaning: { en: "food", hr: "hrana" },
    tooltip: {
      en: "The 食/饣 (food) radical appears in eating-related characters: 饭 (rice/meal), 饿 (hungry), 饮 (drink — formal), 饺 (dumpling), 馆 (restaurant).",
      hr: "Radikal 食/饣 (hrana) pojavljuje se u znakovima vezanim za jelo: 饭 (riža/obrok), 饿 (gladan), 饮 (piti — formalno), 饺 (dumpling), 馆 (restoran).",
    },
  },
};

/**
 * Get radical info, with fallback for unknown radicals
 */
export function getRadicalInfo(radical: string, locale: "en" | "hr"): { label: string; tooltip: string } {
  const info = radicalMap[radical];
  if (info) {
    return {
      label: info.meaning[locale],
      tooltip: info.tooltip[locale],
    };
  }
  // Fallback for unknown radicals
  return {
    label: locale === "hr" ? "komponenta" : "component",
    tooltip: locale === "hr"
      ? `Radikal ${radical} je dio ovog znaka. Radikali su građevni blokovi — poznavanje njih pomaže ti prepoznati i zapamtiti nove znakove.`
      : `The ${radical} radical is part of this character. Radicals are building blocks — knowing them helps you recognize and remember new characters.`,
  };
}
