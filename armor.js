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
        Weight: "8lb"
    },
    leather: {
        name: "Leather Armor",
        Cost: "10 gp",
        baseArmorClass: 11,
        additionalModifier:"DEX",
        modifierLimit:null,
        strengthRequirement:false,
        stealthDisadvantage:false,
        Weight: "10lb"
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
        Weight: "13lb"
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
        Weight: "12lb"
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
        Weight: "20lb"
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
        Weight: "45lb"
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
        Weight: "40lb"
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
        Weight: "8lb"
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
        Weight: "40 lb"
    },
    chainMail: {
        name: "Chain Mail",
        Cost: "75 gp",
        baseArmorClass: "16",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:13,
        stealthDisadvantage: true,
        Weight: "55 lb"
    },
    splint: {
        name: "Splint Mail",
        Cost: "200 gp",
        baseArmorClass: "17",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:15,
        stealthDisadvantage: true,
        Weight: "60 lb"
    },
    plate: {
        name: "Plate Mail",
        Cost: "1500 gp",
        baseArmorClass: "18",
        additionalModifier:null,
        strengthRequirement:true,
        strengthRequirementValue:15,
        stealthDisadvantage: true,
        Weight: "65 lb"
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



exports.lightArmor = lightArmor;
exports.mediumArmor = mediumArmor;
exports.heavyArmor = heavyArmor;
exports.shields = shields;
