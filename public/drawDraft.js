const drawDraft = function(svg, draft) {

  const fill_drawdown = function(i, j) {
    let col = i % draft.warp.length;
    let row = j % draft.weft.length;
    let treadle = draft.weft[row];
    let shafts_down = draft.tieup[treadle - 1];
    // (!shafts_down) debugger;
    let shaft = draft.warp[col];
    return shafts_down.includes(shaft);
  };

  const fill_threading = function(col, row) {
    return draft.warp[col % draft.warp.length] == row + 1;
  };

  const fill_tieup = function(i, j) {
    let treadle = i;
    let shaft = j  + 1;
    // (!draft.tieup[treadle]) debugger;
    return draft.tieup[treadle].includes(shaft);
  };

  const fill_treadling = function(i, j) {
    let treadle = i + 1;
    let row = j % draft.weft.length;
    return draft.weft[row] == treadle;
  };
  
  svg.querySelectorAll('rect').forEach((child) => {
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
};