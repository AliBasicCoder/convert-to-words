import Spanish from "../langArrs/spainshNumArr";
import getNames from "../src/getNames";
import spirate from "../src/spirate";
import swithToZeors from '../src/swithToZeros';

function convertNumES(number: any, op?: any): String {
    var langArr = Spanish;
    if (op === 'dec') {
        var res = '';
        number = String(number);
        var regex = /^(0{1,100000000000000})([0-9]+)$/;
        var test: any = number.match(regex);
        if (regex.test(number)) {
            for (var i = 0; i < test[1].length; i++) {
                res += ` zero`;
            }
            res += " " + convertNumES(test[2]);
            return res.replace(/[ ]{1,100300000}/g, ' ');
        }
        else {
            return convertNumES(number);
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
    if (number === 21) return langArr[21];
    if (number === 22) return langArr[22];
    if (number === 23) return langArr[23];
    if (number === 24) return langArr[24];
    if (number === 25) return langArr[25];
    if (number === 26) return langArr[26];
    if (number === 27) return langArr[27];
    if (number === 28) return langArr[28];
    if (number === 29) return langArr[29];
    if (number === 30) return langArr[30];
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
        arr = arr.filter((thing) => thing !== '');
        var getter = new getNames(arr, 'es');
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
        var str: string = ` ${convertNumES(fd * 10)} y ${convertNumES(sd)}`;
        return str.replace(/[ ]+/g, ' ');
    }
    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
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
    if (!Number.isInteger(Number(number))) {
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
