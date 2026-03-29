function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.displayInfo = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
};

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.model} - рух розпочато`);
};

const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('BMW', 'X5', 2022);
const car3 = new Car('Tesla', 'Model 3', 2023);

car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();

car3.displayInfo();
car3.drive();
