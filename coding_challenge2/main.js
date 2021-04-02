average = arr => {
    let temp = 0;
    for(let i=0;i<arr.length;i++){
        temp = temp+arr[i];
    }
    return (temp/arr.length).toFixed(2);
};

data1 = {
    dolphins: [96,108,89],
    koalas: [88,91,110]
}

console.log(`===========================================================================================================`);
console.log(`DATA 1`);
console.log(`===========================================================================================================`);

if(average(data1.dolphins)>average(data1.koalas)){
    console.log(`The winner of this competition is team Dolphins with average score of ${average(data1.dolphins)} points!`);
}else if(average(data1.dolphins)<average(data1.koalas)){
    console.log(`The winner of this competition is team Koalas with average score of ${average(data1.koalas)} points!`);
}else if(average(data1.dolphins)==average(data1.koalas)){
    console.log(`It's a draw between team Dolphins and team Koalas with both having average score of ${average(data1.dolphins)} points!`);
}

console.log(`===========================================================================================================`);
console.log(`DATA BONUS 1`);
console.log(`===========================================================================================================`);

dataBonus1 = {
    dolphins: [97,112,101],
    koalas: [109,95,123]
}

if(average(dataBonus1.dolphins)>average(dataBonus1.koalas) && average(dataBonus1.dolphins)>=100){
    console.log(`The winner of this competition is team Dolphins with average score of ${average(dataBonus1.dolphins)} points!`);
}else if(average(dataBonus1.dolphins)<average(dataBonus1.koalas) && average(dataBonus1.koalas)>=100){
    console.log(`The winner of this competition is team Koalas with average score of ${average(dataBonus1.koalas)} points!`);
}else if(average(dataBonus1.dolphins)==average(dataBonus1.koalas)  && average(dataBonus1.koalas)>=100){
    console.log(`It's a draw between team Dolphins and team Koalas with both having average score of ${average(dataBonus1.dolphins)} points!`);
}else {
    console.log(`Nobody wins as the average scores are below minimum average requirement of 100 points!`)
}

console.log(`===========================================================================================================`);
console.log(`DATA BONUS 2`);
console.log(`===========================================================================================================`);

dataBonus2 = {
    dolphins: [97,112,101],
    koalas: [109,95,106]
}

if(average(dataBonus2.dolphins)>average(dataBonus2.koalas) && average(dataBonus2.dolphins)>=100){
    console.log(`The winner of this competition is team Dolphins with average score of ${average(dataBonus2.dolphins)} points!`);
}else if(average(dataBonus2.dolphins)<average(dataBonus2.koalas) && average(dataBonus2.koalas)>=100){
    console.log(`The winner of this competition is team Koalas with average score of ${average(dataBonus2.koalas)} points!`);
}else if(average(dataBonus2.dolphins)==average(dataBonus2.koalas)  && average(dataBonus2.koalas)>=100){
    console.log(`It's a draw between team Dolphins and team Koalas with both having average score of ${average(dataBonus2.dolphins)} points!`);
}else {
    console.log(`Nobody wins as the average scores are below minimum average requirement of 100 points!`)
}

console.log(`===========================================================================================================`);