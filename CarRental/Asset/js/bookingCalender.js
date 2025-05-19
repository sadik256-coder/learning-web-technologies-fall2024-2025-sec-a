window.onload = function () {
  showTab("viewCars");
};

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });
  const tab = document.getElementById(tabId);
  if (tab) tab.style.display = "block";
}

function bookCar(carName, inputId) {
  const time = document.getElementById(inputId).value;
  if (!time) {
    alert("Please select a booking time.");
    return;
  }
  alert(`Booked ${carName} at ${time}`);
}

function rentCar() {
  const car = document.getElementById("rentCarName").value;
  const time = document.getElementById("rentTime").value;
  if (!time) {
    alert("Please select a rent time.");
    return;
  }
  alert(`Rented ${car} at ${time}`);
}

function returnCar() {
  const car = document.getElementById("returnCarName").value;
  const time = document.getElementById("returnTime").value;
  if (!time) {
    alert("Please select a return time.");
    return;
  }
  alert(`Returned ${car} at ${time}`);
}
