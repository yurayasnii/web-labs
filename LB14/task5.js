let shoppingList = [
    { name: "Milk", quantity: 2, bought: false },
    { name: "Bread", quantity: 1, bought: true },
    { name: "Eggs", quantity: 12, bought: false },
    { name: "Butter", quantity: 1, bought: true },
];

function printList(list) {
    const notBought = list.filter(item => !item.bought);
    const bought = list.filter(item => item.bought);
    console.log("=== Shopping List ===");
    console.log("-- Not bought --");
    notBought.forEach(item => console.log(`${item.name}: ${item.quantity}`));
    console.log("-- Bought --");
    bought.forEach(item => console.log(`${item.name}: ${item.quantity}`));
}

function addItem(list, name, quantity) {
    const existing = list.find(item => item.name === name);
    if (existing) {
        existing.quantity += quantity;
    } else {
        list.push({ name, quantity, bought: false });
    }
}

function buyItem(list, name) {
    const item = list.find(item => item.name === name);
    if (item) {
        item.bought = true;
    }
}

addItem(shoppingList, "Milk", 3);
addItem(shoppingList, "Cheese", 2);
buyItem(shoppingList, "Eggs");
printList(shoppingList);
