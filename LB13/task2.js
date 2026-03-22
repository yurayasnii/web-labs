const num = Number(prompt("Введіть число:"));

if (num > 0 && num % 2 === 0) {
  console.log(`${num} — парне додатне`);
} else {
  console.log(`${num} — не є парним додатним`);
}

if (num % 7 === 0) {
  console.log(`${num} — кратне 7`);
} else {
  console.log(`${num} — не кратне 7`);
}
