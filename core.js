
//Returns a random number between the two given arguements, returns error message if incorrect arguements given
function returnRandomNumberInRange(minValue, maxValue) {

    if (minValue > maxValue || minValue === undefined || maxValue === undefined) {

        return "Unexpected arguements, please provide minimum and maximum valuses in that order";

    } else {

        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    }

};


//returns a floating point value between the given arguements
function  returnRandomFloatInRange(minValue, maxValue) {
  return Math.random() * (maxValue - minValue) + minValue;
};

//Takes a string representing a dice roll, such as "2d4" and returns a value in inches
function returnHeightAndWeight(height, weight) {

  let rollAmountHeight = height.substring(0, height.indexOf('d'));
  let diceTypeHeight   = height.substring(height.indexOf('d') +1);


  let rollAmountWeight = weight.substring(0, weight.indexOf('d'));
  let diceTypeWeight   = weight.substring(weight.indexOf('d') +1);


  let sumOfRolls = null;
  let heightWeight =[];

  for (i = 1; i <= rollAmountHeight; i++){
    sumOfRolls +=  returnRandomNumberInRange(1,diceTypeHeight);
  };

  //conversion from feet to inches, had to do some ugly stuff to stop super long floats
  heightPrep = parseFloat((sumOfRolls / 12).toFixed(1))
  heightPrep = heightPrep.toString().substring(0,2);
  heightPrep = parseFloat(heightPrep)
  heightWeight.push(heightPrep);


  sumOfRolls = null; //reset sumOfRolls

  for (j = 1; j <= rollAmountWeight; j++){
    sumOfRolls +=  returnRandomNumberInRange(1,diceTypeWeight);

  };


  heightWeight.push(heightWeight[0] * sumOfRolls);

  return heightWeight;

}

//returns a random alignment // TODO: make the assigned alignments fall in line with the player hand book guide
function returnRandomAlignment() {
    return returnRandomArrayItem([
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
};

//Returns a random element of the array provided as the arguement
function returnRandomArrayItem(array){
    return array[returnRandomNumberInRange(0, array.length - 1)]
};

function returnRandomRace() {
    return returnRandomArrayItem(["Dragonborn", "Dwarf", "Elf", "Gnome", "Half Elf", "Half Orc", "Halfling", "Human", "Tiefling"])
};

function returnCharacterAge(character){

  switch (true) {
    case character.race === "Dragonborn": character.age = returnRandomNumberInRange(15,80);break;
    case character.race === "Dwarf": character.age = returnRandomNumberInRange(50,350);break;
    case character.race === "Elf": character.age = returnRandomNumberInRange(100,750);break;
    case character.race === "Gnome": character.age = returnRandomNumberInRange(40,450);break;
    case character.race === "Half Elf": character.age = returnRandomNumberInRange(20,180);break;
    case character.race === "Half Orc": character.age = returnRandomNumberInRange(14,75);break;
    case character.race === "Halfling": character.age = returnRandomNumberInRange(20,250);break;
    case character.race === "Human": character.age = returnRandomNumberInRange(16,100);break;
    case character.race === "Tiefling": character.age = returnRandomNumberInRange(16,120);break;
    default:character.age = "Fell though switch case [returnCharacterAge()]"

  };
  return character;
};

function applySubraceBonuses(char){

  character = char;

  switch (true) {
    case character.race === "Dragonborn":applyDragonbornRaceBonuses(character);break;
    case character.race === "Dwarf":applyDwarfRaceBonuses(character);break;
    case character.race === "Elf":applyElfRaceBonuses(character);break;
    case character.race === "Gnome":applyGnomeRaceBonuses(character);break
    case character.race === "Half Elf":applyHalfElfRaceBonuses(character);break;
    case character.race === "Half Orc":applyHalfOrcRaceBonuses(character);break;
    case character.race === "Halfling":applyHalflingRaceBonuses(character);break;
    case character.race === "Human":applyHumanRaceBonuses(character);break;
    case character.race === "Tiefling":applyTieflingRaceBonuses(character);break;
    default:"Fell though switch case [applySubraceBonuses()]"

  };
  return character;
};

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

        default:
            return "invalid race provided as function arguement [returnCharacterHeight()]"

    };
    return heightAndWeight;
};

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

};

function applyDragonbornRaceBonuses() {

    character.abilityScores.str += 2;
    character.abilityScores.cha += 1;
    character.speed = 30;
    character.draconicAncestry = returnRandomArrayItem(["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"]);
    character.resistances = returnDragonbornFeatures(character.draconicAncestry)[0].damageType;
    character.breathWeapon = returnDragonbornFeatures(character.draconicAncestry)[0].breathWeapon;
    character.racialAbilities = null // TODO: link to racial_traits.js
    character.languages = ["Common", "Draconic"];
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

};

function applyDwarfRaceBonuses() {

    character.abilityScores.con += 2;
    character.speed = 25;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Dwarvish"];
    character.resistances = "Poison"
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];
};

function applyElfRaceBonuses(){

    character.abilityScores.dex +=2;
    character.speed = 30;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Elven"];
    character.resistances = null;
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

};

function applyGnomeRaceBonuses() {

    character.abilityScores.int +=2;
    character.speed = 25;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Gnomish"];
    character.resistances = null;
    character.sizeClass = "Small";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

};

function applyHalfElfRaceBonuses() {

    character.abilityScores.cha +=2;
    character.speed = 30;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Elven"]; // TODO: half elves can also speak one extra random language
    character.resistances = null;
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];
    // TODO: half elves have a ton of other stuff that is applied

};

function applyHalfOrcRaceBonuses() {

    character.abilityScores.str +=2;
    character.abilityScores.con +=1;
    character.speed = 30;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Orcish"];
    character.resistances = null;
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

};

function applyHalflingRaceBonuses() {

    character.abilityScores.dex +=2;
    character.speed = 25;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common", "Halfling"];
    character.resistances = null;
    character.sizeClass = "Small";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];

}

function applyHumanRaceBonuses() {

    character.abilityScores.str +=1;
    character.abilityScores.con +=1;
    character.abilityScores.dex +=1;
    character.abilityScores.int +=1;
    character.abilityScores.wis +=1;
    character.abilityScores.cha +=1;
    character.speed = 30;
    character.racialAbilities = null; // TODO: link to racial_traits.js
    character.languages = ["Common"]; //// TODO: add extra random language
    character.resistances = null;
    character.sizeClass = "Medium";
    let heightWeight = returnCharacterHeight(character.race)
    character.height = heightWeight[0];
    character.weight = heightWeight[1];
    // TODO: Variant human
};

function applyTieflingRaceBonuses() {

  character.abilityScores.str +=1; // TODO: also need to add a randome +1 to cha or dex, perhaps decided based on class stat preference
  character.speed = 30;
  character.racialAbilities = null; // TODO: link to racial_traits.js
  character.languages = ["Common", "Infernal"]; //// TODO: add extra random language
  character.resistances = "Fire";
  character.sizeClass = "Medium";
  let heightWeight = returnCharacterHeight(character.race)
  character.height = heightWeight[0];
  character.weight = heightWeight[1];

};

//Simulates the rolling of 4D6, removing the lowest value die and returns the sum of the remainder
function roll4D6RemoveLowestAndSum() {

    var numbers = [];

    for (let i = 0; i < 4; i++) {
        numbers.push(returnRandomNumberInRange(1, 6));
    };

    numbers.sort().shift();

    var numbers = numbers.reduce((a, b) => a + b, 0);

    return numbers;

};

//Returns 6 freshly rolled ability scores
function returnSixNumbers() {

    var abilityScores = [];

    for (let i = 0; i < 6; i++) {
        abilityScores.push(roll4D6RemoveLowestAndSum());
    };

    return abilityScores;

};

//Returns a random character class as a string // TODO: add remaining character classes
function returnRandomCharacterClass() {
    return returnRandomArrayItem([
        "Bard",
        "Fighter",
        "Barbarian",
        "Cleric",
        "Druid",
        "Monk",
        "Paladin",
        "Ranger",
        "Rogue",
        "Sorcerer",
        "Warlock",
        "Wizard"
    ]);
};


// TODO: pull from bigger list in new js file
const maleFirstNames = ["Chris", "Ed", "Ralph"];
const femaleFirstNames = ["Magda", "Kelly", "Holly"];
const surnames = ["Long", "Araniseli", "Stringer"];

//Return a random name as a string based gender arguement value
function returnRandomName(gender) {

    if (gender === "Male") {

        return returnRandomArrayItem(maleFirstNames).concat(" ", returnRandomArrayItem(surnames))

    } else {

        return returnRandomArrayItem(femaleFirstNames).concat(" ", returnRandomArrayItem(surnames))

    }

};

//Returns a random gender
function returnRandomGender() {

    return returnRandomArrayItem(["Male", "Female"]);

};

//Returns an array of ordered ability score prefrences based on the class supplied in the arguement
// TODO: add remaining character class stat prefrences
function returnAbilityScorePreference (characterClass) {

    var barbarian = ["str", "con", "dex", "wis", "cha", "int"];
    var bard      = ["cha", "dex", "con", "wis", "str", "int"];
    var monk      = ["dex", "wis", "con", "str", "cha", "int"];

    switch (true) {

        case characterClass === "barbarian": return barbarian; break;
        case characterClass === "bard": return bard; break;
        case characterClass === "monk": return monk; break;

        default: return "invalid character class supplied as argument";

    };

};

//Returns an array of abilityscores reordered in prefrence on the class argument

function returnAbilityScores(characterClass) {

    let abilityScores = new Uint32Array(returnSixNumbers()).sort().reverse();
    let abilityScoreOrder = returnAbilityScorePreference(characterClass);

    let characterAbilityScores = {};

    characterAbilityScores.str = abilityScores[abilityScoreOrder.indexOf("str")];
    characterAbilityScores.con = abilityScores[abilityScoreOrder.indexOf("con")];
    characterAbilityScores.dex = abilityScores[abilityScoreOrder.indexOf("dex")];
    characterAbilityScores.int = abilityScores[abilityScoreOrder.indexOf("int")];
    characterAbilityScores.wis = abilityScores[abilityScoreOrder.indexOf("wis")];
    characterAbilityScores.cha = abilityScores[abilityScoreOrder.indexOf("cha")];

    return characterAbilityScores;

};


//NewCharacter Construtor
function NewCharacter(){

  this.level = 1;// TODO: add level scaling
  this.gender = returnRandomGender();
  this.name = returnRandomName(this.gender);
  this.race = returnRandomRace();
  this.alignment = returnRandomAlignment();
  this.characterClass = returnRandomCharacterClass();
  this.abilityScores = returnAbilityScores(this.characterClass);
  applySubraceBonuses(this);
  returnCharacterAge(this)

};



console.log(JSON.stringify(new NewCharacter(), undefined, 2))
// console.log(returnHeightAndWeight("1d4", "2d4"))
