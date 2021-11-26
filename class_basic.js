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
    Object.defineProperty(Staff.prototype, "firstHobby", {
        get: function () {
            return this.hobbies[this.hobbies.length - 1];
        },
        set: function (h) {
            this.hobbies[0] = h;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
//const nurse = new Staff('fann', '0001');
//nurse.describe();
//const nursecopy = { describe: nurse.describe, name: 'xiexie' };
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
    Manager.prototype.describe = function () {
        console.log('this context is :', this);
        console.log("person's name is ".concat(this.name));
    };
    Manager.type = 'M';
    return Manager;
}(Staff));
var m1 = new Manager('eric', '00002', 20000);
m1.firstHobby = 'drinking';
console.log('fh', m1.firstHobby);
console.log(Manager.type);
m1.showBouns();
//singleton constructor
var CEO = /** @class */ (function (_super) {
    __extends(CEO, _super);
    function CEO(name, id) {
        return _super.call(this, name, id) || this;
    }
    CEO.getInstance = function () {
        if (this.instance) {
            //this refer on CEO class
            return this.instance;
        }
        this.instance = new CEO('TimC', '000000000001');
        return this.instance;
    };
    CEO.prototype.describe = function () {
        console.log("I'm a CEO");
    };
    return CEO;
}(Staff));
console.log(CEO.getInstance());
