const calcTip = bill => {
    let tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
    return tip;
}

console.log(`For bill of $100, tip is $${calcTip(100)}`);

const bills = [125,555,44];
let tips = [];
let total = [];

for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    total.push(tips[i]+bills[i]);
}

console.log(`Bills: ${bills}\nTips: ${tips}\nTotal Bill: ${total}`);