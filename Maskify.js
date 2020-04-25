// return masked string
function maskify(cc) {
    var size = cc.length >3 ? cc.length-4 : 0;
    return "#".repeat(size+1)+cc.substring(size, cc.length);
}


console.log(maskify('123456'))
console.log(maskify('1234'))
