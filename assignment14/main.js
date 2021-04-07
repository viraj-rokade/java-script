let percentageOfWorld = population => ((population/7900)*100).toFixed(2);

function describePopulation(country,population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world.`;
}

console.log(describePopulation("China",1441));
console.log(describePopulation("India",1340));
console.log(describePopulation("USA",328));

