import { Spanish } from "../langArrs/spainshNumArr";
import { getNames } from "../src/getNames";
import { isBetween } from "../src/isBetween";
import { spirate } from "../src/spirate";
import { switchToZeros } from "../src/switchToZeros";

function convertNumES(number: any, op?: any): string {
    const langArr = Spanish;

    if (op === "dec") {
        let res = "";
        number = String(number);
        const regex = /^(0+)([0-9]+)$/;
        const test: any = number.match(regex);
        if (regex.test(number)) {
            for (const t of test[1]) {
                res += ` zero`;
            }
            res += " " + convertNumES(test[2]);
            return res.replace(/[ ]+/g, " ");
        } else {
            return convertNumES(number);
        }
    }

    if (isBetween(Number(number), 0, 999)) { number = Number(number); }

    if (isBetween(number, 0, 30)) {
        return langArr[number];
    }

    if (isBetween(number, 40, 900) && number % 10 === 0) {
        let fact = 10;
        let index = 30;
        for (let i = 40; i < 900; i += fact) {
            index++;
            if (i === number) {
                break;
            }
            if (i === 90) {
                fact = 100;
            }
        }
        return langArr[index];
    }

    if (number >= 1000) {
        // cheeking if e exits
        let num = String(number);
        if (String(number).indexOf("e") !== -1) {
            num = switchToZeros(number);
        }
        let arr = spirate(num);
        let res = "";
        // names
        arr = arr.filter((thing) => thing !== "");
        const getter = new getNames(arr, "es");
        for (const item of arr) {
            const nameOfTheNumber = getter.get();
            if (Number(item) !== 0) {
                res += convertNumES(item) + " " + (nameOfTheNumber || "") + " ";
            }
        }
        return res.replace(/[ ]+/g, " ");
    }

    if (isBetween(number, 31, 99) && Number.isInteger(number)) {
        number = Number(number);
        const fd = Math.floor(number / 10);
        const sd = (number - (fd * 10));
        const str: string = ` ${convertNumES(fd * 10)} y ${convertNumES(sd)}`;
        return str.replace(/[ ]+/g, " ");
    }

    if (isBetween(number, 100, 999) && Number.isInteger(Number(number))) {
        number = Number(number);
        const fd = Math.floor(number / 100);
        let rest: any = (number - (fd * 100));
        if (rest === 0) {
            rest = "";
        } else {
            rest = convertNumES(rest);
        }
        const str: string = `${convertNumES(fd * 100)} ${rest}`;
        return str.replace(/[ ]+/, " ");
    }

    if (!Number.isInteger(number)) {
        const num = String(number);
        const index = num.indexOf(".");
        const dec = num.substring(index + 1, num.length);
        const int = num.substring(0, index);
        const str: string = `${convertNumES(int)} comma ${convertNumES(dec, "dec")}`;
        return str.replace(/[ ]+/g, " ");
    }
    return "";
}
export default convertNumES;
