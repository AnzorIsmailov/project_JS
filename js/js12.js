'use strict';

function getDivisorsCnt(n) {
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            counter++;
        }
    }
    return counter;
}

console.log(getDivisorsCnt(35));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let fullSize = 0;
    let sum = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    fullSize = data.height * square;

    sum = data.budget - (fullSize * data.moneyPer1m3);

    if (sum >= 0) {
        return `Бюджета достаточно, избыток бюджета = ${sum}`;
    } else {
        return `Бюджета недостаточно, нужно еще = ${-sum}`;
    }

}

console.log(isBudgetEnough(shoppingMallData));