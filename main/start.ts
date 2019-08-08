import { convertNums } from './convertNums';
import { Options } from "./Options";

export const start = (toConvert: string, op: Options) => {
    const regexForNumbers = /[0-9]+(\.[0-9]+)?/g;

    if (op.numbersOnly) {
        try {
            const str = convertNums(toConvert, op.lang)
            return str;
        } catch (err) {
            throw new Error("numbers Only should be passed in")
        }
    }

    // numbers
    if (op.replaceNumbersOnly) {
        toConvert = toConvert.replace(
            regexForNumbers,
            str => convertNums(str, op.lang)
        );
        return toConvert;
    }

    return "";
};
