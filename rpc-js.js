alert("Hello World! Let's play RPC :)");

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

        function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase().trim();

            if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
                roundResult.textContent = "Wrong input. I will count it as a tie. Choose from: rock, paper or scissors (case insensitive).";
            } else if (humanChoice === computerChoice) {
                roundResult.textContent = "It's a tie!";
            } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
                computerScore += 1;
                roundResult.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
            } else {
                humanScore += 1;
                roundResult.textContent = `You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
            }
        }

        function isGameOver() {
            if (humanScore >=5 || computerScore >=5) {
                if (humanScore > computerScore) {
                    alert(`Game over!\nCongrats! You won!\n${humanScore} : ${computerScore}`);
                } else {
                    alert(`Game over!\nOh no! You lost!\n${humanScore} : ${computerScore}`);
                }
                humanScore = 0;
                computerScore = 0;
                // Use HTML "&nbsp" as a placeholder for <p>
                roundResult.textContent = "\u00A0";
                humanScoreOut.textContent = `Your current score: ${humanScore}`;
                computerScoreOut.textContent = `Computer current score: ${computerScore}`;
            }
        }

        function displayScore() {
            humanScoreOut.textContent = `Your current score: ${humanScore}`;
            computerScoreOut.textContent = `Computer current score: ${computerScore}`;
        }

        let humanScore = 0;
        let computerScore = 0;
        
        const humanScoreOut = document.querySelector("#human");
        humanScoreOut.textContent = `Your current score: ${humanScore}`;

        const computerScoreOut = document.querySelector("#computer");
        computerScoreOut.textContent = `Computer current score: ${computerScore}`;

        const roundResult = document.querySelector("#round");

        const rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
            playRound("rock", getComputerChoice());
            displayScore();
            isGameOver();
        });
        
        const paper = document.querySelector("#paper");
        paper.addEventListener("click", () => {
            playRound("paper", getComputerChoice());
            displayScore();
            isGameOver();
        });

        const scissors = document.querySelector("#scissors");
        scissors.addEventListener("click", () => {
            playRound("scissors", getComputerChoice());
            displayScore();
            isGameOver();
        });