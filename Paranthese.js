function validParentheses(parens){
    let status = 0;

    for(let i = 0;i<parens.length;i++){
        if(parens[i] === '(') {status ++;}
        else if(parens[i] === ')') {status --;}

        if(status < 0) return false;
    }
    return status === 0;
}


console.log(validParentheses("()(("));