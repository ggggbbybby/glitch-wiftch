const swatch_size = 50;
const swatches_per_row = 12;
const colors = [
  {
    "color": "2000",
    "name": "ivory",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2000.jpg",
  },
  {
    "color": "2003",
    "name": "silver",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2003.jpg",
  },
  {
    "color": "2004",
    "name": "ash gray",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2004.jpg",
  },
  {
    "color": "2005",
    "name": "black",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2005.jpg",
  },
  {
    "color": "2006",
    "name": "sand",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2006.jpg",
  },
  {
    "color": "2008",
    "name": "daffodil",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2008.jpg",
  },
  {
    "color": "2009",
    "name": "goldenrod",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2009.jpg"
  },
  {
    "color": "2010",
    "name": "brass",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2010.jpg"
  },
  {
    "color": "2011",
    "name": "yellow ochre",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2011.jpg"
  },
  {
    "color": "2012",
    "name": "dandelion",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2012.jpg"
  },
  {
    "color": "2013",
    "name": "marigold",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2013.jpg"
  },
  {
    "color": "2014",
    "name": "pumpkin",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2014.jpg"
  },
  {
    "color": "2015",
    "name": "tomato",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2015.jpg"
  },
  {
    "color": "2016",
    "name": "cocoa",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2016.jpg"
  },
  {
    "color": "2017",
    "name": "copper",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2017.jpg"
  },
  {
    "color": "2018",
    "name": "chestnut",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2018.jpg"
  },
  {
    "color": "2019",
    "name": "light poppy",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2019.jpg"
  },
  {
    "color": "2020",
    "name": "light cardinal",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2020.jpg"
  },
  {
    "color": "2021",
    "name": "light watermelon",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2021.jpg"
  },
  {
    "color": "2022",
    "name": "watermelon",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2022.jpg"
  },
  {
    "color": "2023",
    "name": "boysenberry",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2023.jpg"
  },
  {
    "color": "2024",
    "name": "coral pink",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2024.jpg"
  },
  {
    "color": "2025",
    "name": "dusty plum",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2025.jpg"
  },
  {
    "color": "2026",
    "name": "grape",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2026.jpg"
  },
  {
    "color": "2027",
    "name": "pastel blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2027.jpg"
  },
  {
    "color": "2028",
    "name": "sky blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2028.jpg"
  },
  {
    "color": "2029",
    "name": "yale blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2029.jpg"
  },
  {
    "color": "2030",
    "name": "sapphire",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2030.jpg"
  },
  {
    "color": "2031",
    "name": "navy",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2031.jpg"
  },
  {
    "color": "2032",
    "name": "sea blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2032.jpg"
  },
  {
    "color": "2033",
    "name": "pine",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2033.jpg"
  },
  {
    "color": "2034",
    "name": "aquamarine",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2034.jpg"
  },
  {
    "color": "2035",
    "name": "aqua",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2035.jpg"
  },
  {
    "color": "2036",
    "name": "mint",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2036.jpg"
  },
  {
    "color": "2038",
    "name": "fern",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2038.jpg"
  },
  {
    "color": "2039",
    "name": "willow",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2039.jpg"
  },
  {
    "color": "2040",
    "name": "lime",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2040.jpg"
  },
  {
    "color": "2041",
    "name": "light pear",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2041.jpg"
  },
  {
    "color": "2042",
    "name": "pear",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2042.jpg"
  },
  {
    "color": "2043",
    "name": "asparagus",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2043.jpg"
  },
  {
    "color": "2044",
    "name": "sable",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2044.jpg"
  },
  {
    "color": "2045",
    "name": "black walnut",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2045.jpg"
  },
  {
    "color": "2046",
    "name": "cedar",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2046.jpg"
  },
  {
    "color": "2047",
    "name": "sienna",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2047.jpg"
  },
  {
    "color": "2048",
    "name": "khaki",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2048.jpg"
  },
  {
    "color": "2049",
    "name": "camel",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2049.jpg"
  },
  {
    "color": "2050",
    "name": "amber",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2050.jpg"
  },
  {
    "color": "2051",
    "name": "ladyslipper",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2051.jpg"
  },
  {
    "color": "2052",
    "name": "dusty rose",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2052.jpg"
  },
  {
    "color": "2053",
    "name": "orchid",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2053.jpg"
  },
  {
    "color": "2054",
    "name": "trillium",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2054.jpg"
  },
  {
    "color": "2055",
    "name": "indigo",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2055.jpg"
  },
  {
    "color": "2056",
    "name": "egyptian blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2056.jpg"
  },
  {
    "color": "2057",
    "name": "iceberg",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2057.jpg"
  },
  {
    "color": "2058",
    "name": "ultramarine",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2058.jpg"
  },
  {
    "color": "2059",
    "name": "teal",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2059.jpg"
  },
  {
    "color": "2060",
    "name": "persian blue",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2060.jpg"
  },
  {
    "color": "2061",
    "name": "lichen",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2061.jpg"
  },
  {
    "color": "2062",
    "name": "apple green",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2062.jpg"
  },
  {
    "color": "2063",
    "name": "emerald",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2063.jpg"
  },
  {
    "color": "2064",
    "name": "hunter green",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2064.jpg"
  },
  {
    "color": "2065",
    "name": "loden",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2065.jpg"
  },
  {
    "color": "2067",
    "name": "lilac",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2067.jpg"
  },
  {
    "color": "2068",
    "name": "maize",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2068.jpg"
  },
  {
    "color": "2069",
    "name": "grass",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2069.jpg"
  },
  {
    "color": "2070",
    "name": "pastel blue gray",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2070.jpg"
  },
  {
    "color": "2071",
    "name": "gold",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2071.jpg"
  },
  {
    "color": "2072",
    "name": "cream",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2072.jpg"
  },
  {
    "color": "2073",
    "name": "almond",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2073.jpg"
  },
  {
    "color": "2074",
    "name": "cyan",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2074.jpg"
  },
  {
    "color": "2075",
    "name": "light peach",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2075.jpg"
  },
  {
    "color": "2076",
    "name": "light aqua",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2076.jpg"
  },
  {
    "color": "2080",
    "name": "cardinal",
    "url": "https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2080.jpg"
  }
]

/*
            <defs>
              <pattern id="sample" width="50" height="50">
                <image xlink:href="https://store.vavstuga.com/mm5/graphics/00000001/th-yarn-bock-cot-lin-22-2-2000.jpg"></image>
              </pattern>
            </defs>
            <rect width="50" height="50" fill="url(#sample)"></rect>
*/
const backgroundPattern = function(color) {
  let pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
  pattern.setAttribute('id', color.name.replace(/\s+/g, '_'));
  pattern.setAttribute("width", swatch_size);
  pattern.setAttribute("height", swatch_size);
  let bg_image = document.createElement("image");
  bg_image.setAttribute("xlink:href", color.url)
  pattern.appendChild(bg_image);
  return pattern;
}
const swatch = function(color, coords) {
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
  const xy = (index) => {
    return {
      x: swatch_size * (index % swatches_per_row),
      y: swatch_size * (Math.floor(index / swatches_per_row)),
    }
  }
  const pattern_defs = svg.querySelector('defs');
  colors.forEach((color, idx) => {
    const coordinates = xy(idx);
    pattern_defs.appendChild(backgroundPattern(color));
    svg.appendChild(swatch(color, coordinates));
  })
}