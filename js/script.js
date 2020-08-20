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
    playerMove = "nienznay ruch";
}
