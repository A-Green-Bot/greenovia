// Initialize AOS
AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
});

// Teachable Machine model URL
const URL = "https://teachablemachine.withgoogle.com/models/BjdA3e2S2/";
let model, webcam, labelContainer, maxPredictions;
let isZeeboActive = false;

// Toggle Zeebo on/off
async function toggleZeebo() {
    if (isZeeboActive) {
        stopZeebo();
    } else {
        await startZeebo();
    }
}

// Start Zeebo
async function startZeebo() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Set up the webcam
    webcam = new tmImage.Webcam(400, 400, true);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        const labelDiv = document.createElement("div");
        labelDiv.innerHTML = `<span></span><div class="progress-bar"><div class="progress"></div></div>`;
        labelContainer.appendChild(labelDiv);
    }

    // Update button text and state
    document.getElementById("startButton").textContent = "Stop Zeebo";
    isZeeboActive = true;
}

// Stop Zeebo
function stopZeebo() {
    webcam.stop();
    document.getElementById("webcam-container").innerHTML = "";
    document.getElementById("label-container").innerHTML = "";
    document.getElementById("startButton").textContent = "Start Zeebo";
    isZeeboActive = false;
}

async function loop() {
    webcam.update();
    await predict();
    if (isZeeboActive) {
        window.requestAnimationFrame(loop);
    }
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className;
        const probability = prediction[i].probability.toFixed(2);
        const percent = (probability * 100).toFixed(0);
        
        const labelDiv = labelContainer.childNodes[i];
        labelDiv.querySelector("span").textContent = `${classPrediction}: ${percent}%`;
        labelDiv.querySelector(".progress").style.width = `${percent}%`;
    }
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
});
