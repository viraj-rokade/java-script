/*
Bills are - $124, $48 and $268
Tip ratio's
    1. 20% for Bill < $50
    2. 15% for Bill >= $50 and <= $200
    3. 10% for Bill > $200
*/

//function to calculate tip amount
function tipCalculator(billAmount)
{
    switch(true)
    {
        case billAmount < 50:
            return billAmount * (20/100);
        case billAmount >= 50 && billAmount <= 200:
            return billAmount * (15/100);
        case billAmount > 200:
            return billAmount * (10/100);
        default:
            return 0;
    }
}

//array declaration
var bills = [124, 48, 268];
var tips = [];
var fianlAmounts = [];

//loop to calculate tips and push values into empty arrays
for(var i=0;i<bills.length;i++)
{
    tips.push(tipCalculator(bills[i]));
    fianlAmounts.push(bills[i]+tips[i]);
}

//print result in console
console.log("Tips: "+tips+"\n"+"Final Amounts (Bill + Tip): "+fianlAmounts);
