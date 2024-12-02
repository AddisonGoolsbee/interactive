const foodChoices = [
  {
    question: "How tasty is {a}?",
    type: "slider",
    sliderLabels: ["BLEH!", "DEEEELICIOUS"],
    weights: [-0.8, 0.8], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one looks more appetizing?",
    type: "choice",
    choices: ["{a}", "roughly equal", "{b}"],
    weights: [0.6, 0, -0.6], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How filling is {b}?",
    type: "slider",
    sliderLabels: ["Still hungry", "Completely stuffed"],
    weights: [-0.7, 0.7], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one smells better?",
    type: "choice",
    choices: ["{a}", "roughly equal", "{b}"],
    weights: [0.5, 0, -0.5], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "If you had to eat it every day for a week, which one wins?",
    type: "choice",
    choices: ["{a}", "depends on the mood", "{b}"],
    weights: [0.7, 0, -0.7], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How fun is it to eat {a}?",
    type: "slider",
    sliderLabels: ["No fun", "So satisfying!"],
    weights: [-0.5, 0.5], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one would impress someone else at the table?",
    type: "choice",
    choices: ["{a}", "both are equal", "{b}"],
    weights: [0.4, 0, -0.4], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How much effort does {b} take to eat?",
    type: "slider",
    sliderLabels: ["Effortless", "A full workout"],
    weights: [0.3, -0.3], // Slider: A-weighted to B-weighted
  },
  {
    question: "Which one feels healthier?",
    type: "choice",
    choices: ["{a}", "hard to say", "{b}"],
    weights: [0.6, 0, -0.6], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How big is {a}? (Think: one serving.)",
    type: "slider",
    sliderLabels: ["Tiny snack", "Endless feast"],
    weights: [-0.4, 0.4], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one has a better texture?",
    type: "choice",
    choices: ["{a}", "equally good", "{b}"],
    weights: [0.5, 0, -0.5], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "Would you be able to share {b} with someone?",
    type: "slider",
    sliderLabels: ["Selfish choice", "Sharing is caring"],
    weights: [0.2, -0.2], // Slider: A-weighted to B-weighted
  },
  {
    question: "Which one is easier to eat on the go?",
    type: "choice",
    choices: ["{a}", "neither is practical", "{b}"],
    weights: [0.3, 0, -0.3], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How messy is {a}?",
    type: "slider",
    sliderLabels: ["Not messy", "Total disaster"],
    weights: [-0.6, 0.6], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one would taste better as leftovers?",
    type: "choice",
    choices: ["{a}", "hard to decide", "{b}"],
    weights: [0.4, 0, -0.4], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How much will you regret eating {b}?",
    type: "slider",
    sliderLabels: ["No regrets", "Instant regret"],
    weights: [0.7, -0.7], // Slider: A-weighted to B-weighted
  },
  {
    question: "Which one is better suited for a casual meal?",
    type: "choice",
    choices: ["{a}", "depends on the setting", "{b}"],
    weights: [0.5, 0, -0.5], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How crunchy is {a}?",
    type: "slider",
    sliderLabels: ["Soft and squishy", "CRUNCH!"],
    weights: [-0.3, 0.3], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one feels like a better splurge?",
    type: "choice",
    choices: ["{a}", "both feel indulgent", "{b}"],
    weights: [0.8, 0, -0.8], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How likely is {b} to leave you wishing you’d picked it?",
    type: "slider",
    sliderLabels: ["No envy", "Why didn’t I choose this?!"],
    weights: [0.5, -0.5], // Slider: A-weighted to B-weighted
  },
];

// List of Quimbus Quips
const quimbusQuips = [
  "That's hilarious, I'm quacking up.",
  "Wow.",
  "HONK.",
  "Good choice.",
  "Do you ever wonder what geese think about?",
  "Quimply marvelous.",
  "This one's a feather-ruffler!",
  "Quack-tastic choice!",
  "HONK HONK, I agree.",
  "Imagine this: a goose in a hat.\n\n Huh? Oh, sorry, I got distracted",
  "Honk if you're hungry. Oh wait, that's me.",
  "Are we sure this isn't about breadcrumbs?",
  "Quimcredible timing.",
  "That was a fowl decision.",
  "A goose's wisdom is unmatched.",
  "I feel like you winged that one",
];

document.addEventListener("DOMContentLoaded", function () {
  const confettiInstance = new JSConfetti();

  function launchConfetti(good) {
    confettiInstance.addConfetti({
      emojis: ["🎉", good ? "🎊" : "😡"],
      confettiNumber: 200,
      confettiColors: ["#ff0000", "#00ff00", "#0000ff"],
    });
  }

  function setGooseSpeech(text) {
    const speechBox = document.getElementById("speech-box");
    speechBox.classList.remove("show");
    speechBox.style.transform = "translateX(-50%) scale(0.8)";
    speechBox.style.opacity = "0";

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Update the text and restore size
      speechBox.innerText = text;
      speechBox.style.transform = "translateX(-50%) scale(1)";
      speechBox.style.opacity = "1";

      // Show the box again
      speechBox.classList.add("show");
    }, 250);
  }

  window.handleDecision = function (decision) {
    let questionSet = [];
    const answers = [];
    let a = "";
    let b = "";
    if (decision == "food_choice") {
      questionSet = [...foodChoices];
    }

    const actionContainer = document.getElementById("action-container");
    actionContainer.innerHTML = `
            <div id="input-question" style="text-align: center; transition: opacity 0.3s ease;">
                <p>What are you trying to decide between eating?</p>
                <input id="input-a" type="text" maxlength="15" placeholder="Option A" style="width: 100px; text-align: center; margin-right: 10px;" />
                <input id="input-b" type="text" maxlength="15" placeholder="Option B" style="width: 100px; text-align: center;" />
                <br/><br/>
                <button id="submit-options" class="decision-button">Submit</button>
            </div>
        `;

    // Add an event listener to the submit button
    document.getElementById("submit-options").addEventListener("click", () => {
      a = document.getElementById("input-a").value.trim();
      b = document.getElementById("input-b").value.trim();

      if (!a || !b) {
        setGooseSpeech("Please fill out both options!");
        return;
      }

      // Replace {a} and {b} in the questions
      questionSet = questionSet.map((question) => ({
        ...question,
        question: question.question.replace("{a}", a).replace("{b}", b),
        choices: question.choices
          ? question.choices.map((choice) =>
              choice.replace("{a}", a).replace("{b}", b)
            )
          : undefined,
      }));

      // Randomize and select 10 questions
      const selectedQuestions = questionSet
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      // Step 3: Ask the first question
      askQuestions(selectedQuestions);
    });

    function askQuestions(questions) {
      let currentIndex = 0;

      function askNext() {
        if (currentIndex >= questions.length) {
          calculateResult();
          return;
        }

        const actionContainer = document.getElementById("action-container");
        actionContainer.innerHTML = ""; // Clear the previous interaction

        if (currentIndex != 0 && Math.random() < 0.25) {
          const randomQuip =
            quimbusQuips[Math.floor(Math.random() * quimbusQuips.length)];
          setGooseSpeech(randomQuip);

          // Add "click anywhere to continue" message
          const continueMessage = document.createElement("p");
          continueMessage.style.color = "gray";
          continueMessage.style.textAlign = "center";
          continueMessage.textContent = "Click anywhere to continue.";
          actionContainer.appendChild(continueMessage);

          // Add a click listener to skip the quip
          function continueAfterQuip() {
            document.body.removeEventListener("click", continueAfterQuip);
            askNext(); // Continue to the next question
          }
          document.body.addEventListener("click", continueAfterQuip);
          return; // Wait for the click before proceeding
        }

        const currentQuestion = questions[currentIndex];
        setGooseSpeech(currentQuestion.question);

        if (currentQuestion.type === "slider") {
          createSlider(currentQuestion);
        } else if (currentQuestion.type === "choice") {
          createChoices(currentQuestion);
        }

        currentIndex++;
      }
      function createSlider(question) {
        const sliderWrapper = document.createElement("div");
        sliderWrapper.style.transition = "opacity 0.3s ease";
        sliderWrapper.innerHTML = `
              <input type="range" min="1" max="100" value="50" id="slider">
              <div style="display: flex; justify-content: space-between;">
                  <span>${question.sliderLabels[0]}</span>
                  <span>${question.sliderLabels[1]}</span>
              </div>
          `;

        const actionContainer = document.getElementById("action-container");
        actionContainer.appendChild(sliderWrapper);

        const slider = document.getElementById("slider");
        slider.addEventListener("change", () => {
          const value = slider.value + "% on a scale from " + question.sliderLabels[0] + " (0%) to " + question.sliderLabels[1] + " (100%)";
          const weight = interpolateWeight(question.weights, slider.value / 100);
          answers.push({ question: question.question, answer: value, weight });
          fadeOutAndNext(sliderWrapper);
        });
      }

      function createChoices(question) {
        const choicesWrapper = document.createElement("div");
        choicesWrapper.style.display = "flex";
        choicesWrapper.style.justifyContent = "space-around";
        choicesWrapper.style.transition = "opacity 0.3s ease";

        question.choices.forEach((choice, index) => {
          const button = document.createElement("button");
          button.className = "decision-button";
          button.innerText = choice;
          button.onclick = () => {
            answers.push({
              question: question.question,
              answer: choice,
              weight: question.weights[index],
            });
            fadeOutAndNext(choicesWrapper);
          };
          choicesWrapper.appendChild(button);
        });

        const actionContainer = document.getElementById("action-container");
        actionContainer.appendChild(choicesWrapper);
      }

      function fadeOutAndNext(element) {
        element.style.opacity = "0";
        setTimeout(() => {
          element.remove();
          askNext();
        }, 300);
      }

      askNext();
    }

    function calculateResult() {
      const totalWeight = answers.reduce((sum, ans) => sum + ans.weight, 0);
      const decision = totalWeight > 0 ? a : b;
      setGooseSpeech(
        `Based on your answers, I've decided that ${decision} is the correct choice! Now it's time for you to choose!`
      );
      console.log(answers);
      const actionContainer = document.getElementById("action-container");
      actionContainer.innerHTML = `
          <div id="click-to-continue" style="text-align: center; margin-top: 20px;">
              <p>Click anywhere to continue</p>
          </div>
      `;

      function onClick() {
        document.body.removeEventListener("click", onClick); // Remove listener
        finalChoiceInteraction(decision); // Proceed to the final interaction
      }

      // Add the click event listener
      document.body.addEventListener("click", onClick);
    }

    function finalChoiceInteraction(decision) {
      const actionContainer = document.getElementById("action-container");
      actionContainer.innerHTML = "";

      // Move Quimbus and the speech box to the center
      const gooseContainer = document.getElementById("goose-container");
      const speechBox = document.getElementById("speech-box");

      speechBox.style.transition = "top 1s ease";

      gooseContainer.style.animation = "none"; // Disable current animation
      setTimeout(() => {
        gooseContainer.style.animation = "moveToCenter 2s ease forwards";
      }, 10);

      // Update the speech text
      setTimeout(() => {
        setGooseSpeech(
          `Press my left foot for ${a}, or my right foot for ${b}. Now it's time for you to make a choice!`
        );

        // Add clickable feet
        const leftFoot = document.createElement("div");
        leftFoot.id = "left-foot";
        leftFoot.style.position = "absolute";
        leftFoot.style.width = "50%"; // Left half of the screen
        leftFoot.style.height = "100%"; // Bottom half of the screen
        leftFoot.style.bottom = "0";
        leftFoot.style.left = "0";
        leftFoot.style.backgroundColor = "rgba(255, 165, 0, 0.3)"; // Mostly transparent
        leftFoot.style.cursor = "pointer";

        // Add clickable right foot region
        const rightFoot = document.createElement("div");
        rightFoot.id = "right-foot";
        rightFoot.style.position = "absolute";
        rightFoot.style.width = "50%";
        rightFoot.style.height = "100%"; // Bottom half of the screen
        rightFoot.style.bottom = "0";
        rightFoot.style.right = "0";
        rightFoot.style.backgroundColor = "rgba(255, 165, 0, 0.3)"; // Mostly transparent
        rightFoot.style.cursor = "pointer";

        gooseContainer.appendChild(leftFoot);
        gooseContainer.appendChild(rightFoot);

        function handleFootClick(correct, choice) {
          setGooseSpeech(
            correct
              ? `You chose ${choice}! Great choice, just as I suggested!`
              : `You chose ${choice}? Hmm... interesting. I did say ${decision}, but sure, go ahead!`
          );

          launchConfetti(correct);

          // Reset everything after a short delay
          setTimeout(() => {
            resetGoose();
          }, 2000);
        }

        function handleLeftFootClick() {
          leftFoot.removeEventListener("click", handleLeftFootClick);
          rightFoot.removeEventListener("click", handleRightFootClick);
          handleFootClick(a === decision, a);
        }

        function handleRightFootClick() {
          leftFoot.removeEventListener("click", handleLeftFootClick);
          rightFoot.removeEventListener("click", handleRightFootClick);
          handleFootClick(b === decision, b);
        }

        // Assign the named functions as event listeners
        leftFoot.addEventListener("click", handleLeftFootClick);
        rightFoot.addEventListener("click", handleRightFootClick);
      }, 1000); // Wait for the animation to complete
    }

    function interpolateWeight(weights, ratio) {
      return weights[0] * (1 - ratio) + weights[1] * ratio;
    }
  };

  function resetGoose() {
    const gooseContainer = document.getElementById("goose-container");
    const speechBox = document.getElementById("speech-box");

    // Reset goose and speech box to their original positions
    gooseContainer.style.animation = "slideHalfwayDown 1.5s ease-out forwards";
    speechBox.style.transition = "none";
    speechBox.style.top = "35vh";
    speechBox.style.left = "50%";
    speechBox.style.transform = "translateX(-50%) scale(1)";

    // Update the speech box text
    setGooseSpeech(
      "Ah, what a choice! Now, if I had a hat, I'd tip it to you. Click anywhere to start over!"
    );

    // Allow user to restart
    document.body.addEventListener("click", restart);
  }

  function restart() {
    document.body.removeEventListener("click", restart);
    const actionContainer = document.getElementById("action-container");
    actionContainer.innerHTML = "";
    showDecisionDropdown();
  }

  function showDecisionDropdown() {
    setGooseSpeech("What would you like me to help you decide on?");
    const actionContainer = document.getElementById("action-container");

    // Create dropdown container dynamically
    const decisionContainer = document.createElement("div");
    decisionContainer.id = "decision-container";
    decisionContainer.style.transform = "scale(0.8)";
    decisionContainer.style.opacity = "0";
    decisionContainer.style.transition =
      "transform 0.3s ease, opacity 0.3s ease";

    // Populate dropdown
    decisionContainer.innerHTML = `
   <button class="decision-button" onclick="handleDecision('food_choice')">Food Choice</button>
   <button class="decision-button" onclick="handleDecision('responsibility_vs_fun')">Responsibility vs Fun</button>
`;

    // Append to the action container
    actionContainer.appendChild(decisionContainer);

    // Scale in with animation
    setTimeout(() => {
      decisionContainer.style.transform = "scale(1)";
      decisionContainer.style.opacity = "1";
    }, 50); // Small delay for smoother animation
  }
  setTimeout(showDecisionDropdown, 1000);
});
