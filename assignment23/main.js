const populations = [1441,1340,328,55];

let percentageOfWorld = population => ((population/7900)*100).toFixed(2);

let percentages = [];

let i =0;
while(i<populations.length){
    percentages.push(percentageOfWorld(populations[i]));
    i++;
}

console.log(percentages);