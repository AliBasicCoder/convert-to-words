module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(200);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spainshNumArr_1 = __importDefault(__webpack_require__(309));
var getNames_1 = __importDefault(__webpack_require__(666));
var spirate_1 = __importDefault(__webpack_require__(572));
var swithToZeros_1 = __importDefault(__webpack_require__(728));
function convertNumES(number, op) {
    var langArr = spainshNumArr_1.default;
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0{1,100000000000000})([0-9]+)$/;
        var test = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += " zero";
            }
            res += " " + convertNumES(test[2]);
            return res.replace(/[ ]{1,100300000}/g, ' ');
        }
        else {
            return convertNumES(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000)
        number = Number(number);
    if (number === 0)
        return langArr[0];
    if (number === 1)
        return langArr[1];
    if (number === 2)
        return langArr[2];
    if (number === 3)
        return langArr[3];
    if (number === 4)
        return langArr[4];
    if (number === 5)
        return langArr[5];
    if (number === 6)
        return langArr[6];
    if (number === 7)
        return langArr[7];
    if (number === 8)
        return langArr[8];
    if (number === 9)
        return langArr[9];
    if (number === 10)
        return langArr[10];
    if (number === 11)
        return langArr[11];
    if (number === 12)
        return langArr[12];
    if (number === 13)
        return langArr[13];
    if (number === 14)
        return langArr[14];
    if (number === 15)
        return langArr[15];
    if (number === 16)
        return langArr[16];
    if (number === 17)
        return langArr[17];
    if (number === 18)
        return langArr[18];
    if (number === 19)
        return langArr[19];
    if (number === 20)
        return langArr[20];
    if (number === 21)
        return langArr[21];
    if (number === 22)
        return langArr[22];
    if (number === 23)
        return langArr[23];
    if (number === 24)
        return langArr[24];
    if (number === 25)
        return langArr[25];
    if (number === 26)
        return langArr[26];
    if (number === 27)
        return langArr[27];
    if (number === 28)
        return langArr[28];
    if (number === 29)
        return langArr[29];
    if (number === 30)
        return langArr[30];
    if (number === 40)
        return langArr[31];
    if (number === 50)
        return langArr[32];
    if (number === 60)
        return langArr[33];
    if (number === 70)
        return langArr[34];
    if (number === 80)
        return langArr[35];
    if (number === 90)
        return langArr[36];
    if (number === 100)
        return langArr[37];
    if (number === 200)
        return langArr[38];
    if (number === 300)
        return langArr[39];
    if (number === 400)
        return langArr[40];
    if (number === 500)
        return langArr[41];
    if (number === 600)
        return langArr[42];
    if (number === 700)
        return langArr[43];
    if (number === 800)
        return langArr[44];
    if (number === 900)
        return langArr[45];
    if (number >= 1000) {
        // cheking if e exits
        var num = String(number);
        if (String(number).indexOf('e') != -1) {
            num = swithToZeros_1.default(number);
        }
        var arr = spirate_1.default(num);
        var res = '';
        // names
        arr = arr.filter(function (thing) { return thing !== ''; });
        var getter = new getNames_1.default(arr, 'es');
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                res += convertNumES(arr[i]) + ' ' + (nameOfTheNumber || '') + ' ';
            }
        }
        return res.replace(/[ ]+/g, ' ');
    }
    if (number > 30 && number <= 99 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str = " " + convertNumES(fd * 10) + " y " + convertNumES(sd);
        return str.replace(/[ ]+/g, ' ');
    }
    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 100);
        var rest = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        }
        else {
            rest = convertNumES(rest);
        }
        var str = convertNumES(fd * 100) + " " + rest;
        return str.replace(/[ ]+/, ' ');
    }
    if (!Number.isInteger(Number(number))) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str = convertNumES(int) + " comma " + convertNumES(dec, 'dec');
        return str.replace(/[ ]+/g, ' ');
    }
    return '';
}
exports.default = convertNumES;


/***/ }),

/***/ 145:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertNums_1 = __importDefault(__webpack_require__(218));
function start(toConvert, op) {
    var regexForNumbers = /[0-9]+/g; // /[0-9]+[^stndth]/g;
    // var regexForOrdinal = /[0-9]+[stndth]{2}/g;
    if (op.numbersOnly) {
        try {
            var str = convertNums_1.default(toConvert, op.lang) + " ";
            return str;
        }
        catch (err) {
            throw new Error("numbers Only should be passed in");
        }
    }
    // if (op.ordinalOnly) {
    //     try {
    //         var str: string = ordinal(toConvert, op.lang);
    //         return str;
    //     } catch (e) {
    //         throw new Error('ordinal only should be past in')
    //     }
    // }
    // // numbers
    if (op.replaceNumbersOnly) {
        toConvert = toConvert.replace(regexForNumbers, function (str) {
            return convertNums_1.default(str, op.lang);
        });
        return toConvert;
    }
    // // ordinals
    // if (op.replaceOrdinalOnly) {
    //     toConvert = toConvert.replace(regexForOrdinal, str => {
    //         return `${ordinal(str, op.lang)}`;
    //     });
    //     return toConvert;
    // }
    toConvert = String(toConvert);
    // toConvert = toConvert.replace(regexForOrdinal, str => {
    //     return `${ordinal(str, op.lang)} `;
    // });
    toConvert = toConvert.replace(regexForNumbers, function (str) {
        return convertNums_1.default(str, op.lang) + " ";
    });
    return toConvert;
}
exports.default = start;


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertNums_1 = __importDefault(__webpack_require__(218));
var start_1 = __importDefault(__webpack_require__(145));
var options = {
    numbers: true,
    numbersOnly: false,
    lang: 'en'
};
function convertToWords(toConvert, op) {
    if (typeof toConvert === 'number') {
        try {
            var str;
            if (op) {
                str = convertNums_1.default(toConvert, op.lang);
            }
            else {
                str = convertNums_1.default(toConvert, options.lang);
            }
            return str;
        }
        catch (err) {
            throw new Error("numbers Only should be passed in");
        }
    }
    if (op) {
        return start_1.default(toConvert, op);
    }
    else {
        return start_1.default(toConvert, options);
    }
}
exports.default = convertToWords;
module.exports = convertToWords;
module.exports.options = options;


/***/ }),

/***/ 218:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// main functions imports
var getNames_1 = __importDefault(__webpack_require__(666));
var spirate_1 = __importDefault(__webpack_require__(572));
var swithToZeros_1 = __importDefault(__webpack_require__(728));
// langs arr imports
var englishNumArr_1 = __importDefault(__webpack_require__(365));
var convertNumES_1 = __importDefault(__webpack_require__(6));
function convertNums(number, lang, op) {
    var langArr = englishNumArr_1.default;
    if (!lang) {
        lang = 'en';
    }
    if (lang === 'es') {
        return convertNumES_1.default(number);
    }
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0+)([0-9]+)$/;
        var test = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += " zero";
            }
            res += " " + convertNums(test[2]);
            return res;
        }
        else {
            return convertNums(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000)
        number = Number(number);
    if (number === 0)
        return langArr[0];
    if (number === 1)
        return langArr[1];
    if (number === 2)
        return langArr[2];
    if (number === 3)
        return langArr[3];
    if (number === 4)
        return langArr[4];
    if (number === 5)
        return langArr[5];
    if (number === 6)
        return langArr[6];
    if (number === 7)
        return langArr[7];
    if (number === 8)
        return langArr[8];
    if (number === 9)
        return langArr[9];
    if (number === 10)
        return langArr[10];
    if (number === 11)
        return langArr[11];
    if (number === 12)
        return langArr[12];
    if (number === 13)
        return langArr[13];
    if (number === 14)
        return langArr[14];
    if (number === 15)
        return langArr[15];
    if (number === 16)
        return langArr[16];
    if (number === 17)
        return langArr[17];
    if (number === 18)
        return langArr[18];
    if (number === 19)
        return langArr[19];
    if (number === 20)
        return langArr[20];
    if (number === 30)
        return langArr[21];
    if (number === 40)
        return langArr[22];
    if (number === 50)
        return langArr[23];
    if (number === 60)
        return langArr[24];
    if (number === 70)
        return langArr[25];
    if (number === 80)
        return langArr[26];
    if (number === 90)
        return langArr[27];
    if (!Number.isInteger(Number(number))) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str = convertNums(int, lang) + " point " + convertNums(dec, lang, 'dec');
        return str;
    }
    if (number > 10 && number <= 99 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str = convertNums(fd * 10, lang) + "-" + convertNums(sd, lang);
        return str;
    }
    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 100);
        var rest = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        }
        else {
            rest = convertNums(rest, lang);
        }
        var str;
        if (rest === '' || !rest) {
            str = convertNums(fd, lang) + " " + langArr[30];
        }
        else {
            str = convertNums(fd, lang) + " " + langArr[30] + " " + rest;
        }
        return str;
    }
    if (number >= 1000) {
        // cheking if e exits
        var num = String(number);
        if (String(number).indexOf('e') != -1) {
            num = swithToZeros_1.default(number);
        }
        var arr = spirate_1.default(num);
        var res = '';
        // names
        arr = arr.filter(function (thing) { return thing !== ''; });
        var getter = new getNames_1.default(arr, lang);
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                if (nameOfTheNumber) {
                    res += convertNums(arr[i], lang) + ' ' + nameOfTheNumber + ' ';
                }
                else {
                    res += convertNums(arr[i], lang);
                }
            }
        }
        return res;
    }
}
exports.default = convertNums;


/***/ }),

/***/ 309:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Spanish = [
    'zero',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'sies',
    'siete',
    'ocho',
    'nueve',
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciseis',
    'diecisiete',
    'dieciocho',
    'diecinueve',
    'veinte',
    'veintiuno',
    'veintidós',
    'veintitres',
    'veinticuatro',
    'veinticinco',
    'veintisies',
    'veintisiete',
    'veintiocho',
    'veintinueve',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noveta',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos'
];
exports.default = Spanish;


/***/ }),

/***/ 365:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var English = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'tewlve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    'point',
    '-',
    'hundred'
];
exports.default = English;


/***/ }),

/***/ 517:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function swapStr(str, first, last) {
    var arr = str.split('');
    var s = arr[first];
    arr[first] = arr[last];
    arr[last] = s;
    return arr.join('');
}
exports.default = swapStr;


/***/ }),

/***/ 555:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BigEnglish = [
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion',
    'undecillion',
    'doudecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion',
    'sexdecillion',
    'octodecillion',
    'novemdecillion',
    'vigitillion',
    'unvigintillion',
    'duovigintillion',
    'trevigintillion',
    'quattuorvigintillion',
    'quinvigintillion',
    'sexvigintillion',
    'septenvigintillion',
    'octavigintillion',
    'novemvigintillion',
    'trigintillion',
    'untrigintillion',
    'googol',
    'tretrigintillion',
    'quattuortrigintillion',
    'quintrigintillion',
    'sextrigintillion',
    'septentrigintillion',
    'octatrigintillion',
    'novemtrigintillion',
    'quadragintillion',
    'unquadragintillion',
    'duoquadragintillion',
    'trequadragintillion',
    'quattuorquadragintillion',
    'quinquadragintillion',
    'sexquadragintillion',
    'septenquadragintillion',
    'octaquadragintillion',
    'novemquadragintillion',
    'unquinquagintillion',
    'duoquinquagintillion',
    'trequinquagintillion',
    'quattuorquinquagintillion',
    'quinquinquagintillion',
    'sexquinquagintillion',
    'septenquinquagintillion',
    'octaquinquagintillion',
    'novemquinquagintillion',
    'unsexagintillion',
    'duosexagintillion',
    'tresexagintillion',
    'quattuorsexagintillion',
    'quinsexagintillion',
    'sexsexagintillion',
    'septensexagintillion',
    'octasexagintillion',
    'novemsexagintillion',
    'unseptuagintillion',
    'duoseptuagintillion',
    'treseptuagintillion',
    'quattuorseptuagintillion',
    'quinseptuagintillion',
    'sexseptuagintillion',
    'septenseptuagintillion',
    'octaseptuagintillion',
    'novemseptuagintillion',
    'unoctogintillion',
    'duooctogintillion',
    'treoctogintillion',
    'quattuoroctogintillion',
    'quinoctogintillion',
    'sexoctogintillion',
    'septenoctogintillion',
    'octaoctogintillion',
    'novemoctogintillion',
    'unnonagintillion',
    'duononagintillion',
    'trenonagintillion',
    'quattuornonagintillion',
    'quinnonagintillion',
    'sexnonagintillion',
    'septennonagintillion',
    'octanonagintillion',
    'novemnonagintillion'
];
exports.default = BigEnglish;


/***/ }),

/***/ 572:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swapStr_1 = __importDefault(__webpack_require__(517));
function spirate(num) {
    var arr = [];
    for (var i = num.length - 1; i >= 0; i = i - 3) {
        var str = num[i] + (num[i - 1] || '') + (num[i - 2] || '');
        if (str.length === 2) {
            str = swapStr_1.default(str, 1, 0);
        }
        if (str.length === 3) {
            str = swapStr_1.default(str, 2, 0);
        }
        arr.push(str);
    }
    return arr.reverse();
}
exports.default = spirate;


/***/ }),

/***/ 666:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var english_1 = __importDefault(__webpack_require__(555));
var spanish_1 = __importDefault(__webpack_require__(964));
var getNames = /** @class */ (function () {
    function getNames(arr, lang) {
        this.names = english_1.default;
        if (lang === 'es') {
            this.names = spanish_1.default;
        }
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
exports.default = getNames;


/***/ }),

/***/ 728:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swapStr_1 = __importDefault(__webpack_require__(517));
function swithToZeors(number) {
    var number = String(number);
    var regex = /e\+([0-9]{2,3})/;
    if (!regex.test(number))
        return number;
    var res = number.match(regex);
    var numRegex = /([0-9]* )(\.e\+[0-9]{2,3})/;
    var num = number.substring(0, res['index']);
    for (var i = Number(res[1]); i > 0; i--) {
        if (number.indexOf(".") != -1 && !(numRegex.test(number))) {
            var index = number.indexOf(".");
            number = swapStr_1.default(number, index, index + 1);
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
exports.default = swithToZeors;


/***/ }),

/***/ 964:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Spanish = [
    'mil',
    'millón',
    'mil millones',
    "trillón",
    'cuatrillón',
    'trillón',
    'sextillion',
    'septillion',
    'octillion',
    'no billón',
    'decillion',
    'undecillion',
    'doudecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion',
    'sexdecillion',
    'octodecillion',
    'novemdecillion',
    'vigitillion',
    'unvigintillion',
    'duovigintillion',
    'trevigintillion',
    'quattuorvigintillion',
    'quinvigintillion',
    'sexvigintillion',
    'septenvigintillion',
    'octavigintillion',
    'novemvigintillion',
    'trigintillion',
    'unigintillion',
    'googol',
    'tretrigintillion',
    'quattuortrigintillion',
    'quintrigintillion',
    'sextrigintillion',
    'septentrigintillion',
    'octatrigintillion',
    'Novemtrigintillion',
    'quadragintillion',
    'unquadragintillion',
    'duoquadragintillion',
    'trequadragintillion',
    'quattuorquadragintillion',
    'quinquadragintillion',
    'sexquadragintillion',
    'septenquadragintillion',
    'octaquadragintillion',
    'novemquadragintillion',
    'unquinquagintillion',
    'duoquinquagintillion',
    'trequinquagintillion',
    'quattuorquinquagintillion',
    'quinquinquagintillion',
    'sexquinquagintillion',
    'septenquinquagintillion',
    'octaquinquagintillion',
    'Novemquinquagintillion',
    'unsexagintillion',
    'duosexagintillion',
    'tresexagintillion',
    'quattuorsexagintillion',
    'quinsexagintillion',
    'sexsexagintillion',
    'septensexagintillion',
    'Octasexagintillion',
    'novemsexagintillion',
    'unseptuagintillion',
    'duoseptuagintillion',
    'treseptuagintillion',
    'quattuorseptuagintillion',
    'quinseptuagintillion',
    'sexseptuagintillion',
    'septenseptuagintillion',
    'octaseptuagintillion',
    'novemseptuagintillion',
    'Unoctogintillion',
    'duooctogintillion',
    'treoctogintillion',
    'quattuoroctogintillion',
    'quinoctogintillion',
    'sexoctogintillion',
    'septenoctogintillion',
    'octaoctogintillion',
    'Novemoctogintillion',
    'unonagintillion',
    'duononagintillion',
    'trenonagintillion',
    'quattuornonagintillion',
    'Quinnonagintillion',
    'sexnonagintillion',
    'septennonagintillion',
    'octanonagintillion',
    'novemnonagintillion'
];
exports.default = Spanish;


/***/ })

/******/ });