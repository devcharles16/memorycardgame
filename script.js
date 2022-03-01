 
function startGame(){

document.getElementById("start").style.visibility="hidden";   
document.getElementById("restart").style.display="initial";  



const gameContainer = document.getElementById("game");
let hasFlippedCard = false;
let firstCard, secondCard;
let noClicks = false;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
let numOfCards = COLORS.length
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
  
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (noClicks) return;
  // flip the card, do nothing
  if (event.target.classList.contains("flip")) return;

   //change background color
   let selectedColor = event.target.className;
   event.target.style.backgroundColor = selectedColor;

   // add flip to 1st and 2nd clicked card class
   event.target.classList.add('flip');

   //variable to hold flipped cards
   let flipCount = document.querySelectorAll('div .flip').length;

   //add variables for cards
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
  }
 
   if (flipCount <2) return;
   if (flipCount == 2 && firstCard.className == secondCard.className) {
     function matchedCards(){
       firstCard.classList.remove('flip');
       secondCard.classList.remove('flip');
       
      }
      matchedCards();
    }
    else {
      noClicks = true;
     function resetCards(){
       firstCard.classList.remove('flip');
       secondCard.classList.remove('flip');
       firstCard.style.backgroundColor = "";
       secondCard.style.backgroundColor = "";
      noClicks = false;
     }
     setTimeout(resetCards, 1000)
     if (flipCount===10) 
     alert("game over!");
     console.log ("game over");
    }
    }
     
  
    /*function restartGame(){
      location.reload()
    }
    restartGame()
*/


// when the DOM loads
createDivsForColors(shuffledColors);

}


