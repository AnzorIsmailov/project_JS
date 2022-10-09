/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);


if (4 > 0) {
    console.log('OK!');
} else {
    console.log('NO((');
} */

/* const num = +prompt('Угадай число от 1 до 10');

const numOdd = [1 || 3 || 5 || 7 || 9];

const numEven = [2 || 4 || 6 || 8 || 10];

if (num == numOdd) {
    console.log('Верно!');
} else if (num == numEven) {
    console.log('Неверно');
} else {
    console.log(' Error');
}

const num2 = +prompt('Угадай число от 1 до 10');

(num2 == numOdd) ? console.log('Верно!') : console.log('Неверно');

const num3 = +prompt('Угадай число от 1 до 10');

switch (num3) {
    case 1:
        console.log('Верно!');
        break;
    case 3:
        console.log('Неверно');
        default:
            console.log('Error');
            break;
            break;
        } */
/* 
console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
console.log('Done!');
} else {
console.log('No');
} */

let num = 100

while (num <= 105) {
    console.log(num);
    num++;
}

let num = 100;

do {
    console.log(num);
    num++;
}
while (num <= 105);

let num = 100;

do {
    console.log(num);
    num--;
}
while (num >= 95);

for (let i = 1; i <= 8; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i == 13) {
        break;
    }
    console.log(i);
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof (data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);
return data;

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof (data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);
    // Не трогаем
    return result;
}

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}

console.log(result);
return result;

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < length - i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < 5 - i; j++) {
        result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);

function boolToWord(bool) {
    if (bool == true) {
        return "yes";
    } else if (bool == false) {
        return "no";
    }
}
console.log(boolToWord(false));

function updateLight(current) {
    if (current == 'green') {
        return 'yellow';
    } else if (current == 'yellow') {
        return 'red';
    } else {
        return 'green';
    }
}

console.log(updateLight('yellow'));

function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

console.log(feast("great blue heron", "garlic naan"));

let summation = function (num) {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(summation(7));

const client = {
    name: 'Anzor',
    height: 180,
    weight: 90,
    colors: {
        color: 'red',
        bg: 'black'
    }
}

const { bg, color } = client.colors;
// Деструктуризация объекта, левая часть ключи которые мы хотим достать
// правая часть это объект из которого мы достаем ключи.
console.log(bg);

let counter = 0;

// цикл for in  позволяте перебрать Объект и дальше прописывать условия.
for (let key in client) {
    if (typeof (client[key]) === 'object') {
        for (let i in client[key]) { // key это ключ обьекта
            console.log(`Свойство ${key} имеет значение ${client[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${client[key]}`);
        counter++;
    }
}

console.log(counter);
//Object.keys - это метод который переводит ключи обьекта в массив из ключей.
// А длинну массива можно опредилить с помощью length, в итоге получаем длинну обьекта
console.log(Object.keys(client).length);


//Перебор Массива

const arr = [1, 3, 4, 5, 67];

for (let i = 0; i < arr.length; i++) { //length это моследний индекс массива плюс один [0, 2 , 3, 10] = 4
    console.log(arr[i]); //Перебераес массив с помощью цикла For
}

const arr1 = [1, 3, 4, 5, 67];

for (let value in arr1) {
    console.log(`ключ ${value} имеет значение ${arr1[value]}`);
} //Перебор массива с помощью цикла For in

const arr2 = [1, 3, 4, 5, 67];

for (let value of arr2) {
    console.log(`значение ${value}`);
} //Перебор массива с помощью цикла For of


//Метод массива forEach
const arr3 = [1, 3, 4, 5, 67];

arr3.forEach(function (item, i, arr3) {
    console.log(`${i}: ${item} внутри массива ${arr3}`);
});


//Методы превращения

let str = 'qwerf, sdffdg, ddfegeg, gfgfgrgdf';
const products = str.split(', ');//Из строки сформировали массив
products.sort();//Метод сортирует стороки по алфавиту
console.log(products.join('; '));//Обратно в сторку

const arr4 = [1, 32, 43, 5, 67];
arr4.sort(function compareNum(a, b) {
    return a - b;//Сортирует цифры
});
console.log(arr4);


