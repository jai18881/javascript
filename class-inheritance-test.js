class Shape {
    constructor() {
        this.name = 'shape';
    }

    area() {
        return 0;
    }

    getName() {
        return this.name;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = 'circle';
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius^2;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.name = 'rectangle';
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
        this.name = 'square';
    }
}

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
const square = new Square(6);

console.log(`${shape.getName()}: ${shape.area()}`);
console.log(`${circle.getName()}: ${circle.area()}`);
console.log(`${rectangle.getName()}: ${rectangle.area()}`);
console.log(`${square.getName()}: ${square.area()}`);
