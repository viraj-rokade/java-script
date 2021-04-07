function percentageOfWorld1(population) {
    return ((population/7900)*100)
}

let dataChina = percentageOfWorld1(1441);
let dataIndia = percentageOfWorld1(1340);
let dataUSA = percentageOfWorld1(328);

console.log("=============================================================")
console.log(
`China has ${dataChina.toFixed(2)}% population of the entire world.
India has ${dataIndia.toFixed(2)}% population of the entire world.
USA has ${dataUSA.toFixed(2)}% population of the entire world.`);
console.log("=============================================================")

let percentageOfWorld2 = function (population) {
    return ((population/7900)*100)
}

let data2China = percentageOfWorld2(1441);
let data2India = percentageOfWorld2(1340);
let data2USA = percentageOfWorld2(328);

console.log(
`China has ${data2China.toFixed(2)}% population of the entire world.
India has ${data2India.toFixed(2)}% population of the entire world.
USA has ${data2USA.toFixed(2)}% population of the entire world.`);
console.log("=============================================================")