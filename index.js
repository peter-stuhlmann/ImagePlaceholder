const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  var width = req.query.w || '450px';
  var height = req.query.h || '300px';
  var text =
    req.query.text || (req.query.w || '300') + ' x ' + (req.query.h || '450');
  var background = req.query.background || '#4c4c4c';
  var color = req.query.color || '#fff';
  var border = req.query.border || background;
  var borderWidth = req.query.borderWidth || '1px';

  res.contentType('image/svg+xml');
  res.send(
    `<?xml version="1.0"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" stroke="${border}" stroke-width="${borderWidth}" fill="${background}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-family="Open Sans, sans-serif">${text}</text></svg>`
  );
});

app.listen(port, () =>
  console.log(`ImagePlaceholder is running on port ${port}!`)
);
