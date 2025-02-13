// Initialize AOS
AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
});

// Teachable Machine model URL
const URL = "https://teachablemachine.withgoogle.com/models/BjdA3e2S2/";
let model, webcam, labelContainer, maxPredictions;

// Load the model and set up the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Set up the webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(400, 400, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }

    // Update button text
    document.getElementById("startButton").textContent = "Stop Zeebo";
    document.getElementById("startButton").onclick = stopZeebo;
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(2) + "%";
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

function stopZeebo() {
    webcam.stop();
    document.getElementById("webcam-container").innerHTML = "";
    document.getElementById("label-container").innerHTML = "";
    document.getElementById("startButton").textContent = "Start Zeebo";
    document.getElementById("startButton").onclick = init;
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
});
