const randomSize = () => Math.floor(Math.random() * 61) + 20;



document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    const dot = document.createElement("span");
    dot.classList.add("dot");

    const size = randomSize();

    bubble.style.left = `${event.clientX}px`;
    bubble.style.top = `${event.clientY - size / 2}px`;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    dot.style.width = `${size / 6}px`;
    dot.style.height = `${size / 6}px`;

    bubble.style.animationDuration = `${Math.random() * 12 + 6}s`; // Random speed between 2-5 seconds

    var color = getRandomColor();
    console.log(color);
    bubble.style.borderColor = color;

    bubble.appendChild(dot);

    document.querySelector(".wrapper").appendChild(bubble);

    bubble.addEventListener("animationend", () => {
      bubble.remove();
    });

    bubble.addEventListener("click", (e) => {
      const sound = new Audio("./bubble.wav");
      sound.play();
      e.stopPropagation(); // Prevent triggering a new bubble on the main wrapper
      bubble.remove(); // Remove the bubble after the pop animation finishes
    });
  });
});

function getRandomColor() {
  const r = 200 + Math.floor(Math.random() * 56); // Random between 200 and 255
  const g = 200 + Math.floor(Math.random() * 56); // Random between 200 and 255
  const b = 200 + Math.floor(Math.random() * 56); // Random between 200 and 255

  // Convert RGB values to Hex and return the color string
  const hex = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  return hex;
}
