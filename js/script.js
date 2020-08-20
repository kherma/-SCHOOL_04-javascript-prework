// Generate random number
let calculations = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + calculations);

//Transfer Random number into string
let computerMove = 'Nieznany ruch';

if (calculations == 1) {
    computerMove = 'kamień';
} else if (calculations == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

// Ask player for input
let playerInput = prompt ('Wybierz swój ruch! 1 - kamień, 2 - papier, 3 - nożyce');

console.log (playerInput);

// Transfer player input into string
let playerMove = 'nieznany ruch';

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
}