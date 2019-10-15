const utils = require('./utils');

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
	darkvision:
	{
		name: "Darkvision",
		description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],


	},
	dwarven_resilience:
	{
		name: "Dwarven Resilience",
		description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:["poison"],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	dwarven_combat_training:
	{
		name: "Dwarven Combat Training",
		description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
		addsExtraProficiencies:true,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:["battleaxe", "handaxe", "light hammer", "warhammer"],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],

	},
	stonecunning:
	{
		name: "Stonecunning",
		description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
		addsExtraProficiencies:false, //// TODO: not sure how to handle this one
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}
};

elf_racial = {
	darkvision:
	{
		name: "Darkvision",
		description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	keen_senses:
	{
		name: "Keen Senses",
		description: "You have proficiency in the Perception skill.",
		addsExtraProficiencies:true,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:["perception"],
	},
	fey_ancestry:
	{
		name: "Fey Ancestry",
		description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	trance:
	{
		name: "Trance",
		description: "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}
};

gnome_racial = {
	darkvision:
	{
		name: "Darkvision",
		description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	gnome_cunning:
	{
		name: "Gnome Cunning",
		description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	artificers_lore:
	{
		name: "Artificer’s Lore",
		description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	tinker:
	{
		name: "Tinker",
		description: "Tinker: You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it;  at that time, you can reclaim the materials used to create it.You can have up to three such devices active at a time.When you create a device, choose one of the following options: Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier.When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction.It makes noises as appropriate to the creature it represents. Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire.Using the device requires your action. Music Box: When opened, this music box plays a single song at a moderate volume.The box stops playing when it reaches the song’ s end or when it is closed.",
		addsExtraProficiencies:true,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:["artisan’s tools (tinker’s tools)"],
		extraSkillProficiencies:[],
	}
};

halfling_racial = {
	lucky:
	{
		name: "Lucky",
		description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	brave:
	{
		name: "Brave",
		description: "You have advantage on saving throws against being frightened.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	halfling_nimbleness:
	{
		name: "Halfling Nimbleness",
		description: "You can move through the space of any creature that is of a size larger than yours.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	naturally_stealthy:
	{
		name: "Naturally Stealty",
		description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}
};

dragonborn_racial = {
	draconic_ancestry:
	{
		name: "Draconic Ancestry",
		description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,//// TODO: think this is covered by the subrace bnonus?
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	breath_weapon:
	{
		name: "Breath Weapon",
		description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	damage_resistance:
	{
		name: "Damage Resistance",
		description: "You have resistance to the damage type associated with your draconic ancestry.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}
};

halfElf_racial = {
	darkvision:
	{
		name: "Darkvision",
		description: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	fey_ancestry:
	{
		name: "Fey Ancestry",
		description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	skill_versatility:
	{
		name: "Skill Versatility",
		description: "You gain proficiency in two skills of your choice.",
		addsExtraProficiencies:true,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[utils.returnRandomArrayItem(validProficiencies),utils.returnRandomArrayItem(validProficiencies)],
	}

};
halfOrc_racial = {
	darkvision:
	{
		name: "Darkvision",
		description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	menacing:
	{
		name: "Menacing",
		description: "You gain proficiency in the Intimidation skill.",
		addsExtraProficiencies:true,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:["Intimidation"],
	},
	relentless_endurance:
	{
		name: "Relentless Endurance",
		description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	savage_attacks:
	{
		name: "Savage Attacks",
		description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}
};

tiefling_racial = {
	darkvision:
	{
		name: "Darkvision",
		description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	hellish_resistance:
	{
		name: "Hellish Resistance",
		description: "You have resistance to fire damage.",
		addsExtraProficiencies:false,
		addsExtraResistance:true,
		extraResistance:["fire"],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	},
	infernal_legacy:
	{
		name: "Infernal Legacy",
		description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
		addsExtraProficiencies:false,
		addsExtraResistance:false,
		extraResistance:[],
		extraArmorProficiencies:[],
		extraWeaponProficiencies:[],
		extraToolProficiencies:[],
		extraSkillProficiencies:[],
	}

};

exports.dwarf_racial = dwarf_racial;
exports.elf_racial = elf_racial;
exports.gnome_racial = gnome_racial;
exports.halfling_racial = halfling_racial;
exports.dragonborn_racial = dragonborn_racial;
exports.halfElf_racial = halfElf_racial;
exports.halfOrc_racial = halfOrc_racial;
exports.tiefling_racial = tiefling_racial;
