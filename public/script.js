const drawdown = document.getElementById("drawdown");
const palette = document.getElementById("palette");

const [pixel_size, warp_thread_count, weft_thread_count, shaft_count, treadle_count] = ["pixel-size", "warp-threads", "weft-threads", "shafts", "treadles"].map((id) => document.getElementById(id));

const pixel_width = parseInt(pixel_size.value);

let draft = {
  shaft_count: 4,
  treadle_count: 4,
  warp: [1, 2, 3, 4],
  weft: [1, 2, 3, 4],
  weft_colors: {default: "#f00"},
  warp_colors: {default: "#fff"},
  //treadle_count: 6,
  //warp: [1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4, 1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4],
  //weft: [1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5],
  //tieup: [[1, 3], [2, 4], [1, 2], [2, 3], [3, 4], [1, 4]]
  tieup: [[1], [2], [3], [4]]
};


const pt = drawdown.createSVGPoint();
const toggle_shaft = (shafts, shaft) => {
  if (!shafts) {
    return [shaft];
  } else if (shafts.includes(shaft)) {
    return shafts.filter((s) => s != shaft);
  } else {
    return [shaft, ...shafts];
  }
}

const onclick_dimtype = function(dim, ranges) {
  let result;
  for (rangeStart in ranges) {
    if (dim > rangeStart) result = ranges[rangeStart]
  }
  return result;
}

drawdown.addEventListener('click', (click) => {
  pt.x = click.clientX;
  pt.y = click.clientY;
  const cursorpt = pt.matrixTransform(drawdown.getScreenCTM().inverse());
  const {x, y} = cursorpt;
  
  const {pixel_size, warps, wefts, shafts, treadles} = getState();
  const drawdown_width = warps * pixel_size;
  const drawdown_height = wefts * pixel_size;
  
  const col_type = onclick_dimtype(x, {0: 'warp', [drawdown_width]: 'gap', [drawdown_width + pixel_size]: 'treadle', [drawdown_width + pixel_size + (treadles * pixel_size)]: 'gap', [drawdown_width + pixel_size + (treadles * pixel_size) + pixel_size]: 'color'});
  const row_type = onclick_dimtype(y, {0: 'weft', [drawdown_height]: 'gap', [drawdown_height + pixel_size]: 'shaft', [drawdown_height + pixel_size + (shafts * pixel_size)]: 'gap', [drawdown_height + pixel_size + (shafts * pixel_size) + pixel_size]: 'color'});
  
  let col;
  switch (col_type) {
    case 'warp':
      col = drawdown_width - x;
      break;
    case 'treadle':
      col = x - drawdown_width - pixel_size;
      break;
  }
  col = Math.floor(col / pixel_size)
  
  let row;
  switch (row_type) {
    case 'weft':
      row = drawdown_height - y;
      break;
    case 'shaft':
      row = y - drawdown_height - pixel_size;
      break;
  }
  row = Math.floor(row / pixel_size);
  
  console.log(`you clicked on ${col_type}-${row_type} @ ${col},${row}`);
  if (col_type == 'color' && row_type == 'weft') {
    const new_color = document.getElementById('selected-color').value;
    console.log(`Setting draft.weft_colors[${row}] to ${new_color}`)
    draft.weft_colors[row] = new_color;
  }
  
  else if (row_type == 'color' && col_type == 'warp') {
    const new_color = document.getElementById('selected-color').value;
    console.log(`Setting draft.warp_colors[${col}] to ${new_color}`);
    draft.warp_colors[col] = new_color;
    
  } else {
    // add repeats to draft so that our click isn't out of bounds
    const single_warp_repeat = draft.warp.slice();
    while (col > draft.warp.length) draft.warp = draft.warp.concat(single_warp_repeat).slice(0, warp_thread_count.value);
    const single_weft_repeat = draft.weft.slice();
    while (row > draft.weft.length) draft.weft = draft.weft.concat(single_weft_repeat).slice(0, weft_thread_count.value);

    if (col_type == 'warp' && row_type == 'shaft') draft.warp[col] = row + 1
    if (col_type == 'treadle' && row_type == 'weft') draft.weft[row] = col + 1;
    if (col_type == 'treadle' && row_type == 'shaft') draft.tieup[col] = toggle_shaft(draft.tieup[col], row + 1);    
  }
  

  drawDraft(drawdown, draft);
  generateWIF(draft);
})

const clearGrid = function(grid) {
  while (grid.firstChild) {
    grid.firstChild.remove();
  }
}

const getState = function() {
  // read state from selectors
  return {
    pixel_size: parseInt(pixel_size.value),
    warps: parseInt(warp_thread_count.value),
    wefts: parseInt(weft_thread_count.value),
    shafts: parseInt(shaft_count.value),
    treadles: parseInt(treadle_count.value),
  }
}


const readState = function(draft) {
  return {
    pixel_size: 12,
    warps: draft.warp.length ,
    wefts: draft.weft.length ,
    shafts: Math.max(...draft.warp),
    treadles: draft.tieup.length,
  }
}

const setState = function(state) {
  pixel_size.value = state.pixel_size;
  warp_thread_count.value = state.warps;
  weft_thread_count.value = state.wefts;
  shaft_count.value = state.shafts;
  treadle_count.value = state.treadles;
}

const setSize = function(state) {
  const drawdown_width = state.pixel_size * (state.warps + state.treadles + 3)
  const drawdown_height = state.pixel_size * (state.wefts + state.shafts + 3)
  drawdown.setAttribute('height', drawdown_height);
  drawdown.setAttribute('width', drawdown_width);
}

const redrawGrid = function() {
  const state = getState();
  clearGrid(drawdown);
  
  setSize(state);
  drawGrid(drawdown, state);
  drawDraft(drawdown, draft);
  generateWIF(draft);
}

pixel_size.addEventListener('change', () => redrawGrid());
warp_thread_count.addEventListener('change', () => redrawGrid());
weft_thread_count.addEventListener('change', () => redrawGrid());
shaft_count.addEventListener('change', () => redrawGrid());
treadle_count.addEventListener('change', () => redrawGrid());

const initialState = readState(draft);
setState(initialState);
setSize(initialState);
drawGrid(drawdown, getState());
drawDraft(drawdown, draft);
drawPalette(palette);
generateWIF(draft);