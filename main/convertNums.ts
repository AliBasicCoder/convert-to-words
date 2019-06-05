// main functions imports
import getNames from "../src/getNames";
import spirate from "../src/spirate";
import swithToZeors from '../src/swithToZeros';
// langs arr imports
import English from "../langArrs/englishNumArr";
import convertNumES from "./convertNumES";

function convertNums(number: number | string, lang?: string, op?: string): any {
    var langArr: string[] = English;
    if (!lang) {
        lang = 'en';
    }
    if (lang === 'es') {
        return convertNumES(number);
    }
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0+)([0-9]+)$/;
        var test: any = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += ` zero`;
            }
            res += " " + convertNums(test[2]);
            return res;
        }
        else {
            return convertNums(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000) number = Number(number);
    if (number === 0) return langArr[0];
    if (number === 1) return langArr[1];
    if (number === 2) return langArr[2];
    if (number === 3) return langArr[3];
    if (number === 4) return langArr[4];
    if (number === 5) return langArr[5];
    if (number === 6) return langArr[6];
    if (number === 7) return langArr[7];
    if (number === 8) return langArr[8];
    if (number === 9) return langArr[9];
    if (number === 10) return langArr[10];
    if (number === 11) return langArr[11];
    if (number === 12) return langArr[12];
    if (number === 13) return langArr[13];
    if (number === 14) return langArr[14];
    if (number === 15) return langArr[15];
    if (number === 16) return langArr[16];
    if (number === 17) return langArr[17];
    if (number === 18) return langArr[18];
    if (number === 19) return langArr[19];
    if (number === 20) return langArr[20];
    if (number === 30) return langArr[21];
    if (number === 40) return langArr[22];
    if (number === 50) return langArr[23];
    if (number === 60) return langArr[24];
    if (number === 70) return langArr[25];
    if (number === 80) return langArr[26];
    if (number === 90) return langArr[27];

    if (!Number.isInteger(Number(number))) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str: string = `${convertNums(int, lang)} point ${convertNums(dec, lang, 'dec')}`;
        return str;
    }

    if (number > 10 && number <= 99 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str: string = `${convertNums(fd * 10, lang)}-${convertNums(sd, lang)}`;
        return str;
    }

    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 100);
        var rest: any = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        } else {
            rest = convertNums(rest, lang)
        }
        var str: string;
        if (rest === '' || !rest) {
            str = `${convertNums(fd, lang)} ${langArr[30]}`
        } else {
            str = `${convertNums(fd, lang)} ${langArr[30]} ${rest}`
        }
        return str;
    }

    if (number >= 1000) {
        // cheking if e exits
        var num = String(number);
        if (String(number).indexOf('e') != -1) {
            num = swithToZeors(number);
        }
        var arr = spirate(num);
        var res = '';
        // names
        arr = arr.filter(thing => thing !== '');
        var getter = new getNames(arr, lang);
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                if (nameOfTheNumber) {
                    res += convertNums(arr[i], lang) + ' ' + nameOfTheNumber + ' ';
                } else {
                    res += convertNums(arr[i], lang);
                }
            }
        }
        return res;
    }
}
export default convertNums;