"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
function f() {
    console.log('Test');
}
f();
// @ts-ignore
var Foo = /** @class */ (function () {
    function Foo(field1) {
        this.field1 = field1;
        this.field2 = 1;
    }
    Foo.prototype.print = function () {
        console.log('Foo field1 : ', this.field1);
        console.log('Foo field2 : ', this.field2);
        console.log('Foo fieldxxxx : ', this.fieldxxxx);
    };
    return Foo;
}());
exports.Foo = Foo;
var foo = new Foo(123);
foo.print();
//# sourceMappingURL=main.js.map