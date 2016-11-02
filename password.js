function obfuscate(word){
var changed = "";
for (var i = 0; i < word.length; i++){
  switch (word.charAt(i)) {
    case 'a':
      changed += '4';
      break;
    case 'e':
      changed += '3';
      break;
    case 'o':
      changed += '0';
      break;
    case 'l':
      changed += '1';
      break;
    default:
      changed += word.charAt(i)
  }
}
return changed;
}

console.log(obfuscate(process.argv[2]));