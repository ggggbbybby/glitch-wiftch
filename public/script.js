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
  shaft_count: 4,
  treadle_count: 6,
  warp: [1, 2, 3, 4, 3, 2, 1, 4],
  weft: [1, 2, 3, 4, 3, 2, 1, 4],
  tieup: [
    "there is no treadle 0",
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 3],
    [2, 4]
  ]
};

const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;
const pixel_width = 20;

const fill_drawdown = function(i, j, draft) {
  let col = i % draft.weft.length;
  let row = j % draft.warp.length;
  let treadle = draft.weft[row];
  let shafts_down = draft.tieup[treadle];
  if (!shafts_down) debugger;
  let shaft = draft.warp[col];
  return shafts_down.includes(shaft);
};

for (let i = 0; i < drawdown_width / pixel_width; i++) {
  // rows
  for (let j = 0; j < drawdown_width / pixel_width; j++) {
    // cols
    let threadbox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    ); //Create a path in SVG's namespace
    threadbox.setAttribute("x", 800 - (i + 1) * pixel_width);
    threadbox.setAttribute("y", 800 - (j + 1) * pixel_width);
    threadbox.setAttribute("height", pixel_width);
    threadbox.setAttribute("width", pixel_width);
    threadbox.setAttribute(
      "fill",
      fill_drawdown(i, j, draft) ? "#f00" : "#fff"
    );
    threadbox.style.stroke = "#333"; //Set stroke colour
    threadbox.style.strokeWidth = "2px"; //Set stroke width
    drawdown.appendChild(threadbox);
  }
}

const fill_threading = function(i, j, draft) {
  let shaft = (i % draft.shaft_count) + 1;
  let col = j % draft.warp.length;
  return draft.warp[col] == shaft;
};

for (let i = 0; i < draft.shaft_count; i++) {
  // threading rows
  for (let j = 0; j < drawdown_width / pixel_width; j++) {
    // threading cols
    let threadbox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    threadbox.setAttribute("x", 800 - (j + 1) * pixel_width);
    threadbox.setAttribute("y", 800 + 20 + i * pixel_width);
    threadbox.setAttribute("height", pixel_width);
    threadbox.setAttribute("width", pixel_width);
    threadbox.setAttribute(
      "fill",
      fill_threading(i, j, draft) ? "#000" : "#fff"
    );
    threadbox.style.stroke = "#333";
    threadbox.style.strokeWidth = "2px";
    drawdown.appendChild(threadbox);
  }
}

const fill_tieup = function(i, j, draft) {
  let treadle = (i % draft.treadle_count) + 1;
  let shaft = (j % draft.shaft_count) + 1;
  if (!draft.tieup[treadle]) debugger;
  return draft.tieup[treadle].includes(shaft);
};

for (let i = 0; i < draft.treadle_count; i++) {
  //tie up cols (treadles)
  for (let j = 0; j < draft.shaft_count; j++) {
    // tie up rows (shafts)
    let threadbox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    threadbox.setAttribute("x", 800 + 20 + i * pixel_width);
    threadbox.setAttribute("y", 800 + 20 + j * pixel_width);
    threadbox.setAttribute("height", pixel_width);
    threadbox.setAttribute("width", pixel_width);
    threadbox.setAttribute("fill", fill_tieup(i, j, draft) ? "#000" : "#fff");
    threadbox.style.stroke = "#333";
    threadbox.style.strokeWidth = "2px";
    drawdown.appendChild(threadbox);
  }
}

const fill_treadling = function(i, j, draft) {
  let treadle = (i % draft.treadle_count) + 1;
  let row = j % draft.weft.length;
  return draft.weft[row] == treadle;
};

for (let i = 0; i < draft.treadle_count; i++) {
  for (let j = 0; j < drawdown_width / pixel_width; j++) {
    let threadbox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    threadbox.setAttribute("x", 800 + 20 + i * pixel_width);
    threadbox.setAttribute("y", 800 - (j + 1) * pixel_width);
    threadbox.setAttribute("height", pixel_width);
    threadbox.setAttribute("width", pixel_width);
    threadbox.setAttribute(
      "fill",
      fill_treadling(i, j, draft) ? "#000" : "#fff"
    );
    threadbox.style.stroke = "#333";
    threadbox.style.strokeWidth = "2px";
    drawdown.appendChild(threadbox);
  }
}


let wif = ["\n"];
wif.push("[WIF]");
wif.push("Version=1.1");
const today = "2020-03-11";
wif.push(`Date=${today}`);
wif.push("Developers=ggggbbybby@gmail.com");
wif.push("Source Program=glitch-wif");
wif.push("Source Version=1");
wif.push("\n");


const wif_out = wif.join("\n");
console.log(wif_out);
 
const wifbox = document.getElementById('wif-preview');
wifbox.textContent = wif_out;