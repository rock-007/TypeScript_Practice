console.log("Hello! ");

// here : number(after parameter) is special identifier here in typescript
// type inference x=5 it knows its number x=umair its string auto detect
function add (n1: number,n2: number, showResult:boolean){

if(showResult){

console.log(n1+n2);


}


return n1+n2;


}

const number1: number=5;
const number2=2.8;
const printResult=true;

const result =add(number1,number2, printResult);

console.log(result);