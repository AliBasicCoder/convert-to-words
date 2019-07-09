# convert-to-words
[![npm](https://img.shields.io/npm/v/convert-to-words.svg)](https://www.npmjs.com/package/convert-to-words)
[![GitHub](https://img.shields.io/github/license/AliBasicCoder/convert-to-words.svg)](https://github.com/AliBasicCoder/convert-to-words/)
[![npm bundle size](https://img.shields.io/bundlephobia/min/convert-to-words.svg?style=plastic)](https://bundlephobia.com/result?p=convert-to-words@latest)
[![npm](https://img.shields.io/npm/dm/convert-to-words.svg)](https://www.npmjs.com/package/convert-to-words)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAliBasicCoder%2Fconvert-to-words.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2FAliBasicCoder%2Fconvert-to-words?ref=badge_small)

[convert-to-words](https://github.com/AliBasicCoder/convert-to-words/) is a small javaScript TypeScript lib helps you to convert any number up
to 10^300 and also covers deciamal numbers and
if its in the numbers you want to convert ar in dome txt you don't
want to cahnge it will do that for you be default 
# example
```js
// bring it
const convert = require('convert-to-words');
// use it
var res = convert(10234);
// console log it
console.log(res); // outputs ten thousand two hundred thirty four
var text = convert('i was 20 yr old the last year');
console.log(text); // outputs i was tewnty yr old the last year
```
# installation
## npm
```shell
npm i convert-to-words
```
## cdn
```
https://cdn.jsdelivr.net/npm/convert-to-words@1.3.0/index.js
```
# options:

| option      |   decription       | default      |
|-------------|-------------------:|-------------:|
|  lang       | changes the lang the supported languages is English:'en' Spanish:'es'  |   en         |
| numbersOnly | when it set to true it makes the functions  recieve numbers only               |  false       |


## examples:
```js
// bring it
const convert = require('convert-to-words');
// use it
var res = convert(999.999,{lang:'es'});
// console log it
console.log(res); // outputs novecientos noveta y nueve comma novecientos noveta y nueve
```
also you can chage the default of the function
```js
// bring it
const convert = require('convert-to-words');
// changing the default lang
convert.options.lang = 'es';

// making the function recieve numbers only (number could be also pass in as string)
// NOTE: it will throw an error if recives any thing execpt numbers
convert.options.numberOnly = true;

// getting the res
var res = convert('999.99');
// console log it
console.log(res); // outputs novecientos noveta y nueve comma novecientos noveta y nueve
```

# LICENCE
MIT License

Copyright (c) 2019 AliBasicCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
