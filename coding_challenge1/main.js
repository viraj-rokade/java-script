/* Height in meter and weight/mass is in kilograms */

function BMI(mass, height) {
    return parseFloat(mass / (height * height));
}

const data1 = {
    mark_mass: 78,
    mark_height: 1.69,
    john_mass: 92,
    john_height: 1.95
}

const data2 = {
    mark_mass: 95,
    mark_height: 1.88,
    john_mass: 85,
    john_height: 1.76
}

let markHigherBMI_case1 = BMI(data1.mark_mass, data1.mark_height) > BMI(data1.john_mass, data1.john_height);
let markHigherBMI_case2 = BMI(data2.mark_mass, data2.mark_height) > BMI(data2.john_mass, data2.john_height);

console.log(`====================================================================================`)
console.log(`For data set 1\nMark's BMI: ${BMI(data1.mark_mass, data1.mark_height).toFixed(2)}\nJohn's BMI: ${BMI(data1.john_mass, data1.john_height).toFixed(2)}`)
console.log(`Is Mark's BMI higher than John's? \nAnswer: ${markHigherBMI_case1}`);
console.log(`====================================================================================`)
console.log(`For data set 2\nMark's BMI: ${BMI(data2.mark_mass, data2.mark_height).toFixed(2)}\nJohn's BMI: ${BMI(data2.john_mass, data2.john_height).toFixed(2)}`)
console.log(`Is Mark's BMI higher than John's? \nAnswer: ${markHigherBMI_case2}`);
console.log(`====================================================================================`)