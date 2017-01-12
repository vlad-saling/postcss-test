const fs = require('fs');
const postcss  = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const cssnano = require('cssnano');
const postcssSelectorSource = require('postcss-selector-source');

fs.readFile('style.source.css', (err, css) => {
    postcss([postcssSelectorSource({
    cssRootDir: './',
    function(selectors) {
      console.log(selectors);
  }}), autoprefixer, postcssSimpleVars, postcssNested, postcssMixins, cssnano])
        .process(css, { from: 'style.source.css', to: 'style.css' })
        .then(result => {
            fs.writeFile('style.css', result.css);
            if ( result.map ) fs.writeFile('style.css.map', result.map);
        });
});