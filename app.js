//Enums
var Gender;
(function (Gender) {
    Gender["Male"] = "M";
    Gender["Female"] = "F";
})(Gender || (Gender = {}));
//Object Type Definition
var person = {
    name: 'eric',
    age: 12,
    role: [2, 'author'],
    phones: ['apple 12', 'huawei P40'],
    gender: Gender.Male
};
//tuple allows push and pop
person.role.push('admin');
//union type
function handleAdd(input1, input2) {
    if (typeof input1 == 'number' && typeof input2 == 'string') {
        return input1 + input2;
    }
    else
        return 'please input 2 numbers';
}
//literal type
function printText(text, alignment) {
    console.log(text, alignment);
}
console.log(handleAdd(1, 2));
//void type
function printHello() {
    console.log('hello');
}
//function type
var combine;
var combineStrings;
function add(val1, val2) {
    return val1 + val2;
}
combine = add;
//combine = 'a'  //compilation error
combineStrings = add;
//type for callback function
function decorateText(s, cb) {
    return cb(s);
}
console.log(decorateText('ss', function (s) {
    return "hello ".concat(s);
}));
console.log('ts is running!!', person);
