/*Esercizio 1

// Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno controllando la proprietà dell’oggetto readingStatus

const library = [ 
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    readingStatus: true,
    
  },
  ,
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    readingStatus: true,
    
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false,
    
  }
];


function libriLetti(library,category) {
  library.forEach(el => { if (el.readingStatus){
    console.log(`${el.title} di ${el.author} è stato letto!`)
  }else {console.log(`${el.title} di ${el.author} non è ancora stato letto!`)}
  
});
}

libriLetti(library)


*/

/*Esercizio 2

// Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.

// Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita.

const bowling = {
  players: [
    { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
    { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
    { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
  ]
};

// Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

// **TIP**: LAVORATE CON LE FUNZIONI.

// Ad es: `checkWinner(bowling)`

// **TIP**: Aggiungete una proprietà `total` per ogni oggetto Player `{ name: “xxx”, scores: [7, 9, 10], total: 123 }`

function punteggioGiocatori(sport){
  let Giocatori=sport.players;
  Giocatori.forEach(el=>{
    let punteggio=el.scores;
    let totale=0;
    punteggio.forEach(el2=>{
      totale+=(el2)
    })
    console.log(totale)
    el.totali=totale
  })
  
  
}

console.log(bowling)


punteggioGiocatori(bowling)


function vincitore(sport){
  let Giocatori=sport.players;
  let punteggi=Giocatori.map(el=>el.totali);
  let punteggioAlto=Math.max(...punteggi) 
  
  Giocatori.forEach(el2=>{
    if(el2.totali===punteggioAlto){
      console.log(`Il Vincitore è il ${el2.name} con ${el2.totali} punti totali`)
    }else{
      console.log(`Il ${el2.name} ha perso con un punteggio di ${el2.totali}`)
    }
  })
  
  
}

vincitore(bowling)

*/



//Esercizio 3

// Il Calendario Settimanale

// - Scrivi un oggetto contenente i giorni della settimana.
// - Ogni giorno sarà un array al quale gli si potrà aggiungere un evento.

// L’evento sarà un oggetto contenente le chiavi

// - nomeEvento
// - inizioEvento (formato “08:00”)

// esempio:
// {
// 	nomeEvento: "Lezione",
// 	inizioEvento: "18:30"
// }
// Il programma dovrà permettere di:

// - aggiungere singoli eventi per un determinato giorno.
// ricordate che potete accedere alle proprietà di un oggetto:
// object["key"];

// BONUS: all’inserimento di questi bisognerà ordinare l’array in modo che l’orario di inizio sia una successione ordinata

/*

Il metodo sort() itera sull'array, passando ogni volta due valori adiacenti alla funzione di confronto. 
La funzione di confronto valuta quindi la differenza tra il primo valore e il secondo. Questo determinerà se la funzione 
restituisce un valore positivo, negativo o neutro.
Se il valore restituito è positivo, significa che il primo valore è maggiore del secondo. 
Ad esempio, se confronti 7 e 4, ottieni 3. 
Pertanto, il primo valore viene posizionato dopo il secondo nell'ordine crescente.
Se il valore restituito è negativo, significa che il primo valore è minore del secondo. 
Ad esempio, se confronti 2 e 7, ottieni -5. 
Pertanto, il primo valore viene posizionato prima del secondo nell'ordine crescente.
Un valore neutro, o zero, indica che i due valori sono uguali, quindi l'ordine non ha bisogno di essere modificato.

*/

// .sort(function(a, b) {
//   return a.inizioEvento - b.inizioEvento;
// });

// - filtrare gli eventi di una specifica giornata.
// - cercare gli eventi per nome: questa funzione mi ritornerà le eventuali occorrenze, dell’evento, divise per giornata.

// // ricordate che potete ciclare un oggetto
// for(let key in object) {
// 	// ...
// }

// // potrebbe tornarvi utile
// .filter(evento => {
// 	// ...
// });

// TIP: lavorate con le funzioni, per esempio per aggiungere un evento fate una funzione `aggiungiEvento()` o `addEvent()`




let giorniSettimana={
  
  lunedì:[],
  martedì:[],
  mercoledì:[],
  giovedì:[],
  venerdì:[],
  sabato:[],
  domenica:[]
  
  
}





function aggiungiEvento(settimana,giornoSettimana,nomeEv,inizioEv,){
  const keys=Object.keys(settimana)
  let giorno=``;
  let evento={
    nomeEvento:`${nomeEv}`,
    inizioEvento:`${inizioEv}`
  }
  keys.forEach(el=>{if(el===giornoSettimana){ 
    
    giorno=el
  }})
  
  
  
  switch(giorno){
    case `lunedì`:
    settimana.lunedì.push(evento);
    break;
    case `martedì`:
    settimana.martedì.push(evento);
    break;  
    case `mercoledì`:
    settimana.mercoledì.push(evento);
    break;
    case `giovedì`:
    settimana.giovedì.push(evento);
    break;
    case `venerdì`:
    settimana.venerdì.push+++(evento);
    break;
    case `sabato`:
    settimana.sabato.push(evento);
    break;
    case `domenica`:
    settimana.domenica.push(evento);
    break;
    
  }
}

function eventiGiornata(settimana,parametro){
  const keys=Object.keys(settimana)
  keys.forEach(el=>{if(el===parametro){ 
    
    giorno=el
  }})
  switch(giorno){
    case `lunedì`:
    console.log(settimana.lunedì);
    break;
    case `martedì`:
    console.log(settimana.martedì);
    break;  
    case `mercoledì`:
    console.log(settimana.mercoledì);
    break;
    case `giovedì`:
    console.log(settimana.giovedì);
    break;
    case `venerdì`:
    console.log(settimana.venerdì);
    break;
    case `sabato`:
    console.log(settimana.sabato);
    break;
    case `domenica`:
    console.log(settimana.domenica);
    break;
    
    
  }
}

function cercareEvento(settimana,evento){
  let event=``;
  
  for(let key in settimana){
    
    settimana[key].filter(el=>{
      for(let m in el){
        if(el[m]==evento){
          console.log(el)}}
        })
      }
}
    
    
    
    
    
    
    
    
    aggiungiEvento(giorniSettimana,`lunedì`,`partita`,`18.30`)
    aggiungiEvento(giorniSettimana,`domenica`,`pranzo`,`13.30`)
    
    console.log(giorniSettimana)
    
    eventiGiornata(giorniSettimana,`lunedì`)
    
    cercareEvento(giorniSettimana,`partita`)