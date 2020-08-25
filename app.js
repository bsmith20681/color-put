const canvas = document.getElementById("color-put").getContext("2d");
var gradient = canvas.createLinearGradient(2, 0, 200, 0);

gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
canvas.fillStyle = gradient;
canvas.fillRect(20, 20, 450, 300);
