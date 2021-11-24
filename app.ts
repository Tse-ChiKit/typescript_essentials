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

//union type
function handleAdd(input1: number | string, input2: number | string) {
  if (typeof input1 == 'number' && typeof input2 == 'string') {
    return input1 + input2;
  } else return 'please input 2 numbers';
}

//literal type
function printText(text: string, alignment: 'left' | 'right' | 'center') {
  console.log(text, alignment);
}

console.log(handleAdd(1, 2));

console.log('ts is running!!', person);
