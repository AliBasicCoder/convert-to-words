# convert-to-words
[convert-to-words](https://github.com/AliBasicCoder/convert-to-words/) is a small js lib helps you to convert any number up
to 10^300 and also covers deciamal numbers 

# example:
```js
// bring it
const convert = require('convert-to-words');
// use it
var res = convert(10234);
// console log it
console.log(res); // outputs ten thousand two hundred thirty four
```
# installation:
npm:
```shell
npm i convert-to-words
```
# options:

| option      |   decription       | default      |
|-------------|-------------------:|-------------:|
|  lang       | changes the lang   |   en         |
| numbersOnly | when it set to true it makes the functions  recieve numbers only               |  false       |

