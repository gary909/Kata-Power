function numberToPower(number, power){
    let myStr = 1;
    for (let i = 0; i < power; i++){
        myStr = myStr * number;
    }
    return myStr;
}

console.log(numberToPower(4, 2)); // 16
console.log(numberToPower(10, 4)); // 10000
console.log(numberToPower(10, 0)); // 1