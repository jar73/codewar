function rgb(r, g, b){
    for(let i=0;i<arguments.length;i++){
        arguments[i] =   Math.max(Math.min(arguments[i],255),0);
    }

    return r.toString(16).toUpperCase().padStart(2, '0')+g.toString(16).toUpperCase().padStart(2, '0')+b.toString(16).toUpperCase().padStart(2, '0');
}

console.log(rgb(300,300,300));
console.log(rgb(0,0,0));
console.log(rgb(-10,10,10));
