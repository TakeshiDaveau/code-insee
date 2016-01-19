# code-insee

A very simple library the validate and generate SIREN, SIRET and VAT number. See https://fr.wikipedia.org/wiki/Code_Insee

## How to use
1. Get code-insee.min.js with `bower install code-insee`

2. Add the library to your project :

        <script src="dist/code-insee.min.js"></script>
    
3. Call the different method :
    
    - `codeInsee.validateSiren(number)`, `codeInsee.validateVATNumber(number)` for validation
    - `codeInsee.generateSiren()`, `codeInsee.generateVATNumber()` for generation
