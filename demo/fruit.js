//Blaze Swieton fruit using data types 3/4/26
"use strict"

const apples = 1.25; //per apple. Can't use $ because that would be a string. right now we are doing math.
const oranges = 1.25; //per orange

const numApples = 2;
const numOranges = 3;

//Calculate total cost for each item
const applesCost = (apples * numApples);
const orangesCost = (oranges * numOranges);
//Calculate total cost of all items
const totalCost = (applesCost + orangesCost);

// Create a message using template literals
const message = `You purchased: ${numApples} apples at $${apples} each for a total of
$${applesCost.toFixed(2)}. You purchased ${numOranges} oranges at $${oranges} each for a total of $${orangesCost.toFixed(2)}.`;


console.log(message);

