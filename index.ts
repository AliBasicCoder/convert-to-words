import convertNums from './main/convertNums';
import Options from './main/Options';
import start from "./main/start";

let options: Options = {
    numbers: true,
    numbersOnly: false,
    lang: 'en'
}

function convertToWords(toConvert: string | number, op?: Options) {
    if (typeof toConvert === 'number') {
        try {
            var str
            if (op) {
                str = convertNums(toConvert, op.lang);
            } else {
                str = convertNums(toConvert, options.lang);
            }
            return str;
        } catch (err) {
            throw new Error("numbers Only should be passed in")
        }
    }
    if (op) {
        return start(toConvert, op);
    }
    else {
        return start(toConvert, options);
    }
}

export default convertToWords;
module.exports = convertToWords;
module.exports.options = options;