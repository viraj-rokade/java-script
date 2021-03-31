//person 1 weight and height
var markWeight = 65; // weight in kg
var markHeight = 1.78; // height in meters

//person 2 weight and height
var johnWeight = 85; // weight in kg
var johnHeight = 1.70; // height in meters

//Mark's BMI
var markBMI = markWeight / (markHeight * markHeight);

//John's BMI
var johnBMI = johnWeight / (johnHeight * johnHeight);

//compare if Mark's BMI is higher or not?
var compareBMI = markBMI > johnBMI; // returns true or false (boolean value)

//To print results in console
console.log("Mark's BMI = "+markBMI+"\n"+"John's BMI = "+johnBMI+"\n"+"Is Mark's BMI higher than John's BMI?"+"\n"+compareBMI);
