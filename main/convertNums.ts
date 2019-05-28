import getNames from "../src/getNames";
import spirate from "../src/spirate";
import swithToZeors from '../src/swithToZeros';

function convertNums(number: number | string, op?: string): any {
    //number = Number(number);
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0{1,100000000000000})([0-9]+)$/;
        var test: any = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += ' zero';
            }
            res += " " + convertNums(test[2]);
            return res.replace(/[ ]{1,100300000}/g, ' ');
        }
        else {
            return convertNums(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000) number = Number(number);
    if (number === 0) return 'zero'
    if (number === 1) return 'one'
    if (number === 2) return 'two'
    if (number === 3) return 'three'
    if (number === 4) return 'four'
    if (number === 5) return 'five'
    if (number === 6) return 'six'
    if (number === 7) return 'seven'
    if (number === 8) return 'eight'
    if (number === 9) return 'nine'
    if (number === 10) return 'ten'
    if (number === 11) return 'eleven'
    if (number === 12) return 'tewlve'
    if (number === 13) return 'thirteen'
    if (number === 14) return 'fourteen'
    if (number === 15) return 'fifteen'
    if (number === 16) return 'sixteen'
    if (number === 17) return 'seventeen'
    if (number === 18) return 'eighteen'
    if (number === 19) return 'nineteen'
    if (number === 20) return 'twenty'
    if (number === 30) return 'thirty'
    if (number === 40) return 'fourty'
    if (number === 50) return 'fifty'
    if (number === 60) return 'sixty'
    if (number === 70) return 'seventy'
    if (number === 80) return 'eighty'
    if (number === 90) return 'ninety'

    if (!Number.isInteger(Number(number))) {
        var num = String(number);
        var index = num.indexOf(".");
        var dec = num.substring(index + 1, num.length);
        var int = num.substring(0, index);
        var str: string = `${convertNums(int)} point ${convertNums(dec, 'dec')}`;
        return str.replace(/[ ]{1,100300000}/g, ' ');
    }

    if (number > 10 && number <= 99 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 10);
        var sd = (number - (fd * 10));
        var str: string = ` ${convertNums(fd * 10)} ${convertNums(sd)}`;
        return str.replace(/[ ]{1,100300000}/g, ' ');
    }

    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
        number = Number(number);
        var fd = Math.floor(number / 100);
        var rest: any = (number - (fd * 100));
        if (rest === 0) {
            rest = '';
        } else {
            rest = convertNums(rest)
        }
        var str: string = `${convertNums(fd)} hundred ${rest}`
        return str.replace(/[ ]{1,1000000}/, ' ');
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
        arr = arr.filter((thing) => thing !== '');
        var getter = new getNames(arr);
        for (var i = 0; i < arr.length; i++) {
            var nameOfTheNumber = getter.get();
            if (Number(arr[i]) != 0) {
                res += convertNums(arr[i]) + ' ' + (nameOfTheNumber || '') + ' ';
            }
        }
        return res.replace(/[ ]{1,100300000}/g, ' ');
    }
}
export default convertNums;