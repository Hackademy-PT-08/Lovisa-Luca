
/* Esercizio 1

let v=parseInt(prompt(`inserisci il tuo voto`));


if (v<18) {
     console.log(`insufficiente`);
    

}else if (v>=18 && v <21) {
    console.log(`sufficiente`);
}else if (v >=21 && v< 24) {
    console.log(`buono`)
}else if(v>=24 && v<27) {
    console.log (`distinto`)
}else if (v >= 27 && v <=29){
    console.log(`ottimo`)
}else if (v=30){ 18
    console.log (`eccellente`)
} else {
    console.log(`il numero non è valido`)
}

*/

/*Esercizio 2


let num = prompt(`Scrivi un numero da 1 a 10`);


for (let i=0 ; i<=10;i++) {

    console.log(`x+${i}=${num*i}`)

}
*/

/*Esercizio 3

const pass =(prompt(`Inserisci la nuova password`));


if (pass.length < 6 || pass.length >20)  {
    alert (`La password deve essere lunga più di 6 caratteri e meno di 20`)
}
else if (pass.includes(`!`)&&pass.includes(`-`)&&pass.includes(`_`) ) {
    alert (`la password deve contenere almeno uno di questi simboli : ! , - , _`)
}
else if (!/\d/.test(pass)) {
    alert(`la password deve contenere almeno un numero`)
}
else {
    console.log(`La password è corretta`)
}
*/

/*Esercizio 4


let Testo = `**Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo**

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

**La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC**

“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

**Traduzione del 1914 di H. Rackham**

"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

**La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC**

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

**Traduzione del 1914 di H. Rackham**

"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`

let voc_a =0;
let voc_e = 0;
let voc_i=0;
let voc_u=0;
let voc_o=0;
let totVoc=0;


for (i=0 ; i < Testo.length ; i++) {
     let char=Testo.charAt(i).toLowerCase()

     switch(char) {
        case `a`:
        voc_a+=1
        totVoc+=1
        break;
        case `e`:
        voc_e+=1
        totVoc+=1
        break;
        case `i`:
        voc_i+=1
        totVoc+=1
        break;
        case `o`:
        voc_o+=1
        totVoc+=1
        break;
        case `u`:
        voc_u+=1
        totVoc+=1
        break;
     }
     
     console.log(`la vocale a è presente ${voc_a} volte`)
     console.log(`la vocale a è presente ${voc_e} volte`)
     console.log(`la vocale a è presente ${voc_i} volte`)
     console.log(`la vocale a è presente ${voc_o} volte`)
     console.log(`la vocale a è presente ${voc_u} volte`)
     console.log(`il totale delle vocali è : ${totVoc}`)

}
*/

/*Esercizio 5


let tiroG1_1 = Math.floor(Math.random(4) * (6- 1 + 1) + 1);
let tiroG1_2 = Math.floor(Math.random() * (6- 1 + 1) + 1);
let tiroG1_3 = Math.floor(Math.random() * (6- 1 + 1) + 1);
let tiroG1_4 = Math.floor(Math.random() * (6- 1 + 1) + 1);

let tiroG2_1 = Math.floor(Math.random(4) * (6- 1 + 1) + 1);
let tiroG2_2 = Math.floor(Math.random() * (6- 1 + 1) + 1);
let tiroG2_3 = Math.floor(Math.random() * (6- 1 + 1) + 1);
let tiroG2_4 = Math.floor(Math.random() * (6- 1 + 1) + 1);

let sommaG1 = tiroG1_1+tiroG1_2+tiroG1_3+tiroG1_4
let sommaG2 = tiroG2_1+tiroG2_2+tiroG2_3+tiroG2_4


console.log(`Il punteggio del giocatore 1 è ${sommaG1}`)
console.log(`Il punteggio del giocatore 1 è ${sommaG2}`)

if (sommaG1>sommaG2) {
 console.log(`Il giocatore 1 ha vinto con un punteggio di ${sommaG1}`)
}else if (sommaG1<sommaG2) {
    console.log(`il giocatore 2 ha vinto con un punteggio di ${sommaG2}`)
}else {
    console.log(`Pareggio con un punteggio di ${sommaG1}`)
}
*/
