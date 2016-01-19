/* jslint node: true */

"use strict";

var codeInseeLib = require('../../src/code-insee.js');

describe("Test validation", function () {
    it("validate a correct SIREN number", function () {
        expect(codeInseeLib.codeInsee.validateSiren(862106333)).toBe(true);
    });


    it("reject an incorrect SIREN number", function () {
        expect(codeInseeLib.codeInsee.validateSiren(862106334)).toBe(false);
    });
});