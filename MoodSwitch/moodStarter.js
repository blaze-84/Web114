// Blaze Swieton 4/21/26

// =========================
// 1. SELECT ELEMENTS
// =========================

const quote = document.querySelector("#quote");
const title = document.querySelector("#title");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");


// =========================
// 2. DATA (MOODS OBJECT)
// =========================

const moods = {
  happy: {
    name: "Happy",
    bg: "#91ff6d",
    text: "#1d031a",
    quote: "Warm smiles and the sun's kisses."
  },

  calm: {
    name: "Calm",
    bg: "#fff428",
    text: "#1d031a",
    quote: "Calm and cool."
  },

  angry: {
    name: "Angry",
    bg: "#e2110d",
    text: "#1d031a",
    quote: "Seeing red!"
  },

  sleepy: {
    name: "Sleepy",
    bg: "#030350",
    text: "#70707d",
    quote: "Sweet dreams."
  }
};


// =========================
// 3. HELPER FUNCTION
// =========================

function changeMood(moodName) {
  const mood = moods[moodName];

  // Change the page background color and text color
  document.body.style.backgroundColor = mood.bg;
  document.body.style.color = mood.text;

  // Change the message inside the quote
  quote.textContent = mood.quote;

  // Change the title content
  title.textContent = mood.name.toUpperCase();

  // Debugging / Testing
  console.log("Mood selected:", moodName);
  console.log("Mood settings:", mood);
}


// =========================
// 4. EVENT HANDLERS
// =========================

function handleHappyClick() {
  changeMood("happy");
}

function handleCalmClick() {
  changeMood("calm");
}

function handleAngryClick() {
  changeMood("angry");
}

function handleSleepyClick() {
  changeMood("sleepy");
}


// =========================
// 5. EVENT LISTENERS
// =========================

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);