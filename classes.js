const core = require('./core.js');
const utils = require('./utils.js')
const weaponsAndShields = require('./weapons.js');
const toolsAndEquipment = require('./tools.js');
const armors = require('./armor');

const skillProficiencies = ["athletics","acrobatics","sleight of hand","stealth","arcana","history",
                            "investigation","nature","religion","animal handling","insight","medicine",
                            "perception","survival","deception","intimidation","performance","persuasion"];

const barbSkillProficiencies = ["animal Handling", "athletics", "intimidation", "nature", "perception", "survival"];

const monkSkillProficiencies = ["acrobatics", "athletics", "history", "insight", "religion", "stealth"];

const clericSkillProficiencies = ["history", "insight", "medicine", "persuasion", "religion"];

const druidSkillProficiencies = ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion",  "survival"];

const fighterSkillProficiencies = ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"];

const paladinSkillProficiencies = ["athletics", "insight", "intimidation", "medicine", "persuasion",  "religion"];

function returnRandomProficiencies(collection, count) {

    var proficiencies = [];

    for (i = 0; i < count; i++) {

        let pickedSkill = utils.returnRandomArrayItem(collection);

        if (proficiencies.includes(pickedSkill) === false) {
            proficiencies.push(pickedSkill);
        } else {
            i--;
        };

    };

	return proficiencies;

};

function addItemXTimes(item, ammount){
  for(x = ammount; x > 0; x--){
    equipment.tools.push(weapons.simpleWeapons.javelin);
  };
}

function addClassFeatures(className){

  let classAbilities = [];

  if(className === "bard"){
    classAbilities.push("spellcasting", "ritual casting", "bardic_inspiration");
  }
  else if (className === "barbarian") {
    classAbilities.push("rage", "unarmored defense");
  }
  else if (className === "fighter") {
    classAbilities.push("second wind");
    classAbilities.push(utils.returnRandomArrayItem(["archery","defense","dueling","great weapon fighting", "protection", "two weapon fighting"]))
  }
  else if (className === "cleric") {
    classAbilities.push("spellcasting", "disciple of life");
  }
  else if (className === "druid") {
    classAbilities.push("spellcasting", "druidic");
  }
  else if (className === "monk") {
    classAbilities.push("unarmored defense", "martial arts");
  }
  else if (className === "paladin") {
    classAbilities.push("divine sense", "lay on hands");
  }
  else if (className === "ranger") {
    let rangerFavoredEnemy = ["aberrations", "beasts", "celestials", "constructs", "dragons",
                              "elementals", "fey", "fiends", "giants", "monstrosities", "oozes",
                              "plants", "undead"]

    classAbilities.push("natural explorer", `favored enemy:${utils.returnRandomArrayItem(rangerFavoredEnemy)}`)
  }
  else if (className === "rogue") {
    classAbilities.push("expertise", "sneak attack", "thieves cant");
  }
  else if (className === "sorcerer") {
    classAbilities.push("spellcasting", "sorcerous origin");
  }
  else if (className === "warlock") {
    classAbilities.push("otherworldly patron", "pact magic");
  }
  else if (className === "wizard") {
    classAbilities.push("spellcasting", "arcane recovery");

  }

  return classAbilities;

};


function createBard() {

    this.name = "bard",
    this.primaryAbility = "cha",
    this.castingAbility = "cha",
    this.hitDie = 8,
    this.savingThrows = ["dex", "cha"],
    this.armorProficiencies = ["light armor"],
    this.weaponProficiencies = ["simple weapons", "hand crossbows", "longswords", "rapiers", "shortswords"],
    this.toolProficiencies = toolsAndEquipment.returnRandomInstruments(2);
    this.skillProficiencies = returnRandomProficiencies(skillProficiencies,3);

    this.equipment = { weapons: [], tools: [], armor: [] };
    this.equipment.armor = armors.lightArmor.leather;
    this.equipment.weapons[0] = weaponsAndShields.simpleWeapons.dagger;
    this.equipment.tools = utils.returnRandomArrayItem([toolsAndEquipment.equipmentPacks.diplomatsPack, toolsAndEquipment.equipmentPacks.entertainersPack]);
    this.equipment.weapons[1] = utils.returnRandomArrayItem([weaponsAndShields.martialMeleeWeapons.rapier, weaponsAndShields.martialMeleeWeapons.longsword]);

};

function createBarbarian() {

  	this.name = "barbarian",
    this.primaryAbility = "str",
    this.hitDie = 12,
    this.savingThrows = ["str", "dex"],
    this.armorProficiencies = ["light armor", "medium armor", "shields"],
    this.weaponProficiencies = ["simple weapons", "martial weapons"],
    this.toolProficiencies = [],
    this.skillProficiencies = returnRandomProficiencies(barbSkillProficiencies, 2)

    this.equipment = { weapons: [], tools: [], armor: [] };
    this.equipment.armor = armors.lightArmor.no_armor;
    this.equipment.tools.push(toolsAndEquipment.equipmentPacks.explorersPack);

    for(x = 4; x > 0; x--)
    {
      this.equipment.tools.push(weaponsAndShields.simpleWeapons.javelin);
    };

    if(utils.returnRandomNumberInRange(0,1) === 0){
      for(x = 0; x < 2; x++){this.equipment.weapons.push(weaponsAndShields.simpleWeapons.handaxe);};
    }
    else{
      this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.simpleWeapons));
    };
    if(utils.returnRandomNumberInRange(0,1) === 0){
      this.equipment.weapons.push(weaponsAndShields.martialMeleeWeapons.greataxe);
    }
    else{
      this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponsFromCollection(weaponsAndShields.martialMeleeWeapons, 1));
    }


};

function createMonk() {

  	this.name = "monk",
    this.primaryAbility = "dex",
    this.hitDie = 8,
    this.savingThrows = ["str", "dex"],
    this.armorProficiencies = ["none"],
    this.weaponProficiencies = ["simple weapons", "shortswords"],
    this.toolProficiencies = toolsAndEquipment.returnRandomInstrument(), //add artisan tools to the selection
    this.skillProficiencies = returnRandomProficiencies(monkSkillProficiencies, 2),

    this.equipment = { weapons: [], tools: [], armor: [] };

    this.equipment.armor = armors.lightArmor.no_armor;

    this.equipment.weapons[0] = utils.returnRandomArrayItem([weaponsAndShields.martialMeleeWeapons.shortsword,
                                                             weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.simpleWeapons)]);

    this.equipment.tools = utils.returnRandomArrayItem([toolsAndEquipment.equipmentPacks.dungeoneersPack,
                                                        toolsAndEquipment.equipmentPacks.explorersPack]);
    for(i = 10; i > 0; i--)
    {
      this.equipment.weapons.push(weaponsAndShields.simpleRangedWeapons.dart);
    };

};

function createCleric() {

  	this.name = "cleric",
    this.primaryAbility = "wis",
    this.hitDie = 8,
    this.savingThrows = ["wis", "cha"],

    this.armorProficiencies = ["light armor", "medium armor", "shields"],
    this.weaponProficiencies = ["simple weapons"],
    this.toolProficiencies = ["none"],
    this.skillProficiencies = returnRandomProficiencies(clericSkillProficiencies, 2);

    //// TODO:ADD CLERIC DOMIAN FEATURES

    this.equipment = { weapons: [], tools: [], armor: [] };

};

function createDruid() {

  	this.name = "druid",
    this.primaryAbility = "wis",
    this.hitDie = 8,
    this.savingThrows = ["int", "wis"],

    this.armorProficiencies = ["light armor", "medium armor", "shields" ],
    this.weaponProficiencies = ["clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"],
    this.toolProficiencies = ["herbalism kit"],
    this.skillProficiencies = returnRandomProficiencies(druidSkillProficiencies, 2);

    this.equipment = { weapons: [], tools: [], armor: [] };

    this.equipment.armor = armors.lightArmor.leather;
    this.equipment.weapons[0] = utils.returnRandomArrayItem([armors.shields.woodenShield,
                                                             weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.simpleWeapons)]);

    this.equipment.weapons[1] = utils.returnRandomArrayItem([weaponsAndShields.martialMeleeWeapons.scimitar,
                                                             weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.simpleWeapons)]);

    this.equipment.tools.push(toolsAndEquipment.equipmentPacks.explorersPack);
    this.equipment.tools.push("Druidic Focus");




};

function createFighter() {

  	this.name = "fighter",
    this.primaryAbility = utils.returnRandomArrayItem(["str", "dex"]),
    this.hitDie = 10,
    this.savingThrows = ["str", "con"],

    this.armorProficiencies = ["light armor", "medium armor", "heavy armor", "shields"],
    this.weaponProficiencies = ["simple weapons", "martial weapons"],
    this.toolProficiencies = ["none"],
    this.skillProficiencies = returnRandomProficiencies(fighterSkillProficiencies, 2);

    this.equipment = { weapons: [], tools: [], armor: [] };

    this.equipment.armor = utils.returnRandomArrayItem([armors.lightArmor.leather, armors.heavyArmor.chainMail]);

    if(utils.returnRandomNumberInRange(0,1) === 0){
      //// TODO: maybe change this to only select weapons that can be used in one hand, or both.
      this.equipment.weapons[0] = weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons);
      this.equipment.weapons[1] = armors.shields.shield;
    }
    else{
      this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons));
      this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons));
    };

    if(utils.returnRandomNumberInRange(0,1) === 0){
      this.equipment.weapons.push(weaponsAndShields.simpleRangedWeapons.lightCrossbow, "20 light crossbow bolts");
    }
    else{
      this.equipment.weapons.push(weaponsAndShields.simpleWeapons.handaxe);
      this.equipment.weapons.push(weaponsAndShields.simpleWeapons.handaxe);
    };

    this.equipment.weapons.push(weaponsAndShields.martialRangedWeapons.longbow, "20 longbow arrows");
    this.equipment.tools = utils.returnRandomArrayItem([toolsAndEquipment.equipmentPacks.dungeoneersPack,
                                                        toolsAndEquipment.equipmentPacks.explorersPack]);

};

function createPaladin() {

    	this.name = "paladin",
        this.primaryAbility = ["str", "cha"],
        this.hitDie = 10,
        this.savingThrows = ["wis", "cha"],

        this.armorProficiencies = ["light armor", "medium armor", "heavy armor", "shields"],
        this.weaponProficiencies = ["simple weapons", "martial weapons"],
        this.toolProficiencies = ["none"],
        this.skillProficiencies = returnRandomProficiencies(paladinSkillProficiencies, 2);

        this.equipment = { weapons: [], tools: [], armor: [] };

        this.equipment.armor.push(armors.heavyArmor.chainMail);

        if(utils.returnRandomNumberInRange(0,1) === 0){
          //// TODO: maybe change this to only select weapons that can be used in one hand, or both.
          this.equipment.weapons[0] = weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons);
          this.equipment.weapons[1] = armors.shields.shield;
        }
        else{
          this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons));
          this.equipment.weapons.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.martialMeleeWeapons));
        };

        if(utils.returnRandomNumberInRange(0,1) === 0){
          for(x = 4; x > 0; x--){this.equipment.tools.push(weaponsAndShields.simpleWeapons.javelin);};
        }
          else{this.equipment.tools.push(weaponsAndShields.returnRandomWeaponFromCollection(weaponsAndShields.simpleWeapons))};

          this.equipment.tools = utils.returnRandomArrayItem([toolsAndEquipment.equipmentPacks.priestsPack,
                                                              toolsAndEquipment.equipmentPacks.explorersPack]);

};

function createRanger() {

    	this.name = "ranger",
        this.primaryAbility = "dex",
        this.hitDie = 10,
        this.savingThrows = ["dex", "str"],

        this.equipment = [],
        this.armorProficiencies = [],
        this.weaponProficiencies = [],
        this.toolProficiencies = [],
        this.skillProficiencies = []

};

function createRogue() {

    	this.name = "rogue",
        this.primaryAbility = "dex",
        this.hitDie = 8,
        this.savingThrows = ["dex", "int"],

        this.equipment = [],
        this.armorProficiencies = [],
        this.weaponProficiencies = [],
        this.toolProficiencies = [],
        this.skillProficiencies = []

};

function createSorcerer() {

    	this.name = "sorcerer",
        this.primaryAbility = "cha",
        this.hitDie = 8,
        this.savingThrows = ["con", "cha"],

        this.equipment = [],
        this.armorProficiencies = [],
        this.weaponProficiencies = [],
        this.toolProficiencies = [],
        this.skillProficiencies = []

};

function createWarlock() {

    	this.name = "warlock",
        this.primaryAbility = "cha",
        this.hitDie = 8,
        this.savingThrows = ["wis", "cha"],

        this.equipment = [],
        this.armorProficiencies = [],
        this.weaponProficiencies = [],
        this.toolProficiencies = [],
        this.skillProficiencies = []

};

function createWizard() {

    	this.name = "wizard",
        this.primaryAbility = "int",
        this.hitDie = 6,
        this.savingThrows = ["int", "wis"],

        this.equipment = [],
        this.armorProficiencies = [],
        this.weaponProficiencies = [],
        this.toolProficiencies = [],
        this.skillProficiencies = []

};


// classList = [
//              new createBard(),
//              new createBarbarian(),
//              new createMonk(),
//              new createCleric(),
//              new createDruid(),
//              new createFighter(),
//              new createPaladin(),
//              new createRanger(),
//              new createRogue(),
//              new createSorcerer(),
//              new createWarlock(),
//              new createWizard()
//            ];

           classList = [
                        // new createBard()
                        // new createBarbarian()
                        // new createMonk()
                        // new createCleric()
                        // new createDruid()
                        // new createFighter()
                        new createPaladin()

                      ];



exports.createBard = createBard;
exports.createBarbarian = createBarbarian;
exports.createMonk = createMonk;
exports.classList = classList;
exports.createCleric = createCleric;
exports.createDruid = createDruid;
exports.createFighter = createFighter;
exports.createPaladin = createPaladin;
exports.createRanger = createRanger;
exports.createRogue = createRogue;
exports.createSorcerer = createSorcerer;
exports.createWarlock = createWarlock;
exports.createWizard = createWizard;
exports.addClassFeatures = addClassFeatures;
