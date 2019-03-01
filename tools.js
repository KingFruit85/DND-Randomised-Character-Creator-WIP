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
