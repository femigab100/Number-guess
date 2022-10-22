let username = prompt("What's your username?");
let display = document.getElementById("heading");

function display_heading() {
    display.innerHTML = "Welcome " + username ;
}
display_heading()

let guess = prompt("Enter your guess number");
let guessReal = parseInt(guess);
let randomNumber = Math.floor(Math.random() * 2) + 1;

const guesses = document.querySelector('.lastResult');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let guessCount = 1;
let restButton;

function displayResult(x, y) {
    if (guessReal === randomNumber) {
        guesses.innerHTML = " CONGRATULATIONS! you have 5 points";
    }
    else {
        guesses.innerHTML = " Oops! Your guess is wrong. Try again!";
    }
    guesses.style.color = "white";
    guesses.style.backgroundColor = "gray";
    guesses.style.fontSize = "25px";
    guesses.style.width = "30%";
    guesses.style.marginTop = "5%";
    guesses.style.marginLeft = "30%";
}
displayResult(1, 2);