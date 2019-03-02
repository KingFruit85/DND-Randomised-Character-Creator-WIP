const lightArmor = {
    no_armor: {
        name: "No Armor"
    },
    padded: {
        name: "Padded Armor",
        Cost: "5gp",
        ArmorClass: "11 + DEX",
        StrengthRequirement: "",
        Stealth: "Disadvantage",
        Weight: "8lb"
    },
    leather: {
        name: "Leather Armor",
        Cost: "10 gp",
        ArmorClass: "11 + DEX",
        Weight: "10lb"
    },
    studdedLeather: {
        name: "Studded Leather Armor",
        Cost: "45 gp",
        ArmorClass: "12 + DEX",
        StrengthRequirement: "",
        Stealth: "",
        Weight: "13lb"
    }
}

const mediumArmor = {

    hide: {
        name: "Hide Armor",
        Cost: "10gp",
        ArmorClass: "12 + DEX(Max 2)",
        StrengthRequirement: "",
        Stealth: "",
        Weight: "12lb"
    },
    chainShirt: {
        name: "Chain Shirt",
        Cost: "50gp",
        ArmorClass: "13 + DEX(max 2)",
        StrengthRequirement: "",
        Stealth: "",
        Weight: "20lb"
    },
    scaleMail: {
        name: "Scale Mail",
        Cost: "50gp",
        ArmorClass: "14 + DEX(max 2)",
        StrengthRequirement: "",
        Stealth: "Disadvantage",
        Weight: "45lb"
    },
    breastplate: {
        name: "Breastplate",
        Cost: "400gp",
        ArmorClass: "15 + DEX(max 2)",
        StrengthRequirement: "",
        Stealth: "Disadvantage",
        Weight: "40lb"
    },
    halfPlate: {
        name: "HalfPlate",
        Cost: "750gp",
        ArmorClass: "11 + DEX",
        StrengthRequirement: "",
        Stealth: "",
        Weight: "8lb"
    }
}

const heavyArmor = {

    ringMail: {
        name: "Ring Mail",
        Cost: "30 gp",
        ArmorClass: "14",
        StrengthRequirement: "—",
        Stealth: "Disadvantage",
        Weight: "40 lb"
    },
    chainMail: {
        name: "Chain Mail",
        Cost: "75 gp",
        ArmorClass: "16",
        StrengthRequirement: "STR 13",
        Stealth: "Disadvantage",
        Weight: "55 lb"
    },
    splint: {
        name: "Splint Mail",
        Cost: "200 gp",
        ArmorClass: "17",
        StrengthRequirement: "STR 15",
        Stealth: "Disadvantage",
        Weight: "60 lb"
    },
    plate: {
        name: "Plate Mail",
        Cost: "1500 gp",
        ArmorClass: "18",
        StrengthRequirement: "STR 15",
        Stealth: "Disadvantage",
        Weight: "65 lb"
    },

}

const shields = {
    shield: {
        name: "Shield",
        Cost: "10gp"
    }

};



exports.lightArmor = lightArmor;
exports.mediumArmor = mediumArmor;
exports.heavyArmor = heavyArmor;
exports.shields = shields;
