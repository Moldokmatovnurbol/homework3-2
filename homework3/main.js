

// function findMin(a, b) {
//     console.log(Math.min(a, b));
// }
// findMin(5, 3);
// findMin(4, 8);
// findMin(-10, 5);




// function getStringLength(input) {
//     console.log(input.length);
// }
//
// let userInput = prompt("Введите строку:");
// getStringLength(userInput);



function calculator(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        if (b === 0) {
            return "Ошибка: деление на ноль!";
        } else {
            return a / b;
        }
    } else {
        return "Ошибка: неверная операция!";
    }
}

let num1 = parseFloat(prompt("Введите первое число:"));
let operation = prompt("Введите операцию (+, -, *, /):");
let num2 = parseFloat(prompt("Введите второе число:"));


let result = calculator(num1, num2, operation);
alert("Результат: " + result);

