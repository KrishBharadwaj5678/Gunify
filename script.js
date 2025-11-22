const gunDatabase = {
  krsvMarker: {
    title: "KRISS Vector",
    description:
      "A modern submachine gun known for its low recoil and high rate of fire.",
    specs: ["Caliber: 9mm", "Range: 120m", "Fire Mode: Semi-Auto / Burst"],
    fire: "./sounds/KRSV.mp3",
    reload: "./reload/KRSV.mp3",
  },

  ak47Marker: {
    title: "AK-47",
    description:
      "Legendary Soviet assault rifle known for its durability and reliability in harsh conditions.",
    specs: [
      "Caliber: 7.62×39mm",
      "Range: 350m",
      "Fire Mode: Semi-Auto / Full-Auto",
    ],
    fire: "./sounds/AK47.mp3",
    reload: "./reload/AK47.mp3",
  },
  smithMarker: {
    title: "Smith & Wesson M625",
    description:
      "Modern semi-automatic pistol used by law enforcement and civilians.",
    specs: ["Caliber: 9×19mm", "Range: 50m", "Fire Mode: Semi-Auto"],
    fire: "./sounds/Smith.mp3",
    reload: "./reload/Smith.mp3",
  },
  mosinMarker: {
    title: "Mosin Nagant",
    description:
      "A five-shot military rifle used by the armed forces of the Russian Empire.",
    specs: ["Caliber: 7.62×54mm", "Range: 500m", "Fire Mode: Bolt-Action"],
    fire: "./sounds/Mosin.mp3",
    reload: "./reload/Mosin.mp3",
  },
  uziMarker: {
    title: "Uzi",
    description:
      "A compact Israeli open-bolt submachine gun, widely used by military and security forces worldwide.",
    specs: [
      "Caliber: 9×19mm",
      "Range: 200m",
      "Fire Mode: Full-Auto / Semi-Auto",
    ],
    fire: "./sounds/Uzi.mp3",
    reload: "./reload/Uzi.mp3",
  },
  sigsauerMarker: {
    title: "Sig Sauer",
    description:
      "A highly reliable pistol, known for its durability. Its smooth trigger pull make it a favorite for civilian shooters.",
    specs: ["Caliber: 9×19mm", "Range: 50m", "Fire Mode: Semi-Auto"],
    fire: "./sounds/SigSauer.mp3",
    reload: "./reload/SigSauer.mp3",
  },
};

let fireAudio = new Audio(); // fire auio
let reloadAudio = new Audio(); // reload audio

const infoPanel = document.getElementById("infoPanel");
const gunTitle = document.getElementById("gunTitle");
const gunDescription = document.getElementById("gunDescription");
const spec1 = document.getElementById("spec1");
const spec2 = document.getElementById("spec2");
const spec3 = document.getElementById("spec3");
const infoButton = document.querySelector(".info-icon");
const shootButton = document.querySelector(".shoot-icon");
const reloadButton = document.querySelector(".reload-icon");
const closeButton = document.querySelector(".close-wrapper");

infoPanel.style.display = "none"; // Hide the info panel initially

infoButton.addEventListener("click", () => {
  infoPanel.classList.add("visible");
});

shootButton.addEventListener("click", () => {
  fireAudio.play();
});

reloadButton.addEventListener("click", () => {
  reloadAudio.play();
});

closeButton.addEventListener("click", () => {
  hideInfoPanel();
});

// Function to update the info panel
function updateInfoPanel(gunId) {
  const gunData = gunDatabase[gunId];

  if (gunData) {
    gunTitle.textContent = gunData.title;
    gunDescription.textContent = gunData.description;
    spec1.textContent = gunData.specs[0];
    spec2.textContent = gunData.specs[1];
    spec3.textContent = gunData.specs[2];
    fireAudio.src = gunData.fire;
    reloadAudio.src = gunData.reload;
    infoPanel.classList.add("visible");
  }
}

// Function to hide the info panel
function hideInfoPanel() {
  infoPanel.classList.remove("visible");
}

// Function to remove the info
function hideInfo() {
  gunTitle.textContent = null;
  gunDescription.textContent = null;
  spec1.textContent = null;
  spec2.textContent = null;
  spec3.textContent = null;
  fireAudio.src = "";
  reloadAudio.src = "";
  infoPanel.style.display = "none";
}

Object.keys(gunDatabase).forEach((gunId) => {
  let marker = document.getElementById(gunId);

  marker.addEventListener("markerFound", () => {
    infoPanel.style.display = "block";
    updateInfoPanel(gunId);
  });

  marker.addEventListener("markerLost", () => {
    hideInfoPanel();
    hideInfo();
  });
});
