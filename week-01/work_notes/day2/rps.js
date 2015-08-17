var arguments = process.argv.splice(2);

var playerMove = arguments[0];

if (playerMove === "rock") {
  console.log("Computer chose paper, you lose.");
}
  else if (playerMove === "paper") {
  console.log("Computer chose scissors, you win!");
}
  else if (playerMove === "scissors") {
  console.log("Computer chose rock, you lose");
}

else  {
  console.log("pick a move");
}


