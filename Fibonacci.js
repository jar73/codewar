function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function productFib(prod){
    var fib1 = undefined;
    var fib2 = undefined;
    var count = 0;

    do{
        count++;
        fib1 = fibonacci(count);
        fib2 = fibonacci(count+1);
    }
    while(fib1 * fib2 < prod);

    return [fib1,fib2, fib1*fib2===prod];
}

console.log(productFib(4895));

