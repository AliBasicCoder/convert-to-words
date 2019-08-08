# convert-to-words

[![npm](https://img.shields.io/npm/v/convert-to-words.svg)](https://www.npmjs.com/package/convert-to-words)
[![GitHub](https://img.shields.io/github/license/AliBasicCoder/convert-to-words.svg)](https://github.com/AliBasicCoder/convert-to-words/)
[![npm bundle size](https://img.shields.io/bundlephobia/min/convert-to-words.svg?style=plastic)](https://bundlephobia.com/result?p=convert-to-words@latest)
[![npm](https://img.shields.io/npm/dm/convert-to-words.svg)](https://www.npmjs.com/package/convert-to-words)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAliBasicCoder%2Fconvert-to-words.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2FAliBasicCoder%2Fconvert-to-words?ref=badge_small)

[convert-to-words](https://github.com/AliBasicCoder/convert-to-words/) is a small javaScript TypeScript lib helps you to convert any number up
to 10^300 and also covers decimal numbers and
if its in the numbers you want to convert ar in dome txt you don't
want to change it will do that for you be default 
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
https://cdn.jsdelivr.net/npm/convert-to-words@1.3.2/index.js
```
# options:

| option      |                                                           description | default |
| ----------- | --------------------------------------------------------------------: | ------: |
| lang        | changes the lang the supported languages is English:'en' Spanish:'es' |      en |
| numbersOnly |       when it set to true it makes the functions receive numbers only |   false |


## examples:
```js
// bring it
// this will run on both browser and node
const convertToWords = convertToWords || require('convert-to-words');
// use it
const res = convertToWords(999.999, {lang:'es'});
// console log it
console.log(res); // outputs novecientos noveta y nueve comma novecientos noveta y nueve
```
also you can change the default of the function
```js
// changing the default lang
convert.options.lang = 'es';

// making the function receive numbers only (number could be also pass in as string)
// NOTE: it will throw an error if receives any thing except numbers
convert.options.numberOnly = true;

// getting the res
const res = convert('999.99');
// console log it
console.log(res); // outputs novecientos noveta y nueve comma novecientos noveta y nueve
```

# LICENCE
MIT License

Copyright (c) 2019 AliBasicCoder
