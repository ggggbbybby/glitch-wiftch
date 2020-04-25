const swatch_size = 50;
const palette_width = swatch_size * 12;
const colors = [
  {
    "color": "2000",
    "name": "ivory",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2000.jpg\")"
  },
  {
    "color": "2003",
    "name": "silver",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2003.jpg\")"
  },
  {
    "color": "2004",
    "name": "ash gray",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2004.jpg\")"
  },
  {
    "color": "2005",
    "name": "black",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2005.jpg\")"
  },
  {
    "color": "2006",
    "name": "sand",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2006.jpg\")"
  },
  {
    "color": "2008",
    "name": "daffodil",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2008.jpg\")"
  },
  {
    "color": "2009",
    "name": "goldenrod",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2009.jpg\")"
  },
  {
    "color": "2010",
    "name": "brass",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2010.jpg\")"
  },
  {
    "color": "2011",
    "name": "yellow ochre",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2011.jpg\")"
  },
  {
    "color": "2012",
    "name": "dandelion",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2012.jpg\")"
  },
  {
    "color": "2013",
    "name": "marigold",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2013.jpg\")"
  },
  {
    "color": "2014",
    "name": "pumpkin",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2014.jpg\")"
  },
  {
    "color": "2015",
    "name": "tomato",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2015.jpg\")"
  },
  {
    "color": "2016",
    "name": "cocoa",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2016.jpg\")"
  },
  {
    "color": "2017",
    "name": "copper",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2017.jpg\")"
  },
  {
    "color": "2018",
    "name": "chestnut",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2018.jpg\")"
  },
  {
    "color": "2019",
    "name": "light poppy",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2019.jpg\")"
  },
  {
    "color": "2020",
    "name": "light cardinal",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2020.jpg\")"
  },
  {
    "color": "2021",
    "name": "light watermelon",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2021.jpg\")"
  },
  {
    "color": "2022",
    "name": "watermelon",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2022.jpg\")"
  },
  {
    "color": "2023",
    "name": "boysenberry",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2023.jpg\")"
  },
  {
    "color": "2024",
    "name": "coral pink",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2024.jpg\")"
  },
  {
    "color": "2025",
    "name": "dusty plum",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2025.jpg\")"
  },
  {
    "color": "2026",
    "name": "grape",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2026.jpg\")"
  },
  {
    "color": "2027",
    "name": "pastel blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2027.jpg\")"
  },
  {
    "color": "2028",
    "name": "sky blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2028.jpg\")"
  },
  {
    "color": "2029",
    "name": "yale blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2029.jpg\")"
  },
  {
    "color": "2030",
    "name": "sapphire",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2030.jpg\")"
  },
  {
    "color": "2031",
    "name": "navy",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2031.jpg\")"
  },
  {
    "color": "2032",
    "name": "sea blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2032.jpg\")"
  },
  {
    "color": "2033",
    "name": "pine",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2033.jpg\")"
  },
  {
    "color": "2034",
    "name": "aquamarine",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2034.jpg\")"
  },
  {
    "color": "2035",
    "name": "aqua",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2035.jpg\")"
  },
  {
    "color": "2036",
    "name": "mint",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2036.jpg\")"
  },
  {
    "color": "2038",
    "name": "fern",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2038.jpg\")"
  },
  {
    "color": "2039",
    "name": "willow",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2039.jpg\")"
  },
  {
    "color": "2040",
    "name": "lime",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2040.jpg\")"
  },
  {
    "color": "2041",
    "name": "light pear",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2041.jpg\")"
  },
  {
    "color": "2042",
    "name": "pear",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2042.jpg\")"
  },
  {
    "color": "2043",
    "name": "asparagus",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2043.jpg\")"
  },
  {
    "color": "2044",
    "name": "sable",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2044.jpg\")"
  },
  {
    "color": "2045",
    "name": "black walnut",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2045.jpg\")"
  },
  {
    "color": "2046",
    "name": "cedar",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2046.jpg\")"
  },
  {
    "color": "2047",
    "name": "sienna",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2047.jpg\")"
  },
  {
    "color": "2048",
    "name": "khaki",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2048.jpg\")"
  },
  {
    "color": "2049",
    "name": "camel",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2049.jpg\")"
  },
  {
    "color": "2050",
    "name": "amber",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2050.jpg\")"
  },
  {
    "color": "2051",
    "name": "ladyslipper",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2051.jpg\")"
  },
  {
    "color": "2052",
    "name": "dusty rose",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2052.jpg\")"
  },
  {
    "color": "2053",
    "name": "orchid",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2053.jpg\")"
  },
  {
    "color": "2054",
    "name": "trillium",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2054.jpg\")"
  },
  {
    "color": "2055",
    "name": "indigo",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2055.jpg\")"
  },
  {
    "color": "2056",
    "name": "egyptian blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2056.jpg\")"
  },
  {
    "color": "2057",
    "name": "iceberg",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2057.jpg\")"
  },
  {
    "color": "2058",
    "name": "ultramarine",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2058.jpg\")"
  },
  {
    "color": "2059",
    "name": "teal",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2059.jpg\")"
  },
  {
    "color": "2060",
    "name": "persian blue",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2060.jpg\")"
  },
  {
    "color": "2061",
    "name": "lichen",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2061.jpg\")"
  },
  {
    "color": "2062",
    "name": "apple green",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2062.jpg\")"
  },
  {
    "color": "2063",
    "name": "emerald",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2063.jpg\")"
  },
  {
    "color": "2064",
    "name": "hunter green",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2064.jpg\")"
  },
  {
    "color": "2065",
    "name": "loden",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2065.jpg\")"
  },
  {
    "color": "2067",
    "name": "lilac",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2067.jpg\")"
  },
  {
    "color": "2068",
    "name": "maize",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2068.jpg\")"
  },
  {
    "color": "2069",
    "name": "grass",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2069.jpg\")"
  },
  {
    "color": "2070",
    "name": "pastel blue gray",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2070.jpg\")"
  },
  {
    "color": "2071",
    "name": "gold",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2071.jpg\")"
  },
  {
    "color": "2072",
    "name": "cream",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2072.jpg\")"
  },
  {
    "color": "2073",
    "name": "almond",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2073.jpg\")"
  },
  {
    "color": "2074",
    "name": "cyan",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2074.jpg\")"
  },
  {
    "color": "2075",
    "name": "light peach",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2075.jpg\")"
  },
  {
    "color": "2076",
    "name": "light aqua",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2076.jpg\")"
  },
  {
    "color": "2080",
    "name": "cardinal",
    "style": "url(\"https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2080.jpg\")"
  }
]

const swatch = function(fill, idx) {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  box.setAttribute("height", swatch_size);
  box.setAttribute("width", swatch_size);
  box.style.stroke = "#333";
  box.style.strokeWidth = "2px";
  box.setAttribute("fill", fill);
  box.setAttribute("y", swatch_size * idx);
  return box;
}

const drawPalette = function(svg) {
  const colors = [];
  colors.forEach((color, idx) => {
    svg.appendChild(swatch(color, idx));
  })
}