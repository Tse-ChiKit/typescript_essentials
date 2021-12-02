//1. intersection type
//1.1 combination
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  StartDate: Date;
};

type EvaluatedEmployee = Admin & Employee;

const e1: EvaluatedEmployee = {
  name: 'eric',
  privileges: ['deployment'],
  StartDate: new Date(),
};

//1.2 intersection

type myCombinable = string | number;
type Numeric = number | boolean;

type Universal = myCombinable & Numeric;

//2. type Guards
//2.1 on objects
function printEmployeeInformation(emp: EvaluatedEmployee) {
  if ('privileges' in emp) {
    //do something
  }
}

//2.2 on class
// if xxx instanceof xxx

//3. Discriminated Unions
type Bird = {
  type: 'brid';
  name: 'string';
};

//4. TypeCasting

//const paragraph = <HTMLInputElement>document.getElementById('test')!;
const paragraph = document.getElementById('test')! as HTMLInputElement;

paragraph.value = 'world';

//5. index Properties

interface ErrorContianer {
  [prop: string]: string;
}

//6. Option Chaining
const fetchedData: {
  id: number;
  name?: string;
} = {
  id: 2,
};

function getProperty(obj: typeof fetchedData) {
  if (obj) console.log(obj?.name as string);
}

//7. Nullish coalesing

const input = undefined;

const evaluatedInput = input ?? 'default';

console.log('evaluated input is ', evaluatedInput);
