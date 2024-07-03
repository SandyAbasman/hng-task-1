// let time = document.getElementById("time");
// let today = document.getElementById("day");

// Function to display the current day of the week
function displayCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const currentDay = days[now.getUTCDay()];
  document.getElementById("day").textContent = `Current Day: ${currentDay}`;
}

// Call functions on page load
window.onload = function () {
  displayCurrentTimeUTC();
  displayCurrentDay();
};

function displayCurrentTimeUTC() {
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const second = String(now.getUTCSeconds()).padStart(2, "0");
  const currentTimeUTC = `${hours}:${minutes}:${second}`;
  document.getElementById(
    "time"
  ).textContent = `Current Time in UTC: ${currentTimeUTC}`;
}

// Call the function to display the time initially
displayCurrentTimeUTC();

// Optionally, update the time every minute
setInterval(displayCurrentTimeUTC, 6);
