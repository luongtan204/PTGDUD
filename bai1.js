// Coding Challenge #1 - BMI Comparison

let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;


let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Calculate BMI for Test Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Dữ liệu kiểm thử 1: BMI của Mark: ${markBMI1.toFixed(2)}, BMI của John: ${johnBMI1.toFixed(2)}`);
console.log(`Mark có BMI cao hơn trong dữ liệu kiểm thử 1? ${markHigherBMI1}`);


let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Dữ liệu kiểm thử 2: BMI của Mark: ${markBMI2.toFixed(2)}, BMI của John: ${johnBMI2.toFixed(2)}`);
console.log(`Mark có BMI cao hơn trong dữ liệu kiểm thử 2? ${markHigherBMI2}`);