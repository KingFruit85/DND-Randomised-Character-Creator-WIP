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


//Returns a random element of the array provided as the arguement
function returnRandomArrayItem(array){

    return array[returnRandomNumberInRange(0, array.length - 1)]

};

exports.returnRandomNumberInRange = returnRandomNumberInRange;
exports.returnRandomFloatInRange = returnRandomFloatInRange;
exports.returnRandomArrayItem = returnRandomArrayItem;
