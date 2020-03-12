const warpClick = function(thread, shaft, draft) {
  draft.warp[thread] = shaft;
  draw(draft);
}

const draw = function(draft) {
  const drawdown = document.getElementById("drawdown");
  const drawdown_width = 800;
  const pixel_width = 12;

  const threadbox_factory = function({ i, j, x, y, fill, onClick=null }) {
    let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    box.setAttribute("height", pixel_width);
    box.setAttribute("width", pixel_width);
    box.style.stroke = "#333";
    box.style.strokeWidth = "2px";
    box.setAttribute("x", x);
    box.setAttribute("y", y);
    box.setAttribute("fill", fill);
    if (onClick) box.addEventListener("click", () => { onClick(j, i+1, draft) })
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
  console.log(wif_out);

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

draw(double_diagonal_twill);
