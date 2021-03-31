/*
Bills are - $124, $48, $268, $180 and $42
Tip ratio's
    1. 20% for Bill < $50
    2. 15% for Bill >= $50 and <= $200
    3. 10% for Bill > $200
*/
var john = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalAmounts = [];

        for(var i=0;i<this.bills.length;i++)
        {
            switch(true)
            {
                case this.bills[i] < 50:
                    this.tips.push(this.bills[i] * (20/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] >= 50 && this.bills[i] <= 200:
                    this.tips.push(this.bills[i] * (15/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] > 200:
                    this.tips.push(this.bills[i] * (10/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
            }
        }

    }
}

john.calcTip();
console.log("John's family data\nTips: "+john.tips+"\n"+"Final Amounts (Bill + Tip): "+john.finalAmounts+"\nAverage family tip: "+tipsAvg(john.tips));

var mark = {
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalAmounts = [];

        for(var i=0;i<this.bills.length;i++)
        {
            switch(true)
            {
                case this.bills[i] < 100:
                    this.tips.push(this.bills[i] * (20/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] >= 100 && this.bills[i] <= 300:
                    this.tips.push(this.bills[i] * (10/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] > 300:
                    this.tips.push(this.bills[i] * (25/100));
                    this.finalAmounts.push(this.bills[i]+this.tips[i]);
                    break;
            }
        }

    }
}

mark.calcTip();
console.log("Mark's family data\nTips: "+mark.tips+"\n"+"Final Amounts (Bill + Tip): "+mark.finalAmounts+"\nAverage family tip: "+tipsAvg(mark.tips));

function tipsAvg(tips)
{
    var sum = 0;
    for(var i=0;i<tips.length;i++)
    {
        sum = sum + tips[i];
    }

    var avg = sum / tips.length;
    return avg;
}

