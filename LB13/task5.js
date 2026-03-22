const hour = new Date().getHours();

if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if (hour < 11) {
  console.log("Доброго ранку");
} else if (hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}

switch (true) {
  case hour >= 23 || hour < 5:
    console.log("Доброї ночі");
    break;
  case hour < 11:
    console.log("Доброго ранку");
    break;
  case hour < 17:
    console.log("Доброго дня");
    break;
  default:
    console.log("Доброго вечора");
}
