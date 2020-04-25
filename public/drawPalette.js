const swatch_size = 50;

const swatch = function(fill) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", swatch_size);
  box.setAttribute("width", swatch_size);
  box.style.stroke = "#333";
  box.style.strokeWidth = "2px";
  box.setAttribute("fill", fill);
  return box;
}

const drawPalette = function(svg) {
  const colors = ['red', 'yellow', 'blue'];
  colors.forEach((color) => {
    svg.appendChild(swatch(color));
  })
}