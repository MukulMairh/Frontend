'use strict'
const obj1 = {
    firstName: 'Mukul',
    lastName: 'Soni',
    mob: 99988788978,
    address: 'address is felicity aventura'
}

console.log(obj1);
console.log(obj1.firstName, obj1.lastName);

function doWhile() {
    let x = 6;
    do {
        x++;
        console.log("x" + x);
    } while (x < 5);
}
doWhile();