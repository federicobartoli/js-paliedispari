// function palindrome(stringa) {
//   var re = /[\W_]/g;
//   var lowRegStr = stringa.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   return reverseStr === lowRegStr;
// }

//PROVE DI CODICE X PALINDROMO
var ciao = 'ciao';
var ris = ciao.split(''); //Con split creo un array di tutte le parole divise di ciao
var rev = ris.reverse(); // con reverse metto al contrario tutte le parole
var jn = rev.join(''); // con join unisco array e faccio diventare stringa
console.log(ris);
console.log(rev);
console.log(jn);
