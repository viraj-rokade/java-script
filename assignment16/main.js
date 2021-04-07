const neighbours = ['China','Bangladesh','Nepal','Sri Lanka','Pakistan'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log(`Probably not a central European country :D`);
}

const indexChange =  neighbours.indexOf("Nepal");
neighbours[indexChange] = "Republic of Nepal";
console.log(neighbours);