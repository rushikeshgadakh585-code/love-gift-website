const PASSWORD = "rushisneha";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "❌ Wrong password";
  }
}

function loadImage(event) {
  const img = document.getElementById("preview");
  img.src = URL.createObjectURL(event.target.files[0]);
}
