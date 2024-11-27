console.log("Hello World");
let computerScore = 0;
let humanScore = 0;
function getComputerChoice(){
    let rn = Math.floor(Math.random()*3) + 1;
    if(rn==1){
        return "Rock";
    }
    else if(rn==2){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function getHumanChoice(){
    let value = prompt("Enter rock,paper or scissor");
    let choice = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    while(choice != "Rock" && choice != "Paper" && choice != "Scissor"){
        value = prompt("Please enter rock,paper or scissor");
        choice = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return choice;
}

function gamePlay(){
    let comc = getComputerChoice();
    let humc = getHumanChoice();
    console.log(comc + "  " + humc);
    if(comc == humc){
        console.log("It's a tie");
    }
    else if(comc == "Rock"){
        if(humc == "Paper"){
            humanScore++;
            console.log("You Win! Paper beats Rock");
        }
        else{
            console.log("You Lose! Rock beats Scissor");
            computerScore++;
        }
    }
    else if(comc == "Paper"){
        if(humc == "Scissor"){
            humanScore++;
            console.log("You Win! Scissor beats Paper");
        }
        else{
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }    }
    else{
        if(humc == "Rock"){
            humanScore++;
            console.log("You Win! Rock beats Scissor");
        }
        else{
            console.log("You Lose! Scissor beats Paper");
            computerScore++;
        }    }
}
for(let i=0;i<5;i++){
    gamePlay();
    console.log("Computer score: " + computerScore);
    console.log("Your score:" + humanScore);
}

if(humanScore > computerScore){
    console.log("You won the game");
}
else{
    console.log("You lose the game try next time");
}