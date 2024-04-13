// CHALLENGE #2
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.
// The average score for Dolphins should be assigned to the scoreDolphins variable, 
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let d1 = 96, d2 = 108, d3 = 89;
let k1 = 88, k2 = 91, k3 = 110;

let scoreDolphins = (d1 + d2 + d3) / 3;//To store avg. score of dolphins 
let scoreKoalas = (k1 + k2 + k3) / 3;//To store average score of Koalas

scoreDolphins > scoreKoalas ? console.log("Dolphins win the trophy") : console.log("Koalas win the trophy");
