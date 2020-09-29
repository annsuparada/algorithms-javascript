// Problem Statement
// You need to pick up some food for a camping trip. To save time in the store, you decide to optimize your shopping by only visiting each department once instead of simply following your list. You’d like to know how much time this will save you.

// You will be given a list of pairs of products and what departments they are in. You will also be given a shopping list. Given these, return the difference in the number of department visits needed if you optimize your shopping. For example, if it would take 5 department visits by following your shopping list in order, and 2 if you optimize your shopping by only visiting each department once, return 3.

// Any product in your shopping list will be in the product/department pairs. Items will only appear on the shopping list once. Products will only appear in one department.

// Examples
// For example, if the store has the following four products:

// # Product      Department
//   Cheese       Dairy
//   Yogurt       Dairy
//   Coffee       Pantry
//   Pasta        Pantry
// If your shopping list is Cheese, Coffee, Yogurt, Pasta, if you follow that list in order, you would make 4 department visits (Dairy, Pantry, Dairy, Pantry). However, with optimal ordering you could get these items with 2 department visits. You would return 2 (4 - 2 = 2)

// However, if your shopping list was Cheese, Coffee, Pasta, following that list in order would result in 3 department visits. Optimally, you would get the items in two department visits, so you would return 1 (3 - 2 = 1)

function ordered_shopping(products, shopping_list) {
  let result = 0;
  let numOfInitVisits = 0;
  let allDepartment = new Set();
  let shoppingListVisits = [];

  //find all departments for shopping list
  //find list of department visits folling the shopping list
  for (let i = 0; i < shopping_list.length; i++) {
    for (let p = 0; p < products.length; p++) {
      if (shopping_list[i] === products[p][0]) {
        allDepartment.add(products[p][1]);
        shoppingListVisits.push(products[p][1]);
      }
    }
  }

  //count the visited
  for (let i = 0; i < shoppingListVisits.length; i++) {
    if (shoppingListVisits[i] !== shoppingListVisits[i + 1]) {
      numOfInitVisits++;
    }
  }

  // find the number of department visits are saved by optimal shopping
  result = Math.abs(allDepartment.size - numOfInitVisits);
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
let shopping_list = ["Cheese", "Potatoes", "Grapes", "CannedCorn"]; //0
let shopping_list_2 = ["Milk", "Flour", "Yogurt", "PastaSauce"]; // 2
let shopping_list_3 = [
  "Grapes",
  "Milk",
  "Coffee",
  "Flour",
  "Cheese",
  "Carrots",
]; //2
console.log(ordered_shopping(products, shopping_list_3));
