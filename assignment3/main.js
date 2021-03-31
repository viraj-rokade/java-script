let isIsland = false;
let language;
const country = "India";
let population = 1.34;
const continent = "Asia";
language = "Hindi";

console.log(population / 2);
population=population+1;
console.log(`The new population of India is ${population} Billion`);
console.log(population > 0.06);
console.log(population < 0.33);
population=(population-1).toFixed(2);

const description =  `${country} is in ${continent}, and its ${population} Billion population speaks ${language}.`;
console.log(description);