const gameInfo=document.querySelector(".game-info");
const boxs=document.querySelectorAll(".box");
const newGamebtn=document.querySelector(".btn");
const randomPlayer='XO'
let currentPlayer;
let gameGrid;

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomPlayer(){
    const random=getRndInteger(0,randomPlayer.length)
    return randomPlayer.charAt(random)
}

function initGame(){
    let num=generateRandomPlayer()
    currentPlayer=`${num}`;
    gameGrid=["","","","","","","","",""];
    // UI empty
    boxs.forEach((box,index)=>{
        box.innerText="";
        boxs[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`

    });
    newGamebtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

}
initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    // UI upadate 
    gameInfo.innerText=`Current Player - ${currentPlayer}`; 
}

function checkGameOver() {
    let answer = "";

    winningPosition.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                //check if winner is X
                if(gameGrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    

                //disable pointer events
                boxs.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxs[position[0]].classList.add("win");
                boxs[position[1]].classList.add("win");
                boxs[position[2]].classList.add("win");
            }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGamebtn.classList.add("active");
        return;
    }

    //when there is no winner
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box!=="")
            fillCount++;
    });

    if(fillCount===9){
        gameInfo.innerText="Game Tie !"
        newGamebtn.classList.add('active')
    }
}
function handleClick(index){
    if(gameGrid[index]===""){
        boxs[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxs[index].style.pointerEvents="none";
        // swap turn 
        swapTurn();
        checkGameOver();
    }
}

boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGamebtn.addEventListener('click',initGame);  