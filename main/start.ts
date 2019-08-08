import convertNums from './convertNums';
import Options from "./Options";
//// import ordinal from "./ordinal";

function start(toConvert: string, op: Options) {
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
    //// ordinals
    //// const regexForOrdinal = /[0-9]+[stndth]{2}/g;

    //// if (op.replaceOrdinalOnly) {
    ////     toConvert = toConvert.replace(
    ////        regexForOrdinal,
    ////        str => ordinal(str, op.lang)
    ////    )
    ////     return toConvert;
    //// }

    //// if (op.ordinalOnly) {
    ////     try {
    ////         const str: string = ordinal(toConvert, op.lang);
    ////         return str;
    ////     } catch (e) {
    ////         throw new Error('ordinal only should be past in')
    ////     }
    //// }

    return "";
}
export default start;