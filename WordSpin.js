function spinWords(text) {
    var result = "";
    var token = "";

    var tokens = text.split(" ");
    for (var i = 0;i<tokens.length; i++) {
        if (tokens[i].length >= 5) {
            result += tokens[i].split('').reverse().join('')+" ";
        }else{
            result += tokens[i]+" ";
        }
    }
    return result.slice(0, -1);
}

//console.log(spinWords("This is a test"));
console.log(spinWords("This is me"));

