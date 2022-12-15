const choice = ["ROCK", "PAPER", "SCISSOR"];

function computerChoice(){
    guessNumber = Math.floor(Math.random()*3);
    console.log(`Computer choice `+choice[guessNumber]);
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
        //The PAPER choice
    }else if(computerSelection == choice[1] || playerSelection == choice[1]){
        if(computerSelection == "PAPER"){
            switch(playerSelection){
                case choice[0]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
                case choice[2]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
            }
        }else{
            switch(computerSelection){
                case choice[0]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
                case choice[2]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
            }
        }
        //The SCISSOR choice
    }else {
        if(computerSelection == "SCISSOR"){
            switch(playerSelection){
                case choice[0]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
                case choice[1]:
                    return `You lose! ${computerSelection} beat ${playerSelection}.`;
            }
        }else{
            switch(computerSelection){
                case choice[0]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
                case choice[1]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
            }
        }
    }
}
console.log(playRound("ROCK",computerChoice()));