const choices = [1,2,3,4,5,6,7,8,9]
let a = b = c = d = e = f = g = h = i = "-"
const cells = document.querySelectorAll(".cell")
for(let cell of cells) {
    cell.addEventListener('click', e => {
        console.log("Clicked")
        console.log("this: " + this)
        console.log("e: " + e)
        cell.textContent = "X"
    })
}
const displayGame = function () {
    let row1 = `${a} | ${b} | ${c}`
    let row2 = `${d} | ${e} | ${f}`
    let row3 = `${g} | ${h} | ${i}`
    console.log(row1)
    console.log(row2)
    console.log(row3)
}

let gameIsRunning = false
function checkGameOver() {
    if(a == b && b == c && b != "-"
        || d == e && e == f && e != "-"
        || g == h && h == i && h != "-"
        || a == e && e == i && e != "-"
        || c == e && e == g && e != "-") {
        gameIsRunning = false;
        console.log("someone won")
    } else if(choices.length == 0) {
        gameIsRunning = false
        console.log("tie")
    }
}
let putMark = function (input, mark) {
    console.log("in putX")
    switch(input) {
        case 1: 
            a = mark;
            break;
        case 2:
            b = mark;
            break;
        case 3: 
            c = mark;
            break;
        case 4:
            d = mark;
            break;
        case 5: 
            e = mark;
            break;
        case 6:
            f = mark;
            break;
        case 7: 
            g = mark;
            break;
        case 8:
            h = mark;
            break;
        case 9:
            i = mark;
            break;
    }
}
while(gameIsRunning) {
    const userInput = prompt("Select box with numbers")
    input = parseInt(userInput)
    if(userInput == "exit") {
        console.log("exit")
        gameIsRunning = false
        break
    }
    if(isNaN(input)) {
        console.log("it is not a number")
        continue
    } else if(!choices.includes(input)) {
        console.log("invalid choice")
        continue
    } else {
        console.log("input: " + input)
        choices.splice(choices.indexOf(input), 1)
        console.log("choices: " + choices)
        putMark(input, "X")
        displayGame()
        checkGameOver()
    }
    let computerChoice = randomChoice()
    choices.splice(choices.indexOf(computerChoice), 1)
    putMark(computerChoice, "O")
    displayGame()
    checkGameOver()

}

function randomChoice() {
    let size = choices.length;
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    return choice;
}


/*
const oneUser = (function (){
    const name = "Dan"
    const discordName = "@" + name
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  })();
*/
/*
function checkGameOver() {
    if(topLeftCell == topCenterCell && topCenterCell == topRightCell && topCenterCell != ""
        || middleLeftCell == middleCenterCell && middleCenterCell == middleRightCell && middleCenterCell != ""
        || bottomLeftCell == bottomCenterCell && bottomCenterCell == bottomRightCell && bottomCenterCell != ""
        || topLeftCell == middleCenterCell && middleCenterCell == bottomRightCell && middleCenterCell != ""
        || topRightCell == middleCenterCell && middleCenterCell == bottomLeftCell && middleCenterCell != ""
        || topLeftCell == middleLeftCell && middleLeftCell == bottomLeftCell && middleLeftCell != ""
        || topCenterCell == middleCenterCell && middleCenterCell == bottomCenterCell && middleCenterCell != ""
        || topRightCell == middleRightCell && middleRightCell == bottomRightCell && middleRightCell != "") {
        gameIsRunning = false;
        console.log("someone won")
    } else if(choices.length == 0) {
        gameIsRunning = false
        console.log("tie")
    }
}
*/