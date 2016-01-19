//
// Check that your generate french VAT number isn't use @ : http://ec.europa.eu/taxation_customs/vies/vatResponse.html
// Check the VAT number validity @ : http://www.agecsa.com/expert_comptable_siret.html
//
//
function generateSiren() {
    var number = Math.floor(100000000 + Math.random() * 900000000);

    for(;!validateSiren(number);) {
        number = Math.floor(100000000 + Math.random() * 900000000);
    }
    return number;
}

function generateSiret(number) {
    // TODO
}

function generateTVANumber() {
    var siren 		= generateSiren();
    var tvaKey		= ((12 + (3 * (+siren % 97))) % 97);
    var tvaNumber	= 'FR' + tvaKey + siren;
    return tvaNumber;
}