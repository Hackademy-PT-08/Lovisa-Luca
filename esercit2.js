/*Esercizio 1

let num = 10 ;
let num1 = 20;
let num2 = 35;
let num3 = 50;
let num4 = 70;

let somma = num + num1 + num2 + num3 + num4;

console.log(somma);

let media = somma / 5;

console.log (media);*/



/*Esercizio 2

let num1 = parseInt (prompt(`inserisci il primo numero intero`));
let num2 = parseInt (prompt(`inserisci il secondo numero intero`));
let num3 = parseInt (prompt(`inserisci il terzo numero intero`));
let num4 = parseInt (prompt(`inserisci il quarto numero intero`));
let num5 = parseInt (prompt(`inserisci il quinto numero intero`));


let sum = num1+num2+num3+num4+num5;

console.log(sum);


let media = sum/5;

console.log (media);*/



/*Esercizio 3


let tempBari = 25;
let tempNaples = 30;
let tempRome = 28;
let tempMilan = 33;

let tempMax = Math.max (tempBari,tempMilan,tempNaples,tempRome );
let tempMin = Math.min (tempBari,tempMilan,tempNaples,tempRome);

console.log (`la temperatura più alta è ${tempMax}`);
console.log (`la temperatura più bassa è ${tempMin}`);*/



/* Esercizio 4

let annoCor = 2023;
let annoNasc = parseInt(prompt(`Qual è la tua data di nascita?`));

let anni = (annoCor - annoNasc) ;
let anniManc = (100 - anni);


alert(`Hai la bellezza di ${anni} anni`);

alert(`Ti mancano ancora ${anniManc} per raggiungere i 100!`);*/


/*Esercizio 5

let Utente1 = prompt (`Nome primo utente`);
let Utente2 = prompt (`Nome secondo utente`);


let check = Utente1 == Utente2;

console.log(check);*/


/*Esercizio 6

let number = prompt (`Il tuo numero di telefono è `);

let numberSlice = number.slice (7,10);
let numberSlice2 = number.slice (0,7)

let numberRepl = numberSlice2.replace(/\d/g, '*');


console.log (numberRepl+numberSlice);*/


/*Esercizio 7

let gatti = 44;

let fila = 7 ;


let fileGatti = gatti / fila;

console.log (fileGatti)

let fileArr = Math.floor (fileGatti);

console.log (fileArr);

let restoGatti = (gatti - (fileArr*fila) );

let resto = (gatti%fileArr);

console.log (restoGatti);

console.log (resto);*/


/*Esercizio 8

var numRandom = Math.random ();

var numRandom2 = numRandom*6;

var numRandom3 = Math.floor (numRandom2);

var numReal = numRandom3+1;

console.log (numReal);*/