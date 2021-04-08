let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        let bmi = (this.mass/ this.height ** 2).toFixed(2);
        this.bmi = bmi;
        return bmi;
    }
}

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        let bmi = (this.mass/ this.height ** 2).toFixed(2);
        this.bmi = bmi;
        return bmi;
    }
}

if(john.calcBMI()>mark.calcBMI()) console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
else if(john.calcBMI()<mark.calcBMI()) console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)