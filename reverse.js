function reverse(word){
var reversedWord = ""
 for (var i = 2; i < word.length; i++){
    var firstWord = word[i]
    for (var j = firstWord.length - 1; j >= 0; j--){
      reversedWord += firstWord[j]
    }
    reversedWord += '\n'
  }
  return reversedWord
}

console.log(reverse(process.argv));