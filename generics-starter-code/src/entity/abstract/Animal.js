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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Cat = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, trainingPriority) {
        this.trainingPriority = trainingPriority;
        this.name = name;
    }
    Animal.getSorted = function (animals) {
        return __spreadArray([], animals, true).sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    Animal.getTrainingPriorities = function (animals) {
        return __spreadArray([], animals, true).sort(function (a, b) { return a.trainingPriority - b.trainingPriority; })
            .map(function (animal) { return animal.name; });
    };
    return Animal;
}());
exports.Animal = Animal;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, trainingPriority) {
        return _super.call(this, name, trainingPriority) || this;
    }
    return Cat;
}(Animal));
exports.Cat = Cat;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, trainingPriority) {
        return _super.call(this, name, trainingPriority) || this;
    }
    return Dog;
}(Animal));
exports.Dog = Dog;
var cats = [
    new Cat("Whiskers", 3),
    new Cat("Mittens", 1),
    new Cat("Shadow", 2),
];
var dogs = [
    new Dog("Buddy", 2),
    new Dog("Rex", 1),
    new Dog("Charlie", 3),
];
console.log("Sorted Cats:", Animal.getSorted(cats));
console.log("Cat Training Priorities:", Animal.getTrainingPriorities(cats));
console.log("Sorted Dogs:", Animal.getSorted(dogs));
console.log("Dog Training Priorities:", Animal.getTrainingPriorities(dogs));
