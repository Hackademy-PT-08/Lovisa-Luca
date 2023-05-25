/*Esercizio 1

let playlist={
    canzoni:[
        {
            titolo:`Summertime`,
            autore:`George Gershwin`,
            anno:1935
        },
        {
            titolo:`Boheminan Rhapsody`,
            autore:`Queen`,
            anno:1975
        }
    ],
};

playlist.canzoni.push({
    titolo:`Bocca di Rosa`,
    autore:`Fabrizio de Andrè`,
    anno:1967,
})

console.log(playlist)


*/



/*Esercizio 2

let rubrica ={
    
    Utente1:{
        Nome:`Luca`,
        Cognome:`Lovisa`,
        Telefono:3471112223,
        metodo:function(){
            console.log(`Nome:${this.Nome}\n Cognome:${this.Cognome}\nTelefono:${this.Telefono}`)
        },
        Indirizzo:{
            Via:`Via del Pero`,
            Città:`Genova`,
            cap:21233
        }
    },
    Utente2:{
        Nome:`Giovanni`,
        Cognome:`Storti`,
        Telefono:3473566322,
        metodo:function(){
            console.log(`Nome:${this.Nome}\n Cognome:${this.Cognome}\nTelefono:${this.Telefono}`)
        },
        Indirizzo:{
            Via:`Via del Melo`,
            Città:`Genova`,
            cap:21233
        }
    },
    Utente3:{
        Nome:`Aldo`,
        Cognome:`Baglio`,
        Telefono:3471275723,
        metodo:function(){
            console.log(`Nome:${this.Nome}\n Cognome:${this.Cognome}\nTelefono:${this.Telefono}`)
        },
        Indirizzo:{
            Via:`Via del Banano`,
            Città:`Genova`,
            cap:21233
        }
    },
    Utente4:{
        Nome:`Giacomo`,
        Cognome:`Poretti`,
        Telefono:3471345223,
        metodo:function(){
            console.log(`Nome:${this.Nome}\n Cognome:${this.Cognome}\nTelefono:${this.Telefono}`)
        },
        Indirizzo:{
            Via:`Via del Cocco`,
            Città:`Genova`,
            cap:21233
        }
    }
    
};


console.log(rubrica.Utente1.metodo())

console.log(rubrica)

delete rubrica.Utente4;

console.log(rubrica)

*/



/*Esercizio 3

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.


let garage={
    auto1:{
        Marca:`Renault`,
        modello:`Twingo`,
        metodo:function(){console.log(`${this.Marca} - ${this.modello}`)}
    },
    auto2:{
        Marca:`Alfa-Romeo`,
        modello:`Giulietta`,
        metodo:function(){console.log(`${this.Marca} - ${this.modello}`)}
    },
    auto3:{
        Marca:`Mitsubishi`,
        modello:`Space-Runner`,
        metodo:function(){console.log(`${this.Marca} - ${this.modello}`)}
    },
        metodo2:function(){
            garage.auto1.metodo()
            garage.auto2.metodo()
            garage.auto3.metodo()
        }
        }
;
garage.auto1.metodo()
garage.auto2.metodo()
garage.auto3.metodo()

garage.metodo2()



*/



/*Esercizio 4

const LIBRI = [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy",
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica"
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza"
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna"
    }
  ]

function metodo(LIBRI,categoria=`fantascienza`){
    let anchor=LIBRI.filter(el=>el.categoria.toLowerCase().includes(categoria));

    anchor.forEach(el => {
        console.log(`<a href="www.lamiasuperlibreria.aulab/${el.autore.toLowerCase()}/${el.titolo.toLowerCase().replace(/ /g, "-")}.html">${el.titolo.toLowerCase().replace(/ /g, "-")}</a>`);
    })
    };
    
console.log(metodo(LIBRI,`narrativa classica`))

*/
