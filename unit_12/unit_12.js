// Task 1
// Напишите анонимную функцию применяя замыкание. Внутри функции создайте переменную равную 75, и повесьте на кнопку .b-1 событие клик и функцию, которая увеличивает переменную на 1 и присваивает блоку .out-1 ширину равную переменной + 'px'. Анонимная функция замыкание должна запускаться при загрузке файла.

(function () {
    let width = 75;

    document.querySelector('.b-1').addEventListener('click', () => {
        width += 1;

        const out = document.querySelector('.out-1');

        out.style.width = width + 'px';
    });
})();

// тут прописываете запуск

// Task 2
// Усложним предыдущую задачу. Создайте анонимную функцию замыкание, в которой создайте переменные w = 75 и h = 30. Создайте две функции, одна запускается при клике на кнопку .b-2-1 и увеличивает ширину блока .out-2, вторая запускается при клике на кнопку .b-2-2 и увеличивает высоту блока .out-2. Анонимная функция замыкание должна запускаться при загрузке файла.

(function () {
    let width = 75;

    let height = 30;

    document.querySelector('.b-2-1').addEventListener('click', () => {
        width += 15;

        const out = document.querySelector('.out-2');

        out.style.width = width + 'px';
    });

    document.querySelector('.b-2-2').addEventListener('click', () => {
        height += 15;

        const out = document.querySelector('.out-2');

        out.style.height = height + 'px';
    });
})();

// Task 3.
// В скобках напишите код функции замыкания, которая создает переменную count = 0 и возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его.

let count3 = (function () {
    let count = 0;

    return () => count++;
})();

console.log(count3());

console.log(count3());

console.log(count3());

console.log(count3());

// Task 4
// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его.

function createCount(arg = 0) {
    return () => arg++;
}

let count4 = createCount(444);

console.log(count4());
console.log(count4());

// Task 5
// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит в себе две функции. Первая функция randomInteger(min, max) возрвщает случайное целое число в диапазоне, а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать случайный символ из массива переданного функции generatePassword в качестве аргумента.

function generatePassword(arr) {
    const randomInteger = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    return () => arr[randomInteger(0, arr.length - 1)];
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);

console.log(password());

console.log(password());

// Task 6
// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr), и длину пароля(n). Функция  содержит в себе две функции. Первая функция randomInteger(min, max) , а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr. Символы выбираются случайным образом.

function generatePassword2(arr, n) {
    const randomInteger = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    return () => {
        let str = '';

        for (let i = 0; i < n; i++) {
            str += arr[randomInteger(0, arr.length - 1)];
        }

        return str;
    };
}

let password2 = generatePassword2(
    [
        'b',
        'y',
        'Y',
        'b',
        'z',
        '@',
        'd',
        '/',
        '*',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '1',
        '2',
    ],
    10
);

console.log(password2());

// Task 7
// Напишите функцию замыкание createElement, которая принимает 2 аргумента, первый название тега (elem), второй текст в теге (text). Функция createElement должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст. Созданный тег должен быть возвращен.

function generateElement(elem, text) {
    return () => {
        const newElement = document.createElement(elem);

        newElement.innerHTML = text;

        return newElement;
    };
}

let divCreator = generateElement('div', 'hello');
let spanCreator = generateElement('span', 'hi');
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(spanCreator());
document.querySelector('.out-7').append(spanCreator());

// Task 8
//  Напишите функцию замыкание createElement2, которая принимает 1 аргумент -  название тега (elem). Функция createElement2 должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст переданный в данную функцию как аргумент text. Созданный тег должен быть возвращен.

function generateElement2(elem) {
    return function (t) {
        const newElement = document.createElement(elem);

        newElement.innerHTML = t;

        return newElement;
    };
}

let divCreator2 = generateElement2('div');
let spanCreator2 = generateElement2('span');
document.querySelector('.out-8').append(divCreator2('ex1'));
document.querySelector('.out-8').append(divCreator2('ex2'));
document.querySelector('.out-8').append(spanCreator2('ex3'));
document.querySelector('.out-8').append(spanCreator2('ex4'));

// Task 9
// Напишите функцию замыкание generateDay, внутри которой создан массив days с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели.

function generateDay() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    return (n) => days[n - 1];
}

const day = generateDay();

console.log(day(2));

console.log(day(3));

// Task 10
// Напишите функцию замыкание generateMonth, внутри которой создан массив month с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает month[n-1] день недели.

function generateMonth() {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (n) => month[n - 1];
}

const month = generateMonth();

console.log(month(2));

console.log(month(3));
