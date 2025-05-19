const users = [
  { email: "admin@example.com", password: "admin123", role: "Admin" },
  { email: "editor@example.com", password: "editor123", role: "Editor" },
  { email: "user@example.com", password: "user123", role: "User" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    message.style.color = "green";
    message.textContent = `Login successful! Role: ${user.role}`;

  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
});
