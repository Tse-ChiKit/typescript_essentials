//Object Type Definition

const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: 'eric',
  age: 12,
  role: [2, 'author'],
};

person.role.push('admin');

console.log('ts is running!!', person);
