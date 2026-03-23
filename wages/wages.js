"use strict"

let hourlyWage = parseFloat(prompt(`What is your hourly wage?`).replace("$", "").trim());
console.log(`You said $${hourlyWage}, is that correct?`);

let hoursWorked = parseFloat(prompt(`How many hours did you work?`).trim() );
//I get a checkbox"prevent this page from creating additional dialogs" and not sure why or how to make it go away.
if (hoursWorked >=40) {
    console.log(`Congratulations! You earned a full paycheck!`);
} else {
    console.log(`Keep it up! You'll get there!`);
}
let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * .10;
let netPay = grossPay - taxes;
console.log(`Your weekly earnings after taxes are $${netPay.toFixed(2)}`);
if (hoursWorked > 40) {
    console.log(`Congratulations! You worked overtime this week!`);
} else if (hoursWorked === 40)  {
    console.log(`You worked exactly 40 hours!`);
} else {
    console.log (`You worked ${hoursWorked} hours this week.`);
} if (hoursWorked <= 40) {
    console.log(`No overtime this week.`);
}
if (netPay >= 800) {
    console.log(`Great paycheck this week!`);
} else if (netPay < 800) {
    console.log(`Keep working towards a bigger paycheck!`);
}