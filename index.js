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

console.log(getComputerChoice())
console.log(getHumanChoice())