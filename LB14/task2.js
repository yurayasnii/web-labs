let numbers = [2, 3, 4, 5];

let productFor = 1;
for (let i = 0; i < numbers.length; i++) {
    productFor *= numbers[i];
}
console.log("for:", productFor);

let productWhile = 1;
let i = 0;
while (i < numbers.length) {
    productWhile *= numbers[i];
    i++;
}
console.log("while:", productWhile);
