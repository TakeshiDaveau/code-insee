//
// Check that your generate french VAT number isn't use @ : http://ec.europa.eu/taxation_customs/vies/vatResponse.html
// Check the VAT number validity @ : http://www.agecsa.com/expert_comptable_siret.html
//
//

function validateSiren(number) {
    var numString 	= number.toString();
    var total 		= 0;

    for(var i = 9 ; i >= 1 ; i--) {
        var value = numString[i-1] * ((i%2 === 0) ? 2 : 1)
        total += ((value < 10) ? value : (1 + valeur%10))
    }
    return total % 10 === 0;
}

function generateSiren() {
    var number = Math.floor(100000000 + Math.random() * 900000000);

    for(;!validateSiren(number);) {
        number = Math.floor(100000000 + Math.random() * 900000000);
    }
    return number;
}

function generateTVANumber() {
    var siren 		= generateSiren();
    var tvaKey		= ((12 + (3 * (+siren % 97))) % 97);
    var tvaNumber	= 'FR' + tvaKey + siren;
    return tvaNumber;
}