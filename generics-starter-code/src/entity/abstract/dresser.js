var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Drawer = /** @class */ (function () {
    function Drawer() {
        this.items = [];
    }
    Object.defineProperty(Drawer.prototype, "isEmpty", {
        get: function () {
            return this.items.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Drawer.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Drawer.prototype.removeItem = function () {
        return this.items.pop();
    };
    Drawer.prototype.removeAll = function () {
        var allItems = __spreadArray([], this.items, true);
        this.items = [];
        return allItems;
    };
    return Drawer;
}());
var Dresser = /** @class */ (function () {
    function Dresser() {
        this.top = new Drawer();
        this.middle = new Drawer();
        this.bottom = new Drawer();
    }
    return Dresser;
}());
function startDresser() {
    var myDresser = new Dresser();
    myDresser.top.addItem({ style: "ankle", color: "black" });
    myDresser.middle.addItem({ style: "t-shirt", size: "M" });
    myDresser.bottom.addItem({ waist: 32, length: 30 });
    console.log("Top drawer empty?", myDresser.top.isEmpty);
    console.log("Removed item from middle:", myDresser.middle.removeItem());
    console.log("Removed all from bottom:", myDresser.bottom.removeAll());
}
startDresser();
