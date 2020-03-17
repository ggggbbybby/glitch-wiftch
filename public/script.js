const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;
const pixel_width = 12;

const warpClick = function(thread, shaft, draft) {
  draft.warp[thread] = shaft;
  draw(draft);
}

const weftClick = function(thread, treadle, draft) {
  draft.weft[thread] = treadle;
  draw(draft);
}

const tieupClick = function(shaft, treadle, draft) {
  if (draft.tieup[treadle].includes(shaft)) {
    draft.tieup[treadle] = draft.tieup[treadle].filter((e) => e != shaft)
  } else {
    draft.tieup[treadle] << shaft;
  }
  draw(draft);
}

const box = function(x, y, data={}) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", pixel_width);
  box.setAttribute("width", pixel_width);
  box.style.stroke = "#333";
  box.style.strokeWidth = "2px";
  box.setAttribute("x", x);
  box.setAttribute("y", y);
  box.setAttribute("fill", "#fff");
  for (let [key, value] of Object.entries(data)) {
    box.setAttribute(`data-${key}`, value);
  }
  return box;
}

const threadbox = function(thread, treadle) {
  // threads start at (800, 800) & goes left-up
  const type = 'drawdown'
  const x = drawdown_width - (thread + 1)*pixel_width;
  const y = drawdown_width - (treadle + 1)*pixel_width;
  return box(x, y, {thread, treadle, type});
}

const warpbox = function(thread, treadle) {
  // warps start at (800, 820) & goes left-down
  const type = 'warp'
  const x = drawdown_width - (thread + 1)*pixel_width;
  const y = drawdown_width + (treadle + 1)*pixel_width;
  return box(x, y, {thread, treadle, type});
}

const weftbox = function(thread, treadle) {
  // wefts start at (820, 800) & goes right-up
  const type = 'weft'
  const x = drawdown_width + (thread + 1)*pixel_width;
  const y = drawdown_width - (treadle + 1)*pixel_width;
  return box(x, y, {thread, treadle, type});
}

const tieupbox = function(thread, treadle) {
  const type = 'tieup'
  const x = drawdown_width + (thread + 1)*pixel_width;
  const y = drawdown_width + (treadle + 1)*pixel_width;
  return box(x, y, {thread, treadle, type});
}

const drawGrid = function(height, width, shafts, treadles) {
  for (let i = 0; i < width + treadles + 1; i++) {
    for (let j = 0; j < height + shafts + 1; j++) {
      // when i == width or j == height, make a gap for readability
      const col_type = i < width ? 'thread' : (i > width? 'treadle' : 'gap');
      const row_type = j < height ? 'thread' : (j > height ? 'shaft' : 'gap');
      
      let box = null;
      if (col_type == 'gap' || row_type == 'gap') box = null;
      else if (col_type == 'thread' && row_type == 'thread') box = threadbox(i, j);
      else if (col_type == 'thread' && row_type == 'shaft') box = warpbox(i, j%height - 1);
      else if (col_type == 'treadle' && row_type == 'thread') box = weftbox(i%width - 1 , j);
      else if (col_type == 'treadle' && row_type == 'shaft') box = tieupbox(i%width - 1, j%height - 1);
      else box = null;
      
      if (box) drawdown.appendChild(box);
    }
  }
}

const drawDraft = function(draft) {

  const fill_drawdown = function(i, j) {
    let col = i % draft.warp.length;
    let row = j % draft.weft.length;
    let treadle = draft.weft[row];
    let shafts_down = draft.tieup[treadle - 1];
    if (!shafts_down) debugger;
    let shaft = draft.warp[col];
    return shafts_down.includes(shaft);
  };

  const fill_threading = function(col, row) {
    return draft.warp[col % draft.warp.length] == row + 1;
  };

  const fill_tieup = function(i, j) {
    let treadle = i % draft.treadle_count;
    let shaft = (j % draft.shaft_count) + 1;
    if (!draft.tieup[treadle]) debugger;
    return draft.tieup[treadle].includes(shaft);
  };

  const fill_treadling = function(i, j) {
    let treadle = (i % draft.treadle_count) + 1;
    let row = j % draft.weft.length;
    return draft.weft[row] == treadle;
  };
  
  drawdown.querySelectorAll('rect').forEach((child) => {
    let fill = false;
    const col = parseInt(child.dataset.thread);
    const row = parseInt(child.dataset.treadle);
    switch (child.dataset.type) {
      case 'drawdown':
        fill = fill_drawdown(col, row) ? "#f00" : "#fff";
        break;
      case 'warp':
        fill = fill_threading(col, row) ? "#000" : "#fff";
        break;
      case 'weft':
        fill = fill_treadling(col, row) ? "#000" : "#fff";
        break;
      case 'tieup':
        fill = fill_tieup(col, row) ? "#000" : "#fff";
        break;
    }
    child.setAttribute('fill', fill);
    
  });

  const threading_sequence = function(draft) {
    return draft.warp.map((shaft, index) => `${index + 1}=${shaft}`);
  };

  const tieup_sequence = function(draft) {
    return draft.tieup.map(
      (shafts, index) => `${index + 1}=${shafts.join(",")}`
    );
  };

  const treadling_sequence = function(draft) {
    return draft.weft.map((treadle, index) => `${index + 1}=${treadle}`);
  };

  const today = new Date().toDateString();
  const title = document.getElementsByTagName("h1")[0].textContent;
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
    `Title=${title}`,
    "",
    "[THREADING]",
    ...threading_sequence(draft),
    "",
    "[TIEUP]",
    ...tieup_sequence(draft),
    "",
    "[TREADLING]",
    ...treadling_sequence(draft),
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
  // console.log(wif_out);

  const wifbox = document.getElementById("wif-preview");
  wifbox.textContent = wif_out;

  const download = document.getElementById("download-wif");
  const wif_file = new Blob([wif_out], { type: "text/plain" });
  const url = window.URL.createObjectURL(wif_file);
  download.href = url;
  download.download = `${title}.wif`;
};



let draft = {
  shaft_count: 4,
  treadle_count: 6,
  warp: [1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4, 1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4],
  weft: [1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5],
  tieup: [[1, 3], [2, 4], [1, 2], [2, 3], [3, 4], [1, 4]]
};


drawGrid(65, 65, 4, 6);
drawDraft(draft);
const pt = drawdown.createSVGPoint();
const toggle_shaft = (shafts, shaft) => {
  if (shafts.includes(shaft)) {
    return shafts.filter((s) => s != shaft);
  } else {
    return [shaft, ...shafts];
  }
}
drawdown.addEventListener('click', (click) => {
  pt.x = click.clientX;
  pt.y = click.clientY;
  const cursorpt = pt.matrixTransform(drawdown.getScreenCTM().inverse());
  const {x, y} = cursorpt;
  
  const col_type = x < drawdown_width ? 'warp' : (x > drawdown_width ? 'treadle' : 'gap');
  const row_type = y < drawdown_width ? 'weft' : (y > drawdown_width ? 'shaft' : 'gap');
  
  let col;
  switch (col_type) {
    case 'warp':
      col = drawdown_width - x;
      break;
    case 'treadle':
      col = x - drawdown_width - pixel_width;
      break;
  }
  col = Math.floor(col / pixel_width)
  
  let row;
  switch (row_type) {
    case 'weft':
      row = drawdown_width - y;
      break;
    case 'shaft':
      row = y - drawdown_width - pixel_width;
      break;
  }
  row = Math.floor(row / pixel_width);
  
  console.log(`you clicked on ${col_type}-${row_type} @ ${col},${row}`);
  
  if (col_type == 'warp' && row_type == 'shaft') draft.warp[col] = row + 1
  if (col_type == 'treadle' && row_type == 'weft') draft.weft[row] = col + 1;
  if (col_type == 'treadle' && row_type == 'shaft') draft.tieup[col] = toggle_shaft(draft.tieup[col], row + 1);
  drawDraft(draft);
})