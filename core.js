const standardLanguages = [
  // "Common",All characters get common
  "Dwarvish",
  "Elven",
  "Giant",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Orc",
];

const musicalInstrumentsInfo = [
  { name: "Bagpipes", cost: "30 gp", weight: "6 lb." },
  { name: "Drum", cost: "6 gp", weight: "3 lb." },
  { name: "Dulcimer", cost: "25 gp", weight: "10 lb." },
  { name: "Flute", cost: "2 gp", weight: "1 lb." },
  { name: "Lute", cost: "35 gp", weight: "2 lb." },
  { name: "Lyre", cost: "30 gp", weight: "2 lb." },
  { name: "Horn", cost: "3 gp", weight: "2 lb." },
  { name: "Pan Flute", cost: "12 gp", weight: "2 lb." },
  { name: "Shawm", cost: "2 gp", weight: "1 lb." },
  { name: "Viol", cost: "30 gp", weight: "1 lb" },
];

const musicalInstruments = [
  { name: "Bagpipes" },
  { name: "Drum" },
  { name: "Dulcimer" },
  { name: "Flute" },
  { name: "Lute" },
  { name: "Lyre" },
  { name: "Horn" },
  { name: "Pan Flute" },
  { name: "Shawm" },
  { name: "Viol" },
];

const equipmentPacks = [
  {
    name: "Burglar's Pack",
    cost: "16 gp",
    description:
      "Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
  },
  {
    name: "Diplomat's Pack",
    cost: "39 gp",
    description:
      "Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.",
  },

  {
    name: "Dungeoneer's Pack",
    cost: "12 gp",
    description:
      "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
  },

  {
    name: "Entertainer's Pack",
    cost: "40 gp",
    description:
      "Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.",
  },
  {
    name: "Explorer's Pack",
    cost: "10 gp",
    description:
      "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
  },
  {
    name: "Priest's Pack",
    cost: "19 gp",
    description:
      "Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.",
  },
  {
    name: "Scholar's Pack",
    cost: "40 gp",
    description:
      "Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.",
  },
];

const personality = [
  "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
  "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
  "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
  "Nothing can shake my optimistic attitude.",
  "I quote (or misquote) sacred texts and proverbs in almost every situation.",
  "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
  "I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
  "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.",
];

const ideal = [
  "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
  "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
  "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
  "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
  "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
  "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings.",
];

const bond = [
  "I would die to recover an ancient relic of my faith that was lost long ago.",
  "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
  "I owe my life to the priest who took me in when my parents died.",
  "Everything I do is for the common people.",
  "I will do anything to protect the temple where I served.",
  "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy",
];

const flaw = [
  "I judge others harshly, and myself even more severely.",
  "I put too much trust in those who wield power within my temple’s hierarchy.",
  "My piety sometimes leads me to blindly trust those that profess faith in my god.",
  "I am inflexible in my thinking.",
  "I am suspicious of strangers and expect the worst of them.",
  "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
];

function returnRandomPersonality() {
  personalityTraits = {
    personality: returnRandomArrayItem(personality),
    ideal: returnRandomArrayItem(ideal),
    bond: returnRandomArrayItem(bond),
    flaw: returnRandomArrayItem(flaw),
  };

  return personalityTraits;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(collection) {
  index = getRandomNumber(0, collection.length - 1);
  return collection[index];
}

generalDescriptions = [
  "able",
  "abnormal",
  "absent-minded",
  "above average",
  "adventurous",
  "affectionate",
  "agile",
  "agreeable",
  "alert",
  "amazing",
  "ambitious",
  "amiable",
  "amusing",
  "analytical",
  "angelic",
  "apathetic",
  "apprehensive",
  "ardent",
  "artificial",
  "artistic",
  "assertive",
  "attentive",
  "average",
  "awesome",
  "awful",
  "balanced",
  "beautiful",
  "below average",
  "beneficent",
  "blue",
  "blunt",
  "boisterous",
  "brave",
  "bright",
  "brilliant",
  "buff",
  "callous",
  "candid",
  "cantankerous",
  "capable",
  "careful",
  "careless",
  "caustic",
  "cautious",
  "charming",
  "childish",
  "childlike",
  "cheerful",
  "chic",
  "churlish",
  "circumspect",
  "civil",
  "clean",
  "clever",
  "clumsy",
  "coherent",
  "cold",
  "competent",
  "composed",
  "conceited",
  "condescending",
  "confident",
  "confused",
  "conscientious",
  "considerate",
  "content",
  "cool",
  "cool-headed",
  "cooperative",
  "cordial",
  "courageous",
  "cowardly",
  "crabby",
  "crafty",
  "cranky",
  "crass",
  "critical",
  "cruel",
  "curious",
  "cynical",
  "dainty",
  "decisive",
  "deep",
  "deferential",
  "deft",
  "delicate",
  "demonic",
  "dependent",
  "delightful",
  "demure",
  "depressed",
  "devoted",
  "dextrous",
  "diligent",
  "direct",
  "dirty",
  "disagreeable",
  "discerning",
  "discreet",
  "disruptive",
  "distant",
  "distraught",
  "distrustful",
  "dowdy",
  "dramatic",
  "dreary",
  "drowsy",
  "drugged",
  "drunk",
  "dull",
  "dutiful",
  "eager",
  "earnest",
  "easy-going",
  "efficient",
  "egotistical",
  "elfin",
  "emotional",
  "energetic",
  "enterprising",
  "enthusiastic",
  "evasive",
  "even-tempered",
  "exacting",
  "excellent",
  "excitable",
  "experienced",
  "fabulous",
  "fastidious",
  "ferocious",
  "fervent",
  "fiery",
  "flabby",
  "flaky",
  "flashy",
  "frank",
  "friendly",
  "funny",
  "fussy",
  "generous",
  "gentle",
  "gloomy",
  "glutinous",
  "good",
  "grave",
  "great",
  "groggy",
  "grouchy",
  "guarded",
  "hateful",
  "hearty",
  "helpful",
  "hesitant",
  "hot-headed",
  "hypercritical",
  "hysterical",
  "idiotic",
  "idle",
  "illogical",
  "imaginative",
  "immature",
  "immodest",
  "impatient",
  "imperturbable",
  "impetuous",
  "impractical",
  "impressionable",
  "impressive",
  "impulsive",
  "inactive",
  "incisive",
  "incompetent",
  "inconsiderate",
  "inconsistent",
  "independent",
  "indiscreet",
  "indolent",
  "indefatigable",
  "industrious",
  "inexperienced",
  "insensitive",
  "inspiring",
  "intelligent",
  "interesting",
  "intolerant",
  "inventive",
  "irascible",
  "irritable",
  "irritating",
  "jocular",
  "jovial",
  "joyous",
  "judgmental",
  "keen",
  "kind",
  "lame",
  "lazy",
  "lean",
  "leery",
  "lethargic",
  "level-headed",
  "listless",
  "lithe",
  "lively",
  "local",
  "logical",
  "long-winded",
  "lovable",
  "love-lorn",
  "lovely",
  "maternal",
  "mature",
  "mean",
  "meddlesome",
  "mercurial",
  "methodical",
  "meticulous",
  "mild",
  "miserable",
  "modest",
  "moronic",
  "morose",
  "motivated",
  "musical",
  "naive",
  "nasty",
  "natural",
  "naughty",
  "negative",
  "nervous",
  "noisy",
  "normal",
  "nosy",
  "numb",
  "obliging",
  "obnoxious",
  "old-fashioned",
  "one-sided",
  "orderly",
  "ostentatious",
  "outgoing",
  "outspoken",
  "passionate",
  "passive",
  "paternal",
  "paternalistic",
  "patient",
  "peaceful",
  "peevish",
  "pensive",
  "persevering",
  "persnickety",
  "petulant",
  "picky",
  "plain",
  "plain-speaking",
  "playful",
  "pleasant",
  "plucky",
  "polite",
  "popular",
  "positive",
  "powerful",
  "practical",
  "prejudiced",
  "pretty",
  "proficient",
  "proud",
  "provocative",
  "prudent",
  "punctual",
  "quarrelsome",
  "querulous",
  "quick",
  "quick-tempered",
  "quiet",
  "realistic",
  "reassuring",
  "reclusive",
  "reliable",
  "reluctant",
  "resentful",
  "reserved",
  "resigned",
  "resourceful",
  "respected",
  "respectful",
  "responsible",
  "restless",
  "revered",
  "ridiculous",
  "sad",
  "sassy",
  "saucy",
  "sedate",
  "self-assured",
  "selfish",
  "sensible",
  "sensitive",
  "sentimental",
  "serene",
  "serious",
  "sharp",
  "short-tempered",
  "shrewd",
  "shy",
  "silly",
  "sincere",
  "sleepy",
  "slight",
  "sloppy",
  "slothful",
  "slovenly",
  "slow",
  "smart",
  "snazzy",
  "sneering",
  "snobby",
  "somber",
  "sober",
  "sophisticated",
  "soulful",
  "soulless",
  "sour",
  "spirited",
  "spiteful",
  "stable",
  "staid",
  "steady",
  "stern",
  "stoic",
  "striking",
  "strong",
  "stupid",
  "sturdy",
  "subtle",
  "sullen",
  "sulky",
  "supercilious",
  "superficial",
  "surly",
  "suspicious",
  "sweet",
  "tactful",
  "tactless",
  "talented",
  "testy",
  "thinking",
  "thoughtful",
  "thoughtless",
  "timid",
  "tired",
  "tolerant",
  "touchy",
  "tranquil",
  "ugly",
  "unaffected",
  "unbalanced",
  "uncertain",
  "uncooperative",
  "undependable",
  "unemotional",
  "unfriendly",
  "unguarded",
  "unhelpful",
  "unimaginative",
  "unmotivated",
  "unpleasant",
  "unpopular",
  "unreliable",
  "unsophisticated",
  "unstable",
  "unsure",
  "unthinking",
  "unwilling",
  "venal",
  "versatile",
  "vigilant",
  "warm",
  "warmhearted",
  "wary",
  "watchful",
  "weak",
  "well-behaved",
  "well-developed",
  "well-intentioned",
  "well-respected",
  "well-rounded",
  "willing",
  "wonderful",
  "volcanic",
  "vulnerable",
  "zealous",
];

const colours = [
  "White",
  "Yellow",
  "Blue",
  "Red",
  "Green",
  "Black",
  "Brown",
  "Azure",
  "Ivory",
  "Teal",
  "Silver",
  "Purple",
  "Navy blue",
  "Pea green",
  "Gray",
  "Orange",
  "Maroon",
  "Charcoal",
  "Aquamarine",
  "Coral",
  "Fuchsia",
  "Wheat",
  "Lime",
  "Crimson",
  "Khaki",
  "Hot pink",
  "Magenta",
  "Olden",
  "Plum",
  "Olive",
  "Cyan",
];

const hairLengths = [
  "ear length",
  "chin length",
  "neck length",
  "shoulder length",
  "collarbone length",
  "armpit length",
  "mid-back length",
  "hip length",
  "tailbone length",
  "mid thigh length",
  "knee length",
  "calf length",
  "ankle length",
];

const hairStyles = [
  "Afro",
  "Asymmetric cut",
  "Beehive",
  "Bangs",
  "Bob cut",
  "Bouffant",
  "Bowl cut",
  "Braid",
  "Bun",
  "Bunches",
  "Butch cut",
  "Buzz cut",
  "Comb over",
  "Double buns",
  "Dreadlocks",
  "French braid",
  "Ponytail",
  "Rattail",
  "top Knot",
  "undercut",
];

const facialHair = [
  "Beard",
  "Chinstrap",
  "Goatee",
  "Soul patch",
  "Van Dyke",
  "moustache",
  "Fu Manchu Moustache",
  "handlebar Moustache",
  "horseshoe Moustache",
  "pencil Moustache",
  "toothbrush Moustache",
  "walrus Moustache",
  "Designer stubble",
  "Sideburns",
];

const generalSizes = ["tiny", "small", "medium", "large", "huge"];

const sizeAdjectives = [
  "baby",
  "illimitable",
  "scrawny",
  "beefy",
  "immeasurable",
  "short",
  "big",
  "immense",
  "sizable",
  "bony",
  "infinitesimal",
  "skeletal",
  "boundless",
  "lanky",
  "skimpy",
  "brawny",
  "large",
  "skinny",
  "broad",
  "lean",
  "slender",
  "bulky",
  "life-size",
  "slim",
  "chunky",
  "limitless",
  "small",
  "colossal",
  "little",
  "squat",
  "compact",
  "mammoth",
  "stocky",
  "corpulent",
  "massive",
  "stout",
  "cosmic",
  "meager",
  "strapping",
  "cubby",
  "measly",
  "sturdy",
  "curvy",
  "microscopic",
  "tall",
  "elfin",
  "mini",
  "teensy",
  "emaciated",
  "miniature",
  "teeny",
  "endless",
  "minuscule",
  "teeny-tiny",
  "enormous",
  "minute",
  "teeny-weeny",
  "epic",
  "narrow",
  "thick",
  "expansive",
  "obese",
  "thickset",
  "extensive",
  "outsized",
  "thin",
  "fat",
  "oversize",
  "tiny",
  "fleshy",
  "overweight",
  "titanic",
  "full-size",
  "paltry",
  "towering",
  "gargantuan",
  "petite",
  "trifling",
  "gaunt",
  "pint-size",
  "trim",
  "giant",
  "plump",
  "tubby",
  "gigantic",
  "pocket-size",
  "undersized",
  "grand",
  "portly",
  "underweight",
  "great",
  "pudgy",
  "unlimited",
  "heavy",
  "puny",
  "vast",
  "hefty",
  "rotund",
  "wee",
  "huge",
  "scanty",
  "whopping",
  "hulking",
  "scraggy",
  "wide",
];

const occupation = [
  "Actor",
  "Lawyer",
  "Alchemist",
  "Animal Handler",
  "Apothecary",
  "Architect",
  "Archer",
  "Archivist",
  "Aristocrat",
  "Armorer",
  "Artisan",
  "Artist",
  "Astrologer",
  "Baker",
  "Banker",
  "Barbarian",
  "Barber",
  "Bard",
  "Barkeep",
  "Barmaid",
  "Beekeeper",
  "Beer",
  "Seller",
  "Beggar",
  "Blacksmith",
  "Boatman",
  "Bookbinder",
  "Bookseller",
  "Brewer",
  "Bricklayer",
  "Brick Maker",
  "Brigand",
  "Brothel Keeper",
  "Buckle Maker",
  "Builder",
  "Butcher",
  "Caravan Leader",
  "Carpenter",
  "Cartographer",
  "Chandler",
  "Charioteer",
  "Chatelaine",
  "Chef",
  "Chieftain",
  "Chirurgeon",
  "Clergyman",
  "Clerk",
  "Clock Maker",
  "Clothworker",
  "Cobbler",
  "Commander",
  "Concubine",
  "Cook",
  "Cooper",
  "Copyist",
  "Costermonger",
  "Counselor",
  "Courtesan",
  "Courtier",
  "Cowherd",
  "Crossbowman",
  "Cutler",
  "Daimyo",
  "Dairymaid",
  "Dancer",
  "Diplomat",
  "Distiller",
  "Diver",
  "Diviner",
  "Doctor",
  "Domestic Servant",
  "Eunuch",
  "Explorer",
  "Farmer",
  "Fighter",
  "Fisherman",
  "Fishmonger",
  "Footman",
  "Furrier",
  "Galley Slave",
  "Gardener",
  "Geisha",
  "General",
  "Gladiator",
  "Glovemaker",
  "Goldsmith",
  "Grocer",
  "Groom",
  "Guardsman",
  "Guildmaster",
  "Harness maker",
  "Hatmaker",
  "Hay merchant",
  "Healer",
  "Herald",
  "Herbalist",
  "Herder",
  "Hermit",
  "Highwayman",
  "Historian",
  "Housemaid",
  "Hunter",
  "Illuminator",
  "Infantryman",
  "Innkeeper",
  "Interpreter",
  "Inventor",
  "Jailer",
  "Jester",
  "Jeweler",
  "Jongleur",
  "Judge",
  "Kitchen drudge",
  "Knight",
  "Laborer",
  "Lady	Lady in Waiting",
  "Leatherworker",
  "Librarian",
  "Linguist",
  "Locksmith",
  "Longbowman",
  "Longshoreman",
  "Maidservant",
  "Man at Arms",
  "Mason",
  "Masseur",
  "Mayor",
  "Mercer",
  "Merchant",
  "Messenger",
  "Midwife",
  "Miller",
  "Miner",
  "Minister",
  "Minstrel",
  "Monk",
  "Mortician",
  "Mourner",
  "Musician",
  "Necromancer",
  "Noble",
  "Nun",
  "Nurse",
  "Old-clothes seller",
  "Page",
  "Painter",
  "Pariah",
  "Pastry cook",
  "Peasant",
  "Perfumer",
  "Philosopher",
  "Physician",
  "Pigkeeper",
  "Pilgrim",
  "Pirate",
  "Plasterer",
  "Potter",
  "Priestess",
  "Princess",
  "Privateer",
  "Professor",
  "Prostitute",
  "Pursemaker",
  "Queen",
  "Ranger",
  "Ratcatcher",
  "Reeve",
  "Ronin",
  "Roofer",
  "Ropemaker",
  "Royal",
  "Adviser",
  "Rugmaker",
  "Ruler",
  "Saddler",
  "Sailor",
  "Samurai",
  "Scabbard maker",
  "Sculptor",
  "Scavenger",
  "Scholar",
  "Scrivener",
  "Seamstress",
  "Servant",
  "Shaman",
  "Shepherd",
  "Ship's captain",
  "Shoemaker",
  "Silversmith",
  "Slave",
  "Slaver",
  "Smith",
  "Soldier",
  "Sorcerer",
  "Sorceress",
  "Spice Merchant",
  "Squire",
  "Stablehand",
  "Stevedore",
  "Stonemason",
  "Storyteller",
  "Steward",
  "Street kid",
  "Street seller",
  "Street sweeper",
  "Student",
  "Surgeon",
  "Surveyor",
  "Swordsman",
  "Sycophant",
  "Tailor",
  "Tanner",
  "Tavernkeeper",
  "Tax collector",
  "Teacher",
  "Teamster",
  "Thatcher",
  "Thief",
  "Tinker",
  "Torturer",
  "Town crier",
  "Toymaker",
  "Trapper",
  "Vendor",
  "Vermin catcher",
  "Veterinarian",
  "Village chief",
  "Vintner",
  "Viking",
  "Warlock",
  "Warrior",
  "Water carrier",
  "Weaver",
  "Wetnurse",
  "Wine seller",
  "Witch",
  "Wizard",
  "Woodcarver",
  "Woodcutter",
  "Wood seller",
  "Wrestler",
  "Writer",
];

const bodyParts = [
  "ankle",
  "arm",
  "back",
  "belly",
  "bottom",
  "breast",
  "buttocks",
  "calf",
  "cheek",
  "chin",
  "ear",
  "elbow",
  "eye",
  "eyebrow",
  "eyelash",
  "finger",
  "fist",
  "foot",
  "forearm",
  "forehead",
  "hair",
  "hand",
  "head",
  "hip",
  "knee",
  "leg",
  "lip",
  "lower leg",
  "mouth",
  "neck",
  "nose",
  "nostril",
  "shoulder",
  "thigh",
  "thumb",
  "toe",
  "tongue",
  "tooth",
  "upper arm",
  "waist",
  "wrist",
];

const clothes = [
  "baby grow",
  "ball gown",
  "belt",
  "bikini",
  "blazer",
  "blouse",
  "boots",
  "bow tie",
  "boxers",
  "bra",
  "bra & knicker set",
  "briefs",
  "camisole",
  "cap",
  "cardigan",
  "cargos",
  "catsuit",
  "chemise",
  "coat",
  "corset",
  "cravat",
  "cufflinks",
  "cummerbund",
  "dinner jacket",
  "dress",
  "dressing gown",
  "dungarees",
  "fleece",
  "gloves",
  "hat",
  "hoody",
  "jacket",
  "jeans",
  "jogging suit",
  "jumper",
  "kaftan",
  "kilt",
  "knickers",
  "kurta",
  "lingerie",
  "nightgown",
  "nightwear",
  "pants",
  "pashmina",
  "polo shirt",
  "poncho",
  "pyjamas",
  "raincoat",
  "robe",
  "romper",
  "sandals",
  "sarong",
  "scarf",
  "shawl",
  "shellsuit",
  "shirt",
  "shoes",
  "shorts",
  "skirt",
  "slacks",
  "slippers",
  "socks",
  "stockings",
  "suit",
  "sunglasses",
  "sweater",
  "sweatshirt",
  "swimming costume",
  "swimming shorts",
  "swimming trunks",
  "swimwear",
  "t-shirt",
  "tailcoat",
  "tankini",
  "thong",
  "tie",
  "tights",
  "top",
  "tracksuit",
  "trainers",
  "trousers",
  "underclothes",
  "underpants",
  "undershirt",
  "underwear",
  "vest",
  "vest underwear",
  "waistcoat",
  "waterproof",
  "zip",
];

function PhysicalAttributes() {
  let attributes = {};

  attributes.hairColour = getRandomItem(colours);
  attributes.hairLength = getRandomItem(hairLengths);
  attributes.hairStyle = getRandomItem(hairStyles);
  attributes.eyeColour = getRandomItem(colours);
  attributes.facialHair = getRandomItem(facialHair);
  attributes.facialHairColour = getRandomItem(colours);
  attributes.eyeSize = getRandomItem(generalSizes);
  attributes.skinColour = getRandomItem(colours);
  attributes.armLength = getRandomItem(generalSizes);
  attributes.legLength = getRandomItem(generalSizes);
  attributes.facialExpression = getRandomItem(generalDescriptions);
  attributes.dreamOccupation = getRandomItem(occupation);
  attributes.favoriteItem = `${getRandomItem(colours)} ${getRandomItem(
    clothes
  )}`;

  return attributes;
}

// function physicalDescription() {
//   let description = `

//     ${this.fullname.firstName} is a ${getRandomItem(generalSizes)} ${
//     this.gender
//   } ${this.attributes.skinColour} skinned ${race}. Their ${
//     x.hairColour
//   } coloured hair is styled in a ${x.hairLength} ${x.hairStyle}. They have ${
//     x.eyeSize
//   } ${
//     x.eyeColour
//   } coloured eyes that betray no thoughts. they have a ${getRandomItem(
//     generalSizes
//   )} ${x.facialHairColour} ${x.facialHair} that fits their ${
//     x.facialExpression
//   } facial expression well. they never leave home without their ${
//     x.favoriteItem
//   } and dream of one day becoming a ${x.dreamOccupation}`;
//   return description;
// }

allFeats = [
  (grappler = {
    name: "grappler",
    statRequirement: ["str", 13],
    armorProficiencyRequirement: [],
    weaponProficiencyRequirement: [],
    raceRequirement: [],
    discription:
      "You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:" +
      " You have advantage on attack rolls against a creature you are grappling." +
      " You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and" +
      " the creature are both restrained until the grapple ends.",
    statIncrease: [],
    proficiencyBonus: [],
    bonusLanguage: [],
  }),
  (actor = {
    name: "actor",
    statRequirement: [],
    armorProficiencyRequirement: [],
    weaponProficiencyRequirement: [],
    raceRequirement: [],
    discription:
      "Skilled at mimicry and dramatics, you gain the following benefits:" +
      " Increase your Charisma score by 1, to a maximum of 20." +
      " You have an advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person." +
      " You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the" +
      " creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows" +
      " a listener to determine that the effect is faked.",
    statIncrease: ["cha", 1],
    proficiencyBonus: [],
    bonusLanguage: [],
  }),

  // heavilyArmored = {name:"heavily armored",
  //             statRequirement:[],
  //             armorProficiencyRequirement:["medium armor"],
  //             weaponProficiencyRequirement:[],
  //             raceRequirement:[],
  //             discription:"You have trained to master the use of heavy armor, gaining the following benefits:"+
  //                         " Increase your Strength score by 1, to a maximum of 20."+
  //                         " You gain proficiency with heavy armor.",
  //             statIncrease:["str",1],
  //             proficiencyBonus:["heavy armor"],
  //             bonusLanguage:[]
  //           }
];

function returnRandomFeat() {
  return returnRandomArrayItem(allFeats);
}

/////////////* DRAGONBORN */////////////

// FEMALE
const femaleDragonbornNames = [
  "Kathyra",
  "Aririth",
  "Welsidalynn",
  "Orikaryn",
  "Ocys",
  "Lilorinn",
  "Belwyn",
  "Kothibra",
  "Hinvyre",
  "Ariqorel",
  "Ophiriel",
  "Irlyfyire",
  "Vyraxora",
  "Qiwyn",
  "Someila",
  "Valxiris",
  "Wravyre",
  "Thapora",
  "Jocys",
  "Fenyassa",
  "Mirina",
  "Dafaeth",
  "Malqwen",
  "Quilliann",
  "Irlythyra",
  "Yrdalynn",
  "Jowyn",
  "Kahime",
  "Nyszys",
  "Yazita",
  "Wrawophyl",
  "Micoria",
  "Erlibith",
  "Therlarys",
  "Quilvyre",
  "Xyliann",
  "Perrinn",
  "Faesira",
  "Gurrinn",
  "Navyre",
  "Nyswophyl",
  "Ophigil",
  "Qirith",
  "Grixora",
  "Beldrish",
  "Zoffaeth",
  "Yrfyire",
  "Iriegil",
  "Nayassa",
  "Raivyre",
  "Gurdrith",
  "Nysthyra",
  "Sogwen",
  "Ophihymm",
  "Arisira",
  "Hinkira",
  "Fensira",
  "Gurlyassa",
  "Zofhime",
  "Welsilyassa",
];

// MALE
const maleDragonbornNames = [
  "Narvull",
  "Urobroth",
  "Qelziros",
  "Caerbarum",
  "Wurakas",
  "Lorxan",
  "Erasashi",
  "Narwunax",
  "Prikax",
  "Yorhadur",
  "Sahazar",
  "Totrin",
  "Yorqrin",
  "Hiciar",
  "Morprax",
  "Brendaar",
  "Calusashi",
  "Hiturim",
  "Medqrin",
  "Prirash",
  "Sulkul",
  "Dofarn",
  "Ghelin",
  "Lorhadur",
  "Lumilin",
  "Babor",
  "Worqrin",
  "Jardorim",
  "Ghejhan",
  "Wulythas",
  "Jarziros",
  "Wuskan",
  "Tobor",
  "Frowarum",
  "Calurinn",
  "Mednaar",
  "Iornaar",
  "Tosashi",
  "Wraskan",
  "Saxiros",
  "Zrazavur",
  "Worvarax",
  "Faerciar",
  "Aligar",
  "Pajurn",
  "Donaar",
  "Yorxan",
  "Uronaar",
  "Otihazar",
  "Kilziros",
  "Durwunax",
  "Gorabarum",
  "Rhohadur",
  "Brenciar",
  "Jarhazar",
  "Vorbroth",
  "Durzire",
  "Qelrash",
  "Orlaseth",
  "Faerbarum",
];

// SURNAME
const dragonbornSurnames = [
  "Clenxec",
  "Aldexish",
  "Criracnellas",
  "Driccankear",
  "Luthtan",
  "Onkuak",
  "Yerthikal",
  "Amtundiath",
  "Valthialirran",
  "Cuuldracnin",
  "Machid",
  "Clurdolith",
  "Ualmes",
  "Giltedergeth",
  "Myirak",
  "Kancaled",
  "Liankenthirgac",
  "Cimtoc",
  "Uumpajic",
  "Nurdesadaan",
  "Krerjac",
  "Myeaphotid",
  "Tampan",
  "Muathtaakosh",
  "Myelriastandon",
  "Nupeth",
  "Droconshtejuul",
  "Myemrindaluc",
  "Yimrac",
  "Dremrinshtac",
  "Yempinshtanduc",
  "Meaxus",
  "Yalthokomes",
  "Estun",
  "Clemmesh",
  "Keltocnojesh",
  "Iancaduullan",
  "Culdocnad",
  "Nistinkardaad",
  "Cimphonshtijel",
  "Uldrush",
  "Empokmis",
  "Deldaac",
  "Yimbaankijiath",
  "Yamphakmudias",
  "Krestinthirith",
  "Nyistar",
  "Varicnurrin",
  "Clulxianshteth",
  "Caldacollil",
  "Meccic",
  "Kammesh",
  "Altiastan",
  "Sharjeler",
  "Empon",
  "Nyulkendrarguash",
  "Clonkucnan",
  "Kelmores",
  "Myecek",
  "Apitiris",
];

/////////////* DWARF */////////////

// FEMALE
const femaleDwarfNames = [
  "Amber",
  "Artin",
  "Audhild",
  "Dagnal",
  "Eldeth",
  "Finellen",
  "Gunndola",
  "Gurdis",
  "Helja",
  "Kathra",
  "Ilde",
  "Kristryd",
  "Mardred",
  "Riswynn",
  "Torbera",
  "Vistra",
  "Sylveria",
  "Gronti",
];

// MALE
const maleDwarfNames = [
  "Nordak",
  "Olunt",
  "Kildrak",
  "Duergraf",
  "Adrik",
  "Baern",
  "Brottor",
  "Bruenor",
  "Fargrim",
  "Harberk",
  "Doran",
  "Travok",
  "Orsik",
  "Flint",
  "Rurik",
  "Thorin",
  "Ulfgar",
  "Vondal",
];

// SURNAME
const dwarfSurnames = [
  "Balderk",
  "Battlehammer",
  "Brawnanvil",
  "Dankil",
  "Fireforge",
  "Frostbeard",
  "Gorunn",
  "Ironfist",
  "Loderr",
  "Lutgehr",
  "Rumnaheim",
  "Torunn",
  "Ungart",
];

/////////////* ELF */////////////

// FEMALE
const femaleElfNames = [
  "Arara",
  "Amastrianna",
  "Antinua",
  "Birel",
  "Caelynn",
  "Chaedi",
  "Dara",
  "Drusilia",
  "Elama",
  "Enna",
  "Hatae",
  "Lelenia",
  "Keyleth",
  "Feyrre",
  "Melthrissa",
  "Aryana",
];

// MALE
const maleElfNames = [
  "Adran",
  "Aramil",
  "Austrin",
  "Erevan",
  "Fivin",
  "Galinndan",
  "Gennal",
  "Halimath",
  "Hiimo",
  "Immeral",
  "Korfel",
  "Lamlis",
  "Quarion",
  "Rolen",
  "Theren",
  "Theriatis",
  "Uthemar",
  "Tezoth",
  "Kaelthrimar",
  "Ardyn",
];

// SURNAME
const elfSurnames = [
  "Amakiir",
  "Caerdnel",
  "Casilltenirra",
  "Cithreth",
  "Mystralath",
  "Ofandrus",
  "Ostoroth",
  "Othronus",
  "Qualianthri",
  "Sylvaranth",
  "Raethran",
  "Liadon",
  "Lathalas",
  "Brightmoon",
  "Stargazer",
  "Moonbright",
  "Featherfall",
];

/////////////* GNOME */////////////

// FEMALE
const femaleGnomeNames = [
  "Vock",
  "Huck",
  "Zuth",
  "Nus",
  "Haxis",
  "Rulbush",
  "Ikzuth",
  "Utrothraim",
  "Zosuffosh",
  "Sensannailzish",
  "Camila",
  "Sorally",
  "Jessabolt",
  "Lolena",
  "Audgit",
  "Tinalyn",
  "Lizadette",
  "Lanalie",
  "Stelby",
  "Minaline",
  "Norizzle",
  "Linalie",
  "Lisabink",
  "Ponny",
  "Bensy",
  "Teritink",
  "Sorakka",
  "Kaliffle",
  "Sharabolt",
  "Trimble",
  "Kiffle",
  "Lisaline",
  "Merilie",
  "Camilyn",
  "Stefty",
  "Sharadette",
  "Naralie",
  "Kelbi",
  "Linanora",
  "Sandi",
  "Torimsy",
  "Marakka",
  "Steckle",
  "Emmabol",
  "Kessabeth",
  "Maribink",
];

// MALE
const maleGnomeNames = [
  "Trutt",
  "Zod",
  "Cant",
  "Vriucdien",
  "Shmuakqa",
  "Puthatt",
  "Ivit",
  "Gobritan",
  "Kokruakrast",
  "Rarickembitt",
  "Bolbert",
  "Maxim",
  "Gifford",
  "Gracken",
  "Bongle",
  "Ampbert",
  "Monthony",
  "Filford",
  "Kilfin",
  "Zimort",
  "Gefford",
  "Gearwood",
  "Perkle",
  "Wizwood",
  "Wilridge",
  "Pefford",
  "Tekman",
  "Gexwell",
  "Ginston",
  "Kibus",
  "Nilton",
  "Mack",
  "Toshley",
  "Lugworth",
  "Meby",
  "Mimble",
  "Flickridge",
  "Tekson",
  "Monton",
  "Scrapwright",
  "Elford",
  "Zankus",
  "Bigon",
  "Zigon",
  "Wiznik",
  "Zimworth",
  "Bemford",
  "Cringor",
  "Axle",
];

// SURNAME
const gnomeSurnames = [
  "Dodlawams",
  "Hasp",
  "Epswodnith",
  "Klippiesp",
  "Qrondiornficks",
  "Ter",
  "Pedomber",
  "Bems",
  "Uplizbiss",
  "Qagnom",
  "Boomsocket",
  "Hyperbender",
  "Voltorque",
  "Wrongspring",
  "Fourslicer",
  "Macrofizz",
  "Nozzledazzle",
  "Permabink",
  "Crankslicer",
  "Gimbaljoggle",
  "Quiktorque",
  "Cognabber",
  "Quarterpistol",
  "Rumbleswitch",
  "Wobbleslam",
  "Dizzybloomers",
  "Cogbender",
  "Whindleprop",
  "Tosslegrind",
  "Blastspan",
  "Dashspackle",
  "Slickspigot",
  "Zapchrome",
  "Overspring",
  "Tottermonger",
  "Gadgetweaver",
  "Permacoil",
  "Nozzlewheel",
  "Fizzdyne",
  "Macroslam",
  "Mechabyte",
  "Plugwhizzle",
  "Boomrigger",
  "Jinxspringer",
  "Bonkweaver",
  "Overwobble",
  "Rotortinker",
];

/////////////* HALF-ELF */////////////

// FEMALE
const femaleHalfElfNames = [
  "Edecharis",
  "Narue",
  "Emfine",
  "Mylnee",
  "Jehafarrel",
  "Inmadia",
  "Magkaala",
  "Gablossa",
  "Ylllaurel",
  "Tifziar",
  "Elispisys",
  "Viclartha",
  "Lillanil",
  "Syllaena",
  "Gabsarda",
  "Aludelia",
  "Evecerys",
  "Jessirathla",
  "Esaatha",
  "Lizlessa",
  "Emelthana",
  "Jisliana",
  "Elyenlyrra",
  "Jinronyn",
  "Mahelor",
  "Aublynthi",
  "Janleth",
  "Iohletha",
  "Theflone",
  "Fhadove",
  "Johafaen",
  "Gistora",
  "Branfaen",
  "Ibkaala",
  "Phayebrae",
  "Manmia",
  "Janlantha",
  "Magrunia",
  "Saraele",
  "Hawnor",
  "Jeansalia",
  "Irolitia",
  "Branmalis",
  "Gifnaestra",
  "Giselrora",
  "Xilthyl",
  "Orhala",
  "Gonria",
  "Maalrolia",
  "Merenoa",
  "Manshee",
  "Thersianna",
  "Iselsala",
  "Brenlantha",
  "Zellica",
  "Bristine",
  "Johleth",
  "Wolluth",
  "Unabellis",
  "Johlitia",
  "Alria",
  "Gresia",
  "Lissalia",
  "Elistora",
  "Isstine",
  "Maalmara",
  "Milaerys",
  "Xilsalia",
  "Helira",
  "Orlatha",
  "Helraele",
  "Hadnastha",
  "Emdis",
  "Emsario",
  "Olluna",
  "Victhara",
  "Esmia",
  "Aubrue",
  "Elyendaerae",
  "Ariletha",
  "Imaziar",
  "Linlanis",
  "Sephnalue",
  "Resria",
  "Darzee",
  "Militora",
  "Suslaya",
  "Ismenenyphe",
  "Elmedha",
  "Elysdove",
  "Amli",
  "Selthaela",
  "Gwenenyphe",
  "Hawlatha",
  "Avelei",
  "Ivepisys",
  "Gabshara",
  "Gallee",
  "Saralila",
  "Johafine",
  "Gisellora",
  "Avrona",
  "Elyewaris",
  "Jehqwyn",
  "Norpisys",
  "Ortora",
  "Alustele",
  "Arlynthi",
  "Jenaerys",
  "Gwenlana",
];

// MALE
const maleHalfElfNames = [
  "Corrune",
  "Uldyr",
  "Iancraes",
  "Hilryn",
  "Urduin",
  "Nigemorn",
  "Eircraes",
  "Aalword",
  "Emeluin",
  "Dorlather",
  "Reyminar",
  "Clerreth",
  "Tanrel",
  "Vicnas",
  "Jerlumin",
  "Cormanas",
  "Sylzaphir",
  "Percifyr",
  "Merlanor",
  "Simdriel",
  "Dramanas",
  "Sarkath",
  "Wymlaeril",
  "Trafarin",
  "Belkath",
  "Frillathan",
  "Nikruil",
  "Engmorn",
  "Galendyl",
  "Salaphon",
  "Aroladon",
  "Rodmitar",
  "Nichdal",
  "Farfyr",
  "Ivoelor",
  "Engphar",
  "Rienas",
  "Davnik",
  "Marlas",
  "Leoqinor",
  "Balmer",
  "Tanxian",
  "Hilseith",
  "Sannor",
  "Hamfaelor",
  "Merlaer",
  "Watmanas",
  "Quosan",
  "Kevkath",
  "Hafyndar",
  "Richorn",
  "Umladon",
  "Franreak",
  "Maugmon",
  "Mikmeron",
  "Harparin",
  "Geofthor",
  "Leoluar",
  "Wilis",
  "Balluin",
  "Berbane",
  "Nigelaeril",
  "Ivofyr",
  "Gregtaor",
  "Ingelros",
  "Miklaern",
  "Gaynor",
  "Warduin",
  "Rayroth",
  "Gregmus",
  "Terred",
  "Aroduil",
  "Reymir",
  "Raftumil",
  "Launyeras",
  "Mikidon",
  "Perrauth",
  "Xavdar",
  "Nigerune",
  "Reimidon",
  "Frillaer",
  "Raftrydal",
  "Tedelor",
  "Lancedyr",
  "Alvendor",
  "Valtelar",
  "Belnalor",
  "Criscoril",
  "Conlaith",
  "Maugynor",
  "Nichmon",
  "Quoluar",
  "Fulnaith",
  "Ternan",
  "Haduil",
  "Jereqinor",
  "Orideyr",
  "Hanrym",
  "Charesin",
  "Engrel",
  "Frilfyr",
  "Oslen",
  "Rawlith",
  "Pettaor",
  "Godword",
  "Wilphanis",
  "Hemdriel",
  "Lanlaer",
  "Arqarim",
  "Radlith",
];

// SURNAME
const halfElfSurnames = [
  "Caiqirelle",
  "Wynleth",
  "Elafiel",
  "Ololana",
  "Beikalyn",
  "Elaren",
  "Sarqirelle",
  "Faekian",
  "Lianan",
  "Luralei",
  "Norlana",
  "Oloxidor",
  "Yllaquinal",
  "Magnan",
  "Aelen",
  "Zinkrana",
  "Perneiros",
  "Norharice",
  "Genrie",
  "Jowarin",
  "Panala",
  "Reyydark",
  "Mirakalyn",
  "Yessatra",
  "Iangwyn",
  "Eilxidor",
  "Miarora",
  "Wrantris",
  "Inafir",
  "Shatris",
  "Sarrel",
  "Yinydark",
  "Hermys",
  "Valris",
  "Balmenor",
  "Norhice",
  "Gilzorwyn",
  "Naenan",
  "Yelcaryn",
  "Zummaer",
  "Enphyra",
  "Xyrrie",
  "Enlamin",
  "Presjeon",
  "Balharice",
  "Yelnan",
  "Liamaer",
  "Shabella",
  "Keyxina",
  "Waesroris",
  "Dortoris",
  "Jonan",
  "Dorvyre",
  "Venrona",
  "Ianlana",
  "Elkas",
  "Vawynn",
  "Luhorn",
  "Elavalur",
  "Fapeiros",
  "Virxina",
  "Kelxidor",
  "Sylqirelle",
  "Keyro",
  "Helesandoral",
  "Faelynn",
  "Yelpetor",
  "Olorora",
  "Faewraek",
  "Waeswynn",
  "Dorpetor",
  "Quileth",
  "Pervalur",
  "Brynala",
  "Torjor",
  "Torpetor",
  "Ralowarin",
  "Urimys",
  "Mormenor",
  "Faemys",
  "Arabella",
  "Liagwyn",
  "Caiqirelle",
  "Omafina",
  "Petrieth",
  "Miawarin",
  "Carphyra",
  "Ennan",
  "Beiwenys",
  "Pamyar",
  "Iliwarin",
  "Eilthana",
  "Magkas",
  "Carthyra",
  "Phihana",
  "Carneiros",
  "Daxidor",
  "Yelkalyn",
  "Wysavaris",
  "Fadithas",
  "Cainorin",
  "Luceran",
  "Vatris",
  "Oloxidor",
  "Iliqen",
  "Wynthana",
  "Liabella",
  "Zinphine",
  "Herdan",
  "Magquinal",
  "Carralei",
  "Zumyra",
  "Farfina",
  "Fenmaris",
  "Valhice",
  "Dagwyn",
  "Wranydark",
  "Olajyre",
  "Genbella",
  "Yelxalim",
  "Preslee",
  "Zinsalor",
  "Zylran",
  "Yelzorwyn",
  "Wynlamin",
  "Inahorn",
  "Perwynn",
  "Leohorn",
  "Petkas",
  "Yllaceran",
  "Leoqirelle",
  "Wranvaris",
  "Wranroris",
  "Wysaphine",
  "Hergolor",
  "Herstina",
  "Balpeiros",
  "Yesdi",
  "Perna",
  "Venlamin",
  "Virwynn",
  "Vabanise",
  "Vanelis",
  "Holanelis",
  "Aephyra",
  "Chaegolor",
  "Olomys",
  "Urikalyn",
  "Heletoris",
  "Ianzumin",
  "Addan",
  "Persatra",
  "Naetoris",
  "Keymoira",
  "Keabanise",
  "Genran",
  "Eilyarus",
  "Krisbella",
  "Yllasys",
  "Oladan",
  "Chaemenor",
  "Heisatra",
  "Yinrie",
  "Keakian",
  "Iarnan",
  "Nerirona",
  "Yelleth",
  "Miawynn",
  "Lorahice",
  "Ilibalar",
  "Leovaris",
  "Olozeiros",
  "Shatoris",
  "Gretumal",
  "Therie",
  "Nerinan",
  "Iligolor",
  "Bihana",
  "Trisfiel",
  "Zumlee",
  "Vara",
  "Qican",
  "Fasalor",
  "Glynrie",
  "Cravaris",
  "Lucan",
  "Torfina",
  "Yellar",
  "Wranlee",
  "Gilbella",
  "Glyngeiros",
  "Phicyne",
  "Umeleth",
  "Reylen",
  "Elavaris",
  "Bryren",
  "Fenbanise",
  "Zylvaris",
  "Umethana",
  "Nerinala",
  "Gilcan",
  "Faesys",
  "Keadithas",
  "Presran",
  "Leothana",
  "Preslamin",
  "Trazeiros",
  "Perxidor",
  "Keazumin",
  "Balpetor",
];

/////////////* HALF-ORC */////////////

// FEMALE
const femaleHalfOrcNames = [
  "Ruogra",
  "Zoca",
  "Geltah",
  "Rzuotto",
  "Vuhguo",
  "Kahro",
  "Rahgai",
  "Nulnaith",
  "Mimriblai",
  "Shunloto",
  "Ihenna",
  "Inifayt",
  "Kiska",
  "Megum",
  "Merifra",
  "Qezza",
  "Synas",
  "Tabba",
  "Talsa",
  "Tamert",
  "Flyana",
  "Gella",
  "Ghenna",
  "Ghisa",
  "Hedduga",
  "Hemta",
  "Henza",
  "Heznani",
  "Kanga",
  "Madmuna",
  "Melguma",
  "Mimasa",
  "Thasila",
  "Thazi",
  "Thizifa",
  "Thudja",
  "Tinsa",
  "Tlahra",
  "Uzifsula",
  "Zahoua",
];

// MALE
const maleHalfOrcNames = [
  "Gul",
  "Hrod",
  "Doch",
  "Purg",
  "Cer",
  "Patrul",
  "Zogdak",
  "Grubrol",
  "Crodhesk",
  "Botregrach",
  "Muaq",
  "Munaniq",
  "Naghi",
  "Oomos",
  "Patis",
  "Pianhol",
  "Taka",
  "Tuda",
  "Tukil",
  "Uirpok",
  "Arga",
  "Atalcas",
  "Atran",
  "Azous",
  "Badjena",
  "Beviki",
  "Bubul",
  "Crat",
  "Curriak",
  "Fild",
  "Ghan",
  "Glakpig",
  "Batsi",
  "Bekku",
  "Berin",
  "Derfor",
  "Elgal",
  "Gherzur",
];

// SURNAME
const halfOrcSurnames = [
  "Gud",
  "Orkuv",
  "Bon",
  "Cirelkev",
  "Kuk",
  "Atrix",
  "Jex",
  "Cumkix",
  "Wev",
  "Gnighadir",
  "Nubstar",
  "Thuld",
  "Rolm",
  "Shongalm",
  "Jer",
  "Shumke",
  "Matkaz",
  "Zar",
  "Vold",
  "Wughaz",
  "Gnev",
  "Gum",
  "Uvige",
  "Sarkid",
  "Noshky",
  "Vaz",
  "Theshky",
  "Raz",
  "Ilgro",
  "Kiresvro",
  "Thergo",
  "Bir",
  "Hunkur",
  "Tuloz",
  "Mashky",
  "Elraglok",
  "Zongi",
];

/////////////* HALFLING */////////////

// FEMALE
const femaleHalflingNames = [
  "Suseh",
  "Tavot",
  "Sira",
  "Wufo",
  "Wero",
  "Biolkalcul",
  "Fozulma",
  "Tulnurrath",
  "Vassezi",
  "Retiato",
  "Andry",
  "Bree",
  "Callie",
  "Cora",
  "Euphemia",
  "Jillian",
  "Kithri",
  "Lavinia",
  "Lidda",
  "Merla",
  "Nedda",
  "Paela",
  "Portia",
  "Seraphina",
  "Shaena",
  "Trym",
  "Vani",
  "Verna",
];

// MALE
const maleHalflingNames = [
  "Lal",
  "Dar",
  "Dord",
  "Ximoth",
  "Morrith",
  "Vruraard",
  "Turind",
  "Trasgaantard",
  "Hedirrorn",
  "Sarromrir",
  "Alton",
  "Ander",
  "Cade",
  "Corrin",
  "Eldon",
  "Errich",
  "Finnan",
  "Garret",
  "Lindal",
  "Lyle",
  "Merric",
  "Milo",
  "Osborn",
  "Perrin",
  "Reed",
  "Roscoe",
  "Wellby",
];

// SURNAME
const halflingSurnames = [
  "Featherheart",
  "Hogrirg",
  "Darkhelm",
  "Gnidliasrerd",
  "Softbranch",
  "Esiath",
  "Winterforce",
  "Kavu",
  "Humbleward",
  "Gliseanver",
  "Brushgather",
  "Goodbarrel",
  "Greenbottle",
  "High-hill",
  "Hilltopple",
  "Leagallow",
  "Tealeaf",
  "Thorngage",
  "Tosscobble",
  "Underbough",
];

/////////////* HUMAN */////////////

// FEMALE
const femaleHumanNames = [
  "Kum",
  "Miranda",
  "Sherrell",
  "Tyra",
  "Delma",
  "Eula",
  "Belkis",
  "Jennette",
  "Raelene",
  "Torrie",
  "Tressa",
  "Blanca",
  "Jerlene",
  "Jin",
  "Misti",
  "Sabra",
  "Anamaria",
  "Odilia",
  "Heide",
  "Golda",
  "Kendra",
  "Gertrudis",
  "Caterina",
  "Temika",
  "Waneta",
  "Lakenya",
  "Tatum",
  "Mitzie",
  "Sona",
  "Doria",
  "Rochell",
  "Genia",
  "Keren",
  "Latarsha",
  "Janee",
  "Chante",
  "Tamika",
  "Pura",
  "Caron",
  "Jasmine",
  "Dalia",
  "Jina",
  "Mitsue",
  "Yuette",
  "Lulu",
  "Shaina",
  "Quyen",
  "Zana",
  "Annamae",
  "Enola",
  "Shemeka",
  "Ami",
  "Buena",
  "Gaye",
  "Alane",
  "Marcelina",
  "Conception",
  "Francina",
  "Vernita",
  "Dinorah",
  "Tamiko",
  "Sonja",
  "Alayna",
  "Jannet",
  "Whitley",
  "Janina",
  "Eustolia",
  "Marvel",
  "Hien",
  "Georgine",
  "Joye",
  "Jolanda",
  "Olinda",
  "Kandi",
  "Ladonna",
  "Refugia",
  "Carmela",
  "Allegra",
  "Dinah",
  "Wendie",
  "Vonnie",
  "Elisa",
  "Joellen",
  "Sherril",
  "Larue",
  "Sunday",
  "Erica",
  "Shenna",
  "Antonietta",
  "Tonita",
  "Serafina",
  "Joselyn",
  "Ileen",
  "Kimiko",
  "Cassandra",
  "Kourtney",
  "Ginger",
  "Florene",
  "Kirsten",
  "Destiny",
  "Sarah",
  "Felica",
  "Sharen",
  "Milagro",
  "Audry",
  "Reyna",
  "Berenice",
  "Torie",
  "Caprice",
  "Aleshia",
  "Alanna",
  "Bong",
  "Tawna",
  "Lorna",
  "Maybelle",
  "Alease",
  "Shameka",
  "Olivia",
  "Noelle",
  "Kasandra",
  "Bridgett",
  "Luetta",
  "Lakeesha",
  "Isabella",
  "Annita",
  "Casimira",
  "Kali",
  "Dominica",
  "Tien",
  "Euna",
  "Jeanett",
  "Stephnie",
  "Malinda",
  "Shantae",
  "Shonda",
  "Shalonda",
  "Jami",
  "Shamika",
  "Aurora",
  "Belva",
  "Lavonia",
  "Shella",
  "Flossie",
  "Oretha",
  "Elza",
  "Veta",
  "Apryl",
  "Jayme",
];

// MALE
const maleHumanNames = [
  "Emmitt",
  "Shane",
  "Leonel",
  "Rob",
  "Numbers",
  "Dee",
  "Barton",
  "Rueben",
  "Josh",
  "Augustine",
  "Lynwood",
  "Blaine",
  "Keenan",
  "Kelvin",
  "Jonathon",
  "Jed",
  "Pablo",
  "Milton",
  "Fidel",
  "Quinn",
  "Steven",
  "Blair",
  "Norbert",
  "Antione",
  "Elijah",
  "Sammy",
  "Marc",
  "Waylon",
  "Chong",
  "Tobias",
  "Sheldon",
  "Burl",
  "Chris",
  "Gale",
  "Malcolm",
  "Mervin",
  "Danial",
  "Elvin",
  "Troy",
  "Royce",
  "Leon",
  "Clifford",
  "Boris",
  "Rufus",
  "Myron",
  "Johnathon",
  "Lamar",
  "Broderick",
  "Clinton",
  "Franklyn",
  "Elias",
  "Nick",
  "Efren",
  "Osvaldo",
  "Chang",
  "Dario",
  "Lance",
  "Zachary",
  "Lawerence",
  "Sterling",
  "Mel",
  "Russell",
  "Enoch",
  "Darnell",
  "Deangelo",
  "Luther",
  "Tyrone",
  "Steve",
  "Darrel",
  "Shaun",
  "Jonas",
  "Stuart",
  "Woodrow",
  "Cornelius",
  "Asa",
  "Theo",
  "Joey",
  "Alton",
  "Eduardo",
  "Cary",
  "Pete",
  "Odell",
  "Deshawn",
  "Sanford",
  "Ben",
  "Lonnie",
  "Brendan",
  "Gayle",
  "Rashad",
  "Wilbert",
  "Reggie",
  "Emanuel",
  "Everette",
  "Jorge",
  "Kirby",
  "Jody",
  "Galen",
  "Elden",
  "Rey",
  "Toney",
  "Mauro",
  "Arthur",
  "Hal",
  "Andrew",
  "Jame",
  "Kraig",
  "Ramiro",
  "Blake",
  "Alexander",
  "Grover",
  "Werner",
  "Damien",
  "Heath",
  "Britt",
  "Connie",
  "Wilber",
  "Tony",
  "Simon",
  "Beau",
  "Kip",
  "Christoper",
  "Curtis",
  "Santo",
  "Carmelo",
  "Denny",
  "Norman",
  "Kurt",
  "Lorenzo",
  "Elliott",
  "Mitchel",
  "Lynn",
  "Phillip",
  "Wes",
  "Rudolf",
  "Vincenzo",
  "Leif",
  "Ashley",
  "Clemente",
  "Ward",
  "Theodore",
  "Phil",
  "Otis",
  "Chuck",
  "Johnie",
  "Bradley",
  "Desmond",
  "Noah",
  "Aurelio",
  "Esteban",
];

// SURNAME
const humanSurnames = [
  "Huie",
  "Mchenry",
  "Gebhard",
  "Pedrosa",
  "Lazar",
  "Pembleton",
  "Mailloux",
  "Baron",
  "Ohern",
  "Smidt",
  "Mumma",
  "Macon",
  "Bauman",
  "Carrel",
  "Royalty",
  "Edwards",
  "Forward",
  "Dollar",
  "Pahl",
  "Kail",
  "Reece",
  "Prosser",
  "Beans",
  "Stoneburner",
  "Kehoe",
  "Mundell",
  "Wilbur",
  "Knoles",
  "Brookman",
  "Thoman",
  "Statler",
  "Goldschmidt",
  "Rapier",
  "Roseborough",
  "Cha",
  "Tafoya",
  "Birdsall",
  "Astudillo",
  "Mcateer",
  "Mcgrane",
  "Fischer",
  "Spicer",
  "Calabro",
  "Pilla",
  "Portner",
  "Pozo",
  "Rondeau",
  "Spray",
  "Cronin",
  "Cifuentes",
  "Bopp",
  "Jess",
  "Adan",
  "Buchanan",
  "Finklea",
  "Luebbers",
  "Risko",
  "Bird",
  "Siemens",
  "Urenda",
  "Bourbon",
  "Corl",
  "Estridge",
  "Mclawhorn",
  "Covington",
  "Mealer",
  "Huppert",
  "Simms",
  "Tindal",
  "Corkill",
  "Lemieux",
  "Reasor",
  "Varghese",
  "Worth",
  "Tansey",
  "Cameron",
  "Wickens",
  "Melson",
  "Lauderdale",
  "Follmer",
  "Gravel",
  "Napoles",
  "Marson",
  "Frasure",
  "Fang",
  "Boniello",
  "Joe",
  "Ozment",
  "Cuesta",
  "Araya",
  "Saul",
  "Axtell",
  "Penwell",
  "Teixeira",
  "Gebhart",
  "Dogan",
  "Abeita",
  "Maupin",
  "Osorio",
  "Wirth",
  "Bernstein",
  "Frey",
  "Waid",
  "Desousa",
  "Burchfield",
  "Demartino",
  "Gisi",
  "Janecek",
  "Murtha",
  "Dickerson",
  "Coaxum",
  "Thiede",
  "Poplawski",
  "Wiemer",
  "Passman",
  "Kiker",
  "Kolb",
  "Schmitmeyer",
  "Larusso",
  "Old",
  "Salvador",
  "Franson",
  "Kondo",
  "Monger",
  "Fales",
  "Bourgault",
  "Lamon",
  "Mccurry",
  "Mickles",
  "Jeppson",
  "Sansom",
  "Moisan",
  "Gardner",
  "Dargie",
  "Cracraft",
  "Gibeault",
  "Novotny",
  "Gimbel",
  "Dahm",
  "Drees",
  "Luter",
  "Skeen",
  "Bradeen",
  "Crook",
  "Maestas",
  "Chiesa",
  "Leverich",
  "Casperson",
  "Bettis",
  "Funes",
  "Slawson",
  "Edsall",
  "Creekmore",
  "Okelley",
  "Helgren",
  "Overfield",
  "Wemmer",
  "Demaree",
  "Machado",
  "Christensen",
  "Hefley",
  "Baumert",
  "Blaine",
  "Hamon",
  "Worthley",
  "Parodi",
  "Lesko",
  "Flannagan",
  "Bartling",
  "Piermarini",
  "Moncrief",
  "Duden",
  "Junk",
  "Hollie",
  "Rayburn",
  "Eastwood",
  "Widener",
  "Buss",
  "Hillebrand",
  "Anchondo",
  "Lopp",
  "Ketter",
  "Mongillo",
  "Chunn",
  "Galindo",
  "Michener",
  "Scarborough",
  "Biron",
  "Carlen",
  "Oldfield",
  "Prasad",
  "Mynatt",
  "Napoli",
  "Ogren",
  "Fleet",
  "Fassett",
  "Mcwhirter",
  "Saner",
  "Rohe",
  "Farris",
  "Ferranti",
  "Heisey",
  "Eck",
  "Dement",
  "Wnuk",
  "Kochan",
  "Hosey",
  "Bonnet",
  "Richert",
  "Munden",
  "Wurth",
  "Whisenhunt",
  "Mansfield",
  "Steed",
  "Fluellen",
  "Corn",
  "Messner",
  "Loder",
  "Haverland",
  "Hieber",
  "Odom",
  "Tarango",
  "Xie",
  "Cardinal",
  "Hermansen",
  "Fowler",
  "Carnley",
  "Cerrato",
  "Prentiss",
  "Fuhr",
  "Devaughn",
  "Milner",
  "Sharpless",
  "Donathan",
  "Jeske",
  "Hurla",
  "Neeson",
  "Birkhead",
  "Nathan",
  "Moriarty",
  "Vose",
  "Iacovelli",
  "Casanova",
  "Schoenfeld",
  "Lenz",
  "Lasley",
  "Rolan",
  "Bowley",
  "Ellsworth",
  "Patchell",
  "Quintero",
  "Donaldson",
  "Chevez",
  "Magruder",
  "Behringer",
  "Husman",
  "Crenshaw",
  "Fenwick",
  "Pigg",
  "Gandy",
  "Liming",
  "Candanoza",
  "Weisinger",
  "Gloor",
  "Arnone",
  "Chaudhry",
  "Jacobsen",
  "Goss",
  "Pafford",
  "Carlino",
  "Fall",
  "Donati",
  "Blough",
  "Roundtree",
  "Hyland",
  "Deltoro",
  "Montufar",
  "Kornegay",
  "Welles",
  "Koval",
  "Meyers",
  "Townsel",
  "Wicklund",
  "Officer",
  "Savoy",
  "Viggiano",
  "Well",
  "Scales",
  "Beauvais",
  "Artist",
  "Doerr",
  "Petit",
  "Anglin",
  "Leaman",
  "Zynda",
  "Bardsley",
  "Mascia",
];

/////////////* TIEFLING */////////////

// FEMALE
const femaleTieflingNames = [
  "Zecria",
  "Seiricyra",
  "Fririssa",
  "Eaxori",
  "Afspira",
  "Briwala",
  "Lewala",
  "Faith",
  "Journey",
  "Levdani",
  "Levrali",
  "Yapione",
  "Dimzes",
  "Kalrali",
  "Pheborys",
  "Yorasolis",
  "Interesting",
  "Song",
  "Darkness",
  "Zaseis",
  "Nithki",
  "Kalmaia",
  "Yorabis",
  "Pespunith",
  "Zaipunith",
  "Levyis",
  "Timeless",
  "Gloom",
  "Chant",
  "Stresral",
  "Lennel",
  "Shosith",
  "Valdin",
  "Thilah",
  "Thorzendes",
  "Khordradrel",
  "Savreimsen",
  "Lerototh",
  "Neneyin",
];

// MALE
const maleTieflingNames = [
  "Hormos",
  "Nephrut",
  "Malvir",
  "Valrus",
  "Uriira",
  "Karai",
  "Lokelech",
  "Eternal",
  "Rolnon",
  "Valthus",
  "Meichar",
  "Thynemenos",
  "Kilrus",
  "Xarmos",
  "Dharron",
  "Salrius",
  "Valakas",
  "Zhermos",
  "Malenon",
  "Zorlius",
  "Barilius",
  "Mavchar",
  "Nephmeros",
  "Killius",
  "Ekreus",
  "Carlech",
  "Arrai",
  "Dokuc",
  "Yinry",
  "Adriath",
  "Yicor",
  "Zusuc",
  "Areci",
  "Agecus",
  "Elladrun",
  "Hilliardan",
  "Ertiallat",
];

// SURNAME
const tieflingSurnames = [
  "Vervend",
  "Brotaebae",
  "Tovos",
  "Zegraki",
  "Shama",
  "Toldris",
  "Rova",
  "Ecorvot",
  "Drardim",
  "Shagrerat",
  "Mokot",
  "Nirvad",
  "Sashakeand",
  "Fondre",
  "Letevri",
  "Veni",
  "Gibon",
  "Dobramia",
  "Nende",
  "Zetedaand",
  "Harvo",
  "Pasrossa",
  "Abem",
  "Riavagrat",
  "Fommeld",
  "Drorhiki",
];

/////////////* SWITCH FUNCTION */////////////

function returnRandomDragonbornName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleDragonbornNames),
      lastName: returnRandomArrayItem(dragonbornSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleDragonbornNames),
      lastName: returnRandomArrayItem(dragonbornSurnames),
    };
  }
  return fullName;
}

function returnRandomDwarfName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleDwarfNames),
      lastName: returnRandomArrayItem(dwarfSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleDwarfNames),
      lastName: returnRandomArrayItem(dwarfSurnames),
    };
  }
  return fullName;
}

function returnRandomElfName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleElfNames),
      lastName: returnRandomArrayItem(elfSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleElfNames),
      lastName: returnRandomArrayItem(elfSurnames),
    };
  }
  return fullName;
}

function returnRandomGnomeName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleGnomeNames),
      lastName: returnRandomArrayItem(gnomeSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleGnomeNames),
      lastName: returnRandomArrayItem(gnomeSurnames),
    };
  }
  return fullName;
}

function returnRandomHalfElfName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleHalfElfNames.concat(maleHumanNames)),
      lastName: returnRandomArrayItem(halfElfSurnames.concat(humanSurnames)),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(
        maleHalfElfNames.concat(femaleHumanNames)
      ),
      lastName: returnRandomArrayItem(halfElfSurnames.concat(humanSurnames)),
    };
  }
  return fullName;
}

function returnRandomHalfOrcName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleHalfOrcNames),
      lastName: returnRandomArrayItem(halfOrcSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleHalfOrcNames),
      lastName: returnRandomArrayItem(halfOrcSurnames),
    };
  }
  return fullName;
}

function returnRandomHumanName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleHumanNames),
      lastName: returnRandomArrayItem(humanSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleHumanNames),
      lastName: returnRandomArrayItem(humanSurnames),
    };
  }
  return fullName;
}

function returnRandomHalflingName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleHalflingNames),
      lastName: returnRandomArrayItem(halflingSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleHalflingNames),
      lastName: returnRandomArrayItem(halflingSurnames),
    };
  }
  return fullName;
}

function returnRandomTieflingName(gender) {
  if (gender === "male") {
    fullName = {
      firstName: returnRandomArrayItem(maleTieflingNames),
      lastName: returnRandomArrayItem(tieflingSurnames),
    };
  } else {
    fullName = {
      firstName: returnRandomArrayItem(femaleTieflingNames),
      lastName: returnRandomArrayItem(tieflingSurnames),
    };
  }
  return fullName;
}

function returnRandomName(race, gender) {
  switch (true) {
    case race === "dragonborn":
      return returnRandomDragonbornName(gender);
    case race === "dwarf":
      return returnRandomDwarfName(gender);
    case race === "elf":
      return returnRandomElfName(gender);
    case race === "gnome":
      return returnRandomGnomeName(gender);
    case race === "half-elf":
      return returnRandomHalfElfName(gender);
    case race === "half-orc":
      return returnRandomHalfOrcName(gender);
    case race === "halfling":
      return returnRandomHalflingName(gender);
    case race === "human":
      return returnRandomHumanName(gender);
    case race === "tiefling":
      return returnRandomTieflingName(gender);

    default:
      return "Fell through switch case returnRandomName in names.js";
  }
}

acid_splash = {
  name: "Acid Splash",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other." +
    " A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level" +
    " (2d6), 11th level (3d6), and 17th level (4d6).",
  duration: "Instantaneous",
  level: 0,
  range: "60 feet",
  school: "Conjuration",
};

bless = {
  name: "Bless",
  casting_time: "1 action",
  components: "V, S, M (a sprinkling of holy water)",
  description:
    "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell" +
    " ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. At Higher Levels. When you cast this spell" +
    " using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
  duration: "Concentration, up to 1 minute",
  level: 1,
  range: "30 feet",
  school: "Enchantment",
};

burning_hands = {
  name: "Burning Hands",
  casting_time: "1 action",
  components: "V, S",
  description:
    "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips." +
    " Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much" +
    " damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried. At Higher Levels." +
    " When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Self (15-foot cone)",
  school: "Evocation",
};

charm_person = {
  name: "Charm Person",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your" +
    " companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do" +
    " anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was" +
    " charmed by you. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional" +
    " creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
  duration: "1 hour",
  level: 1,
  range: "30 feet",
  school: "Enchantment",
};

command = {
  name: "Command",
  casting_time: "1 action",
  components: "V",
  description:
    "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command" +
    " on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly " +
    " harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the" +
    " DM determines how the target behaves. If the target can’t follow your command, the spell ends. Approach. The target moves toward you by the" +
    " shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop. The target drops whatever it is holding and then ends" +
    " its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target falls prone and then ends" +
    " its turn. Halt. The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must" +
    " move to stay aloft, it flies the minimum distance needed to remain in the air. At Higher Levels. When you cast this spell using a spell slot" +
    " of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each" +
    " other when you target them.",
  duration: "1 round",
  level: 1,
  range: "60 feet",
  school: "Enchantment",
};

comprehend_languages = {
  name: "Comprehend Languages",
  casting_time: "1 action",
  components: "V, S, M (a pinch of soot and salt)",
  description:
    "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you" +
    " see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell" +
    " doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language.",
  duration: "1 hour",
  level: 1,
  range: "Self",
  school: "Divination",
};

cone_of_cold = {
  name: "Cone of Cold",
  casting_time: "1 action",
  components: "V, S, M (a small crystal or glass cone)",
  description:
    "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8" +
    " cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until" +
    " it thaws. At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each" +
    " slot level above 5th.",
  duration: "Instantaneous",
  level: 5,
  range: "Self (60-foot cone)",
  school: "Evocation",
};

cure_wounds = {
  name: "Cure Wounds",
  casting_time: "1 action",
  components: "V, S",
  description:
    "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on" +
    " undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases" +
    " by 1d8 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Touch",
  school: "Evocation",
};

dancing_lights = {
  name: "Dancing Lights",
  casting_time: "1 action",
  components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
  description:
    "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in" +
    " the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size." +
    " Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the" +
    " lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and" +
    " a light winks out if it exceeds the spell’s range.",
  duration: "Concentration, up to 1 minute",
  level: 0,
  range: "120 feet",
  school: "Evocation",
};

detect_magic = {
  name: "Detect Magic",
  casting_time: "1 action",
  components: "V, S",
  description:
    "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your" +
    " action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school" +
    " of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal," +
    " a thin sheet of lead, or 3 feet of wood or dirt.",
  duration: "Concentration, up to 10 minutes",
  level: 1,
  range: "Self",
  school: "Divination",
};

disguise_self = {
  name: "Disguise Self",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action" +
    " to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has" +
    " the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection." +
    " For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head" +
    " and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still" +
    " in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check " +
    "against your spell save DC.",
  duration: "1 hour",
  level: 1,
  range: "Self",
  school: "Illusion",
};

faerie_fire = {
  name: "Faerie Fire",
  casting_time: "1 action",
  components: "V",
  description:
    "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also" +
    " outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll" +
    " against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.",
  duration: "Concentration, up to 1 minute",
  level: 1,
  range: "60 feet",
  school: "Evocation",
};

fire_bolt = {
  name: "Fire Bolt",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage." +
    " A flammable object hit by this spell ignites if it isn’t being worn or carried. This spell’s damage increases by 1d10 when you reach 5th level (2d10)," +
    " 11th level (3d10), and 17th level (4d10).",
  duration: "Instantaneous",
  level: 0,
  range: "120 feet",
  school: "Evocation",
};

guidance = {
  name: "Guidance",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice." +
    " It can roll the die before or after making the ability check. The spell then ends.",
  duration: "Concentration, up to 1 minute",
  level: 0,
  range: "Touch",
  school: "Divination",
};

guiding_bolt = {
  name: "Guiding Bolt",
  casting_time: "1 action",
  components: "V, S",
  description:
    "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes" +
    " 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim" +
    " light glittering on the target until then. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage" +
    " increases by 1d6 for each slot level above 1st.",
  duration: "1 round",
  level: 1,
  range: "120 feet",
  school: "Evocation",
};

healing_word = {
  name: "Healing Word",
  casting_time: "1 bonus action",
  components: "V",
  description:
    "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell" +
    " has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing" +
    " increases by 1d4 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "60 feet",
  school: "Evocation",
};

identify = {
  name: "Identify",
  casting_time: "1 minute",
  components: "V, S, M (a pearl worth at least 100 gp and an owl feather)",
  description:
    "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object," +
    " you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn" +
    " whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If" +
    " you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
  duration: "Instantaneous",
  level: 1,
  range: "Touch",
  school: "Divination",
};

animal_friendship = {
  name: "Animal Friendship",
  casting_time: "1 action",
  components: "V S M (Morsel of food)",
  description:
    "Choose a beast that you can see. It must be able to see and hear you. If its Intelligence is 4 or higher, the spell fails. Otherwise," +
    " it must pass a Wisdom save or be charmed by you. If you or one of your companions harms it, the spell ends. At Higher Levels:" +
    " You can target one additional beast for each slot level above 1st.",
  duration: "24 hours",
  level: 1,
  range: "30 feet",
  school: "Enchantment",
};

bane = {
  name: "Bane",
  casting_time: "1 action",
  components: "V S M (Blood)",
  description:
    "Up to three creatures you can see must make Charisma saving throws. If a target fails, whenever they make an attack roll or saving" +
    " throw before the spell ends, they must roll a d4 and subtract the number rolled. At Higher Levels: You can target one" +
    " additional creature for each slot level above 1st.",
  duration: "Conc. Up to 1 minute",
  level: 1,
  range: "30 feet",
  school: "Enchantment",
};

feather_fall = {
  name: "Feather Fall",
  casting_time: "1 reaction",
  components: "V M (Feather/down)",
  description:
    "Choose up to five falling creatures. Its descent slows to 60 feet per round until the spell ends. If the creature" +
    " lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for it.",
  duration: "1 minute",
  level: 1,
  range: "60 feet",
  school: "Transmutation",
};

heroism = {
  name: "Heroism",
  casting_time: "1 action",
  components: "V S",
  description:
    "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being" +
    " frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each" +
    " of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell. At" +
    " Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one" +
    " additional creature for each slot level above 1st.",
  duration: "Conc. Up to 1 minute",
  level: 1,
  range: "Touch",
  school: "Enchantment",
};

hideous_laughter = {
  name: "Hideous Laughter",
  casting_time: "1 action",
  components: "tiny tarts, 1 feather",
  description:
    "A creature of your choice that you can see within range perceives everything as hilariously funny and falls" +
    " into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall" +
    " prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score" +
    " of 4 or less isn’t affected. At the end of each of its turns, and each time it takes damage, the target" +
    " can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by" +
    " damage. On a success, the spell ends.",
  duration: "Conc, up to 1 minute",
  level: 1,
  range: "30 feet",
  school: "Enchantment",
};

illusory_script = {
  name: "Illusory Script",
  casting_time: "1 minute (Ritual)",
  components: "S M (10gp lead ink; consumed)",
  description:
    "You write on suitable writing material and imbue it with an illusion that lasts for the duration." +
    " To you and any creatures you designate when you cast the spell, the writing appears normal, written" +
    " in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the" +
    " writing is unintelligible. Alternatively, you can cause the writing to appear to be an entirely" +
    " different message, written in a different hand and language, though the language must be one you know." +
    " If the spell is dispelled, the original script and the illusion disappear. A creature with truesight" +
    " can read the hidden message.",
  duration: "10 days",
  level: 1,
  range: "Touch",
  school: "Illusion",
};

longstrider = {
  name: "Longstrider",
  casting_time: "1 action",
  components: "V S M (Dirt)",
  description:
    "The target’s speed increases by 10 feet until the spell ends.At Higher Levels: You can target one" +
    " additional creature for each slot level above 1st.",
  duration: "1 hour",
  level: 1,
  range: "Touch",
  school: "Transmutation",
};

speak_with_animals = {
  name: "Speak with Animals",
  casting_time: "1 action (Ritual)",
  components: "V S",
  description:
    "Although limited by the intelligence of the beast, you can understand and speak with beasts." +
    " You learn about the beast's experiences over the last day, as well as local places and creatures." +
    " If your DM allows, the beast may also complete a small task for you, if you can successfully" +
    " convince it to do so.",
  duration: "10 minutes",
  level: 1,
  range: "Self",
  school: "Divination",
};

unseen_servant = {
  name: "Unseen Servant",
  casting_time: "1 action (Ritual)",
  components: "V S M (A piece of string and a bit of wood)",
  description:
    "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your" +
    " command until the spell ends. The servant springs into existence in an unoccupied space on the" +
    " ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack." +
    " If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you" +
    " can mentally command the servant to move up to 15 feet and interact with an object. The servant" +
    " can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending," +
    " folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the" +
    " servant performs the task to the best of its ability until it completes the task, then waits for" +
    " your next command. If you command the servant to perform a task that would move it more than 60" +
    " feet away from you, the spell ends.",
  duration: "1 hour",
  level: 1,
  range: "60 feet",
  school: "Conjuration ",
};

create_or_destroy_water = {
  name: "Create or Destroy Water",
  casting_time: "1 action",
  components:
    " V S M (A drop of water if creating water or a few grains of sand if destroying it)",
  description:
    "You either create or destroy water. Create Water. You create up to 10 gallons of clean water within" +
    " range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range," +
    " extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in" +
    " an open container within range. Alternatively, you destroy fog in a 30-foot cube within range." +
    " At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you create" +
    " or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each" +
    " slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "30 feet",
  school: "Transmutation",
};

detect_evil_and_good = {
  name: "Detect Evil and Good",
  casting_time: "1 action",
  components: "V S",
  description:
    "You sense the location of an aberration, celestial, elemental, fey, fiend, or undead if it is" +
    " within 30 feet of you. If there is a place or object that has been magically consecrated or" +
    " desecrated within 30 feet, you are also able to locate it. You are unable to sense these things" +
    " through 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  duration: "Conc. Up to 10 minutes",
  level: 1,
  range: "Self",
  school: "Divination",
};

detect_poison_and_disease = {
  name: "Detect Poison and Disease",
  casting_time: "1 action (Ritual)",
  components: "V S M (Yew leaf)",
  description:
    "If they exist or appear within 30 feet, you sense the presence of poisons, poisonous creatures," +
    " and diseases. Their location and type also become known to you. This spell is blocked by 1 foot" +
    " of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  duration: "Conc. Up to 10 minutes",
  level: 1,
  range: "Self",
  school: "Divination",
};

protection_from_evil_and_good = {
  name: "Protection from Evil and Good",
  casting_time: "1 action",
  components: "	V S M (Holy water/powdered silver and iron; consumed)",
  description:
    "One willing creature you touch is protected against aberrations, celestials, elementals," +
    " fey, fiends, and undead. Creatures of those types have disadvantage on attack rolls against" +
    " the target. The target also can't be charmed, frightened, or possessed by them. If the" +
    " target already has such an effect by one of them, the target has advantage on any new" +
    " saving throw against it.",
  duration: "Conc. Up to 10 minutes",
  level: 1,
  range: "Touch",
  school: "Abjuration",
};

purify_food_and_drink = {
  name: "Purify Food and Drink",
  casting_time: "1 action (Ritual)",
  components: "V S",
  description:
    "Non-magical food and drink within a 5-foot-radius sphere centered on a point is" +
    " rendered free of poison and disease.",
  duration: "Instantaneous",
  level: 1,
  range: "10 feet",
  school: "Transmutation",
};

produce_flame = {
  name: "Produce Flame",
  casting_time: "1 action",
  components: "V S",
  description:
    "A flame appears in your hand, harming neither you or your equipment. It sheds bright" +
    " light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if" +
    " you dismiss it as an action or if you cast it again. You can hurl the flame at a" +
    " creature within 30 feet of you. Make a ranged spell attack. On a hit, the target" +
    " takes 1d8 fire damage. The spell then ends. The damage increases by 1d8 when you" +
    " reach 5th, 11th, and 17th level.",
  duration: "10 minutes",
  level: 0,
  range: "Self",
  school: "Conjuration ",
};

shillelagh = {
  name: "Shillelagh",
  casting_time: "1 bonus action",
  components: "V S M (Mistletoe, shamrock leaf, club/quarterstaff)",
  description:
    "For the duration, you can use your spellcasting ability instead of Strength for a" +
    " club or quarterstaff you touch, and the weapon's damage die becomes a d8. The" +
    " weapon also becomes magical if it isn't. The spell ends if you cast it again or" +
    " if you let go of the weapon.",
  duration: "1 minute",
  level: 0,
  range: "Touch",
  school: "Transmutation ",
};

entangle = {
  name: "Entangle",
  casting_time: "1 action",
  components: "V S",
  description:
    "Plants that grab and entwine fill a 20-foot square with a point of origin that" +
    " you choose. The area becomes difficult terrain. When the spell ends, the plants wilt" +
    " away. If a creature is standing in the area when you cast the spell it must pass a" +
    " Strength save or be restrained. A restrained creature can release itself by using its" +
    " action to attempt another Strength save, being freed on a success.",
  duration: "Conc. Up to 1 minute",
  level: 1,
  range: "90 feet",
  school: "Conjuration",
};

fog_cloud = {
  name: "Fog Cloud",
  casting_time: "1 action",
  components: "V S",
  description:
    "A 20-foot-radius sphere of fog appears within range of you until a wind of at least" +
    " 10 miles per hour blows it away, or until the spell ends. The fog is centered on a" +
    " point you choose, spreading around corners and heavily obscuring the area it fills." +
    " At Higher Levels: The fog becomes larger by 20 feet for each spell level you cast" +
    " this spell above the first.",
  duration: "Conc. Up to 1 hour",
  level: 1,
  range: "120 feet",
  school: "Conjuration",
};

jump = {
  name: "Jump",
  casting_time: "1 action",
  components: "V S M (Grasshopper's hind leg)",
  description: "The target's jump distance is tripled until the spell ends.",
  duration: "1 minute",
  level: 1,
  range: "Touch",
  school: "Transmutation",
};

divine_favor = {
  name: "Divine Favor",
  casting_time: "1 bonus action",
  components: "V S",
  description: "Your weapon attacks deal an extra 1d4 radiant damage on a hit.",
  duration: "Conc. Up to 1 minute",
  level: 1,
  range: "Self",
  school: "Evocation",
};

alarm = {
  name: "Alarm",
  casting_time: "1 minute (Ritual)",
  components: "V S M (a tiny bell and a piece of fine silver wire)",
  description:
    "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within" +
    " range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you" +
    " whenever a Tiny or larger creature touches or enters the warded area. When you cast the" +
    " spell, you can designate creatures that won't set off the alarm. You also choose whether" +
    " the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if" +
    " you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An" +
    " audible alarm produces the sound of a hand bell for 10 seconds within 60 feet",
  duration: "8 hours",
  level: 1,
  range: "30 feet",
  school: "Abjuration ",
};

chill_touch = {
  name: "Chill Touch",
  casting_time: "1 action",
  components: "V S",
  description:
    "Make a ranged spell attack. On hit, the target takes 1d8 necrotic damage and can't regain" +
    " hit points until the start of your next turn. If you hit an undead target, it also has" +
    " disadvantage on attack rolls against you until the end of your next turn. This spell's" +
    " damage increases by 1d8 when you reach 5th, 11th, and 17th level.",
  duration: "1 round",
  level: 0,
  range: "120 feet",
  school: "Necromancy",
};

color_spray = {
  name: "Color Spray",
  casting_time: "1 action",
  components: "V S M (Colored powder/sand)",
  description:
    "Creatures in a 15-foot cone from you are blinded. If a creature is already blind or" +
    " unconscious, they are not affected. Starting with the creature that has the lowest" +
    " current hit points, roll 6d10 to see how many creatures you can affect. If the creature" +
    " with the lowest hit points is less than the total rolled, subtract the hit points from" +
    " the number, then move onto the next. When you reach a creature whose hit points would" +
    " go above the number, subtractions applied, they are unaffected and this casting can't" +
    " blind anything else. At Higher Levels: Roll an additional 2d10 for each slot level above 1st.",
  duration: "1 round",
  level: 1,
  range: "Self (15ft cone)",
  school: "Illusion",
};

expeditious_retreat = {
  name: "Expeditious Retreat",
  casting_time: "1 bonus action",
  components: "V S",
  description:
    "When you cast this spell, and as a bonus action on your turns, you can take the Dash action.",
  duration: "Conc. Up to 10 minutes",
  level: 1,
  range: "Self",
  school: "Transmutation",
};

false_life = {
  name: "False Life",
  casting_time: "1 action",
  components: "V S M (Alcohol/distilled spirits)",
  description:
    "You gain 1d4 + 4 temporary hit points for the duration.At Higher Levels: You gain 5" +
    " additional temporary hit points for each slot level above 1st.",
  duration: "1 hour",
  level: 1,
  range: "Self",
  school: "Necromancy",
};

floating_disk = {
  name: "Floating Disk",
  casting_time: "1 action",
  components: "V S M (A drop of mercury)",
  description:
    "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch" +
    " thick, that floats 3 feet above the ground in an unoccupied space of your choice that" +
    " you can see within range. The disk remains for the duration, and can hold up to 500" +
    " pounds. If more weight is placed on it, the spell ends, and everything on the disk" +
    " falls to the ground.The disk is immobile while you are within 20 feet of it. If you move" +
    " more than 20 feet away from it, the disk follows you so that it remains within 20 feet of" +
    " you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t" +
    " cross an elevation change of 10 feet or more. For example, the disk can’t move across a" +
    " 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move" +
    " more than 100 feet from the disk (typically because it can’t move around an obstacle to follow" +
    " you), the spell ends.",
  duration: "1 hour",
  level: 1,
  range: "30 feet",
  school: "Conjuration",
};

grease = {
  name: "Grease",
  casting_time: "1 action",
  components: "V S M (Pork rind/butter)",
  description:
    "Grease covers the ground in a 10-foot square within range. It's difficult terrain for the" +
    " duration. When the grease appears, each creature standing in its area must pass a Dexterity" +
    " save or fall prone. A creature that enters the area or ends its turn there must also make this save.",
  duration: "1 minute",
  level: 1,
  range: "60 feet",
  school: "Conjuration",
};

inflict_wounds = {
  name: "Inflict Wounds",
  casting_time: "1 action",
  components: "V, S",
  description:
    "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10" +
    " necrotic damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level" +
    " or higher, the damage increases by 1d10 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Touch",
  school: "Necromancy",
};

light = {
  name: "Light",
  casting_time: "1 action",
  components: "V, M (a firefly or phosphorescent moss)",
  description:
    "You touch one object that is no larger than 10 feet in any dimension. Until the spell" +
    " ends, the object sheds bright light in a 20-foot radius and dim light for an additional" +
    " 20 feet. The light can be colored as you like. Completely covering the object with" +
    " something opaque blocks the light. The spell ends if you cast it again or dismiss it" +
    " as an action. If you target an object held or worn by a hostile creature, that creature" +
    " must succeed on a Dexterity saving throw to avoid the spell.",
  duration: "1 hour",
  level: 0,
  range: "Touch",
  school: "Evocation",
};

mending = {
  name: "Mending",
  casting_time: "1 Minute",
  components: "V S M (Two lodestones)",
  description:
    "This spell repairs a single break or tear in an object you touch, such as a broken chain link," +
    " two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear" +
    " is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." +
    " This spell can physically repair a magic item or construct, but the spell can’t restore magic" +
    " to such an object.",
  duration: "Instantaneous",
  level: 0,
  range: "Touch",
  school: "transmutation",
};

message = {
  name: "Message",
  casting_time: "1 action",
  components: "V S M (A short piece of copper wire)",
  description:
    "You point your finger toward a creature within range and whisper a message. The target (and only" +
    " the target) hears the message and can reply in a whisper that only you can hear. You can cast" +
    " this spell through solid objects if you are familiar with the target and know it is beyond the" +
    " barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet" +
    " of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely" +
    " around corners or through openings.",
  duration: "1 round",
  level: 0,
  range: "120 feet",
  school: "transmutation",
};

mage_armor = {
  name: "Mage Armor",
  casting_time: "1 action",
  components: "V, S, M (a piece of cured leather)",
  description:
    "You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds" +
    " it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell" +
    " ends if the target dons armor or if you dismiss the spell as an action.",
  duration: "8 hours",
  level: 1,
  range: "Touch",
  school: "Abjuration",
};

mage_hand = {
  name: "Mage Hand",
  casting_time: "1 action",
  components: "V, S",
  description:
    "A spectral, floating hand appears at a point you choose within range. The hand lasts for" +
    " the duration or until you dismiss it as an action. The hand vanishes if it is ever more than" +
    " 30 feet away from you or if you cast this spell again. You can use your action to control the" +
    " hand. You can use the hand to manipulate an object, open an unlocked door or container, stow" +
    " or retrieve an item from an open container, or pour the contents out of a vial. You can move" +
    " the hand up to 30 feet each time you use it. The hand can’t attack, activate magic items, or" +
    " carry more than 10 pounds.",
  duration: "1 minute",
  level: 0,
  range: "30 feet",
  school: "Conjuration",
};

magic_missile = {
  name: "Magic Missile",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You create three glowing darts of magical force. Each dart hits a creature of your choice" +
    " that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts" +
    " all strike simultaneously, and you can direct them to hit one creature or several. At Higher" +
    " Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell" +
    " creates one more dart for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "120 feet",
  school: "Evocation",
};

minor_illusion = {
  name: "Minor Illusion",
  casting_time: "1 action",
  components: "S, M (a bit of fleece)",
  description:
    "You create a sound or an image of an object within range that lasts for the duration." +
    " The illusion also ends if you dismiss it as an action or cast this spell again. If" +
    " you create a sound, its volume can range from a whisper to a scream. It can be your" +
    " voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound" +
    " you choose. The sound continues unabated throughout the duration, or you can make" +
    " discrete sounds at different times before the spell ends. If you create an image of" +
    " an object—such as a chair, muddy footprints, or a small chest—it must be no larger" +
    " than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory" +
    " effect. Physical interaction with the image reveals it to be an illusion, because" +
    " things can pass through it. If a creature uses its action to examine the sound or" +
    " image, the creature can determine that it is an illusion with a successful Intelligence" +
    " (Investigation) check against your spell save DC. If a creature discerns the illusion" +
    " for what it is, the illusion becomes faint to the creature.",
  duration: "1 minute",
  level: 0,
  range: "30 feet",
  school: "Illusion",
};

poison_spray = {
  name: "Poison Spray",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You extend your hand toward a creature you can see within range and project a puff" +
    " of noxious gas from your palm. The creature must succeed on a Constitution saving" +
    " throw or take 1d12 poison damage. This spell’s damage increases by 1d12 when you " +
    "reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
  duration: "Instantaneous",
  level: 0,
  range: "10 feet",
  school: "Conjuration",
};

prestidigitation = {
  name: "Prestidigitation",
  casting_time: "1 action",
  components: "V, S",
  description:
    "This spell is a minor magical trick that novice spellcasters use for practice. You" +
    " create one of the following magical effects within range: • You create an" +
    " instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind," +
    " faint musi- cal notes, or an odd odor. • You instantaneously light or snuff out a" +
    " candle, a torch, or a small campfire. • You instantaneously clean or soil an object" +
    " no larger than 1 cubic foot. • You chill, warm, or flavor up to 1 cubic foot of" +
    " nonliving material for 1 hour. • You make a color, a small mark, or a symbol appear" +
    " on an object or a surface for 1 hour. • You create a nonmagical trinket or an" +
    " illusory image that can fit in your hand and that lasts until the end of your next" +
    " turn. If you cast this spell multiple times, you can have up to three of its" +
    " non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
  duration: "Up to 1 hour",
  level: 0,
  range: "10 feet",
  school: "Transmutation",
};

ray_of_frost = {
  name: "Ray of Frost",
  casting_time: "1 action",
  components: "V, S",
  description:
    "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged" +
    " spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is" +
    " reduced by 10 feet until the start of your next turn. The spell’s damage increases by" +
    " 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
  duration: "Instantaneous",
  level: 0,
  range: "60 feet",
  school: "Evocation",
};

resistance = {
  name: "Resistance",
  casting_time: "1 action",
  components: "V, S, M (a miniature cloak)",
  description:
    "You touch one willing creature. Once before the spell ends, the target can roll a d4" +
    " and add the number rolled to one saving throw of its choice. It can roll the die" +
    " before or after making the saving throw. The spell then ends.",
  duration: "Concentration, up to 1 minute",
  level: 0,
  range: "Touch",
  school: "Abjuration",
};

sacred_flame = {
  name: "Sacred Flame",
  casting_time: "1 action",
  components: "V, S",
  description:
    "Flame-like radiance descends on a creature that you can see within range. The" +
    " target must succeed on a Dexterity saving throw or take 1d8 radiant damage." +
    " The target gains no benefit from cover for this saving throw. The spell’s damage" +
    " increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
  duration: "Instantaneous",
  level: 0,
  range: "60 feet",
  school: "Evocation",
};

sanctuary = {
  name: "Sanctuary",
  casting_time: "1 bonus action",
  components: "V, S, M (a small silver mirror)",
  description:
    "You ward a creature within range against attack. Until the spell ends, any" +
    " creature who targets the warded creature with an attack or a harmful spell" +
    " must first make a Wisdom saving throw. On a failed save, the creature must" +
    " choose a new target or lose the attack or spell. This spell doesn’t protect" +
    " the warded creature from area effects, such as the explosion of a fireball." +
    " If the warded creature makes an attack or casts a spell that affects an" +
    " enemy creature, this spell ends.",
  duration: "1 minute",
  level: 1,
  range: "30 feet",
  school: "Abjuration",
};

shield = {
  name: "Shield",
  casting_time:
    "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
  components: "V, S",
  description:
    "An invisible barrier of magical force appears and protects you. Until the" +
    " start of your next turn, you have a +5 bonus to AC, including against the" +
    " triggering attack, and you take no damage from magic missile.",
  duration: "1 round",
  level: 1,
  range: "Self",
  school: "Abjuration",
};

shield_of_faith = {
  name: "Shield of Faith",
  casting_time: "1 bonus action",
  components:
    "V, S, M (a small parchment with a bit of holy text written on it)",
  description:
    "A shimmering field appears and surrounds a creature of your choice within range, granting" +
    " it a +2 bonus to AC for the duration.",
  duration: "Concentration, up to 10 minutes",
  level: 1,
  range: "60 feet",
  school: "Abjuration",
};

shocking_grasp = {
  name: "Shocking Grasp",
  casting_time: "1 action",
  components: "V, S",
  description:
    "Lightning springs from your hand to deliver a shock to a creature you try to touch." +
    " Make a melee spell attack against the target. You have advantage on the attack roll" +
    " if the target is wearing armor made of metal. On a hit, the target takes 1d8" +
    " lightning damage, and it can’t take reactions until the start of its next turn. The" +
    " spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8)," +
    " and 17th level (4d8).",
  duration: "Instantaneous",
  level: 0,
  range: "Touch",
  school: "Evocation",
};

silent_image = {
  name: "Silent Image",
  casting_time: "1 action",
  components: "V, S, M (a bit of fleece)",
  description:
    "You create the image of an object, a creature, or some other visible phenomenon that" +
    " is no larger than a 15-foot cube. The image appears at a spot within range and lasts" +
    " for the duration. The image is purely visual; it isn’t accompanied by sound, smell," +
    " or other sensory effects. You can use your action to cause the image to move to any" +
    "spot within range. As the image changes location, you can alter its appearance so that" +
    " its movements appear natural for the image. For example, if you create an image of a" +
    " creature and move it, you can alter the image so that it appears to be walking." +
    " Physical interaction with the image reveals it to be an illusion, because things can" +
    " pass through it. A creature that uses its action to examine the image can determine" +
    " that it is an illusion with a successful Intelligence (Investigation) check against" +
    " your spell save DC. If a creature discerns the illusion for what it is, the creature" +
    " can see through the image.",
  duration: "Concentration, up to 10 minutes",
  level: 1,
  range: "60 feet",
  school: "Illusion",
};

sleep = {
  name: "Sleep",
  casting_time: "1 action",
  components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
  description:
    "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many" +
    " hit points of creatures this spell can affect. Creatures within 20 feet of a point" +
    " you choose within range are affected in ascending order of their current hit points" +
    " (ignoring unconscious creatures). Starting with the creature that has the lowest" +
    " current hit points, each creature affected by this spell falls unconscious until the" +
    " spell ends, the sleeper takes damage, or someone uses an action to shake or slap the" +
    " sleeper awake. Subtract each creature’s hit points from the total before moving on to" +
    " the creature with the next lowest hit points. A creature’s hit points must be equal" +
    " to or less than the remaining total for that creature to be affected. Undead and" +
    " creatures immune to being charmed aren’t affected by this spell. At Higher Levels." +
    " When you cast this spell using a spell slot of 2nd level or higher, roll an" +
    " additional 2d8 for each slot level above 1st.",
  duration: "1 minute",
  level: 1,
  range: "90 feet",
  school: "Enchantment",
};

spare_the_dying = {
  name: "Spare the Dying",
  casting_time: "1 action",
  components: "V, S",
  description:
    "You touch a living creature that has 0 hit points. The creature becomes stable." +
    " This spell has no effect on undead or constructs.",
  duration: "Instantaneous",
  level: 0,
  range: "Touch",
  school: "Necromancy",
};

thaumaturgy = {
  name: "Thaumaturgy",
  casting_time: "1 action",
  components: "V",
  description:
    "You manifest a minor wonder, a sign of supernatural power, within range. You" +
    " create one of the following magical effects within range: • Your voice booms" +
    " up to three times as loud as normal for 1 minute. • You cause flames to" +
    " flicker, brighten, dim, or change color for 1 minute. • You cause harmless" +
    " tremors in the ground for 1 minute. • You create an instantaneous sound" +
    " that originates from a point of your choice within range, such as a rumble" +
    " of thunder, the cry of a raven, or omi- nous whispers. • You instantaneously" +
    " cause an unlocked door or win- dow to fly open or slam shut. • You alter the" +
    " appearance of your eyes for 1 minute. If you cast this spell multiple times," +
    " you can have up to three of its 1-minute effects active at a time, and you" +
    " can dismiss such an effect as an action.",
  duration: "Up to 1 minute",
  level: 0,
  range: "30 feet",
  school: "Transmutation",
};

thunderwave = {
  name: "Thunderwave",
  casting_time: "1 action",
  components: "V, S",
  description:
    "A wave of thunderous force sweeps out from you. Each creature in a 15-foot" +
    " cube originating from you must make a Constitution saving throw. On a failed" +
    " save, a creature takes 2d8 thunder damage and is pushed 10 feet away from" +
    " you. On a successful save, the creature takes half as much damage and isn’t" +
    " pushed. In addition, unsecured objects that are completely within the area" +
    " of effect are automatically pushed 10 feet away from you by the spell’s" +
    " effect, and the spell emits a thunderous boom audible out to 300 feet. At" +
    " Higher Levels. When you cast this spell using a spell slot of 2nd level or" +
    " higher, the damage increases by 1d8 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Self (15-foot cube)",
  school: "Evocation",
};

true_strike = {
  name: "True Strike",
  casting_time: "1 action",
  components: "S",
  description:
    "You extend your hand and point a finger at a target in range. Your magic grants" +
    " you a brief insight into the target’s defenses. On your next turn, you gain" +
    " advantage on your first attack roll against the target, provided that this" +
    " spell hasn’t ended.",
  duration: "Concentration, Up to 1 round",
  level: 0,
  range: "30 feet",
  school: "Divination",
};

vicious_mockery = {
  name: "Vicious Mockery",
  casting_time: "1 action",
  components: "V",
  description:
    "You unleash a string of insults laced with subtle enchantments at a creature" +
    " you can see within range. If the target can hear you (though it need not" +
    " understand you), it must succeed on a Wisdom saving throw or take 1d4" +
    " psychic damage and have disadvantage on the next attack roll it makes before" +
    " the end of its next turn.",
  duration: "Instantaneous",
  level: 0,
  range: "60 feet",
  school: "enchantment",
};

bardCantrips = {
  DancingLights: dancing_lights,
  Light: light,
  MageHand: mage_hand,
  Mending: mending,
  Message: message,
  MinorIllusion: minor_illusion,
  Prestidigitation: prestidigitation,
  TrueStrike: true_strike,
  ViciousMockery: vicious_mockery,
};

bardLevel1 = {
  AnimalFriendship: animal_friendship,
  Bane: bane,
  CharmPerson: charm_person,
  ComprehendLanguages: comprehend_languages,
  CureWounds: cure_wounds,
  DetectMagic: detect_magic,
  DisguiseSelf: disguise_self,
  FaerieFire: faerie_fire,
  FeatherFall: feather_fall,
  HealingWord: healing_word,
  Heroism: heroism,
  HideousLaughter: hideous_laughter,
  Identify: identify,
  IllusoryScript: illusory_script,
  Longstrider: longstrider,
  SilentImage: silent_image,
  Sleep: sleep,
  SpeakwithAnimals: speak_with_animals,
  Thunderwave: thunderwave,
  UnseenServant: unseen_servant,
};

clericCantrips = {
  Guidance: guidance,
  Light: light,
  Mending: mending,
  Resistance: resistance,
  SacredFlame: sacred_flame,
  Thaumaturgy: thaumaturgy,
};

clericLevel1 = {
  Bane: bane,
  Bless: bless,
  Command: command,
  CreateorDestroyWater: create_or_destroy_water,
  CureWounds: cure_wounds,
  DetectEvilandGood: detect_evil_and_good,
  DetectMagic: detect_magic,
  DetectPoisonandDisease: detect_poison_and_disease,
  GuidingBolt: guiding_bolt,
  HealingWord: healing_word,
  InflictWounds: inflict_wounds,
  ProtectionfromEvilandGood: protection_from_evil_and_good,
  PurifyFoodandDrink: purify_food_and_drink,
  Sanctuary: sanctuary,
  ShieldofFaith: shield_of_faith,
};

druidCantrips = {
  Guidance: guidance,
  Mending: mending,
  ProduceFlame: produce_flame,
  Resistance: resistance,
  Shillelagh: shillelagh,
};

druidLevel1 = {
  CharmPerson: charm_person,
  CreateOrDestroyWater: create_or_destroy_water,
  CureWounds: cure_wounds,
  DetectMagic: detect_magic,
  DetectPoisonandDisease: detect_poison_and_disease,
  Entangle: entangle,
  FaerieFire: faerie_fire,
  FogCloud: fog_cloud,
  HealingWord: healing_word,
  Jump: jump,
  Longstrider: longstrider,
  PurifyFoodandDrink: purify_food_and_drink,
  SpeakWithAnimals: speak_with_animals,
  Thunderwave: thunderwave,
};

paladinLevel1 = {
  Bless: bless,
  Command: command,
  CureWounds: cure_wounds,
  DetectEvilAndGood: detect_evil_and_good,
  DetectMagic: detect_magic,
  DetectPoisonAndDisease: detect_poison_and_disease,
  DivineFavor: divine_favor,
  Heroism: heroism,
  ProtectionFromEvilAndGood: protection_from_evil_and_good,
  PurifyFoodAndDrink: purify_food_and_drink,
  ShieldOfFaith: shield_of_faith,
};

rangerLevel1 = {
  Alarm: alarm,
  CureWounds: cure_wounds,
  DetectMagic: detect_magic,
  DetectPoisonandDisease: detect_poison_and_disease,
  FogCloud: fog_cloud,
  Jump: jump,
  Longstrider: longstrider,
  SpeakWithAnimals: speak_with_animals,
};

sorcererCantrips = {
  AcidSplash: acid_splash,
  ChillTouch: chill_touch,
  DancingLights: dancing_lights,
  Light: light,
  MageHand: mage_hand,
  Mending: mending,
  Message: message,
  MinorIllusion: minor_illusion,
  Prestidigitation: prestidigitation,
  RayofFrost: ray_of_frost,
  ShockingGrasp: shocking_grasp,
  TrueStrike: true_strike,
};

sorcererLevel1 = {
  BurningHands: burning_hands,
  CharmPerson: charm_person,
  ColorSpray: color_spray,
  ComprehendLanguages: comprehend_languages,
  DetectMagic: detect_magic,
  DisguiseSelf: disguise_self,
  ExpeditiousRetreat: expeditious_retreat,
  FalseLife: false_life,
  FeatherFall: feather_fall,
  FogCloud: fog_cloud,
  Jump: jump,
  MageArmor: mage_armor,
  MagicMissile: magic_missile,
  Shield: shield,
  SilentImage: silent_image,
  Sleep: sleep,
  Thunderwave: thunderwave,
};

warlockCantrips = {
  ChillTouch: chill_touch,
  MageHand: mage_hand,
  MinorIllusion: minor_illusion,
  Prestidigitation: prestidigitation,
  TrueStrike: true_strike,
};

warlockLevel1 = {
  CharmPerson: charm_person,
  ComprehendLanguages: comprehend_languages,
  ExpeditiousRetreat: expeditious_retreat,
  IllusoryScript: illusory_script,
  ProtectionfromEvilandGood: protection_from_evil_and_good,
  UnseenServant: unseen_servant,
};

wizardCantrips = {
  AcidSplash: acid_splash,
  ChillTouch: chill_touch,
  DancingLights: dancing_lights,
  Light: light,
  MageHand: mage_hand,
  Mending: mending,
  Message: message,
  MinorIllusion: minor_illusion,
  Prestidigitation: prestidigitation,
  RayofFrost: ray_of_frost,
  ShockingGrasp: shocking_grasp,
  TrueStrike: true_strike,
};

wizardLevel1 = {
  Alarm: alarm,
  BurningHands: burning_hands,
  CharmPerson: charm_person,
  ColorSpray: color_spray,
  ComprehendLanguages: comprehend_languages,
  DetectMagic: detect_magic,
  DisguiseSelf: disguise_self,
  ExpeditiousRetreat: expeditious_retreat,
  FalseLife: false_life,
  FeatherFall: feather_fall,
  FloatingDisk: floating_disk,
  FogCloud: fog_cloud,
  Grease: grease,
  HideousLaughter: hideous_laughter,
  Identify: identify,
  IllusoryScript: illusory_script,
  Jump: jump,
  Longstrider: longstrider,
  MageArmor: mage_armor,
  MagicMissile: magic_missile,
  ProtectionfromEvilandGood: protection_from_evil_and_good,
  Shield: shield,
  SilentImage: silent_image,
  Sleep: sleep,
  Thunderwave: thunderwave,
  UnseenServant: unseen_servant,
};

const validProficiencies = [
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival",
];

dwarf_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  dwarven_resilience: {
    name: "Dwarven Resilience",
    description:
      "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: ["poison"],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  dwarven_combat_training: {
    name: "Dwarven Combat Training",
    description:
      "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    addsExtraProficiencies: true,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [
      "battleaxe",
      "handaxe",
      "light hammer",
      "warhammer",
    ],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  stonecunning: {
    name: "Stonecunning",
    description:
      "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    addsExtraProficiencies: false, //// TODO: not sure how to handle this one
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

elf_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  keen_senses: {
    name: "Keen Senses",
    description: "You have proficiency in the Perception skill.",
    addsExtraProficiencies: true,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: ["perception"],
  },
  fey_ancestry: {
    name: "Fey Ancestry",
    description:
      "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  trance: {
    name: "Trance",
    description:
      "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

gnome_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  gnome_cunning: {
    name: "Gnome Cunning",
    description:
      "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  artificers_lore: {
    name: "Artificer’s Lore",
    description:
      "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  tinker: {
    name: "Tinker",
    description:
      "Tinker: You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it;  at that time, you can reclaim the materials used to create it.You can have up to three such devices active at a time.When you create a device, choose one of the following options: Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier.When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction.It makes noises as appropriate to the creature it represents. Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire.Using the device requires your action. Music Box: When opened, this music box plays a single song at a moderate volume.The box stops playing when it reaches the song’ s end or when it is closed.",
    addsExtraProficiencies: true,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: ["artisan’s tools (tinker’s tools)"],
    extraSkillProficiencies: [],
  },
};

halfling_racial = {
  lucky: {
    name: "Lucky",
    description:
      "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  brave: {
    name: "Brave",
    description:
      "You have advantage on saving throws against being frightened.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  halfling_nimbleness: {
    name: "Halfling Nimbleness",
    description:
      "You can move through the space of any creature that is of a size larger than yours.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  naturally_stealthy: {
    name: "Naturally Stealty",
    description:
      "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

dragonborn_racial = {
  draconic_ancestry: {
    name: "Draconic Ancestry",
    description:
      "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    addsExtraProficiencies: false,
    addsExtraResistance: false, //// TODO: think this is covered by the subrace bnonus?
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  breath_weapon: {
    name: "Breath Weapon",
    description:
      "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  damage_resistance: {
    name: "Damage Resistance",
    description:
      "You have resistance to the damage type associated with your draconic ancestry.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

halfElf_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  fey_ancestry: {
    name: "Fey Ancestry",
    description:
      "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  skill_versatility: {
    name: "Skill Versatility",
    description: "You gain proficiency in two skills of your choice.",
    addsExtraProficiencies: true,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [
      returnRandomArrayItem(validProficiencies),
      returnRandomArrayItem(validProficiencies),
    ],
  },
};
halfOrc_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  menacing: {
    name: "Menacing",
    description: "You gain proficiency in the Intimidation skill.",
    addsExtraProficiencies: true,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: ["Intimidation"],
  },
  relentless_endurance: {
    name: "Relentless Endurance",
    description:
      "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  savage_attacks: {
    name: "Savage Attacks",
    description:
      "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

tiefling_racial = {
  darkvision: {
    name: "Darkvision",
    description:
      "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  hellish_resistance: {
    name: "Hellish Resistance",
    description: "You have resistance to fire damage.",
    addsExtraProficiencies: false,
    addsExtraResistance: true,
    extraResistance: ["fire"],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
  infernal_legacy: {
    name: "Infernal Legacy",
    description:
      "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells",
    addsExtraProficiencies: false,
    addsExtraResistance: false,
    extraResistance: [],
    extraArmorProficiencies: [],
    extraWeaponProficiencies: [],
    extraToolProficiencies: [],
    extraSkillProficiencies: [],
  },
};

const simpleWeapons = {
  club: {
    name: "Club",
    cost: "1sp",
    damage: "1d4 bludgeoning",
    weight: "2lb",
    properties: "Light",
  },
  dagger: {
    name: "Dagger",
    cost: "2gp",
    damage: "1d4 piercing",
    weight: "1lb",
    properties: "Finesse, light, thrown (range 20/60)",
  },
  greatclub: {
    name: "Greatclub",
    cost: "2sp",
    damage: "1d8 bludgeoning",
    weight: "10 lb",
    properties: "Two-handed",
  },
  handaxe: {
    name: "Handaxe",
    cost: "5gp",
    damage: "1d6 slashing",
    weight: "2lb",
    properties: "Light, thrown (range 20/60)",
  },
  javelin: {
    name: "Javelin",
    cost: "5sp",
    damage: "1d6 piercing",
    weight: "2lb",
    properties: "Thrown (range 30/120)",
  },
  lightHammer: {
    name: "Light Hammer",
    cost: "2gp",
    damage: "1d4 bludgeoning",
    weight: "2lb",
    properties: "Light, thrown (range 20/60)",
  },
  mace: {
    name: "Mace",
    cost: "5gp",
    damage: "1d6 bludgeoning",
    weight: "4lb",
    properties: "",
  },
  quarterstaff: {
    name: "Quarterstaff",
    cost: "2sp",
    damage: "1d6 bludgeoning",
    weight: "4lb",
    properties: "Versatile (1d8)",
  },
  sickle: {
    name: "Sickle",
    cost: "1gp",
    damage: "1d4 slashing",
    weight: "2lb",
    properties: "Light",
  },
  spear: {
    name: "Spear",
    cost: "1gp",
    damage: "1d6 piercing",
    weight: "3lb",
    properties: "Thrown (range 20/60), versatile (1d8)",
  },
};

const simpleRangedWeapons = {
  lightCrossbow: {
    name: "Light Crossbow",
    cost: "25 gp",
    damage: "1d8 piercing",
    weight: "	5 lb",
    properties: "	Ammunition (range 80/320), loading, two-handed",
  },
  dart: {
    name: "Dart",
    cost: "5 cp",
    damage: "1d4 piercing",
    weight: "1/4 lb",
    properties: "Finesse, thrown (range 20/60)",
  },
  shortbow: {
    name: "Shortbow",
    cost: "25 gp",
    damage: "1d6 piercing",
    weight: "2 lb",
    properties: "Ammunition (range 80/320), two-handed",
  },
  sling: {
    name: "Sling",
    cost: "1 sp",
    damage: "1d4 bludgeoning",
    weight: "-",
    properties: "Ammunition (range 30/120)",
  },
};

const martialMeleeWeapons = {
  battleaxe: {
    name: "Battleaxe",
    cost: "10 gp",
    damage: "1d8 slashing",
    weight: "4 lb",
    properties: "Versatile (1d10)",
  },
  flail: {
    name: "Flail",
    cost: "10 gp",
    damage: "1d8 bludgeoning",
    weight: "2 lb",
    properties: "—",
  },
  glaive: {
    name: "Glaive",
    cost: "20 gp",
    damage: "1d10 slashing",
    weight: "6 lb",
    properties: "Heavy, reach, two-handed",
  },
  greataxe: {
    name: "Greataxe",
    cost: "30 gp",
    damage: "1d12 slashing",
    weight: "7 lb",
    properties: "Heavy, two-handed",
  },
  greatsword: {
    name: "Greatsword",
    cost: "50 gp",
    damage: "2d6 slashing",
    weight: "6 lb",
    properties: "Heavy, two-handed",
  },
  halberd: {
    name: "Halberd",
    cost: "20 gp",
    damage: "1d10 slashing",
    weight: "6 lb",
    properties: "Heavy, reach, two-handed",
  },
  lance: {
    name: "Lance",
    cost: "10 gp",
    damage: "1d12 piercing",
    weight: "6 lb",
    properties: "Reach, special",
  },
  longsword: {
    name: "Longsword",
    cost: "15 gp",
    damage: "1d8 slashing",
    weight: "3 lb",
    properties: "Versatile (1d10)",
  },
  maul: {
    name: "Maul",
    cost: "10 gp",
    damage: "2d6 bludgeoning",
    weight: "10 lb",
    properties: "Heavy, two-handed",
  },
  morningstar: {
    name: "Morningstar",
    cost: "15 gp",
    damage: "1d8 piercing",
    weight: "4 lb",
    properties: "-",
  },
  pike: {
    name: "Pike",
    cost: "5 gp",
    damage: "1d10 piercing",
    weight: "18 lb",
    properties: "Heavy, reach, two-handed",
  },
  rapier: {
    name: "Rapier",
    cost: "25 gp",
    damage: "1d8 piercing",
    weight: "2 lb",
    properties: "Finesse",
  },
  scimitar: {
    name: "Scimitar",
    cost: "25 gp",
    damage: "1d6 slashing",
    weight: "3 lb",
    properties: "Finesse, light",
  },
  shortsword: {
    name: "Shortsword",
    cost: "10 gp",
    damage: "1d6 piercing",
    weight: "2 lb",
    properties: "Finesse, light",
  },
  trident: {
    name: "Trident",
    cost: "5 gp",
    damage: "1d6 piercing",
    weight: "4 lb",
    properties: "Thrown (range 20/60), versatile (1d8)",
  },
  warPick: {
    name: "War Pick",
    cost: "5 gp",
    damage: "1d8 piercing",
    weight: "2 lb",
    properties: "—",
  },
  warhammer: {
    name: "Warhammer",
    cost: "15 gp",
    damage: "1d8 bludgeoning",
    weight: "2 lb",
    properties: "Versatile (1d10)",
  },
  whip: {
    name: "Whip",
    cost: "2 gp",
    damage: "1d4 slashing",
    weight: "3 lb",
    properties: "Finesse, reach",
  },
};

const martialRangedWeapons = {
  blowgun: {
    name: "Blowgun",
    cost: "10 gp",
    damage: "1 piercing",
    weight: "1 lb",
    properties: "Ammunition (range 25/100), loading",
  },
  handCrossbow: {
    name: "Hand Crossbow",
    cost: "75 gp",
    damage: "1d6 piercing",
    weight: "3 lb",
    properties: "Ammunition (range 30/120), light, loading",
  },
  heavyCrossbow: {
    name: "Heavy Crossbow",
    cost: "50 gp",
    damage: "1d10 piercing",
    weight: "18 lb",
    properties: "Ammunition (range 100/400), heavy, loading two-handed",
  },
  longbow: {
    name: "Longbow",
    cost: "50 gp",
    damage: "1d8 piercing weight:2 lb",
    properties: "Ammunition (range 150/600), heavy, two-handed",
  },
  net: {
    name: "Net",
    cost: "1 gp",
    damage: "—",
    weight: "3 lb",
    properties: "Special, thrown (range 5/15)",
  },
};

function returnRandomWeaponFromCollection(collection) {
  let collectionLength = Object.values(collection).length;
  collectionLength--;
  let randomNumber = returnRandomNumberInRange(0, collectionLength);

  return Object.values(collection)[randomNumber];
}

function returnRandomWeaponsFromCollection(collection, ammount) {
  let weapons = [];

  for (i = 0; i < ammount; i++) {
    weapons.push(returnRandomWeaponFromCollection(collection));
  }

  return weapons;
}

const lightArmor = {
  padded: {
    name: "Padded Armor",
    Cost: "5gp",
    baseArmorClass: 11,
    additionalModifier: "DEX",
    modifierLimit: null,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: true,
    Weight: 8,
    category: "light armor",
  },
  leather: {
    name: "Leather Armor",
    Cost: "10 gp",
    baseArmorClass: 11,
    additionalModifier: "DEX",
    modifierLimit: null,
    strengthRequirement: false,
    stealthDisadvantage: false,
    Weight: 10,
    category: "light armor",
  },
  studdedLeather: {
    name: "Studded Leather Armor",
    Cost: "45 gp",
    baseArmorClass: 12,
    additionalModifier: "DEX",
    modifierLimit: null,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: false,
    Weight: 13,
    category: "light armor",
  },
};

const mediumArmor = {
  hide: {
    name: "Hide Armor",
    Cost: "10gp",
    baseArmorClass: 12,
    additionalModifier: "DEX",
    modifierLimit: 2,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: false,
    Weight: 12,
    category: "medium armor",
  },
  chainShirt: {
    name: "Chain Shirt",
    Cost: "50gp",
    baseArmorClass: 13,
    additionalModifier: "DEX",
    modifierLimit: 2,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: false,
    Weight: 20,
    category: "medium armor",
  },
  scaleMail: {
    name: "Scale Mail",
    Cost: "50gp",
    baseArmorClass: 14,
    additionalModifier: "DEX",
    modifierLimit: 2,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: true,
    Weight: 45,
    category: "medium armor",
  },
  breastplate: {
    name: "Breastplate",
    Cost: "400gp",
    baseArmorClass: 15,
    additionalModifier: "DEX",
    modifierLimit: 2,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: false,
    Weight: 40,
    category: "medium armor",
  },
  halfPlate: {
    name: "HalfPlate",
    Cost: "750gp",
    baseArmorClass: 11,
    additionalModifier: "DEX",
    modifierLimit: null,
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: true,
    Weight: 8,
    category: "medium armor",
  },
};

const heavyArmor = {
  ringMail: {
    name: "Ring Mail",
    Cost: "30 gp",
    baseArmorClass: "14",
    strengthRequirement: false,
    strengthRequirementValue: null,
    stealthDisadvantage: true,
    Weight: 40,
    category: "heavy armor",
  },
  chainMail: {
    name: "Chain Mail",
    Cost: "75 gp",
    baseArmorClass: "16",
    additionalModifier: null,
    strengthRequirement: true,
    strengthRequirementValue: 13,
    stealthDisadvantage: true,
    Weight: 55,
    category: "heavy armor",
  },
  splint: {
    name: "Splint Mail",
    Cost: "200 gp",
    baseArmorClass: "17",
    additionalModifier: null,
    strengthRequirement: true,
    strengthRequirementValue: 15,
    stealthDisadvantage: true,
    Weight: 60,
    category: "heavy armor",
  },
  plate: {
    name: "Plate Mail",
    Cost: "1500 gp",
    baseArmorClass: "18",
    additionalModifier: null,
    strengthRequirement: true,
    strengthRequirementValue: 15,
    stealthDisadvantage: true,
    Weight: 65,
    category: "heavy armor",
  },
};

const shields = {
  shield: {
    name: "Shield",
    Cost: "10gp",
  },

  woodenShield: {
    name: "Wooden Shield",
    cost: "10gp",
  },
};

//for the time being clerics, paladins and fighters are the only classes that have the option to wear armor with a str requirement at level 1, so the other class functions can just apply whatever the best armor is avalible to the other classes without performing a str check
function assignArmor(character) {
  const charName = character.characterClass.name;
  const armorProficiencies = character.characterClass.armorProficiencies;
  const strengthScore = character.abilityScores.str;

  switch (true) {
    case charName === "bard":
      return getBardArmor(armorProficiencies, strengthScore);
    case charName === "barbarian":
      return getBarbarianArmor(armorProficiencies, strengthScore);
    case charName === "monk":
      return getMonkArmor(armorProficiencies, strengthScore);
    case charName === "cleric":
      return getClericArmor(armorProficiencies, strengthScore);
    case charName === "druid":
      return getDruidArmor(armorProficiencies, strengthScore);
    case charName === "fighter":
      return getFighterArmor(armorProficiencies, strengthScore);
    case charName === "paladin":
      return getPaladinArmor(armorProficiencies, strengthScore);
    case charName === "ranger":
      return getRangerArmor(armorProficiencies, strengthScore);
    case charName === "rogue":
      return getRogueArmor(armorProficiencies, strengthScore);
    case charName === "sorcerer":
      return getSorcererArmor(armorProficiencies, strengthScore);
    case charName === "warlock":
      return getWarlockArmor(armorProficiencies, strengthScore);
    case charName === "wizard":
      return getWizardArmor(armorProficiencies, strengthScore);

      break;
    default:
  }
}

function getBardArmor(armorProficiencies, strengthScore) {
  return lightArmor.leather;
}

function getBarbarianArmor(armorProficiencies, strengthScore) {
  return;
}

function getMonkArmor(armorProficiencies, strengthScore) {
  return;
}

function getClericArmor(armorProficiencies, strengthScore) {
  //kind of a pointless loop as SRD clerics can only be life domain therefore will always have heavy armor prof, but who knows what the future holds I guess
  if (armorProficiencies.includes("heavy armor") && strengthScore >= 13) {
    return heavyArmor.chainMail;
  } else {
    return mediumArmor.scaleMail;
  }
}

function getDruidArmor(armorProficiencies, strengthScore) {
  return lightArmor.leather;
}

function getFighterArmor(armorProficiencies, strengthScore) {
  if (strengthScore >= 13) {
    return heavyArmor.chainMail;
  } else {
    return lightArmor.leather;
  }
}

function getPaladinArmor(armorProficiencies, strengthScore) {
  return heavyArmor.chainMail;
}

function getRangerArmor(armorProficiencies, strengthScore) {
  return returnRandomArrayItem([mediumArmor.scaleMail, lightArmor.leather]);
}

function getRogueArmor(armorProficiencies, strengthScore) {
  return lightArmor.leather;
}

function getSorcererArmor(armorProficiencies, strengthScore) {
  return;
}

function getWarlockArmor(armorProficiencies, strengthScore) {
  return lightArmor.leather;
}

function getWizardArmor(armorProficiencies, strengthScore) {
  return;
}

const skillProficiencies = [
  "athletics",
  "acrobatics",
  "sleight of hand",
  "stealth",
  "arcana",
  "history",
  "investigation",
  "nature",
  "religion",
  "animal handling",
  "insight",
  "medicine",
  "perception",
  "survival",
  "deception",
  "intimidation",
  "performance",
  "persuasion",
];

const barbSkillProficiencies = [
  "animal Handling",
  "athletics",
  "intimidation",
  "nature",
  "perception",
  "survival",
];

const monkSkillProficiencies = [
  "acrobatics",
  "athletics",
  "history",
  "insight",
  "religion",
  "stealth",
];

const clericSkillProficiencies = [
  "history",
  "insight",
  "medicine",
  "persuasion",
  "religion",
];

const druidSkillProficiencies = [
  "arcana",
  "animal handling",
  "insight",
  "medicine",
  "nature",
  "perception",
  "religion",
  "survival",
];

const fighterSkillProficiencies = [
  "acrobatics",
  "animal handling",
  "athletics",
  "history",
  "insight",
  "intimidation",
  "perception",
  "survival",
];

const paladinSkillProficiencies = [
  "athletics",
  "insight",
  "intimidation",
  "medicine",
  "persuasion",
  "religion",
];

const rangerSkillProficiencies = [
  "acrobatics",
  "animal handling",
  "athletics",
  "history",
  "insight",
  "intimidation",
  "perception",
  "survival",
];

const rogueSkillProficiencies = [
  "acrobatics",
  "athletics",
  "deception",
  "insight",
  "intimidation",
  "investigation",
  "perception",
  "performance",
  "persuasion",
  "sleight of hand",
  "stealth",
];

const sorcererProficiencies = [
  "arcana",
  "deception",
  "insight",
  "intimidation",
  "persuasion",
  "religion",
];

const warlockProficiencies = [
  "arcana",
  "deception",
  "history",
  "intimidation",
  "investigation",
  "nature",
  "religion",
];

const wizardProficiencies = [
  "arcana",
  "history",
  "insight",
  "investigation",
  "medicine",
  "religion",
];

function returnRandomProficiencies(collection, count) {
  var proficiencies = [];

  for (i = 0; i < count; i++) {
    let pickedSkill = returnRandomArrayItem(collection);

    if (proficiencies.includes(pickedSkill) === false) {
      proficiencies.push(pickedSkill);
    } else {
      i--;
    }
  }

  return proficiencies;
}

function addItemXTimes(item, ammount) {
  for (x = ammount; x > 0; x--) {
    equipment.tools.push(weapons.simpleWeapons.javelin);
  }
}

function addClassFeatures(className) {
  let classAbilities = [];

  if (className === "bard") {
    classAbilities.push("spellcasting", "ritual casting", "bardic_inspiration");
  } else if (className === "barbarian") {
    classAbilities.push("rage", "unarmored defense");
  } else if (className === "fighter") {
    classAbilities.push("second wind");
    classAbilities.push(
      returnRandomArrayItem([
        "archery",
        "defense",
        "dueling",
        "great weapon fighting",
        "protection",
        "two weapon fighting",
      ])
    );
  } else if (className === "cleric") {
    classAbilities.push("spellcasting", "disciple of life");
  } else if (className === "druid") {
    classAbilities.push("spellcasting", "druidic");
  } else if (className === "monk") {
    classAbilities.push("unarmored defense", "martial arts");
  } else if (className === "paladin") {
    classAbilities.push("divine sense", "lay on hands");
  } else if (className === "ranger") {
    let rangerFavoredEnemy = [
      "aberrations",
      "beasts",
      "celestials",
      "constructs",
      "dragons",
      "elementals",
      "fey",
      "fiends",
      "giants",
      "monstrosities",
      "oozes",
      "plants",
      "undead",
    ];
    classAbilities.push(
      "natural explorer",
      `favored enemy:${returnRandomArrayItem(rangerFavoredEnemy)}`
    );
  } else if (className === "rogue") {
    classAbilities.push("expertise", "sneak attack", "thieves cant");
  } else if (className === "sorcerer") {
    classAbilities.push("spellcasting", "sorcerous origin");
  } else if (className === "warlock") {
    classAbilities.push("otherworldly patron", "pact magic");
  } else if (className === "wizard") {
    classAbilities.push("spellcasting", "arcane recovery");
  }

  return classAbilities;
}

function addAmmunition(type, count) {
  if (type == "arrows") {
    return (arrows = { name: "arrows", count: count });
  } else if (type === "bolts") {
    return (bolts = { name: "bolts", count: count });
  }
}

function createBard() {
  this.name = "bard";
  this.primaryAbility = "cha";
  this.castingAbility = "cha";
  this.hitDie = 8;
  this.savingThrows = ["dex", "cha"];
  this.armorProficiencies = ["light armor"];
  this.weaponProficiencies = [
    "simple weapons",
    "hand crossbows",
    "longswords",
    "rapiers",
    "shortswords",
  ];
  this.toolProficiencies = returnRandomInstruments(2);
  this.skillProficiencies = returnRandomProficiencies(skillProficiencies, 3);

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  this.equipment.primaryWeapon.push(
    returnRandomArrayItem([
      martialMeleeWeapons.rapier,
      martialMeleeWeapons.longsword,
    ])
  );

  this.equipment.additionalWeapons.push(simpleWeapons.dagger);

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Diplomat's Pack"),
    returnEquipmentPack("Entertainer's Pack"),
  ]);
}

function createBarbarian() {
  this.name = "barbarian";
  this.primaryAbility = "str";
  this.hitDie = 12;
  this.savingThrows = ["str", "dex"];
  this.armorProficiencies = ["light armor", "medium armor", "shields"];
  this.weaponProficiencies = ["simple weapons", "martial weapons"];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(
    barbSkillProficiencies,
    2
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  this.equipment.tools = returnEquipmentPack("Explorer's Pack");

  this.equipment.primaryWeapon.push(
    returnRandomArrayItem([
      martialMeleeWeapons.greataxe,
      returnRandomWeaponsFromCollection(martialMeleeWeapons, 1),
    ])
  );

  this.equipment.additionalWeapons.push(simpleWeapons.javelin);
  this.equipment.additionalWeapons.push(simpleWeapons.javelin);
  this.equipment.additionalWeapons.push(simpleWeapons.javelin);
  this.equipment.additionalWeapons.push(simpleWeapons.javelin);

  if (returnRandomNumberInRange(0, 1) === 0) {
    for (x = 0; x < 2; x++) {
      this.equipment.additionalWeapons.push(simpleWeapons.handaxe);
    }
  } else {
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  }
}

function createMonk() {
  this.name = "monk";
  this.primaryAbility = "dex";
  this.hitDie = 8;
  this.savingThrows = ["str", "dex"];
  this.armorProficiencies = [];
  this.weaponProficiencies = ["simple weapons", "shortswords"];
  this.toolProficiencies = []; //add artisan tools to the selection
  this.skillProficiencies = returnRandomProficiencies(
    monkSkillProficiencies,
    2
  );

  this.toolProficiencies.push(returnRandomInstrument());

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  this.equipment.primaryWeapon.push(
    returnRandomArrayItem([
      martialMeleeWeapons.shortsword,
      returnRandomWeaponFromCollection(simpleWeapons),
    ])
  );

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Dungeoneer's Pack"),
    returnEquipmentPack("Explorer's Pack"),
  ]);
  for (i = 10; i > 0; i--) {
    this.equipment.additionalWeapons.push(simpleRangedWeapons.dart);
  }
}

function createCleric() {
  this.name = "cleric";
  this.primaryAbility = "wis";
  this.hitDie = 8;
  this.savingThrows = ["wis", "cha"];
  this.armorProficiencies = ["light armor", "medium armor", "shields"];
  this.weaponProficiencies = ["simple weapons"];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(
    clericSkillProficiencies,
    2
  );

  /// Life domain features, as the 5E SRD only provides the life domain as an option for clerics, this will need to be fleshed out for custom domains if requested.

  this.armorProficiencies.push("heavy armor");

  /////----------------------------------------------------------------------------------------------------------

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  this.equipment.primaryWeapon.push(simpleWeapons.mace);

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(
      simpleRangedWeapons.lightCrossbow,
      addAmmunition("bolts", 20)
    );
  } else {
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  }

  this.equipment.shield.push(shields.shield);

  this.equipment.tools.push(
    returnRandomArrayItem([
      returnEquipmentPack("Explorer's Pack"),
      returnEquipmentPack("Priest's Pack"),
    ])
  );
  this.equipment.tools.push({ name: "Holy Symbol" });
}

function createDruid() {
  this.name = "druid";
  this.primaryAbility = "wis";
  this.hitDie = 8;
  this.savingThrows = ["int", "wis"];
  this.armorProficiencies = ["light armor", "medium armor", "shields"];
  this.weaponProficiencies = [
    "clubs",
    "daggers",
    "darts",
    "javelins",
    "maces",
    "quarterstaffs",
    "scimitars",
    "sickles",
    "slings",
    "spears",
  ];
  this.toolProficiencies = [{ name: "herbalism kit" }];
  this.skillProficiencies = returnRandomProficiencies(
    druidSkillProficiencies,
    2
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  this.equipment.primaryWeapon.push(
    returnRandomArrayItem([
      martialMeleeWeapons.scimitar,
      returnRandomWeaponFromCollection(simpleWeapons),
    ])
  );

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  } else {
    this.equipment.shield.push(shields.woodenShield);
  }

  this.equipment.tools = returnEquipmentPack("Explorer's Pack");
  this.equipment.tools.push({ name: "Druidic Focus" });
}

function createFighter() {
  this.name = "fighter";
  this.primaryAbility = returnRandomArrayItem(["str", "dex"]);
  this.hitDie = 10;
  this.savingThrows = ["str", "con"];
  this.armorProficiencies = [
    "light armor",
    "medium armor",
    "heavy armor",
    "shields",
  ];
  this.weaponProficiencies = ["simple weapons", "martial weapons"];
  this.toolProficiencies = [];
  //TODO test this, noticed it can return null
  this.skillProficiencies = returnRandomProficiencies(
    fighterSkillProficiencies,
    2
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };
  if (returnRandomNumberInRange(0, 1) === 0) {
    //// TODO: Change this to only select weapons that can be used in one hand, or both.
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );

    this.equipment.shield.push(shields.shield);
  } else {
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );
  }

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(
      simpleRangedWeapons.lightCrossbow,
      addAmmunition("bolts", 20)
    );
  } else {
    this.equipment.additionalWeapons.push(simpleWeapons.handaxe);
    this.equipment.additionalWeapons.push(simpleWeapons.handaxe);
  }
  //TODO: this should only be applied if fighter has leather armor
  // this.equipment.weapons.push(
  //   martialRangedWeapons.longbow,
  //   addAmmunition("arrows", 20)
  // );
  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Dungeoneer's Pack"),
    returnEquipmentPack("Explorer's Pack"),
  ]);
}

function createPaladin() {
  this.name = "paladin";
  this.primaryAbility = ["str", "cha"];
  this.hitDie = 10;
  this.savingThrows = ["wis", "cha"];
  this.armorProficiencies = [
    "light armor",
    "medium armor",
    "heavy armor",
    "shields",
  ];
  this.weaponProficiencies = ["simple weapons", "martial weapons"];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(
    paladinSkillProficiencies,
    2
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  if (returnRandomNumberInRange(0, 1) === 0) {
    //// TODO: maybe change this to only select weapons that can be used in one hand, or both.
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );
    this.equipment.shield.push(shields.shield);
  } else {
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(martialMeleeWeapons)
    );
  }

  if (returnRandomNumberInRange(0, 1) === 0) {
    for (x = 4; x > 0; x--) {
      this.equipment.additionalWeapons.push(simpleWeapons.javelin);
    }
  } else {
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  }

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Priest's Pack"),
    returnEquipmentPack("Explorer's Pack"),
  ]);
}

function createRanger() {
  this.name = "ranger";
  this.primaryAbility = "dex";
  this.hitDie = 10;
  this.savingThrows = ["dex", "str"];
  this.armorProficiencies = ["light armor", "medium armor", "shields"];
  this.weaponProficiencies = ["simple weapons", "martial weapons"];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(
    rangerSkillProficiencies,
    2
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  //If this is change to bother weapons being added to primary, equipmentToString() will have to be updated accordingly
  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.primaryWeapon.push(martialMeleeWeapons.shortsword);
    this.equipment.additionalWeapons.push(martialMeleeWeapons.shortsword);
  } else {
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  }

  this.equipment.additionalWeapons.push(martialRangedWeapons.longbow);
  this.equipment.additionalWeapons.push(addAmmunition("arrows", 20));

  this.equipment.tools.push(
    returnRandomArrayItem([
      returnEquipmentPack("Dungeoneer's Pack"),
      returnEquipmentPack("Explorer's Pack"),
    ])
  );
}

function createRogue() {
  this.name = "rogue";
  this.primaryAbility = "dex";
  this.hitDie = 8;
  this.savingThrows = ["dex", "int"];
  this.armorProficiencies = ["light armor", "medium armor", "shields"];
  this.weaponProficiencies = [
    "simple weapons",
    "hand crossbows",
    "longswords",
    "rapiers",
    "shortswords",
  ];
  this.toolProficiencies = [{ name: "thieves' tools" }];
  this.skillProficiencies = returnRandomProficiencies(
    rogueSkillProficiencies,
    4
  );

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.primaryWeapon.push(martialMeleeWeapons.shortsword);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
  } else {
    this.equipment.primaryWeapon.push(martialMeleeWeapons.rapier);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
  }

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(martialMeleeWeapons.shortsword);
  } else {
    this.equipment.additionalWeapons.push(simpleRangedWeapons.shortbow);
    this.equipment.additionalWeapons.push(addAmmunition("arrows", 20));
  }

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Dungeoneer's Pack"),
    returnEquipmentPack("Explorer's Pack"),
    returnEquipmentPack("Burglar's Pack"),
  ]);

  this.equipment.tools.push({ name: "thieves tools" });
}

function createSorcerer() {
  this.name = "sorcerer";
  this.primaryAbility = "cha";
  this.hitDie = 8;
  this.savingThrows = ["con", "cha"];
  this.armorProficiencies = [];
  this.weaponProficiencies = [
    "daggers",
    "darts",
    "slings",
    "quarterstaffs",
    "light crossbows",
  ];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(sorcererProficiencies, 2);

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(simpleRangedWeapons.lightCrossbow);
    this.equipment.additionalWeapons.push(addAmmunition("bolts", 20));
    this.equipment.primaryWeapon.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
  } else {
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
  }

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Dungeoneer's Pack"),
    returnEquipmentPack("Explorer's Pack"),
  ]);

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.tools.push({ name: "component pouch" });
  } else {
    this.equipment.tools.push({ name: "arcane focus" });
  }
}

function createWarlock() {
  this.name = "warlock";
  this.primaryAbility = "cha";
  this.hitDie = 8;
  this.savingThrows = ["wis", "cha"];
  this.armorProficiencies = ["light armor"];
  this.weaponProficiencies = ["simple weapons"];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(warlockProficiencies, 2);

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.additionalWeapons.push(simpleRangedWeapons.lightCrossbow);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(addAmmunition("bolts", 20));
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  } else {
    this.equipment.primaryWeapon.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(simpleWeapons.dagger);
    this.equipment.additionalWeapons.push(
      returnRandomWeaponFromCollection(simpleWeapons)
    );
  }

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Dungeoneer's Pack"),
    returnEquipmentPack("Scholar's Pack"),
  ]);

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.tools.push({ name: "component pouch" });
  } else {
    this.equipment.tools.push({ name: "arcane focus" });
  }
}

function createWizard() {
  this.name = "wizard";
  this.primaryAbility = "int";
  this.hitDie = 6;
  this.savingThrows = ["int", "wis"];
  this.armorProficiencies = [];
  this.weaponProficiencies = [
    "daggers",
    "darts",
    "slings",
    "quarterstaffs",
    "light crossbows",
  ];
  this.toolProficiencies = [];
  this.skillProficiencies = returnRandomProficiencies(wizardProficiencies, 2);

  this.equipment = {
    primaryWeapon: [],
    additionalWeapons: [],
    tools: [],
    armor: [],
    shield: [],
  };

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.primaryWeapon.push(simpleWeapons.quarterstaff);
  } else {
    this.equipment.primaryWeapon.push(simpleWeapons.dagger);
  }

  if (returnRandomNumberInRange(0, 1) === 0) {
    this.equipment.tools.push({ name: "component pouch" });
  } else {
    this.equipment.tools.push({ name: "arcane focus" });
  }

  this.equipment.tools = returnRandomArrayItem([
    returnEquipmentPack("Explorer's Pack"),
    returnEquipmentPack("Scholar's Pack"),
  ]);

  this.equipment.tools.push({ name: "spellbook" });
}

classList = [
  new createBard(),
  new createBarbarian(),
  new createMonk(),
  new createCleric(),
  new createDruid(),
  new createFighter(),
  new createPaladin(),
  new createRanger(),
  new createRogue(),
  new createSorcerer(),
  new createWarlock(),
  new createWizard(),
];

//Returns a random number between the two given arguements, returns error message if incorrect arguements given
function returnRandomNumberInRange(minValue, maxValue) {
  if (minValue > maxValue || minValue === undefined || maxValue === undefined) {
    return "Unexpected arguements, please provide minimum and maximum valuses in that order";
  } else {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
}

//returns a floating point value between the given arguements
function returnRandomFloatInRange(minValue, maxValue) {
  return Math.random() * (maxValue - minValue) + minValue;
}

//Returns a random element of the array provided as the arguement
function returnRandomArrayItem(array) {
  return array[returnRandomNumberInRange(0, array.length - 1)];
}

function returnRandomObjectPropertiesAndValues(collection, ammount) {
  let spells = [];

  for (i = 0; i < ammount; i++) {
    let rand = returnRandomNumberInRange(
      0,
      Object.values(collection).length - 1
    );
    spells.push(Object.values(collection)[rand]);
  }
  return spells;
}

const validClassList = [
  "bard",
  "barbarian",
  "cleric",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
  "druid",
];

const validRaceList = [
  "dragonborn",
  "dwarf",
  "elf",
  "gnome",
  "half-elf",
  "half-orc",
  "halfling",
  "human",
  "tiefling",
];

// TODO: refactor, must be a cleaner way to do this
//Takes a string representing a dice roll, such as "2d4" and returns a value in inches
function returnHeightAndWeight(height, weight) {
  let rollAmountHeight = height.substring(0, height.indexOf("d"));
  let diceTypeHeight = height.substring(height.indexOf("d") + 1);

  let rollAmountWeight = weight.substring(0, weight.indexOf("d"));
  let diceTypeWeight = weight.substring(weight.indexOf("d") + 1);

  let sumOfRolls = null;
  let heightWeight = [];

  for (i = 1; i <= rollAmountHeight; i++) {
    sumOfRolls += returnRandomNumberInRange(1, diceTypeHeight);
  }

  //conversion from feet to inches, had to do some ugly stuff to stop super long floats
  heightPrep = parseFloat((sumOfRolls / 12).toFixed(1));
  heightPrep = heightPrep.toString().substring(0, 2);
  heightPrep = parseFloat(heightPrep);
  heightWeight.push(heightPrep);

  sumOfRolls = null; //reset sumOfRolls

  for (j = 1; j <= rollAmountWeight; j++) {
    sumOfRolls += returnRandomNumberInRange(1, diceTypeWeight);
  }

  heightWeight.push(heightWeight[0] * sumOfRolls);

  return heightWeight;
}

// Returns a random equipment pack, or a specific one specified in the argument
function returnEquipmentPack(pack) {
  let randItem = void 0;
  if (pack == undefined) {
    randItem = returnRandomArrayItem(equipmentPacks);
  } else {
    randItem = equipmentPacks.filter((obj) => obj.name === pack);
  }
  return randItem;
}

function returnRandomInstrument() {
  return returnRandomArrayItem(musicalInstruments);
}

// TODO: this function can be generalised along with returnRandomProficiencies
function returnRandomInstruments(count) {
  let instruments = [];

  for (i = 0; i < count; i++) {
    let pickedInstrument = returnRandomArrayItem(musicalInstruments);

    if (instruments.includes(pickedInstrument) === false) {
      instruments.push(pickedInstrument);
    } else {
      i--;
    }
  }

  return instruments;
}

/**-------------------------------------------------------------------------------
 * @description Returns a random alignment
 * // TODO: make the assigned alignments fall in line with the player hand book guide
 * @returns {String} a random alignment as a string
 */ function returnRandomAlignment() {
  return returnRandomArrayItem([
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ]);
}

function returnCharacterBackground(char) {
  //SRD only provides one background
  let background = {
    name: "acolyte",
    additionalProficiencies: ["insight", "religion"],
    additionalLanguages: [
      returnRandomArrayItem(standardLanguages),
      returnRandomArrayItem(standardLanguages),
    ],
    equipment: [
      { name: "holy symbol" },
      { name: "prayer book" },
      { name: "prayer wheel" },
      { name: "5 sticks of incense" },
      { name: "vestments" },
      { name: "common clothes" },
    ],
    money: { count: 15, type: "Gold" },
  };

  while (
    background.additionalLanguages[0] === background.additionalLanguages[1]
  ) {
    background.additionalLanguages.pop();
    background.additionalLanguages.push(
      returnRandomArrayItem(standardLanguages)
    );
  }

  return background;
}

/**
 * @description Calculates a random character age based on the provided race type
 * @param {String} race - the character race
 * @returns {Number} the calculated age as a whole number
 */

function returnCharacterAge(race) {
  switch (true) {
    case race === "dragonborn":
      return returnRandomNumberInRange(15, 80);
    case race === "dwarf":
      return returnRandomNumberInRange(50, 350);
    case race === "elf":
      return returnRandomNumberInRange(100, 750);
    case race === "gnome":
      return returnRandomNumberInRange(40, 450);
    case race === "half-elf":
      return returnRandomNumberInRange(20, 180);
    case race === "half-orc":
      return returnRandomNumberInRange(14, 75);
    case race === "halfling":
      return returnRandomNumberInRange(20, 250);
    case race === "human":
      return returnRandomNumberInRange(16, 100);
    case race === "tiefling":
      return returnRandomNumberInRange(16, 120);
    default:
      return "Fell though switch case [returnCharacterAge()]";
  }
}

/**
 * @description Applies racial bonuses to the character object based on race
 * @param {Object} char - the character object
 * @returns {Object} the ammended character object
 */

function applySubraceBonuses(char) {
  character = char;

  switch (true) {
    case character.race === "dragonborn":
      applyDragonbornRaceBonuses(character);
      break;
    case character.race === "dwarf":
      applyDwarfRaceBonuses(character);
      break;
    case character.race === "elf":
      applyElfRaceBonuses(character);
      break;
    case character.race === "gnome":
      applyGnomeRaceBonuses(character);
      break;
    case character.race === "half-elf":
      applyHalfElfRaceBonuses(character);
      break;
    case character.race === "half-orc":
      applyHalfOrcRaceBonuses(character);
      break;
    case character.race === "halfling":
      applyHalflingRaceBonuses(character);
      break;
    case character.race === "human":
      applyHumanRaceBonuses(character);
      break;
    case character.race === "tiefling":
      applyTieflingRaceBonuses(character);
      break;
    default:
      character.race = "Fell though switch case [applySubraceBonuses()]";
  }

  return character;
}

// TODO: add subraces based on https://dnd5e.fandom.com/wiki/Character_Details
// TODO: surely this can be refactored?
function returnCharacterHeight(race) {
  let additionalHeightAndWeight = [];

  let heightAndWeight = [];

  switch (true) {
    case race === "dragonborn":
      additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d6");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 5.6 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 175 + " lbs";
      break;
    case race === "dwarf":
      additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d6");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 3.8 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 115 + " lbs";
      break;
    case race === "elf":
      additionalHeightAndWeight = returnHeightAndWeight("2d10", "1d4");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 4.6 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 90 + " lbs";
      break;
    case race === "gnome":
      additionalHeightAndWeight = returnHeightAndWeight("2d4", "1d1");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 2.11 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 35 + " lbs";
      break;
    case race === "half-elf":
      additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d4");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 4.9 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
      break;
    case race === "half-orc":
      additionalHeightAndWeight = returnHeightAndWeight("2d10", "2d6");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 4.1 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 140 + " lbs";
      break;
    case race === "halfling":
      additionalHeightAndWeight = returnHeightAndWeight("2d4", "1d1");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 2.7 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 35 + " lbs";
      break;
    case race === "human":
      additionalHeightAndWeight = returnHeightAndWeight("2d10", "2d4");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 4.8 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
      break;
    case race === "tiefling":
      additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d4");
      heightAndWeight[0] = additionalHeightAndWeight[0] + 4.9 + " ft";
      heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
      break;

    default:
      return "invalid race provided as function arguement [returnCharacterHeight()]";
  }

  return heightAndWeight;
}

/**
 * @description Returns a dragonborns's ancestry details based on the colour provided as a param
 * @param {Object} draconicAncestry - the colour value provided as a string
 * @returns {Object} and object containing the colour/damageType/breathWeapon details
 */

function returnDragonbornFeatures(draconicAncestry) {
  let draconicAncestryFeatures = [
    {
      colour: "Black",
      damageType: "Acid",
      breathWeapon: "5 ft by 30 ft line (Dex save)",
    },
    {
      colour: "Blue",
      damageType: "Lightning",
      breathWeapon: "5 ft by 30 ft line (Dex save)",
    },
    {
      colour: "Brass",
      damageType: "Fire",
      breathWeapon: "5 ft by 30 ft line (Dex save)",
    },
    {
      colour: "Bronze",
      damageType: "Lightning",
      breathWeapon: "5 ft by 30 ft line (Dex save)",
    },
    {
      colour: "Copper",
      damageType: "Acid",
      breathWeapon: "5 ft by 30 ft line (Dex save)",
    },
    {
      colour: "Gold",
      damageType: "Fire",
      breathWeapon: "15 ft cone (Dex save)",
    },
    {
      colour: "Green",
      damageType: "Poison",
      breathWeapon: "15 ft cone (Con save)",
    },
    {
      colour: "Red",
      damageType: "Fire",
      breathWeapon: "15 ft cone (Dex save)",
    },
    {
      colour: "Silver",
      damageType: "Cold",
      breathWeapon: "15 ft cone (Con save)",
    },
    {
      colour: "White",
      damageType: "Cold",
      breathWeapon: "15 ft cone (Con save)",
    },
  ];

  let ancestryDetails = draconicAncestryFeatures.filter((arrayObject) => {
    return arrayObject.colour === draconicAncestry;
  });

  return ancestryDetails;
}

function applyDragonbornRaceBonuses() {
  character.abilityScores.str += 2;
  character.abilityScores.cha += 1;
  character.speed = 30;
  character.draconicAncestry = returnRandomArrayItem([
    "Black",
    "Blue",
    "Brass",
    "Bronze",
    "Copper",
    "Gold",
    "Green",
    "Red",
    "Silver",
    "White",
  ]);
  character.resistances = returnDragonbornFeatures(
    character.draconicAncestry
  )[0].damageType;
  character.breathWeapon = returnDragonbornFeatures(
    character.draconicAncestry
  )[0].breathWeapon;
  character.racialAbilities = dragonborn_racial;
  character.languages = ["Common", "Draconic"];
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyDwarfRaceBonuses() {
  character.abilityScores.con += 2;
  character.speed = 25;
  character.racialAbilities = dwarf_racial;
  character.languages = ["Common", "Dwarvish"];
  character.resistances = "Poison";
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyElfRaceBonuses() {
  character.abilityScores.dex += 2;
  character.speed = 30;
  character.racialAbilities = elf_racial;
  character.languages = ["Common", "Elven"];
  character.resistances = null;
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyGnomeRaceBonuses() {
  character.abilityScores.int += 2;
  character.speed = 25;
  character.racialAbilities = gnome_racial;
  character.languages = ["Common", "Gnomish"];
  character.resistances = null;
  character.sizeClass = "Small";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyHalfElfRaceBonuses() {
  //Half-Elves get an extra +1 in two other ability scores of their choosing
  //the +1 cannot be used in CHA or in the same ability score twice
  let abilityScoreOptions = ["str", "con", "dex", "wis", "int"];
  var returnedScores = [];
  //Push one random value from abilityScoreOptions to returnedScores
  returnedScores.push(returnRandomArrayItem(abilityScoreOptions));
  //then remove that ability score from abilityScoreOptions so we dont pick it twice
  abilityScoreOptions.splice(abilityScoreOptions.indexOf(returnedScores[0]), 1);
  //Push the second score
  returnedScores.push(returnRandomArrayItem(abilityScoreOptions));
  //Add the scores
  character.abilityScores.cha += 2;
  character.abilityScores[returnedScores[0]] += 1;
  character.abilityScores[returnedScores[1]] += 1;
  character.speed = 30;
  character.racialAbilities = halfElf_racial;
  character.languages = ["Common", "Elven", returnRandomLanguage()];
  character.resistances = null;
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyHalfOrcRaceBonuses() {
  character.abilityScores.str += 2;
  character.abilityScores.con += 1;
  character.speed = 30;
  character.racialAbilities = halfOrc_racial;
  character.languages = ["Common", "Orcish"];
  character.resistances = null;
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyHalflingRaceBonuses() {
  character.abilityScores.dex += 2;

  character.speed = 25;
  character.racialAbilities = halfling_racial;
  character.languages = ["Common", "Halfling"];
  character.resistances = null;
  character.sizeClass = "Small";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function applyHumanRaceBonuses() {
  //Apply common human stats regardless of variant rules or not
  character.speed = 30;
  character.racialAbilities = null;
  character.languages = ["Common", returnRandomLanguage()];
  character.resistances = null;
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];

  //Roll for variant rules
  if (returnRandomNumberInRange(0, 1) === 0) {
    //Variant Human

    character.variant = true;
    //Increase two random ability scores
    let abilitiyScores = ["str", "con", "dex", "int", "wis", "cha"];
    var randomTwoAbilityScores = [];

    randomTwoAbilityScores.push(returnRandomArrayItem(abilitiyScores));
    abilitiyScores.splice(abilitiyScores.indexOf(randomTwoAbilityScores[0]), 1);
    randomTwoAbilityScores.push(returnRandomArrayItem(abilitiyScores));

    character.abilityScores[randomTwoAbilityScores[0]]++;
    character.abilityScores[randomTwoAbilityScores[1]]++;

    //add a random feat
    var randomFeat = returnRandomFeat();
    var charStatValue = this.character.abilityScores[
      randomFeat.statRequirement[0]
    ];
    var featStatValue = randomFeat.statRequirement[1];

    //checks if character is eligable for the feat and selects a different one if not

    var featFound = false;

    while (featFound === false) {
      if (randomFeat.statRequirement[0] != undefined) {
        if (charStatValue < featStatValue) {
          randomFeat = returnRandomFeat();
        } else {
          featFound = true;
        }
      } else {
        featFound = true;
      }
    }

    character.feat = randomFeat;

    // if the feat has a stat increase, applys it
    if (character.feat.statIncrease != undefined) {
      character.abilityScores[character.feat.statIncrease[0]] +=
        character.feat.statIncrease[1];
    }

    //if the feat adds a proficient, apply it

    if (character.feat.proficiencyBonus != undefined) {
      character.characterClass.armorProficiencies.push(
        randomFeat.proficiencyBonus[0]
      );
    }
  } else {
    //Standard Human
    character.variant = false;
    character.abilityScores.str++;
    character.abilityScores.con++;
    character.abilityScores.dex++;
    character.abilityScores.int++;
    character.abilityScores.wis++;
    character.abilityScores.cha++;
  }
}

function applyTieflingRaceBonuses() {
  character.abilityScores.int += 1;
  character.abilityScores.cha += 2;
  character.speed = 30;
  character.racialAbilities = tiefling_racial;
  character.languages = ["Common", "Infernal"];
  character.resistances = "Fire";
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race);
  character.height = heightWeight[0];
  character.weight = heightWeight[1];
}

function returnRandomLanguage() {
  return returnRandomArrayItem([
    "Abyssal",
    "Aquan",
    "Auran",
    "Celestial",
    "Deep Speech",
    "Draconic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Gnoll",
    "Halfling",
    "Ignan",
    "Infernal",
    "Orc",
    "Primordial",
    "Sylvan",
    "Terran",
    "Undercommon",
  ]);
}

//Simulates the rolling of 4D6, removing the lowest value die and returns the sum of the remainder
function roll4D6RemoveLowestAndSum() {
  var numbers = [];

  for (let i = 0; i < 4; i++) {
    numbers.push(returnRandomNumberInRange(1, 6));
  }

  numbers.sort().shift();
  numbers = numbers.reduce((a, b) => a + b, 0);

  return numbers;
}

//Returns 6 freshly rolled ability scores
function returnSixNumbers() {
  var abilityScores = [];

  for (let i = 0; i < 6; i++) {
    abilityScores.push(roll4D6RemoveLowestAndSum());
  }

  return abilityScores;
}

//Returns a random character class as a string
function returnRandomCharacterClass(chartype) {
  if (chartype != undefined && validClassList.includes(chartype)) {
    switch (true) {
      case chartype === "bard":
        return new createBard();
      case chartype === "barbarian":
        return new createBarbarian();
      case chartype === "monk":
        return new createMonk();
      case chartype === "cleric":
        return new createCleric();
      case chartype === "druid":
        return new createDruid();
      case chartype === "fighter":
        return new createFighter();
      case chartype === "paladin":
        return new createPaladin();
      case chartype === "ranger":
        return new createRanger();
      case chartype === "rogue":
        return new createRogue();
      case chartype === "sorcerer":
        return new createSorcerer();
      case chartype === "warlock":
        return new createWarlock();
      case chartype === "wizard":
        return new createWizard();
      default:
        return "ERROR:Fell though switchcase in core.js -> returnRandomCharacterClass()";
    }
  } else {
    return returnRandomArrayItem(classList);
  }
}

//Returns a random gender
function returnRandomGender(genderType) {
  if (typeof genderType === "undefined") {
    return returnRandomArrayItem(["male", "female"]);
  } else {
    return genderType;
  }
}

//Returns an array of ordered ability score prefrences based on the class supplied in the arguement
function returnAbilityScorePreference(characterClass) {
  switch (true) {
    case characterClass.name === "barbarian":
      return ["str", "con", "dex", "wis", "cha", "int"];
    case characterClass.name === "bard":
      return ["cha", "dex", "con", "wis", "str", "int"];
    case characterClass.name === "monk":
      return ["dex", "wis", "con", "str", "cha", "int"];
    case characterClass.name === "cleric":
      return ["wis", "str", "con", "dex", "cha", "int"];
    case characterClass.name === "druid":
      return ["wis", "dex", "con", "cha", "int", "str"];
    case characterClass.name === "paladin":
      return ["str", "cha", "con", "wis", "dex", "int"];
    case characterClass.name === "ranger":
      return ["dex", "con", "wis", "str", "cha", "int"];
    case characterClass.name === "rogue":
      return ["dex", "con", "wis", "cha", "int", "str"];
    case characterClass.name === "sorcerer":
      return ["cha", "con", "int", "wis", "dex", "str"];
    case characterClass.name === "warlock":
      return ["cha", "con", "dex", "wis", "int", "str"];
    case characterClass.name === "wizard":
      return ["int", "con", "dex", "wis", "cha", "str"];
    case characterClass.name === "fighter" &&
      characterClass.primaryAbility === "str":
      return ["str", "con", "dex", "wis", "cha", "int"];
    case characterClass.name === "fighter" &&
      characterClass.primaryAbility === "dex":
      return ["dex", "con", "str", "wis", "cha", "int"];

    default:
      return "invalid character class supplied as argument [returnAbilityScorePreference()]";
  }
}

//calculates an ability score's modifier
function returnAbilityScoreModifier(stat) {
  //Math.sign() will add +/-
  return Math.floor((stat - 10) / 2);
}

function recalculateAbilityScoreModifiers(abilityScores) {
  abilityScores.strMod = Math.floor((abilityScores.str - 10) / 2);
  abilityScores.dexMod = Math.floor((abilityScores.dex - 10) / 2);
  abilityScores.conMod = Math.floor((abilityScores.con - 10) / 2);
  abilityScores.intMod = Math.floor((abilityScores.int - 10) / 2);
  abilityScores.wisMod = Math.floor((abilityScores.wis - 10) / 2);
  abilityScores.chaMod = Math.floor((abilityScores.cha - 10) / 2);

  return abilityScores;
}

//Returns an array of abilityscores reordered in prefrence on the class argument

function returnAbilityScores(characterClass) {
  let abilityScores = new Uint32Array(returnSixNumbers()).sort().reverse();
  let abilityScoreOrder = returnAbilityScorePreference(characterClass);

  let characterAbilityScores = {};

  characterAbilityScores.str = abilityScores[abilityScoreOrder.indexOf("str")];
  characterAbilityScores.strMod = returnAbilityScoreModifier(
    characterAbilityScores.str
  );

  characterAbilityScores.con = abilityScores[abilityScoreOrder.indexOf("con")];
  characterAbilityScores.conMod = returnAbilityScoreModifier(
    characterAbilityScores.con
  );

  characterAbilityScores.dex = abilityScores[abilityScoreOrder.indexOf("dex")];
  characterAbilityScores.dexMod = returnAbilityScoreModifier(
    characterAbilityScores.dex
  );

  characterAbilityScores.int = abilityScores[abilityScoreOrder.indexOf("int")];
  characterAbilityScores.intMod = returnAbilityScoreModifier(
    characterAbilityScores.int
  );

  characterAbilityScores.wis = abilityScores[abilityScoreOrder.indexOf("wis")];
  characterAbilityScores.wisMod = returnAbilityScoreModifier(
    characterAbilityScores.wis
  );

  characterAbilityScores.cha = abilityScores[abilityScoreOrder.indexOf("cha")];
  characterAbilityScores.chaMod = returnAbilityScoreModifier(
    characterAbilityScores.cha
  );

  return characterAbilityScores;
}

function returnRandomRace(raceType) {
  if (raceType != "undefined" && validRaceList.includes(raceType)) {
    return raceType;
  } else {
    return returnRandomArrayItem(validRaceList);
  }
}

function calculateFirstLevelHitPoints(characterClassName, conModifier) {
  switch (true) {
    case characterClassName === "bard":
      return 8 + conModifier;
    case characterClassName === "barbarian":
      return 12 + conModifier;
    case characterClassName === "cleric":
      return 8 + conModifier;
    case characterClassName === "druid":
      return 8 + conModifier;
    case characterClassName === "fighter":
      return 10 + conModifier;
    case characterClassName === "monk":
      return 8 + conModifier;
    case characterClassName === "paladin":
      return 10 + conModifier;
    case characterClassName === "ranger":
      return 10 + conModifier;
    case characterClassName === "rogue":
      return 8 + conModifier;
    case characterClassName === "sorcerer":
      return 6 + conModifier;
    case characterClassName === "warlock":
      return 8 + conModifier;
    case characterClassName === "wizard":
      return 6 + conModifier;

    default:
      return "fell though switch case";
  }
}

function calculateSavingThrowScores(
  abilityScores,
  savingThrowProficiencies,
  proficiencyModifier
) {
  let savingThrows = {
    strength: {
      modifier: abilityScores.strMod,
      proficient: savingThrowProficiencies.includes("str"),
    },
    dexterity: {
      modifier: abilityScores.dexMod,
      proficient: savingThrowProficiencies.includes("dex"),
    },
    constitution: {
      modifier: abilityScores.conMod,
      proficient: savingThrowProficiencies.includes("con"),
    },
    intelligence: {
      modifier: abilityScores.intMod,
      proficient: savingThrowProficiencies.includes("int"),
    },
    wisdom: {
      modifier: abilityScores.wisMod,
      proficient: savingThrowProficiencies.includes("wis"),
    },
    charasma: {
      modifier: abilityScores.chaMod,
      proficient: savingThrowProficiencies.includes("cha"),
    },
  };

  if (savingThrows.strength.proficient === true) {
    savingThrows.strength.modifier += proficiencyModifier;
  }
  if (savingThrows.dexterity.proficient === true) {
    savingThrows.dexterity.modifier += proficiencyModifier;
  }
  if (savingThrows.constitution.proficient === true) {
    savingThrows.constitution.modifier += proficiencyModifier;
  }
  if (savingThrows.intelligence.proficient === true) {
    savingThrows.intelligence.modifier += proficiencyModifier;
  }
  if (savingThrows.wisdom.proficient === true) {
    savingThrows.wisdom.modifier += proficiencyModifier;
  }
  if (savingThrows.charasma.proficient === true) {
    savingThrows.charasma.modifier += proficiencyModifier;
  }

  return savingThrows;
}

function calculateSkillScores(
  abilityScores,
  skillProficiencies,
  proficiencyModifier
) {
  let skillScores = {
    athletics: {
      modifier: abilityScores.strMod,
      proficient: skillProficiencies.includes("athletics"),
    },
    acrobatics: {
      modifier: abilityScores.dexMod,
      proficient: skillProficiencies.includes("acrobatics"),
    },
    sleightOfHand: {
      modifier: abilityScores.dexMod,
      proficient: skillProficiencies.includes("sleight of hand"),
    },
    arcana: {
      modifier: abilityScores.intMod,
      proficient: skillProficiencies.includes("arcana"),
    },
    stealth: {
      modifier: abilityScores.dexMod,
      proficient: skillProficiencies.includes("stealth"),
    },
    history: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("history"),
    },
    nature: {
      modifier: abilityScores.intMod,
      proficient: skillProficiencies.includes("nature"),
    },
    religion: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("religion"),
    },
    animalHandling: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("animal handling"),
    },
    insight: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("insight"),
    },
    medicine: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("medicine"),
    },
    perception: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("perception"),
    },
    survival: {
      modifier: abilityScores.wisMod,
      proficient: skillProficiencies.includes("survival"),
    },
    deception: {
      modifier: abilityScores.chaMod,
      proficient: skillProficiencies.includes("deception"),
    },
    intimidation: {
      modifier: abilityScores.chaMod,
      proficient: skillProficiencies.includes("intimidation"),
    },
    investigation: {
      modifier: abilityScores.intMod,
      proficient: skillProficiencies.includes("investigation"),
    },
    performance: {
      modifier: abilityScores.chaMod,
      proficient: skillProficiencies.includes("performance"),
    },
    persuasion: {
      modifier: abilityScores.chaMod,
      proficient: skillProficiencies.includes("persuasion"),
    },
  };

  if (skillScores.athletics.proficient === true) {
    skillScores.athletics.modifier += proficiencyModifier;
  }
  if (skillScores.acrobatics.proficient === true) {
    skillScores.acrobatics.modifier += proficiencyModifier;
  }
  if (skillScores.sleightOfHand.proficient === true) {
    skillScores.sleightOfHand.modifier += proficiencyModifier;
  }
  if (skillScores.arcana.proficient === true) {
    skillScores.arcana.modifier += proficiencyModifier;
  }
  if (skillScores.stealth.proficient === true) {
    skillScores.stealth.modifier += proficiencyModifier;
  }
  if (skillScores.history.proficient === true) {
    skillScores.history.modifier += proficiencyModifier;
  }
  if (skillScores.nature.proficient === true) {
    skillScores.nature.modifier += proficiencyModifier;
  }
  if (skillScores.religion.proficient === true) {
    skillScores.religion.modifier += proficiencyModifier;
  }
  if (skillScores.animalHandling.proficient === true) {
    skillScores.animalHandling.modifier += proficiencyModifier;
  }
  if (skillScores.insight.proficient === true) {
    skillScores.insight.modifier += proficiencyModifier;
  }
  if (skillScores.medicine.proficient === true) {
    skillScores.medicine.modifier += proficiencyModifier;
  }
  if (skillScores.perception.proficient === true) {
    skillScores.perception.modifier += proficiencyModifier;
  }
  if (skillScores.survival.proficient === true) {
    skillScores.survival.modifier += proficiencyModifier;
  }
  if (skillScores.deception.proficient === true) {
    skillScores.deception.modifier += proficiencyModifier;
  }
  if (skillScores.intimidation.proficient === true) {
    skillScores.intimidation.modifier += proficiencyModifier;
  }
  if (skillScores.performance.proficient === true) {
    skillScores.performance.modifier += proficiencyModifier;
  }
  if (skillScores.persuasion.proficient === true) {
    skillScores.persuasion.modifier += proficiencyModifier;
  }

  return skillScores;
}

/**------------------------------------------------------------------------------
 * Calculate `Armor Class`
 * Calculations from https://merricb.com/2014/09/13/armour-class-in-dungeons-dragons-5e/
 */

function calculateArmorClass(char) {
  let AC = NaN;
  let modLimit = 2;
  let dexMod = char.abilityScores.dexMod;

  if (char.characterClass.equipment.armor !== undefined) {
    //checks if there is an armor
    AC = parseInt(char.characterClass.equipment.armor.baseArmorClass, 10);
  }

  if (!isNaN(AC)) {
    //1. there is an armor
    //1.1 Adds Dex depending of armor used.
    if (char.characterClass.equipment.armor.additionalModifier === "DEX") {
      if (modLimit < dexMod) {
        //test the armor modifier limit
        AC += modLimit;
      } else {
        AC += dexMod; //dexMod can be lower than armor modifier limit
      }
    }
  } else {
    //no armor
    AC = 10;
    const className = char.characterClass.name;
    // 2.1 check for unarmored sorcerer (add +3 to AC )
    if (className === "sorcerer") {
      //sorcerer and no armor adds +3
      AC += 3; // from https://roll20.net/compendium/dnd5e/Sorcerer#h-Sorcerer
    }
    if (className === "barbarian") {
      //barbarian and no armor adds conMod
      AC += char.abilityScores.conMod;
    }
    if (className === "monk") {
      //monk and no armor adds wisMod
      AC += char.abilityScores.wisMod;
    }

    AC += char.abilityScores.dexMod; //finally add dex
  }

  //grabs the weapon collection and armor proficiencies
  const shield = char.characterClass.equipment.shield;
  const armorProf = char.characterClass.armorProficiencies;

  //Checks for the exsistance of a shield in the characters inventory and that they have proficiency to use one and applies ac bonus if these conditions return true.

  if (shield !== undefined) {
    if (
      shield.some((item) => item.name === "Shield") &&
      armorProf.includes("shields")
    ) {
      AC += 2;
    } else if (
      shield.some((item) => item.name === "Wooden Shield") &&
      armorProf.includes("shields")
    ) {
      AC += 2;
    }
  }

  return AC;
}

//// TODO: refactor this beast
function calculateSpellslots(characterClass) {
  let spellSlots = {
    cantrips: { avalible: 0, spells: [] },
    firstLevel: { avalible: 0, spells: [] },
    secondLevel: { avalible: 0, spells: [] },
    thirdLevel: { avalible: 0, spells: [] },
    forthLevel: { avalible: 0, spells: [] },
    fifthLevel: { avalible: 0, spells: [] },
    sixthLevel: { avalible: 0, spells: [] },
    seventhLevel: { avalible: 0, spells: [] },
    eighthLevel: { avalible: 0, spells: [] },
    ninthLevel: { avalible: 0, spells: [] },
  };

  if (characterClass === "bard") {
    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        bardCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        bardLevel1,
        spellSlots.firstLevel.avalible
      )
    );

    spellSlots.totalSpellsKnown = 4;
  } else if (characterClass === "cleric") {
    spellSlots.cantrips.avalible = 3;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        clericCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        clericLevel1,
        spellSlots.firstLevel.avalible
      )
    );
    //Clerics also get domain spells at 1st,3rd,5th,7th & 9th levels
    spellSlots.domainSpells = { avalible: 0, spells: [] };
    spellSlots.domainSpells.avalible = 2;
    spellSlots.domainSpells.spells.push(
      clericLevel1.Bless,
      clericLevel1.CureWounds
    );
  } else if (characterClass === "druid") {
    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        druidCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        druidLevel1,
        spellSlots.firstLevel.avalible
      )
    );
  } else if (characterClass === "paladin") {
    spellSlots.cantrips.avalible = 0;

    spellSlots.firstLevel.avalible = 0;
  } else if (characterClass === "ranger") {
    spellSlots.cantrips.avalible = 0;
    spellSlots.firstLevel.avalible = 0;
  } else if (characterClass === "sorcerer") {
    spellSlots.cantrips.avalible = 4;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        sorcererCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        sorcererLevel1,
        spellSlots.firstLevel.avalible
      )
    );

    spellSlots.totalSpellsKnown = 2;
  } else if (characterClass === "warlock") {
    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        warlockCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 1;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        warlockLevel1,
        spellSlots.firstLevel.avalible
      )
    );

    spellSlots.totalSpellsKnown = 2;
  } else if (characterClass === "wizard") {
    spellSlots.cantrips.avalible = 3;
    spellSlots.cantrips.spells.push(
      returnRandomObjectPropertiesAndValues(
        wizardCantrips,
        spellSlots.cantrips.avalible
      )
    );

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(
      returnRandomObjectPropertiesAndValues(
        wizardLevel1,
        spellSlots.firstLevel.avalible
      )
    );
  }

  return spellSlots;
}

//returns the characters proficiency bonus
//TODO: some character get a bonus to this based on class abilities(i think?)
function getProficiencyModifier(level) {
  switch (true) {
    case level <= 4:
      return 2;
    case level >= 4 && level <= 8:
      return 3;
    case level >= 9 && level <= 12:
      return 4;
    case level >= 13 && level <= 16:
      return 5;
    case level >= 17:
      return 6;
  }
}

var chartype; //set by -c commandline arguement
var raceType; //set by the -r commandline arguement

//NewCharacter Construtor
function NewCharacter() {
  this.level = 1;
  this.proficiencyModifier = getProficiencyModifier(this.level);
  this.characterClass = returnRandomCharacterClass(chartype);
  this.characterClassAbilities = addClassFeatures(this.characterClass.name);
  this.race = returnRandomRace(raceType);
  this.gender = returnRandomGender();
  this.fullname = returnRandomName(this.race, this.gender);
  this.background = returnCharacterBackground();

  this.alignment = returnRandomAlignment();

  this.abilityScores = returnAbilityScores(this.characterClass);
  returnCharacterAge(this);
  applySubraceBonuses(this);
  this.abilityScores = recalculateAbilityScoreModifiers(this.abilityScores); //Some racial traits increase ability scores so we have to recalculate here to account for those
  this.hitPoints = calculateFirstLevelHitPoints(
    this.characterClass.name,
    this.abilityScores.conMod
  );
  this.savingThrowScores = calculateSavingThrowScores(
    this.abilityScores,
    this.characterClass.savingThrows,
    this.proficiencyModifier
  );
  this.skillScores = calculateSkillScores(
    this.abilityScores,
    this.characterClass.skillProficiencies,
    this.proficiencyModifier
  );
  this.spellSlots = calculateSpellslots(this.characterClass.name);
  this.characterClass.initiative = this.abilityScores.dexMod;

  this.personalityTraits = returnRandomPersonality();
  this.physicalAttributes = PhysicalAttributes();

  this.characterClass.equipment.armor = assignArmor(this);
  this.armorClass = calculateArmorClass(this);

  return this;
}

function populatePage() {
  //clears last console.log
  console.clear();
  //checks for testing params
  let charDropDown = document.getElementById("races");
  let charClass = charDropDown.options[charDropDown.selectedIndex].value;

  if (charClass != "Choose A Class") {
    chartype = charClass;
  }

  char = new NewCharacter();
  console.log(char);

  //clears the weapons and spell casting table
  document.getElementById("attacksAndSpellCasting").innerHTML = "";

  document.getElementById("charName").innerHTML =
    char.fullname.firstName + " " + char.fullname.lastName;

  document.getElementById("race").innerHTML = char.race;
  document.getElementById("alignment").innerHTML = char.alignment;
  document.getElementById("class&level").innerHTML = char.characterClass.name;
  document.getElementById("background").innerHTML = char.background.name;

  document.getElementById("str").innerHTML = char.abilityScores.str;
  document.getElementById("strMod").innerHTML = char.abilityScores.strMod;

  document.getElementById("dex").innerHTML = char.abilityScores.dex;
  document.getElementById("dexMod").innerHTML = char.abilityScores.dexMod;

  document.getElementById("con").innerHTML = char.abilityScores.con;
  document.getElementById("conMod").innerHTML = char.abilityScores.conMod;

  document.getElementById("int").innerHTML = char.abilityScores.int;
  document.getElementById("intMod").innerHTML = char.abilityScores.intMod;

  document.getElementById("wis").innerHTML = char.abilityScores.wis;
  document.getElementById("wisMod").innerHTML = char.abilityScores.wisMod;

  document.getElementById("cha").innerHTML = char.abilityScores.cha;
  document.getElementById("chaMod").innerHTML = char.abilityScores.chaMod;

  document.getElementById("proficiencyBonusScore").innerHTML =
    char.proficiencyModifier;

  document.getElementById("strSavingThrow").innerHTML =
    char.savingThrowScores.strength.modifier;
  document.getElementById("dexSavingThrow").innerHTML =
    char.savingThrowScores.dexterity.modifier;
  document.getElementById("conSavingThrow").innerHTML =
    char.savingThrowScores.constitution.modifier;
  document.getElementById("intSavingThrow").innerHTML =
    char.savingThrowScores.intelligence.modifier;
  document.getElementById("wisSavingThrow").innerHTML =
    char.savingThrowScores.wisdom.modifier;
  document.getElementById("chaSavingThrow").innerHTML =
    char.savingThrowScores.charasma.modifier;

  document.getElementById("acrobatics").innerHTML =
    char.skillScores.acrobatics.modifier;

  document.getElementById("animalHandling").innerHTML =
    char.skillScores.animalHandling.modifier;

  document.getElementById("arcana").innerHTML =
    char.skillScores.arcana.modifier;

  document.getElementById("athletics").innerHTML =
    char.skillScores.athletics.modifier;

  document.getElementById("deception").innerHTML =
    char.skillScores.deception.modifier;

  document.getElementById("history").innerHTML =
    char.skillScores.history.modifier;

  document.getElementById("insight").innerHTML =
    char.skillScores.insight.modifier;

  document.getElementById("intimidation").innerHTML =
    char.skillScores.intimidation.modifier;

  document.getElementById("medicine").innerHTML =
    char.skillScores.medicine.modifier;

  document.getElementById("nature").innerHTML =
    char.skillScores.nature.modifier;

  document.getElementById("perception").innerHTML =
    char.skillScores.perception.modifier;

  document.getElementById("performance").innerHTML =
    char.skillScores.performance.modifier;

  document.getElementById("persuasion").innerHTML =
    char.skillScores.persuasion.modifier;

  document.getElementById("religion").innerHTML =
    char.skillScores.religion.modifier;

  document.getElementById("sleightOfHand").innerHTML =
    char.skillScores.sleightOfHand.modifier;

  document.getElementById("stealth").innerHTML =
    char.skillScores.stealth.modifier;

  document.getElementById("survival").innerHTML =
    char.skillScores.survival.modifier;

  document.getElementById("investigation").innerHTML =
    char.skillScores.investigation.modifier;

  //TODO this should be calculated in character creation, may be additional bonues to factor in
  document.getElementById("passivePerception").innerHTML =
    10 + char.abilityScores.wisMod;

  function PopulateProficienciesAndLanguages() {
    let profs = [];
    let armor = char.characterClass.armorProficiencies;
    let skill = char.characterClass.skillProficiencies;
    let tool = char.characterClass.toolProficiencies;
    let weapon = char.characterClass.weaponProficiencies;
    let addProfs = char.background.additionalProficiencies;

    if (armor.length > 0 || armor != undefined) {
      for (let i = 0; i < armor.length; i++) {
        profs.push(char.characterClass.armorProficiencies[i]);
      }
    }

    if (skill.length > 0 || skill != undefined) {
      for (let i = 0; i < skill.length; i++) {
        profs.push(char.characterClass.skillProficiencies[i]);
      }
    }

    if (tool.length > 0 || tool != undefined) {
      for (let i = 0; i < tool.length; i++) {
        profs.push(char.characterClass.toolProficiencies[i].name);
      }
    }

    if (weapon.length > 0 || weapon != undefined) {
      for (let i = 0; i < weapon.length; i++) {
        profs.push(char.characterClass.weaponProficiencies[i]);
      }
    }

    for (let i = 0; i < addProfs.length; i++) {
      profs.push(addProfs[i]);
    }

    profs = [...new Set(profs)];
    profs = profs.toString();

    // Removes the "," at profs[0] caused by empty armor profs
    if (profs[0] == ",") {
      profs = profs.substring(1);
    }

    //Removes double commas caused by empty collections
    profs = profs.replace(",,", ",");

    let languages = char.languages;
    languages.push(char.background.additionalLanguages[0]);
    languages.push(char.background.additionalLanguages[1]);

    //Removes duplicates from languages
    //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
    languages = [...new Set(languages)];

    [...new Set(languages)];

    document.getElementById(
      "ProficienciesAndLanguages"
    ).innerHTML = `<b>Proficiencies.</b> ${profs}
      <br>
      <b>Languages.</b> ${languages.toString()}`;
  }

  document.getElementById("armorClass").innerHTML = char.armorClass;
  document.getElementById("initiative").innerHTML =
    char.characterClass.initiative;
  document.getElementById("speed").innerHTML = char.speed;

  document.getElementById("hitPointMaxValue").innerHTML = char.hitPoints;
  document.getElementById("currentHitPoints").innerHTML = char.hitPoints;

  document.getElementById("hitDiceValue").innerHTML =
    "1d" + char.characterClass.hitDie;

  document.getElementById("personalityTraits").innerHTML =
    char.personalityTraits.personality;

  document.getElementById("ideals").innerHTML = char.personalityTraits.ideal;

  document.getElementById("bonds").innerHTML = char.personalityTraits.bond;

  document.getElementById("flaws").innerHTML = char.personalityTraits.flaw;

  //Converts all the character spells to a single array of objects
  function cantripsToString() {
    let str = "";
    let cantrips = "";

    cantrips = char.spellSlots.cantrips.spells[0];

    if (cantrips === undefined) {
      return;
    } else {
      Object.keys(cantrips).forEach(function (key) {
        str += cantrips[key].name;
        str += ", ";
      });
    }

    str = `&nbsp <i><b>Cantrips</b>. You know ${str}and can cast them at will.</i><br>`;

    return str;
  }

  function spellSlotsToString() {
    let slots = "";

    if (char.spellSlots.firstLevel.avalible === 1) {
      slots = "one";
    }
    if (char.spellSlots.firstLevel.avalible === 2) {
      slots = "two";
    }
    if (char.spellSlots.firstLevel.avalible === 3) {
      slots = "three";
    }
    if (char.spellSlots.firstLevel.avalible === 4) {
      slots = "four";
    }
    if (char.spellSlots.firstLevel.avalible === 5) {
      slots = "five";
    }

    return `&nbsp <i><b>Spell Slots</b> You have ${slots} 1st-level spell slots you can use to cast your prepared spells.</i>`;
  }

  //Converts all the characters weapons to a single array of objects
  function weaponsToArray() {
    let arr = [];
    let arrLength = void 0;
    let primaryWeapon = char.characterClass.equipment.primaryWeapon;
    let additionalWeapons = char.characterClass.equipment.additionalWeapons;

    if (primaryWeapon.name) {
      arr.push({
        name: primaryWeapon.name,
        atkBonus: "",
        damageType: primaryWeapon.damage,
      });
    }

    if (additionalWeapons.length > 0 || additionalWeapons != undefined) {
      Object.keys(additionalWeapons).forEach(function (key) {
        arr.push({
          name: additionalWeapons[key].name,
          atkBonus: "",
          damageType: additionalWeapons[key].damage,
        });
      });
    }

    return arr;
  }

  //Adds all character equipment to a string

  function equipmentToString() {
    let characterEquipment = char.characterClass.equipment;
    let tools = characterEquipment.tools;
    let additionalWeapons = characterEquipment.additionalWeapons;

    let equipmentStr = "";

    if (characterEquipment.armor) {
      equipmentStr += characterEquipment.armor.name + ", ";
    }

    if (characterEquipment.primaryWeapon !== undefined) {
      equipmentStr += characterEquipment.primaryWeapon[0].name + ", ";
    }

    if (characterEquipment.shield[0]) {
      equipmentStr += characterEquipment.shield[0].name + ", ";
    }

    for (let i = 0; i < tools.length; i++) {
      equipmentStr += tools[i].name + ", ";
    }

    for (let i = 0; i < additionalWeapons.length; i++) {
      equipmentStr += additionalWeapons[i].name + ", ";
    }

    for (let i = 0; i < char.background.equipment.length; i++) {
      equipmentStr += char.background.equipment[i].name + ", ";
    }

    document.getElementById("equipment").innerHTML = equipmentStr;
  }

  //Creates table headers
  function createTable() {
    let itemName = document.createElement("TH");
    let itemNameText = document.createTextNode("NAME");
    let atkBonus = document.createElement("TH");
    let atkBonusText = document.createTextNode("ATK BONUS");
    let damageType = document.createElement("TH");
    let damageTypeText = document.createTextNode("DAMAGE/TYPE");

    itemName.appendChild(itemNameText);
    document.getElementById("attacksAndSpellCasting").appendChild(itemName);
    atkBonus.appendChild(atkBonusText);
    document.getElementById("attacksAndSpellCasting").appendChild(atkBonus);
    damageType.appendChild(damageTypeText);
    document.getElementById("attacksAndSpellCasting").appendChild(damageType);
  }

  function addCell(tr, val) {
    let td = document.createElement("td");

    td.innerHTML = val;

    tr.appendChild(td);
  }

  function addRow(tbl, val_1, val_2, val_3) {
    let tr = document.createElement("tr");

    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);

    tbl.appendChild(tr);
  }

  //Creates and populates weapons
  function addWeapons() {
    createTable();

    let weapons = weaponsToArray();
    let table = document.getElementById("attacksAndSpellCasting");

    for (let i = 0; i < weapons.length; i++) {
      addRow(
        table,
        weapons[i].name,
        weapons[i].atkBonus,
        weapons[i].damageType
      );
    }
  }

  function addSpellDetails() {
    let cantrips = cantripsToString();
    let spellSlots = spellSlotsToString();

    if (cantrips === undefined) {
      document.getElementById("spellDetails").innerHTML = "";
    } else {
      document.getElementById("spellDetails").innerHTML = cantrips;
      document.getElementById("spellDetails").innerHTML += spellSlots;
    }
  }

  addWeapons();
  addSpellDetails();
  PopulateProficienciesAndLanguages();
  equipmentToString();
}

// var charQty = 1;
// var raceType;
// var genderType;

// for (let j = 0; j < process.argv.length; j++) {
//   //loops all arguments

//   if (process.argv[j].toLowerCase() === "-n") {
//     //check for the argument -n, if 'true' user wants several chars
//     var isnum = /^\d+$/.test(process.argv[j + 1]); //checks if the next argument is a number
//     if (isnum == true) {
//       charQty = process.argv[j + 1];
//     }
//   }

//   if (process.argv[j].toLowerCase() === "-c") {
//     //check for the argument -c, if true user wants to force a specific class
//     if (
//       typeof process.argv[j + 1] != "undefined" &&
//       validClassList.includes(process.argv[j + 1].toLowerCase())
//     ) {
//       //checks to make sure arguement is valid class
//       chartype = process.argv[j + 1].toLowerCase();
//     } else {
//       chartype = "undefined";
//       console.log(
//         "ERROR:Provided class arguement is not a valid class - class will be random"
//       );
//     }
//   }

//   if (process.argv[j].toLowerCase() === "-r") {
//     //check for the argument -r, if true user wants to force a specific race
//     if (
//       typeof process.argv[j + 1] != "undefined" &&
//       validRaceList.includes(process.argv[j + 1].toLowerCase())
//     ) {
//       //checks to make sure arguement is valid race
//       raceType = process.argv[j + 1].toLowerCase();
//     } else {
//       console.log(
//         "ERROR: The provided race arguement isn't valid - race will be random"
//       ); //If argument isn't a string or a valid class
//     }
//   }

//   if (process.argv[j].toLowerCase() === "-g") {
//     //check for the argument -g, if true user wants to force a specific gender
//     let genderProvided = process.argv[j + 1];
//     if (
//       typeof genderProvided != "undefined" &&
//       (genderProvided.toLowerCase() === "male" ||
//         genderProvided.toLowerCase() === "female")
//     ) {
//       genderType = process.argv[j + 1].toLowerCase();
//     } else {
//       genderType = "undefined";
//       console.log(
//         "ERROR: The provided gender arguement isn't valid - gender will be random"
//       ); //If argument isn't a string or a valid class
//     }
//   }

//   // console.log(j + ' -> ' + (process.argv[j])); //used to print all arguments on screen for testing
// }

//First attempt at a bit more aesthetically pleasing cli output
// function drawTipBox() {
//   let line = "\u2554" + "\u2550".repeat(60) + "\u2557";
//   let line2 = "\u2560" + "\u2550".repeat(60) + "\u2563";
//   let line3 = "\u2560" + "\u2550".repeat(60) + "\u2563";

//   console.log(line);

//   console.log("\u2551" + "Command line switches" + " ".repeat(39) + "\u2551");
//   console.log(line2);
//   console.log(
//     "\u2551" +
//       "'-n x' Sets the number of character sheets to be returned   " +
//       "\u2551"
//   );
//   console.log(
//     "\u2551" +
//       "'-c x' Sets the class to be returned" +
//       " ".repeat(24) +
//       "\u2551"
//   );
//   console.log(
//     "\u2551" + "'-r x' Sets the race to be returned" + " ".repeat(25) + "\u2551"
//   );
//   console.log(
//     "\u2551" +
//       "'-g x' Sets the gender to be returned" +
//       " ".repeat(23) +
//       "\u2551"
//   );

//   console.log(line3);
// }

// function drawOutput() {
//   let line = "\u2560";
//   console.log("\u2551" + "Characters Created" + " ".repeat(42) + "\u2551");

//   for (x = 0; x < 60; x++) {
//     line += "\u2550";
//   }
//   line += "\u2563";
//   console.log(line);
// }

// drawTipBox();
// drawOutput();

// for (var k = 0; k < charQty; k++) {
//   //loop to create several characters in a row

//   let x = new NewCharacter();

//   let lineLength =
//     "\u2551 " +
//     "\u2705 " +
//     x.fullname.firstName +
//     " " +
//     x.fullname.lastName +
//     " " +
//     "the " +
//     x.race +
//     " " +
//     x.characterClass.name;

//   let remainingCharacters = 57 - lineLength.length;

//   let genderIcon = "";
//   if (x.gender === "male") {
//     genderIcon = "\u2642";
//   } else {
//     genderIcon = "\u2640";
//   }

//   console.log(
//     "\u2551" +
//       " \u2705 " +
//       genderIcon +
//       " " +
//       x.fullname.firstName +
//       " " +
//       x.fullname.lastName +
//       " " +
//       "the " +
//       x.race +
//       " " +
//       x.characterClass.name +
//       " " +
//       " ".repeat(remainingCharacters) +
//       "\u2551"
//   );

//   JsonExport = JSON.stringify(x, undefined, 2);

// var dir = "./Exports";

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }

// fs.writeFile(
//   "./exports/" +
//     x.fullname.firstName +
//     " " +
//     x.fullname.lastName +
//     "- " +
//     x.race +
//     " " +
//     x.characterClass.name +
//     ".JSON",
//   JsonExport,
//   function (err) {
//     if (err) {
//       return console.log(err);
//     }
//   }
// );
// }
// console.log("\u255A" + "\u2550".repeat(60) + "\u255D");

// exports.musicalInstruments = musicalInstruments;
// exports.returnRandomInstrument = returnRandomInstrument;
// exports.returnRandomInstruments = returnRandomInstruments;
// exports.equipmentPacks = equipmentPacks;
// exports.createBard = createBard;
// exports.createBarbarian = createBarbarian;
// exports.createMonk = createMonk;
// exports.classList = classList;
// exports.createCleric = createCleric;
// exports.createDruid = createDruid;
// exports.createFighter = createFighter;
// exports.createPaladin = createPaladin;
// exports.createRanger = createRanger;
// exports.createRogue = createRogue;
// exports.createSorcerer = createSorcerer;
// exports.createWarlock = createWarlock;
// exports.createWizard = createWizard;
// exports.addClassFeatures = addClassFeatures;
// exports.simpleWeapons = simpleWeapons;
// exports.simpleRangedWeapons = simpleRangedWeapons;
// exports.martialMeleeWeapons = martialMeleeWeapons;
// exports.martialRangedWeapons = martialRangedWeapons;
// exports.returnRandomWeaponFromCollection = returnRandomWeaponFromCollection;
// exports.returnRandomWeaponsFromCollection = returnRandomWeaponsFromCollection;
// exports.wizardLevel1 = wizardLevel1;
// exports.wizardCantrips = wizardCantrips;
// exports.warlockLevel1 = warlockLevel1;
// exports.warlockCantrips = warlockCantrips;
// exports.sorcererLevel1 = sorcererLevel1;
// exports.sorcererCantrips = sorcererCantrips;
// exports.rangerLevel1 = rangerLevel1;
// exports.paladinLevel1 = paladinLevel1;
// exports.druidLevel1 = druidLevel1;
// exports.druidCantrips = druidCantrips;
// exports.bardCantrips = bardCantrips;
// exports.bardLevel1 = bardLevel1;
// exports.clericCantrips = clericCantrips;
// exports.clericLevel1 = clericLevel1;
// exports.acid_splash = acid_splash;
// exports.bless = bless;
// exports.burning_hands = burning_hands;
// exports.charm_person = charm_person;
// exports.command = command;
// exports.comprehend_languages = comprehend_languages;
// exports.cone_of_cold = cone_of_cold;
// exports.cure_wounds = cure_wounds;
// exports.dancing_lights = dancing_lights;
// exports.detect_magic = detect_magic;
// exports.disguise_self = disguise_self;
// exports.faerie_fire = faerie_fire;
// exports.fire_bolt = fire_bolt;
// exports.guidance = guidance;
// exports.guiding_bolt = guiding_bolt;
// exports.healing_word = healing_word;
// exports.identify = identify;
// exports.animal_friendship = animal_friendship;
// exports.bane = bane;
// exports.feather_fall = feather_fall;
// exports.heroism = heroism;
// exports.hideous_laughter = hideous_laughter;
// exports.illusory_script = illusory_script;
// exports.longstrider = longstrider;
// exports.speak_with_animals = speak_with_animals;
// exports.unseen_servant = unseen_servant;
// exports.create_or_destroy_water = create_or_destroy_water;
// exports.detect_evil_and_good = detect_evil_and_good;
// exports.detect_poison_and_disease = detect_poison_and_disease;
// exports.protection_from_evil_and_good = protection_from_evil_and_good;
// exports.purify_food_and_drink = purify_food_and_drink;
// exports.produce_flame = produce_flame;
// exports.shillelagh = shillelagh;
// exports.entangle = entangle;
// exports.fog_cloud = fog_cloud;
// exports.jump = jump;
// exports.divine_favor = divine_favor;
// exports.alarm = alarm;
// exports.chill_touch = chill_touch;
// exports.color_spray = color_spray;
// exports.expeditious_retreat = expeditious_retreat;
// exports.false_life = false_life;
// exports.floating_disk = floating_disk;
// exports.grease = grease;
// exports.light = light;
// exports.mending = mending;
// exports.message = message;
// exports.mage_armor = mage_armor;
// exports.mage_hand = mage_hand;
// exports.magic_missile = magic_missile;
// exports.minor_illusion = minor_illusion;
// exports.poison_spray = poison_spray;
// exports.prestidigitation = prestidigitation;
// exports.ray_of_frost = ray_of_frost;
// exports.resistance = resistance;
// exports.sacred_flame = sacred_flame;
// exports.sanctuary = sanctuary;
// exports.shield = shield;
// exports.shield_of_faith = shield_of_faith;
// exports.shocking_grasp = shocking_grasp;
// exports.silent_image = silent_image;
// exports.sleep = sleep;
// exports.spare_the_dying = spare_the_dying;
// exports.thaumaturgy = thaumaturgy;
// exports.thunderwave = thunderwave;
// exports.true_strike = true_strike;
// exports.vicious_mockery = vicious_mockery;
// exports.returnRandomName = returnRandomName;
// exports.allFeats = allFeats;
// exports.returnRandomFeat = returnRandomFeat;
// exports.physicalDescription = physicalDescription;

// exports.returnRandomPersonality = returnRandomPersonality;
// exports.returnRandomNumberInRange = returnRandomNumberInRange;
// exports.returnRandomFloatInRange = returnRandomFloatInRange;
// exports.returnRandomArrayItem = returnRandomArrayItem;
// exports.returnRandomObjectPropertiesAndValues = returnRandomObjectPropertiesAndValues;
// exports.assignArmor = assignArmor;
// exports.lightArmor = lightArmor;
// exports.mediumArmor = mediumArmor;
// exports.heavyArmor = heavyArmor;
// exports.shields = shields;
// exports.dwarf_racial = dwarf_racial;
// exports.elf_racial = elf_racial;
// exports.gnome_racial = gnome_racial;
// exports.halfling_racial = halfling_racial;
// exports.dragonborn_racial = dragonborn_racial;
// exports.halfElf_racial = halfElf_racial;
// exports.halfOrc_racial = halfOrc_racial;
// exports.tiefling_racial = tiefling_racial;
