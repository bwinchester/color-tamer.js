# Intro

This is a simple wrapper around a great [color.js](https://github.com/brehaut/color-js) library that extends the library by adding common color scale builder methods. The methods return an array of string HEX values commonly used by visualization libraries.

`color.js` also has some great color methods and schemes (but not monotone scales). You can access these methods with either 

 * `colorTamer.Color(HEX)` : colorTamer's wrapper to `color.js`
 * `net.brehaut.Color(HEX)` : `color.js`'s original scope space

# Install

1. copy 'color.js' and 'color-tamer.js' into your project's lib folder
2. include these two files in your html page

# Hex array builder

 * `colorTamer.lightenMono(HEX, n [, dynamic range])`
 * Takes a darker color and returns n number of HEX values of similar tone
 * `colorTamer.darkenMono(HEX, n [, dynamic range])` 
 * Takes a lighter color and returns n number of HEX values of similar tone

# Input Variables

 * `HEX` : String HEX value (eg "#FFFFFF")
 * `n` : int of the number of colors needed (eg 14)
 * OPTIONAL `dynamic range` : int between 0 and 1, default is .7

# Dynamic Range

DR is an integer between 0 and 1. It's the lightness value of a color. Setting a colorTamer scale's DR to 0 will return an array scale that traverses 0 in lightness and effectively create an array of n of all of the same colors.

Setting the DR to 1 will scale your color from the HEX input value WHITE or BLACK, depending if you are creating a darken or lightenMono scale.

Default is .7 so that the last few colors maintain a tone of the original color as most color scales wouldn't want a completely black or white color in the scale, for visibility purposes. 

# Examples
 * `var colorArray = colorTamer.darkenMono('#FFFFFF',14);`
Returns:
["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959"] 

 * `colorTamer.lightenMono('#000000',14);`
Returns:
["#000000", "#0D0D0D", "#191919", "#262626", "#333333", "#404040", "#4D4D4D", "#595959", "#666666", "#737373", "#7F7F7F", "#8C8C8C", "#999999", "#A6A6A6"] 