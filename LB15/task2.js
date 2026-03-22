const numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log('Task 2.1:', firstNumber, secondNumber, thirdNumber);

const fruits = ['apple', 'orange', 'banana'];
const [firstFruit, ...restFruits] = fruits;
console.log('Task 2.2:', firstFruit, restFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log('Task 2.3:', combinedArray);
