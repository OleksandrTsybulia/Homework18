/*1. Визначення оцінки*/

let testScore = Number(prompt("Яка кількість балів за тест від 0 до 100"));
let finalResult = testScore >= 60 ? "Passed" : "Failed";
alert(finalResult);

/*2. Вибір напою*/

let drinkNumber = Number(prompt("Введіть номер обраного напою"));
switch (drinkNumber) {
  case 1:
    console.log("Coffee");
    break;
  case 2:
    console.log("Tea");
    break;
  case 3:
    console.log("Juice");
    break;
  case 4:
    console.log("Water");
    break;
  default:
    console.log("Unknown drink");
}

/*3. Пошук найбільшого числа*/

let firstNumber = Number(prompt("Введіть перше число:"));
let secondNumber = Number(prompt("Введіть друге число:"));
let thirdNumber = Number(prompt("Введіть третє число:"));

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  alert(`Найбільше число: ${firstNumber}`);
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
  alert(`Найбільше число: ${secondNumber}`);
} else {
  alert(`Найбільше число: ${thirdNumber}`);
}

/*4. Підрахунок суми*/

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

/*5. Таблиця множення*/

let numberToMultiply = Number(prompt("Вкажіть якесь число"));
for (let i = 1; i <= 10; i++) {
  console.log(`${numberToMultiply} * ${i} = ${numberToMultiply * i}`);
}

/*6. Робота з рядком*/
let numberOfLetters = "Demo string, for counting a specific letter.";
let count = 0;
for (let i = 0; i < numberOfLetters.length; i++) {
  if (numberOfLetters[i] === "a") {
    count++;
  }
}
console.log(count);

/*7. Функція для розрахунку ціни*/

function calculatePrice(priceProducts, quantityOfGoods) {
  let totalPrice = priceProducts * quantityOfGoods;
  console.log(totalPrice);
}

calculatePrice(1456, 3);
calculatePrice(826, 6);
calculatePrice(25786, 3);
