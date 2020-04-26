const swatch_size = 50;
const swatches_per_row = 12;
const colors = [
  {
    "color": "2000",
    "name": "ivory",
    "rgb": "201,193,179",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2000.jpg",
  },
  {
    "color": "2003",
    "name": "silver",
    "rgb": "160,160,159",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2003.jpg",
  },
  {
    "color": "2004",
    "name": "ash gray",
    "rgb": "120,114,113",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2004.jpg",
  },
  {
    "color": "2005",
    "name": "black",
    "rgb": "40,40,45",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2005.jpg",
  },
  {
    "color": "2006",
    "name": "sand",
    "rgb": "185,166,144",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2006.jpg",
  },
  {
    "color": "2008",
    "name": "daffodil",
    "rgb": "204,189,99",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2008.jpg",
  },
  {
    "color": "2009",
    "name": "goldenrod",
    "rgb": "225,181,22",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2009.jpg"
  },
  {
    "color": "2010",
    "name": "brass",
    "rgb": "188,133,72",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2010.jpg"
  },
  {
    "color": "2011",
    "name": "yellow ochre",
    "rgb": "158,106,62",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2011.jpg"
  },
  {
    "color": "2012",
    "name": "dandelion",
    "rgb": "231,169,21",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2012.jpg"
  },
  {
    "color": "2013",
    "name": "marigold",
    "rgb": "227,135,47",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2013.jpg"
  },
  {
    "color": "2014",
    "name": "pumpkin",
    "rgb": "215,108,58",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2014.jpg"
  },
  {
    "color": "2015",
    "name": "tomato",
    "rgb": "198,103,66",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2015.jpg"
  },
  {
    "color": "2016",
    "name": "cocoa",
    "rgb": "187,140,135",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2016.jpg"
  },
  {
    "color": "2017",
    "name": "copper",
    "rgb": "141,81,69",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2017.jpg"
  },
  {
    "color": "2018",
    "name": "chestnut",
    "rgb": "136,64,67",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2018.jpg"
  },
  {
    "color": "2019",
    "name": "light poppy",
    "rgb": "188,54,61",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2019.jpg"
  },
  {
    "color": "2020",
    "name": "light cardinal",
    "rgb": "171,40,53",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2020.jpg"
  },
  {
    "color": "2021",
    "name": "light watermelon",
    "rgb": "183,101,129",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2021.jpg"
  },
  {
    "color": "2022",
    "name": "watermelon",
    "rgb": "196,94,117",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2022.jpg"
  },
  {
    "color": "2023",
    "name": "boysenberry",
    "rgb": "147,43,73",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2023.jpg"
  },
  {
    "color": "2024",
    "name": "coral pink",
    "rgb": "197,127,131",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2024.jpg"
  },
  {
    "color": "2025",
    "name": "dusty plum",
    "rgb": "172,89,119",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2025.jpg"
  },
  {
    "color": "2026",
    "name": "grape",
    "rgb": "106,48,130",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2026.jpg"
  },
  {
    "color": "2027",
    "name": "pastel blue",
    "rgb": "126,133,165",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2027.jpg"
  },
  {
    "color": "2028",
    "name": "sky blue",
    "rgb": "85,102,156",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2028.jpg"
  },
  {
    "color": "2029",
    "name": "yale blue",
    "rgb": "65,61,132",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2029.jpg"
  },
  {
    "color": "2030",
    "name": "sapphire",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2030.jpg"
  },
  {
    "color": "2031",
    "name": "navy",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2031.jpg"
  },
  {
    "color": "2032",
    "name": "sea blue",
    "rgb": "76,143,142",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2032.jpg"
  },
  {
    "color": "2033",
    "name": "pine",
    "rgb": "33,94,87",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2033.jpg"
  },
  {
    "color": "2034",
    "name": "aquamarine",
    "rgb": "159,186,179",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2034.jpg"
  },
  {
    "color": "2035",
    "name": "aqua",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2035.jpg"
  },
  {
    "color": "2036",
    "name": "mint",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2036.jpg"
  },
  {
    "color": "2038",
    "name": "fern",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2038.jpg"
  },
  {
    "color": "2039",
    "name": "willow",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2039.jpg"
  },
  {
    "color": "2040",
    "name": "lime",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2040.jpg"
  },
  {
    "color": "2041",
    "name": "light pear",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2041.jpg"
  },
  {
    "color": "2042",
    "name": "pear",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2042.jpg"
  },
  {
    "color": "2043",
    "name": "asparagus",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2043.jpg"
  },
  {
    "color": "2044",
    "name": "sable",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2044.jpg"
  },
  {
    "color": "2045",
    "name": "black walnut",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2045.jpg"
  },
  {
    "color": "2046",
    "name": "cedar",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2046.jpg"
  },
  {
    "color": "2047",
    "name": "sienna",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2047.jpg"
  },
  {
    "color": "2048",
    "name": "khaki",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2048.jpg"
  },
  {
    "color": "2049",
    "name": "camel",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2049.jpg"
  },
  {
    "color": "2050",
    "name": "amber",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2050.jpg"
  },
  {
    "color": "2051",
    "name": "ladyslipper",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2051.jpg"
  },
  {
    "color": "2052",
    "name": "dusty rose",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2052.jpg"
  },
  {
    "color": "2053",
    "name": "orchid",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2053.jpg"
  },
  {
    "color": "2054",
    "name": "trillium",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2054.jpg"
  },
  {
    "color": "2055",
    "name": "indigo",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2055.jpg"
  },
  {
    "color": "2056",
    "name": "egyptian blue",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2056.jpg"
  },
  {
    "color": "2057",
    "name": "iceberg",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2057.jpg"
  },
  {
    "color": "2058",
    "name": "ultramarine",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2058.jpg"
  },
  {
    "color": "2059",
    "name": "teal",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2059.jpg"
  },
  {
    "color": "2060",
    "name": "persian blue",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2060.jpg"
  },
  {
    "color": "2061",
    "name": "lichen",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2061.jpg"
  },
  {
    "color": "2062",
    "name": "apple green",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2062.jpg"
  },
  {
    "color": "2063",
    "name": "emerald",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2063.jpg"
  },
  {
    "color": "2064",
    "name": "hunter green",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2064.jpg"
  },
  {
    "color": "2065",
    "name": "loden",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2065.jpg"
  },
  {
    "color": "2067",
    "name": "lilac",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2067.jpg"
  },
  {
    "color": "2068",
    "name": "maize",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2068.jpg"
  },
  {
    "color": "2069",
    "name": "grass",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2069.jpg"
  },
  {
    "color": "2070",
    "name": "pastel blue gray",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2070.jpg"
  },
  {
    "color": "2071",
    "name": "gold",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2071.jpg"
  },
  {
    "color": "2072",
    "name": "cream",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2072.jpg"
  },
  {
    "color": "2073",
    "name": "almond",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2073.jpg"
  },
  {
    "color": "2074",
    "name": "cyan",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2074.jpg"
  },
  /* skip one color because I want these to fit in a tidy 6x12 grid
  {
    "color": "2075",
    "name": "light peach",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2075.jpg"
  },
  */
  {
    "color": "2076",
    "name": "light aqua",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2076.jpg"
  },
  {
    "color": "2080",
    "name": "cardinal",
    "rgb": "",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2080.jpg"
  }
]

const swatchBox = function(color, coords) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", swatch_size);
  box.setAttribute("width", swatch_size);
  box.style.stroke = "#333";
  box.style.strokeWidth = "2px";
  box.setAttribute("fill", `url(#${color.name.replace(/\s+/g, '_')})`);
  box.setAttribute("x", coords.x);
  box.setAttribute("y", coords.y);
  return box;
}

const drawPalette = function(svg) {
  const palette_width = swatch_size * swatches_per_row;
  const palette_height = swatch_size * Math.ceil(colors.length / swatches_per_row);
  svg.setAttribute("width", palette_width);
  svg.setAttribute("height", palette_height);
  
  const xy = (index) => {
    return {
      x: swatch_size * (index % swatches_per_row),
      y: swatch_size * (Math.floor(index / swatches_per_row)),
    }
  }
  const pattern_defs = svg.querySelector('defs');
  colors.forEach((color, idx) => {
    const coordinates = xy(idx);
    const swatch = swatchBox(color, coordinates);
    swatch.addEventListener('click', (click) => {
      console.log("you clicked on swatch", color.name);
      document.getElementById('selected-color').setAttribute('value', color.name.replace(/\s+/g, '_'));
    });
    svg.appendChild(swatch);
  })
}