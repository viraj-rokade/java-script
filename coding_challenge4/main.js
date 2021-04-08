let calcAverage = (arr) => {
    let avg = 0;
    for(let i=0;i<arr.length;i++){
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    return avg;
}

let data1 = {
    dolphins: [44,23,71],
    koalas: [65,54,49]
}

let data2 = {
    dolphins: [85,54,41],
    koalas: [23,34,27]
}

let checkWinner = (avgDolphins,avgKoalas) => {
    if(avgDolphins >= 2*avgKoalas) console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    else if(avgKoalas >= 2*avgDolphins) console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    else console.log(`No one wins (Koalas: ${avgKoalas} & Dolphins: ${avgDolphins})`)
} 


console.log(`\n================== data 1 ===================\n`)
checkWinner(calcAverage(data1.dolphins),calcAverage(data1.koalas));
console.log(`\n================== data 2 ===================\n`)
checkWinner(calcAverage(data2.dolphins),calcAverage(data2.koalas));
console.log(`\n=============================================`)