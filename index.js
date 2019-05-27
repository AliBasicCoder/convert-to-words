/* MIT License
* 
* Copyright (c) 2019 AliBasicCoder
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
function swapStr(str, first, last) {
    var arr = str.split('');
    var s = arr[first];
    arr[first] = arr[last];
    arr[last] = s;
    return arr.join('');
}
function swithToZeors(number) {
    var regex = /e\+([0-9]{2,3})/;
    if (!regex.test(number))
        return number;
    var res = number.match(regex);
    var numRegex = /([0-9]*)(\.e\+[0-9]{2,3})/;
    var num = number.substring(0, res['index']);
    for (var i = Number(res[1]); i > 0; i--) {
        if (number.indexOf(".") != -1 && !(numRegex.test(number))) {
            var index = number.indexOf(".");
            number = swapStr(number, index, index + 1);
            number = number.substring(0, res['index']);
            number += "e+" + i;
        }
        if (numRegex.test(number)) {
            for (var y = i; i <= y; y--) {
                num += '0';
            }
        }
    }
    return num.replace(".", '');
}
var getNames = /** @class */ (function () {
    function getNames(arr) {
        this.names = [
            ' thousand',
            ' million',
            ' billion',
            ' trillion',
            ' quadrillion',
            ' quintillion',
            ' sextillion',
            ' septillion',
            ' octillion',
            ' nonillion',
            ' decillion',
            ' undecillion',
            ' doudecillion',
            ' tredecillion',
            ' quattuordecillion',
            ' quindecillion',
            ' sexdecillion',
            ' octodecillion',
            ' novemdecillion',
            ' vigitillion',
            ' unvigintillion',
            ' duovigintillion',
            ' trevigintillion',
            ' quattuorvigintillion',
            ' quinvigintillion',
            ' sexvigintillion',
            ' septenvigintillion',
            ' octavigintillion',
            ' novemvigintillion',
            ' trigintillion',
            ' untrigintillion',
            ' googol',
            ' tretrigintillion',
            ' quattuortrigintillion',
            ' quintrigintillion',
            ' sextrigintillion',
            ' septentrigintillion',
            ' octatrigintillion',
            ' novemtrigintillion',
            ' quadragintillion',
            ' unquadragintillion',
            ' duoquadragintillion',
            ' trequadragintillion',
            ' quattuorquadragintillion',
            ' quinquadragintillion',
            ' sexquadragintillion',
            ' septenquadragintillion',
            ' octaquadragintillion',
            ' novemquadragintillion',
            ' unquinquagintillion',
            ' duoquinquagintillion',
            ' trequinquagintillion',
            ' quattuorquinquagintillion',
            ' quinquinquagintillion',
            ' sexquinquagintillion',
            ' septenquinquagintillion',
            ' octaquinquagintillion',
            ' novemquinquagintillion',
            ' unsexagintillion',
            ' duosexagintillion',
            ' tresexagintillion',
            ' quattuorsexagintillion',
            ' quinsexagintillion',
            ' sexsexagintillion',
            ' septensexagintillion',
            ' octasexagintillion',
            ' novemsexagintillion',
            ' unseptuagintillion',
            ' duoseptuagintillion',
            ' treseptuagintillion',
            ' quattuorseptuagintillion',
            ' quinseptuagintillion',
            ' sexseptuagintillion',
            ' septenseptuagintillion',
            ' octaseptuagintillion',
            ' novemseptuagintillion',
            ' unoctogintillion',
            ' duooctogintillion',
            ' treoctogintillion',
            ' quattuoroctogintillion',
            ' quinoctogintillion',
            ' sexoctogintillion',
            ' septenoctogintillion',
            ' octaoctogintillion',
            ' novemoctogintillion',
            ' unnonagintillion',
            ' duononagintillion',
            ' trenonagintillion',
            ' quattuornonagintillion',
            ' quinnonagintillion',
            ' sexnonagintillion',
            ' septennonagintillion',
            ' octanonagintillion',
            ' novemnonagintillion'
        ];
        this.getCalled = 0;
        this.arrLenght = arr.length - 1;
        this.index = this.arrLenght;
    }
    getNames.prototype.get = function () {
        this.getCalled++;
        if (this.getCalled === (this.arrLenght + 1)) {
            return undefined;
        }
        this.index--;
        return this.names[this.index];
    };
    return getNames;
}());
function convertToWords(number, op) {
    //number = Number(number);
    if (number === NaN) {
        return NaN;
    }
    if (op === 'dec') {
        var res = '';
        var regex = /(0{1,100000000000000})([0-9]+)$/;
        var test = number.match(regex);
        if (regex.test(number)) {
            console.log("cond 1");
            for (var i = 0; i < test[1].length; i++) {
                res += ' zero';
            }
            res += " " + convertToWords(test[2]);
            return res.replace(/[ ]{1,100300000}/g, ' ');
        }
        else {
            console.log("cond 2");
            return convertToWords(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000)
        number = Number(number);
    if (number === 0)
        return 'zero';
    if (number === 1)
        return 'one';
    if (number === 2)
        return 'two';
    if (number === 3)
        return 'three';
    if (number === 4)
        return 'four';
    if (number === 5)
        return 'five';
    if (number === 6)
        return 'six';
    if (number === 7)
        return 'seven';
    if (number === 8)
        return 'eight';
    if (number === 9)
        return 'nine';
    if (number === 10)
        return 'ten';
    if (number === 11)
        return 'eleven';
    if (number === 12)
        return 'tewlve';
    if (number === 13)
        return 'thirteen';
    if (number === 14)
        return 'fourteen';
    if (number === 15)
        return 'fifteen';
    if (number === 16)
        return 'sixteen';
    if (number === 17)
        return 'seventeen';
    if (number === 18)
        return 'eighteen';
    if (number === 19)
        return 'nineteen';
    if (number === 20)
        return 'twenty';
    if (number === 30)
        return 'thirty';
    if (number === 40)
        return 'fourty';
    if (number === 50)
        return 'fifty';
    if (number === 60)
        return 'sixty';
    if (number === 70)
        return 'seventy';
    if (number === 80)
        return 'eighty';
    if (number === 90)
        return 'ninety';
    if (!Number.isInteger(Number(number))) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str = convertToWords(int) + " point " + convertToWords(dec, 'dec');
        return str.replace(/[ ]{1,100300000}/g, ' ');
    }
    if (number > 10 && number <= 99 && Number.isInteger(number)) {
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str = " " + convertToWords(fd * 10) + " " + convertToWords(sd);
        return str.replace(/[ ]{1,100300000}/g, ' ');
    }
    if (number >= 100 && number <= 999 && Number.isInteger(number)) {
        var fd = Math.floor(number / 100);
        var rest = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        }
        else {
            rest = convertToWords(rest);
        }
        var str = convertToWords(fd) + " hundred " + rest;
        return str.replace(/[ ]{1,1000000}/, ' ');
    }
    if (number >= 1000) {
        // cheking if e exits
        var num = String(number);
        if (String(number).indexOf('e') != -1) {
            num = swithToZeors(String(number));
        }
        var arr = spirate(num);
        var res = '';
        // names
        arr = arr.filter(function (thing) { return thing !== ''; });
        var getter = new getNames(arr);
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                res += convertToWords(arr[i]) + ' ' + (nameOfTheNumber || '') + ' ';
            }
        }
        return res.replace(/[ ]{1,100300000}/g, ' ');
    }
}
function spirate(num) {
    var arr = [];
    for (var i = num.length - 1; i >= 0; i = i - 3) {
        var str = num[i] + (num[i - 1] || '') + (num[i - 2] || '');
        if (str.length === 2) {
            str = swapStr(str, 1, 0);
        }
        if (str.length === 3) {
            str = swapStr(str, 2, 0);
        }
        arr.push(str);
    }
    return arr.reverse();
}