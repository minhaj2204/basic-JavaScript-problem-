// sum of all 


function sumArray (arr) {

  return arr.reduce((a, b) => a + b, 0);

}

console.log ( sumArray ( [ 1, 2, 3, 4 ] ) ) ;

console.log ( sumArray ( [ -1, -2, -3, -4 ] ) ) ; 

console.log ( sumArray ( [ 1.5, 2.5, 3.5 ] ) ) ;
