const drawdown = document.getElementById("drawdown");
const drawdown_width = 800;

const [pixel_size, warp_thread_count, weft_thread_count, shaft_count, treadle_count] = ["pixel-size", "warp-threads", "weft-threads", "shafts", "treadles"].map((id) => document.getElementById(id));

const pixel_width = parseInt(pixel_size.value);

let draft = {
  shaft_count: 4,
  treadle_count: 4,
  warp: [1, 2, 3, 4],
  weft: [1, 2, 3, 4],
  //treadle_count: 6,
  //warp: [1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4, 1, 4, 2, 1, 3, 2, 4, 3, 1, 4, 2, 1, 3, 2, 4, 2, 3, 1, 2, 4, 1, 3, 4, 2, 3, 1, 2, 4],
  //weft: [1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 3, 2, 4, 1, 5, 2, 6, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5, 1, 4, 2, 3, 1, 6, 2, 5],
  //tieup: [[1, 3], [2, 4], [1, 2], [2, 3], [3, 4], [1, 4]]
  tieup: [[1], [2], [3], [4]]
};


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
  
  //console.log(`you clicked on ${col_type}-${row_type} @ ${col},${row}`);
  
  if (col_type == 'warp' && row_type == 'shaft') draft.warp[col%draft.warp.length] = row + 1
  if (col_type == 'treadle' && row_type == 'weft') draft.weft[row%draft.weft.length] = col + 1;
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

const redrawGrid = function() {
  clearGrid(drawdown);
  drawGrid(drawdown, getState());
  drawDraft(drawdown, draft);
}

pixel_size.addEventListener('change', () => redrawGrid());
warp_thread_count.addEventListener('change', () => redrawGrid());
weft_thread_count.addEventListener('change', () => redrawGrid());
shaft_count.addEventListener('change', () => redrawGrid());
treadle_count.addEventListener('change', () => redrawGrid());

drawGrid(drawdown, getState());
drawDraft(drawdown, draft);
generateWIF(draft);