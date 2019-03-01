var SimpleWeapons = {


  Club:{name:"Club", Cost:"1sp", Damage:"1d4 bludgeoning", Weight:"2lb", Properties:"Light"},
  Dagger:{name:"Dagger" , Cost:"2gp" , Damage: "1d4 piercing", Weight:"1lb" , Properties:"Finesse, light, thrown (range 20/60)"},
  Greatclub:{name:"Greatclub" , Cost:"2sp" , Damage: "1d8 bludgeoning	", Weight:"10 lb" , Properties:"Two-handed"},
  Handaxe:{name:"Handaxe" , Cost:"5gp" , Damage: "1d6 slashing", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  Javelin:{name:"Javelin" , Cost:"5sp" , Damage: "1d6 piercing", Weight:"2lb" , Properties:"Thrown (range 30/120)"},
  LightHammer:{name:"Light Hammer" , Cost:"2gp" , Damage: "1d4 bludgeoning", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  Mace:{name:"Mace" , Cost:"5gp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:""},
  Quarterstaff:{name:"Quarterstaff" , Cost:"2sp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:"Versatile (1d8)"},
  Sickle:{name:"Sickle" , Cost:"1gp" , Damage: "1d4 slashing", Weight:"2lb" , Properties:"Light"},
  Spear:{name:"Spear" , Cost:"1gp" , Damage: "1d6 piercing", Weight:"3lb" , Properties:"Thrown (range 20/60), versatile (1d8)"}

}
var barbWeps = {
  BarbJavelin:{name:"4 x Javelin", Cost:"5sp (each)", Damage:"1d6 piercing (each)", Weight:"2lb (each)" , Properties:"Thrown (range 30/120)"},
  barbHandaxe:{name:"2 x Handaxe" ,Cost:"5gp (each)", Damage:"1d6 slashing (each)", Weight:"2lb (each)" , Properties:"Light, thrown (range 20/60)"}
}

var palWeps = {
  palJavelin:{name:"5 x Javelin", Cost:"5sp (each)", Damage:"1d6 piercing (each)", Weight:"2lb (each)" , Properties:"Thrown (range 30/120)"}
}

var rogueWeps = {
  rogueDaggers:{name:"2 x Daggers" , Cost:"2gp (each)" , Damage: "1d4 piercing (each)", Weight:"1lb(each)" , Properties:"Finesse, light, thrown (range 20/60)"}
}


var SimpleRangedWeapons = {


  LightCrossbow:{name:"Light Crossbow", Cost:"25 gp",Damage:"1d8 piercing",Weight:"	5 lb",Properties:"	Ammunition (range 80/320), loading, two-handed"},
  Dart:{name:"Dart", Cost:"5 cp",Damage:"1d4 piercing",Weight:"1/4 lb",Properties:"Finesse, thrown (range 20/60)"},
  Shortbow:{name:"Shortbow", Cost:"25 gp",Damage:"1d6 piercing",Weight:"2 lb",Properties:"Ammunition (range 80/320), two-handed"},
  Sling:{name:"Sling", Cost:"1 sp",Damage:"1d4 bludgeoning",Weight:"-",Properties:"Ammunition (range 30/120)"}

}

var MartialMeleeWeapons = {

   Battleaxe :{ name:"Battleaxe",	Cost:"10 gp",	Damage:"1d8 slashing",	Weight:"4 lb",	Properties:"Versatile (1d10)"},
   Flail :{ name:"Flail",	Cost:"10 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"—"},
   Glaive :{ name:"Glaive",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
   Greataxe :{ name:"Greataxe",	Cost:"30 gp",	Damage:"1d12 slashing",	Weight:"7 lb",	Properties:"Heavy, two-handed"},
   Greatsword :{ name:"Greatsword",	Cost:"50 gp",	Damage:"2d6 slashing",	Weight:"6 lb",	Properties:"Heavy, two-handed"},
   Halberd :{ name:"Halberd",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
   Lance :{ name:"Lance",	Cost:"10 gp",	Damage:"1d12 piercing",	Weight:"6 lb",	Properties:"Reach, special"},
   Longsword :{ name:"Longsword",	Cost:"15 gp",	Damage:"1d8 slashing",	Weight:"3 lb",	Properties:"Versatile (1d10)"},
   Maul :{ name:"Maul",	Cost:"10 gp",	Damage:"2d6 bludgeoning",	Weight:"10 lb",	Properties:"Heavy, two-handed"},
   Morningstar :{ name:"Morningstar",	Cost:"15 gp",	Damage:"1d8 piercing",	Weight:"4 lb",	Properties:"-"},
   Pike :{ name:"Pike",	Cost:"5 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Heavy, reach, two-handed"},
   Rapier :{ name:"Rapier",	Cost:"25 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"Finesse"},
   Scimitar :{ name:"Scimitar",	Cost:"25 gp",	Damage:"1d6 slashing",	Weight:"3 lb",	Properties:"Finesse, light"},
   Shortsword :{ name:"Shortsword",	Cost:"10 gp",	Damage:"1d6 piercing",	Weight:"2 lb",	Properties:"Finesse, light"},
   Trident :{ name:"Trident",	Cost:"5 gp",	Damage:"1d6 piercing",	Weight:"4 lb",	Properties:"Thrown (range 20/60), versatile (1d8)"},
   WarPick :{ name:"War Pick",	Cost:"5 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"—"},
   Warhammer :{ name:"Warhammer",	Cost:"15 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"Versatile (1d10)"},
   Whip :{ name:"Whip",	Cost:"2 gp",	Damage:"1d4 slashing",	Weight:"3 lb",	Properties:"Finesse, reach"}

}

var MartialRangedWeapons = {


   Blowgun :{ name:"Blowgun",	Cost:"10 gp",	Damage:"1 piercing",	Weight:"1 lb",	Properties:"Ammunition (range 25/100), loading"},
   HandCrossbow :{ name:"Hand Crossbow",	Cost:"75 gp",	Damage:"1d6 piercing",	Weight:"3 lb", Properties:"Ammunition (range 30/120), light, loading"},
   HeavyCrossbow :{ name:"Heavy Crossbow",	Cost:"50 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Ammunition (range 100/400), heavy, loading two-handed"},
   Longbow :{ name:"Longbow",	Cost:"50 gp",	Damage:"1d8 piercing	Weight:2 lb",	Properties:"Ammunition (range 150/600), heavy, two-handed"},
   Net :{ name:"Net",	Cost:"1 gp",	Damage:"—",	Weight:"3 lb",	 Properties:"Special, thrown (range 5/15)"}



}

exports.SimpleWeapons = SimpleWeapons;
exports.barbWeps = barbWeps;
exports.palWeps = palWeps;
exports.rogueWeps = rogueWeps;
exports.SimpleRangedWeapons = SimpleRangedWeapons;
exports.MartialMeleeWeapons = MartialMeleeWeapons;
exports.MartialRangedWeapons = MartialRangedWeapons;
