const fs = require('fs');
const postcss  = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const cssnano = require('cssnano');

fs.readFile('style.source.css', (err, css) => {
    postcss([autoprefixer, postcssSimpleVars, postcssNested, postcssMixins, cssnano])
        .process(css, { from: 'tyle.source.css', to: 'style.css' })
        .then(result => {
            fs.writeFile('style.css', result.css);
            if ( result.map ) fs.writeFile('style.css.map', result.map);
        });
});