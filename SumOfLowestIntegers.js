function sumTwoSmallestNumbers(numbers) {
    var min1 =Infinity;
    var min2 =Infinity;

    for(var i=0;i<numbers.length;i++) {
        if(numbers[i] < min1){
            if(min1 < min2){
                min2 = min1;
            }
            min1 = numbers[i];
            continue;
        }
        if(numbers[i] < min2){
            min2 = numbers[i];
        }
    }
    return numbers.length === 0 ? 0 : min1+min2;
}

console.log(sumTwoSmallestNumbers([15, 28, 14, 2, 43]));
console.log(sumTwoSmallestNumbers([]));