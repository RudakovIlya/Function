// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1.

function t1(min, max) {
    let sum = 0;

    for (let i = min; i < max; i++) sum += i;

    return sum;
}

document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(10, 20);
});

// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2.

const t2 = (a, b) => Math.max(a, b);

document.querySelector('.b-2').addEventListener('click', () => {
    document.querySelector('.out-2').textContent = t2(10, 15);
});

// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3.

const t3 = (a, b, c) => (b === 0 ? c : a / b);

document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3(2312321, 2434, 21);
});

// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4.

const t4 = (arr, block) =>
    (document.querySelector(block).innerHTML = arr.join('-'));

document.querySelector('.b-4').addEventListener('click', () => {
    t4([1, 2, 3, 4, 'dsa', 212, 321], '.out-4');
});

// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5.

const t5 = (selector) =>
    document.querySelector(`.${selector}`).classList.contains(selector);

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = t5('out-5');
});

// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.

const t6 = (arr) => arr.reverse().join(' ');

document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').innerHTML = t6([1, 2, 3, 4, 5, 65]);
});

// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

const out7 = document.querySelector('.out-7');

function t7(block, text) {
    block.textContent = text.toLowerCase().trim();
}

document.querySelector('.b-7').addEventListener('click', function () {
    t7(out7, ' HelLO wORLd       ');
});

// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.

let a8 = [1998, 2000, 1999, 2002, 2005];
let year = 1998;

const t8 = (arr, year) => arr.every((item) => item >= year);

document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = t8(a8, year);
});

// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел.

const t9 = (arr, num) => {
    const arrNew = arr.map((item) => item);

    arrNew.push(num);

    return arrNew.join(' ');
};

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').textContent = t9([1, 2, 3, 4], 5);
});

// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел.

const t10 = (arr, ...args) => {
    const newArr = arr.map((item) => item);

    newArr.push(...args);

    return newArr.join(' ');
};

document.querySelector('.b-10').addEventListener('click', () => {
    document.querySelector('.out-10').textContent = t10(
        [1, 2, 3, 4, 5, 6],
        7,
        8,
        9,
        10,
        11
    );
});
