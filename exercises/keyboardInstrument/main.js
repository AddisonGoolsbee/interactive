let gooseSize = 1;

document.body.onkeydown = function (keypress_event) {
  const key = keypress_event.key;
  document.getElementById("key_display").innerHTML = `You pressed: ${key}`;

  // Check if 'q' was pressed to increase the goose size
  if (key === 'q') {
    gooseSize += 0.1; // Increase goose size by 10%

    const message = document.createElement("div");
    message.className = "special-message";
    message.innerText = "You summoned the mighty QUIMBUS!";
    document.body.appendChild(message);
    
    // Remove the message after 2 seconds
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
  

  // Create a new goose
  const newGoose = document.createElement("img");
  const gooseWidth = 200 * gooseSize;

  newGoose.src = "../../assets/quimbus.png";
  newGoose.className = "goose";
  newGoose.style.width = `${200 * gooseSize}px`; // Adjust width based on gooseSize
  newGoose.style.position = "absolute";
  newGoose.style.left = `calc(${Math.random() * 80}vw - ${gooseWidth / 2}px)`;
  newGoose.style.bottom = `calc(${Math.random() * 50}vh - ${gooseWidth / 2}px)`;
  newGoose.style.transition = "transform 0.5s ease-in-out";
  newGoose.style.transform = "scale(1)";
  document.body.appendChild(newGoose);

  setTimeout(() => {
    newGoose.remove();
  }, 10000);

};

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  document.getElementById("star-container").appendChild(star);
}
