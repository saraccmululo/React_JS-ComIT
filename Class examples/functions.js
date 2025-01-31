let result='199999';
console.log('result from outside', result)

function sayHi(message, username, address){
    result=message+username+address;
    return console.log('result from inside the function', result);
}

const arg1='Hello from const';
const arg2='Name from const';
const arg3='Address from const';

sayHi(arg1, arg2, arg3);

const sayHi=(number1, number2, number3)=>{
    //bla bla bla
}