# Masonry Gallery
Masonry gallery with CSS grid system to support 5 tiles in a row. Responsive support for **Desktop/ Tablet / Mobile**

----
## How to Run?

```
npm install
npm start
```

--------
## Attributes of Masonry


### Columns
This gallery supports 5 tiles max for desktop. On tablet the tiles will gracefully be adjusted in 2 column Grids. On mobile the tiles will be stacked below each other
**Options**: col1, col2, col3, col4, col5

### Rounded
To choose if the tiles needs to be with rounded corners or sharp corners
- rounded-1, rounded-2, rounded-3, rounded-4

### Gap
To choose gap between tiles
**Options**: gap1, gap2, gap3, gap4, gap5

### Type of Gallery
Support for different variations for the type of gallery
- Image Only
- Content with Image Bg
- Card
- Only content (New!)

### Clickable Tiles
For enabling if the tiles can be clickable itself or through the link if configured

### Tile Items
Each tile items can have below attributes for defining variations of the tile
- Choose Focused (New!)
  For ordering the tile to start (only for tablet view)
- Choose width spanning (**Options**: w1, w2, w3, w4, w5)
  For attaining the width of tile (for eg. in col4 layout a tile can attain 2 columns by itself)
- Choose height spanning (**Options**: w1, w2, w3, w4, w5) 
  For attaining the height of tile (for eg. in col4 layout a tile can attain 2 rows by itself)


### Notes
- Tile items spanning will be off marginally in terms of alignment, if the rows and columns are lesser and spanning values for height and width are higher accordingly.
- If there are 2 or more focused tiles those will be ordered sequentially as configured.