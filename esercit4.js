/*Esercizio 1


function controlloNum (num) {
    var str;
    if (num==0) {
        str=`Il numero è uguale a 0`
    }
    else if (num >=1) {
        str =`il numero è positivo`
    }else if (num <0) {
        str= `il numero è negativo`
    }
    return str
}
let final= controlloNum(-11)

console.log (final)*/


/*Esercizio 2


let m = 3;
let v = 1;


function Identici(a,b) {

    if (a===b) {
        result = true;
    }else {
        result=false;
    }
    return result
}
    
   Identici(`2`,`2`)

   console.log(result)*/


/*Esercizio 3



let frase =``;
frase =prompt(`inserisci una frase`)
let lettera ;

let totLetter=0;
function checkLetter (a,b) {
    let Testo=``;
    Testo=a;
    for (i=0 ; i < Testo.length ; i++) {
        let testo=Testo.charAt(i).toLowerCase()
        switch(testo){
            case b:
                totLetter+=1;
                break;

        }
        

    }
    
}
lettera=`c`;


checkLetter (frase,lettera);



let result = totLetter

console.log(result)
*/


/*Esercizio 4


let r;
let arrDec;
let result;
 


function calculateArea (radius,precision) {

let area= Math.pow(radius,2)*Math.PI;
let result = area.toFixed(precision) 
return result
}


r=5;
arrDec=4;
console.log(calculateArea(r,arrDec))

*/

/*Esercizio 5 

let baseVoto=8
let golFatti=2
let assistEffettuati=1
let autogol=0
let ammonizione=true;
let espulsione=false;

function fantaCalcio (bV,gF,aE,aG,a,e) {
    let VotoTotale=0;
    VotoTotale=bV+(gF*3)+aE-(aG*2);
    if (a=true) {
        result=VotoTotale-0.5;
    }else if (b=true){
        result=VotoTotale-1
    }
    return result
}

fantaCalcio(baseVoto,golFatti,assistEffettuati,autogol,ammonizione,espulsione)

console.log(result)*/

/*Esercizio 6

let numeroGiocate;



function numeroTiri(tiri) {
    let G1;
    let G2;
    G1 = Math.floor(Math.random() * (6- 1 + 1) + 1)*tiri;
    G2 = (Math.floor(Math.random() * (6- 1 + 1) + 1))*tiri;
    if (G1>G2) {
    result = (`Il giocatore 1 ha vinto con un punteggio di ${G1}`)
 }else if (G1<G2) {
    result = (`il giocatore 2 ha vinto con un punteggio di ${G2}`)
}else {
       
    return result
}
}

numeroGiocate=4

numeroTiri(numeroGiocate)
let finale=result
console.log(finale)  */


 /*Esercizio 7

let num=Math.floor(Math.random()* (100))



function pariDispari(casualNumber,risposta) {
    if ( casualNumber % 2 === 0 && risposta ===`pari`) {
        result= `Hai imdovinato!il numero ${casualNumber} è pari!`;
    }else if (casualNumber % 2 === 0 && risposta=== `dispari`) {
        result = `Hai sbagliato!il numero ${casualNumber} è dispari!`
    }else if (!casualNumber % 2 === 0 && risposta ===`dispari`) {
        result =`Hai indovinato! il numero ${casualNumber} è dispari!`
    }else {
        result = `HAi sbagliato!il numero ${casualNumber} è pari!`
    }
    

    return result
}

let Risposta =(prompt(`Il numero ${num} è pari o dispari?Scrivi la risposta qua sotto . Pari o Dispari`))

pariDispari(num,Risposta);

let final=result;

console.log (result)*/


/*Esercizio 8


console.log('%cTITOLO', `color: white;font-size:30px;background-color:blue`);
console.log(`%csottotitolo`,`font-size:20px;color:blue`)
console.log(`%chighlight`,`background-color:orange`)
console.log(`%cdisastro`,`background-color:red;font-size:50px;color:white`)*/