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