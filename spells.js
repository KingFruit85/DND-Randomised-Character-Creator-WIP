const allspells =require('./allspells.js');

bardCantrips = {
    DancingLights:    allspells.dancing_lights,
    Light:            allspells.light,
    MageHand:         allspells.mage_hand,
    Mending:          allspells.mending,
    Message:          allspells.message,
    MinorIllusion:    allspells.minor_illusion,
    Prestidigitation: allspells.prestidigitation,
    TrueStrike:       allspells.true_strike,
    ViciousMockery:   allspells.vicious_mockery
};

bardLevel1 = {
    AnimalFriendship:    allspells.animal_friendship,
    Bane:                allspells.bane,
    CharmPerson:         allspells.charm_person,
    ComprehendLanguages: allspells.comprehend_languages,
    CureWounds:          allspells.cure_wounds,
    DetectMagic:         allspells.detect_magic,
    DisguiseSelf:        allspells.disguise_self,
    FaerieFire:          allspells.faerie_fire,
    FeatherFall:         allspells.feather_fall,
    HealingWord:         allspells.healing_word,
    Heroism:             allspells.heroism,
    HideousLaughter:     allspells.hideous_laughter,
    Identify:            allspells.identify,
    IllusoryScript:      allspells.illusory_script,
    Longstrider:         allspells.longstrider,
    SilentImage:         allspells.silent_image,
    Sleep:               allspells.sleep,
    SpeakwithAnimals:    allspells.speak_with_animals,
    Thunderwave:         allspells.thunderwave,
    UnseenServant:       allspells.unseen_servant
  };

clericCantrips = {
    Guidance:            allspells.guidance,
    Light:               allspells.light,
    Mending:             allspells.mending,
    Resistance:          allspells.resistance,
    SacredFlame:         allspells.sacred_flame,
    Thaumaturgy:         allspells.thaumaturgy
};

clericLevel1 = {
    Bane:                allspells.bane,
    Bless:               allspells.bless,
    Command:             allspells.comand,
    CreateorDestroyWater:allspells.create_or_destroy_water,
    CureWounds:          allspells.cure_wounds,
    DetectEvilandGood:   allspells.detect_evil_and_good,
    DetectMagic:         allspells.detect_magic,
    DetectPoisonandDisease:allspells.detect_poison_and_disease,
    GuidingBolt:         allspells.guiding_bolt,
    HealingWord:         allspells.healing_word,
    InflictWounds:       allspells.inflict_wounds,
    ProtectionfromEvilandGood:allspells.protection_from_evil_and_good,
    PurifyFoodandDrink:  allspells.purify_food_and_drink,
    Sanctuary:           allspells.sanctuary,
    ShieldofFaith:       allspells.shield_of_faith
};

druidCantrips = {
  Guidance:              allspells.guidance,
  Mending:               allspells.mending,
  ProduceFlame:          allspells.produce_flame,
  Resistance:            allspells.resistance,
  Shillelagh:            allspells.shillelagh
};

druidLevel1 = {
  CharmPerson:           allspells.charm_person,
  CreateOrDestroyWater:  allspells.create_or_destroy_water,
  CureWounds:            allspells.cure_wounds,
  DetectMagic:           allspells.detect_magic,
  DetectPoisonandDisease:allspells.detect_poison_and_disease,
  Entangle:              allspells.entangle,
  FaerieFire:            allspells.faerie_fire,
  FogCloud:              allspells.fog_cloud,
  HealingWord:           allspells.healing_word,
  Jump:                  allspells.jump,
  Longstrider:           allspells.longstrider,
  PurifyFoodandDrink:    allspells.purify_food_and_drink,
  SpeakWithAnimals:      allspells.speak_with_animals,
  Thunderwave:           allspells.thunderwave
};

paladinLevel1 = {
  Bless:                 allspells.bless,
  Command:               allspells.command,
  CureWounds:            allspells.cure_wounds,
  DetectEvilAndGood:     allspells.detect_evil_and_good,
  DetectMagic:           allspells.detect_magic,
  DetectPoisonAndDisease:allspells.detect_poison_and_disease,
  DivineFavor:           allspells.divine_favor,
  Heroism:               allspells.heroism,
  ProtectionFromEvilAndGood:allspells.protection_from_evil_and_good,
  PurifyFoodAndDrink:    allspells.purify_food_and_drink,
  ShieldOfFaith:         allspells.shield_of_faith
};


rangerLevel1 = {
  Alarm:                 allspells.alarm,
  CureWounds:            allspells.cure_wounds,
  DetectMagic:           allspells.detect_magic,
  DetectPoisonandDisease:allspells.detect_poison_and_disease,
  FogCloud:              allspells.fog_cloud,
  Jump:                  allspells.jump,
  Longstrider:           allspells.longstrider,
  SpeakWithAnimals:      allspells.speak_with_animals
};

sorcererCantrips = {
  AcidSplash:            allspells.acid_splash,
  ChillTouch:            allspells.chill_touch,
  DancingLights:         allspells.dancing_lights,
  Light:                 allspells.light,
  MageHand:              allspells.mage_hand,
  Mending:               allspells.mending,
  Message:               allspells.message,
  MinorIllusion:         allspells.minor_illusion,
  Prestidigitation:      allspells.prestidigitation,
  RayofFrost:            allspells.ray_of_frost,
  ShockingGrasp:         allspells.shocking_grasp,
  TrueStrike:            allspells.true_strike
};

sorcererLevel1 = {
  BurningHands:          allspells.burning_hands,
  CharmPerson:           allspells.charm_person,
  ColorSpray:            allspells.color_spray,
  ComprehendLanguages:   allspells.comprehend_languages,
  DetectMagic:           allspells.detect_magic,
  DisguiseSelf:          allspells.disguise_self,
  ExpeditiousRetreat:    allspells.expeditious_retreat,
  FalseLife:             allspells.false_life,
  FeatherFall:           allspells.feather_fall,
  FogCloud:              allspells.fog_cloud,
  Jump:                  allspells.jump,
  MageArmor:             allspells.mage_armor,
  MagicMissile:          allspells.magic_missile,
  Shield:                allspells.shield,
  SilentImage:           allspells.silent_image,
  Sleep:                 allspells.sleep,
  Thunderwave:           allspells.thunderwave
};

warlockCantrips = {
  ChillTouch:            allspells.chill_touch,
  MageHand:              allspells.mage_hand,
  MinorIllusion:         allspells.minor_illusion,
  Prestidigitation:      allspells.prestidigitation,
  TrueStrike:            allspells.true_strike
};

warlockLevel1 = {
  CharmPerson:           allspells.charm_person,
  ComprehendLanguages:   allspells.comprehend_languages,
  ExpeditiousRetreat:    allspells.expeditious_retreat,
  IllusoryScript:        allspells.illusory_script,
  ProtectionfromEvilandGood:allspells.protection_from_evil_and_good,
  UnseenServant:         allspells.unseen_servant
};

wizardCantrips = {
  AcidSplash:            allspells.acid_splash,
  ChillTouch:            allspells.chill_touch,
  DancingLights:         allspells.dancing_lights,
  Light:                 allspells.light,
  MageHand:              allspells.mage_hand,
  Mending:               allspells.mending,
  Message:               allspells.message,
  MinorIllusion:         allspells.minor_illusion,
  Prestidigitation:      allspells.prestidigitation,
  RayofFrost:            allspells.ray_of_frost,
  ShockingGrasp:         allspells.shocking_grasp,
  TrueStrike:            allspells.true_strike
};

wizardLevel1 = {
  Alarm:                 allspells.alarm,
  BurningHands:          allspells.burning_hands,
  CharmPerson:           allspells.charm_person,
  ColorSpray:            allspells.color_spray,
  ComprehendLanguages:   allspells.comprehend_languages,
  DetectMagic:           allspells.detect_magic,
  DisguiseSelf:          allspells.disguise_self,
  ExpeditiousRetreat:    allspells.expeditious_retreat,
  FalseLife:             allspells.false_life,
  FeatherFall:           allspells.feather_fall,
  FloatingDisk:          allspells.floating_disk,
  FogCloud:              allspells.fog_cloud,
  Grease:                allspells.grease,
  HideousLaughter:       allspells.hideous_laughter,
  Identify:              allspells.identify,
  IllusoryScript:        allspells.illusory_script,
  Jump:                  allspells.jump,
  Longstrider:           allspells.longstrider,
  MageArmor:             allspells.mage_armor,
  MagicMissile:          allspells.magic_missile,
  ProtectionfromEvilandGood:allspells.protection_from_evil_and_good,
  Shield:                allspells.shield,
  SilentImage:           allspells.silent_image,
  Sleep:                 allspells.sleep,
  Thunderwave:           allspells.thunderwave,
  UnseenServant:         allspells.unseen_servant
};




exports.wizardLevel1 = wizardLevel1;
exports.wizardCantrips = wizardCantrips;
exports.warlockLevel1 = warlockLevel1;
exports.warlockCantrips = warlockCantrips;
exports.sorcererLevel1 = sorcererLevel1;
exports.sorcererCantrips = sorcererCantrips;
exports.rangerLevel1 = rangerLevel1;
exports.paladinLevel1 = paladinLevel1;
exports.druidLevel1 = druidLevel1;
exports.druidCantrips = druidCantrips;
exports.bardCantrips = bardCantrips;
exports.bardLevel1 = bardLevel1;
exports.clericCantrips = clericCantrips;
exports.clericLevel1 = clericLevel1;
