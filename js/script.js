const choice = ["ROCK", "PAPER", "SCISSOR"];
function computerChoice(){
    guessNumber = Math.floor(Math.random()*3);
    console.log(choice[guessNumber]);
    return choice[guessNumber];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        //Computer and Player as the same choice
        return `Tie on ${playerSelection}`;
    }else if(computerSelection == choice[0] && playerSelection == choice[2]){
        //Computer chose ROCK
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if(computerSelection == choice[0] && playerSelection == choice[1]){
        //Computer chose PAPER
        return `You lose`
    }
}
console.log(playRound("ROCK",computerChoice));