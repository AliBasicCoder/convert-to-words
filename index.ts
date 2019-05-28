import convertNums from './main/convertNums';
import replace from './src/replace';

interface options {
    numbers?: boolean,
    numbersOnly?: boolean,
    dates?: boolean,
    datesOnly?: boolean,
    binary?: boolean,
    binaryOnly?: boolean,
    lang?: string,
    all?: boolean
}

function convertToWords(toConvert, op?: options) {
    return convertNums(toConvert);
}
export default convertToWords;
module.exports = convertToWords;