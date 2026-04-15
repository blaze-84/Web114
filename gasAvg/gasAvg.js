//Blaze Swieton 4/14/26 

let entryCount = 0;


let totalGas = 0;


let username = prompt("Enter your name:");


if (username === null) {
    alert("You cancelled the name prompt.");


} else if (username.trim() === "") {
    alert("You must type a name.");

} else {


    let average = calcGasAvg();


    if (average === null) {
        alert("You cancelled entering gas totals.");

    } else {


        if (entryCount === 0) {
            alert("No gas totals were entered.");

        } else {
            // 8b. Build the gas message
            let gasMessage = "";

            if (entryCount === 1) {
                // Only 1 entry - show the total, not an average
                gasMessage = username + ", your gas total is $" + totalGas.toFixed(2) + ".";
            } else {
                // More than 1 entry - show the average
                gasMessage = username + ", your average gas bill is $" + average.toFixed(2) + ".";
            }


            alert(gasMessage);
        }

        // 8c. Build the entry count message
        let countMessage = "";

        if (entryCount === 0) {
            countMessage = "No gas totals were entered.";
        } else if (entryCount === 1) {
            countMessage = "1 entry was entered.";
        } else {
            countMessage = entryCount + " entries were entered.";
        }


        alert(countMessage);
    }
}


function calcGasAvg() {

    let input = prompt("Enter your first week's gas total. Enter -1 when done.");

    if (input === null) {
        return null;
    }

    // 11. The prompt returns a STRING - use Number() to convert it to a number
    let weeklyGas = Number(input);

    // 12. Keep looping as long as the user hasn't entered -1
    while (weeklyGas !== -1) {

        // 12a. Check if the entry is NOT a valid number
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");


            input = prompt("Enter your first week's gas total. Enter -1 when done.");


            if (input === null) {
                return null;
            }


            weeklyGas = Number(input);
            continue;

        } else {

            totalGas = totalGas + weeklyGas;

            entryCount = entryCount + 1;


            input = prompt("Enter your next week's gas total. Enter -1 when done.");

            // If Cancel, return null
            if (input === null) {
                return null;
            }


            weeklyGas = Number(input);
        }

    }
    let average = 0;

    if (entryCount > 0) {
        average = totalGas / entryCount;
    } else {
        average = 0;
    }

    return average;
}