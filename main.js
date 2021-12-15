// ---------- Constants -------- //

// game constants. Below is the object for player. It will be either player (1)
// or player 2's (-1) turn. We have null as an option for when we start the game.
// it is our empty spaces

const players = {
    "1": "red",
    "-1": "yellow",
    null: "white",
};


const winningCombos = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 7, 25, 33],
    [8, 16, 24, 32],
    [11, 7, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [9, 17, 25, 33],
  ];

 


//                      ----- State Variables ----- 

// these are our state variables. they will keep track of whose turn it is, if anyone has won
// and what board spots have already been taken and by what player
let currentPlayer;
let winner;
let board;
let counter = 0;

//                   ------ Cached Element References ------

// cache the elements from the HTML that we will be referring back to often
// for example the message that announces the winner, the message that 
// tells us whose turn it is
// and the circles on the board
const circleEl = document.querySelectorAll(".cell");
const turnmsgEl = document.querySelector("#winner-msg"); // <-- possibly chnge to span
const currentPlayerEl = document.querySelector("#current-player"); // will display current player



//             -------- Event Listeners ------

// what this means is that upon clicking the 'replay' button. init function will run
document.querySelector("#replay").addEventListener("click", init);
document.querySelector(".gameBoard").addEventListener("click", handleClick)



//           ----- Functions -----

// write a function that updates boards
// it needs to take two parameters
// that are going to represent x & y for our column & row
// & have a counter to keep track of score (make it global)
// function -> if the counter is even, update boards at x & y to be true (bracket notation)
//  else, update boards at x & y to be false;
//  then test it out w/o click function

init();

function handleClick(e){
    console.log(e.target.className)
    if (!e.target.className.includes('cell')) return;
     
    let circle = e.target;
    console.log(circle);
    counter++;
    if (currentPlayer === "1"){
            circle.style.backgroundColor = "red";
        } else {
            circle.style.backgroundColor = "yellow";
        }
        
    
    switchPlayer();
    render();
    console.log(currentPlayer)
};

function updateBoard(x,y){
    if (counter % 2){
        // console.log(board[x][y]);
        // console.log(counter);
        // console.log("false");
        board[x][y]= false
    }else {
        // console.log(board[x][y]);
        // console.log(counter);
        // console.log("true");
        board[x][y]= true;
    }

}

function switchPlayer() {
    if (currentPlayer === "1") {
        currentPlayer = "-1";
    } else {
        currentPlayer = "1";
    }
};



// updateBoard(0,0);
// counter++;
// updateBoard(5,5);
// counter++;
// updateBoard(3,4);
// counter++;
// console.log(counter);
// console.log(board);







function checkWinner(){

}

function render() {
    board.forEach(function (col, idx) {
        
        col.forEach(function (cell,index){
            
            // console.log(col, idx, "<-- column",cell, index, "<-- row");
            // console.log(circleEl[idx][index]);
            // console.log(board[idx][index]);
            if(circleEl[index].className === `cell row-${index} col-${idx}` && cell === null){
             console.log("grabbing the string");
             circleEl[index].style.backgroundColor = "white";
            } 
            if (cell === true) {
                circleEl[index].style.backgroundColor = "red";
              } else if (cell === false) {
                circleEl[index].style.backgroundColor = "yellow";
              }
        });
      
    });
  }

  

  


function init() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    currentPlayer = "1"; 
    winner = null;
    render();
}



 // columns
 const column1 = [circleEl[35], circleEl[28], circleEl[21], circleEl[14], circleEl[7], circleEl[0]];
 const column2 = [circleEl[36], circleEl[29], circleEl[22], circleEl[15], circleEl[8], circleEl[1]];
 const column3 = [circleEl[37], circleEl[30], circleEl[23], circleEl[16], circleEl[9], circleEl[2]];
 const column4 = [circleEl[38], circleEl[31], circleEl[24], circleEl[17], circleEl[10], circleEl[3]];
 const column5 = [circleEl[39], circleEl[32], circleEl[25], circleEl[18], circleEl[11], circleEl[4]];
 const column6 = [circleEl[40], circleEl[33], circleEl[26], circleEl[19], circleEl[12], circleEl[5]];
 const column7 = [circleEl[41], circleEl[34], circleEl[27], circleEl[20], circleEl[13], circleEl[6]];
 const columns = [column1, column2, column3, column4, column5, column5, column7];