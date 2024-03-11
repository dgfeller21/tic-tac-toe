let choices = ["topLeftCell", "topCenterCell", "topRightCell", "middleLeftCell", "middleCenterCell", "middleRightCell", "bottomLeftCell", "bottomCenterCell", "bottomRightCell"]
let topLeft = topCenter = topRight = middleLeft = middleCenter = middleRight = bottomLeft = bottomCenter = bottomRight = ""
const p1 = {
    score: 0,
    scoreDisplay: document.querySelector("#player1 .score")
}
const p2 = {
    score: 0,
    scoreDisplay: document.querySelector("#player2 .score")
}
const tie = {
    score: 0,
    scoreDisplay: document.querySelector("#tie .score")
}
const cells = document.querySelectorAll(".cell")
const gameBoard = document.querySelector(".gameBoard")
function reset() {
    topLeft = topCenter = topRight = middleLeft = middleCenter = middleRight = bottomLeft = bottomCenter = bottomRight = ""
    choices = ["topLeftCell", "topCenterCell", "topRightCell", "middleLeftCell", "middleCenterCell", "middleRightCell", "bottomLeftCell", "bottomCenterCell", "bottomRightCell"]
    for(let cell of cells) {
        cell.textContent = ""
    }
}
for(let cell of cells) {
    cell.addEventListener('click', e => {
    //console.log("Clicked")
    if(cell.textContent == "") {
        cell.textContent = "X"
        choices.splice(choices.indexOf(cell.id), 1)
        let computerChoice = randomChoice()
        for(let cell2 of cells) {
            if(computerChoice == cell2.id) {
                cell2.textContent = "O"
                choices.splice(choices.indexOf(computerChoice), 1)
            }
        }
    }
    topLeftCell = document.querySelector("#topLeftCell").textContent;
    topCenterCell = document.querySelector("#topCenterCell").textContent;
    topRightCell = document.querySelector("#topRightCell").textContent;
    middleLeftCell = document.querySelector("#middleLeftCell").textContent;
    middleCenterCell = document.querySelector("#middleCenterCell").textContent;
    middleRightCell = document.querySelector("#middleRightCell").textContent;
    bottomLeftCell = document.querySelector("#bottomLeftCell").textContent;
    bottomCenterCell = document.querySelector("#bottomCenterCell").textContent;
    bottomRightCell = document.querySelector("#bottomRightCell").textContent;
    let winner = checkGameOver()
    if(winner.length > 0) {
        console.log("winner: " + winner)
        determineWinner(winner)
        reset()
    }
    })
}
function addScore(player) {
    player.score++
    player.scoreDisplay.textContent = player.score
}
function determineWinner(winner) {
    if(winner == "X") {
        addScore(p1)
    } else if (winner == "O") {
        addScore(p2) 
    } else {
        addScore(tie)
    }
}
gameBoard.addEventListener('click', e => {
    //console.log(e.target)
})
function checkGameOver() {
    if(topLeftCell == topCenterCell && topCenterCell == topRightCell && topCenterCell != "") {
        return topLeftCell
    } else if(middleLeftCell == middleCenterCell && middleCenterCell == middleRightCell && middleCenterCell != "") {
        return middleLeftCell
    } else if(bottomLeftCell == bottomCenterCell && bottomCenterCell == bottomRightCell && bottomCenterCell != ""){
        return bottomLeftCell
    } else if(topLeftCell == middleCenterCell && middleCenterCell == bottomRightCell && middleCenterCell != ""){
        return topLeftCell
    } else if(topRightCell == middleCenterCell && middleCenterCell == bottomLeftCell && middleCenterCell != ""){
        return topRightCell
    } else if(topLeftCell == middleLeftCell && middleLeftCell == bottomLeftCell && middleLeftCell != ""){
        return topLeftCell
    } else if(topCenterCell == middleCenterCell && middleCenterCell == bottomCenterCell && middleCenterCell != ""){
        return topCenterCell
    } else if(topRightCell == middleRightCell && middleRightCell == bottomRightCell && middleRightCell != ""){
        return bottomLeftCell
    } else if(choices.length == 0){
        return "tie"
    }
    return ""
}
let gameIsRunning = false

function randomChoice() {
    let size = choices.length;
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    return choice;
}