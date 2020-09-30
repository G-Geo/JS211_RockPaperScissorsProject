// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const user1Victory = "User 1 Wins!"

const user2Victory = "User 2 Wins!"

const drawGame = "It's a draw!"

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  hand1 = hand1.trim()
  hand2=hand2.trim()
  
  if ((hand1 === "rock")&&(hand2 ==="paper")){ 
    console.log(user2Victory)
  } else if ((hand1 === "rock")&&(hand2 === "scissors")) {
    console.log(user1Victory)
  } else if ((hand1 === "paper")&&(hand2 === "scissors")){
    console.log(user2Victory)
  } else if ((hand1 === "paper")&&(hand2 === "rock")) {
    console.log(user1Victory)
  } else if ((hand1 === "scissors")&&(hand2 === "paper")) {
    console.log(user1Victory)
  } else if ((hand1 === "scissors")&&(hand2 === "rock")) {
    console.log(user2Victory)
  } else if ((hand1 === "rock")&&(hand2 === "rock")){
    console.log(drawGame)
  } else if ((hand1 === "paper")&&(hand2 === "paper")){
    console.log(drawGame)
  } else if ((hand1 === "scissors")&&(hand2 === "scissors")){
    console.log(drawGame)
} else {
  console.log("Input invalid. Try 'rock' 'paper' or 'scissors'")
}

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt= () => {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

  // always returns ask the user for another input
  getPrompt()

