// ----------------
// Mission 1: Age Checker
// ----------------
console.log("✅ Script loaded!");

const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = Number(ageInput.value);
  console.log("Entered age:", age);

  if (age >= 18) {
    ageResult.textContent = "✅ You are an adult.";
  } else if (age > 0) {
    ageResult.textContent = "🧒 You are a minor.";
  } else {
    ageResult.textContent = "⚠️ Please enter a valid age.";
  }
});

// ----------------
// Mission 2: Functions
// ----------------

// Function to format a name
function formatName(name) {
  return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
}

document.getElementById("formatNameBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  document.getElementById("nameResult").textContent = formatName(name);
});

// Function to calculate total
function calculateTotal(a, b) {
  return a + b;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  document.getElementById("calcResult").textContent = "Total = " + calculateTotal(num1, num2);
});

// Toggle content function
const toggleBtn = document.getElementById("toggleBtn");
const toggleMsg = document.getElementById("toggleMsg");

toggleBtn.addEventListener("click", () => {
  if (toggleMsg.style.display === "none") {
    toggleMsg.style.display = "block";
  } else {
    toggleMsg.style.display = "none";
  }
});