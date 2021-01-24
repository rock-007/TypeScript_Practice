console.log("Hello! ");

// here : number(after parameter) is special identifier here in typescript
// type inference x=5 it knows its number x=umair its string auto detect
function add (n1: number,n2: number, showResult:boolean){

if(showResult){

console.log(n1+n2);


}


return n1+n2;


}


// const person:{
// name:string;
// age:number;
// hobbies:string[];
// role:[number,string,number] // its Tuple  limit in the inputs

// } ={
// name: 'umair',
// age:36,
// hobbies:  ['sports', 'Cooking' ],
// role:[2,'author',3]
// }


enum  Role { ADMIN=3, READ_ONLY,AUTHOR };
const person = {
  name: "umair",
  age: 36,
  hobbies: ["sports", "Cooking"],
  role: Role.ADMIN,
};


person.role.push('admin');


const number1: number=5;
const number2=2.8;
const printResult=true;

const result =add(number1,number2, printResult);

console.log(result);

for(const hobby of person.hobbies){

console.log(hobby);


}