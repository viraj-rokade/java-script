const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 1340,
    neighbours: ['China','Bangladesh','Nepal','Sri Lanka','Pakistan']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

myCountry.population=myCountry.population+2;
console.log(myCountry.population);

myCountry['population']=myCountry['population']-2;
console.log(myCountry['population']);