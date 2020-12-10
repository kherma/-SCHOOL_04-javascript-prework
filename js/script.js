{
    /* // Generate random number
    let computerInput = Math.floor(Math.random() * 3 + 1);
    console.log('Komputer: ' + computerInput);

    //Transfer Random number into string
    let computerMove = getMovieName (computerInput);

    if (calculations == 1) {
        computerMove = 'kamień';
    } else if (calculations == 2) {
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }

    // Ask player for input
    let playerInput = prompt ('Wybierz swój ruch! 1 - kamień, 2 - papier, 3 - nożyce');
    console.log ('Gracz: ' + playerInput);

    // Transfer player input into string
    let playerMove = getMovieName(playerInput);

    if (playerInput == 1) {
        playerMove = 'kamień';
    } else if (playerInput == 2) {
        playerMove = 'papier';
    } else if (playerInput == 3) {
        playerMove = 'nożyce';
    } else {
        playerMove = 'nieznany ruch';
    }

    // Print resoult
    displayResult(computerMove, playerMove);
    printMessage('Zagrałem ' + computerMove + '! Twój ruch to ' + playerMove + '.');

    if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
    } else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
    } else if (computerMove == 'nożyce' && playerMove == "papier") {
        printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
    } else if (computerMove == playerMove) {
        printMessage('Wstyd mi że ktoś taki jak ty pomyślał to samo co ktoś taki jak JA!');
    } else if (playerMove == 'nieznany ruch'){
        printMessage('Nie sądziłem że ktoś może być w stanie nie zrozumieć zasad tej gry... Czasem żałuję że Terminator to tylko film.');
    } else {
        printMessage('Gratuluję... może nagrasz relację z tego "zwycięstwa"?');
    } */

    function playGame (playerInput) {
        clearMessages();
        clearScore();

        function getMovieName(argMoveId) {
            if (argMoveId == 1) {
                return 'rock';
            } else if (argMoveId == 2) {
                return 'paper';
            } else if (argMoveId == 3) {
                return 'scissors';
            } else {
                printMessage('Nie znam ruchu o ID ' + argMoveId);
                return 'nieznany ruch';
            }
        }
        
        function displayResult(argComputerMove, argPlayerMove) {
            printMessage('My move is: ' + computerMove +'! Your move is: ' + argPlayerMove + '.');
            if (argComputerMove == 'rock' && argPlayerMove == 'scissors') {
                printMessage('- HaHaHA! I am so awesome!');
                gameScore('computer');
            } else if (argComputerMove == 'paper' && argPlayerMove == 'rock') {
                printMessage('- It is boring to win all the time...');
                gameScore('computer');
            } else if (argComputerMove == 'scissors' && argPlayerMove == "paper") {
                printMessage('- Oh, I believe you can do better next time :D');
                gameScore('computer');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('- How can someone like you think the same what I thought?');
                gameScore('none');
            } else if (argPlayerMove == 'nieznany ruch'){
                printMessage('- I can not believe that someone can not understood the rules of the game like this... ');
                gameScore('none');
            } else {
                printMessage('- Sometimes I dream about "TERMINATOR IN REAL LIFE" HAHAHA...HAHA...HA...');
                gameScore('player');
            }
        }

        function gameScore (argGame) {

            if (argGame == 'computer') {
                computerScore = computerScore + 1;
                printScore('Player: ' + playerScore + " AI: " + computerScore);
            } else if (argGame == 'player') {
                playerScore = playerScore + 1;
                printScore('Player: ' + playerScore + " AI: " + computerScore);
            }
            else {
                playerScore = playerScore;
                computerScore = computerScore;
                printScore('Player: ' + playerScore + " AI: " + computerScore);
            }
        }

        // Generate random number
        const computerInput = Math.floor(Math.random() * 3 + 1);
        // console.log('Computer: ' + computerInput);
        
        //Transfer Random number into string
        const computerMove = getMovieName(computerInput);
        
        // Ask player for input
        // let playerInput = prompt ('Wybierz swój ruch! 1 - kamień, 2 - papier, 3 - nożyce');
        // console.log ('Gracz: ' + playerInput);
        
        // Transfer player input into string
        const playerMove = getMovieName(playerInput);
        
        // Print resoult
        displayResult(computerMove, playerMove);
    }


    let playerScore = 0,
        computerScore = 0;
    
    printScore('Player: ' + playerScore + " AI: " + computerScore);
    
    const rockButton = document.getElementById('rock');
    rockButton.addEventListener('click', function () {playGame(1)});

    const paperButton = document.getElementById('paper');
    paperButton.addEventListener('click', function() {playGame(2)});

    const scissorsButton = document.getElementById('scissors');
    scissorsButton.addEventListener('click', function() {playGame(3)});
}
