'use strict';
let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let expense1 = prompt('Введите обязательную статью расходов в этом месяце'),
    cost1 = prompt('Во сколько обойдется?'),
    expense2 = prompt('Введите обязательную статью расходов в этом месяце'),
    cost2 = prompt('Во сколько обойдется?');
let appData = {
    budget: money,
    timeData: time,
    expenses: { 
        expense1: cost1 ,
        expense2: cost2
           },
 
   optionalExpenses: {},
   income : [],
   saving : false
};
appData.expenses[expense1]=cost1;
appData.expenses[expense2]=cost2;
 
console.log(appData.expenses);
alert(appData.budget/30);
console.log(typeof(appData.budget/30))