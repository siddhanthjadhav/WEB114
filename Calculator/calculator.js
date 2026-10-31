
"use strict";

//Siddhanth Jadhav 10/30/2026

let choice;
let num1;
let num2;

choice = Number(prompt(
    "Enter your choice:\n" +
    "1. Add two numbers\n" +
    "2. Subtract two numbers\n" +
    "3. Multiply two numbers\n" +
    "4. Divide two numbers\n" +
    "5. Exit"
));

switch (choice) {
    case 1:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        alert("Sum: " + (num1 + num2));
        break;

    case 2:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        alert("Difference: " + (num1 - num2));
        break;

    case 3:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number:"));
        alert("Product: " + (num1 * num2));
        break;

    case 4:
        num1 = Number(prompt("Enter first number:"));
        num2 = Number(prompt("Enter second number (not zero):"));

        if (num2 === 0) {
            alert("Cannot divide by zero.");
        } else {
            alert("Quotient: " + (num1 / num2));
        }
        break;

    case 5:
        alert("Exiting the program.");
        break;

    default:
        alert("Invalid choice. Please choose 1 to 5.");
        break;
}
