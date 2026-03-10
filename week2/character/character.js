// Blaze Swieton 3/8/26
"use strict";

alert("Welcome to the Adventure Realm! Let's create your hero!");

const characterName = prompt("What is your character's name?");

const pet = prompt(`What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`, "dragon");

const superPower = prompt(`What is ${characterName}'s superpower?`)

const likesFighting = confirm(`Does ${characterName} like fighting monsters?\nClick OK for YES\nClick Cancel for NO`);

alert(`Gathering magic for ${characterName}...almost ready!`); 

alert(`In a land far away, 
    ${characterName} lives with their 
    ${pet} who also shares their ${superPower} superpower. 
    Together, they fight monsters.
    If you long for adventure, join them!`
);
