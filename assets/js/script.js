/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

 let deck         = [];
 const tipos      = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];


 let puntosJugador = 0,
 puntosComputadora = 0;

// Referencias del HTML
const btnpedir   = document.querySelector('#btnpedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');
 
 // Esta función crea un nuevo deck
 const crearDeck = () => {
 
     for( let i = 2; i <= 10; i++ ) {
         for( let tipo of tipos ) {
             deck.push( i + tipo);
         }
     }
 
     for( let tipo of tipos ) {
         for( let esp of especiales ) {
             deck.push( esp + tipo);
         }
     }
     // console.log( deck );
     deck = _.shuffle( deck );        
     return deck;
    
 }
 
 crearDeck();
 
 
 // Esta función me permite tomar una carta
 const pedirCarta = () => {
 
     if ( deck.length === 0 ) {
         throw 'No hay cartas en el deck';
     }
     const carta = deck.pop();   
     console.log(carta);
     return carta;
 }


// pedirCarta();
const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}




// let titulo = document.querySelector('h1');
// titulo.innerText = 'pedro'


//eventos

btnpedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnpedir.disabled   = true;     
        turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnpedir.disabled   = true;     
        turnoComputadora( puntosJugador );
    }

});