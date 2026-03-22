const age = Number(prompt("Скільки вам років?"));
const isAdult = age >= 18;

if (isAdult) {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще надто молоді");
}
