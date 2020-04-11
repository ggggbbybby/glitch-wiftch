let drawdown_width, drawdown_height;

const box = function(x, y, pixel_size, data={}) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", pixel_size);
  box.setAttribute("width", pixel_size);
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

const threadbox = function(thread, treadle, pixel_size) {
  // threads start at down-right & goes left-up
  const type = 'drawdown'
  const x = drawdown_width - (thread + 1)*pixel_size;
  const y = drawdown_width - (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const warpbox = function(thread, treadle, pixel_size) {
  // warps start at (800, 820) & goes left-down
  const type = 'warp'
  const x = drawdown_width - (thread + 1)*pixel_size;
  const y = drawdown_width + (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const weftbox = function(thread, treadle, pixel_size) {
  // wefts start at (820, 800) & goes right-up
  const type = 'weft'
  const x = drawdown_width + (thread + 1)*pixel_size;
  const y = drawdown_width - (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const tieupbox = function(thread, treadle, pixel_size) {
  const type = 'tieup'
  const x = drawdown_width + (thread + 1)*pixel_size;
  const y = drawdown_width + (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const drawGrid = function(svg, options) {
  const {pixel_size, warps, wefts, shafts, treadles} = options;
  const rect = svg.getBoundingClientRect();
  drawdown_width = pixel_size * warps;
  drawdown_height = pixel_size * wefts;
  for (let i = 0; i < warps + treadles + 1; i++) {
    for (let j = 0; j < wefts + shafts + 1; j++) {
      // when i == width or j == height, make a gap for readability
      const col_type = i < warps ? 'thread' : (i > warps ? 'treadle' : 'gap');
      const row_type = j < wefts ? 'thread' : (j > wefts ? 'shaft' : 'gap');
      
      let box = null;
      if (col_type == 'gap' || row_type == 'gap') box = null;
      else if (col_type == 'thread' && row_type == 'thread') box = threadbox(i, j, pixel_size);
      else if (col_type == 'thread' && row_type == 'shaft') box = warpbox(i, j%wefts - 1, pixel_size);
      else if (col_type == 'treadle' && row_type == 'thread') box = weftbox(i%warps - 1 , j, pixel_size);
      else if (col_type == 'treadle' && row_type == 'shaft') box = tieupbox(i%warps - 1, j%wefts - 1, pixel_size);
      else box = null;
      
      if (box) svg.appendChild(box);
    }
  }
}