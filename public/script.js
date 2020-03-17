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

const make_box = function(x, y, data={}) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", pixel_width);
  box.setAttribute("width", pixel_width);
  box.style.stroke = "#333";
  box.style.strokeWidth = "2px";
  box.setAttribute("x", x);
  box.setAttribute("y", y);
  box.setAttribute("fill", "#000");
  data.forEach
  return box;
}

const threadbox = function(thread, treadle) {
  // threads start at (800, 800) & goes left-up
  const x = drawdown_width - (thread + 1)*pixel_width;
  const y = drawdown_width - (treadle + 1)*pixel_width;
  return make_box(x, y, {thread, treadle});
}

const warpbox = function(thread, treadle) {
  // warps start at (800, 820) & goes left-down
  const x = drawdown_width - thread*pixel_width;
  const y = drawdown_width + treadle*pixel_width;
  return make_box(x, y);
}

const weftbox = function(thread, treadle) {
  // wefts start at (820, 800) & goes right-up
  const x = drawdown_width + thread*pixel_width;
}

const tieupbox = function(thread, treadle) {
  
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
      else if (col_type == 'treadle' && row_type == '') box = tieupbox(i%width - 1, j%height - 1);
      else box = null;
      
      if (box) drawdown.appendChild(box);
    }
  }
}

const draw = function(draft) {
  const threadbox_factory = function({ i, j, x, y, fill, onClick=null }) {
    let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    box.setAttribute("height", pixel_width);
    box.setAttribute("width", pixel_width);
    box.style.stroke = "#333";
    box.style.strokeWidth = "2px";
    box.setAttribute("x", x);
    box.setAttribute("y", y);
    box.setAttribute("fill", fill);
    if (onClick) box.addEventListener("click", () => { console.log("click", j, i) ; onClick(j, i+1, draft) })
    return box;
  };

  const fill_drawdown = function(i, j) {
    let col = i % draft.warp.length;
    let row = j % draft.weft.length;
    let treadle = draft.weft[row];
    let shafts_down = draft.tieup[treadle - 1];
    if (!shafts_down) debugger;
    let shaft = draft.warp[col];
    return shafts_down.includes(shaft);
  };

  const fill_threading = function(i, j, draft) {
    let shaft = (i % draft.shaft_count) + 1;
    let col = j % draft.warp.length;
    return draft.warp[col] == shaft;
  };

  const fill_tieup = function(i, j, draft) {
    let treadle = i % draft.treadle_count;
    let shaft = (j % draft.shaft_count) + 1;
    if (!draft.tieup[treadle]) debugger;
    return draft.tieup[treadle].includes(shaft);
  };

  const fill_treadling = function(i, j, draft) {
    let treadle = (i % draft.treadle_count) + 1;
    let row = j % draft.weft.length;
    return draft.weft[row] == treadle;
  };

  // draw drawdown
  for (let i = 0; i < drawdown_width / pixel_width; i++) {
    for (let j = 0; j < drawdown_width / pixel_width; j++) {
      drawdown.appendChild(
        threadbox_factory({
          i,j,
          x: 800 - (i + 1) * pixel_width,
          y: 800 - (j + 1) * pixel_width,
          fill: fill_drawdown(i, j) ? "#f00" : "#fff"
        })
      );
    }
  }

  // draw threading
  for (let i = 0; i < draft.shaft_count; i++) {
    for (let j = 0; j < drawdown_width / pixel_width; j++) {
      drawdown.appendChild(
        threadbox_factory({
          i,j,
          x: 800 - (j + 1) * pixel_width,
          y: 800 + 20 + i * pixel_width,
          fill: fill_threading(i, j, draft) ? "#000" : "#fff",
          onClick: warpClick,
        })
      );
    }
  }

  // draw tie-up
  for (let i = 0; i < draft.treadle_count; i++) {
    for (let j = 0; j < draft.shaft_count; j++) {
      drawdown.appendChild(
        threadbox_factory({
          i,j,
          x: 800 + 20 + i * pixel_width,
          y: 800 + 20 + j * pixel_width,
          fill: fill_tieup(i, j, draft) ? "#000" : "#fff"
        })
      );
    }
  }

  for (let i = 0; i < draft.treadle_count; i++) {
    for (let j = 0; j < drawdown_width / pixel_width; j++) {
      drawdown.appendChild(
        threadbox_factory({
          i,j,
          x: 800 + 20 + i * pixel_width,
          y: 800 - (j + 1) * pixel_width,
          fill: fill_treadling(i, j, draft) ? "#000" : "#fff"
        })
      );
    }
  }

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



const double_diagonal_twill = {
  shaft_count: 4,
  treadle_count: 6,
  warp: [1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4, 1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4],
  weft: [1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5],
  tieup: [[1, 3], [2, 4], [1, 2], [2, 3], [3, 4], [1, 4]]
};

//draw(double_diagonal_twill);
drawGrid(50, 50, 4, 6);