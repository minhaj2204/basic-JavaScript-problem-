// margeing two arrays


function mergeArrays (arr1, arr2) {

  return [ ...arr1 , ...arr2 ];

}

console.log (mergeArrays ( [ 1, 2, 3 ], [ 4, 5, 6 ] ) );

console.log (mergeArrays ( [ "a", "b" ], [ "c", "d" ] ) ); 
