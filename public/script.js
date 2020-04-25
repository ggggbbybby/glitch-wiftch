const drawdown = document.getElementById("drawdown");

const [pixel_size, warp_thread_count, weft_thread_count, shaft_count, treadle_count] = ["pixel-size", "warp-threads", "weft-threads", "shafts", "treadles"].map((id) => document.getElementById(id));

const pixel_width = parseInt(pixel_size.value);

let draft = {
  shaft_count: 4,
  treadle_count: 4,
  warp: [1, 2, 3, 4],
  weft: [1, 2, 3, 4],
  weft_colors: ["#f00"],
  warp_colors: ["#fff"],
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

drawdown.addEventListener('click', (click) => {
  pt.x = click.clientX;
  pt.y = click.clientY;
  const cursorpt = pt.matrixTransform(drawdown.getScreenCTM().inverse());
  const {x, y} = cursorpt;
  
  const {pixel_size, warps, wefts, shafts, treadles} = getState();
  const drawdown_width = warps * pixel_size;
  const drawdown_height = wefts * pixel_size;
  
  const col_type = x < drawdown_width ? 'warp' : (x > drawdown_width ? 'treadle' : 'gap');
  const row_type = y < drawdown_height ? 'weft' : (y > drawdown_height ? 'shaft' : 'gap');
  
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
  // add extra threads to draft so that our click isn't out of bounds
  const single_warp_repeat = [...Array()]
  
  while (col > draft.warp.length) {
    draft.warp = draft.warp.concat(single_warp_repeat);
  }
  const single_weft_repeat = draft.weft.slice();
  while (row > draft.weft.length) draft.weft = draft.weft.concat(single_weft_repeat);
  
  if (col_type == 'warp' && row_type == 'shaft') draft.warp[col] = row + 1
  if (col_type == 'treadle' && row_type == 'weft') draft.weft[row] = col + 1;
  if (col_type == 'treadle' && row_type == 'shaft') draft.tieup[col] = toggle_shaft(draft.tieup[col], row + 1);
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
generateWIF(draft);