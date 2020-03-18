const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;
const pixel_width = 12;

const warpClick = function(thread, shaft, draft) {
  draft.warp[thread] = shaft;
  drawDraft(draft);
}

const weftClick = function(thread, treadle, draft) {
  draft.weft[thread] = treadle;
  drawDraft(draft);
}

const tieupClick = function(shaft, treadle, draft) {
  if (draft.tieup[treadle].includes(shaft)) {
    draft.tieup[treadle] = draft.tieup[treadle].filter((e) => e != shaft)
  } else {
    draft.tieup[treadle] << shaft;
  }
  drawDraft(draft);
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


drawGrid(drawdown, {warps: 65, wefts: 65, shafts: 4, treadles: 6});
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