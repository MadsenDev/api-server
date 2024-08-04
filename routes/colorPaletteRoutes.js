const express = require('express');
const chroma = require('chroma-js');
const router = express.Router();

// Function to generate analogous colors manually
const generateAnalogousColors = (baseColor, numColors) => {
  const scale = chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+30'), chroma(baseColor).set('hsl.h', '-30')]);
  return scale.colors(numColors);
};

// Function to generate a harmonious color palette
const generateColorPalette = (baseColor, numColors, scheme) => {
  let palette;
  switch (scheme) {
    case 'analogous':
      palette = generateAnalogousColors(baseColor, numColors);
      break;
    case 'complementary':
      palette = chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+180')]).mode('lch').colors(numColors);
      break;
    case 'triadic':
      palette = chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+120'), chroma(baseColor).set('hsl.h', '-120')]).mode('lch').colors(numColors);
      break;
    case 'monochromatic':
      palette = chroma.scale([baseColor].concat(chroma(baseColor).darken(numColors - 1).colors())).mode('lch').colors(numColors);
      break;
    default:
      palette = chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+180')]).mode('lch').colors(numColors);
  }
  return palette;
};

// Endpoint to generate a color palette
router.get('/', (req, res) => {
  const numColors = parseInt(req.query.numColors) || 5;
  const baseColor = req.query.baseColor || '#3498db'; // Default base color
  const scheme = req.query.scheme || 'complementary'; // Default color scheme
  const palette = generateColorPalette(baseColor, numColors, scheme);
  res.json({ palette });
});

module.exports = router;