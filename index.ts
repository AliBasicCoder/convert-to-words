import convertNums from './main/convertNums';

interface options {
    numbers?: boolean,
    numbersOnly?: boolean,
    replaceNumbersOnly: boolean,
    dates?: boolean,
    datesOnly?: boolean,
    binary?: boolean,
    binaryOnly?: boolean,
    lang?: string,
    all?: boolean
}
// wt.default.lang = 'es'
function convertToWords(toConvert: string | number, op?: options) {
    var regexForNumbers = /[0-9]+/g;
    var regexForBinary = /[0-1]+/g;
    if(typeof toConvert === 'number'){
        try {
            var str = convertNums(toConvert, op.lang || null);
            return str;
        } catch (err) {
            throw new Error("numbers Only should be passed in")
        }
    }
    if (op) {
        if (op.numbersOnly) {
            try {
                var str = convertNums(toConvert, op.lang || null);
                return str;
            } catch (err) {
                throw new Error("numbers Only should be passed in")
            }
        }
        if (op.all) {
            toConvert = String(toConvert);
            console.log(op.lang);
            toConvert = toConvert.replace(regexForNumbers, str => {
                return convertNums(str, op.lang || null);
            });
        }
    } else {
        toConvert = String(toConvert);
        toConvert = toConvert.replace(regexForNumbers, str => {
            return convertNums(str);
        });
    }
    return toConvert;
}
export default convertToWords;
//@ts-ignore
module.exports = convertToWords;