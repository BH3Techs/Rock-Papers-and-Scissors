const choice = ["ROCK", "PAPER", "SCISSOR"];
let player;
let comp;
function computerChoice(){
    guessNumber = Math.floor(Math.random()*3);
    console.log(choice[guessNumber]);
    return choice[guessNumber];
}
function playRound(playerSelection, computerSelection){
    //Computer choice
    if(playerSelection==computerSelection){
        //Computer and Player as the same choice
        return `Tie on ${playerSelection}`;
        //Rock choice
    }else if(computerSelection == choice[0] || playerSelection == choice[0]){
        if(computerSelection == "ROCK"){
            switch(playerSelection){
                case choice[1]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
                case choice[2]:
                    return `You lose! ${computerSelection} beat ${playerSelection}.`;
            }
        }else{
            switch(computerSelection){
                case choice[1]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
                case choice[2]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
            }
        }
        
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
console.log(playRound("ROCK",computerChoice));