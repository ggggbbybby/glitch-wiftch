let drawdown_width, drawdown_height;

const box = function(x, y, pixel_size, data={}) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", pixel_size);
  box.setAttribute("width", pixel_size);
  box.style.stroke = "#999";
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
  const y = drawdown_height - (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const warpbox = function(thread, treadle, pixel_size) {
  // warps start at (800, 820) & goes left-down
  const type = 'warp'
  const x = drawdown_width - (thread + 1)*pixel_size;
  const y = drawdown_height + (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const weftbox = function(thread, treadle, pixel_size) {
  // wefts start at (820, 800) & goes right-up
  const type = 'weft'
  const x = drawdown_width + (thread + 1)*pixel_size;
  const y = drawdown_height - (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const tieupbox = function(thread, treadle, pixel_size) {
  const type = 'tieup'
  const x = drawdown_width + (thread + 1)*pixel_size;
  const y = drawdown_height + (treadle + 1)*pixel_size;
  return box(x, y, pixel_size, {thread, treadle, type});
}

const weftcolorbox = function(col, row, pixel_size) {
  const type = 'weft-color'
  const x = (col * pixel_size);
  const y = drawdown_height - (row + 1)*pixel_size;
  return box(x, y, pixel_size, {thread: row, treadle: null, type})
}

const warpcolorbox = function(col, row, pixel_size) {
  const type = 'warp-color'
  const x = drawdown_width - (col + 1)*pixel_size;
  const y = row * pixel_size;
  return box(x, y, pixel_size, {thread: col, treadle: null, type})
}

const dimtype = function(dim, ranges) {
  // ranges looks like {0: thread, 4: gap, 5: treadle, 9: gap, 10: color} where each key is the start-point of the next type of box
  // haha this looks familiar
  let result;
  for (const rangeStart in ranges) {
    if (dim >= rangeStart) result = ranges[rangeStart]    
  }
  return result;
}

const drawGrid = function(svg, options) {
  // console.log(options)
  const {pixel_size, warps, wefts, shafts, treadles} = options;
  drawdown_width = pixel_size * warps;
  drawdown_height = pixel_size * wefts;
  for (let i = 0; i < warps + treadles + 3; i++) {
    for (let j = 0; j < wefts + shafts + 3; j++) {
      const col_type = dimtype(i, {0: "thread", [warps]: "gap", [warps + 1]: "treadle", [warps + treadles + 1]: "gap", [warps + treadles + 2]: "color"})
      const row_type = dimtype(j, {0: "thread", [wefts]: "gap", [wefts + 1]: "shaft", [wefts + shafts + 1]: "gap", [wefts + shafts + 2]: "color"})
      
      let box = null;
      if (col_type == 'gap' || row_type == 'gap') box = null;
      else if (col_type == 'color' && row_type == 'thread') box = weftcolorbox(i, j, pixel_size);
      else if (col_type == 'thread' && row_type == 'color') box = warpcolorbox(i, j, pixel_size);
      else if (col_type == 'thread' && row_type == 'thread') box = threadbox(i, j, pixel_size);
      else if (col_type == 'thread' && row_type == 'shaft') box = warpbox(i,(j - wefts - 1), pixel_size);
      else if (col_type == 'treadle' && row_type == 'thread') box = weftbox((i - warps - 1), j, pixel_size); // 0 -> treadles
      else if (col_type == 'treadle' && row_type == 'shaft') box = tieupbox((i - warps - 1), (j - wefts - 1), pixel_size);
      else box = null;
      
      if (box) svg.appendChild(box);
    }
  }
}