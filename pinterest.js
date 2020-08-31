function ordered_shopping(products, shopping_list) {
  let result = 0;
  let numOfInitVisited = 0;
  let allDepartment = new Set();
  let shoppingListVisited = [];

  for (let i = 0; i < shopping_list.length; i++) {
    for (let p = 0; p < products.length; p++) {
      if (shopping_list[i] === products[p][0]) {
        allDepartment.add(products[p][1]);
        shoppingListVisited.push(products[p][1]);
      }
    }
  }

  for (let i = 0; i < shoppingListVisited.length; i++) {
    if (shoppingListVisited[i] !== shoppingListVisited[i + 1]) {
      numOfInitVisited++;
    }
  }

  result = Math.abs(allDepartment.size - numOfInitVisited);
  return result;
}
let products = [
  ["Cheese", "Dairy"],
  ["Carrots", "Produce"],
  ["Potatoes", "Produce"],
  ["CannedCorn", "Pantry"],
  ["Romaine", "Produce"],
  ["Yogurt", "Dairy"],
  ["Flour", "Pantry"],
  ["Iceberg", "Produce"],
  ["Coffee", "Pantry"],
  ["Pasta", "Pantry"],
  ["Milk", "Dairy"],
  ["Grapes", "Produce"],
  ["PastaSauce", "Pantry"],
];
let shopping_list = ["Cheese", "Potatoes", "Grapes", "CannedCorn"];
let shopping_list_2 = ["Milk", "Flour", "Yogurt", "PastaSauce"];
let shopping_list_3 = [
  "Grapes",
  "Milk",
  "Coffee",
  "Flour",
  "Cheese",
  "Carrots",
];
console.log(ordered_shopping(products, shopping_list_3));
