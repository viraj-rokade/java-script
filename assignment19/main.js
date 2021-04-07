const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 1340,
    neighbours: ['China','Bangladesh','Nepal','Sri Lanka','Pakistan'],
    
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    
    checkIsland: function() {
        this.neighbours.length===0 ? this.isIsland=true : this.isIsland=false;
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);