//Enums
enum Gender {
  Male = 'M',
  Female = 'F',
}

//Object Type Definition
const person: {
  name: string;
  age: number;
  role: [number, string]; // Tuple
  phones: string[];
  gender: Gender;
} = {
  name: 'eric',
  age: 12,
  role: [2, 'author'],
  phones: ['apple 12', 'huawei P40'],
  gender: Gender.Male,
};

//tuple allows push and pop
person.role.push('admin');

//type alias
type Combinable = number | string;

//union type
function handleAdd(input1: Combinable, input2: number | string) {
  if (typeof input1 == 'number' && typeof input2 == 'string') {
    return input1 + input2;
  } else return 'please input 2 numbers';
}

//literal type
function printText(text: string, alignment: 'left' | 'right' | 'center') {
  console.log(text, alignment);
}

console.log(handleAdd(1, 2));

//void type
function printHello(): void {
  console.log('hello');
}

//function type
let combine: Function;
let combineStrings: (s1: string, s2: string) => string;
function add(val1, val2) {
  return val1 + val2;
}

combine = add;
//combine = 'a'  //compilation error
combineStrings = add;
console.log('ts is running!!', person);
