let baseRate = 50;
let discountAmount = 0;
let promoApplied = false;

function calculatePrice() {
  const days = parseInt(document.getElementById("days").value);
  const baseCost = baseRate * days;
  const tax = baseCost * 0.10;
  const total = baseCost + tax - discountAmount;

  document.getElementById("rentalDays").textContent = days;
  document.getElementById("baseRate").textContent = baseRate * days;
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("discount").textContent = discountAmount.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}

function applyPromo() {
  const code = document.getElementById("promo").value.trim().toUpperCase();

  if (promoApplied) {
    alert("Promo code already applied.");
    return;
  }

  if (code === "SAVE10") {
    discountAmount = 10;
    promoApplied = true;
    alert("Promo code applied: $10 off!");
  } else {
    discountAmount = 0;
    alert("Invalid promo code.");
  }

  calculatePrice();
}

calculatePrice();
