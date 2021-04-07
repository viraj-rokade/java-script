let percentageOfWorld3 = population => (population/7900)*100;

let dataChina = percentageOfWorld3(1441);
let dataIndia = percentageOfWorld3(1340);
let dataUSA = percentageOfWorld3(328);

console.log("=============================================================")
console.log(`China has ${dataChina.toFixed(2)}% population of the entire world.
India has ${dataIndia.toFixed(2)}% population of the entire world.
USA has ${dataUSA.toFixed(2)}% population of the entire world.`);
console.log("=============================================================")