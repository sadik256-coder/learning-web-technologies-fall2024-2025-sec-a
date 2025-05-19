const roleMap = {
  user: "See only permitted features in navigation.",
  editor: "See and edit specific features.",
  admin: "Assign roles (Admin/Editor/User) to accounts."
};

function assignRole() {
  const user = document.getElementById('userSelect').value;
  const role = document.getElementById('roleSelect').value;
  const display = document.getElementById('userView');

  display.textContent = `${user} is assigned the role of "${role}". ${roleMap[role]}`;
}
