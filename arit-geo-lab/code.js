'use strict'
module.exports = {
	aritGeo: function(progression){
		if (progression.length == 0){
			return 0;
		}
		var a = progression[0];
		var b = progression[1];
		var c = progression[2];
		var interimDiff = b - a;
		var commonDiff = c - b;
	
		var i = 3;

    	while (commonDiff == interimDiff && i < progression.length){
    		commonDiff = progression[i] - progression[i - 1];
    		i++;
    	}

    	if (commonDiff == interimDiff) {
        	return "Arithmetic";
    	}

    	var interimRatio = b/a;
		var commonRatio = c/b;
		i = 3;

		while (commonRatio == interimRatio && i < progression.length){
    		commonDiff = progression[i] - progression[i - 1];
    		i++;
    	}

    	if (commonRatio == interimRatio) {
        	return "Geometric";
    	}

    	
    	return -1;
	}
}
