// John's team's last 3 scores - 89, 120 and 103
// Mike's team's last 3 scores - 116, 94 and 123
// mary's team's last 3 scores - 97, 134 and 105

// to calculate average
var jAvg = (89 + 120 + 103) / 3; 
var mAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134 + 105) / 3;

// if-else to comapre the winner
if(jAvg > mAvg && jAvg > maryAvg)
{
    console.log("Winner is John's Team with average score of "+jAvg+" points.");
}
else if(mAvg > jAvg && mAvg > maryAvg)
{
    console.log("Winner is Mike's Team with average score of "+mAvg+" points.");
}
else if(maryAvg > jAvg && maryAvg > mAvg)
{
    console.log("Winner is Mary's Team with average score of "+maryAvg+" points.");
}
else
{
    console.log("There is draw as all have same average score which is "+mAvg+" points.");
}