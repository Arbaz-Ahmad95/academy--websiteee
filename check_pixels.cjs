const { Jimp } = require('jimp');

async function check(filename) {
  const image = await Jimp.read(`public/assets/Images/${filename}`);
  console.log(`Dimensions: ${image.bitmap.width}x${image.bitmap.height}`);
  
  // Let's print some pixels from a few different regions:
  // 1. Center of the image (e.g. x=600, y=600)
  // 2. Mid-way to the edge (e.g. x=300, y=300)
  for (let y = 300; y < 310; y++) {
    let row = '';
    for (let x = 300; x < 310; x++) {
      const idx = (image.bitmap.width * y + x) * 4;
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      const a = image.bitmap.data[idx + 3];
      row += `(${r},${g},${b},${a}) `;
    }
    console.log(row);
  }
}

check('threat-golden-ticket.png');
