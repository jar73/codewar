function narcissistic(value) {
    let strVal = value.toString();
    var val = 0;

    for(let i=0;i<strVal.length;i++){
        val += Math.pow(Number(strVal[i]),strVal.length);
    }
    return val === value;
}

console.log(narcissistic(3));

console.log(narcissistic(153));