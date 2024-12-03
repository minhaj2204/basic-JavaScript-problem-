// lowest number finding 


function findSmallestNum ( arr ) {

  return Math.min ( ...arr ) ; //without this (...) three dots code is not working

}

console.log(findSmallestNum( [ 3, 5, 1, 9 ] ) ) ;  

console.log(findSmallestNum( [ -1, -5, 0, 10 ]) ) ; 
