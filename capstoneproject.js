/* =========================================================
   1. SETTINGS
   ========================================================= */

const API_URL = "https://anurella.github.io/json/planet.json";

// This list stays empty until the data arrives from the API
let planets = [];


/* =========================================================
   2. GRAB THE ELEMENTS WE NEED
   (every id here matches an id in index.html)
   ========================================================= */

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


/* =========================================================
   3. GET THE DATA FROM THE API
   "async" and "await" mean: wait here until the data arrives,
   then carry on with the next line.
   ========================================================= */

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


/* =========================================================
   4. SHOW ONE PLANET ON THE CARD
   ========================================================= */

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