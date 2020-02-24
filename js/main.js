

// //PROVE DI CODICE X PALINDROMO
// var ciao = 'ciao';
// var spl = ciao.split(''); //Con split creo un array di tutte le parole divise di ciao
// var rev = spl.reverse(); // con reverse metto al contrario tutte le parole
// var joi = rev.join(''); // con join unisco array e faccio diventare stringa
// console.log(spl);
// console.log(rev);
// console.log(joi);

palindromoSi= false;
var parolaUtente = prompt('inserisci una parola');
var parolaUtenteCheck = palindromo(parolaUtente);
console.log(parolaUtenteCheck);

if (palindromoSi) {
     document.getElementById('id').innerHTML = 'Hai un palindromo'
     console.log('SI PALINDROMO');
} else {
      document.getElementById('id').innerHTML  = 'Non hai un palindromo'
     console.log('NO PALINDROMO');
}

function palindromo(stringa) {
     var check = /[^A-Za-z0-9]/g; //Check lettere e numeri NOCARATTERISPECIALI
     var lowStr = stringa.toLowerCase().replace(check, ''); //Trasformo tutto in minuscolo , attacco tutto e tolgo i caratteri speciali.
     var reverseStr = lowStr.split('').reverse().join('');
     if (reverseStr == lowStr) {
          return palindromoSi= true;
     } else {
          return console.log('no palindromo');
     }


}
