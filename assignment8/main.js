let country = "India";
let language = "Hindi"
let isIsland = false
let population = 1340 

if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
}

country = "Canada";
language = "english"
isIsland = false
population = 30 

if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
}
