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
        break;
    default:
        console.log('Error');
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

let num = 100;

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
        arrayOfNumbers[i - 5] = i
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