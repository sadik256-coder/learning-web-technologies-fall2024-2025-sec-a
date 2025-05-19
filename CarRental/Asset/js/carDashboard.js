function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

function bookCar(carName, timeInputId) {
  try {
    const time = document.getElementById(timeInputId).value;
    if (!time) throw new Error("Booking time not selected");
    alert(`Car "${carName}" booked for ${time}`);
  } catch (error) {
    window.location.href = "../view/error.html?type=booking";
  }
}

function rentCar() {
  try {
    const car = document.getElementById("rentCarName").value;
    const time = document.getElementById("rentTime").value;
    if (!time) throw new Error("Rent time not selected");
    alert(`You rented ${car} at ${time}`);
  } catch (error) {
    window.location.href = "../view/error.html?type=rent";
  }
}

function returnCar() {
  try {
    const car = document.getElementById("returnCarName").value;
    const time = document.getElementById("returnTime").value;
    if (!time) throw new Error("Return time not selected");
    alert(`You returned ${car} at ${time}`);
  } catch (error) {
    window.location.href = "../view/error.html?type=return";
  }
}
