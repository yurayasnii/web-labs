const a = Number(prompt("Введіть сторону a:"));
const b = Number(prompt("Введіть сторону b:"));
const c = Number(prompt("Введіть сторону c:"));

const valid =
  a > 0 && b > 0 && c > 0 &&
  a + b > c && a + c > b && b + c > a;

if (!valid) {
  console.log("Incorrect data");
} else {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(`Площа трикутника: ${area.toFixed(3)}`);

  const sides = [a, b, c].sort((x, y) => x - y);
  const isRight = Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-9;
  console.log(`Прямокутний трикутник: ${isRight}`);
}
