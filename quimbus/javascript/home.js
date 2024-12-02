const foodChoices = [
  {
    question: "How tasty is {a}?",
    type: "slider",
    sliderLabels: ["BLEH!", "DEEEELICIOUS"],
    weights: [-0.8, 0.8], // Slider: B-weighted to A-weighted
  },
  {
    question: "How tasty is {b}?",
    type: "slider",
    sliderLabels: ["BLEH!", "DEEEELICIOUS"],
    weights: [0.8, -0.8], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one seems more appetizing?",
    type: "choice",
    choices: ["{a}", "roughly equal", "{b}"],
    weights: [0.6, 0, -0.6], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How filling is {a}?",
    type: "slider",
    sliderLabels: ["Still hungry", "Completely stuffed"],
    weights: [-0.7, 0.7], // Slider: B-weighted to A-weighted
  },
  {
    question: "How filling is {b}?",
    type: "slider",
    sliderLabels: ["Still hungry", "Completely stuffed"],
    weights: [0.7, -0.7], // Slider: B-weighted to A-weighted
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
    weights: [1, 0, -1], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How fun is it to eat {a}?",
    type: "slider",
    sliderLabels: ["No fun", "So satisfying!"],
    weights: [-0.5, 0.5], // Slider: B-weighted to A-weighted
  },
  {
    question: "How fun is it to eat {b}?",
    type: "slider",
    sliderLabels: ["No fun", "So satisfying!"],
    weights: [0.5, -0.5], // Slider: B-weighted to A-weighted
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
    question: "How big is {a}?",
    type: "slider",
    sliderLabels: ["Tiny snack", "Endless feast"],
    weights: [-0.4, 0.4], // Slider: B-weighted to A-weighted
  },
  {
    question: "How big is {b}?",
    type: "slider",
    sliderLabels: ["Tiny snack", "Endless feast"],
    weights: [0.4, -0.4], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one has a better texture?",
    type: "choice",
    choices: ["{a}", "equally good", "{b}"],
    weights: [0.5, 0, -0.5], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "Which one is more practical?",
    type: "choice",
    choices: ["{a}", "both are similar", "{b}"],
    weights: [1, 0, -1], // Choice: A-weighted, neutral, B-weighted
  },
  {
    question: "How messy is {a}?",
    type: "slider",
    sliderLabels: ["Not messy", "Total disaster"],
    weights: [0.3, -0.3], // Slider: B-weighted to A-weighted
  },
  {
    question: "Which one will you regret more if you don't choose it?",
    type: "choice",
    sliderLabels: ["{a}", "{b}"],
    weights: [0.7, -0.7], // Slider: A-weighted to B-weighted
  },
  {
    question: "How much would I enjoy {a}?",
    type: "slider",
    sliderLabels: ["Grrr!", "HONK!"],
    weights: [-0.1, 0.1], // Slider: B-weighted to A-weighted
  },
  {
    question: "If you were judging yourself one week from now for this decision, which would you choose?",
    type: "choice",
    sliderLabels: ["{a}", "{b}"],
    weights: [0.7, -0.7], // Slider: A-weighted to B-weighted
  },
  {
    question: "How much effort would {a} take?",
    type: "slider",
    sliderLabels: ["None", "Way too much"],
    weights: [0.7, -0.7], // Slider: A-weighted to B-weighted
  },
  {
    question: "How much effort would {b} take?",
    type: "slider",
    sliderLabels: ["None", "Way too much"],
    weights: [-0.7, 0.7], // Slider: A-weighted to B-weighted
  },
];

const responsibilityVsFun = [
  {
    question: "How rewarding will {a} feel afterward?",
    type: "slider",
    sliderLabels: ["Meh", "Very rewarding"],
    weights: [-0.8, 0.8], // Slider: B-weighted to A-weighted
  },
  {
    question: "How enjoyable is {b}?",
    type: "slider",
    sliderLabels: ["Meh", "Super fun!"],
    weights: [-0.8, 0.8], // Slider: B-weighted to A-weighted
  },
  {
    question: "How relaxing is {b}?",
    type: "slider",
    sliderLabels: ["Not relaxing", "Extremely relaxing"],
    weights: [-0.7, 0.7], // Slider: B-weighted to A-weighted
  },
  {
    question: "If you had to justify {b} to Addison, would he accept your argument?",
    type: "choice",
    choices: ["Yes, absolutely", "Not sure", "No way"],
    weights: [-0.5, 0, 0.8], // Choice: B-weighted to A-weighted
  },
  {
    question: "Would I, Quimbus, support this decision?",
    type: "choice",
    choices: ["Yes, you'd honk for {a}", "You're neutral", "No, you'd honk for {b}"],
    weights: [0.6, 0, -0.6], // Choice: A-weighted to B-weighted
  },
  {
    question: "When's the last time you had a break?",
    type: "slider",
    sliderLabels: ["Just now", "Ages ago"],
    weights: [0.5, -0.5], // Slider: A-weighted to B-weighted
  },
  {
    question: "How urgent is {a}?",
    type: "slider",
    sliderLabels: ["Not urgent", "Extremely urgent"],
    weights: [-0.7, 1.5], // Slider: B-weighted to A-weighted
  },
  {
    question: "How difficult/intense is {a}?",
    type: "slider",
    sliderLabels: ["Not at all", "Very intense"],
    weights: [0.6, -1], // Slider: B-weighted to A-weighted
  },
  {
    question: "How much time does {b} take? Be realistic here.",
    type: "slider",
    sliderLabels: ["Very little", "Way too much"],
    weights: [0.6, -0.6], // Slider: A-weighted to B-weighted
  },
  {
    question: "You are Marie from the future, reliving today. Which one will you choose?",
    type: "choice",
    choices: ["{a}, obviously", "Hard to say", "{b}, for sure"],
    weights: [0.5, 0, -0.5], // Choice: A-weighted to B-weighted
  },
  {
    question: "How likely is it that after you do {b} you won't start working?",
    type: "slider",
    sliderLabels: ["Definitely will work", "Won't start at all"],
    weights: [0.5, -1], // Slider: A-weighted to B-weighted
  },
  {
    question: "Who is the greatest goose?",
    type: "choice",
    choices: ["Quimbus", "Quombus", "Marie Bong"],
    weights: [0, 0, 0, 0], // Neutral weights for fun
  },
  {
    question: "Would you consider {a} to be out of your comfort zone?",
    type: "choice",
    choices: ["Yes", "No"],
    weights: [0.5, -0.5], // Choice: A-weighted to B-weighted
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
  "Imagine this: a goose in a hat.\nHuh? Oh, sorry, I got distracted",
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
    speechBox.style.transform = "translateX(-50%) scale(0.1)";
    // speechBox.style.opacity = "0";
    speechBox.style.transition =
      "transition: transform 0.15s ease, opacity 0.25s ease";

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Update the text and restore size
      speechBox.innerText = text;
      speechBox.style.transform = "translateX(-50%) scale(1)";
      speechBox.style.opacity = "1";
    }, 250);
  }

  window.handleDecision = function (decision) {
    let questionSet = [];
    const answers = [];
    let a = "";
    let b = "";
    if (decision == "food_choice") {
      questionSet = [...foodChoices];
      setGooseSpeech("What foods are you deciding between?");
    } else if (decision == "responsibility_vs_fun") {
      questionSet = [...responsibilityVsFun];
      setGooseSpeech("What are you weighing? Put the responsible one on the left please.");
    }

    const actionContainer = document.getElementById("action-container");

    actionContainer.style.transform = "scale(0.8)";
    actionContainer.style.opacity = "0";
    actionContainer.style.transition =
      "transform 0.3s ease forwards, opacity 0.3s ease forwards";

    setTimeout(() => {
      actionContainer.style.transform = "scale(1)";
      actionContainer.style.opacity = "1";
    }, 0); // Small delay for smoother animation

    actionContainer.innerHTML = `
    <div id="input-question" class="input-question">
        <div class="input-container">
            <input id="input-a" type="text" maxlength="30" placeholder="${decision == "food_choice" ? "Option A" : "Responsible"}" class="styled-input" />
            <input id="input-b" type="text" maxlength="30" placeholder="${decision == "food_choice" ? "Option B" : "Fun"}"  class="styled-input" />
        </div>
        <button id="submit-options" class="choice-button">Submit</button>
    </div>
`;

    // Add an event listener to the submit button
    document.getElementById("submit-options").addEventListener("click", () => {
      a = document.getElementById("input-a").value.trim().toLowerCase();
      b = document.getElementById("input-b").value.trim().toLowerCase();

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
        .slice(0, 8);

      // Step 3: Ask the first question
      askQuestions(selectedQuestions);
    });

    function askQuestions(questions) {
      let currentIndex = 0;
      let quipShown = false;

      function askNext() {
        if (currentIndex >= questions.length) {
          calculateResult();
          return;
        }

        const actionContainer = document.getElementById("action-container");
        actionContainer.innerHTML = ""; // Clear the previous interaction

        if (!quipShown && currentIndex != 0 && Math.random() < 0.2) {
          const randomQuip =
            quimbusQuips[Math.floor(Math.random() * quimbusQuips.length)];
          setGooseSpeech(randomQuip);
          quipShown = true;

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
        quipShown = false;
        currentIndex++;
      }
      function createSlider(question) {
        const sliderWrapper = document.createElement("div");
        sliderWrapper.className = "slider-wrapper";
        sliderWrapper.style.transform = "scale(0.8)";
        sliderWrapper.style.opacity = "0";
        sliderWrapper.style.transition =
          "transform 0.3s ease, opacity 0.3s ease";

        setTimeout(() => {
          sliderWrapper.style.transform = "scale(1)";
          sliderWrapper.style.opacity = "1";
        }, 50); // Small delay for smoother animation

        sliderWrapper.innerHTML = `
            <div class="slider-labels">
                <span class="slider-label">${question.sliderLabels[0]}</span>
                <span class="slider-label">${question.sliderLabels[1]}</span>
            </div>
            <input type="range" min="1" max="100" value="50" id="slider" class="styled-slider">
        `;

        const actionContainer = document.getElementById("action-container");
        actionContainer.appendChild(sliderWrapper);

        const slider = document.getElementById("slider");
        slider.addEventListener("change", () => {
          const value =
            slider.value +
            "% on a scale from " +
            question.sliderLabels[0] +
            " (0%) to " +
            question.sliderLabels[1] +
            " (100%)";
          const weight = interpolateWeight(
            question.weights,
            slider.value / 100
          );
          answers.push({ question: question.question, answer: value, weight });
          fadeOutAndNext(sliderWrapper);
        });
      }

      function createChoices(question) {
        const choiceContainer = document.createElement("div");
        choiceContainer.id = "choice-container";
        choiceContainer.style.transform = "scale(0.8)";
        choiceContainer.style.opacity = "0";
        choiceContainer.style.transition =
          "transform 0.3s ease, opacity 0.3s ease";

        setTimeout(() => {
          choiceContainer.style.transform = "scale(1)";
          choiceContainer.style.opacity = "1";
        }, 50); // Small delay for smoother animation

        question.choices.forEach((choice, index) => {
          const button = document.createElement("button");
          button.className = "choice-button";
          button.innerText = choice;
          button.onclick = () => {
            answers.push({
              question: question.question,
              answer: choice,
              weight: question.weights[index],
            });
            fadeOutAndNext(choiceContainer);
          };
          choiceContainer.appendChild(button);
        });

        const actionContainer = document.getElementById("action-container");
        actionContainer.appendChild(choiceContainer);
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

      // Adjust speechBox for mobile
      if (window.innerWidth <= 768) {
        // Mobile breakpoint
        speechBox.style.transition = "top 1s ease";
        speechBox.style.top = "30svh";
      }

      // Update the speech text
      setTimeout(() => {
        setGooseSpeech(
          `Press my left foot for ${a}, or my right foot for ${b}.`
        );

        actionContainer.style.pointerEvents = "none";

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
              : `You chose ${choice}? Hmm... interesting. I did say ${decision}, but sure, go ahead.`
          );

          launchConfetti(correct);
          actionContainer.style.pointerEvents = "auto";

          // Reset everything after a short delay
          setTimeout(() => {
            resetGoose();
          }, 5000);
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
    speechBox.style.top = "40svh";
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
    decisionContainer.id = "choice-container";
    decisionContainer.style.transform = "scale(0.8)";
    decisionContainer.style.opacity = "0";
    decisionContainer.style.transition =
      "transform 0.3s ease, opacity 0.3s ease";

    decisionContainer.innerHTML = `
      <button class="choice-button" data-decision="food_choice">Food Choice</button>
      <button class="choice-button" data-decision="responsibility_vs_fun">Responsibility vs Fun</button>
  `;

    // Append to the action container
    actionContainer.appendChild(decisionContainer);

    // Scale in with animation
    setTimeout(() => {
      decisionContainer.style.transform = "scale(1)";
      decisionContainer.style.opacity = "1";
    }, 50); // Small delay for smoother animation

    // Add event listener to buttons
    decisionContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("choice-button")) {
        const decision = event.target.getAttribute("data-decision");

        // Fade out the decision container
        decisionContainer.style.transform = "scale(0.8)";
        decisionContainer.style.opacity = "0";

        // Wait for the fade-out animation to complete
        setTimeout(() => {
          actionContainer.removeChild(decisionContainer)
          actionContainer.style.opacity = "0"; // Remove the container
          handleDecision(decision); // Proceed to the next step
        }, 300); // Match the CSS transition duration
      }
    });
  }

  setTimeout(showDecisionDropdown, 1000);
});
