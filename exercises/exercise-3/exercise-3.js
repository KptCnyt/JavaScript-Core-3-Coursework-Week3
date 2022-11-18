let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printOrder() {
  console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");
  order.forEach(({ itemName, quantity, unitPrice }) => {
    console.log(
      quantity.toString().padEnd(8) + itemName.padEnd(20) + unitPrice
    );
  });
  const totalPrice = order.reduce(
    (sum, { quantity, unitPrice }) => sum + quantity * unitPrice,
    0
  );

  console.log("\n" + "Total: " + totalPrice);
}
printOrder();
//

// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.29
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.47
