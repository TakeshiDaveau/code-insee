this.codeInsee = (function() {
    "use strict";

    return {
        validateSiren: validateSiren,
//        validateVATNumber: validateVATNumber,
        generateSiren: generateSiren,
        generateVATNumber: generateVATNumber
    };

    function validateSiren(number) {
        var numString = number.toString();
        var total = 0;

        for (var i = 9; i >= 1; i--) {
            var value = numString[i - 1] * ((i % 2 === 0) ? 2 : 1);
            total += ((value < 10) ? value : (1 + value % 10));
        }
        return total % 10 === 0;
    }

    /*function validateVATNumber(number) {
        var numString = number.toString();
        var total = 0;

        for (var i = 9; i >= 1; i--) {
            var value = numString[i - 1] * ((i % 2 === 0) ? 2 : 1);
            total += ((value < 10) ? value : (1 + value % 10));
        }
        return total % 10 === 0;
    }*/

    /*function validateSiret(number) {
        // TODO
    }*/

    //
    // Check that your generate french VAT number isn't use @ : http://ec.europa.eu/taxation_customs/vies/vatResponse.html
    // Check the VAT number validity @ : http://www.agecsa.com/expert_comptable_siret.html
    //
    //
    function generateSiren() {
        var number = Math.floor(100000000 + Math.random() * 900000000);

        for (; !validateSiren(number);) {
            number = Math.floor(100000000 + Math.random() * 900000000);
        }
        return number;
    }

    /*function generateSiret(number) {
        // TODO
    }*/

    function generateVATNumber() {
        var siren = generateSiren();
        return 'FR' + ((12 + (3 * (+siren % 97))) % 97) + siren;
    }
})();