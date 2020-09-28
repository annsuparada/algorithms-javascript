function bonAppetit(bill, k, b) {
  const fairlyCost = (bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
  console.log(fairlyCost < b ? b - fairlyCost : "Bon Appetit");
}
