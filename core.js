const classes = require('./classes.js');
const utils = require('./utils.js');
const racial_traits =require('./racial_traits.js');
const spells =require('./spells.js');
const names =require('./names.js');
const fs = require('fs');




// TODO: refactor, must be a cleaner way to do this
//Takes a string representing a dice roll, such as "2d4" and returns a value in inches
function returnHeightAndWeight(height, weight) {

  let rollAmountHeight = height.substring(0, height.indexOf('d'));
  let diceTypeHeight   = height.substring(height.indexOf('d') +1);

  let rollAmountWeight = weight.substring(0, weight.indexOf('d'));
  let diceTypeWeight   = weight.substring(weight.indexOf('d') +1);

  let sumOfRolls = null;
  let heightWeight =[];

  for (i = 1; i <= rollAmountHeight; i++){
    sumOfRolls +=  utils.returnRandomNumberInRange(1,diceTypeHeight);
  }

  //conversion from feet to inches, had to do some ugly stuff to stop super long floats
  heightPrep = parseFloat((sumOfRolls / 12).toFixed(1));
  heightPrep = heightPrep.toString().substring(0,2);
  heightPrep = parseFloat(heightPrep);
  heightWeight.push(heightPrep);


  sumOfRolls = null; //reset sumOfRolls

  for (j = 1; j <= rollAmountWeight; j++){
    sumOfRolls +=  utils.returnRandomNumberInRange(1,diceTypeWeight);
  }

  heightWeight.push(heightWeight[0] * sumOfRolls);

  return heightWeight;

}

//returns a random alignment // TODO: make the assigned alignments fall in line with the player hand book guide
function returnRandomAlignment() {
    return utils.returnRandomArrayItem([
        "Lawful Good",
        "Neutral Good",
        "Chaotic Good",
        "Lawful Neutral",
        "True Neutral",
        "Chaotic Neutral",
        "Lawful Evil",
        "Neutral Evil",
        "Chaotic Evil"
    ]);
}

//Takes the characters race property as an arguement and returns an age appropriate for that race
function returnCharacterAge(race){

  switch (true) {
    case race === "Dragonborn": return utils.returnRandomNumberInRange(15,80);
    case race === "Dwarf":      return utils.returnRandomNumberInRange(50,350);
    case race === "Elf":        return utils.returnRandomNumberInRange(100,750);
    case race === "Gnome":      return utils.returnRandomNumberInRange(40,450);
    case race === "Half Elf":   return utils.returnRandomNumberInRange(20,180);
    case race === "Half Orc":   return utils.returnRandomNumberInRange(14,75);
    case race === "Halfling":   return utils.returnRandomNumberInRange(20,250);
    case race === "Human":      return utils.returnRandomNumberInRange(16,100);
    case race === "Tiefling":   return utils.returnRandomNumberInRange(16,120);
    default:return "Fell though switch case [returnCharacterAge()]";
  }

}

//Takes the character object as it's argument and applies the racial bonuses
function applySubraceBonuses(char){

  character = char;

  switch (true) {
    case character.race === "Dragonborn":applyDragonbornRaceBonuses(character);break;
    case character.race === "Dwarf":applyDwarfRaceBonuses(character);break;
    case character.race === "Elf":applyElfRaceBonuses(character);break;
    case character.race === "Gnome":applyGnomeRaceBonuses(character);break;
    case character.race === "Half Elf":applyHalfElfRaceBonuses(character);break;
    case character.race === "Half Orc":applyHalfOrcRaceBonuses(character);break;
    case character.race === "Halfling":applyHalflingRaceBonuses(character);break;
    case character.race === "Human":applyHumanRaceBonuses(character);break;
    case character.race === "Tiefling":applyTieflingRaceBonuses(character);break;
    default: return "Fell though switch case [applySubraceBonuses()]";

  }

  return character;

}

// TODO: add subraces based on https://dnd5e.fandom.com/wiki/Character_Details
// TODO: surely this can be refactored?
function returnCharacterHeight(race) {

    let additionalHeightAndWeight = [];

    let heightAndWeight = [];

    switch (true) {
        case race === "Dragonborn":
            additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d6");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 5.6 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 175 + " lbs";
            break;
        case race === "Dwarf":
            additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d6");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 3.8 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 115 + " lbs";
            break;
        case race === "Elf":
            additionalHeightAndWeight = returnHeightAndWeight("2d10", "1d4");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 4.6 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 90 + " lbs";
            break;
        case race === "Gnome":
            additionalHeightAndWeight = returnHeightAndWeight("2d4", "1d1");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 2.11 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 35 + " lbs";
            break;
        case race === "Half Elf":
            additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d4");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 4.9 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
            break;
        case race === "Half Orc":
            additionalHeightAndWeight = returnHeightAndWeight("2d10", "2d6");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 4.10 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 140 + " lbs";
            break;
        case race === "Halfling":
            additionalHeightAndWeight = returnHeightAndWeight("2d4", "1d1");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 2.7 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 35 + " lbs";
            break;
        case race === "Human":
            additionalHeightAndWeight = returnHeightAndWeight("2d10", "2d4");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 4.8 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
            break;
        case race === "Tiefling":
            additionalHeightAndWeight = returnHeightAndWeight("2d8", "2d4");
            heightAndWeight[0] = additionalHeightAndWeight[0] + 4.9 + " ft";
            heightAndWeight[1] = additionalHeightAndWeight[1] + 110 + " lbs";
            break;

        default: return "invalid race provided as function arguement [returnCharacterHeight()]";


    }

    return heightAndWeight;

}

function returnDragonbornFeatures(draconicAncestry){

  let draconicAncestryFeatures = [
    {colour:"Black",  damageType:"Acid",	   breathWeapon:  "5 ft by 30 ft line (Dex save)"},
    {colour:"Blue",	  damageType:"Lightning",breathWeapon:	"5 ft by 30 ft line (Dex save)"},
    {colour:"Brass",	damageType:"Fire",     breathWeapon:	"5 ft by 30 ft line (Dex save)"},
    {colour:"Bronze",	damageType:"Lightning",breathWeapon:	"5 ft by 30 ft line (Dex save)"},
    {colour:"Copper",	damageType:"Acid",     breathWeapon:	"5 ft by 30 ft line (Dex save)"},
    {colour:"Gold",	  damageType:"Fire",     breathWeapon:	"15 ft cone (Dex save)"},
    {colour:"Green",	damageType:"Poison",   breathWeapon:	"15 ft cone (Con save)"},
    {colour:"Red",	  damageType:"Fire",     breathWeapon:	"15 ft cone (Dex save)"},
    {colour:"Silver",	damageType:"Cold",     breathWeapon:	"15 ft cone (Con save)"},
    {colour:"White",	damageType:"Cold",     breathWeapon:	"15 ft cone (Con save)"}
  ];

  var ancestryDetails = draconicAncestryFeatures.filter(arrayObject => {
      return arrayObject.colour === draconicAncestry;
  });

  return ancestryDetails;

}

function applyDragonbornRaceBonuses() {

    character.abilityScores.str += 2;
    character.abilityScores.cha += 1;
    character.speed = 30;
    character.draconicAncestry = utils.returnRandomArrayItem(["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]);
    character.resistances = returnDragonbornFeatures(character.draconicAncestry)[0].damageType;
    character.breathWeapon = returnDragonbornFeatures(character.draconicAncestry)[0].breathWeapon;
    character.racialAbilities = racial_traits.dragonborn_racial;
    character.languages = ["Common", "Draconic"];
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race);
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

}

function applyDwarfRaceBonuses() {

    character.abilityScores.con += 2;
    character.speed = 25;
    character.racialAbilities = racial_traits.dwarf_racial;
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
    character.racialAbilities = racial_traits.elf_racial;
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
    character.racialAbilities = racial_traits.gnome_racial;
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
    returnedScores.push(utils.returnRandomArrayItem(abilityScoreOptions));
    //then remove that ability score from abilityScoreOptions so we dont pick it twice
    abilityScoreOptions.splice(abilityScoreOptions.indexOf(returnedScores[0]),1);
    //Push the second score
    returnedScores.push(utils.returnRandomArrayItem(abilityScoreOptions));
    //Add the scores
    character.abilityScores.cha += 2;
    character.abilityScores[returnedScores[0]] += 1;
    character.abilityScores[returnedScores[1]] += 1;
    character.speed = 30;
    character.racialAbilities = racial_traits.halfElf_racial;
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
    character.racialAbilities = racial_traits.halfOrc_racial;
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
    character.racialAbilities = racial_traits.halfling_racial;
    character.languages = ["Common", "Halfling"];
    character.resistances = null;
    character.sizeClass = "Small";
    let heightWeight = returnCharacterHeight(character.race);
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

}

function applyHumanRaceBonuses() {

    character.abilityScores.str += 1;
    character.abilityScores.con += 1;
    character.abilityScores.dex += 1;
    character.abilityScores.int += 1;
    character.abilityScores.wis += 1;
    character.abilityScores.cha += 1;
    character.speed = 30;
    character.racialAbilities = null; // TODO: Humans don't have racial traits but they do have vaiant rules.
    character.languages = ["Common", returnRandomLanguage()];
    character.resistances = null;
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race);
    character.height = heightWeight[0];
    character.weight = heightWeight[1];
    // TODO: Variant human
}

function applyTieflingRaceBonuses() {

    character.abilityScores.int += 1;
    character.abilityScores.cha += 2;
    character.speed = 30;
    character.racialAbilities = racial_traits.tiefling_racial;
    character.languages = ["Common", "Infernal"];
    character.resistances = "Fire";
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race);
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

}

function returnRandomLanguage() {
    return utils.returnRandomArrayItem(["Abyssal",
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
                                        "Undercommon"
                                      ]);
                                    }

//Simulates the rolling of 4D6, removing the lowest value die and returns the sum of the remainder
function roll4D6RemoveLowestAndSum() {

    var numbers = [];

    for (let i = 0; i < 4; i++) {
        numbers.push(utils.returnRandomNumberInRange(1, 6));
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

//Returns a random character class as a string // TODO: add remaining character classes
function returnRandomCharacterClass() {
    return utils.returnRandomArrayItem(classes.classList);
}

//Returns a random gender
function returnRandomGender() {
    return utils.returnRandomArrayItem(["male", "female"]);
}

//Returns an array of ordered ability score prefrences based on the class supplied in the arguement
function returnAbilityScorePreference (characterClass) {

    switch (true) {

        case characterClass.name === "barbarian": return ["str", "con", "dex", "wis", "cha", "int"];
        case characterClass.name === "bard":      return ["cha", "dex", "con", "wis", "str", "int"];
        case characterClass.name === "monk":      return ["dex", "wis", "con", "str", "cha", "int"];
        case characterClass.name === "cleric":    return ["wis", "str", "con", "dex", "cha", "int"];
        case characterClass.name === "druid":     return ["wis", "dex", "con", "cha", "int", "str"];
        case characterClass.name === "paladin":   return ["str", "cha", "con", "wis", "dex", "int"];
        case characterClass.name === "ranger":    return ["dex", "con", "wis", "str", "cha", "int"];
        case characterClass.name === "rogue":     return ["dex", "con", "wis", "cha", "int", "str"];
        case characterClass.name === "sorcerer":  return ["cha", "con", "int", "wis", "dex", "str"];
        case characterClass.name === "warlock":   return ["cha", "con", "dex", "wis", "int", "str"];
        case characterClass.name === "wizard":    return ["int", "con", "dex", "wis", "cha", "str"];
        case characterClass.name === "fighter" && characterClass.primaryAbility === "str": return ["str", "con", "dex", "wis", "cha", "int"];
        case characterClass.name === "fighter" && characterClass.primaryAbility === "dex": return ["dex", "con", "str", "wis", "cha", "int"];

        default: return "invalid character class supplied as argument [returnAbilityScorePreference()]";

    }

}


//calculates an ability score's modifier
function returnAbilityScoreModifier(stat){

  return Math.floor( ( stat - 10 ) / 2 );

}

//Returns an array of abilityscores reordered in prefrence on the class argument

function returnAbilityScores(characterClass) {

    let abilityScores = new Uint32Array(returnSixNumbers()).sort().reverse();
    let abilityScoreOrder = returnAbilityScorePreference(characterClass);

    let characterAbilityScores = {};

    characterAbilityScores.str = abilityScores[abilityScoreOrder.indexOf("str")];
    characterAbilityScores.strMod = returnAbilityScoreModifier(characterAbilityScores.str);

    characterAbilityScores.con = abilityScores[abilityScoreOrder.indexOf("con")];
    characterAbilityScores.conMod = returnAbilityScoreModifier(characterAbilityScores.con);

    characterAbilityScores.dex = abilityScores[abilityScoreOrder.indexOf("dex")];
    characterAbilityScores.dexMod = returnAbilityScoreModifier(characterAbilityScores.dex);

    characterAbilityScores.int = abilityScores[abilityScoreOrder.indexOf("int")];
    characterAbilityScores.intMod = returnAbilityScoreModifier(characterAbilityScores.int);

    characterAbilityScores.wis = abilityScores[abilityScoreOrder.indexOf("wis")];
    characterAbilityScores.wisMod = returnAbilityScoreModifier(characterAbilityScores.wis);

    characterAbilityScores.cha = abilityScores[abilityScoreOrder.indexOf("cha")];
    characterAbilityScores.chaMod = returnAbilityScoreModifier(characterAbilityScores.cha);

    return characterAbilityScores;

}


function returnRandomRace() {

    return utils.returnRandomArrayItem(["Dragonborn", "Dwarf", "Elf", "Gnome", "Half Elf", "Half Orc", "Halfling", "Human", "Tiefling"]);

}



function calculateModifier(abilityScores) {
  for (var key in abilityScores) {

    console.log("score" + abilityScores[key] + "Modifier" + returnAbilityScoreModifier(abilityScores[key]));
  }
}

function calculateFirstLevelHitPoints(characterClassName, conModifier){

  switch (true) {
    case characterClassName === "bard":  return 8 + conModifier;
    case characterClassName === "barbarian": return 12 + conModifier;
    case characterClassName === "cleric":  return 8 + conModifier;
    case characterClassName === "fighter": return 10 + conModifier;
    case characterClassName === "monk":  return 8 + conModifier;
    case characterClassName === "paladin": return 10 + conModifier;
    case characterClassName === "ranger":  return 10 + conModifier;
    case characterClassName === "rogue": return 8 + conModifier;
    case characterClassName === "sorcerer":  return 6 + conModifier;
    case characterClassName === "warlock": return 8 + conModifier;
    case characterClassName === "wizard":  return 6 + conModifier;

    default:return "fell though switch case";

  }

}

function calculateSavingThrowScores(abilityScores, savingThrowProficiencies, proficiencyModifier){

  let savingThrows = {

    strength:    {modifier:abilityScores.strMod, proficient: savingThrowProficiencies.includes("str")},
    dexterity:   {modifier:abilityScores.dexMod, proficient: savingThrowProficiencies.includes("dex")},
    constitution:{modifier:abilityScores.conMod, proficient: savingThrowProficiencies.includes("con")},
    intelligence:{modifier:abilityScores.intMod, proficient: savingThrowProficiencies.includes("int")},
    wisdom:      {modifier:abilityScores.wisMod, proficient: savingThrowProficiencies.includes("wis")},
    charasma:    {modifier:abilityScores.chaMod, proficient: savingThrowProficiencies.includes("cha")}

  };

  if (savingThrows.strength.proficient     === true){savingThrows.strength.modifier     += proficiencyModifier;}
  if (savingThrows.dexterity.proficient    === true){savingThrows.dexterity.modifier    += proficiencyModifier;}
  if (savingThrows.constitution.proficient === true){savingThrows.constitution.modifier += proficiencyModifier;}
  if (savingThrows.intelligence.proficient === true){savingThrows.intelligence.modifier += proficiencyModifier;}
  if (savingThrows.wisdom.proficient       === true){savingThrows.wisdom.modifier       += proficiencyModifier;}
  if (savingThrows.charasma.proficient     === true){savingThrows.charasma.modifier     += proficiencyModifier;}

  return savingThrows;

}

function calculateSkillScores(abilityScores, skillProficiencies, proficiencyModifier){

  let skillScores = {

    athletics:     {modifier:abilityScores.strMod, proficient:skillProficiencies.includes("athletics")},
    acrobatics:    {modifier:abilityScores.dexMod, proficient:skillProficiencies.includes("acrobatics")},
    sleightOfHand: {modifier:abilityScores.dexMod, proficient:skillProficiencies.includes("sleight of hand")},
    arcana:        {modifier:abilityScores.intMod, proficient:skillProficiencies.includes("arcana")},
    stealth:       {modifier:abilityScores.dexMod, proficient:skillProficiencies.includes("stealth")},
    history:       {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("history")},
    nature:        {modifier:abilityScores.intMod, proficient:skillProficiencies.includes("nature")},
    religion:      {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("religion")},
    animalHandling:{modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("animal handling")},
    insight:       {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("insight")},
    medicine:      {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("medicine")},
    perception:    {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("perception")},
    survival:      {modifier:abilityScores.wisMod, proficient:skillProficiencies.includes("survival")},
    deception:     {modifier:abilityScores.chaMod, proficient:skillProficiencies.includes("deception")},
    intimidation:  {modifier:abilityScores.chaMod, proficient:skillProficiencies.includes("intimidation")},
    performance:   {modifier:abilityScores.chaMod, proficient:skillProficiencies.includes("performance")},
    persuasion:    {modifier:abilityScores.chaMod, proficient:skillProficiencies.includes("persuasion")}

  };


  if (skillScores.athletics.proficient === true){skillScores.athletics.modifier += proficiencyModifier;}
  if (skillScores.acrobatics.proficient === true){skillScores.acrobatics.modifier += proficiencyModifier;}
  if (skillScores.sleightOfHand.proficient === true){skillScores.sleightOfHand.modifier += proficiencyModifier;}
  if (skillScores.arcana.proficient === true){skillScores.arcana.modifier += proficiencyModifier;}
  if (skillScores.stealth.proficient === true){skillScores.stealth.modifier += proficiencyModifier;}
  if (skillScores.history.proficient === true){skillScores.history.modifier += proficiencyModifier;}
  if (skillScores.nature.proficient === true){skillScores.nature.modifier += proficiencyModifier;}
  if (skillScores.religion.proficient === true){skillScores.religion.modifier += proficiencyModifier;}
  if (skillScores.animalHandling.proficient === true){skillScores.animalHandling.modifier += proficiencyModifier;}
  if (skillScores.insight.proficient === true){skillScores.insight.modifier += proficiencyModifier;}
  if (skillScores.medicine.proficient === true){skillScores.medicine.modifier += proficiencyModifier;}
  if (skillScores.perception.proficient === true){skillScores.perception.modifier += proficiencyModifier;}
  if (skillScores.survival.proficient === true){skillScores.survival.modifier += proficiencyModifier;}
  if (skillScores.deception.proficient === true){skillScores.deception.modifier += proficiencyModifier;}
  if (skillScores.intimidation.proficient === true){skillScores.intimidation.modifier += proficiencyModifier;}
  if (skillScores.performance.proficient === true){skillScores.performance.modifier += proficiencyModifier;}
  if (skillScores.persuasion.proficient === true){skillScores.persuasion.modifier += proficiencyModifier;}

  return skillScores;

}

//// TODO: refactor this beast
function calculateSpellslots(characterClass){

  let spellSlots = {
    cantrips:    {avalible:0, spells:[]},
    firstLevel:  {avalible:0, spells:[]},
    secondLevel: {avalible:0, spells:[]},
    thirdLevel:  {avalible:0, spells:[]},
    forthLevel:  {avalible:0, spells:[]},
    fifthLevel:  {avalible:0, spells:[]},
    sixthLevel:  {avalible:0, spells:[]},
    seventhLevel:{avalible:0, spells:[]},
    eighthLevel: {avalible:0, spells:[]},
    ninthLevel:  {avalible:0, spells:[]},
  };

  if (characterClass === "bard"){

    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.bardCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.bardLevel1, spellSlots.firstLevel.avalible));

    spellSlots.totalSpellsKnown = 4;

  }

  else if (characterClass === "cleric") {

    spellSlots.cantrips.avalible = 3;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.clericCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.clericLevel1, spellSlots.firstLevel.avalible));

  }

  else if (characterClass === "druid") {

    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.druidCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.druidLevel1, spellSlots.firstLevel.avalible));

  }

  else if (characterClass === "paladin") {

    spellSlots.cantrips.avalible = 0;

    spellSlots.firstLevel.avalible = 0;

  }
  else if (characterClass === "ranger") {
    spellSlots.cantrips.avalible = 0;
    spellSlots.firstLevel.avalible = 0;
  }
  else if (characterClass === "sorcerer") {

    spellSlots.cantrips.avalible = 4;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.sorcererCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.sorcererLevel1, spellSlots.firstLevel.avalible));

    spellSlots.totalSpellsKnown = 2;

  }
  else if (characterClass === "warlock") {

    spellSlots.cantrips.avalible = 2;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.warlockCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 1;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.warlockLevel1, spellSlots.firstLevel.avalible));

    spellSlots.totalSpellsKnown = 2;

  }
  else if (characterClass === "wizard") {

    spellSlots.cantrips.avalible = 3;
    spellSlots.cantrips.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.wizardCantrips, spellSlots.cantrips.avalible));

    spellSlots.firstLevel.avalible = 2;
    spellSlots.firstLevel.spells.push(utils.returnRandomObjectPropertiesAndValues(spells.wizardLevel1, spellSlots.firstLevel.avalible));

  }

  return spellSlots;

}


//NewCharacter Construtor
function NewCharacter(){

  this.level = 1;// TODO: add level scaling
  this.proficiencyModifier = 2; //TODO: this should be derived from the charcter level
  this.characterClass = returnRandomCharacterClass();
  this.characterClassAbilities = classes.addClassFeatures(this.characterClass.name);
  this.race = returnRandomRace();
  this.gender = returnRandomGender();
  this.name = names.returnRandomName(this.gender);
  this.alignment = returnRandomAlignment();
  this.abilityScores = returnAbilityScores(this.characterClass);
  this.hitPoints = calculateFirstLevelHitPoints(this.characterClass.name, this.abilityScores.conMod);

  returnCharacterAge(this);
  applySubraceBonuses(this.race);

  this.savingThrowScores = calculateSavingThrowScores(this.abilityScores, this.characterClass.savingThrows, this.proficiencyModifier);
  this.skillScores = calculateSkillScores(this.abilityScores, this.characterClass.skillProficiencies, this.proficiencyModifier);
  this.spellSlots = calculateSpellslots(this.characterClass.name);
  this.characterClass.initiative = this.abilityScores.dexMod;

  return this;

}


x = new NewCharacter();
console.log(JSON.stringify(x, undefined, 2));

JsonExport = JSON.stringify(x, undefined, 2);

fs.writeFile("./" + x.name.firstName + " " + x.name.lastName + "- " + x.race + " " + x.characterClass.name + ".JSON", JsonExport, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    console.log(JsonExport);
});
