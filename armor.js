const utils = require("./utils.js");

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
    category: "light armor"
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
    category: "light armor"
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
    category: "light armor"
  }
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
    category: "medium armor"
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
    category: "medium armor"
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
    category: "medium armor"
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
    category: "medium armor"
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
    category: "medium armor"
  }
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
    category: "heavy armor"
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
    category: "heavy armor"
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
    category: "heavy armor"
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
    category: "heavy armor"
  }
};

const shields = {
  shield: {
    name: "Shield",
    Cost: "10gp"
  },

  woodenShield: {
    name: "Wooden Shield",
    cost: "10gp"
  }
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
  return utils.returnRandomArrayItem([
    mediumArmor.scaleMail,
    lightArmor.leather
  ]);
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

exports.assignArmor = assignArmor;
exports.lightArmor = lightArmor;
exports.mediumArmor = mediumArmor;
exports.heavyArmor = heavyArmor;
exports.shields = shields;
