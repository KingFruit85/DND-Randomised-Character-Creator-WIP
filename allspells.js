

acid_splash = {
name:"Acid Splash",
casting_time: "1 action",
components: "V, S",
description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other."+
             " A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level"+
             " (2d6), 11th level (3d6), and 17th level (4d6).",
duration: "Instantaneous",
level: 0,
range: "60 feet",
school: "Conjuration"
};

bless = {
name:"Bless",
casting_time: "1 action",
components: "V, S, M (a sprinkling of holy water)",
description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell"+
             " ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. At Higher Levels. When you cast this spell"+
             " using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
duration: "Concentration, up to 1 minute",
level: 1,
range: "30 feet",
school: "Enchantment"
};

burning_hands = {
name:"Burning Hands",
casting_time: "1 action",
components: "V, S",
description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips."+
             " Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much"+
             " damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried. At Higher Levels."+
             " When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
duration: "Instantaneous",
level: 1,
range: "Self (15-foot cone)",
school: "Evocation"
};

charm_person = {
name:"Charm Person",
casting_time: "1 action",
components: "V, S",
description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your"+
             " companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do"+
             " anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was"+
             " charmed by you. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional"+
             " creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
duration: "1 hour",
level: 1,
range: "30 feet",
school: "Enchantment"
};

command = {
name:"Command",
casting_time: "1 action",
components: "V",
description: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command"+
             " on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly "+
             " harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the"+
             " DM determines how the target behaves. If the target can’t follow your command, the spell ends. Approach. The target moves toward you by the"+
             " shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop. The target drops whatever it is holding and then ends"+
             " its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target falls prone and then ends"+
             " its turn. Halt. The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must"+
             " move to stay aloft, it flies the minimum distance needed to remain in the air. At Higher Levels. When you cast this spell using a spell slot"+
             " of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each"+
             " other when you target them.",
duration: "1 round",
level: 1,
range: "60 feet",
school: "Enchantment"
};

comprehend_languages = {
name:"Comprehend Languages",
casting_time: "1 action",
components: "V, S, M (a pinch of soot and salt)",
description: "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you"+
             " see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell"+
             " doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language.",
duration: "1 hour",
level: 1,
range: "Self",
school: "Divination"
};

cone_of_cold = {
name:"Cone of Cold",
casting_time: "1 action",
components: "V, S, M (a small crystal or glass cone)",
description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8"+
             " cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until"+
             " it thaws. At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each"+
             " slot level above 5th.",
duration: "Instantaneous",
level: 5,
range: "Self (60-foot cone)",
school: "Evocation"
};

cure_wounds = {
name:"Cure Wounds",
casting_time: "1 action",
components: "V, S",
description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on"+
             " undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases"+
             " by 1d8 for each slot level above 1st.",
duration: "Instantaneous",
level: 1,
range: "Touch",
school: "Evocation"
};

dancing_lights = {
name:"Dancing Lights",
casting_time: "1 action",
components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in"+
             " the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size."+
             " Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the"+
             " lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and"+
             " a light winks out if it exceeds the spell’s range.",
duration: "Concentration, up to 1 minute",
level: 0,
range: "120 feet",
school: "Evocation"
};

detect_magic= {
name:"Detect Magic",
casting_time: "1 action",
components: "V, S",
description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your"+
             " action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school"+
             " of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal,"+
             " a thin sheet of lead, or 3 feet of wood or dirt.",
duration: "Concentration, up to 10 minutes",
level: 1,
range: "Self",
school: "Divination"
};

disguise_self= {
name:"Disguise Self",
casting_time: "1 action",
components: "V, S",
description: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action"+
              " to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has"+
              " the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection."+
              " For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head"+
              " and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still"+
              " in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check "+
              "against your spell save DC.",
duration: "1 hour",
level: 1,
range: "Self",
school: "Illusion"
};

faerie_fire = {
  name:"Faerie Fire",
  casting_time:"1 action",
  components:"V",
  description:"Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also"+
              " outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll"+
              " against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.",
  duration:"Concentration, up to 1 minute",
  level:1,
  range:"60 feet",
  school:"Evocation"
};

fire_bolt= {
name:"Fire Bolt",
casting_time: "1 action",
components: "V, S",
description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage."+
             " A flammable object hit by this spell ignites if it isn’t being worn or carried. This spell’s damage increases by 1d10 when you reach 5th level (2d10),"+
             " 11th level (3d10), and 17th level (4d10).",
duration: "Instantaneous",
level: 0,
range: "120 feet",
school: "Evocation"
};

guidance= {
name:"Guidance",
casting_time: "1 action",
components: "V, S",
description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice."+
             " It can roll the die before or after making the ability check. The spell then ends.",
duration: "Concentration, up to 1 minute",
level: 0,
range: "Touch",
school: "Divination"
};

guiding_bolt= {
name:"Guiding Bolt",
casting_time: "1 action",
components: "V, S",
description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes"+
             " 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim"+
             " light glittering on the target until then. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage"+
             " increases by 1d6 for each slot level above 1st.",
duration: "1 round",
level: 1,
range: "120 feet",
school: "Evocation"
};

healing_word= {
name:"Healing Word",
casting_time: "1 bonus action",
components: "V",
description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell"+
             " has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing"+
             " increases by 1d4 for each slot level above 1st.",
duration: "Instantaneous",
level: 1,
range: "60 feet",
school: "Evocation"
};

identify= {
name:"Identify",
casting_time: "1 minute",
components: "V, S, M (a pearl worth at least 100 gp and an owl feather)",
description: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object,"+
             " you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn"+
             " whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If"+
             " you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
duration: "Instantaneous",
level: 1,
range: "Touch",
school: "Divination"
};

animal_friendship = {
  name:"Animal Friendship",
  casting_time:"1 action",
  components:"V S M (Morsel of food)",
  description:"Choose a beast that you can see. It must be able to see and hear you. If its Intelligence is 4 or higher, the spell fails. Otherwise,"+
              " it must pass a Wisdom save or be charmed by you. If you or one of your companions harms it, the spell ends. At Higher Levels:"+
              " You can target one additional beast for each slot level above 1st.",
  duration:"24 hours",
  level:1,
  range:"30 feet",
  school:"Enchantment"
};

bane = {
  name:"Bane",
  casting_time:"1 action",
  components:"V S M (Blood)",
  description:"Up to three creatures you can see must make Charisma saving throws. If a target fails, whenever they make an attack roll or saving"+
              " throw before the spell ends, they must roll a d4 and subtract the number rolled. At Higher Levels: You can target one"+
              " additional creature for each slot level above 1st.",
  duration:"Conc. Up to 1 minute",
  level:1,
  range:"30 feet",
  school:"Enchantment"
};

feather_fall = {
  name:"Feather Fall",
  casting_time:"1 reaction",
  components:"V M (Feather/down)",
  description:"Choose up to five falling creatures. Its descent slows to 60 feet per round until the spell ends. If the creature"+
              " lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for it.",
  duration:"1 minute",
  level:1,
  range:"60 feet",
  school:"Transmutation"
};

heroism = {
  name:"Heroism",
  casting_time:"1 action",
  components:"V S",
  description:"A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being"+
              " frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each"+
              " of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell. At"+
              " Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one"+
              " additional creature for each slot level above 1st.",
  duration:"Conc. Up to 1 minute",
  level:1,
  range:"Touch",
  school:"Enchantment"
};

hideous_laughter = {
  name:"Hideous Laughter",
  casting_time:"1 action",
  components:"tiny tarts, 1 feather",
  description:"A creature of your choice that you can see within range perceives everything as hilariously funny and falls"+
              " into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall"+
              " prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score"+
              " of 4 or less isn’t affected. At the end of each of its turns, and each time it takes damage, the target"+
              " can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by"+
              " damage. On a success, the spell ends.",
  duration:"Conc, up to 1 minute",
  level:1,
  range:"30 feet",
  school:"Enchantment"
};

illusory_script = {
  name:"Illusory Script",
  casting_time:"1 minute (Ritual)",
  components:"S M (10gp lead ink; consumed)",
  description:"You write on suitable writing material and imbue it with an illusion that lasts for the duration."+
              " To you and any creatures you designate when you cast the spell, the writing appears normal, written"+
              " in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the"+
              " writing is unintelligible. Alternatively, you can cause the writing to appear to be an entirely"+
              " different message, written in a different hand and language, though the language must be one you know."+
              " If the spell is dispelled, the original script and the illusion disappear. A creature with truesight"+
              " can read the hidden message.",
  duration:"10 days",
  level:1,
  range:"Touch",
  school:"Illusion"
};

longstrider = {
  name:"Longstrider",
  casting_time:"1 action",
  components:"V S M (Dirt)",
  description:"The target’s speed increases by 10 feet until the spell ends.At Higher Levels: You can target one"+
              " additional creature for each slot level above 1st.",
  duration:"1 hour",
  level:1,
  range:"Touch",
  school:"Transmutation"
};

speak_with_animals = {
  name:"Speak with Animals",
  casting_time:"1 action (Ritual)",
  components:"V S",
  description:"Although limited by the intelligence of the beast, you can understand and speak with beasts."+
              " You learn about the beast's experiences over the last day, as well as local places and creatures."+
              " If your DM allows, the beast may also complete a small task for you, if you can successfully"+
              " convince it to do so.",
  duration:"10 minutes",
  level:1,
  range:"Self",
  school:"Divination"
};

unseen_servant = {
  name:"Unseen Servant",
  casting_time:"1 action (Ritual)",
  components:"V S M (A piece of string and a bit of wood)",
  description:"This spell creates an invisible, mindless, shapeless force that performs simple tasks at your"+
              " command until the spell ends. The servant springs into existence in an unoccupied space on the"+
              " ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack."+
              " If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you"+
              " can mentally command the servant to move up to 15 feet and interact with an object. The servant"+
              " can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending,"+
              " folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the"+
              " servant performs the task to the best of its ability until it completes the task, then waits for"+
              " your next command. If you command the servant to perform a task that would move it more than 60"+
              " feet away from you, the spell ends.",
  duration:"1 hour",
  level:1,
  range:"60 feet",
  school:"Conjuration "
};

create_or_destroy_water = {
  name:"Create or Destroy Water",
  casting_time:"1 action",
  components:" V S M (A drop of water if creating water or a few grains of sand if destroying it)",
  description:"You either create or destroy water. Create Water. You create up to 10 gallons of clean water within"+
              " range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range,"+
              " extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in"+
              " an open container within range. Alternatively, you destroy fog in a 30-foot cube within range."+
              " At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you create"+
              " or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each"+
              " slot level above 1st.",
  duration:"Instantaneous",
  level:1,
  range:"30 feet",
  school:"Transmutation"
};

detect_evil_and_good = {
  name:"Detect Evil and Good",
  casting_time:"1 action",
  components:"V S",
  description:"You sense the location of an aberration, celestial, elemental, fey, fiend, or undead if it is"+
              " within 30 feet of you. If there is a place or object that has been magically consecrated or"+
              " desecrated within 30 feet, you are also able to locate it. You are unable to sense these things"+
              " through 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  duration:"Conc. Up to 10 minutes",
  level:1,
  range:"Self",
  school:"Divination"
};

detect_poison_and_disease = {
  name:"Detect Poison and Disease",
  casting_time:"1 action (Ritual)",
  components:"V S M (Yew leaf)",
  description:"If they exist or appear within 30 feet, you sense the presence of poisons, poisonous creatures,"+
              " and diseases. Their location and type also become known to you. This spell is blocked by 1 foot"+
              " of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  duration:"Conc. Up to 10 minutes",
  level:1,
  range:"Self",
  school:"Divination"
};

protection_from_evil_and_good = {
  name:"Protection from Evil and Good",
  casting_time:"1 action",
  components:"	V S M (Holy water/powdered silver and iron; consumed)",
  description:"One willing creature you touch is protected against aberrations, celestials, elementals,"+
              " fey, fiends, and undead. Creatures of those types have disadvantage on attack rolls against"+
              " the target. The target also can't be charmed, frightened, or possessed by them. If the"+
              " target already has such an effect by one of them, the target has advantage on any new"+
              " saving throw against it.",
  duration:"Conc. Up to 10 minutes",
  level:1,
  range:"Touch",
  school:"Abjuration"
};

purify_food_and_drink = {
  name:"Purify Food and Drink",
  casting_time:"1 action (Ritual)",
  components:"V S",
  description:"Non-magical food and drink within a 5-foot-radius sphere centered on a point is"+
              " rendered free of poison and disease.",
  duration:"Instantaneous",
  level:1,
  range:"10 feet",
  school:"Transmutation"
};

produce_flame = {
  name:"Produce Flame",
  casting_time:"1 action",
  components:"V S",
  description:"A flame appears in your hand, harming neither you or your equipment. It sheds bright"+
              " light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if"+
              " you dismiss it as an action or if you cast it again. You can hurl the flame at a"+
              " creature within 30 feet of you. Make a ranged spell attack. On a hit, the target"+
              " takes 1d8 fire damage. The spell then ends. The damage increases by 1d8 when you"+
              " reach 5th, 11th, and 17th level.",
  duration:"10 minutes",
  level:0,
  range:"Self",
  school:"Conjuration "
};

shillelagh = {
  name:"Shillelagh",
  casting_time:"1 bonus action",
  components:"V S M (Mistletoe, shamrock leaf, club/quarterstaff)",
  description:"For the duration, you can use your spellcasting ability instead of Strength for a"+
              " club or quarterstaff you touch, and the weapon's damage die becomes a d8. The"+
              " weapon also becomes magical if it isn't. The spell ends if you cast it again or"+
              " if you let go of the weapon.",
  duration:"1 minute",
  level:0,
  range:"Touch",
  school:"Transmutation "
};

entangle = {
  name:"Entangle",
  casting_time:"1 action",
  components:"V S",
  description:"Plants that grab and entwine fill a 20-foot square with a point of origin that"+
              " you choose. The area becomes difficult terrain. When the spell ends, the plants wilt"+
              " away. If a creature is standing in the area when you cast the spell it must pass a"+
              " Strength save or be restrained. A restrained creature can release itself by using its"+
              " action to attempt another Strength save, being freed on a success.",
  duration:"Conc. Up to 1 minute",
  level:1,
  range:"90 feet",
  school:"Conjuration"
};

fog_cloud = {
  name:"Fog Cloud",
  casting_time:"1 action",
  components:"V S",
  description:"A 20-foot-radius sphere of fog appears within range of you until a wind of at least"+
              " 10 miles per hour blows it away, or until the spell ends. The fog is centered on a"+
              " point you choose, spreading around corners and heavily obscuring the area it fills."+
              " At Higher Levels: The fog becomes larger by 20 feet for each spell level you cast"+
              " this spell above the first.",
  duration:"Conc. Up to 1 hour",
  level:1,
  range:"120 feet",
  school:"Conjuration"
};

jump = {
  name:"Jump",
  casting_time:"1 action",
  components:"V S M (Grasshopper's hind leg)",
  description:"The target's jump distance is tripled until the spell ends.",
  duration:"1 minute",
  level:1,
  range:"Touch",
  school:"Transmutation"
};

divine_favor = {
  name:"Divine Favor",
  casting_time:"1 bonus action",
  components:"V S",
  description:"Your weapon attacks deal an extra 1d4 radiant damage on a hit.",
  duration:"Conc. Up to 1 minute",
  level:1,
  range:"Self",
  school:"Evocation"
};

alarm = {
  name:"Alarm",
  casting_time:"1 minute (Ritual)",
  components:"V S M (a tiny bell and a piece of fine silver wire)",
  description:"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within"+
              " range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you"+
              " whenever a Tiny or larger creature touches or enters the warded area. When you cast the"+
              " spell, you can designate creatures that won't set off the alarm. You also choose whether"+
              " the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if"+
              " you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An"+
              " audible alarm produces the sound of a hand bell for 10 seconds within 60 feet",
  duration:"8 hours",
  level:1,
  range:"30 feet",
  school:"Abjuration "
};

chill_touch = {
  name:"Chill Touch",
  casting_time:"1 action",
  components:"V S",
  description:"Make a ranged spell attack. On hit, the target takes 1d8 necrotic damage and can't regain"+
              " hit points until the start of your next turn. If you hit an undead target, it also has"+
              " disadvantage on attack rolls against you until the end of your next turn. This spell's"+
              " damage increases by 1d8 when you reach 5th, 11th, and 17th level.",
  duration:"1 round",
  level:0,
  range:"120 feet",
  school:"Necromancy"
};

color_spray = {
  name:"Color Spray",
  casting_time:"1 action",
  components:"V S M (Colored powder/sand)",
  description:"Creatures in a 15-foot cone from you are blinded. If a creature is already blind or"+
              " unconscious, they are not affected. Starting with the creature that has the lowest"+
              " current hit points, roll 6d10 to see how many creatures you can affect. If the creature"+
              " with the lowest hit points is less than the total rolled, subtract the hit points from"+
              " the number, then move onto the next. When you reach a creature whose hit points would"+
              " go above the number, subtractions applied, they are unaffected and this casting can't"+
              " blind anything else. At Higher Levels: Roll an additional 2d10 for each slot level above 1st.",
  duration:"1 round",
  level:1,
  range:"Self (15ft cone)",
  school:"Illusion"
};

expeditious_retreat = {
  name:"Expeditious Retreat",
  casting_time:"1 bonus action",
  components:"V S",
  description:"When you cast this spell, and as a bonus action on your turns, you can take the Dash action.",
  duration:"Conc. Up to 10 minutes",
  level:1,
  range:"Self",
  school:"Transmutation"
};

false_life = {
  name:"False Life",
  casting_time:"1 action",
  components:"V S M (Alcohol/distilled spirits)",
  description:"You gain 1d4 + 4 temporary hit points for the duration.At Higher Levels: You gain 5"+
              " additional temporary hit points for each slot level above 1st.",
  duration:"1 hour",
  level:1,
  range:"Self",
  school:"Necromancy"
};

floating_disk = {
  name:"Floating Disk",
  casting_time:"1 action",
  components:"V S M (A drop of mercury)",
  description:"This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch"+
              " thick, that floats 3 feet above the ground in an unoccupied space of your choice that"+
              " you can see within range. The disk remains for the duration, and can hold up to 500"+
              " pounds. If more weight is placed on it, the spell ends, and everything on the disk"+
              " falls to the ground.The disk is immobile while you are within 20 feet of it. If you move"+
              " more than 20 feet away from it, the disk follows you so that it remains within 20 feet of"+
              " you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t"+
              " cross an elevation change of 10 feet or more. For example, the disk can’t move across a"+
              " 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move"+
              " more than 100 feet from the disk (typically because it can’t move around an obstacle to follow"+
              " you), the spell ends.",
  duration:"1 hour",
  level:1,
  range:"30 feet",
  school:"Conjuration"
};

grease = {
  name:"Grease",
  casting_time:"1 action",
  components:"V S M (Pork rind/butter)",
  description:"Grease covers the ground in a 10-foot square within range. It's difficult terrain for the"+
              " duration. When the grease appears, each creature standing in its area must pass a Dexterity"+
              " save or fall prone. A creature that enters the area or ends its turn there must also make this save.",
  duration:"1 minute",
  level:1,
  range:"60 feet",
  school:"Conjuration"
};

inflict_wounds= {
  name:"Inflict Wounds",
  casting_time: "1 action",
  components: "V, S",
  description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10"+
               " necrotic damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level"+
               " or higher, the damage increases by 1d10 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Touch",
  school: "Necromancy"
  };

light= {
  name:"Light",
  casting_time: "1 action",
  components: "V, M (a firefly or phosphorescent moss)",
  description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell"+
               " ends, the object sheds bright light in a 20-foot radius and dim light for an additional"+
               " 20 feet. The light can be colored as you like. Completely covering the object with"+
               " something opaque blocks the light. The spell ends if you cast it again or dismiss it"+
               " as an action. If you target an object held or worn by a hostile creature, that creature"+
               " must succeed on a Dexterity saving throw to avoid the spell.",
  duration: "1 hour",
  level: 0,
  range: "Touch",
  school: "Evocation"
  };

mending = {
  name:"Mending",
  casting_time:"1 Minute",
  components:"V S M (Two lodestones)",
  description:"This spell repairs a single break or tear in an object you touch, such as a broken chain link,"+
              " two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear"+
              " is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage."+
              " This spell can physically repair a magic item or construct, but the spell can’t restore magic"+
              " to such an object.",
  duration:"Instantaneous",
  level:0,
  range:"Touch",
  school:"transmutation"
};

message = {
  name:"Message",
  casting_time:"1 action",
  components:"V S M (A short piece of copper wire)",
  description:"You point your finger toward a creature within range and whisper a message. The target (and only"+
              " the target) hears the message and can reply in a whisper that only you can hear. You can cast"+
              " this spell through solid objects if you are familiar with the target and know it is beyond the"+
              " barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet"+
              " of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely"+
              " around corners or through openings.",
  duration:"1 round",
  level:0,
  range:"120 feet",
  school:"transmutation"
};

mage_armor= {
name:"Mage Armor",
casting_time: "1 action",
components: "V, S, M (a piece of cured leather)",
description: "You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds"+
             " it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell"+
             " ends if the target dons armor or if you dismiss the spell as an action.",
duration: "8 hours",
level: 1,
range: "Touch",
school: "Abjuration"
};

mage_hand= {
name:"Mage Hand",
casting_time: "1 action",
components: "V, S",
description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for"+
             " the duration or until you dismiss it as an action. The hand vanishes if it is ever more than"+
             " 30 feet away from you or if you cast this spell again. You can use your action to control the"+
             " hand. You can use the hand to manipulate an object, open an unlocked door or container, stow"+
             " or retrieve an item from an open container, or pour the contents out of a vial. You can move"+
             " the hand up to 30 feet each time you use it. The hand can’t attack, activate magic items, or"+
             " carry more than 10 pounds.",
duration: "1 minute",
level: 0,
range: "30 feet",
school: "Conjuration"
};

magic_missile= {
name:"Magic Missile",
casting_time: "1 action",
components: "V, S",
description: "You create three glowing darts of magical force. Each dart hits a creature of your choice"+
             " that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts"+
             " all strike simultaneously, and you can direct them to hit one creature or several. At Higher"+
             " Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell"+
             " creates one more dart for each slot level above 1st.",
duration: "Instantaneous",
level: 1,
range: "120 feet",
school: "Evocation"
};

minor_illusion= {
name:"Minor Illusion",
casting_time: "1 action",
components: "S, M (a bit of fleece)",
description: "You create a sound or an image of an object within range that lasts for the duration."+
             " The illusion also ends if you dismiss it as an action or cast this spell again. If"+
             " you create a sound, its volume can range from a whisper to a scream. It can be your"+
             " voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound"+
             " you choose. The sound continues unabated throughout the duration, or you can make"+
             " discrete sounds at different times before the spell ends. If you create an image of"+
             " an object—such as a chair, muddy footprints, or a small chest—it must be no larger"+
             " than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory"+
             " effect. Physical interaction with the image reveals it to be an illusion, because"+
             " things can pass through it. If a creature uses its action to examine the sound or"+
             " image, the creature can determine that it is an illusion with a successful Intelligence"+
             " (Investigation) check against your spell save DC. If a creature discerns the illusion"+
             " for what it is, the illusion becomes faint to the creature.",
duration: "1 minute",
level: 0,
range: "30 feet",
school: "Illusion"
};

poison_spray= {
name:"Poison Spray",
casting_time: "1 action",
components: "V, S",
description: "You extend your hand toward a creature you can see within range and project a puff"+
             " of noxious gas from your palm. The creature must succeed on a Constitution saving"+
             " throw or take 1d12 poison damage. This spell’s damage increases by 1d12 when you "+
             "reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
duration: "Instantaneous",
level: 0,
range: "10 feet",
school: "Conjuration"
};

prestidigitation= {
name:"Prestidigitation",
casting_time: "1 action",
components: "V, S",
description: "This spell is a minor magical trick that novice spellcasters use for practice. You"+
             " create one of the following magical effects within range: • You create an"+
             " instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind,"+
             " faint musi- cal notes, or an odd odor. • You instantaneously light or snuff out a"+
             " candle, a torch, or a small campfire. • You instantaneously clean or soil an object"+
             " no larger than 1 cubic foot. • You chill, warm, or flavor up to 1 cubic foot of"+
             " nonliving material for 1 hour. • You make a color, a small mark, or a symbol appear"+
             " on an object or a surface for 1 hour. • You create a nonmagical trinket or an"+
             " illusory image that can fit in your hand and that lasts until the end of your next"+
             " turn. If you cast this spell multiple times, you can have up to three of its"+
             " non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
duration: "Up to 1 hour",
level: 0,
range: "10 feet",
school: "Transmutation"
};

ray_of_frost= {
name:"Ray of Frost",
casting_time: "1 action",
components: "V, S",
description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged"+
             " spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is"+
             " reduced by 10 feet until the start of your next turn. The spell’s damage increases by"+
             " 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
duration: "Instantaneous",
level: 0,
range: "60 feet",
school: "Evocation"
};

resistance= {
name:"Resistance",
casting_time: "1 action",
components: "V, S, M (a miniature cloak)",
description: "You touch one willing creature. Once before the spell ends, the target can roll a d4"+
             " and add the number rolled to one saving throw of its choice. It can roll the die"+
             " before or after making the saving throw. The spell then ends.",
duration: "Concentration, up to 1 minute",
level: 0,
range: "Touch",
school: "Abjuration"
};

sacred_flame= {
name:"Sacred Flame",
casting_time: "1 action",
components: "V, S",
description: "Flame-like radiance descends on a creature that you can see within range. The"+
             " target must succeed on a Dexterity saving throw or take 1d8 radiant damage."+
             " The target gains no benefit from cover for this saving throw. The spell’s damage"+
             " increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
duration: "Instantaneous",
level: 0,
range: "60 feet",
school: "Evocation"
};

sanctuary= {
name:"Sanctuary",
casting_time: "1 bonus action",
components: "V, S, M (a small silver mirror)",
description: "You ward a creature within range against attack. Until the spell ends, any"+
             " creature who targets the warded creature with an attack or a harmful spell"+
             " must first make a Wisdom saving throw. On a failed save, the creature must"+
             " choose a new target or lose the attack or spell. This spell doesn’t protect"+
             " the warded creature from area effects, such as the explosion of a fireball."+
             " If the warded creature makes an attack or casts a spell that affects an"+
             " enemy creature, this spell ends.",
duration: "1 minute",
level: 1,
range: "30 feet",
school: "Abjuration"
};

shield= {
name:"Shield",
casting_time: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
components: "V, S",
description: "An invisible barrier of magical force appears and protects you. Until the"+
             " start of your next turn, you have a +5 bonus to AC, including against the"+
             " triggering attack, and you take no damage from magic missile.",
duration: "1 round",
level: 1,
range: "Self",
school: "Abjuration"
};

shield_of_faith= {
name:"Shield of Faith",
casting_time: "1 bonus action",
components: "V, S, M (a small parchment with a bit of holy text written on it)",
description: "A shimmering field appears and surrounds a creature of your choice within range, granting"+
             " it a +2 bonus to AC for the duration.",
duration: "Concentration, up to 10 minutes",
level: 1,
range: "60 feet",
school: "Abjuration"
};

shocking_grasp= {
  name:"Shocking Grasp",
  casting_time: "1 action",
  components: "V, S",
  description: "Lightning springs from your hand to deliver a shock to a creature you try to touch."+
               " Make a melee spell attack against the target. You have advantage on the attack roll"+
               " if the target is wearing armor made of metal. On a hit, the target takes 1d8"+
               " lightning damage, and it can’t take reactions until the start of its next turn. The"+
               " spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8),"+
               " and 17th level (4d8).",
  duration: "Instantaneous",
  level: 0,
  range: "Touch",
  school: "Evocation"
  };

silent_image= {
  name:"Silent Image",
  casting_time: "1 action",
  components: "V, S, M (a bit of fleece)",
  description: "You create the image of an object, a creature, or some other visible phenomenon that"+
               " is no larger than a 15-foot cube. The image appears at a spot within range and lasts"+
               " for the duration. The image is purely visual; it isn’t accompanied by sound, smell,"+
               " or other sensory effects. You can use your action to cause the image to move to any"+
               "spot within range. As the image changes location, you can alter its appearance so that"+
               " its movements appear natural for the image. For example, if you create an image of a"+
               " creature and move it, you can alter the image so that it appears to be walking."+
               " Physical interaction with the image reveals it to be an illusion, because things can"+
               " pass through it. A creature that uses its action to examine the image can determine"+
               " that it is an illusion with a successful Intelligence (Investigation) check against"+
               " your spell save DC. If a creature discerns the illusion for what it is, the creature"+
               " can see through the image.",
  duration: "Concentration, up to 10 minutes",
  level: 1,
  range: "60 feet",
  school: "Illusion"
  };

sleep= {
  name:"Sleep",
  casting_time: "1 action",
  components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
  description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many"+
               " hit points of creatures this spell can affect. Creatures within 20 feet of a point"+
               " you choose within range are affected in ascending order of their current hit points"+
               " (ignoring unconscious creatures). Starting with the creature that has the lowest"+
               " current hit points, each creature affected by this spell falls unconscious until the"+
               " spell ends, the sleeper takes damage, or someone uses an action to shake or slap the"+
               " sleeper awake. Subtract each creature’s hit points from the total before moving on to"+
               " the creature with the next lowest hit points. A creature’s hit points must be equal"+
               " to or less than the remaining total for that creature to be affected. Undead and"+
               " creatures immune to being charmed aren’t affected by this spell. At Higher Levels."+
               " When you cast this spell using a spell slot of 2nd level or higher, roll an"+
               " additional 2d8 for each slot level above 1st.",
  duration: "1 minute",
  level: 1,
  range: "90 feet",
  school: "Enchantment"
  };

spare_the_dying= {
  name:"Spare the Dying",
  casting_time: "1 action",
  components: "V, S",
  description: "You touch a living creature that has 0 hit points. The creature becomes stable."+
               " This spell has no effect on undead or constructs.",
  duration: "Instantaneous",
  level: 0,
  range: "Touch",
  school: "Necromancy"
  };

thaumaturgy= {
  name:"Thaumaturgy",
  casting_time: "1 action",
  components: "V",
  description: "You manifest a minor wonder, a sign of supernatural power, within range. You"+
               " create one of the following magical effects within range: • Your voice booms"+
               " up to three times as loud as normal for 1 minute. • You cause flames to"+
               " flicker, brighten, dim, or change color for 1 minute. • You cause harmless"+
               " tremors in the ground for 1 minute. • You create an instantaneous sound"+
               " that originates from a point of your choice within range, such as a rumble"+
               " of thunder, the cry of a raven, or omi- nous whispers. • You instantaneously"+
               " cause an unlocked door or win- dow to fly open or slam shut. • You alter the"+
               " appearance of your eyes for 1 minute. If you cast this spell multiple times,"+
               " you can have up to three of its 1-minute effects active at a time, and you"+
               " can dismiss such an effect as an action.",
  duration: "Up to 1 minute",
  level: 0,
  range: "30 feet",
  school: "Transmutation"
  };

thunderwave= {
  name:"Thunderwave",
  casting_time: "1 action",
  components: "V, S",
  description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot"+
               " cube originating from you must make a Constitution saving throw. On a failed"+
               " save, a creature takes 2d8 thunder damage and is pushed 10 feet away from"+
               " you. On a successful save, the creature takes half as much damage and isn’t"+
               " pushed. In addition, unsecured objects that are completely within the area"+
               " of effect are automatically pushed 10 feet away from you by the spell’s"+
               " effect, and the spell emits a thunderous boom audible out to 300 feet. At"+
               " Higher Levels. When you cast this spell using a spell slot of 2nd level or"+
               " higher, the damage increases by 1d8 for each slot level above 1st.",
  duration: "Instantaneous",
  level: 1,
  range: "Self (15-foot cube)",
  school: "Evocation"
  };

true_strike= {
  name:"True Strike",
  casting_time:"1 action",
  components:"S",
  description:"You extend your hand and point a finger at a target in range. Your magic grants"+
              " you a brief insight into the target’s defenses. On your next turn, you gain"+
              " advantage on your first attack roll against the target, provided that this"+
              " spell hasn’t ended.",
  duration:"Concentration, Up to 1 round",
  level:0,
  range:"30 feet",
  school:"Divination"
};

vicious_mockery= {
  name:"Vicious Mockery",
  casting_time:"1 action",
  components:"V",
  description:"You unleash a string of insults laced with subtle enchantments at a creature"+
              " you can see within range. If the target can hear you (though it need not"+
              " understand you), it must succeed on a Wisdom saving throw or take 1d4"+
              " psychic damage and have disadvantage on the next attack roll it makes before"+
              " the end of its next turn.",
  duration:"Instantaneous",
  level:0,
  range:"60 feet",
  school:"enchantment"
};


exports.acid_splash = acid_splash;
exports.bless = bless;
exports.burning_hands = burning_hands;
exports.charm_person = charm_person;
exports.command = command;
exports.comprehend_languages = comprehend_languages;
exports.cone_of_cold = cone_of_cold;
exports.cure_wounds = cure_wounds;
exports.dancing_lights = dancing_lights;
exports.detect_magic = detect_magic;
exports.disguise_self = disguise_self;
exports.faerie_fire = faerie_fire;
exports.fire_bolt = fire_bolt;
exports.guidance = guidance;
exports.guiding_bolt = guiding_bolt;
exports.healing_word = healing_word;
exports.identify = identify;
exports.animal_friendship = animal_friendship;
exports.bane = bane;
exports.feather_fall = feather_fall;
exports.heroism = heroism;
exports.hideous_laughter = hideous_laughter;
exports.illusory_script = illusory_script;
exports.longstrider = longstrider;
exports.speak_with_animals = speak_with_animals;
exports.unseen_servant = unseen_servant;
exports.create_or_destroy_water = create_or_destroy_water;
exports.detect_evil_and_good = detect_evil_and_good;
exports.detect_poison_and_disease = detect_poison_and_disease;
exports.protection_from_evil_and_good = protection_from_evil_and_good;
exports.purify_food_and_drink = purify_food_and_drink;
exports.produce_flame = produce_flame;
exports.shillelagh = shillelagh;
exports.entangle = entangle;
exports.fog_cloud = fog_cloud;
exports.jump = jump;
exports.divine_favor = divine_favor;
exports.alarm = alarm;
exports.chill_touch = chill_touch;
exports.color_spray = color_spray;
exports.expeditious_retreat = expeditious_retreat;
exports.false_life = false_life;
exports.floating_disk = floating_disk;
exports.grease = grease;
exports.light = light;
exports.mending = mending;
exports.message = message;
exports.mage_armor = mage_armor;
exports.mage_hand = mage_hand;
exports.magic_missile = magic_missile;
exports.minor_illusion = minor_illusion;
exports.poison_spray = poison_spray;
exports.prestidigitation = prestidigitation;
exports.ray_of_frost = ray_of_frost;
exports.resistance = resistance;
exports.sacred_flame = sacred_flame;
exports.sanctuary = sanctuary;
exports.shield = shield;
exports.shield_of_faith = shield_of_faith;
exports.shocking_grasp = shocking_grasp;
exports.silent_image = silent_image;
exports.sleep = sleep;
exports.spare_the_dying = spare_the_dying;
exports.thaumaturgy = thaumaturgy;
exports.thunderwave = thunderwave;
exports.true_strike = true_strike;
exports.vicious_mockery = vicious_mockery;
