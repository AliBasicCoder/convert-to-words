# convert-to-words
[![npm version](https://img.shields.io/static/v1.svg?label=npm%20version&message=1.2.5&color=green)](https://www.npmjs.com/package/convert-to-words)
[![LICENSE](https://img.shields.io/static/v1.svg?label=LICENSE%20version&message=MIT&color=green)](https://github.com/AliBasicCoder/convert-to-words/LICENSE)

[convert-to-words](https://github.com/AliBasicCoder/convert-to-words/) is a small javaScript TypeScript lib helps you to convert any number up
to 10^300 and also covers deciamal numbers and
if its in the numbers you want to convert ar in dome txt you don't
want to cahnge it will do that for you be default 
# example:
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
# installation:
npm:
```shell
npm i convert-to-words
```
# options:

| option      |   decription       | default      |
|-------------|-------------------:|-------------:|
|  lang       | changes the lang the supported languages is English:'en' Spanish:'es'  |   en         |
| numbersOnly | when it set to true it makes the functions  recieve numbers only               |  false       |
NOTE: the spanish support still beta how ever it will work fine
up to 999.999 the full support will come soon

## examples:
```js
// bring it
const convert = require('convert-to-words');
// use it
var res = convert(999.999,{lang:'es'});
// console log it
console.log(res); // outputs novecientos noveta y nueve comma novecientos noveta y nueve
```