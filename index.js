function getComputerChoice() {
    random = Math.floor(Math.random() * 3) + 1
    choice = ""

    if (random === 1) {
        choice = "rock"
    } else if (random === 2) {
        choice = "paper"
    } else if (random === 3) {
        choice = "scissors"
    }

    return choice
}

function getHumanChoice() {
    choice = prompt("Please select your choice (rock, paper, scissors): ")
    return choice
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoiceCaseInsensitive = humanChoice.toLowerCase()
    
        switch (true) {
            case humanChoiceCaseInsensitive === "rock" && computerChoice === "rock":
                console.log(`It's a draw! both chose ${humanChoiceCaseInsensitive}`)
                break;
            case humanChoiceCaseInsensitive === "rock" && computerChoice === "paper":
                console.log(`You lose! ${computerChoice} beats ${humanChoiceCaseInsensitive}`)
                computerScore++
                break;
            case humanChoiceCaseInsensitive === "rock" && computerChoice === "scissors":
                console.log(`You win! ${humanChoiceCaseInsensitive} beats ${computerChoice}`)
                humanScore++
                break;
    
            case humanChoiceCaseInsensitive === "paper" && computerChoice === "paper":
                console.log(`It's a draw! both chose ${humanChoiceCaseInsensitive}`)
                break;
            case humanChoiceCaseInsensitive === "paper" && computerChoice === "scissors":
                console.log(`You lose! ${computerChoice} beats ${humanChoiceCaseInsensitive}`)
                computerScore++
                break;
            case humanChoiceCaseInsensitive === "paper" && computerChoice === "rock":
                console.log(`You win! ${humanChoiceCaseInsensitive} beats ${computerChoice}`)
                humanScore++
                break;
    
            case humanChoiceCaseInsensitive === "scissors" && computerChoice === "scissors":
                console.log(`It's a draw! both chose ${humanChoiceCaseInsensitive}`)
                break;
            case humanChoiceCaseInsensitive === "scissors" && computerChoice === "rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoiceCaseInsensitive}`)
                computerScore++
                break;
            case humanChoiceCaseInsensitive === "scissors" && computerChoice === "paper":
                console.log(`You win! ${humanChoiceCaseInsensitive} beats ${computerChoice}`)
                humanScore++
                break;
            default:
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();       

        playRound(humanSelection, computerSelection)
    }

    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

playGame()