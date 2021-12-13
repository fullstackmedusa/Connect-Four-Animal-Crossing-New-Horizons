// game constants. Below is the object for player. It will be either player (1)
// or player 2's (-1) turn. We have null as an option for when we start the game.
// it is our empty spaces

const players = {
    "1": "red",
    "-1": "black",
    null: "white",
};

// these are out state variables. they will keep track of whose turn it is, if anyone has won
// and what board spots have already been taken and by what player
let playerTurn;
let winner;
let board;