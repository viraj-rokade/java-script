function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

let data1 = describeCountry("India",1340,"Delhi");
let data2 = describeCountry("United State of America",328.2,"Washington DC");
let data3 = describeCountry("England",55.9,"London");

console.log(data1+"\n"+data2+"\n"+data3);