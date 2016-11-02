function pigLatin(word) {
  var firstLetter;
  var test = word
  //console.log(firstLetter);
  var add = "ay";
  var newArr = "";

  //test = test.slice(1) + test.slice(0, 1) + add;
  //console.log(test);

  for (var i = 0; i < word.length; i++){
    test = test.slice(1) + test.slice(0, 1);
    //newArr.push(test);
    console.log(test);
    //firstLetter = word[i].slice(1) + word[i].slice(0, 1)
    //console.log(firstLetter);
  }
}

console.log(pigLatin(process.argv[2]));