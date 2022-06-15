//Calculate area of a rectangle

let length = 20;
let width = 40;
let area = length * width;
console.log("The area of rectangle is: " + area);

//The Temperature Converter

let celsius = 70;
let convertToFahrenheit = (celsius * 1.8)+ 32;

let fahrenheit = 50;
let convertToCelsius = (fahrenheit - 32 ) * 0.5556;

console.log("The convert " +celsius+ "°C is " +convertToFahrenheit + "°F");

console.log("The convert " +fahrenheit+ "°F is " +convertToCelsius + "°C");


// Numbers' summations

let numbers = [23,54,32,87,47];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("The sum of array is: " + sum);

// Maximum number

let num = [16,4,2,0,19,6];
let max = 0;

for (let index = 0; index < num.length; index++) {
    if(num[index] > num[index+1]){
        if(num[index] > max)
        max = num[index];
    }
}
console.log("The maximum number is: " +max);

// Reverse Array

let num1 = [1,2,3,4,5,6,7,8,9,10];
console.log(num1);
num1.reverse();
console.log(num1);

// stars pattern

let element= "";
let n = 5;
for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= x; y++) {
        }
    element += "*"
    console.log(element) 
}