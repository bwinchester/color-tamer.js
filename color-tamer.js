/**
 *
 * Created by Brandon Winchester in 2013
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Brandon Winchester
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Use:
 * colorTamer.lightenMono(Hex String,n number of colors needed [,optional dynamic range ])
 * Hex (String): "#000000"
 * n number of colors needed (int): 14
 * Optional Dynamic Range (int): .5 (default .7, valid 0-1)
 *
 * Example:
 * colorTamer.lightenMono('#990000',14,.5);
 * colorTamer.darkenMono('#ffffff',14);
 */

if (!colorTamer) { var colorTamer = {}; }
(function () {

    var Color = function (myColor){
        return net.brehaut.Color(myColor);
    }

    var ratioGenerator = function(size,range){
        var range = range || .7;
        return parseFloat(range / size);
    }
    var toHex = function(scheme){
        var hexArray = [];
        for(var i = 0; i < scheme.length; i++){
            var hexValue = scheme[i].fromObject(scheme[i]).toCSS();
            hexArray.push(hexValue);
        }
        return hexArray;
    }
    var monochromaticArray = function(dark,color,size,ratio){
        color = colorTamer.Color(color);
        var scheme = [];
        for(var e = 0; e < size; e++){
            if(dark === true){
                scheme[e] = color.darkenByAmount(e * ratio);
            }else{
                scheme[e] = color.lightenByAmount(e * ratio);
            }
        }
        return toHex(scheme);
    }
    var darkenArray = function(color,size,range){
        var ratio = ratioGenerator(size,range);
        return monochromaticArray(true,color,size,ratio);
    }
    var lightenArray = function(color,size,range){
        var ratio = ratioGenerator(size,range);
        return monochromaticArray(false,color,size,ratio);
    }


    colorTamer.Color = Color;
    colorTamer.darkenMono = darkenArray;
    colorTamer.lightenMono = lightenArray;
}).call(colorTamer);