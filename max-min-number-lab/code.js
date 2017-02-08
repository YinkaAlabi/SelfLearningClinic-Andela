'use strict'
module.exports = {
	findMinMax: function(numbers){
		numbers.sort(function(a, b){return a-b});
		var result= [numbers[0], numbers[numbers.length - 1]];
		if (result[0] === result[1]){
			result = [result[0]];
		}
		return result;
	}
}


