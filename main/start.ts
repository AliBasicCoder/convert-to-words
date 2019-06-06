import convertNums from './convertNums';
// import ordinal from "./ordinal";
import Options from "./Options";

function start(toConvert: string, op: Options) {
    var regexForNumbers = /[0-9]+(\.[0-9]+)?/g; // /[0-9]+[^stndth]/g;
    // var regexForOrdinal = /[0-9]+[stndth]{2}/g;
    if (op.numbersOnly) {
        try {
            var str = `${convertNums(toConvert, op.lang)} `
            return str;
        } catch (err) {
            throw new Error("numbers Only should be passed in")
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
        toConvert = toConvert.replace(regexForNumbers, str => {
            return convertNums(str, op.lang);
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
    toConvert = toConvert.replace(regexForNumbers, str => {
        return `${convertNums(str, op.lang)} `;
    });
    return toConvert;
}
export default start;