function computerChoice(){
    const choice = ["ROCK", "PAPER", "SCISSOR"];
    guessNumber = Math.floor(Math.random()*3);
    console.log(choice[guessNumber]);
    return choice[guessNumber];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return `Tie on ${playerSelection}`;
    }else{
        return 'Not yet known';
    }
}
