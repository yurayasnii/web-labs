class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 4, 6);

console.log(`Circle - Color: ${circle.color}, Area: ${circle.area().toFixed(2)}, Perimeter: ${circle.perimeter().toFixed(2)}`);
console.log(`Rectangle - Color: ${rectangle.color}, Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
