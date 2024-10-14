console.log("Hello World! Let's play RPC :)")

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }

        function getComputerChoice (max = 3) {
            choice = Math.floor(Math.random() * max);
            if (choice === 0) {
                return "rock";
            } else if (choice === 1) {
                return "paper";
            } else {
                return "scissors";
            }
        }

        // function getHumanChoice () {
        //     choice = prompt("Please pick your choice: rock, paper or scissors");
        //     return choice;
        // }

        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase().trim();

            if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
                console.log("Wrong input. I will count it as a tie. Choose from: rock, paper or scissors (case insensitive).");
                // return
            } else if (humanChoice === computerChoice) {
                console.log("It's a tie!");
                // return "It's a tie!"
            } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
                computerScore += 1;
                console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
                // return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
            } else {
                humanScore += 1;
                console.log(`You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
                // return `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
            }
        }

        // function playGame() {
        //     for (let i=0; i<5; i++) {

        //         let hSelection = getHumanChoice();
        //         let cSelection = getComputerChoice();

        //         console.log(`Round number ${i+1} \n` + playRound(hSelection, cSelection) + `.\nThe score is: Human - ${humanScore} VS Computer - ${computerScore}.`)
        //     }
        //     const result = undefined;
        //     if (humanScore === computerScore) {
        //         return `It's a tie! Total score: Human - ${humanScore} VS Computer - ${computerScore}.`
        //     } else if (humanScore < computerScore) {
        //         return `You lost! Total score: Human - ${humanScore} VS Computer - ${computerScore}.`
        //     } else {
        //         return `You won! Total score: Human - ${humanScore} VS Computer - ${computerScore}.`
        //     }
        // }
        let humanScore = 0;
        let computerScore = 0;
        
        const humanScoreOut = document.querySelector("#human");
        humanScoreOut.textContent = `Your current score: ${humanScore}`;

        const computerScoreOut = document.querySelector("#computer");
        computerScoreOut.textContent = `Computer current score: ${computerScore}`;

        const rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
            playRound("rock", getComputerChoice());
            humanScoreOut.textContent = `Your current score: ${humanScore}`;
            computerScoreOut.textContent = `Computer current score: ${computerScore}`;
        });
        
        const paper = document.querySelector("#paper");
        paper.addEventListener("click", () => {
            playRound("paper", getComputerChoice());
            humanScoreOut.textContent = `Your current score: ${humanScore}`;
            computerScoreOut.textContent = `Computer current score: ${computerScore}`;
        });

        const scissors = document.querySelector("#scissors");
        scissors.addEventListener("click", () => {
            playRound("scissors", getComputerChoice());
            humanScoreOut.textContent = `Your current score: ${humanScore}`;
            computerScoreOut.textContent = `Computer current score: ${computerScore}`;
        });

        // console.log(playGame());