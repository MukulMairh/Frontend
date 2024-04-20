'use strict'

const friends = [123, 234, 555, 'hello'];
console.log(friends);

// Pop removes the element from the last 
friends.pop();
console.log(friends);
//Push new element in the last 
friends.push('Pareekshit');
console.log(friends);
//Shift removes values from the beginning 
friends.shift();
console.log(friends);
//Unshift removes values from the beginning
friends.unshift('Ashish');
console.log(friends);


console.log(friends.indexOf('Ashish'));
console.log(friends.includes('Pareekshit'));

console.log("========================");
//Splice take the index from which the deletion will start and how many indexes will deleted
const friends1 = ['mahesh', 'ashish', 'mukul', 'pareekshit'];
console.log(friends1);
console.log(friends1.splice(0, 3));
console.log(friends1);

//Filter> 
let value = 'mahesh';
console.log("=========Filter===============");
const friends2 = ['mahesh', 'ashish', 'mukul', 'pareekshit'];
console.log(friends2);
let result = friends2.filter((item) => {
    return item !== value; //mahesh !== ashsih is true, condition is true that's why assigned the value to the new array.
});
console.log(result);
console.log(friends2);