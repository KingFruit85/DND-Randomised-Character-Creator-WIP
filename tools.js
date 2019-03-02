const utils = require('./utils.js')


	var musicalInstruments = [

		{name:"Bagpipes",cost:"30 gp",weight:"6 lb."},
		{name:"Drum",cost:"6 gp",weight:"3 lb."},
		{name:"Dulcimer",cost:"25 gp",weight:"10 lb."},
		{name:"Flute",cost:"2 gp",weight:"1 lb."},
		{name:"Lute",cost:"35 gp",weight:"2 lb."},
		{name:"Lyre",cost:"30 gp",weight:"2 lb."},
		{name:"Horn",cost:"3 gp",weight:"2 lb."},
		{name:"Pan Flute",cost:"12 gp",weight:"2 lb."},
		{name:"Shawm",cost:"2 gp",weight:"1 lb."},
		{name:"Viol",cost:"30 gp",weight:"1 lb"}
	];

	var equipmentPacks = {

		burglarsPack:{Name:"Burglar's Pack",Cost:"16 gp",Description:"Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."},
		diplomatsPack:{Name:"Diplomat's Pack",Cost:"39 gp",Description:"Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."},
		dungeoneersPack:{Name:"Dungeoneer's Pack",Cost:"12 gp",Description:"Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."},
		entertainersPack:{Name:"Entertainer's Pack",Cost:"40 gp",Description:"Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."},
		explorersPack:{Name:"Explorer's Pack",Cost:"10 gp",Description:"Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."},
		priestsPack:{Name:"Priest's Pack ",Cost:"19 gp",Description:"Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."},
		scholarsPack:{Name:"Scholar's Pack",Cost:"40 gp",Description:"Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."}
	}




	function returnRandomInstrument(){
		return utils.returnRandomArrayItem(musicalInstruments);
	};

// TODO: this function can be generalised along with returnRandomProficiencies
	function returnRandomInstruments(count) {

	    let instruments = [];

	    for (i = 0; i < count; i++) {

	        let pickedInstrument = utils.returnRandomArrayItem(musicalInstruments).name

	        if (instruments.includes(pickedInstrument) === false) {
	            instruments.push(pickedInstrument);
	        } else {
	            i--;
	        };

	    };

	    return instruments;

	};







exports.musicalInstruments = musicalInstruments;
exports.returnRandomInstrument = returnRandomInstrument;
exports.returnRandomInstruments = returnRandomInstruments;
exports.equipmentPacks = equipmentPacks;
