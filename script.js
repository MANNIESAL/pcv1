const menuData = [
  { id: 1, name: "Fried Rice", price: 30 },
  { id: 2, name: "Chicken Burger", price: 25 },
  { id: 3, name: "Cassava leaves Rice", price: 40 },
  { id: 4, name: "Ginger Bear", price: 10 },
  { id: 5, name: "Grafton cold Water", price: 5 }
];

function displayMenu() {
  const menuDiv = document.getElementById("menu");
  menuData.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <input type="number" min="0" value="0" id="item-${item.id}" />
    `;
    menuDiv.appendChild(div);
  });
}

function placeOrder() {
  let total = 0;
  const orderDiv = document.getElementById("order");
  orderDiv.innerHTML = "";

  menuData.forEach(item => {
    const qty = parseInt(document.getElementById(`item-${item.id}`).value);
    if (qty > 0) {
      const cost = item.price * qty;
      total += cost;

      const orderItem = document.createElement("div");
      orderItem.innerText = `${item.name} x${qty} = $${cost}`;
      orderDiv.appendChild(orderItem);
    }
  });

  document.getElementById("total").innerText = `SLE Total: $${total}`;
}

window.onload = displayMenu;
