function pigLatin(word) {
  var addLetter = "ay";
  var newArr = "";

  for (var i = 2; i < word.length; i++){
    var firstLetter = word[i][0]
    var noFirstLetter = word[i].slice(1)
    newArr += noFirstLetter + firstLetter + addLetter + " "
  }
  return newArr
}

console.log(pigLatin(process.argv));