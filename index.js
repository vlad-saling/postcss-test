const fs = require('fs');
const postcss  = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssSimpleVars = require('postcss-simple-vars');

fs.readFile('style.source.css', (err, css) => {
    postcss([autoprefixer, postcssSimpleVars])
        .process(css, { from: 'tyle.source.css', to: 'style.css' })
        .then(result => {
            fs.writeFile('style.css', result.css);
            if ( result.map ) fs.writeFile('style.css.map', result.map);
        });
});