//Blaze Swieton 3/31/26
"use strict"

let favMonth = (prompt("Enter your favority month:"));
favMonth = favMonth .toLowerCase() .trim() 
    switch (favMonth) {
        case "march":
        case "april":
        case "may":
            console.log("Spring is nice with everything blooming!")
            break;
    
        case "june":
        case "july":
        case "august":
            console.log("You enjoy the summer months!")
            break;
        
        case "september":
        case "october":
        case "november":
                console.log("Fall is fun with all the pretty colors.")
                break;
        
        case "december":
        case "january":
        case "february":
                console.log("You love the winter months!")
                break;
        
        default:
            console.log("Other months are nice too!")
            break;
    }
    
