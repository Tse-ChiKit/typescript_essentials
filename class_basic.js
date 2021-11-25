"use strict";
class Staff {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('this context is :', this);
        console.log(`person's name is ${this.name}`);
    }
}
const nurse = new Staff('fann');
nurse.describe();
const nursecopy = { describe: nurse.describe, name: 'xiexie' };
nursecopy.describe(); // this execution context on nursecopy
