/*--- 1. SETTINGS --- */

const API_URL = "https://anurella.github.io/json/planet.json";

// This list stays empty until the data arrives from the API
let planets = [];


/*--- 2. GRAB THE ELEMENTS WE NEED
   (every id here matches an id in index.html) ---*/


const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const searchError = document.getElementById("search-error");

const planetCard = document.getElementById("planet-card");
const notFoundCard = document.getElementById("not-found-card");
const factsSection = document.getElementById("facts");

const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetType = document.getElementById("planet-type");
const planetDescription = document.getElementById("planet-description");
const planetGravity = document.getElementById("planet-gravity");
const planetMass = document.getElementById("planet-mass");
const planetPeriod = document.getElementById("planet-period");
const planetTemperature = document.getElementById("planet-temperature");
const planetMoons = document.getElementById("planet-moons");
const planetDiameter = document.getElementById("planet-diameter");
const planetDistance = document.getElementById("planet-distance");


/*--- 3. GET THE DATA FROM THE API
   "async" and "await" mean: wait here until the data arrives,
   then carry on with the next line. ---*/

async function loadPlanets() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    planets = await response.json();

    // Show Earth first, like the design
    const earth = planets.find(function (planet) {
      return planet.name === "Earth";
    });
    showPlanet(earth || planets[0]);
  } catch (error) {
    console.error("Error loading planet data:", error);
  }
}


/*--- 4. SHOW ONE PLANET ON THE CARD ---*/

function showPlanet(planet) {
  planetImage.src = planet.image;
  planetImage.alt = planet.name;

  planetName.textContent = planet.name;
  planetType.textContent = planet.type;
  planetDescription.textContent = planet.description;

  planetGravity.textContent = planet.gravity.toFixed(1);
  planetMass.textContent = planet.mass;
  planetPeriod.textContent = planet.period;

  planetTemperature.textContent = planet.temperature;
  planetMoons.textContent = planet.moons;
  planetDiameter.textContent = planet.diameter;
  planetDistance.textContent = planet.distanceFromSun;

  // A planet was found, so hide the "No results" messages
  searchError.hidden = true;
  notFoundCard.hidden = true;

  planetCard.hidden = false;
  factsSection.hidden = false;
}


/*--- 5. NO RESULTS ---*/

function showNotFound() {
  planetCard.hidden = true;
  factsSection.hidden = true;

  notFoundCard.hidden = false;
  searchError.hidden = false;
}


/*--- 6. SEARCH ---*/

form.addEventListener("submit", function (event) {
  // Stops the page from reloading
  event.preventDefault();

  const term = input.value.trim().toLowerCase();

  // Do nothing if the box is empty or the data hasn't arrived yet
  if (term === "" || planets.length === 0) return;

  // Look for an exact name first, then a name that starts with what was typed
  const match =
    planets.find(function (planet) {
      return planet.name.toLowerCase() === term;
    }) ||
    planets.find(function (planet) {
      return planet.name.toLowerCase().startsWith(term);
    });

  if (match) {
    showPlanet(match);
  } else {
    showNotFound();
  }
});

// Hide the red "No results" text as soon as the person types again
input.addEventListener("input", function () {
  searchError.hidden = true;
});


/*--- 7. DARK / LIGHT TOGGLE ---*/

const toggle = document.getElementById("theme-toggle");
const toggleLabel = toggle.querySelector(".theme_toggle_label");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    toggleLabel.textContent = "Light";
    toggle.setAttribute("aria-label", "Switch to light theme");
  } else {
    document.body.classList.remove("dark");
    toggleLabel.textContent = "Dark";
    toggle.setAttribute("aria-label", "Switch to dark theme");
  }

  // Remember the choice for next time
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

toggle.addEventListener("click", function () {
  const isDark = document.body.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
});

// When the page loads: use the saved theme, otherwise start light (as in the mockup)
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
applyTheme(savedTheme === "dark" ? "dark" : "light");


/*--- 8. START ---*/

loadPlanets();
