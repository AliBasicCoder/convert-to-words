import { getNames } from "../src/getNames";
import { spirate } from "../src/spirate";
import { switchToZeros } from "../src/switchToZeros";
import { English } from "../langArrs/englishNumArr";
import convertNumES from "./convertNumES";
import { isBetween } from "../src/isBetween";

export const convertNums = (number: number | string, lang?: string, op?: string): any => {
    const langArr: string[] = English;
    if (!lang) {
        lang = "en";
    }
    if (lang === "es") {
        return convertNumES(number);
    }
    if (op === "dec") {
        let res = "";
        number = String(number);
        const regex = /^(0+)([0-9]+)$/;
        const test: any = number.match(regex);
        if (regex.test(number)) {
            for (const item of test[1]) {
                res += ` zero`;
            }
            res += " " + convertNums(test[2]);
            return res;
        } else {
            return convertNums(number);
        }
    }
    if (Number(number) >= 0 && Number(number) < 1000) { number = Number(number); }

    if (isBetween(Number(number), 0, 20)) {
        return langArr[Number(number)];
    }

    if (isBetween(Number(number), 21, 90) && Number(number) % 10 === 0) {
        const fact = 10;
        let index = 21;
        for (let i = 40; i < 900; i += fact) {
            index++;
            if (i === number) {
                break;
            }
        }
        return langArr[index];
    }

    if (!Number.isInteger(Number(number))) {
        const num = String(number);
        const index = num.indexOf(".");
        const dec = num.substring(index + 1, num.length);
        const int = num.substring(0, index);
        const str: string = `${convertNums(int, lang)} point ${convertNums(dec, lang, "dec")}`;
        return str;
    }

    if (number > 10 && number <= 99 && Number.isInteger(Number(number))) {
        number = Number(number);
        const fd = Math.floor(number / 10);
        const sd = (number - (fd * 10));
        const str: string = `${convertNums(fd * 10, lang)}-${convertNums(sd, lang)}`;
        return str;
    }

    if (number >= 100 && number <= 999 && Number.isInteger(Number(number))) {
        number = Number(number);
        const fd = Math.floor(number / 100);
        let rest: any = (number - (fd * 100));
        if (rest === 0) {
            rest = "";
        } else {
            rest = convertNums(rest, lang);
        }
        let str: string;
        if (rest === "" || !rest) {
            str = `${convertNums(fd, lang)} ${langArr[30]}`;
        } else {
            str = `${convertNums(fd, lang)} ${langArr[30]} ${rest}`;
        }
        return str;
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
        const getter = new getNames(arr, lang);
        for (const item of arr) {
            const nameOfTheNumber = getter.get();
            if (Number(item) !== 0) {
                if (nameOfTheNumber) {
                    res += convertNums(item, lang) + " " + nameOfTheNumber + " ";
                } else {
                    res += convertNums(item, lang);
                }
            }
        }
        return res;
    }
};
