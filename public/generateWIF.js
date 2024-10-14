const threading_sequence = function(draft) {
  const length = document.getElementById("warp-threads").value;
  return draft.warp.slice(0, length).map((shaft, index) => `${index + 1}=${shaft}`);
};

const tieup_sequence = function(draft) {
  const length = document.getElementById("weft-threads").value;
  return draft.tieup.slice(0, length).map(
    (shafts, index) => `${index + 1}=${shafts.join(",")}`
  );
};

const treadling_sequence = function(draft) {
  const length = document.getElementById("weft-threads").value;
  return draft.weft.slice(0, length).map((treadle, index) => `${index + 1}=${treadle}`);
};

const warp_colors = function(draft) {
  const colors = unique_colors(draft);
  return Object.keys(draft.warp_colors).map(warp_thread => {
    if (warp_thread !== 'default') {
      const thread = parseInt(warp_thread);
      const color = draft.warp_colors[thread];
      const c_index = colors.indexOf(color) + 1;
      return `${thread + 1}=${c_index}`;
    }
  })
}

const weft_colors = function(draft) {
  const colors = unique_colors(draft);
  return Object.keys(draft.weft_colors).map(weft_thread => {
    if (weft_thread !== 'default') {
      const color = draft.weft_colors[weft_thread];
      const c_index = colors.indexOf(color) + 1;
      return `${parseInt(weft_thread) + 1}=${c_index}`
    }
  })
}

const unique_colors = function(draft) {
  const colors = new Set();
  // to make things easier, colors 1 & 2 are always default warp & weft
  colors.add(draft.warp_colors.default);
  colors.add(draft.weft_colors.default);
  Object.keys(draft.warp_colors).forEach(c_index => c_index !== "default" && colors.add(draft.warp_colors[c_index]))
  Object.keys(draft.weft_colors).forEach(c_index => c_index !== "default" && colors.add(draft.weft_colors[c_index]))
  return [...colors];
}

const color_table = function(draft) {
  return unique_colors(draft).map((c, i) => `${i+1}=${c}`);
}

const generateWIF = function(draft) {
  const today = new Date().toDateString();
  const title = document.getElementsByTagName("h1")[0].textContent;
  const wif = [
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
    "COLOR TABLE=true",
    "WARP=true",
    "WEFT=true",    
    "WARP COLORS=true",
    "WEFT COLORS=true",
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
    "Rising Shed=false",
    `Shafts=${Math.max(...draft.warp)}`,
    `Treadles=${draft.tieup.length}`,
    "",
    "[COLOR TABLE]",
    ...color_table(draft),
    "",
    "[WARP]",
    "Units=centimeters",
    "Color=1",
    `Threads=${Math.min(document.getElementById("warp-threads").value, draft.warp.length)}`,
    "Spacing=0.2117",
    "Thickness=0.2117",
    "",
    "[WARP COLORS]",
    ...warp_colors(draft),
    "",
    "[WEFT]",
    "Units=centimeters",
    "Color=2",
    `Threads=${Math.min(document.getElementById("weft-threads").value, draft.weft.length)}`,
    "Spacing=0.2117",
    "Thickness=0.2117",
    "",
    "[WEFT COLORS]",
    ...weft_colors(draft),
    "",
    "[COLOR PALETTE]",
    `Entries=${unique_colors(draft).length}`,
    "Range=0,255"
  ];

  const wif_out = wif.join("\n");
  // console.log(wif_out);

  const wifbox = document.getElementById("wif-preview");
  wifbox.textContent = wif_out;

  const download = document.getElementById("download-wif");
  const wif_file = new Blob([wif_out], { type: "text/plain" });
  const url = window.URL.createObjectURL(wif_file);
  let wif_title = document.getElementById("wif-title").value || "glitch-wiftch"
  download.href = url;
  download.download = `${wif_title}.wif`;
}
