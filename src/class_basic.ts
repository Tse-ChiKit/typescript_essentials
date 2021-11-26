abstract class Staff {
  protected id: string;
  name: string;
  private hobbies: string[];

  get firstHobby() {
    return this.hobbies[this.hobbies.length - 1];
  }

  set firstHobby(h: string) {
    this.hobbies[0] = h;
  }

  constructor(n: string, id: string) {
    this.name = n;
    this.hobbies = [];
    this.id = id;
  }

  //   shortcut initalization
  //   constructor(public n: string) {
  //     this.name = n;
  //     this.hobbies = [];
  //   }

  abstract describe(this: Staff): void;
}

//const nurse = new Staff('fann', '0001');
//nurse.describe();

//const nursecopy = { describe: nurse.describe, name: 'xiexie' };
//nursecopy.describe(); // this execution context on nursecopy

//class inheritance

class Manager extends Staff {
  static type: string = 'M';
  constructor(name: string, id: string, private bonus: number) {
    super(name, id);
  }

  showBouns() {
    console.log(this.bonus);
  }

  describe(this: Staff): void {
    console.log('this context is :', this);
    console.log(`person's name is ${this.name}`);
  }
}

const m1 = new Manager('eric', '00002', 20000);
m1.firstHobby = 'drinking';
console.log('fh', m1.firstHobby);
console.log(Manager.type);
m1.showBouns();

//singleton constructor
class CEO extends Staff {
  private static instance: CEO;
  private constructor(name: string, id: string) {
    super(name, id);
  }

  static getInstance() {
    if (this.instance) {
      //this refer on CEO class
      return this.instance;
    }
    this.instance = new CEO('TimC', '000000000001');
    return this.instance;
  }
  describe() {
    console.log(`I'm a CEO`);
  }
}

console.log(CEO.getInstance());
