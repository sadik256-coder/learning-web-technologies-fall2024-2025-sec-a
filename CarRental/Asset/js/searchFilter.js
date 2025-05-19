document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { title: "Toyota Corolla", category: "sedan", startTime: "2025-05-05T09:00", deadline: "2025-05-07T17:00" },
    { title: "Honda Civic", category: "sedan", startTime: "2025-05-06T10:00", deadline: "2025-05-08T16:30" },
    { title: "Hyundai Tucson", category: "suv", startTime: "2025-05-05T14:00", deadline: "2025-05-09T11:00" },
    { title: "Toyota Fortuner", category: "suv", startTime: "2025-05-07T08:30", deadline: "2025-05-10T18:00" },
    { title: "Suzuki Swift", category: "hatchback", startTime: "2025-05-06T13:00", deadline: "2025-05-10T15:00" },
    { title: "Toyota Aqua", category: "hatchback", startTime: "2025-05-08T09:00", deadline: "2025-05-11T12:00" },
    { title: "BMW 7 Series", category: "luxury", startTime: "2025-05-09T11:00", deadline: "2025-05-12T16:00" },
    { title: "Mercedes-Benz S-Class", category: "luxury", startTime: "2025-05-09T10:00", deadline: "2025-05-09T11:00" },
    { title: "Audi A8", category: "luxury", startTime: "2025-05-10T15:00", deadline: "2025-05-13T15:30" }
  ];

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchButton = document.getElementById("searchButton");
  const resultsList = document.getElementById("resultsList");

  function renderResults(filteredData) {
    resultsList.innerHTML = "";

    if (filteredData.length === 0) {
      resultsList.innerHTML = "<p>No results found.</p>";
      return;
    }

    filteredData.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("result-item");

      div.innerHTML = `
        <strong>${item.title}</strong><br/>
        <span>Category: ${item.category}</span><br/>
        <span>Available From: ${new Date(item.startTime).toLocaleString()}</span><br/>
        <span>Return By: ${new Date(item.deadline).toLocaleString()}</span>
      `;
      resultsList.appendChild(div);
    });
  }

  function filterData() {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = data.filter(item => {
      const matchesKeyword = item.title.toLowerCase().includes(keyword);
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      return matchesKeyword && matchesCategory;
    });

    renderResults(filtered);
  }

  searchButton.addEventListener("click", filterData);
  searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") filterData();
  });
  categoryFilter.addEventListener("change", filterData);

  renderResults(data);
});

function goBack() {
  window.location.href = "../view/carDashboard.html";
}
