const steps = [
  "Step 1: Preparing the Kite Body - Use a large sheet of old newspaper or gift wrap. Cut it into a diamond shape about 40 cm wide and 60 cm tall.",
  "Step 2: Creating the Frame - Use two thin bamboo sticks or straws. Cross them in a plus shape and glue them onto the paper.",
  "Step 3: Adding the String - Punch holes near the top and bottom of the kite and tie a cotton thread securely.",
  "Step 4: Creating the Tail - Use strips of scrap fabric or plastic bags. Attach them to the bottom of the kite as a tail.",
  "Step 5: Decorating the Kite - Use markers, paints, or stickers to decorate your kite and make it festive!"
];

const welcome = document.getElementById("welcome");
const tutorial = document.getElementById("tutorial");
const stepText = document.getElementById("stepText");
const nextStep = document.getElementById("nextStep");
const completeStep = document.getElementById("completeStep");
const popup = document.getElementById("popup");
const sky = document.getElementById("sky");

let currentStep = 0;

// Start tutorial
document.getElementById("startTutorial").addEventListener("click", () => {
  welcome.style.display = "none";
  tutorial.style.display = "flex";
  showStep();
});

// Show each step with typewriter effect
function showStep() {
  stepText.textContent = "";
  nextStep.style.display = "none";
  completeStep.style.display = "none";
  let i = 0;
  const interval = setInterval(() => {
    stepText.textContent += steps[currentStep][i];
    i++;
    if (i === steps[currentStep].length) {
      clearInterval(interval);
      if (currentStep < steps.length - 1) {
        nextStep.style.display = "block";
      } else {
        completeStep.style.display = "block";
      }
    }
  }, 50);
}

// Handle Next button
nextStep.addEventListener("click", () => {
  currentStep++;
  showStep();
});

// Handle Complete button
completeStep.addEventListener("click", () => {
  tutorial.style.display = "none";
  popup.style.display = "block";
});

// Fly Kites Button
document.getElementById("flyButton").addEventListener("click", () => {
  popup.style.display = "none";
  sky.style.display = "block";

  // Create multiple kites flying from top-left
  for (let i = 0; i < 5; i++) {
    const kite = document.createElement("div");
    kite.classList.add("kite");
    kite.style.left = `${Math.random() * 100}vw`; // Random starting point
    kite.style.top = `-${Math.random() * 50}vh`; // Start above the screen

    // Add some text to the kite
    const text = document.createElement("p");
    text.textContent = "Amit Dahiya";
    kite.appendChild(text);

    sky.appendChild(kite);
  }
});



document.getElementById("flyButton").addEventListener("click", () => {
  popup.style.display = "none";
  sky.style.display = "block";

  // Create first kite
  const kite1 = document.createElement("div");
  kite1.classList.add("kite");
  kite1.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite1.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  sky.appendChild(kite1);

  // Create second kite
  const kite2 = document.createElement("div");
  kite2.classList.add("kite");
  kite2.id = "kite2"; // Different id for second kite
  kite2.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite2.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  sky.appendChild(kite2);

  // Create third kite
  const kite3 = document.createElement("div");
  kite3.classList.add("kite");
  kite3.id = "kite3"; // Different id for third kite
  kite3.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite3.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  sky.appendChild(kite3);
});


document.getElementById("flyButton").addEventListener("click", () => {
  popup.style.display = "none";
  sky.style.display = "block";

  // Create first kite with tail
  const kite1 = document.createElement("div");
  kite1.classList.add("kite");
  kite1.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite1.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  const tail1 = document.createElement("div");
  tail1.classList.add("tail");
  kite1.appendChild(tail1);
  sky.appendChild(kite1);

  // Create second kite with tail
  const kite2 = document.createElement("div");
  kite2.classList.add("kite");
  kite2.id = "kite2"; // Different id for second kite
  kite2.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite2.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  const tail2 = document.createElement("div");
  tail2.classList.add("tail");
  kite2.appendChild(tail2);
  sky.appendChild(kite2);

  // Create third kite with tail
  const kite3 = document.createElement("div");
  kite3.classList.add("kite");
  kite3.id = "kite3"; // Different id for third kite
  kite3.style.left = `${Math.random() * 100}vw`; // Random starting point
  kite3.style.top = `-${Math.random() * 50}vh`; // Start above the screen
  const tail3 = document.createElement("div");
  tail3.classList.add("tail");
  kite3.appendChild(tail3);
  sky.appendChild(kite3);
});
