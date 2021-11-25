"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Staff = /** @class */ (function () {
    function Staff(n, id) {
        this.name = n;
        this.hobbies = [];
        this.id = id;
    }
    //   shortcut initalization
    //   constructor(public n: string) {
    //     this.name = n;
    //     this.hobbies = [];
    //   }
    Staff.prototype.describe = function () {
        console.log('this context is :', this);
        console.log("person's name is ".concat(this.name, " hobbies are ").concat(this.hobbies));
    };
    return Staff;
}());
var nurse = new Staff('fann', '0001');
nurse.describe();
var nursecopy = { describe: nurse.describe, name: 'xiexie' };
//nursecopy.describe(); // this execution context on nursecopy
//class inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, bonus) {
        var _this = _super.call(this, name, id) || this;
        _this.bonus = bonus;
        return _this;
    }
    Manager.prototype.showBouns = function () {
        console.log(this.bonus);
    };
    return Manager;
}(Staff));
var m1 = new Manager('eric', '00002', 20000);
m1.showBouns();
