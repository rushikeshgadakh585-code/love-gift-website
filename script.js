// ✅ PASSWORD LOGIC
const correctPassword = "rushisneha";

document.getElementById("enter-btn").addEventListener("click", () => {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === correctPassword) {
    // Hide password screen
    document.getElementById("password-screen").classList.add("hidden");
    // Show main card
    document.getElementById("main-card").classList.remove("hidden");
  } else {
    errorMsg.textContent = "❌ Wrong password, try again!";
  }
});

// ✅ SHOW MESSAGE LOGIC
function showMessage() {
  document.getElementById("msg").classList.remove("hidden");
}
