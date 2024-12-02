class Shape {
    #name;
    static count = 0;
    constructor(name) {
        if (this.constructor.name === 'Shape') {
            console.log("Нельзя создавать экземпляры абстрактного класса Shape");
        }
        this.#name = name;
        Shape.count++;
    }
    

    getArea() {
        console.log("Метод getArea() должен быть переопределен");
    }

    getName() {
        return this.#name;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}


const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);

console.log(`Фигура: ${rectangle.getName()}, Площадь: ${rectangle.getArea()}`);
console.log(`Фигура: ${circle.getName()}, Площадь: ${circle.getArea()}`);

console.log(`Количество созданных фигур: ${Shape.count}`);

const rectangle2 = new Rectangle(11, 6);
const rectangle3 = new Rectangle(12, 7);
console.log(`Количество созданных фигур: ${Shape.count}`);