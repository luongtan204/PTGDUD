// Thử thách lập trình #1 - So sánh BMI


let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;


let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


function tinhBMI(canNang, chieuCao) {
    return canNang / (chieuCao ** 2);
}


let markBMI1 = tinhBMI(markMass1, markHeight1);
let johnBMI1 = tinhBMI(johnMass1, johnHeight1);

if (markBMI1 > johnBMI1) {
    console.log(`BMI của Mark (${markBMI1.toFixed(2)}) cao hơn BMI của John (${johnBMI1.toFixed(2)})!`);
} else {
    console.log(`BMI của John (${johnBMI1.toFixed(2)}) cao hơn BMI của Mark (${markBMI1.toFixed(2)})!`);
}


let markBMI2 = tinhBMI(markMass2, markHeight2);
let johnBMI2 = tinhBMI(johnMass2, johnHeight2);

if (markBMI2 > johnBMI2) {
    console.log(`BMI của Mark (${markBMI2.toFixed(2)}) cao hơn BMI của John (${johnBMI2.toFixed(2)})!`);
} else {
    console.log(`BMI của John (${johnBMI2.toFixed(2)}) cao hơn BMI của Mark (${markBMI2.toFixed(2)})!`);
}
