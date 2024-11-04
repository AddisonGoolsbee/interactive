function setGooseSpeech(text) {
    const speechBox = document.getElementById("speech-box")
    speechBox.innerText = text;
    speechBox.classList.add("show");
  }
  
  // Example usage
setGooseSpeech("QUACK! What are you trying to decide?");

  function beginDecision() {
    const actionButton = document.getElementById("action-button");
    const inputContainer = document.getElementById("input-container");
  
    // Change Quimbus's speech text
    setGooseSpeech("Let's see what you're choosing...");
  
    // Update the input container content
    inputContainer.innerHTML = `
      <input type="range" id="decision-slider" min="1" max="10" value="5" />
      <button id="action-button" onclick="nextDecision()">Next</button>
    `;
  }
  
  function nextDecision() {
    const sliderValue = document.getElementById("decision-slider").value;
  
    // Update Quimbus's speech based on slider value (example)
    setGooseSpeech(`You've chosen ${sliderValue}. Moving on!`);
  }