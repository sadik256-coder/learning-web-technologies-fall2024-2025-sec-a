function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function filterRecords(input) {
  const filterText = input.value.toLowerCase();
  const items = document.querySelectorAll('.record-list li');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterText) ? '' : 'none';
  });
}

function performBulkAction() {
  const checkboxes = document.querySelectorAll('.bulk-action');
  const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (!anyChecked) {
    alert("Please select at least one user to perform bulk action.");
  } else {
    alert("Bulk action performed successfully!");
   
  }
}
