export interface Fighter {
  id: string;
  name?: string;
  nickname: string;
  age?: string;
  country: string;
  flag?: string;
  category: string;
  weight: string;
  height: string;
  reach?: string;
  record?: string;
  stance?: string;
  image: string;
  imageTransparent?: string;
  revealed: boolean;
  badge?: string;
  slotNumber: number;
  contrincante?: string | number | (string | number)[];
  equipo?: string | number | (string | number)[];
  socials?: {
    twitch?: string;
    kick?: string;
    instagram?: string;
  };
}

export interface Fight {
  id: string;
  tag: string;
  title: string;
  category: string;
  rounds: string;
  time: string;
  fighter1: Fighter;
  fighter2: Fighter;
  team1?: Fighter[];
  team2?: Fighter[];
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  country: string;
  flag: string;
  stageTime: string;
  status: string;
  hits: string[];
  image: string;
  bio: string;
  instagram: string;
}

// Exactly 22 fighters (7 confirmed, 15 mystery slots matching the official roster grid)
export const fighters: Fighter[] = [
  // Fila 1 - Confirmados (1 a 7)
  {
    id: "fighter-1",
    slotNumber: 1,
    revealed: true,
    nickname: "REY DE LA CITY",
    age: "24 años",
    country: "Republica Dominicana",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/reydelacity.png",
    imageTransparent: "/images/boxeadores-png/reydelacity-sinfondo.png",
    socials: { kick: "Reydelacity", instagram: "Reydelacity" },
    contrincante: 12
  },
  {
    id: "fighter-2",
    slotNumber: 2,
    revealed: true,
    nickname: "EL AGROPECUARIO",
    age: "25 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/elagropecuario.png",
    imageTransparent: "/images/boxeadores-png/elagropecuario-sinfondo.png",
    socials: { kick: "elagropecurio", instagram: "elagropecurio" },
    contrincante: 11
  },
  {
    id: "fighter-3",
    slotNumber: 3,
    revealed: true,
    nickname: "SAMANTHA CORREA",
    age: "23 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/samanthacorrea.png",
    imageTransparent: "/images/boxeadores-png/samanthacorrea-sinfondo.png",
    socials: { kick: "samanthacorrea", instagram: "samanthacorrea" },
    contrincante: 10
  },
  {
    id: "fighter-4",
    slotNumber: 4,
    revealed: true,
    nickname: "HERRERA",
    age: "26 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/herrera.png",
    imageTransparent: "/images/boxeadores-png/herrera-sinfondo.png",
    socials: { kick: "herrera", instagram: "herrera" },
    contrincante: 9
  },
  {
    id: "fighter-5",
    slotNumber: 5,
    revealed: true,
    nickname: "ALEXA TORRES",
    age: "24 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/alexatorres.png",
    imageTransparent: "/images/boxeadores-png/alexatorres-sinfondo.png",
    socials: { kick: "alexatorres", instagram: "alexatorres" },
    contrincante: [6, 7, 8]
  },
  {
    id: "fighter-6",
    slotNumber: 6,
    revealed: true,
    nickname: "KAROLA",
    age: "25 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/karola.png",
    imageTransparent: "/images/boxeadores-png/karola-sinfondo.png",
    socials: { kick: "karola", instagram: "karola" },
    contrincante: [7, 8, 5]
  },
  {
    id: "fighter-7",
    slotNumber: 7,
    revealed: true,
    nickname: "YAYA",
    age: "23 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/yaya.png",
    imageTransparent: "/images/boxeadores-png/yaya-sinfondo.png",
    socials: { kick: "yaya", instagram: "yaya" },
    contrincante: [6, 5, 8]
  },

  // Fila 1 - Por Revelar (8 a 12)
  {
    id: "fighter-8",
    slotNumber: 8,
    revealed: true,
    nickname: "BEBA",
    age: "24 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/beba.png",
    imageTransparent: "/images/boxeadores-png/beba-sinfondo.png",
    socials: { kick: "beba", instagram: "beba" },
    contrincante: [6, 7, 5]
  },
  {
    id: "fighter-9",
    slotNumber: 9,
    revealed: true,
    nickname: "JH DE LA CRUZ",
    age: "27 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/jhdelacruz.png",
    imageTransparent: "/images/boxeadores-png/jhdelacruz-sinfondo.png",
    socials: { kick: "jhdelacruz", instagram: "jhdelacruz" },
    contrincante: 4
  },
  {
    id: "fighter-10",
    slotNumber: 10,
    revealed: true,
    nickname: "CAMI PULGARÍN",
    age: "25 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "76.5 kg",
    height: "1.78 m",
    image: "/images/boxeadores/camipulgarin.png",
    imageTransparent: "/images/boxeadores-png/camipulgarin-sinfondo.png",
    socials: { kick: "camipulgarin", instagram: "camipulgarin" },
    contrincante: 3
  },
  {
    id: "fighter-11",
    slotNumber: 11,
    revealed: true,
    nickname: "DAREN",
    age: "24 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/daren.png",
    imageTransparent: "/images/boxeadores-png/daren-sinfondo.png",
    socials: { kick: "daren", instagram: "daren" },
    contrincante: 2
  },
  {
    id: "fighter-12",
    slotNumber: 12,
    revealed: true,
    nickname: "WEGOTKICKS",
    age: "26 años",
    country: "Puerto Rico",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/wegotkicks.png",
    imageTransparent: "/images/boxeadores-png/wegotkicks-sinfondo.png",
    socials: { kick: "wegotkicks", instagram: "wegotkicks" },
    contrincante: 1
  },

  // Fila 2 - Por Revelar (13 a 22)
  {
    id: "fighter-13",
    slotNumber: 13,
    revealed: true,
    nickname: "VALENTINO",
    age: "25 años",
    country: "Colombia",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/valentino.png",
    imageTransparent: "/images/boxeadores-png/valentino-sinfondo.png",
    socials: { kick: "valetino", instagram: "valetino" },
    contrincante: 22
  },
  {
    id: "fighter-14",
    slotNumber: 14,
    revealed: true,
    nickname: "WESTCOL",
    age: "24 años",
    country: "China",
    flag: "🇨🇳",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/westcol.png",
    imageTransparent: "/images/boxeadores-png/westcol-sinfondo.png",
    socials: { kick: "westcol", instagram: "westcol" },
    contrincante: 21
  },
  {
    id: "fighter-15",
    slotNumber: 15,
    revealed: true,
    nickname: "WILLITO",
    age: "25 años",
    country: "Mexico",
    flag: "🇲🇽",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/willito.png",
    imageTransparent: "/images/boxeadores-png/willito-sinfondo.png",
    socials: { kick: "willito", instagram: "willito" },
    equipo: 16,
    contrincante: [19, 20]
  },
  {
    id: "fighter-16",
    slotNumber: 16,
    revealed: true,
    nickname: "LONCHE",
    age: "26 años",
    country: "Mexico",
    flag: "🇲🇽",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/lonche.png",
    imageTransparent: "/images/boxeadores-png/lonche-sinfondo.png",
    socials: { kick: "lonche", instagram: "lonche" },
    equipo: 15,
    contrincante: [19, 20]
  },
  {
    id: "fighter-17",
    slotNumber: 17,
    revealed: true,
    nickname: "LA DIVAZA",
    age: "27 años",
    country: "Colombia",
    flag: "🇨🇴",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/ladivaza.png",
    imageTransparent: "/images/boxeadores-png/ladivaza-sinfondo.png",
    socials: { kick: "ladivaza", instagram: "ladivaza" },
    contrincante: 18
  },
  {
    id: "fighter-18",
    slotNumber: 18,
    revealed: true,
    nickname: "VALDIRI",
    age: "28 años",
    country: "Colombia",
    flag: "🇨🇴",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/lavaldiri.png",
    imageTransparent: "/images/boxeadores-png/lavaldiri-sinfondo.png",
    socials: { kick: "valdiri", instagram: "valdiri" },
    contrincante: 17
  },
  {
    id: "fighter-19",
    slotNumber: 19,
    revealed: true,
    nickname: "SECRET FIGHTER",
    age: "23 años",
    country: "Incognito",
    flag: "❓",
    category: "Peso Femenino (52 kg)",
    weight: "Por confirmar",
    height: "Por confirmar",
    image: "/images/boxeadores/incognito.png",
    imageTransparent: "/images/boxeadores-png/incognito-sinfondo.png",
    socials: { kick: "samulx", instagram: "samulx" },
    equipo: 20,
    contrincante: [15, 16]
  },
  {
    id: "fighter-20",
    slotNumber: 20,
    revealed: true,
    nickname: "CHANTY",
    age: "25 años",
    country: "Mexico",
    flag: "🇲🇽",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/chanty.png",
    imageTransparent: "/images/boxeadores-png/chanty-sinfondo.png",
    socials: { kick: "chanty", instagram: "chanty" },
    equipo: 19,
    contrincante: [15, 16]
  },
  {
    id: "fighter-21",
    slotNumber: 21,
    revealed: true,
    nickname: "BLESSD",
    age: "24 años",
    country: "China",
    flag: "🇨🇳",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/blessd.png",
    imageTransparent: "/images/boxeadores-png/blessd-sinfondo.png",
    socials: { kick: "blessd", instagram: "blessd" },
    contrincante: 14
  },
  {
    id: "fighter-22",
    slotNumber: 22,
    revealed: true,
    nickname: "EMIRO",
    age: "26 años",
    country: "Colombia",
    flag: "🇨🇴",
    category: "Peso Mediano (78 kg)",
    weight: "75.5 kg",
    height: "1.85 m",
    image: "/images/boxeadores/emiro.png",
    imageTransparent: "/images/boxeadores-png/emiro-sinfondo.png",
    socials: { kick: "emiro", instagram: "emiro" },
    contrincante: 13
  },
];

export const fights: Fight[] = [
  {
    id: "fight-main",
    tag: "ESTELAR INTERNACIONAL",
    title: "WESTCOL VS BLESSD",
    category: "Peso Mediano (78 KG)",
    rounds: "4 Rounds x 3 Min",
    time: "23:45 GMT-5",
    fighter1: fighters[13], // slot 14: WESTCOL
    fighter2: fighters[20], // slot 21: BLESSD
  },
  {
    id: "fight-co-main",
    tag: "DUELO DE TITANES",
    title: "REY DE LA CITY VS WEGOTKICKS",
    category: "Peso Mediano (78 KG)",
    rounds: "4 Rounds x 3 Min",
    time: "23:00 GMT-5",
    fighter1: fighters[0],  // slot 1: REY DE LA CITY
    fighter2: fighters[11], // slot 12: WEGOTKICKS
  },
  {
    id: "fight-tagteam",
    tag: "TAG TEAM • COMBATE 2 VS 2 POR EQUIPOS",
    title: "WILLITO & LONCHE VS SECRET FIGHTER & CHANTY",
    category: "Combate de Parejas (78 KG)",
    rounds: "4 Rounds x 3 Min",
    time: "22:15 GMT-5",
    fighter1: fighters[14], // slot 15: WILLITO
    fighter2: fighters[18], // slot 19: SECRET FIGHTER
    team1: [fighters[14], fighters[15]], // WILLITO (15) & LONCHE (16)
    team2: [fighters[18], fighters[19]], // SECRET FIGHTER (19) & CHANTY (20)
  },
  {
    id: "fight-femenino-royal",
    tag: "FATAL 4-WAY • GUERRA FEMENINA",
    title: "ALEXA TORRES & KAROLA VS YAYA & BEBA",
    category: "Fatal 4-Way Femenino (78 KG)",
    rounds: "4 Rounds x 2 Min",
    time: "21:30 GMT-5",
    fighter1: fighters[4], // slot 5: ALEXA TORRES
    fighter2: fighters[6], // slot 7: YAYA
    team1: [fighters[4], fighters[5]], // ALEXA TORRES (5) & KAROLA (6)
    team2: [fighters[6], fighters[7]], // YAYA (7) & BEBA (8)
  },
  {
    id: "fight-valdiri-divaza",
    tag: "DUELO DE REINAS • PESO MEDIANO",
    title: "LA DIVAZA VS VALDIRI",
    category: "Peso Mediano (78 KG)",
    rounds: "3 Rounds x 2 Min",
    time: "20:45 GMT-5",
    fighter1: fighters[16], // slot 17: LA DIVAZA
    fighter2: fighters[17], // slot 18: VALDIRI
  },
  {
    id: "fight-valentino-emiro",
    tag: "CLÁSICO MEDIANO • PESO MEDIANO",
    title: "VALENTINO VS EMIRO",
    category: "Peso Mediano (78 KG)",
    rounds: "3 Rounds x 3 Min",
    time: "20:15 GMT-5",
    fighter1: fighters[12], // slot 13: VALENTINO
    fighter2: fighters[21], // slot 22: EMIRO
  },
  {
    id: "fight-samantha-cami",
    tag: "BATALLA DE CREADORAS • PESO MEDIANO",
    title: "SAMANTHA CORREA VS CAMI PULGARÍN",
    category: "Peso Mediano (78 KG)",
    rounds: "3 Rounds x 2 Min",
    time: "19:45 GMT-5",
    fighter1: fighters[2], // slot 3: SAMANTHA CORREA
    fighter2: fighters[9], // slot 10: CAMI PULGARÍN
  },
  {
    id: "fight-herrera-jh",
    tag: "DUELO VIRAL • PESO MEDIANO",
    title: "HERRERA VS JH DE LA CRUZ",
    category: "Peso Mediano (78 KG)",
    rounds: "3 Rounds x 3 Min",
    time: "19:15 GMT-5",
    fighter1: fighters[3], // slot 4: HERRERA
    fighter2: fighters[8], // slot 9: JH DE LA CRUZ
  },
  {
    id: "fight-agropecuario-daren",
    tag: "OPENING FIGHT • PESO MEDIANO",
    title: "EL AGROPECUARIO VS DAREN",
    category: "Peso Mediano (78 KG)",
    rounds: "3 Rounds x 3 Min",
    time: "18:45 GMT-5",
    fighter1: fighters[1],  // slot 2: EL AGROPECUARIO
    fighter2: fighters[10], // slot 11: DAREN
  }
];

export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "BLESSD",
    genre: "Reggaetón & Trap Latino",
    country: "Colombia",
    flag: "🇨🇴",
    stageTime: "Apertura Oficial • 19:30 GMT-5",
    status: "CONFIRMADO",
    hits: ["Medallo", "Mírame", "Tendencia Global"],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    bio: "El bendito de Medellín traerá toda la energía urbana para encender el coliseo antes del primer campanazo.",
    instagram: "blessd"
  },
  {
    id: "artist-2",
    name: "RYAN CASTRO",
    genre: "Reggaetón Clásico & Dancehall",
    country: "Colombia",
    flag: "🇨🇴",
    stageTime: "Intermedio Estelar • 21:45 GMT-5",
    status: "CONFIRMADO",
    hits: ["Jordan", "Mujeriego", "Quema"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    bio: "El Cantante del Ghetto pondrá a vibrar a más de 15.000 personas en vivo antes del combate co-estelar.",
    instagram: "ryancastrro"
  },
  {
    id: "artist-3",
    name: "ELADIO CARRIÓN",
    genre: "Latin Trap & Hip Hop",
    country: "Puerto Rico",
    flag: "🇵🇷",
    stageTime: "Show Estelar • 23:15 GMT-5",
    status: "SHOW ESTELAR",
    hits: ["Kemba Walker", "Bzrp Session #40", "Sauce Boy"],
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    bio: "Uno de los mayores exponentes del trap en el mundo con un set exclusivo de 30 minutos antes del combate estelar.",
    instagram: "eladiocarrion"
  },
  {
    id: "artist-4",
    name: "PIRLO 420",
    genre: "Trap Cali / Drill",
    country: "Colombia",
    flag: "🇨🇴",
    stageTime: "After-Party Oficial • 00:30 GMT-5",
    status: "CONFIRMADO",
    hits: ["Ziploc", "Cual Es Esa", "El Alquimista"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    bio: "El sonido más crudo del trap colombiano coronando la noche de celebración de los campeones.",
    instagram: "pirlo420"
  }
];
