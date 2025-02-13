// Завдання 2
const total = 100;
let ordered = 50;

if (ordered > total) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}

// Перевірка працездатності коду з різними значеннями змінної ordered
ordered = 20;
if (ordered > total) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}

ordered = 80;
if (ordered > total) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}

ordered = 130;
if (ordered > total) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}