//start empty deck
let deck = [];
//Types of cards
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//create deck function
const crearDeck =() =>{
    for(let i=2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo); 
        } 
    
    }
    for(let esp of especiales){
        for(let tipo of tipos){
            deck.push( tipo + esp); 
        } 
    }  

    deck = _.shuffle(deck);
    return deck;
}


crearDeck();

//Ask for a card

const pedirCarta = ()=>{
if(deck.length === 0){
 throw 'No hay cartas en el deck';
}
   let carta = deck.pop();
   return carta;
}

pedirCarta();

const valorDeCarta = (carta) =>{
    
     const valor = carta.substring(0, carta.length - 1); 
     
     return (isNaN(valor)) ?
     (valor === 'A') ? 11 : 10
     : valor * 1;
}

const valor = valorDeCarta(pedirCarta());
console.log(valor)