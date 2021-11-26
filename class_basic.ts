class Staff {
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

  describe(this: Staff) {
    console.log('this context is :', this);
    console.log(`person's name is ${this.name} hobbies are ${this.hobbies}`);
  }
}

const nurse = new Staff('fann', '0001');
nurse.describe();

const nursecopy = { describe: nurse.describe, name: 'xiexie' };

//nursecopy.describe(); // this execution context on nursecopy

//class inheritance

class Manager extends Staff {
  constructor(name: string, id: string, private bonus: number) {
    super(name, id);
  }

  showBouns() {
    console.log(this.bonus);
  }
}

const m1 = new Manager('eric', '00002', 20000);
m1.firstHobby = 'drinking';
console.log('fh', m1.firstHobby);

m1.showBouns();
