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

const generateWIF = function(draft) {
  
}
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