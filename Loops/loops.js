// Blaze Swieton 4/7/26
 
"use strict";
 
let input = prompt("How many crates need to be scanned?");
 
// prompt "null" if cancelled 
if (input === null) {
  console.log("Scan cancelled. No crates were scanned.");
} else {
 
  // Convert the user input into a number
  let totalCrates = Number(input);
 
  // Counters 
  let fragileCrates   = 0;
  let loadedCrates    = 0;
  let inspectedCrates = 0;
 
  
  for (let crate = 1; crate <= totalCrates; crate++) {
 
    if (crate % 5 === 0) {
      console.log("Crate " + crate + ": Handle with care (fragile equipment)");
      fragileCrates = fragileCrates + 1;
 
    } else if (crate % 2 === 0) {
      console.log("Crate " + crate + ": Load crate (normal supplies)");
      loadedCrates = loadedCrates + 1;
 
    } else {
      console.log("Crate " + crate + ": Inspect crate (unknown cargo)");
      inspectedCrates = inspectedCrates + 1;
    }
 
  }
 
  console.log("Total crates scanned: " + totalCrates);
 
  // 3rd challenge 
  console.log("Number of fragile crates: "   + fragileCrates);
  console.log("Number of loaded crates: "    + loadedCrates);
  console.log("Number of inspected crates: " + inspectedCrates);
 
}
 