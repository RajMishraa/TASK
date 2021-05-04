const kelvin = 293 ;                         // 293 is stored in kelvin as a constant
const celsius = kelvin - 273;                 //Celsius is 273 degrees less than Kelvin.
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit)    ;         //we will round the number saved to fahrenheit
console.log("The temperature is " +fahrenheit+ " degrees Fahrenheit.");
