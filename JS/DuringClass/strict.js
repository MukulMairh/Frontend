// 'use strict'

let hasDriverLicense = true;
const passTest = true;

if (passTest) hasDriveLicense = false; //Here have done a typo mistake and without strict this will bypass. Try commenting/uncommenting  the first line.

if (hasDriverLicense) {
    console.log("I can drive");
}