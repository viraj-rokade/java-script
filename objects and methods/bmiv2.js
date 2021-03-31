// John Variable
var john = {
    fullName: "John Doe",
    mass: 65, //in kg
    height: 1.78, //in meters
    calcBMI: function() {
        this.BMI = this.mass / (this. height * this.height);
        return this.BMI;
    }
};

//Mike Variable
var mike = {
    fullName: "Mike Bret",
    mass: 85, //in kg
    height: 1.70, //in meters
    calcBMI: function() {
        this.BMI = this.mass / (this. height * this.height);
        return this.BMI;
    }
};

//function calls to calculate bmi
john.calcBMI();
mike.calcBMI();

//BMI Comparison and results 
if(john.BMI > mike.BMI)
{
    console.log("Person with highest BMI is: \nFull Name: "+john.fullName+"\n"+"BMI: "+john.BMI);
}
else if(john.BMI < mike.BMI)
{
    console.log("Person with highest BMI is: \nFull Name: "+mike.fullName+"\n"+"BMI: "+mike.BMI);
}
else
{
    console.log("John and Mike both have same BMI which is "+john.BMI);
}