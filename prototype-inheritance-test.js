function Shape() {
    this.name = 'shape';
    this.area = function () {
        return 0;
    }

    this.getName = function () {
        return this.name;
    }
}

function Circle (radius) {
    this.name = 'circle';
    this.radius = radius;

    this.area = function () {
        return Math.PI * this.radius^2;
    }
}

Circle.prototype = new Shape();

const shape = new Shape();
const circle = new Circle(5);
// const rectangle = new Rectangle(10, 5);
// const square = new Square(6);

console.log(Circle.prototype.constructor);

console.log(`${shape.getName()}: ${shape.area()}`);
console.log(`${circle.getName()}: ${circle.area()}`);
// console.log(`${rectangle.getName()}: ${rectangle.area()}`);
// console.log(`${square.getName()}: ${square.area()}`);
