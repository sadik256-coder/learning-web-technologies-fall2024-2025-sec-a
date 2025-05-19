document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const captcha = document.getElementById("captcha").value;

  if (captcha !== "1234") {
    alert("Wrong CAPTCHA! Please try again.");
    return;
  }

  
  document.getElementById("confirmation").style.display = "block";


  this.reset();
});
