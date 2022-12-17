const choice = ["ROCK", "PAPER", "SCISSOR"];
let player = 0;
let computer = 0;

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
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
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
                    return `You Win! ${playerSelection} beat ${computerSelection}.`;
                case choice[2]:
                    return `You Win! ${playerSelection} beat ${computerSelection}.`;
            }
        }else{
            switch(computerSelection){
                case choice[0]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
                case choice[2]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
            }
        }
        //The SCISSOR choice
    }else {
        if(computerSelection == "SCISSOR"){
            switch(playerSelection){
                case choice[0]:
                    return `You Won! ${playerSelection} beat ${computerSelection}.`;
                case choice[1]:
                    return `You Lose! ${computerSelection} beat ${playerSelection}.`;
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

// function game(){
//     let player = 0;
//     let computer = 0;
    
//     for(let i = 0; i<5; i++){
//         const round = playRound(prompt("Enter you choice").toUpperCase, computerChoice());
//         if(round.includes("Won")){
//             player+=1;
//             alert(round);
//         }else if(round.includes("Lose")){
//             computer+=1;
//             alert(round);
//         }else{
//             alert(round);
//         }
//     }
//     if(player >computer){
//         return `Waaal you Won by ${player} and the Opponent has ${computer}`;
//     }else{
//         return `Ooooh sorry you lost Opponent got ${computer} and you got ${player}`;
//     }
// }
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const playerLabel = document.createElement('label');
const computerLabel = document.createElement('label');
const playerResult = document.createElement('label');
const computerResult = document.createElement('label');
const finalResult = document.createElement('label');

playerLabel.classList.add('playerLabel');
playerLabel.textContent = "YOU";

computerLabel.classList.add('computerLabel');
computerLabel.textContent ="COMPUTER";



buttons.forEach((button) =>{
    button.addEventListener('click',() =>{
        const result = playRound(button.innerText, computerChoice());
        
        body.appendChild(playerLabel);
        body.appendChild(computerLabel)

        results.textContent = result;
 
        if(result.includes('Won')){
            player+=1;
            finalResult.textContent='';
        }else if(result.includes('Lose')){
            computer+=1;
            finalResult.textContent='';
        }

        if(player === 5|| computer === 5){
            if(player >computer){
                finalResult.textContent= `Waaal you Won by ${player} and the Opponent has ${computer}`;
                body.appendChild(finalResult);
                player =0;
                computer =0;
            }else{
                finalResult.textContent= `Ooooh sorry you lost Opponent got ${computer} and you got ${player}`;
                body.appendChild(finalResult);
                player =0;
                computer = 0;
            }
        }
        playerResult.textContent = player;
        computerResult.textContent = computer;

        body.appendChild(playerResult);
        body.appendChild(computerResult); 
    });
});
