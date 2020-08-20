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
    function getMovieName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o ID ' + argMoveId);
            return 'nieznany ruch';
        }
    }
    
    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + computerMove + '! Twój ruch to ' + argPlayerMove + '.');
        if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == "papier") {
            printMessage('HaHaHA! Wygrałem, jakie to wspaniałe!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Wstyd mi że ktoś taki jak ty pomyślał to samo co ktoś taki jak JA!');
        } else if (argPlayerMove == 'nieznany ruch'){
            printMessage('Nie sądziłem że ktoś może być w stanie nie zrozumieć zasad tej gry... Czasem żałuję że Terminator to tylko film.');
        } else {
            printMessage('Gratuluję... może nagrasz relację z tego "zwycięstwa"?');
        }
    }
    
    // Generate random number
    let computerInput = Math.floor(Math.random() * 3 + 1);
    console.log('Komputer: ' + computerInput);
    
    //Transfer Random number into string
    let computerMove = getMovieName (computerInput);
    
    // Ask player for input
    // let playerInput = prompt ('Wybierz swój ruch! 1 - kamień, 2 - papier, 3 - nożyce');
    // console.log ('Gracz: ' + playerInput);
    
    // Transfer player input into string
    let playerMove = getMovieName(playerInput);
    
    // Print resoult
    displayResult(computerMove, playerMove);
}



let rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function () {playGame(1)});

let paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function() {playGame(2)});

let scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function() {playGame(3)});

  
