//var change = "hello";
var test = process.argv.slice(2);
console.log(test);

function reverse(word){
  var arr = "";
  var arr2 = [];
  //for (var j = 0; j < word.length; j++){
    for (var i = word.length - 1; i >= 0; i--) {
        arr += word[i];
    }

  return arr;
}

console.log(reverse(test));