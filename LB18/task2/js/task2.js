class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  study() {
    console.log(
      `Студент ${this.name}, вік ${this.age} років, навчається на оцінку ${this.grade}.`
    );
  }
}

const student1 = new Student('Олег', 19, 90);
const student2 = new Student('Марія', 20, 75);
const student3 = new Student('Іван', 18, 60);

student1.study();
student2.study();
student3.study();
