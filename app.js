console.log("Hello! ");
// here : number(after parameter) is special identifier here in typescript
// type inference x=5 it knows its number x=umair its string auto detect
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    return n1 + n2;
}
var person = {
    name: 'umair',
    age: 36,
    hobbies: ['sports', 'Cooking']
};
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
