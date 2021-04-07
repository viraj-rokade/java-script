const populations = [1441,1340,328,55];

let percentageOfWorld = population => ((population/7900)*100).toFixed(2);

let percentages = [];
for(let i=0;i<populations.length;i++){
    percentages.push(percentageOfWorld(populations[i]));
}

console.log(percentages);