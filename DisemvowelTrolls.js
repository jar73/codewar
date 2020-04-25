function disemvowel(input){
   return input.replace(/([aeiouAEIOU])+/g,'');
}

console.log(disemvowel("haHAha"));