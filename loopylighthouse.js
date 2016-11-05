for (var i = 100; i <= 200; i++){
  var word = ""
  if (i % 3 === 0){
    word += "Loopy"
  }
  if (i % 4 === 0){
    word += "Lighthouse"
  }
    console.log(word === "" ? i : word)


  /*if (i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0){
    console.log("Loopy");
  } else if (i % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(i);
  }*/
}
