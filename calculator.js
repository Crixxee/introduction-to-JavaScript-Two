// program for a simple calculator using JavaScript without frontend(html and css)

// enter the first input (number)
const number1 = parseFloat(prompt('Enter first number: '));

// enter the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// enter the second input (number)
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using the; if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);