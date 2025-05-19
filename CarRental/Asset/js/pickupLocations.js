const branches = [
  {
    name: "Dhaka Airport Branch",
    city: "Dhaka",
    hours: "9AM - 11PM",
    afterHours: "Key drop available at kiosk",
    amenities: ["Car Wash", "WiFi", "Restroom"]
  },
  {
    name: "Chittagong City Center",
    city: "Chittagong",
    hours: "8AM - 10PM",
    afterHours: "Call support for key drop",
    amenities: ["Restroom", "Waiting Lounge"]
  },
  {
    name: "Sylhet Airport Terminal",
    city: "Sylhet",
    hours: "10AM - 9PM",
    afterHours: "24/7 key drop outside gate",
    amenities: ["Car Wash", "WiFi"]
  }
];

function searchBranch() {
  const input = document.getElementById("search-box").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  const filtered = branches.filter(branch =>
    branch.city.toLowerCase().includes(input) ||
    branch.name.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>No branches found.</p>";
    return;
  }

  filtered.forEach(branch => {
    const card = document.createElement("div");
    card.className = "location-card";

    card.innerHTML = `
      <h3>${branch.name}</h3>
      <p><strong>Hours:</strong> ${branch.hours}</p>
      <p><strong>After-Hours:</strong> ${branch.afterHours}</p>
      <p><strong>Amenities:</strong></p>
      <ul>${branch.amenities.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    results.appendChild(card);
  });
}
