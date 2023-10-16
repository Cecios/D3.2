/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N° 1");
let number = {
    tipo: "number",
    descrizione: "Si tratta di un tipo di dato che rappresenta qualsiasi numero compreso tra -(253 - 1 ) e +(253 + 1) Esempi: 2, -5, 3,14"
}
let string = {
    tipo: "string",
    descrizione: "Rappresenta una sequenza di caratteri (lettere) di lunghezza arbitraria e dalimitati da '"+'," o `'
}
let boolean = {
    tipo:"boolean",
    descrizione: "Si tratta di un tipo logico di dato. VERO o FALSO. Ad esempio si può chiedere al computer se è giorno(vero) o se è notte(falso)."
}
let Undefined = {
    tipo: "undefined",
    descrizione: "Rappresenta un valore che ancora non è stato definito. Quella variabile non ha mai avuto nessun valore." 
+    " E' come prendere una scatola vuota in cui non c'è mai stato nulla"
}
let Null = { 
    tipo: "null",
    descrizione: "Rappresenta un valore vuoto. La variabile prima conteneva qualcosa, ora non contiene più nulla."
}
console.log(number,string,boolean,Undefined,Null);
console.log("\n");
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N° 2");

console.log("Un oggetto, in javascript, rappresenta un gruppo di dati organizzati secondo una struttura chiave-valore."
+ "E' come se fosse un contenitore di variabili, in cui le variabili sono le proprietà (chiave) dell'oggetto."
+ " Un esempio di oggetto è: \n" 
+ " let io = { \n"
+ '     Nome: "Andrea",\n'
+"     Età: 29 \n"
+"}"
);
console.log("\n");
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N° 3");
let numero1 = 12
let numero2 = 20
let risultato = numero1+numero2 
console.log("la somma di: "+numero1+" + "+numero2+" dà come risultato: " + risultato);
console.log("\n");
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N°4");
let x = 12
console.log("x: " + x);
console.log("\n");
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N°5");
let nome = "Andrea"
console.log("Nome: "+nome);
console.log("\n");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO N° 6");
risultato = 4 - x
console.log("Il risultato di 4 - "+x+" dà come risultato: "+risultato);
console.log("\n");
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
let name1 = "john" ;
let name2 = "John";
console.log("Il nome: '"+name1+"' ed il nome: '" +name2+ "' sono diversi?: "+(name1 !== name2));
console.log("\n");