import Spanish from "../langArrs/spainshNumArr";
import getNames from "../src/getNames";
import spirate from "../src/spirate";
import swithToZeors from '../src/swithToZeros';
import { isBetween } from "../src/isBetween";

function convertNumES(number: any, op?: any): String {
    var langArr = Spanish;
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0+)([0-9]+)$/;
        var test: any = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += ` zero`;
            }
            res += " " + convertNumES(test[2]);
            return res.replace(/[ ]+/g, ' ');
        }
        else {
            return convertNumES(number);
        }
    }

    if (isBetween(Number(number), 0, 999)) number = Number(number);

    if (isBetween(number, 0, 30)) {
        return langArr[number];
    }

    if (number === 40) return langArr[31];
    if (number === 50) return langArr[32];
    if (number === 60) return langArr[33];
    if (number === 70) return langArr[34];
    if (number === 80) return langArr[35];
    if (number === 90) return langArr[36];
    if (number === 100) return langArr[37];
    if (number === 200) return langArr[38];
    if (number === 300) return langArr[39];
    if (number === 400) return langArr[40];
    if (number === 500) return langArr[41];
    if (number === 600) return langArr[42];
    if (number === 700) return langArr[43];
    if (number === 800) return langArr[44];
    if (number === 900) return langArr[45];

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
        var getter = new getNames(arr, 'es');
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                res += convertNumES(arr[i]) + ' ' + (nameOfTheNumber || '') + ' ';
            }
        }
        return res.replace(/[ ]+/g, ' ');
    }

    if (isBetween(number, 31, 99) && Number.isInteger(number)) {
        number = Number(number);
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str: string = ` ${convertNumES(fd * 10)} y ${convertNumES(sd)}`;
        return str.replace(/[ ]+/g, ' ');
    }

    if (isBetween(number, 100, 999) && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 100);
        var rest: any = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        } else {
            rest = convertNumES(rest)
        }
        var str: string = `${convertNumES(fd * 100)} ${rest}`
        return str.replace(/[ ]+/, ' ');
    }

    if (!Number.isInteger(number)) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str: string = `${convertNumES(int)} comma ${convertNumES(dec, 'dec')}`;
        return str.replace(/[ ]+/g, ' ');
    }
    return '';
}
export default convertNumES;
