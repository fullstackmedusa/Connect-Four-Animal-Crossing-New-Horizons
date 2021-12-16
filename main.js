// ---------- Constants -------- //


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
const currentPlayerEl = document.querySelector("#current-player"); // will display current player



//             -------- Event Listeners ------

// what this means is that upon clicking the 'replay' button. init function will run
document.querySelector("#replay").addEventListener("click", init);
document.querySelector(".gameBoard").addEventListener("click", handleClick)



//           ----- Functions -----

init();

function handleClick(e){
    console.log(e.target.className)
    if (!e.target.className.includes('cell')) return;
    if(winner !== null) return;
     
    let circle = e.target;
    console.log(circle.className);
    
    let colArg = circle.className[15];
    console.log(colArg);
    let rowArg = circle.className[9];
    console.log(rowArg);
    counter = counter + 1;  
    updateBoard(rowArg,colArg);
    switchPlayer();
    render();
};

function updateBoard(x,y){
    if (board[y][x] !== null){
        return;
    }
    if (counter % 2){
        
        console.log(counter);
        
        console.log(board[y]);
        for ( let i = board[y].length - 1; i >= 0 ; i-- ){
            console.log(board[y][i])
            if ( board[y][i] === null){
                board[y][i] = false;
                return;
            }
        }
    }else {
    
        for ( let i = board[y].length - 1; i >= 0 ; i-- ){
            if(board[y][i] === null){
                board[y][i] = true;
                return;
            }
    }

}
}
function switchPlayer() {
    if (currentPlayer === "1") {
        currentPlayer = "-1";
        currentPlayerEl.innerHTML = "It is Yellow's turn"
    } else {
        currentPlayer = "1";
        currentPlayerEl.innerHTML = "It is Red's turn. "
    }
};


function checkWinner(){
    for (let i = 0; i < winningCombos.length; i++){
        const circle1 = circleEl[winningCombos[i][0]]
        const circle2 = circleEl[winningCombos[i][1]]
        const circle3 = circleEl[winningCombos[i][2]]
        const circle4 = circleEl[winningCombos[i][3]]
        console.log(circle1)
        if (circle1.style.backgroundColor === "red" &&
            circle2.style.backgroundColor === "red" &&
            circle3.style.backgroundColor === "red" &&
            circle4.style.backgroundColor === "red")
            {
                currentPlayerEl.innerHTML = "Red Wins! Play again?"
                winner = true;
            }
            if (circle1.style.backgroundColor === "yellow" &&
                circle2.style.backgroundColor === "yellow" &&
                circle3.style.backgroundColor === "yellow" &&
                circle4.style.backgroundColor === "yellow")
                {
                    currentPlayerEl.innerHTML = "Yellow Wins! Play again?"
                    winner = false;
                }
                
    }
    
}

function checkTie(){
    let count = 0

    board.forEach(function (col, idx) {
        
        col.forEach(function (cell,index){
            if(board[idx][index] !== null){
                count++
            }
        })
    })
    if(count === 42){
        currentPlayerEl.innerHTML = "TIE NO WINNER"
    }
};


function render() {
    board.forEach(function (col, idx) {
        
        col.forEach(function (cell,index){
            let activeCircle = document.getElementById(`row-${index} col-${idx}`);
            if(board[idx][index] === null) {
                activeCircle.style.backgroundColor = 'white'
            } else if (board[idx][index] === true ){
                activeCircle.style.backgroundColor = 'red'
                console.log(activeCircle, board[idx][index])
            } else {
                activeCircle.style.backgroundColor = 'yellow'
                console.log(activeCircle, board[idx][index])
            }
            }
            
    )});
    checkWinner();
    checkTie();
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
    counter = 0;
    currentPlayer = "-1";
    currentPlayerEl.innerHTML = "Begin the game. It is Yellow's turn"
    winner = null;
    render();
}