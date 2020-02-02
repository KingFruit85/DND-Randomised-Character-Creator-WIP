const lightArmor = {

    padded: {
        name: "Padded Armor",
        Cost: "5gp",
        baseArmorClass:11,
        additionalModifier:"DEX",
        modifierLimit:null,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:true,
        Weight:8,
        category:"light armor"
    },
    leather: {
        name: "Leather Armor",
        Cost: "10 gp",
        baseArmorClass: 11,
        additionalModifier:"DEX",
        modifierLimit:null,
        strengthRequirement:false,
        stealthDisadvantage:false,
        Weight:10,
        category:"light armor"
    },
    studdedLeather: {
        name: "Studded Leather Armor",
        Cost: "45 gp",
        baseArmorClass:12,
        additionalModifier:"DEX",
        modifierLimit:null,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:false,
        Weight:13,
        category:"light armor"
    }
};

const mediumArmor = {

    hide: {
        name: "Hide Armor",
        Cost: "10gp",
        baseArmorClass:12,
        additionalModifier:"DEX",
        modifierLimit:2,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:false,
        Weight:12,
        category:"medium armor"
    },
    chainShirt: {
        name: "Chain Shirt",
        Cost: "50gp",
        baseArmorClass:13,
        additionalModifier:"DEX",
        modifierLimit:2,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:false,
        Weight:20,
        category:"medium armor"
    },
    scaleMail: {
        name: "Scale Mail",
        Cost: "50gp",
        baseArmorClass:14,
        additionalModifier:"DEX",
        modifierLimit:2,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:true,
        Weight:45,
        category:"medium armor"
    },
    breastplate: {
        name: "Breastplate",
        Cost: "400gp",
        baseArmorClass:15,
        additionalModifier:"DEX",
        modifierLimit:2,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:false,
        Weight:40,
        category:"medium armor"
    },
    halfPlate: {
        name: "HalfPlate",
        Cost: "750gp",
        baseArmorClass:11,
        additionalModifier:"DEX",
        modifierLimit:null,
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage:true,
        Weight:8,
        category:"medium armor"
    }
};

const heavyArmor = {

    ringMail: {
        name: "Ring Mail",
        Cost: "30 gp",
        baseArmorClass: "14",
        strengthRequirement:false,
        strengthRequirementValue:null,
        stealthDisadvantage: true,
        Weight:40,
        category:"heavy armor"
    },
    chainMail: {
        name: "Chain Mail",
        Cost: "75 gp",
        baseArmorClass: "16",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:13,
        stealthDisadvantage: true,
        Weight:55,
        category:"heavy armor"
    },
    splint: {
        name: "Splint Mail",
        Cost: "200 gp",
        baseArmorClass: "17",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:15,
        stealthDisadvantage: true,
        Weight:60,
        category:"heavy armor"
    },
    plate: {
        name: "Plate Mail",
        Cost: "1500 gp",
        baseArmorClass: "18",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:15,
        stealthDisadvantage: true,
        Weight:65,
        category:"heavy armor"
    },

};

const shields = {
    shield: {
        name: "Shield",
        Cost: "10gp"
    },

    woodenShield:{
      name:"Wooden Shield",
      cost:"10gp"
    }

};

function assignArmor(className, strengthScore){

  switch (true) {
    case chartype === "bard":return getBardArmor();
    case chartype === "barbarian":
    case chartype === "monk":
    case chartype === "cleric":
    case chartype === "druid":
    case chartype === "fighter":
    case chartype === "paladin":
    case chartype === "ranger":
    case chartype === "rogue":
    case chartype === "sorcerer":
    case chartype === "warlock":
    case chartype === "wizard":

      break;
    default:

  }
}


function canWearArmor(armor, strengthScore, armorProficiencies){
  if(armor.strengthRequirement === true && armor.strengthRequirementValue <= strengthScore && armorProficiencies.includes(armor.category)){
    return true;
  }else {
    return false;
  }

}

function getBardArmor(strengthScore, armorProficiencies){
  let check = canWearArmor(lightArmor.leather, strengthScore, armorProficiencies);

  if (check === true){
    return lightArmor.leather;
  }else{
    return null;
  }




}

function getBarbarianArmor(){

}

function getMonkArmor(){

}

function getClericArmor(){

}

function getDruidArmor(){

}

function getFighterArmor(){

}

function getPaladinArmor(){

}

function getRangerArmor(){

}

function getRogueArmor(){

}

function getSorcererArmor(){

}

function getWarlockArmor(){

}

function getWizardArmor(){

}


exports.assignArmor = assignArmor;
exports.lightArmor = lightArmor;
exports.mediumArmor = mediumArmor;
exports.heavyArmor = heavyArmor;
exports.shields = shields;
