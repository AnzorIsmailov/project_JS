'use strict';

function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  console.log(result);


  // Не трогаем
  return result;
}

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) === "number") {
      data[i] = data[i] * 2;
    } else if (typeof (data[i]) === "string") {
      data[i] = `${data[i]} - done`;
    }
  }
  console.log(data);


  // Не трогаем
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

function w() {

  const lines = 5;
  let result = '';

  for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
      result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

const usdCurr = 60;
const eurCurr = 65;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(120, usdCurr);
convert(100, eurCurr);

function sayHello(name) {
  console.log(`Привет, ${name}!`);
  return `Привет, ${name}!`;
}

sayHello('Антон');

function returnNeighboringNumbers(num) {

  console.log([num - 1, num, num + 1]);

  return [num - 1, num, num + 1];

}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return num;
  }
  let result = num;

  for (let i = 2; i <= times; i++) {
    result += `---${num * i}`;
  }
  return result;
}

getMathResult(5, 3);
console.log(getMathResult(5, 3));

function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }
  return str;
}

getMathResult(3, 6);
console.log(getMathResult(3, 6));

function calculateVolumeAndArea(length) {
  if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0;
  let area = 0;

  volume = length * length * length;

  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);
console.log(calculateVolumeAndArea(5));

function getCoupeNumber(num) {
  if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (num <= 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(num / 4);

}

getCoupeNumber(33);
console.log(getCoupeNumber(33));

function getTimeFromMinutes(minutesTotal) {
  if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
    return "Ошибка, проверьте данные";
  }
  let hours = Math.floor(minutesTotal / 60);
  let minutes = (minutesTotal % 60);

  let hourStr = '';

  switch (hours) {
    case 0:
      hourStr = 'часов';
      break;
    case 1:
      hourStr = 'час';
      break;
    case 2:
    case 3:
    case 4:
      hourStr = 'часа';
      break;
    default:
      hourStr = 'часов';
  }
  return `Это ${hours} ${hourStr} и ${minutes} минут`;
}

getTimeFromMinutes(240);
console.log(getTimeFromMinutes(240));

function findMaxNumber(a, b, c, d) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number') {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}
console.log(findMaxNumber(1, 2, 3, 4, 5));

function fib(num) {
  if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
  } else if (num === 1) {
    return '0';
  }

  let arr = [];
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];

  }
  return arr.join(' ');
}

console.log(fib(2));

function initials(name1, name2, name3) {
  return `${name2} ${name1.charAt()}. ${name3.charAt()}.`;
}

console.log(initials('Анзор', 'Исмаилов', 'Айдрусович'));



const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;

  }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {

  const { exp } = plan.skills;
  return exp;

}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;

}

console.log(showProgrammingLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length === 0) {
    return `Семья пуста`;
  }
  return `Семья состоит из: ${arr.join(' ')}`;
}

console.log(showFamily(family));

const showFamily2 = arr => arr.length ? `Семья состоит из: ${arr.join(' ')}` : `Семья пуста`;

console.log(showFamily2(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(function (item) {
    console.log(item.toLowerCase());
  });
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
  if (typeof (str) != 'string') {
    return 'Ошибка!';
  }
  return str.split('').reverse().join('');
}

console.log(reverse(someString));

let reverse2 = str => typeof (str) != 'string' ? 'Ошибка!' : str.split('').reverse().join('');

console.log(reverse2(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

let totalCurrencies = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function (curr) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  return str;

}

console.log(availableCurr(totalCurrencies, 'RUB'));