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
  warp: [1,4,2,1,3,2,4,3,1,4,2,1,3,2,4,2,3,1,2,4,1,3,4,2,3,1,2,4,1,4,2,1,3,2,4,3,1,4,2,1,3,2,4,2,3,1,2,4,1,3,4,2,3,1,2,4],
  weft: [1,5,2,6,1,3,2,4,1,5,2,6,1,3,2,4,1,5,2,6,1,6,2,5,1,4,2,3,1,6,2,5,1,4,2,3,1,6,2,5],
  tieup: [
    [1, 3],
    [2, 4],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4]
  ]
};

const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;
const pixel_width = 12;

const fill_drawdown = function(i, j, draft) {
  let col = i % draft.warp.length;
  let row = j % draft.weft.length;
  let treadle = draft.weft[row];
  let shafts_down = draft.tieup[treadle-1];
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
  let treadle = (i % draft.treadle_count);
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
const threading_sequence = function(draft) {
  return draft.warp.map((shaft, index) => `${index+1}=${shaft}`);
}

const tieup_sequence = function(draft) {
  return draft.tieup.map((shafts, index) => `${index+1}=${shafts.join(",")}`);
}

const treadling_sequence = function(draft) {
  return draft.weft.map((treadle, index) => `${index+1}=${treadle}`);
}

const today = new Date().toDateString();
const title = document.getElementsByTagName('h1')[0].textContent;
let wif = [
  "",
  "[WIF]",
  "[Version=1.1]",
  `Date=${today}`,
  "Developers=ggggbbybby@gmail.com",
  "Source Program=glitch-wiftch",
  "Source Version=1",
  "",
  "[CONTENTS]",
  "COLOR PALETTE=true",
  "TEXT=true",
  "WEAVING=true",
  "WARP=true",
  "WEFT=true",
  "COLOR TABLE=true",
  "THREADING=true",
  "TIEUP=true",
  "TREADLING=true",
  "",
  "[TEXT]",
  "Title=Glitch-Wiftch Demo",
  "",
  "[THREADING]",
  ...threading_sequence(draft),
  "",
  "[TIEUP]",
  ...tieup_sequence(draft),
  "",
  "[TREADLING]",
  ...threading_sequence(draft),
  "",
  "[WEAVING]",
  "Rising Shed=true",
  "Shafts=4",
  "Treadles=6",
  "",
  "[WARP]",
  "Units=centimeters",
  "Color=1",
  `Threads=${draft.warp.length}`,
  "Spacing=0.2117",
  "Thickness=0.2117",
  "",
  "[WEFT]",
  "Units=centimeters",
  "Color=2",
  `Threads=${draft.weft.length}`,
  "Spacing=0.2117",
  "Thickness=0.2117",
  "",
  "[COLOR TABLE]",
  "1=255,255,255",
  "2=255,0,0",
  "",
  "[COLOR PALETTE]",
  "Entries=2",
  "Range=0,255"
];

const wif_out = wif.join("\n");
console.log(wif_out);
 
const wifbox = document.getElementById('wif-preview');
wifbox.textContent = wif_out;