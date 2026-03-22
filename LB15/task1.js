const student = {
  name: 'John',
  age: 20,
  gender: 'male'
};

const { name: studentName, age: studentAge, gender: studentGender } = student;
console.log('Task 1.1:', studentName, studentAge, studentGender);

const car = {
  engine: {
    cylinders: 4,
    horsepower: 150
  }
};

const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;
console.log('Task 1.2:', engineCylinders, engineHorsepower);

const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford'
};

const { title: bookTitle, author: bookAuthor } = book;
console.log('Task 1.3:', bookTitle, bookAuthor);
