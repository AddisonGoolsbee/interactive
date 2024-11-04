const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = box.getBoundingClientRect();

  // Calculate center of the box
  const xCenter = left + width / 2;
  const yCenter = top + height / 2;

  // Calculate rotation based on mouse position relative to center, increase intensity
  const rotateX = (yCenter - e.clientY) / 3; // more intense effect
  const rotateY = (e.clientX - xCenter) / 3;

  // Apply the transform to the box
  box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

box.addEventListener("mouseleave", () => {
  // Reset transform when mouse leaves the box
  box.style.transform = "rotateX(0deg) rotateY(0deg)";
});
