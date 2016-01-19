
function validateSiren(number) {
    var numString 	= number.toString();
    var total 		= 0;

    for(var i = 9 ; i >= 1 ; i--) {
        var value = numString[i-1] * ((i%2 === 0) ? 2 : 1)
        total += ((value < 10) ? value : (1 + valeur%10))
    }
    return total % 10 === 0;
}

function validateVAT(number) {
    var numString 	= number.toString();
    var total 		= 0;

    for(var i = 9 ; i >= 1 ; i--) {
        var value = numString[i-1] * ((i%2 === 0) ? 2 : 1)
        total += ((value < 10) ? value : (1 + valeur%10))
    }
    return total % 10 === 0;
}

function validateSiret(number) {
    // TODO
}