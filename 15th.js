// vowel cheak

function countVowels (str) {

  return ( str.match(/[aeiouAEIOU]/ig) ).length ;

}

console.log( countVowels ( "hello world" ) ) ;  

console.log( countVowels ( "Javascript" ) ) ; 
