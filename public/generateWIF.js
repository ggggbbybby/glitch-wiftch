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
  const color_name = draft.warp_colors[0];
  const color = colors.find(c => c.name.replace(/\s+/g, '_') === color_name);
  return []
}

const weft_colors = function(draft) {
  return []
  const colors = unique_colors(draft);
  return draft.weft_colors.map(wc => {
    
  })
}

const unique_colors = function(draft) {
  const seen = new Set();
  seen.add(...draft.warp_colors);
  seen.add(...draft.weft_colors);
  return [...seen];
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
  download.href = url;
  download.download = `${title}.wif`;
}
