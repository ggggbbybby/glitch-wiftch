// client-side js, loaded by index.html
// run by the browser each time the page is loaded


/*
// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of dreams
fetch("/dreams")
  .then(response => response.json()) // parse the JSON from the server
  .then(dreams => {
    // remove the loading text
    dreamsList.firstElementChild.remove();
  
    // iterate through every dream and add it to our page
    dreams.forEach(appendNewDream);
  
    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      let newDream = dreamsForm.elements.dream.value;
      dreams.push(newDream);
      appendNewDream(newDream);

      // reset form
      dreamsForm.reset();
      dreamsForm.elements.dream.focus();
    });
  });
*/

const draft = {
  warp: [1,2,3,4,3,2,1,4],
  weft: [1,2,3,4,3,2,1,4],
  tieup: ["there is no shaft 0", [1,2], [2, 3], [3, 4], [1, 4]]
};

const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;
const pixel_width = 20;

const fill = function(i, j, draft) {
  let row = i % draft.weft.length;
  let col = j % draft.warp.length;
  let treadle = draft.weft[row];
  let shafts_down = draft.tieup[treadle];
  if (!shafts_down) debugger;
  let shaft = draft.warp[col];
  return shafts_down.includes(shaft);
};

for (let i=0; i < drawdown_width / pixel_width ; i++) { // rows
  for (let j=0; j < drawdown_width / pixel_width ; j++) { // cols
    let threadbox = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
    threadbox.setAttribute("x", i * pixel_width);
    threadbox.setAttribute("y", j * pixel_width);
    threadbox.setAttribute("height", pixel_width);
    threadbox.setAttribute("width", pixel_width);
    threadbox.setAttribute("fill", fill(i, j, draft) ? "#f00" : "#fff")
    threadbox.style.stroke = "#333"; //Set stroke colour
    threadbox.style.strokeWidth = "2px"; //Set stroke width
    drawdown.appendChild(threadbox);
  }
}


