function openOrSenior(data){
  var result = [];

  for(let i=0; i<data.length; i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
          result[i] ='Senior';
      }else {
          result[i]='Open';
      }
    }

  return result;
}

console.log(openOrSenior([[45,12],[55,21],[19,-2],[104,20]]));