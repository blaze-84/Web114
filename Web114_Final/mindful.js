//Blaze Swieton final Web-114 5/6/26
//using my javascript file to bring interaction to the app and offer skills to practice mindfulness
"use strict"
/*I'd like to target with a DOM function so i can change colors when feeling selected and display the message. here goes! */
const caption = document.getElementById("caption");
const buttons = document.querySelectorAll(".feeling-card button");

/*const anxiousBtn = document.getElementById("anxiousBtn"); //applied querySelectors to my html button elements
const angryBtn = document.getElementById("angryBtn");    //these will make my app to be interactive
const sadBtn = document.getElementById("sadBtn");         //DOM elements 
const depressedBtn = document.getElementById("depressedBtn");
const irritableBtn = document.getElementById("irritableBtn");

const caption = document.getElementById("caption"); i'm going to grab by const button & caption instead*/

//const feelingImage = document.getElementById("feeling-image");   
const feelings =
[
   {
  src: "anxiety.jpg",
  alt: "image of going through the shredder", //I'm storing these buttons so that JS can engage with them
  title: "anxiety", 
  message: "Breathe in through your nose, out throught your mouth. List 5 things you can see."
  },
  
  { 
  src: "angry.jpg",
  alt: "angry face",
  title: "angry guy",
  message: "Remember to breathe. You're going to make it!",
  },

  {
  src: "lemon.jpg",
  alt: "a crying lemon",
  title: "lemon",
  message: "Sometimes life hands out lemons. Remind yourself that this is not forever."
  },

  {
    src: "crying.jpg",
    alt: "an illistration of a crying eye",
    title: "eye",
    message: "Even if it feels dark, there is light at the end of this tunnel."
  },

  {
    src: "exhausted.jpg",
    alt: "exhausted woman laying on a pile of papers",
    title: "Take it easy",
    message: "You are goning to make it through this day! What are you grateful for?"
  }

];



const colors = ["#F7A619", "#FF3F24", "#543A7A", "#616961", "#438A91"];
//what if i want to make my colors cycle through when i hit the button, not just outline the bottom?
//i used DOM to target the colors index 


/*function changeFeeling(feelings) {
  const feeling = feelings[feelingName]
}    Going back to the feeling index*/

//functions allow me to fill in the blanks...building blocks of code, i also need to reset my cards to go with this version
//this function and the buttons allow the feelings to line up with the colors 
function showFeeling(index) {
  const feeling = feelings[index];

  // Reset all cards first
  buttons.forEach(btn => {
  //  btn.closest(".feeling-card").style.backgroundColor = "";

  });

  // Highlight the clicked card and show message
  //buttons[index].closest(".feeling-card").style.backgroundColor = colors[index];
  document.body.style.backgroundColor = colors[index];
  caption.textContent = feeling.message;
  caption.style.border = "solid";
  caption.style.backgroundColor = "#7DA8DB";

}
//here's the code that goes with this function feelings[index], k was able to fix syntax errors

buttons[0].addEventListener("click", function() { showFeeling(0); });
buttons[1].addEventListener("click", function() { showFeeling(1); });
buttons[2].addEventListener("click", function() { showFeeling(2)});
buttons[3].addEventListener("click", function() { showFeeling(3)});
buttons[4].addEventListener("click", function() { showFeeling(4)});
//I'm pairing the right object so the appropriate feeling displays when clicked
  //caption.textContent = feeling.message;
//}
  //this will allow the "message" in my array to display

  //feelingImage.src="img/" + feeling.src; //this allows the image to load, but not needed now with the flexbox
  //feelingImage.alt=feeling.alt;
  //feelingImage.style.display = "block"; //now i can see the image!


//Now, i'm going to add the eventListener, indexing feelings from 0-4 
//arranging them so that the right feeling is paired with each button
//and message

//these no longer exist because i've changed to "button[index" instead
//anxiousBtn.addEventListener("click", function() { showFeeling(0); });
//angryBtn.addEventListener("click", function() { showFeeling(1);});
//sadBtn.addEventListener("click", function() { showFeeling(2);});
//depressedBtn.addEventListener("click", function() {showFeeling(3);});
//irritableBtn.addEventListener("click", function() { showFeeling(4);});


//alert("Are you feeling anxious? Identify 5 things you can see.")
//alert("Do you feel like your thoughts are racing? Find 4 things you can touch.")
//alert("are you having insomnia? List 3 things you can hear.")
//alert("Are you irritable? List 2 things you can smell")
//alert("Are you feeling out of touch with yourself? Find one thing you can taste.")

//alert("Lets get started!")
//add a "what is your name?" box, and have them click the button. can i change color? make effects like that?

//const themes = {
  //  breathe: {
    //    title: "BREATHE",
      //  message: "Take a deep breath. Slow down. You've got this.",
        //image: mindful.jpg,
        //bgColor: "#cfe87f"
    //},
//}