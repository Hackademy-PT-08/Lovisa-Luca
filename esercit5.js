/*Esercizio 1

const array1=[3,2,7,10,5];
const array2=[7,9,6,8,1];

function operazioni(arr1,arr2,operazione=`addizione`){
    
    let result;
    let resultArray=[];
    
    for(let i=0;i<arr1.length;i++){
        switch (operazione){
            
            case "addizione":
            result = arr1[i] + arr2[i];
            break;
            
            case `sottrazione`:
            result=arr1[i]-arr2[i];
            break
            
            case `moltiplicazione`:
            result=arr1[i]*arr2[i];
            break
            
            case `divisione`:
            result=arr1[i]/arr2[i];
            return
        }
        
        resultArray.push(result)        
        
    }
    
    return resultArray
    
    
}


const result=operazioni(array1,array2,`moltiplicazione`);

console.log(result)

*/


/*Esercizio 2

let Array =[];
let y ;


array =[1,2,3,`quattro`,`cinque`]
let array2=[1,2,`tre`,4,`cinque`];

y=`quattro`;



console.log(array.includes (y))
console.log(array2.includes(y))

*/

/*Esercizio 3

let array =[1,-2,3,-4,5];

let array2=[-1,-2,-3];


function operazione(arr1,){

    let result=0;

    for(let i=0;i<arr1.length;i++){
        
        if(arr1[i]>0) {
            result+=arr1[i]

        }
        
    }
    return result
}


console.log(operazione(array))

console.log(operazione(array2))*/

/*Esercizio 4


let array =[`Smartphone`,`Auricolari Bluetooth`,`Motorino`,`Auto`,`T-shirt`,`Felpa con cappuccio`,`Nano da giardino`,`Videogioco Super Nintendo`];

let search =(prompt(`Ricerca nella lista`))

function find(arr1,srch){

    for (let i=0;i<arr1.length;i++){
        if  (!arr1[i].toLowerCase().includes(srch.toLowerCase())){
        alert(`mi dispiace ,il prodotto inserito non è incluso`);
        search =(prompt(`Ricerca nella lista`))
        return
        }
        else if (arr1[i].toLowerCase().includes(srch.toLowerCase())){
            alert (`Il prodotto è nella lista`);
        return


    }

}
}
console.log(find(array,search))

*/


/*Esercizio 5 

let array=["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];

function puntiPerPartite(arr) {
    let result=0;
    for(let i=0;i<arr.length;i++){
        let partita=arr[i].split(`:`);
      if (partita[0]>partita[1]){
        result+=3
      }
      else if(partita[0]===partita[1]){
        result+=1
      }

    }
    return `Il punteggio delle partite è di ${result}`

}

console.log(puntiPerPartite(array))

*/


/*Esercizio 6



let Frase = `Ciao sono un esercizio sui metodi degli array`;



function primeLettere(testo){

    let array=[];

    let frase=testo.split(` `);
    
    for(let i=0;i<frase.length;i++) {
        array.push(frase[i].charAt(0))
    }

    return array

}



console.log(primeLettere(Frase)) */


/*Esercizio 7

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

let array=myString.split(`+`);

console.log(array)

let arraylength = array.length

console.log (arraylength)

let lastItem= array.pop() // occhio al pop() perchè è vero che ti  restituisce l'ultimo elemento ma te lo rimuove anche dall'array finale. Per il lastItem potresti ottenerlo lastItem = array[arralength - 1];

console.log(lastItem) */



/*Esercizio 8

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

let array=myString.split(`+`);

array.pop();

array.shift()
array.shift()

array.push(`Marco`,`Laura`)

array.unshift(`Dante`,`Vergil`)

console.log (array)
*/
