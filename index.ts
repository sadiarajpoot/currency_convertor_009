#! /usr/bin/env node
console.log("\n\t currency_convertor_by_sadia_kham\n");

import inquirer from "inquirer";

const currency: any = {
	USD: 1, //base currency
	EUR: 0.91,
	GBP: 0.76,
	INR: 74.57,
	PKR: 280,
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Selected the currency to converted from:",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "To",
    message: "Selected the currency to converted INTO: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount to converted ",
    type: "number",
  },
]);
let fromamount = currency[user_answer.from]
let toamount = currency[user_answer.To]
let amount = user_answer.amount
let baseamount = amount / fromamount //usd base currency
let convertedamount = baseamount * toamount
console.log(convertedamount)

