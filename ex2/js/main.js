/*
prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
prompt ---> “Scegli un numero”         --------> ES: 5
creo un numero RANDOM                --------> ES: 10
10 + 5 = 15 è un numero DISPARI
log     -------->   Spiacente, hai scelto PARI, ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!

*/

var sceltaPariODispari = prompt('Pari o dispari?'); //Acquisisco risposta
sceltaPariODispariChecked = LwCase(sceltaPariODispari)

if (sceltaPariODispariChecked == ('pari') || sceltaPariODispariChecked == ('dispari')) {
     var acquisiscoNumero = parseInt(prompt('Scegli un numero da 1 a 10'));
     if (!isNaN(acquisiscoNumero)) {
          if (acquisiscoNumero > 10) {
               document.getElementById('id').innerHTML = 'Spiacente hai scelto un numero superiore di 10 fai refresh e riprova';
          } else {
               var numeroComputer = Math.floor(Math.random() * 10) + 1;
               // console.log(numeroComputer); // DEBUG
               document.getElementById('id').innerHTML = 'Il tuo numero è : ' + acquisiscoNumero + ' ; ' + 'il numero del computer è : ' + numeroComputer;
               var numeroSommato = numeroComputer + acquisiscoNumero;
               // console.log(numeroSommato); // DEBUG
               document.getElementById('id-2').innerHTML = 'La somma dei numeri è : ' + numeroSommato;
               var numeroPari = isPari(numeroSommato)
               if (sceltaPariODispariChecked == ('pari')) {
                    if (numeroPari) {
                         document.getElementById('id-3').innerHTML = 'Complimenti hai scelto pari e il numero sommato è pari..hai vinto un viaggio alle maldive il 31 Febbraio, contatta federicobartoli@me.com per info!!!!!';

                    } else {
                         document.getElementById('id-3').innerHTML = 'Hai scelto pari ma il numero sommato è dispari..sorry...';

                    }
               } else if(sceltaPariODispariChecked == ('dispari')) {
                    if (numeroPari) {
                         document.getElementById('id-3').innerHTML = 'Hai scelto dispari ma il numero sommato è pari! Non hai vinto sorry';

                    } else {
                         document.getElementById('id-3').innerHTML = 'Complimenti hai scelto dispari e il numero sommato è dispari..hai vinto un viaggio alle maldive il 31 Febbraio, contatta federicobartoli@me.com per info!!!!!';

                    }
               }
          }
     } else {
          document.getElementById('id').innerHTML = 'Fai un Refresh e inserisci un valore valido : NUMERI';
     }
} else {
     document.getElementById('id').innerHTML = 'Fai un Refresh e inserisci un valore valido : Pari o Dispari';
}



function LwCase(stringa) {
     var check = /[^A-Za-z]/g; //Check lettere NOCARATTERISPECIALI
     var lowStr = stringa.toLowerCase().replace(check, ''); //Trasformo tutto in minuscolo , attacco tutto e tolgo i caratteri speciali.
     return lowStr
}


// function numberTrue(stringa) {
//      if {
//           !isNaN(stringa)
//
//      }
// }

function isPari(numero) {
     if(numero % 2 === 0){
          return true;
     } else {
          return false;
     }
}



console.log(sceltaPariODispariChecked);
