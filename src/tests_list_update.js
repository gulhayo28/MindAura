// Tests.js ning TESTS_LIST qismini quyidagi bilan almashtiring:

export const TESTS_LIST = [
  // ── ASOSIY TESTLAR ──
  { id:"luscher",    icon:"◉", title:"Lyusher Rang Testi",     desc:"Ranglarni tanlash orqali hozirgi ruhiy holatingizni aniqlang",          duration:"3–5 daqiqa",  questions:"8 rang × 2",  accent:"#7c9e8e", tag:"Klassik" },
  { id:"temperament",icon:"◈", title:"Temperament Testi",      desc:"Og'irlik koeffitsienti bilan — Xolerik, Sangvinik, Flegmatik, Melanxolik", duration:"5–7 daqiqa",  questions:"8 savol",     accent:"#9b8ec4", tag:"Shaxsiyat" },
  { id:"depression", icon:"◇", title:"Depressiya Testi (PHQ-9)",desc:"4 o'lcham: kayfiyat, energiya, ijtimoiy, kognitiv + radar grafik",     duration:"2–3 daqiqa",  questions:"9 savol",     accent:"#6366f1", tag:"Klinik" },
  { id:"stress",     icon:"◎", title:"Stress Testi (PSS-10)",  desc:"3 o'lcham: reaktivlik, nazorat, bardosh + batafsil tavsif",            duration:"2–3 daqiqa",  questions:"10 savol",    accent:"#c4954a", tag:"Ko'p o'lchovli" },
  { id:"nikoh",      icon:"◆", title:"Nikohga Tayyorlik",      desc:"4 o'lcham: amaliy, muloqot, emotsional, ijtimoiy + radar grafik",      duration:"3–4 daqiqa",  questions:"10 savol",    accent:"#b87a9e", tag:"Oilaviy" },
  { id:"szondi",     icon:"◉", title:"Sondi Testi",            desc:"6 seriya yuzlardan 2 tasini tanlash orqali ongsiz ehtiyojlarni aniqlang",duration:"3–5 daqiqa", questions:"6 × 2 tanlov", accent:"#7c9e8e", tag:"Proektiv" },
  // ── QOSHIMCHA TESTLAR ──
  { id:"rorschach",  icon:"◌", title:"Rorschach Dog' Testi",   desc:"10 ta siyoh dog'ida nimani ko'rishingiz shaxsiyatingizni aks ettiradi", duration:"3–4 daqiqa",  questions:"10 savol",    accent:"#4a7fa5", tag:"Proektiv" },
  { id:"big5",       icon:"◈", title:"Big Five Shaxsiyat",     desc:"Dunyoning eng ishonchli 5 omilli shaxsiyat modeli",                    duration:"3–4 daqiqa",  questions:"15 savol",    accent:"#9b8ec4", tag:"Ilmiy" },
  { id:"enneagram",  icon:"◎", title:"Enneagram (9 tip)",      desc:"9 ta shaxsiyat tipidan qaysisingiz? Chuqur o'z-o'zini tushunish",      duration:"3–5 daqiqa",  questions:"5 savol",     accent:"#7c9e8e", tag:"Chuqur" },
  { id:"empathy",    icon:"◇", title:"Empatiya Testi",         desc:"Boshqalarning his-tuyg'ularini his qilish qobiliyatingizni o'lchang",   duration:"2–3 daqiqa",  questions:"8 savol",     accent:"#b87a9e", tag:"Ijtimoiy" },
  { id:"narcissism", icon:"◆", title:"Narsisizm Testi (NPI)",  desc:"Sog'lom o'z-o'ziga hurmat va narsisizm chegarasini aniqlang",          duration:"2–3 daqiqa",  questions:"8 savol",     accent:"#c4954a", tag:"Shaxsiyat" },
  { id:"darktriad",  icon:"◉", title:"Dark Triad Testi",       desc:"Makkyavelizm, psixopatiya va narsisizm darajasini aniqlang",           duration:"2–3 daqiqa",  questions:"9 savol",     accent:"#6b7280", tag:"Ilmiy" },
  { id:"attachment", icon:"◌", title:"Bog'lanish Uslubi",      desc:"Munosabatlarda xavfsiz, xavotirli yoki qochuvchi tip?",               duration:"2–3 daqiqa",  questions:"5 savol",     accent:"#b87a9e", tag:"Munosabatlar" },
  { id:"trauma",     icon:"◇", title:"Bolaliк Travmasi Testi", desc:"Bolaliкdagi tajribalar va ularning hozirgi hayotga ta'sirini tushunish",duration:"3–4 daqiqa",  questions:"10 savol",    accent:"#9b8ec4", tag:"Travma" },
];
